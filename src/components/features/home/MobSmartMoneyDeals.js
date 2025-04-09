"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const slides = [
  {
    image: "/images/MobSmartMoneyDeals-1.png",
    alt: "MobSmartMoneyDeals",
    title: "gold loan",
    link: "/",
  },
  {
    image: "/images/MobSmartMoneyDeals-2.png",
    alt: "MobSmartMoneyDeals",
    title: "MSME loan",
    link: "/",
  },
  {
    image: "/images/MobSmartMoneyDeals-3.png",
    alt: "MobSmartMoneyDeals",
    title: "consumer durable loan",
    link: "/",
  },
  {
    image: "/images/MobSmartMoneyDeals-1.png",
    alt: "MobSmartMoneyDeals",
    title: "gold loan",
    link: "/",
  },
  {
    image: "/images/MobSmartMoneyDeals-2.png",
    alt: "MobSmartMoneyDeals",
    title: "MSME loan",
    link: "/",
  },
  {
    image: "/images/MobSmartMoneyDeals-3.png",
    alt: "MobSmartMoneyDeals",
    title: "consumer durable loan",
    link: "/",
  },
];

export default function MobSmartMoneyDeals() {
  return (
    <section className="w-full py-[20px]">
      <div className="container">
        <div className="text-title1 mb-[10px] 2xl:mb-[15px]">
          Smart&nbsp;
          <span className="text-base2 font-bold">Money Deals</span>
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={5}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            384: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            448: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          className="mobSmartMoneyDealsSlide"
        >
          {slides?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                href={item.link}
                className="w-full h-full min-h-[120px] rounded-[15px] bg-gradient-to-tl from-base1/40 to-base2/40 p-[12px] flex items-center justify-center"
              >
                <div>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={50}
                    height={50}
                    className="aspect-square mx-auto"
                  />
                  <div className="text-[14px] font-medium leading-[1] line-clamp-3 text-black text-center capitalize mt-[10px] @md:mt-[15px]">
                    {item.title}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
