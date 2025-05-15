"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import BlogCard from "./BlogCard";
import Link from "next/link";

export default function LatestUpdatesSlide({ slides, className }) {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={"auto"}
      spaceBetween={0}
      className="latestSlide h-[420px] lg:h-[440px] xl:h-[468px] 2xl:h-[576px] 3xl:h-[700px]"
    >
      {slides?.map((item, index) => (
        <SwiperSlide
          key={index}
          className="h-[calc(420px/3)]! lg:h-[calc(440px/3)]! xl:h-[calc(468px/3)]! 2xl:h-[calc(576px/3)]! 3xl:h-[calc(700px/3)]!"
        >
          <Link href={`/blog/${item?.slug}`}>
            <BlogCard className={className} item={item} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
