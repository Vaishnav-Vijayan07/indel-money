"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import Image from 'next/image';

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
        effect={'fade'}
        modules={[EffectFade, Pagination, Autoplay]}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={0}
        className="careerBannerSlide"
      >
        {slides?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[276px] lg:h-[376px] xl:h-[420px] 2xl:h-[476px] 3xl:h-[568px] relative z-0 py-[30px] lg:py-[40px] 2xl:py-[50px] flex items-center">
              <Image
                src={item?.src}
                alt={item?.alt}
                fill
                style={{ objectFit: "cover" }}
                className="-z-1"
              />
              <div className="container">
                <div className="text-title2 font-bold text-base2 w-full lg:max-w-[420px] xl:max-w-[476px] 2xl:max-w-[576px] 3xl:max-w-[740px] mb-[4px] lg:mb-[6px] 2xl:mb-[10px]">
                  {item?.title}
                </div>
                <div className="w-full">
                  <PageBreadcrumb variant="white" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
