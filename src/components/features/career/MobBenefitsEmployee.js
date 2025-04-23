"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";

const benefitsEmployee = [
  {
    src: "/images/benefitsEmployee-1.svg",
    alt: "benefitsEmployee",
    title: "Career Growth",
    description:
      "Indel offers ample opportunities for professional development and advancement.",
  },
  {
    src: "/images/benefitsEmployee-2.svg",
    alt: "benefitsEmployee",
    title: "Innovative Culture",
    description: "Be part of a dynamic and forward-thinking work environment.",
  },
  {
    src: "/images/benefitsEmployee-3.svg",
    alt: "benefitsEmployee",
    title: "Work-Life Balance",
    description:
      "Enjoy a healthy work-life balance with flexible work arrangements.",
  },
  {
    src: "/images/benefitsEmployee-4.svg",
    alt: "benefitsEmployee",
    title: "Employee Welfare",
    description:
      "Benefit from comprehensive employee welfare programs and initiatives.",
  },
  {
    src: "/images/benefitsEmployee-5.svg",
    alt: "benefitsEmployee",
    title: "Financial Rewards",
    description:
      "Receive competitive compensation packages and performance-based incentives.",
  },
  {
    src: "/images/benefitsEmployee-6.svg",
    alt: "benefitsEmployee",
    title: "Strong Leadership",
    description:
      "Learn from experienced leaders and mentors who inspire and guide.",
  },
];

export default function BenefitsEmployee() {
  return (
    <section className="w-full block py-[30px_0] overflow-hidden">
      <div className="container">
        <div className="text-title1 font-medium capitalize mb-[15px]">
          Benefits of being an
          <span className="text-base2 font-bold">&nbsp;indel employee</span>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={6}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          watchSlidesProgress={true}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            384: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
          }}
          className="mobBenefitsSlide"
          style={{
            "--swiper-pagination-bullet-size": "6px",
            "--swiper-pagination-bullet-inactive-color": "#d9d9d9",
            "--swiper-pagination-color": "#d6071e",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          }}
        >
          {benefitsEmployee?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full min-h-[150px] block rounded-[10px] shadow-[0_0_15px_0_rgba(0,0,0,0.1)] overflow-hidden hover:-translate-y-[5px] transition-all duration-300">
                <div
                  className={`
                    ${index % 2 === 0 ? "bg-base1" : "bg-[#d6071e]"} 
                    w-full h-[50px] p-[10px_10px_10px_15px] flex items-center`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={25}
                    height={25}
                    className="aspect-square"
                  />
                  <div className="text-[14px] font-medium leading-none line-clamp-2 text-white pl-[10px]">
                    {item.title}
                  </div>
                </div>
                <div className="w-full h-auto p-[10px_10px]">
                  <div className="text-sm1 text-[#161616] line-clamp-4">
                    {item.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
