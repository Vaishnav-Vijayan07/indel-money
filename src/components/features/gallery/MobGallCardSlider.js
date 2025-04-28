"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    src: "/images/gallSlide01.jpg",
    title: "0nam 2021",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages 1",
  },
  {
    src: "/images/gallSlide02.jpg",
    title: "0nam 2022",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages 2",
  },
  {
    src: "/images/gallSlide03.jpg",
    title: "0nam 2023",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages 3",
  },
  {
    src: "/images/gallSlide04.jpg",
    title: "0nam 2024",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages 4",
  },
  {
    src: "/images/gallSlide05.jpg",
    title: "0nam 2025",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages 5",
  },
  {
    src: "/images/gallSlide02.jpg",
    title: "0nam 2026",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages 6",
  },
  {
    src: "/images/gallSlide04.jpg",
    title: "0nam 2024",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages 7",
  },
];

export default function MobGallCardSlider() {
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <div className="container">
        <div className="w-full max-w-full relative overflow-hidden 4xs:px-[45px] px-[35px] py-[20px] bg-base1 rounded-[20px] bg-linear-to-br from-base1/80 to-base2/80 mb-[20px]">
          <div className="absolute inset-0 bg-white opacity-10 backdrop-blur-lg pointer-events-none rounded-[20px]" />
          <h3 className="text-[16px] leading-[1.2] font-semibold text-center text-white uppercase">
            {slides[activeIndex]?.title}
          </h3>
          <span className="w-full max-w-[120px] h-[1px] bg-white block mx-auto my-[5px]"></span>
          <p className="text-sm1 text-center text-white">
            {slides[activeIndex]?.description}
          </p>
        </div>
      </div>
      <style>{`
          .GallRoundSlide:not(.swiper-slide-active) .SwiprCntn{
                opacity: 0;
          }`}</style>

      <Swiper
        effect={"coverflow"}
        modules={[EffectCoverflow]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2.3}
        spaceBetween={15}
        loop={true}
        initialSlide={2}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={false}
        coverflowEffect={{
          // rotate: -2,
          // stretch: 2,
          // depth: 3,
          // modifier: 2,
          rotate: -7,
          stretch: 0,
          depth: 80,
          modifier: 2.2,
          slideShadows: false,
        }}
        breakpoints={{
          360: {
            slidesPerView: 3.4,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.8,
            spaceBetween: 30,
            coverflowEffect: {
              rotate: -5,
              stretch: 0,
              depth: 80,
              modifier: 1.2,
              slideShadows: false,
            },
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: -5,
              stretch: 0,
              depth: 80,
              modifier: 1.2,
              slideShadows: false,
            },
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 40,
            coverflowEffect: {
              rotate: -5,
              stretch: 0,
              depth: 80,
              modifier: 1.2,
              slideShadows: false,
            },
          },
          1920: {
            slidesPerView: 5,
            spaceBetween: 40,
            coverflowEffect: {
              rotate: -5,
              stretch: 0,
              depth: 20,
              modifier: 1.8,
              slideShadows: false,
            },
          },
        }}
        className="w-full max-w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full GallRoundSlide not-[:where(.swiper-slide-visible)]:opacity-0 not-[:has(.swiper-slide-active)]:[.SwiprCntn]:opacity-0"
          >
            {({ isActive }) => (
              <div className="relative w-full 4xs:h-[180px] h-[160px] rounded-[13px] overflow-hidden shadow-lg">
                <Image
                  src={slide.src}
                  alt={`Slide ${index}`}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
                {/* {isActive && ( */}
                <div className="SwiprCntn absolute bottom-0 left-0 right-0 text-white text-center py-[65px] px-[25px] bg-gradient-to-b from-transparent via-[#80000080] to-[#0047AB] z-1 pointer-events-none"></div>
                {/* // )} */}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
