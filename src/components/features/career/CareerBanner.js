"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import Image from "next/image";

import "./Career.css";

const slides = [
  {
    src: "/images/banner-career-1.jpg",
    alt: "career",
    title: "Be Part of Our Transformative Team",
  },
  {
    src: "/images/banner-career-1.jpg",
    alt: "career",
    title: "22 Be Part of Our Transformative Team",
  },
  {
    src: "/images/banner-career-1.jpg",
    alt: "career",
    title: "33 Be Part of Our Transformative Team",
  },
  {
    src: "/images/banner-career-1.jpg",
    alt: "career",
    title: "44 Be Part of Our Transformative Team",
  },
];

export default function CareerBanner() {
  return (
    <section className="w-full block">
      <Swiper
        effect={"fade"}
        modules={[EffectFade, Pagination, Autoplay]}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        slidesPerView={1}
        spaceBetween={0}
        className="careerBannerSlide"
      >
        {slides?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[565px] lg:h-[376px] xl:h-[420px] 2xl:h-[476px] 3xl:h-[568px] relative z-0 py-[30px] lg:py-[40px] 2xl:py-[50px] flex items-center max-sm:items-end after:content-[''] after:w-full after:h-[100%] after:absolute after:-z-1 after:top-0 after:left-0 after:block max-sm:after:bg-black/40 after:pointer-events-none">
              <Image
                src={item?.src}
                alt={item?.alt}
                fill
                sizes="1200px"
                className="-z-1 object-cover"
              />
              <div className="container">
                <div className="max-sm:mb-[90px] max-sm:text-[28px] text-title2 font-bold text-white w-full lg:max-w-[420px] xl:max-w-[476px] 2xl:max-w-[576px] 3xl:max-w-[740px] mb-[4px] lg:mb-[6px] 2xl:mb-[10px]">
                  {item?.title
                    ? (() => {
                      const words = item.title.split(" ");
                      const lastWord = words[words.length - 1];
                      const precedingWords = words.slice(0, -1).join(" ");
                      return (
                        <>
                          {precedingWords}{" "}
                          <span className="text-base2">{lastWord}</span>
                        </>
                      );
                    })()
                    : null}
                </div>
                <div className="w-full max-sm:hidden block">
                  <PageBreadcrumb variant="white" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
