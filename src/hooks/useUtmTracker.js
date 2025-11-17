"use client";

import { useState, useEffect } from "react";

/**
 * Utility function to capture UTM parameters from URL
 * Can be used standalone or with the hook
 * @param {boolean} debug - Enable debug logging
 * @returns {Object} UTM parameters with defaults
 */
export function captureUtmParams(debug = false) {
  // Only run on client side
  if (typeof window === "undefined") {
    return {
      campaign: "NCD 6",
      source: "Direct",
      medium: "Direct",
      referralUrl: "",
    };
  }

  try {
    // Get current URL with all parameters
    const currentUrl = window.location.href;

    // Parse URL search parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Extract UTM parameters with fallback to defaults
    const campaign = urlParams.get("utm_campaign") || "NCD 6";
    const source = urlParams.get("utm_source") || "Direct";
    const medium = urlParams.get("utm_medium") || "Direct";

    const params = {
      campaign,
      source,
      medium,
      referralUrl: currentUrl,
    };

    if (debug) {
    }

    return params;
  } catch (error) {
    console.error("Error capturing UTM parameters:", error);
    return {
      campaign: "NCD 6",
      source: "Direct",
      medium: "Direct",
      referralUrl: typeof window !== "undefined" ? window.location.href : "",
    };
  }
}

/**
 * Custom hook to capture and track UTM parameters from URL
 * @param {boolean} debug - Enable debug logging
 * @returns {Object} UTM parameters with defaults
 */
export function useUtmTracker(debug = false) {
  // Initialize with captured params immediately for client-side
  const [utmParams, setUtmParams] = useState(() => {
    return captureUtmParams(debug);
  });

  useEffect(() => {
    // Recapture on mount to handle Next.js hydration
    const params = captureUtmParams(debug);
    setUtmParams(params);
  }, [debug]);

  return utmParams;
}
