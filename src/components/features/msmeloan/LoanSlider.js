"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LoanCardBx from "@/components/features/msmeloan/LoanCardBx";

const slides = [
  {
    image: "/images/loan01.jpg",
    alt: "Loan Image 1",
    title: "Trader’s Loan",
    title2: "Short Term Trader’s Loan",
    description:
      "We understand the requirement of small trading businesses and your struggle to meet daily working capital requirements. ",
    href: "/",
  },
  {
    image: "/images/loan02.jpg",
    alt: "Loan Image 2",
    title: "Business Loans",
    title2: "Structured Business Loans",
    description:
      "The key success factor of every MSME sector enterprise is ready availability of credit to facilitate working capital or fixed asset purchase requirements. ",
    href: "/",
  },
  {
    image: "/images/loan03.jpg",
    alt: "Loan Image 3",
    title: "Loans Against Property",
    title2: "Loans against property",
    description:
      "We understand the long-term financial needs of the small business units. Our long-term business loan options enables your access to high value loans by encashing the power of your property assets. ",
    href: "/",
  },
];

export default function LoanSlider() {
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    const updatePagination = () => {
      const screenWidth = window.innerWidth;
      let visibleSlides = 1.3;

      if (screenWidth >= 1024) visibleSlides = 3;
      else if (screenWidth >= 768) visibleSlides = 2;
      else if (screenWidth >= 640) visibleSlides = 2;

      setShowPagination(slides.length > visibleSlides);
    };

    updatePagination();
    window.addEventListener("resize", updatePagination);
    return () => window.removeEventListener("resize", updatePagination);
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={10}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={showPagination ? { clickable: true } : false}
      centeredSlides={true}
      centeredSlidesBounds={true}
      slidesPerView={1.3}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      className="LoanSlider !pb-[25px] !sm:pb-[20px] !lg:pb-[20px] !xl:pb-[30px]"
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <LoanCardBx item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
