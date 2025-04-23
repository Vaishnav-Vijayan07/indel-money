
"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const loanTypes = [
  {
    type: "On Boarding Rate",
    details: [
      { title: "On Boarding Rate", value: "30.00%" },
      { title: "LTV", value: "50%" },
      { title: "Tenor", value: "365 DAYS" },
      { title: "Rebate", value: "21.25%" },
      { title: "Effective Interest", value: "8.75%" },
    ],
  },
  {
    type: "Indel Minimal",
    details: [
      { title: "Indel Minimal", value: "31.00%" },
      { title: "LTV", value: "50%" },
      { title: "Tenor", value: "365 DAYS" },
      { title: "Rebate", value: "21.25%" },
      { title: "Effective Interest", value: "8.75%" },
    ],
  },
  {
    type: "Indel Power",
    details: [
      { title: "Indel Power", value: "32.00%" },
      { title: "LTV", value: "50%" },
      { title: "Tenor", value: "365 DAYS" },
      { title: "Rebate", value: "21.25%" },
      { title: "Effective Interest", value: "8.75%" },
    ],
  },
  {
    type: "Indel Fixed",
    details: [
      { title: "On Boarding Rate", value: "50.00%" },
      { title: "LTV", value: "50%" },
      { title: "Tenor", value: "365 DAYS" },
      { title: "Rebate", value: "21.25%" },
      { title: "Effective Interest", value: "8.75%" },
    ],
  },
  {
    type: "Indel Extra",
    details: [
      { title: "On Boarding Rate", value: "30.00%" },
      { title: "LTV", value: "50%" },
      { title: "Tenor", value: "365 DAYS" },
      { title: "Rebate", value: "21.25%" },
      { title: "Effective Interest", value: "8.75%" },
    ],
  },
  {
    type: "Indel Max",
    details: [
      { title: "On Boarding Rate", value: "30.00%" },
      { title: "LTV", value: "50%" },
      { title: "Tenor", value: "365 DAYS" },
      { title: "Rebate", value: "21.25%" },
      { title: "Effective Interest", value: "8.75%" },
    ],
  },
  {
    type: "Indel HNI",
    details: [
      { title: "On Boarding Rate", value: "30.00%" },
      { title: "LTV", value: "50%" },
      { title: "Tenor", value: "365 DAYS" },
      { title: "Rebate", value: "21.25%" },
      { title: "Effective Interest", value: "8.75%" },
    ],
  },
];

export default function MobGoldLoanScheme() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full block py-[15px_30px]">
      <div className="container">
        <div className="text-title1 mb-[15px]">
          <span className="text-base2 font-bold">Gold Loan&nbsp;</span>
          Scheme
        </div>
        <div className="flex flex-wrap gap-[4px] 4xs:gap-[8px] xs:gap-[10px]">
          {loanTypes.map((item, index) => (
            <div key={index}>
              <div
                className={`${
                  activeIndex === index
                    ? "bg-base1 font-bold text-white"
                    : "bg-[#CFDFFE] font-normal text-black"
                } text-[12px] leading-none w-full h-auto p-[10px_20px] rounded-[10px] cursor-pointer transition-background duration-300 hover:bg-base3
                                        `}
                onClick={() => setActiveIndex(index)}
              >
                {item.type}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[calc(100%-((100%-var(--container-x))/2))] pr-0 mr-0 mx-auto pl-[var(--container-padding)] mt-[20px] 4xs:mt-[25px]">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          autoplay={false}
          className="-mx-[5px]"
        >
          {loanTypes[activeIndex].details?.map((item, index) => (
              <SwiperSlide key={index}
                className="max-w-[150px] p-[5px]"
              >
                <div className="group w-full h-auto bg-white rounded-[18px] overflow-hidden shadow-[0_0_5px_0_rgba(0,0,0,0.2)]">
                  <div className="text-[14px] leading-none font-medium text-center text-[#1f1b1b] w-full h-auto bg-[#cde2ff] p-[15px_10px]">
                    {item.title}
                  </div>
                  <div className="text-[16px] leading-[1.2] font-bold text-center text-base1 p-[15px_10px]">
                    {item.value}
                  </div>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
