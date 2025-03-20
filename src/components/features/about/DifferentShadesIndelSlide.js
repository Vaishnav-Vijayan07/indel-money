"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    src: "/images/shadeIndel-1.jpg",
    alt: "shadeIndel",
    title: "automotive",
    link: "/",
  },
  {
    src: "/images/shadeIndel-2.jpg",
    alt: "shadeIndel",
    title: "Hospitality",
    link: "/",
  },
  {
    src: "/images/shadeIndel-3.jpg",
    alt: "shadeIndel",
    title: "Insurance",
    link: "/",
  },
  {
    src: "/images/shadeIndel-4.jpg",
    alt: "shadeIndel",
    title: "Media & Entertainment",
    link: "/",
  },
  {
    src: "/images/shadeIndel-5.jpg",
    alt: "shadeIndel",
    title: "Infrastructure",
    link: "/",
  },
  {
    src: "/images/shadeIndel-1.jpg",
    alt: "shadeIndel",
    title: "automotive",
    link: "/",
  },
  {
    src: "/images/shadeIndel-2.jpg",
    alt: "shadeIndel",
    title: "Hospitality",
    link: "/",
  },
];

export default function DifferentShadesIndelSlide() {
  return (
    <section className="w-full block">
      <div className="container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          className="differentShadesSlide"
        >
          {slides?.map((item, index) => (
            <SwiperSlide key={index} className={`${index === 0 ? "max-w-[220px] sm:max-w-[240px] lg:max-w-[320px] xl:max-w-[468px] 2xl:max-w-[576px] 3xl:max-w-[676px]" : "max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] xl:max-w-[calc((100%-468px-10px)/4)] 2xl:max-w-[calc((100%-576px)/3)] 3xl:max-w-[calc((100%-676px)/3)]"} h-auto! mr-[4px] lg:mr-[6px] xl:mr-[20px] 2xl:mr-[15px] 3xl:mr-[20px] transition-all duration-300 `}>
              <ShadeIndelBox item={item} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}


function ShadeIndelBox({ item, index }) {
  const isActive = index === 0;
  return (
    <div
      className={`
              ${isActive ? "bg-[#dceafb]" : "bg-black"} group w-full xl:h-[420px] 2xl:h-[576px] 3xl:h-[660px] rounded-[10px] lg:rounded-[15px] 2xl:rounded-[20px] 3xl:rounded-[36px] overflow-hidden relative z-0 transition-all duration-300
              `}
    >
      <Image
        src={item?.src}
        alt={item?.alt}
        fill
        style={{ objectFit: "cover" }}
        className={`
          ${isActive ? "opacity-100" : "opacity-50" } transition-transform duration-300 group-hover:scale-105`}
      />
      {isActive ? (
        <div className="w-full h-auto bg-gradient-to-r to-base1/0 from-base2/60 p-[10px_15px] lg:p-[15px_20px] xl:p-[20px_40px] 2xl:p-[25px_60px] 3xl:p-[30px_80px] absolute z-1 left-0 bottom-0 right-0 lg:mb-[15px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[40px]">
          <div className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] xl:text-[40px] 2xl:text-[52px] 3xl:text-[60px] font-medium text-white uppercase line-clamp-1 leading-[1] transition-all duration-300">
            {item?.title}
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-b to-base1/25 from-base2/25 px-[15px] lg:px-[20px] xl:px-[30px] 2xl:px-[40px] 3xl:px-[60px] absolute z-1 left-0 bottom-0 right-0 [writing-mode:vertical-lr] rotate-[180deg] flex items-center">
          <div className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[40px] 3xl:text-[50px] font-medium text-white capitalize leading-[1] whitespace-nowrap text-ellipsis overflow-hidden transition-all duration-300">
            {item?.title}
          </div>
        </div>
      )}
    </div >
  )
}

