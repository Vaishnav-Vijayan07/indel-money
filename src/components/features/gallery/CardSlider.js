"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "./gallery.css";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    src: "/images/gallSlide01.jpg",
    title: "0nam 2024",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
  },
  {
    src: "/images/gallSlide02.jpg",
    title: "0nam 2024",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
  },
  {
    src: "/images/gallSlide03.jpg",
    title: "0nam 2024",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
  },
  {
    src: "/images/gallSlide04.jpg",
    title: "0nam 2024",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
  },
  {
    src: "/images/gallSlide05.jpg",
    title: "0nam 2024",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
  },
  {
    src: "/images/gallSlide02.jpg",
    title: "0nam 2024",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
  },
  {
    src: "/images/gallSlide04.jpg",
    title: "0nam 2024",
    description:
      "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
  },
];

export default function CardSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <div className="w-full flex justify-center items-center py-10">
      <style>{`
            .CardSlider .swiper-slide:not(.swiper-slide-active) .card-box-content{
                    opacity: 0;
            }`}</style>
      <Swiper
        onSlideChange={handleSlideChange}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={20}
        loop={true}
        initialSlide={2}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        coverflowEffect={{
          // rotate: -2,
          // stretch: 2,
          // depth: 3,
          // modifier: 2,
          rotate: -5,
          stretch: 0,
          depth: 80,
          modifier: 1.2,
          slideShadows: false,
        }}
        breakpoints={{
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
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
            coverflowEffect: {
              rotate: -5,
              stretch: 0,
              depth: 80,
              modifier: 1,
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
        modules={[EffectCoverflow, Navigation]}
        className="w-full max-w-full CardSlider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full not-[:where(.swiper-slide-visible)]:opacity-0 not-[:has(.swiper-slide-active)]:[.SwiprCntn]:opacity-0"
          >
            <div className="relative w-full h-[370px] lg:h-[350px] xl:h-[400px] 2xl:h-[400px] 3xl:h-[518px] rounded-[38px] overflow-hidden shadow-lg">
              <Image
                src={slide.src}
                alt={`Slide ${index}`}
                fill
                sizes="518px"
                className="object-cover"
              />
              <div
                className="card-box-content absolute z-1 bottom-0 left-0 right-0 p-[30px_15px] lg:p-[30px_15px] 2xl:p-[65px_25px] pointer-events-none transition-all duration-300  bg-gradient-to-b from-[rgba(143,0,0,0)] to-base1"
              >
                <h3 className="text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[18px] 3xl:text-[25px] uppercase font-black text-center text-white">
                  {slide.title}
                </h3>
                <span className="w-full max-w-[120px] h-[1px] bg-white my-[8px] lg:my-[10px] 2xl:my-[14px] mx-auto block"></span>
                <p className="text-[14px] sm:text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[18px] font-normal leading-[1.3] text-center text-white">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
