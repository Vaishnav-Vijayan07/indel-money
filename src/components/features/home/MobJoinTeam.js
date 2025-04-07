"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/mobJoinTeam-1.jpg",
    alt: "mobJoinTeam",
    link: "/",
  },
  {
    image: "/images/mobJoinTeam-2.jpg",
    alt: "mobJoinTeam",
    link: "/",
  },
  {
    image: "/images/mobJoinTeam-3.jpg",
    alt: "mobJoinTeam",
    link: "/",
  },
];

export default function MobJoinTeam() {
  return (
    <section className="w-full py-[30px_15px] mb-[30px] bg-[#E3E3E3] rounded-[10px_10px_0_0] bg-gradient-to-tl from-base1 to-base2">
      <div className="container">
        <div className="text-title1 text-white mb-[15px] 2xl:mb-[30px]">
          Join the&nbsp;
          <span className="text-white font-bold">Team</span>
        </div>
      </div>
      <div className="w-full max-w-[var(--container-x)] mx-auto pl-[var(--container-padding)] pr-[var(--container-padding)] lg:max-w-[calc(100%-((100%-var(--container-x))/2))] lg:pr-0 lg:mr-0">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
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
              spaceBetween: 10,
            },
          }}
          className="mobJoinTeamSlide mb-[15px] @sm:mb-[25px]"
        >
          {slides?.map((item, index) => (
            <SwiperSlide key={index} className="max-w-[180px]">
              <div className="group w-full h-[150px] rounded-[15px] overflow-hidden relative z-0">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="aspect-4/3 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full h-auto bg-white rounded-[24px] p-[20px] mb-[15px] @sm:mb-[25px]">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries,{" "}
          </p>
        </div>
        <div className="flex flex-wrap justify-between -mx-[5px]">
          <div className="p-[5px]">
            <Link href={"#"} className="btn btn-base2 min-w-[210px]">
              TAKE ME TO CAREER PAGE
            </Link>
          </div>
          <div className="p-[5px]">
            <Link href={"#"} className="btn btn-base1 min-w-[140px]">
              VISIT GALLERY
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
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
              spaceBetween: 10,
            },
          }}
          className="mobJoinTeamSlide mb-[15px] @sm:mb-[25px]"
        >
          {slides?.map((item, index) => (
            <SwiperSlide key={index} className="max-w-[180px]">
              <div className="group w-full h-[150px] rounded-[15px] overflow-hidden relative z-0">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="aspect-4/3 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
