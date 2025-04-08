"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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

const awards = [
  {
    image: "/images/awards-img-1.jpg",
    alt: "Life at Indel Image 1",
    title: "Indel Money Limited is bestowed as",
    title2: "GREAT PLACE TO WORK",
    href: "/",
  },
  {
    image: "/images/awards-img-1.jpg",
    alt: "Life at Indel Image 2",
    title: "Indel Money Limited is bestowed as",
    title2: "GREAT PLACE TO WORK",
    href: "/",
  },
  {
    image: "/images/awards-img-1.jpg",
    alt: "Life at Indel Image 3",
    title: "Indel Money Limited is bestowed as",
    title2: "GREAT PLACE TO WORK",
    href: "/",
  },
];

export default function MobJoinTeam() {
  return (
    <section className="w-full pb-[30px]">
      <div className="w-full py-[30px_15px] mb-[30px] bg-[#E3E3E3] rounded-[10px_10px_0_0] bg-gradient-to-tl from-base1 to-base2">
        <div className="container">
          <div className="text-title1 text-white mb-[15px] 2xl:mb-[30px]">
            Join the&nbsp;
            <span className="text-white font-bold">Team</span>
          </div>
        </div>
        <div className="w-full max-w-[calc(100%-((100%-var(--container-x))/2))] pr-0 mr-0 mx-auto pl-[var(--container-padding)]">
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
        <div className="container">
          <div className="w-full h-auto bg-white rounded-[24px] p-[20px] mb-[15px] @sm:mb-[25px]">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
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
      </div>
      <div className="container">
        <div className="w-full p-[20px_20px_10px] bg-white rounded-[24px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
          <div className="text-title1 text-base1 text-center font-bold mb-[15px] 2xl:mb-[20px]">
            Our Achievements
          </div>
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
            className="achievementsSlide pb-[30px]!"
            style={{
              "--swiper-pagination-bottom": "0",
              "--swiper-pagination-bullet-size": "6px",
              "--swiper-pagination-bullet-inactive-color": "#000",
              "--swiper-pagination-color": "#17479E",
            }}
          >
            {awards.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full block">
                  <div className="text-[14px] text-[#1e1e1e] font-normal text-center mb-[15px] @sm:mb-[20px]">
                    {item.title}
                    <span className="block text-[#EB0208] uppercase font-bold">
                      &nbsp;&apos;
                      {item.title2}
                      &apos;
                    </span>
                  </div>
                  <div className="w-full h-auto">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={170}
                      height={220}
                      className="aspect-170/220 rounded-[24px] mx-auto"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
