"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";

import "./About.css";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";

const slides = [
  {
    image: "/images/aboutBanner.webp",
    alt: "Indel Money Banner 1",
    mainTitle: "ABOUT INDEL",
    title1: "Simplifying ",
    title2: "Finance",
    title3: "Empowering You",
  },
  {
    image: "/images/hero_banner.jpeg",
    alt: "Indel Money Banner 1",
    mainTitle: "ABOUT INDEL",
    title1: "Simplifying ",
    title2: "Finance",
    title3: "Empowering You",
  },
  {
    image: "/images/aboutBanner.webp",
    alt: "Indel Money Banner 1",
    mainTitle: "ABOUT INDEL",
    title1: "Simplifying ",
    title2: "Finance",
    title3: "Empowering You",
  },
];

export default function AboutSlider() {
  return (
    <section className="w-full h-auto overflow-hidden">
      <Swiper
        effect={"fade"}
        modules={[EffectFade, Pagination, Autoplay]}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full aboutSlide h-[320px] lg:h-[468px] 2xl:h-[560px]"
      >
        {slides?.map((item, index) => (
          <SwiperSlide key={index} className="relative z-0">
            <div className="absolute -z-1 inset-0 w-[60%] h-full bg-gradient-to-r from-white/80 to-gray-500/0"></div>
            <Image
              src={item?.image}
              alt={item?.alt || "Slide Image"}
              fill
              priority
              className="-z-2 object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 container ">
              <div className="max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[550px] 3xl:max-w-[750px]">
                <div className="text-[14px] lg:text-[18px] 2xl:text-[20px] text-[#17479E] font-normal mb-[10px] leading-[1] uppercase">
                  {item?.mainTitle}
                </div>
                <h1 className="text-title2 capitalize text-black mb-4 last:pointer-events-none">
                  {item?.title1}
                  <span className="text-base2 font-bold"> {item?.title2} </span>
                  <span> {item?.title3} </span>
                </h1>
                <PageBreadcrumb />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
