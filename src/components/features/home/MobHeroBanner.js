"use client";
import EnquiryForm from "../../common/EnquiryForm";
import Image from "next/image";
import MobHomeMarquee from "../../features/home/MobHomeMarquee";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

import "./Home.css";

const slides = [
  {
    image: "/images/mob-MainSlide1.jpg",
    alt: "Indel Money Banner 1",
    title1: "Indel Money:",
    title2: "Your trusted partner for a brighter future.",
    link: "/",
  },
  {
    image: "/images/mob-MainSlide1.jpg",
    alt: "Indel Money Banner 2",
    title1: "Empowering your",
    title2: "Financial dreams with confidence.",
    link: "/",
  },
  {
    image: "/images/mob-MainSlide1.jpg",
    alt: "Indel Money Banner 3",
    title1: "Your reliable",
    title2: "Partner in every financial journey.",
    link: "/",
  },
];

export default function MobHeroBanner() {
  return (
    <section className="w-full block relative z-0 overflow-hidden">
      <Swiper
        effect={"fade"}
        modules={[EffectFade, Pagination, Autoplay]}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="heroSlide h-[calc(100vh-(var(--header-y)))]"
      >
        {slides?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative z-0 flex! items-end before:absolute before:inset-0 before:-z-1 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:w-full before:h-full py-[calc(var(--marquee-y)+65px)]"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority
              className="-z-2 object-cover"
            />
            <div className="container">
              <div className="max-w-full">
                <h1 className="text-[28px] leading-[1.2] capitalize font-medium text-white mb-[20px]">
                  <span className="text-base2 font-bold">{item.title1}</span>{" "}
                  {item.title2}
                </h1>
                <Link href={item.link} className="btn btn-base2 max-w-[130px]">
                  KNOW MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <MobHomeMarquee />
      <EnquiryForm />
    </section>
  );
}
