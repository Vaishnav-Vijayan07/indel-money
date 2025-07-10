"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";

import "./Home.css";

export default function HomeSlider({ heroBanner }) {
  return (
    <Swiper
      effect={"fade"}
      modules={[EffectFade, Pagination, Autoplay]}
      navigation={false}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={heroBanner?.length > 1 ? true : true}
      className="heroSlide h-[calc(100vh-(var(--header-y)+var(--marquee-y)))]"
    >
      {heroBanner?.map((item, index) => (
        <SwiperSlide
          key={index}
          className="relative z-0 before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-[rgba(0,0,0,0.6)] before:to-transparent before:w-full before:h-full"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.image}`}
            width={1920}
            height={1080}
            alt={item?.image_alt_text}
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            className="w-full h-full object-cover"
          />
          <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full max-w-[320px] lg:max-w-[376px] xl:max-w-[400px] 2xl:max-w-[450px] 3xl:max-w-[576px]">
              <h1
                className="text-[28px] sm:text-[30px] lg:text-[28px] xl:text-[32px] 2xl:text-[45px] 3xl:text-[50px] leading-[1.2] capitalize font-medium text-white mb-6 [&>span]:text-base2 [&>span]:font-bold"
                dangerouslySetInnerHTML={{ __html: item.title ? item.title : "" }}
              />

              <Link
                href={item?.button_link}
                className="btn btn-base2 max-w-[130px] lg:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[140px] 3xl:max-w-[160px]"
              >
                {item?.button_text}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
