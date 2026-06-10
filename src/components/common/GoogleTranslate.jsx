"use client";

import { useEffect } from "react";
import Script from "next/script";
import {
  PREFERRED_LANG_STORAGE_KEY,
  GEO_LANG_SESSION_KEY,
  GOOGTRANS_COOKIE,
  resolveLanguageFromGeo,
} from "@/lib/i18n/languageConfig";
import { applyGoogleTranslateCookie } from "@/lib/i18n/googleTranslate";

const GEO_LOOKUP_URL = "https://ipapi.co/json/";

// Google Translate rewrites the DOM directly, which can clash with React's
// reconciliation and throw "Failed to execute 'removeChild'/'insertBefore'"
// errors. Patch these to no-op when the node is already detached.
function patchDomForGoogleTranslate() {
  if (window.__gtPatched) return;
  window.__gtPatched = true;

  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    if (child.parentNode !== this) {
      return child;
    }
    return originalRemoveChild.call(this, child);
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (newNode, referenceNode) {
    if (referenceNode && referenceNode.parentNode !== this) {
      return newNode;
    }
    return originalInsertBefore.call(this, newNode, referenceNode);
  };
}

function hasGoogTransCookie() {
  return document.cookie.split("; ").some((row) => row.startsWith(`${GOOGTRANS_COOKIE}=`));
}

// Decide the language to show before the translate widget loads, based on
// (in order): an explicit user preference, an existing session choice, or
// IP-based geolocation (Kerala -> Malayalam, other Indian states -> their
// language, outside India -> English).
async function determineInitialLanguage() {
  const preferred = localStorage.getItem(PREFERRED_LANG_STORAGE_KEY);
  if (preferred) return preferred;

  if (hasGoogTransCookie()) return null;

  if (sessionStorage.getItem(GEO_LANG_SESSION_KEY)) return null;

  try {
    const res = await fetch(GEO_LOOKUP_URL);
    const data = await res.json();
    const lang = resolveLanguageFromGeo({ countryCode: data?.country_code, region: data?.region });
    sessionStorage.setItem(GEO_LANG_SESSION_KEY, "1");
    return lang;
  } catch {
    sessionStorage.setItem(GEO_LANG_SESSION_KEY, "1");
    return null;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    patchDomForGoogleTranslate();

    let cancelled = false;

    determineInitialLanguage().then((lang) => {
      if (cancelled || !lang || lang === "en") return;
      applyGoogleTranslateCookie(lang);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div id="google_translate_element" className="hidden" />
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: "en", autoDisplay: false },
                "google_translate_element"
              );
            }
          `,
        }}
      />
      <Script
        id="google-translate-script"
        strategy="afterInteractive"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
    </>
  );
}
