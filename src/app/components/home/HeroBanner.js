"use client"; // Add this at the top of your component
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link";

const slides = [
  {
    image: "/images/MainSlide1.webp",
    alt: "Indel Money Banner 1",
    title: "Indel Money: Your trusted partner for a brighter future.",
    link: "/",
  },
  {
    image: "/images/MainSlide1.webp",
    alt: "Indel Money Banner 2",
    title: "Empowering your financial dreams with confidence.",
    link: "/",
  },
  {
    image: "/images/MainSlide1.webp",
    alt: "Indel Money Banner 3",
    title: "Your reliable partner in every financial journey.",
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
        className="mySwiper h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative z-0">
            <Image src={slide.image} width={1920} height={1080} alt={slide.alt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-xl text-white mb-4">{slide.title}</h1>
              <Link href={slide.link} className="btn-red">
                KNOW MORE
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
