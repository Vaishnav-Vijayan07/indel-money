"use client";
import EnquiryForm from "../../common/EnquiryForm";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

import "./Home.css";

const slides = [
  {
    image: "/images/mob-MainSlide1.jpg",
    alt: "Indel Money Banner 1",
    title1: "Indel Money:",
    title2: "Your trusted partner for a brighter future.",
    link: "/",
  },
  {
    image: "/images/mob-MainSlide1.jpg",
    alt: "Indel Money Banner 2",
    title1: "Empowering your",
    title2: "Financial dreams with confidence.",
    link: "/",
  },
  {
    image: "/images/mob-MainSlide1.jpg",
    alt: "Indel Money Banner 3",
    title1: "Your reliable",
    title2: "Partner in every financial journey.",
    link: "/",
  },
];

export default function MobHeroBanner() {
  return (
    <section className="w-full block relative z-0 overflow-hidden">
      <Swiper
        effect={"fade"}
        modules={[EffectFade, Pagination, Autoplay]}
        navigation={false}
        // pagination={{
        //   clickable: true,
        // }}
        pagination={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="heroSlide h-[calc(100vh-(var(--header-y)))]"
      >
        {slides?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative z-0 flex! items-end before:absolute before:inset-0 before:-z-1 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:w-full before:h-full py-[calc(var(--marquee-y)+65px)]"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority
              className="-z-2 object-cover"
            />
            <div className="container">
              <div className="max-w-full">
                <h1 className="text-[28px] leading-[1.2] capitalize font-medium text-white mb-[20px]">
                  <span className="text-base2 font-bold">{item.title1}</span>{" "}
                  {item.title2}
                </h1>
                <Link href={item.link} className="btn btn-base2 max-w-[130px]">
                  KNOW MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full absolute z-1 bottom-0 left-0 right-0">
        <div className="container">
          <div className="w-full text-sm1 leading-[1] text-white flex items-center gap-[6px] mb-[10px]">
            <Image
              src={"/images/mob-marquee-1.svg"}
              alt={"coin"}
              width={19}
              height={16}
              className="w-[18px] @sm:w-[15px] object-contain"
            />
            Gold rate
            <span className="text-black p-[6px_10px] bg-[#e8c002] rounded-[20px]">
              &#8377; 59,080
            </span>
          </div>
        </div>
        <div className="w-full h-[var(--marquee-y)] bg-base1 flex items-center">
          <div className="w-full max-w-[calc(100%-((100%-var(--container-x))/2))] pr-0 mr-0 ml-auto pl-[var(--container-padding)]">
            <Marquee speed={80} pauseOnHover={true} className="text-sm1 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Marquee>
          </div>
        </div>
      </div>
      {/* <EnquiryForm /> */}
    </section>
  );
}
