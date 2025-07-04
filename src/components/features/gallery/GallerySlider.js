"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const data = [
  {
    title: "Christmas 2023",
    desc: "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
    images: ["/images/galLst01.jpg", "/images/galLst02.jpg", "/images/galLst03.jpg", "/images/galLst04.jpg"],
  },
  {
    title: "Unveiling of our new branch",
    desc: "There are many variations of passages of Lorem Ipsum available There are many variations of ",
    images: ["/images/galLst01.jpg", "/images/galLst02.jpg", "/images/galLst03.jpg", "/images/galLst04.jpg"],
  },
  {
    title: "Convention 2024",
    desc: "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
    images: ["/images/galLst01.jpg", "/images/galLst02.jpg", "/images/galLst03.jpg", "/images/galLst04.jpg"],
  },
  {
    title: "Christmas 2024",
    desc: "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
    images: ["/images/galLst01.jpg", "/images/galLst02.jpg", "/images/galLst03.jpg", "/images/galLst04.jpg"],
  },
];

const GallSliderBx = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (hovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % item?.thumbnails?.length);
      }, 1000); // Change image every 1 second
    } else {
      setCurrentImage(0); // Reset to first image when not hovered
    }
    return () => clearInterval(interval);
  }, [hovered, item?.thumbnails?.length]);

  return (
    <Link
      href={item?.slug ? item?.slug : "/"}
      className="group block relative rounded-[20px] overflow-hidden w-full h-[165px] sm:h-[205px] xl:h-[275px] 2xl:h-[360px] 3xl:h-[410px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-full">
        {item?.thumbnails?.map((img, index) => (
          <Image
            key={index}
            src={img ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}` : "/images/gall04.jpg"}
            width={400}
            height={400}
            alt={`${item.title} image ${index + 1}`}
            className={`absolute w-full h-full rounded-[7px] sm:rounded-[12px] md:rounded-[20px] object-cover transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="w-full h-[100%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end bg-gradient-to-b from-transparent via-[#80000080] to-[#0047AB] px-[10px] md:px-[25px] py-[10px] md:py-[35px] opacity-100 translate-y-0">
        <div className="w-full h-fit">
          <div className="relative text-white font-semibold text-[12px] md:text-[17px] 2xl:text-[20px] 3xl:text-[25px] leading-[1.1] uppercase pb-[6px] 2xl:pb-[10px] 3xl:pb-[15px] mb-[8px] 2xl:mb-[10px] 3xl:mb-[15px] after:content-[''] after:w-[17%] 2xl:after:w-[23%] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0">
            {item.title ? item.title : ""}
          </div>
          <div className="text-sm1 w-full text-white line-clamp-2 md:line-clamp-3">{item.description ? item.description : ""}</div>
        </div>
      </div>
    </Link>
  );
};

export default function GallerySlider({ className, galleryItems }) {
  return (
    <section className="w-full pb-[30px] xl:pb-[60px] 3xl:pb-[100px]">
      <div className="container w-full"></div>
      <div className="max-w-[var(--container-x)] lg:max-w-[calc(100%-(100%-var(--container-x))/2)] mx-auto lg:mr-[0] px-[var(--container-padding,1rem)] lg:pr-[0]">
        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          slidesPerView={1.5}
          breakpoints={{
            420: { slidesPerView: 2.3, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 3.8, spaceBetween: 30 },
          }}
          className={`GallerySlider mb-[15px] lg:mb-[20px] xl:mb-[30px] ${className}`}
        >
          {galleryItems?.map((item, index) => {
            // Define dynamic classes for even/odd slides
            const cardClass =
              index % 2 === 0
                ? "bg-[linear-gradient(156deg,_rgba(23,71,158,0.20)_6.47%,_rgba(198,59,59,0.20)_91.2%)]"
                : "bg-[linear-gradient(180deg,rgba(243,0,0,0)_0%,#17479E_100%)] sm:bg-[linear-gradient(156deg,_rgba(198,59,59,0.20)_6%,_rgba(23,71,158,0.20)_91%)]";

            return (
              <SwiperSlide key={index}>
                <GallSliderBx item={item} className={`${cardClass}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
