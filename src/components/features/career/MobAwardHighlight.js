"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    image: "/images/mob-awards-img-1.jpg",
    alt: "awards 1",
    title: "Indel Premier League",
    description:
      "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    href: "/",
  },
  {
    image: "/images/mob-awards-img-2.jpg",
    alt: "awards 2",
    title: "Indel Element",
    description:
      "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    href: "/",
  },
  {
    image: "/images/mob-awards-img-3.jpg",
    alt: "awards 3",
    title: "CHRISTMAS  2023",
    description:
      "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    href: "/",
  },
  {
    image: "/images/mob-awards-img-1.jpg",
    alt: "awards 3",
    title: "Indel Premier League",
    description:
      "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    href: "/",
  },
  {
    image: "/images/mob-awards-img-2.jpg",
    alt: "awards 3",
    title: "Indel Premier League",
    description:
      "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    href: "/",
  },
  {
    image: "/images/mob-awards-img-3.jpg",
    alt: "awards 3",
    title: "CHRISTMAS  2023",
    description:
      "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    href: "/",
  },
];

export default function MobAwardHighlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full h-auto bg-white rounded-[24px] shadow-[0_0_15px_0_rgba(0,0,0,0.1)] p-[18px]">
      <div className="text-title1 text-center font-bold text-base1 mb-[15px]">
        Our Achievements
      </div>
      <div className="text-[14px] font-normal leading-[1.2] text-center text-[#1e1e1e] mb-[10px] [&>span]:font-bold [&>span]:text-base2 [&>span]:block">
        Indel Money Limited is bestowed as
        <span>&apos;GREAT PLACE TO WORK&apos;</span>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        watchSlidesProgress={true}
        pagination={{
          clickable: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="pb-[40px]! overflow-visible! mobAwardSlide"
        style={{
          "--swiper-pagination-bullet-size": "6px",
          "--swiper-pagination-bullet-inactive-color": "#d9d9d9",
          "--swiper-pagination-color": "#17479e",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        {slides?.map((item, index) => (
          <SwiperSlide key={index} className="w-[175px]!">
            <div className="w-full h-auto block rounded-[8px] overflow-hidden">
              <div className="w-full h-[165px] aspect-[175px/165px] overflow-hidden rounded-[8px] relative z-0 after:content-[''] after:w-full after:h-[80%] after:block after:absolute after:-z-1 after:inset-0 after:top-auto after:bg-linear-to-t after:from-base1 after:to-base2/0">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="175px"
                  className="-z-2 object-cover"
                />
                <div className="absolute z-1 inset-0 top-auto p-[10px]">
                  <div className="text-[13px] leading-none font-black capitalize text-white">
                    {item.title}
                  </div>
                  <span className="w-[60px] h-[1px] bg-white my-[5px] block"></span>
                  <div className="text-[12px] leading-[1.2] font-normal line-clamp-2 text-white ">
                    {item.description}
                  </div>
                </div>
              </div>
              {index === activeIndex && (
                <div className="w-full max-w-[95%] h-[60px] mx-auto overflow-hidden rounded-b-[24px] relative z-0">
                  <Image
                    src="/images/mob-awards-delmt.jpg"
                    alt={item.alt}
                    fill
                    sizes="175px"
                    className="object-cover object-top"
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
