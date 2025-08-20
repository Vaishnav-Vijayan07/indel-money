"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import parse from "html-react-parser";

export default function MobGoldLoanScheme({ goldLoanSchemes, scheme_title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const schemes = goldLoanSchemes?.goldLoanSchemes || [];
  const schemeDetails = goldLoanSchemes?.goldLoanSchemeDetails || [];

  return (
    <section className="w-full block py-[15px_30px]">
      <div className="container">
        <h2 className="text-title1 text-[#5e5959bf] mb-[15px] [&>span]:text-base2 [&>span]:font-bold">{parse(scheme_title)}</h2>
        <div className="flex flex-wrap gap-[4px] 4xs:gap-[8px] xs:gap-[10px]">
          {schemes?.map((item, index) => (
            <div key={index}>
              <h4
                className={`${
                  activeIndex === index ? "bg-base1 font-bold text-white" : "bg-[#CFDFFE] font-normal text-black"
                } text-[12px] leading-none w-full h-auto p-[10px_20px] rounded-[10px] cursor-pointer transition-background duration-300 hover:bg-base3
                                        `}
                onClick={() => setActiveIndex(index)}
              >
                {item}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[calc(100%-((100%-var(--container-x))/2))] pr-0 mr-0 mx-auto pl-[var(--container-padding)] mt-[20px] 4xs:mt-[25px]">
        <Swiper slidesPerView={"auto"} spaceBetween={0} autoplay={false} className="-mx-[5px]">
          {schemeDetails[activeIndex]?.map((item, index) => (
            <SwiperSlide key={index} className="max-w-[150px] p-[5px]">
              <div className="group w-full h-auto bg-white rounded-[18px] overflow-hidden shadow-[0_0_5px_0_rgba(0,0,0,0.2)]">
                <div className="text-[14px] leading-none font-medium text-center text-[#5e5959bf] w-full h-auto bg-[#cde2ff] p-[15px_10px]">
                  {item?.title}
                </div>
                <div className="text-[16px] leading-[1.2] font-bold text-center text-base1 p-[15px_10px]">{item?.value}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
