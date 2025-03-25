"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

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
];

export default function DifferentShadesIndelSlide() {
  return (
    <section className="w-full block py-[20px] lg:py-[40px] 2xl:py-[60px] 3xl:py-[80px] overflow-hidden">
      <div className="container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          className="differentShadesSlide overflow-visible!"
        >
          {slides?.map((item, index) => (
            <SwiperSlide key={index} className={`${index === 0 ? "max-w-[240px] sm:max-w-[276px] md:max-w-[320px] lg:max-w-[376px] xl:max-w-[453px] 2xl:max-w-[568px] 3xl:max-w-[668px]" : "max-w-[85px] sm:max-w-[79px] md:max-w-[100px] lg:max-w-[115px] xl:max-w-[135px] 2xl:max-w-[156px] 3xl:max-w-[205px] lg:odd:translate-y-[20px] xl:odd:translate-y-[25px] 2xl:odd:translate-y-[30px] 3xl:odd:translate-y-[40px] lg:even:-translate-y-[20px] xl:even:-translate-y-[25px] 2xl:even:-translate-y-[30px] 3xl:even:-translate-y-[40px]"} h-auto! mr-[4px] lg:mr-[10px] xl:mr-[20px] 2xl:mr-[30px] 3xl:mr-[40px] transition-all duration-300  `}>
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
              ${isActive ? "bg-[#dceafb]" : "bg-black"} group w-full h-[276px] sm:h-[320px] lg:h-[368px] xl:h-[420px] 2xl:h-[576px] 3xl:h-[660px] rounded-[10px] lg:rounded-[15px] 2xl:rounded-[20px] 3xl:rounded-[36px] overflow-hidden relative z-0 transition-all duration-300
              `}
    >
      <Image
        src={item?.src}
        alt={item?.alt}
        fill
        style={{ objectFit: "cover" }}
        className={`
          ${isActive ? "opacity-100" : "opacity-50"} transition-transform duration-300 group-hover:scale-105`}
      />
      {isActive ? (
        <div className="w-full h-auto bg-gradient-to-r to-base1/0 from-base2/60 p-[10px_15px] lg:p-[15px_20px] xl:p-[20px_40px] 2xl:p-[25px_60px] 3xl:p-[30px_70px] absolute z-1 left-0 bottom-0 right-0 lg:mb-[15px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[40px]">
          <div className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] xl:text-[38px] 2xl:text-[52px] 3xl:text-[60px] font-medium text-white uppercase line-clamp-1 leading-[1] transition-all duration-300">
            {item?.title}
          </div>
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-b to-base1/25 from-base2/25 px-[15px] lg:px-[20px] xl:px-[30px] 2xl:px-[40px] 3xl:px-[60px] absolute z-1 left-0 bottom-0 right-0 [writing-mode:vertical-lr] rotate-[180deg] flex items-center">
          <div className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[40px] 3xl:text-[48px] font-medium text-white capitalize leading-[1] whitespace-nowrap text-ellipsis overflow-hidden transition-all duration-300">
            {item?.title}
          </div>
        </div>
      )}
    </div >
  )
}

