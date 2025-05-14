"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LoanCardBx from "@/components/features/msmeloan/LoanCardBx";

const slides = [
  {
    image: "/images/serve01.jpg",
    alt: "Loan Image 1",
    title: "Manufacturing Enterprises",
    description:
      "Enterprises engaged in the manufacture, production, processing, preservation or packaging of goods with investment (original cost) in plant & machinery. ",
    href: "/",
  },
  {
    image: "/images/serve02.jpg",
    alt: "Loan Image 2",
    title: "Small Traders",
    description:
      "Enterprises engaged in small trading activities including small provision stores, medical stores, kirana stores, diary farms, poultries, textile shops, farm product trading/retailers & wholesalers, automobile workshops, service centres etc.",
    href: "/",
  },
  {
    image: "/images/serve03.jpg",
    alt: "Loan Image 3",
    title: "Service Enterprises",
    description:
      "Enterprises involved in providing or rendering of services with investments (original cost) in equipment excluding land, building, furniture and fittings not directly related to services rendered.",
    href: "/",
  },
];

export default function WhoDoServe() {
  return (
    <section className="w-full block py-[20px] md:py-[20px] xl:pt-[30px] 2xl:py-[50px] 3xl:py-[70px]">
      <div className="container">
        <h2 className="text-title1 mb-[20px] 2xl:mb-[30px]">
          Who Do
          <span className="text-base2 font-bold">&nbsp;Serve</span>
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="LoanSlider pb-[15px]! lg:pb-[20px]! xl:pb-[30px]!"
        >
          {slides?.map((item, index) => {
            const whoDoServe = index % 2 === 0 ? "whoDoServe1" : "whoDoServe2";
            return (
              <SwiperSlide key={index}>
                <LoanCardBx variant={whoDoServe} item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
