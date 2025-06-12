"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import EnquiryForm from "../../common/EnquiryForm";

export default function HeroBannerEnquiry() {
  const [open, setOpen] = useState(true);

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{
        x: "[calc(((100vw-var(--container-x))/2)+var(--container-padding))]",
        opacity: 1,
      }}
      className={`${
        open
          ? "right-[calc(((100vw-var(--container-x))/2)+var(--container-padding))]"
          : "right-0 translate-x-full"
      } w-full max-w-[calc(var(--container-x)-2rem)] sm:max-w-[276px] lg:max-w-[320px] 2xl:max-w-[420px] 3xl:max-w-[476px] h-auto absolute z-1 top-0 bottom-[calc(150px+var(--marquee-y))] sm:bottom-[var(--marquee-y)] my-auto flex items-center transition-transform duration-300`}
    >
      <div className={`${
            open ? "max-sm:rounded-tl-[10px]" : "rounded-tl-0"
          } w-full h-auto relative bg-[#c0dbff] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] rounded-tl-0 p-[30px_20px_20px] 4xs:p-[40px_30px_30px] sm:p-[10px_15px] lg:p-[20px_20px] 3xl:p-[20px_35px]`}>
        <div className="text-[20px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-[1.2] font-medium text-black mb-[15px] 4xs:mb-[30px] sm:mb-2 xl:mb-3 3xl:mb-4">
          Select the type of service you are looking for?
        </div>

        <div
          className={`${
            open ? "max-sm:opacity-0" : "max-sm:opacity-100"
          } text-sm1 leading-none [writing-mode:vertical-lr] rotate-[180deg] w-[30px] h-[80px] 3xl:w-[36px] 3xl:h-[120px] bg-[#c0dbff] cursor-pointer absolute top-0 right-full flex justify-center items-center rounded-br-[10px] rounded-tr-[10px] transition-opacity duration-300 hover:opacity-95`}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Open"}
          <Image
            src={"/images/enquiry-delmt.svg"}
            alt="enquiry"
            width={40}
            height={38}
            className="absolute -z-1 left-0 top-[-12px] rotate-180"
          />
        </div>

        <div
          className="sm:hidden w-[12px] h-auto aspect-square cursor-pointer absolute top-[16px] right-[16px] block transition-opacity duration-300 hover:opacity-95"
          onClick={() => setOpen(!open)}
        >
          <Image
            src={"/images/icon-close.svg"}
            alt="close"
            width={12}
            height={12}
            className="aspect-square"
          />
        </div>
        <EnquiryForm />
      </div>
    </motion.div>
  );
}
