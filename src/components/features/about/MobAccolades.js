"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

const awards = [
  {
    image: "/images/awards-img-1.jpg",
    alt: "Life at Indel Image 1",
    title: "The Complete Financial Supermarket",
    highlight: "Supermarket",
    description:
      "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment,",
    href: "/",
  },
  {
    image: "/images/awards-img-1.jpg",
    alt: "Life at Indel Image 2",
    title: "The Complete Financial Supermarket",
    highlight: "Supermarket",
    description:
      "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment,",
    href: "/",
  },
  {
    image: "/images/awards-img-1.jpg",
    alt: "Life at Indel Image 3",
    title: "The Complete Financial Supermarket",
    highlight: "Supermarket",
    description:
      "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment,",
    href: "/",
  },
];

export default function MobAccolades() {
  return (
    <section className="py-[0_30px]">
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={5}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="mobAccoladesSlide"
          style={{
            "--swiper-pagination-bottom": "10px",
            "--swiper-pagination-bullet-size": "5px",
            "--swiper-pagination-bullet-inactive-color": "#17479e",
            "--swiper-pagination-color": "#f30000",
          }}
        >
          {awards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-auto flex p-[15px_10px_30px_15px] rounded-[20px] bg-gradient-to-l from-[rgba(255,197,197,0.40)] via-[rgba(23,71,158,0.30)] to-[rgba(255,197,197,0.30)]">
                <div className="w-[calc(100%-135px)] pr-[20px]">
                  <div className="text-[18px] leading-[1.2] font-normal text-[#1e1e1e] mb-[15px]">
                    {item.title.replace(item.highlight, "")}
                    <span className="text-base2 font-bold">
                      {item.highlight}
                    </span>
                  </div>
                  <div className="text-[12px] leading-[1.3] font-normal text-black">
                    {item.description}
                  </div>
                  <Link
                    href={item.href}
                    className="group text-[12px] leading-[1] font-medium capitalize text-[#100f0f] flex items-center mt-[15px] hover:text-base1"
                  >
                    view all
                    <Image
                      src={"/images/about-btn.svg"}
                      alt="btn"
                      width={24}
                      height={24}
                      className="aspect-square ml-[8px] group-hover:translate-x-[4px] transition-transform duration-300"
                    />
                  </Link>
                </div>
                <div className="w-[135px] overflow-hidden rounded-[20px] relative z-0">
                  <Image src={item.image} alt={item.alt} fill sizes={135} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
