"use client";
import HeroBannerEnquiry from "./HeroBannerEnquiry";
import Image from "next/image";
import MobHomeMarquee from "../../features/home/MobHomeMarquee";
import { renderHtml } from "@/lib/utils/htmlParser";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";

import "./Home.css";

export default function MobHeroBanner({ heroBanner, initialData, announcement, goldRate }) {
  return (
    <section className="w-full block relative z-0 overflow-hidden">
      <Swiper
        effect={"fade"}
        modules={[EffectFade, Pagination, Autoplay]}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={heroBanner?.length > 1 ? true : true}
        className="heroSlide h-[calc(95vh-(var(--header-y)))] sm:h-[calc(100vh-(var(--header-y)))]"
      >
        {heroBanner?.map((item, index) => (
          <SwiperSlide
            key={index}
            // className="relative z-0 flex! items-end before:absolute before:inset-0 before:-z-1 before:block before:bg-gradient-to-t before:from-black before:to-transparent before:w-full before:h-full py-[calc(var(--marquee-y)+50px)]"
            className="relative z-0 flex! items-end"
          >
            <Image
              src={item?.image_mobile ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.image_mobile}` : ""}
              alt={item.image_alt_text}
              fill
              sizes="100vw"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              className="-z-2 object-cover"
            />
            <div className="container">
              <div className="max-w-full">
                <h2 className="text-[28px] leading-[1.2] capitalize font-medium text-white mb-[10px] 4xs:mb-[15px] [&>span]:text-base2 [&>span]:font-bold">
                  {item?.title ? renderHtml(item.title) : ""}
                </h2>
                {/* <Link href={item?.button_link} className="btn btn-base2 max-w-[130px]">
                  {item?.button_text}
                </Link> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <MobHomeMarquee
        announcementText={announcement}
        goldRateLabel={initialData?.pageContent?.gold_rate_label}
        goldRateIcon={initialData?.pageContent?.gold_rate_icon}
        goldRate={goldRate}
      />
      <HeroBannerEnquiry />
    </section>
  );
}
