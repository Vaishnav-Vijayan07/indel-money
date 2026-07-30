import { cache } from "react";
import { cookies } from "next/headers";

// Mirrors TranslatorDropdown.js's own locale-code shape - loose on purpose (it
// covers real codes like "mni-Mtei"), just enough to stop a malformed/tampered
// cookie value from being echoed into a query string unescaped by
// buildLocalizedUrl.
const COOKIE_LOCALE_PATTERN = /^[a-zA-Z-]{1,10}$/;

// Memoized per request via React's cache() so every Server Component that
// needs the visitor's locale during the same render (layout, header, page)
// collapses to a single cookie read instead of one each. No automatic
// geolocation-based default - visitors are English by default and only end
// up here with a non-"en" value after an explicit pick via
// TranslatorDropdown.js, which mirrors it into this same cookie name
// alongside localStorage.
export const getServerLocale = cache(async function getServerLocale() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("siteLanguage")?.value;
  return cookieLocale && COOKIE_LOCALE_PATTERN.test(cookieLocale) ? cookieLocale : "en";
});
