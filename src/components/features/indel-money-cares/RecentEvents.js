"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MobBlogListCard from "@/components/features/blog/MobBlogListCard";
import Link from "next/link";
import EventCard from "./EventCard";

const RecentEvents = ({ recentBlogs, type = "indel-money-cares" }) => {
  return (
    <section className="p-[5px_0_30px_0] sm:p-[10px_0_40px_0] 2xl:p-[35px_0_75px_0]">
      <div className="container">
        <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black font-medium 2xl:mb-[45px] sm:mb-[15px] mb-[10px]">
          Recent Events
        </div>
        <div className="sm:block hidden">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 15 },
              992: { slidesPerView: 2, spaceBetween: 30 },
              1536: { slidesPerView: 2, spaceBetween: 70 },
            }}
            className="blog-slider"
          >
            {recentBlogs?.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={`/${type}/${item.slug}`}>
                  <EventCard item={item} type={"indel-money-cares"} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="sm:hidden flex flex-wrap">
          {recentBlogs?.map((item, index) => (
            <MobBlogListCard key={index} item={item} className="w-full py-[10px]" type={"indel-money-cares"} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
