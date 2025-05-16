"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import LatestUpdatesSlide from "../../common/LatestUpdatesSlide";
import MobLatestUpdatesSlide from "@/components/features/blog/MobLatestUpdatesSlide";
import { motion } from "framer-motion";
import { format } from "date-fns";

export default function MobLatestUpdates({ sliderItems, sliderTitle, sliderButtonText, sliderButtonLink }) {
  return (
    <section className="w-full py-[30px] bg-[#cae5f4] rounded-[20px_20px_0_0] overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap bg-[#cae5f4] rounded-[25px] 3xs:rounded-[36px] overflow-hidden ">
          <div className="w-full py-[20px] 3xs:py-[25px] px-[15px] 3xs:px-[22px]">
            <h3 className="text-[20px] text-black font-medium mb-[15px] 3xs:mb-[30px]">{sliderTitle}</h3>
            <div className="sm:hidden block">
              <MobLatestUpdatesSlide
                className={
                  "relative lg:before:[''] before:hidden lg:before:block before:absolute before:bottom-0 before:right-0 before:w-[170px] before:lg:w-[198px] before:xl:w-[241px] before:2xl:w-[337px] before:3xl:w-[423px] before:h-[1px] before:bg-[#a8a8a8]"
                }
                slides={sliderItems?.slice(0, 2)}
              />
            </div>
            <div className="sm:block hidden">
              <LatestUpdatesSlide
                className={
                  "relative lg:before:[''] before:hidden lg:before:block before:absolute before:bottom-0 before:right-0 before:w-[170px] before:lg:w-[198px] before:xl:w-[241px] before:2xl:w-[337px] before:3xl:w-[423px] before:h-[1px] before:bg-[#a8a8a8]"
                }
                slides={sliderItems?.slice(0, 2)}
              />
            </div>
          </div>
          <div className="w-full h-[260px]">
            {/* Show only the first object */}
            {sliderItems?.slice(0, 1).map((item, index) => (
              <div key={index} className="group w-full h-full overflow-hidden block relative">
                {console.log("item", `${process.env.NEXT_PUBLIC_BACKEND_URL}/${item?.image}`)}
                {/* <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item?.image}`}
                  alt={item?.image_alt}
                  fill
                  sizes="520px"
                  className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
                /> */}
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item?.image}`}
                  alt={item?.image_alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
                />
                <div className="w-full h-full absolute inset-0 top-auto px-[25px] py-[30px] bg-gradient-to-b from-black/0 to-black flex flex-wrap items-end">
                  <div className="h-fit w-full">
                    <div className="text-[12px] text-white line-clamp-1 mb-2">
                      {format(new Date(item?.createdAt), "d MMMM yyyy")}
                    </div>
                    <div className="text-[16px] leading-[1.2] text-white font-medium line-clamp-2 mb-4">{item?.title}</div>
                    <Link
                      href={item?.href || "/"}
                      className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-bold text-white hover:text-base2 transition-color duration-300 uppercase flex items-center"
                    >
                      Read More
                      <Image
                        src="/images/icon-news1.svg"
                        width={10}
                        height={10}
                        alt="news1"
                        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <div className="flex justify-between items-center gap-2 mb-[15px] @sm:mb-[20px]">
            <h3 className="text-title1 font-medium text-black max-w-[75%]">CSR Activity</h3>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={2}
            spaceBetween={6}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            breakpoints={{
              384: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
            }}
            className="csrActivitySlide"
            style={{
              "--swiper-pagination-bullet-size": "6px",
              "--swiper-pagination-bullet-inactive-color": "#fff",
              "--swiper-pagination-color": "#17479e",
              "--swiper-pagination-bullet-inactive-opacity": "1",
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={item.href} className="group w-full h-auto block bg-white p-[10px] rounded-[16px]">
                  <div className="w-full h-[100px] rounded-[16px] overflow-hidden relative z-0 mb-[12px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="160px"
                      className="transition-transform duration-300 object-cover group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full h-auto">
                    <div className="text-[10px] leading-none font-normal text-[#505050] line-clamp-1 mb-[2px]">{item.date}</div>
                    <div className="text-[12px] leading-[1.2] text-black font-medium line-clamp-2 mb-[5px]">{item.title}</div>
                    <div className="text-[10px] leading-[1.4] text-[#2d2d2d] font-normal line-clamp-3 mb-[5px]">{item.title}</div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
