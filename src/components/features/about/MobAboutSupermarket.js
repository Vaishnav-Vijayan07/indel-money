"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { renderHtml } from "@/lib/utils/htmlParser";

const slides = [
  {
    image: "/images/spImg1.webp",
    alt: "spImg1",
  },
  {
    image: "/images/spImg2.webp",
    alt: "spImg1",
  },
  {
    image: "/images/spImg3.webp",
    alt: "spImg1",
  },
  {
    image: "/images/spImg1.webp",
    alt: "spImg1",
  },
];

export default function MobAboutSupermarket({ serviceImages, description, title }) {
  return (
    <section className="w-full py-[25px_35px] rounded-[10px] bg-[#eef9ff]">
      <div className="container">
        <div className="text-title1 max-w-[220px] mb-[20px] [&>span]:font-bold [&>span]:text-base2">{title ? renderHtml(title) : ""}</div>
        <div className="rounded-[24px] mb-[20px] overflow-hidden">
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
          >
            {serviceImages?.map((item, index) => (
              <SwiperSlide key={index} className="max-w-[240px]">
                <div className="group w-full h-[160px] rounded-[24px] overflow-hidden relative z-0">
                  <Image
                    src={item?.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}` : "/images/spImg1.webp"}
                    alt={"spImg1"}
                    fill
                    sizes="240px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>{description ? renderHtml(description) : ""}</div>
      </div>
    </section>
  );
}
