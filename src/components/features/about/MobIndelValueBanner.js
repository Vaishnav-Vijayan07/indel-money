"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { renderHtml } from "@/lib/utils/htmlParser";

import "./IndelValue.css";
import { serverMediaPath } from "@/constants/constants";

const slides = [
  {
    image: "/images/valueBannerMb.jpg",
    image2: "/images/valueBannerDesk.jpg",
    alt: "Indel Money Banner 1",
    mainTitle: "ABOUT INDEL ",
    title1: "Our ",
    title2: "Values",
    // title3: "lorem hjgfhjgdf ",
  },
  {
    image: "/images/valueBanner.jpg",
    image2: "/images/valueBannerDesk.jpg",
    alt: "Indel Money Banner 2",
    mainTitle: "ABOUT INDEL ",
    title1: "Simplifying ",
    title2: "Finance",
    title3: ", Empowering You",
  },
  {
    image: "/images/valueBanner.jpg",
    image2: "/images/valueBannerDesk.jpg",
    alt: "Indel Money Banner 2",
    mainTitle: "ABOUT INDEL ",
    title1: "Simplifying ",
    title2: "Finance",
    title3: ", Empowering You",
  },
  {
    image: "/images/valueBanner.jpg",
    image2: "/images/valueBannerDesk.jpg",
    alt: "Indel Money Banner 2",
    mainTitle: "ABOUT INDEL ",
    title1: "Simplifying ",
    title2: "Finance",
    title3: ", Empowering You",
  },
];

export default function MobIndelValueBanner({ mobileBanners }) {
  return (
    <Swiper
      effect={"fade"}
      modules={[EffectFade, Pagination]}
      navigation={false}
      pagination={{
        clickable: true,
      }}
      // autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      className="IndelvalueSlider lg:h-[570px] sm:h-[350px] h-[550px]"
    >
      {mobileBanners?.map((item, index) => (
        <SwiperSlide key={index} className="relative z-0">
          <div className="absolute inset-0 sm:bg-gradient-to-r sm:from-[rgba(0,0,0,0.50)] sm:to-[rgba(102,102,102,0.00)] bg-gradient-to-t from-black to-[rgba(0,0,0,0) z-0"></div>
          <Image
            src={item?.image ? `${serverMediaPath}${item?.image}` : "/images/valueBannerMb.jpg"}
            width={1920}
            height={570}
            alt={item?.alt || "Slide Image"}
            priority={true}
            className="w-full h-full object-cover"
          />
          <picture className="block w-full h-full">
            <source media="(min-width: 640px)" srcSet={item?.image ? `${serverMediaPath}${item?.image}` : "/images/valueBannerDesk.jpg"} />
            <img
              src={item?.image ? `${serverMediaPath}${item?.image}` : "/images/valueBannerMb.jpg"}
              width={640}
              height={500}
              alt={item?.alt_text ? item?.alt_text : "Slide Image"}
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute sm:top-1/2 sm:bottom-auto bottom-[25px] sm:left-1/2 left-0 transform sm:-translate-x-1/2 sm:-translate-y-1/2 container sm:mb-0 mb-[45px]">
            <div className="max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[550px] 3xl:max-w-[750px]">
              <div className="text-[14px] lg:text-[18px] 2xl:text-[20px] text-white font-[400] mb-[20px] leading-none uppercase sm:hidden block">
                {item?.title ? item?.title : "About Indel"}
              </div>
              <h1 className="text-[28px] sm:text-[32px] lg:text-[38px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[68px] leading-[1.2] capitalize font-normal text-white sm:mb-4 last:pointer-events-none [&>span]:text-base2 [&>span]:font-bold">
                {item?.super_title ? renderHtml(item?.super_title) : "Indel Money"}
              </h1>
              <div className="breadcrumb flex-wrap sm:flex hidden">
                <PageBreadcrumb variant="white" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
