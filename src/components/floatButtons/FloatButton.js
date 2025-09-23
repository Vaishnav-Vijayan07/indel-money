"use client";

import { serverMediaPath } from "@/constants/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Calculator from "./Calculator";
import { usePathname } from "next/navigation";

function FloatButton({ buttons, formattedGoldCaratTypes, formattedGoldTypes }) {
  const pathname = usePathname();

  // Define routes where you don't want the floating button
  const shouldHideFloatingButton =
    pathname === "/career" || pathname.startsWith("/career-list/job-details/") || pathname.startsWith("/career-list");

  return (
    !shouldHideFloatingButton && (
      <div className="max-sm:hidden flex flex-wrap flex-col gap-[4px] lg:gap-[6px] 2xl:gap-[10px] fixed z-4 top-[50%] right-[40px] translate-y-[-50%]">
        {(buttons || []).map((button) => (
          <div key={button?.id}>
            <Link
              href={button?.link ? button?.link : "/"}
              className="w-[25px] lg:w-[30px] 2xl:w-[40px] 3xl:w-[46px] aspect-square rounded-full relative z-0 block transition-all duration-300 hover:scale-105 shadow-[0_5px_10px_rgba(0,0,0,0.10)]"
            >
              <Image
                src={
                  button?.icon
                    ? `${serverMediaPath}${button?.icon}`
                    : "/images/floating-call.svg"
                }
                alt="call"
                fill
                sizes="46px"
              />
            </Link>
          </div>
        ))}

        <div>
          <Calculator
            formattedGoldCaratTypes={formattedGoldCaratTypes}
            formattedGoldTypes={formattedGoldTypes}
          />
        </div>
      </div>
    )
  );
}

export default FloatButton;
