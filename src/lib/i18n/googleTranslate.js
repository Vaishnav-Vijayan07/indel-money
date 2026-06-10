"use client";

import { GOOGTRANS_COOKIE, PREFERRED_LANG_STORAGE_KEY } from "./languageConfig";

function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  // Also set on the bare domain so it applies across subdomains.
  document.cookie = `${name}=${value}; expires=${expires}; path=/; domain=${window.location.hostname}`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

// googtrans cookie format is "/<source>/<target>" e.g. "/en/ml"
export function getCurrentLanguage() {
  const cookieValue = getCookie(GOOGTRANS_COOKIE);
  if (!cookieValue) return "en";
  const parts = cookieValue.split("/").filter(Boolean);
  return parts[1] || "en";
}

export function applyGoogleTranslateCookie(langCode) {
  setCookie(GOOGTRANS_COOKIE, `/en/${langCode}`);
}

// Switches the page language. If the Google Translate widget has already
// initialized, switches in place; otherwise sets the cookie so the widget
// picks it up on its next init (and reloads so it applies immediately).
export function setLanguage(langCode) {
  if (typeof window === "undefined") return;

  localStorage.setItem(PREFERRED_LANG_STORAGE_KEY, langCode);
  applyGoogleTranslateCookie(langCode);

  const combo = document.querySelector(".goog-te-combo");
  if (combo) {
    combo.value = langCode;
    combo.dispatchEvent(new Event("change"));
  } else {
    window.location.reload();
  }
}
