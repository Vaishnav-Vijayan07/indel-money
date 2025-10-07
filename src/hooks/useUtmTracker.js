"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to capture and track UTM parameters from URL
 * @returns {Object} UTM parameters with defaults
 */
export function useUtmTracker() {
  const [utmParams, setUtmParams] = useState({
    campaign: "NCD 6",
    source: "Direct",
    medium: "Direct",
    referralUrl: "",
  });

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    try {
      // Get current URL with all parameters
      const currentUrl = window.location.href;

      // Parse URL search parameters
      const urlParams = new URLSearchParams(window.location.search);

      // Extract UTM parameters with fallback to defaults
      const campaign = urlParams.get("utm_campaign") || "NCD 6";
      const source = urlParams.get("utm_source") || "Direct";
      const medium = urlParams.get("utm_medium") || "Direct";

      setUtmParams({
        campaign,
        source,
        medium,
        referralUrl: currentUrl,
      });
    } catch (error) {
      console.error("Error capturing UTM parameters:", error);
      // Keep default values if error occurs
    }
  }, []);

  return utmParams;
}
