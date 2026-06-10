"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SUPPORTED_LANGUAGES } from "@/lib/i18n/languageConfig";
import { getCurrentLanguage, setLanguage } from "@/lib/i18n/googleTranslate";

export default function LanguageSwitcher({ triggerClassName = "text-header1 hover:text-base2" }) {
  const [current, setCurrent] = useState("en");

  useEffect(() => {
    setCurrent(getCurrentLanguage());
  }, []);

  const currentLang = SUPPORTED_LANGUAGES.find((lang) => lang.code === current) || SUPPORTED_LANGUAGES[0];

  const handleSelect = (code) => {
    if (code === current) return;
    setCurrent(code);
    setLanguage(code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`notranslate flex items-center gap-1 cursor-pointer transition-colors duration-300 ${triggerClassName}`}
        translate="no"
        aria-label="Change language"
      >
        <Globe className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]" />
        <span className="text-[11px] lg:text-[12px] uppercase">{currentLang.code}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="notranslate bg-[#d2dff6] border-none max-h-[300px] overflow-y-auto" translate="no">
        {SUPPORTED_LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => handleSelect(lang.code)}
            className={`hover:bg-[#c3d5f2] rounded-md cursor-pointer text-header1 ${
              lang.code === current ? "font-semibold" : ""
            }`}
          >
            {lang.native} <span className="text-[11px] opacity-70">({lang.label})</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
