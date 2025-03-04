"use client"; // Add this at the top of your component
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

import Marquee from "react-fast-marquee";
import { color } from "framer-motion";

const slides = [
  {
    image: "/images/MainSlide1.webp",
    alt: "Indel Money Banner 1",
    title: "Indel Money:",
    title2: "Your trusted partner for a brighter future.",
    link: "/",
  },
  {
    image: "/images/MainSlide1.webp",
    alt: "Indel Money Banner 2",
    title1: "Empowering your",
    title2: "Financial dreams with confidence.",
    link: "/",
  },
  {
    image: "/images/MainSlide1.webp",
    alt: "Indel Money Banner 3",
    title1: "Your reliable",
    title2: "Partner in every financial journey.",
    link: "/",
  }
];

export default function HeroBanner() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper h-[calc(100vh-(var(--header-y)+var(--marquee-y)))]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative z-0">
            <Image src={slide.image} width={1920} height={1080} alt={slide.alt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-xl text-white mb-4"><span>{slide.title1}</span> {slide.title2}</h1>
              <Link href={slide.link} className="btn-red">
                KNOW MORE
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full h-[var(--marquee-y)] flex flex-wrap items-center bg-[#bb7d0ff]">
        <div className="w-[340px] h-[var(--marquee-y)] flex items-center justify-center bg-green-900">
          <Image src={"/images/marquee-1.png"} width={25} height={25} alt={"coin"} className="w-6 h-6 mr-3 object-contain" />
          Todays Gold rate : Rs.59,080
        </div>
        <div className="w-[calc(100%-340px)]">
          <Marquee
            speed={80}
            pauseOnHover={true}
            className="marquee"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Marquee>

        </div>
      </div>
    </section>
  );
}
