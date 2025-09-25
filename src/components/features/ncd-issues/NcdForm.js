// Form component with Zoho iframe
// Form component with Zoho iframe
"use client";

import { useEffect, useState } from "react";

export default function ContactForm({ isMobile = false }) {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    async function fetchHtml() {
      const response = await fetch("/form.html");
      const html = await response.text();
      setHtmlContent(html);

      // execute scripts manually
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      doc.querySelectorAll("script").forEach((oldScript) => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });
    }

    fetchHtml();
  }, []);

  return (
    <div
      className={`${
        isMobile
          ? "w-full bg-[#17479e] lg:p-6"
          : "w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl lg:w-[40%] bg-[#17479e] p-4 sm:p-6 md:p-8"
      } flex flex-col justify-start ${
        isMobile ? "min-h-[500px]" : "min-h-[600px] lg:min-h-0"
      }`}
    >
      <div className="max-w-md mx-auto w-full lg:max-w-none transparent">
        {/* Zoho Form Integration */}
        <div
          id="crmWebToEntityForm"
          className="zcwf_lblLeft crmWebToEntityForm"
          style={{
            backgroundColor: "transparent",
            color: "white",
            maxWidth: "600px",
            border: "none",
            boxShadow: "none",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </div>
  );
}
