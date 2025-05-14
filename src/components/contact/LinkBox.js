import Image from "next/image";
import React from "react";

function LinkBox({ href, src, title, alt, items }) {
  return (
    <div className="group w-full flex items-center my-[5px] 3xl:my-[10px]">
      <span>
        <Image src={src} width={15} height={15} alt={alt} className="w-[10px] h-[auto] lg:w-[12px] 3xl:w-[14px] block" />
      </span>
      <p className="text-[14px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-bold text-white sm:text-[#1b1b1b] ml-[6px] lg:ml-[10px] 3xl:ml-[14px]">
        {Array.isArray(items) ? (
          items.map((number, idx) => (
            <span key={`phone-${idx}`}>
              <a href={`tel:${number}`} aria-label={number} className="hover:text-base2 transition-color duration-300">
                {number}
              </a>
              {idx < items.length - 1 && ", "}
            </span>
          ))
        ) : (
          <a href={href} aria-label={title} className="hover:text-base2 transition-color duration-300">
            {title}
          </a>
        )}
      </p>
    </div>
  );
}

export default LinkBox;
