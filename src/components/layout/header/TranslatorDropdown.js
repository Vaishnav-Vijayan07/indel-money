"use client";

import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// All 22 languages in the Constitution's Eighth Schedule except Bodo and
// Kashmiri, which the backend's translation provider (Google's
// translate-pa.googleapis.com widget endpoint) does not support under any
// locale code — every code tried for them either errors or is silently
// echoed back untranslated.
const TRANSLATION_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "as", label: "অসমীয়া" },
  { code: "bn", label: "বাংলা" },
  { code: "doi", label: "डोगरी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "hi", label: "हिन्दी" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "kok", label: "कोंकणी" },
  { code: "mai", label: "मैथिली" },
  { code: "ml", label: "മലയാളം" },
  { code: "mni-Mtei", label: "ꯃꯤꯇꯩꯂꯣꯟ" },
  { code: "mr", label: "मराठी" },
  { code: "ne", label: "नेपाली" },
  { code: "or", label: "ଓଡ଼ିଆ" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "sa", label: "संस्कृतम्" },
  { code: "sat", label: "ᱥᱟᱱᱛᱟᱲᱤ" },
  { code: "sd", label: "سنڌي" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "ur", label: "اردو" },
];


const BG_TRANSLATE_ENDPOINT = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/translate`;

// Text nodes directly inside these are never prose: a <textarea>'s text child is
// the user's own typed value, and the rest are code/markup containers.
// <select>/<option> are deliberately NOT here — option labels are real UI text.
// The language switcher opts itself out with translate="no" instead, so its
// native labels (हिन्दी, தமிழ்) survive.
const SKIP_PARENT_TAGS = new Set([
  "script",
  "style",
  "noscript",
  "iframe",
  "svg",
  "path",
  "link",
]);

// User-visible text that lives in an attribute instead of a text node. The
// TreeWalker only reports text nodes, so without a parallel pass over these the
// strings are unreachable and always render in English.
const TRANSLATABLE_ATTRS = ["placeholder", "title", "aria-label", "alt"];

// Standard HTML opt-out, honoured on any ancestor.
const NO_TRANSLATE_SELECTOR = '[translate="no"], .notranslate';

// <head> metadata. Only the <title> is user-visible (browser tab); the meta tags
// are translated for completeness but carry no SEO weight, since crawlers read
// the server-rendered HTML and never run this pass.
const METADATA_SELECTOR = 'meta[name="description"], meta[property="og:title"], meta[property="og:description"]';

const TEXT_SLOT = "#text";

// Cached across the whole session so re-translating a page (route change,
// reopening a dropdown, etc.) doesn't re-hit the translate API for text
// we've already translated once.
const translationCache = new Map();

// DeskHeader and MobHeader each mount their own <TranslatorDropdown/> (only
// one is ever visible per viewport via CSS, but both are always live). A
// module-level store, rather than per-instance useState, is what keeps them
// from independently drifting: without it, each instance owns its own copy
// of "the" selected language, and whichever one still thinks it's "en"
// synchronously reverts translated text on the next route change while the
// other is mid-fetch re-translating it - a race on the shared document.body.
let sharedLanguage = "en";
let hasHydratedLanguage = false;
const languageListeners = new Set();

function getSharedLanguageSnapshot() {
  return sharedLanguage;
}

// Must never read the mutable sharedLanguage var - this component renders on
// the server too, and that module state is process-lifetime, not
// per-request, so leaking it into SSR output would bleed one user's
// selection into another concurrent request's initial HTML.
function getServerLanguageSnapshot() {
  return "en";
}

function subscribeToSharedLanguage(listener) {
  languageListeners.add(listener);
  return () => languageListeners.delete(listener);
}

function setSharedLanguage(next) {
  if (next === sharedLanguage) return;
  sharedLanguage = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem("siteLanguage", next);
  }
  languageListeners.forEach((listener) => listener());
}

// Runs from every mounted instance's mount effect, but the module-level
// guard means only the first one to fire actually reads storage - order
// independent, which is what removes the old two-instance mount race.
function hydrateSharedLanguageOnce() {
  if (hasHydratedLanguage) return;
  hasHydratedLanguage = true;
  if (typeof window === "undefined") return;
  const stored = window.localStorage.getItem("siteLanguage");
  if (stored && stored !== sharedLanguage) {
    setSharedLanguage(stored);
  }
}

// Distinguishes prose from identifiers. Attribute values especially are often
// not text at all — icon paths leak into title=, alt= is frequently a filename,
// and contact details are digits — so sending them wastes payload and risks
// rendering a mangled path to the user. Applied to the *source* string, never to
// a live DOM value: once translated, a node holds no ASCII letters, and testing
// that would strand it in Tamil forever.
function isTranslatableValue(value) {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (!/[a-zA-Z]/.test(trimmed)) return false;
  if (/^(https?:|\/|\.{1,2}\/|data:|mailto:|tel:|#)/i.test(trimmed)) return false;
  if (/^\S+@\S+\.\S+$/.test(trimmed)) return false;
  return true;
}

// A translation target is one writable slot: either a text node's value or a
// single attribute on an element. Both share this shape so one pass, one cache,
// and one restore-to-English path cover text, attributes, and metadata alike.
function textTarget(node) {
  return {
    owner: node,
    slot: TEXT_SLOT,
    read: () => node.nodeValue,
    write: (value) => {
      node.nodeValue = value;
    },
  };
}

function attrTarget(element, attr) {
  return {
    owner: element,
    slot: attr,
    read: () => element.getAttribute(attr),
    write: (value) => element.setAttribute(attr, value),
  };
}

function isSkippedElement(element) {
  if (!element) return true;
  if (element.isContentEditable) return true;
  return typeof element.closest === "function" && !!element.closest(NO_TRANSLATE_SELECTOR);
}

function isEligibleTextNode(node) {
  const value = node.nodeValue;
  if (!value || !value.trim()) return false;
  const parent = node.parentNode;
  if (!parent) return false;
  if (SKIP_PARENT_TAGS.has(parent.nodeName?.toLowerCase())) return false;
  return !isSkippedElement(parent);
}

function isEligibleAttr(element, attr) {
  if (typeof element.hasAttribute !== "function" || !element.hasAttribute(attr)) return false;
  const value = element.getAttribute(attr);
  if (!value || !value.trim()) return false;
  // next/image consumes placeholder="blur" as a directive, not as user text.
  if (attr === "placeholder" && element.nodeName.toLowerCase() === "img") return false;
  return !isSkippedElement(element);
}

function collectAttrTargets(element, targets) {
  TRANSLATABLE_ATTRS.forEach((attr) => {
    if (isEligibleAttr(element, attr)) targets.push(attrTarget(element, attr));
  });
}

function collectTargets(root) {
  const targets = [];

  if (root.nodeType === Node.TEXT_NODE) {
    if (isEligibleTextNode(root)) targets.push(textTarget(root));
    return targets;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return targets;

  // A TreeWalker never reports its own root, so cover it before descending.
  collectAttrTargets(root, targets);

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeType === Node.TEXT_NODE) {
      if (isEligibleTextNode(node)) targets.push(textTarget(node));
    } else {
      collectAttrTargets(node, targets);
    }
  }
  return targets;
}

function collectMetadataTargets() {
  const targets = [];
  const titleNode = document.querySelector("head > title")?.firstChild;
  if (titleNode?.nodeValue?.trim()) targets.push(textTarget(titleNode));
  document.head.querySelectorAll(METADATA_SELECTOR).forEach((element) => {
    if (element.getAttribute("content")?.trim()) targets.push(attrTarget(element, "content"));
  });
  return targets;
}

function readMemo(store, owner, slot) {
  return store.get(owner)?.get(slot);
}

function writeMemo(store, owner, slot, entry) {
  let slots = store.get(owner);
  if (!slots) {
    slots = new Map();
    store.set(owner, slots);
  }
  slots.set(slot, entry);
}

function normalizeTextNodeValue(text) {
  const matchLeading = text.match(/^(\s*)/);
  const matchTrailing = text.match(/(\s*)$/);
  return {
    original: text,
    leading: matchLeading ? matchLeading[1] : "",
    trailing: matchTrailing ? matchTrailing[1] : "",
    trimmed: text.trim(),
  };
}

async function translateTexts(targetLocale, texts) {
  const uniqueTexts = [...new Set(texts)];
  const toFetch = uniqueTexts.filter((text) => !translationCache.has(`${targetLocale}::${text}`));

  if (toFetch.length > 0) {
    const response = await fetch(BG_TRANSLATE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ targetLocale, texts: toFetch }),
    });

    if (!response.ok) {
      throw new Error(`Translation request failed with ${response.status}`);
    }

    const result = await response.json();
    if (!result?.data || !Array.isArray(result.data)) {
      throw new Error("Invalid translation response");
    }

    toFetch.forEach((text, index) => {
      const translated = result.data[index];
      // Never cache a miss. Map.has() reports true for a key set to undefined,
      // so a short or ragged response would filter this string out of every
      // later request and strand it in English for the rest of the session.
      // Leaving it uncached means it simply gets retried on the next pass.
      if (typeof translated === "string" && translated.trim()) {
        translationCache.set(`${targetLocale}::${text}`, translated);
      }
    });
  }

  return texts.map((text) => translationCache.get(`${targetLocale}::${text}`) ?? text);
}

export default function TranslatorDropdown() {
  const selectedLanguage = useSyncExternalStore(
    subscribeToSharedLanguage,
    getSharedLanguageSnapshot,
    getServerLanguageSnapshot,
  );
  const [isTranslating, setIsTranslating] = useState(false);
  const originalValueMap = useRef(new WeakMap());
  const languageRef = useRef(selectedLanguage);
  const pendingRef = useRef(new Map());
  const flushTimeoutRef = useRef(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = `${pathname}?${searchParams.toString()}`;
  const langSelectId = useId();

  useEffect(() => {
    languageRef.current = selectedLanguage;
  }, [selectedLanguage]);

  useEffect(() => {
    hydrateSharedLanguageOnce();
  }, []);

  const translateTargets = useCallback((targets) => {
    const store = originalValueMap.current;
    const items = targets
      .map((target) => {
        const memo = readMemo(store, target.owner, target.slot);
        const live = target.read();
        // If the live value no longer matches what we last wrote, something
        // outside our control changed it (e.g. React reused this DOM node for a
        // different DB record during a re-render). In that case the cached
        // "original" is stale — treat the live value as the fresh source text
        // instead of re-translating old data.
        const sourceText = memo && memo.lastWritten === live ? memo.original : live;
        return { target, ...normalizeTextNodeValue(sourceText ?? "") };
      })
      .filter((item) => isTranslatableValue(item.trimmed));

    if (items.length === 0) return;

    const locale = languageRef.current;
    if (locale === "en") {
      items.forEach(({ target, original }) => {
        target.write(original);
        writeMemo(store, target.owner, target.slot, { original, lastWritten: original });
      });
      return;
    }

    setIsTranslating(true);
    translateTexts(
      locale,
      items.map((item) => item.trimmed),
    )
      .then((translatedTexts) => {
        translatedTexts.forEach((translated, index) => {
          const { target, original, leading, trailing } = items[index];
          const written = `${leading}${translated}${trailing}`;
          target.write(written);
          writeMemo(store, target.owner, target.slot, { original, lastWritten: written });
        });
      })
      .catch((error) => {
        console.error("Page translation failed:", error);
      })
      .finally(() => {
        setIsTranslating(false);
      });
  }, []);

  // Re-run a full pass whenever the language changes, and also whenever the
  // route (path or query string) changes so newly-navigated pages - including
  // query-string-only pagination like blog/news "next page" - get translated
  // instead of staying in English until the language is re-selected.
  // <head> rides along here rather than in the observer below: it isn't under
  // document.body, and a route change is exactly when Next.js swaps it.
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Keep the declared language matching the script actually rendered - both
    // for screen readers and because browsers consult it when picking a
    // fallback face for generic families.
    document.documentElement.lang = selectedLanguage;
    translateTargets([...collectTargets(document.body), ...collectMetadataTargets()]);
  }, [selectedLanguage, routeKey, translateTargets]);

  // Catch text that mounts after a pass has already run - dropdown/mega
  // menus, modals, and other content Radix/portals only render once opened.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const pending = pendingRef.current;

    const queue = (target) => {
      let slots = pending.get(target.owner);
      if (!slots) {
        slots = new Set();
        pending.set(target.owner, slots);
      }
      slots.add(target.slot);
    };

    // Rebuild targets at flush time rather than holding them from queue time:
    // it dedupes repeat mutations to the same slot, and drops nodes that were
    // unmounted again during the debounce window.
    const drain = () => {
      const targets = [];
      pending.forEach((slots, owner) => {
        if (!owner.isConnected) return;
        slots.forEach((slot) => {
          if (slot === TEXT_SLOT) {
            if (isEligibleTextNode(owner)) targets.push(textTarget(owner));
          } else if (isEligibleAttr(owner, slot)) {
            targets.push(attrTarget(owner, slot));
          }
        });
      });
      pending.clear();
      return targets;
    };

    const observer = new MutationObserver((mutations) => {
      if (languageRef.current === "en") return;

      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          const element = mutation.target;
          const attr = mutation.attributeName;
          const memo = readMemo(originalValueMap.current, element, attr);
          // setAttribute emits a record even when the value is unchanged, so
          // our own writes would re-queue themselves forever. Anything already
          // showing what we last wrote is our echo — drop it.
          if (memo && memo.lastWritten === element.getAttribute(attr)) return;
          if (isEligibleAttr(element, attr)) queue(attrTarget(element, attr));
          return;
        }

        mutation.addedNodes.forEach((added) => {
          collectTargets(added).forEach(queue);
        });
      });

      if (pending.size === 0) return;

      clearTimeout(flushTimeoutRef.current);
      flushTimeoutRef.current = setTimeout(() => {
        translateTargets(drain());
      }, 150);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: TRANSLATABLE_ATTRS,
    });

    return () => {
      observer.disconnect();
      clearTimeout(flushTimeoutRef.current);
      pending.clear();
    };
  }, [translateTargets]);

  return (
    <div className="flex items-center gap-2">
      <label htmlFor={langSelectId} className="sr-only">
        Language
      </label>
      <select
        id={langSelectId}
        value={selectedLanguage}
        onChange={(event) => setSharedLanguage(event.target.value)}
        disabled={isTranslating}
        // Each option is already written in the language it names, so this
        // subtree must never be rewritten by our own pass.
        translate="no"
        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {TRANSLATION_LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
}
