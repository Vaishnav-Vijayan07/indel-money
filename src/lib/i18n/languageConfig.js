// Languages offered in the manual language switcher.
// Codes follow Google Translate's language codes.
export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "ml", label: "Malayalam", native: "മലയാളം" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
  { code: "mr", label: "Marathi", native: "मराठी" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
  { code: "bn", label: "Bengali", native: "বাংলা" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { code: "or", label: "Odia", native: "ଓଡ଼ିଆ" },
  { code: "ur", label: "Urdu", native: "اردو" },
];

// Maps an Indian state/UT name (lowercase, as returned by IP geolocation) to
// its primary official language supported by Google Translate. States whose
// dominant language isn't (well) supported by Google Translate fall back to
// Hindi via DEFAULT_INDIA_LANGUAGE.
export const STATE_LANGUAGE_MAP = {
  "andhra pradesh": "te",
  "telangana": "te",
  "karnataka": "kn",
  "kerala": "ml",
  "lakshadweep": "ml",
  "tamil nadu": "ta",
  "puducherry": "ta",
  "maharashtra": "mr",
  "goa": "mr",
  "gujarat": "gu",
  "dadra and nagar haveli and daman and diu": "gu",
  "west bengal": "bn",
  "tripura": "bn",
  "punjab": "pa",
  "chandigarh": "pa",
  "odisha": "or",
  "assam": "as",
  "jammu and kashmir": "ur",
};

// Default language for Indian states/UTs not explicitly mapped above.
export const DEFAULT_INDIA_LANGUAGE = "hi";

// Default language for visitors outside India.
export const DEFAULT_LANGUAGE = "en";

export const PREFERRED_LANG_STORAGE_KEY = "indel_preferred_lang";
export const GEO_LANG_SESSION_KEY = "indel_geo_lang_checked";
export const GOOGTRANS_COOKIE = "googtrans";

export function resolveLanguageFromGeo({ countryCode, region }) {
  if (!countryCode || countryCode.toUpperCase() !== "IN") {
    return DEFAULT_LANGUAGE;
  }

  const normalizedRegion = (region || "").trim().toLowerCase();
  return STATE_LANGUAGE_MAP[normalizedRegion] || DEFAULT_INDIA_LANGUAGE;
}
