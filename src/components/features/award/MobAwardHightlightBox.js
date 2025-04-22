"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "./AwardHighlightBox.css";

const slides = [
    {
        image: "/images/awards-img-1.jpg",
        alt: "Life at Indel Image 1",
        title: "Indel Money Limited is bestowed as",
        title2: "GREAT PLACE TO WORK",
        discription: "1 Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. ",
        href: "/",
    },
    {
        image: "/images/awards-img-1.jpg",
        alt: "Life at Indel Image 2",
        title: "Indel Money Limited is bestowed as",
        title2: "GREAT PLACE TO WORK",
        discription: "2 Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. ",
        href: "/",
    },
    {
        image: "/images/awards-img-1.jpg",
        alt: "Life at Indel Image 3",
        title: "Indel Money Limited is bestowed as",
        title2: "GREAT PLACE TO WORK",
        discription: "3 Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute for assessment, benchmarking, and planning actions to strengthen their workplace culture. ",
        href: "/",
    },
];

export default function MobAwardHighlightBox({ variant = "default" }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative z-0 w-full h-full block rounded-[25px] sm:bg-[#B7D0FF] bg-[#fff] shadow-[0_0_15px_0_rgba(0,0,0,0.10)] p-[20px] pb-[]">
            <h2 className="text-[20px] text-base1 font-bold mb-[10px] text-center">
                Our Achievements
            </h2>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                className="awardSlide !pb-[60px]"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full flex flex-wrap flex-col">
                            <div className="w-full sm:w-[calc(100%-150px)] lg:w-[calc(100%-180px)] xl:w-[calc(100%-220px)] 2xl:w-[calc(100%-276px)] 3xl:w-[calc(100%-376px)] 2xl:pr-[90px] xl:pr-[40px] md:pr-[20px] sm:pr-[20px]">
                                {variant === "employeeTestimonials" && (
                                    <div className="text-title1 font-bold leading-none mb-[5px] lg:mb-[10px] text-[#f30000]">
                                        Awards
                                    </div>
                                )}
                                <h5 className="text-[14px] text-black font-normal mb-[10px] text-center">
                                    {item.title}
                                    <span className="block text-[#EB0208] uppercase font-bold text-center">
                                        &apos;{item.title2}&apos;
                                    </span>
                                </h5>
                            </div>
                            <div className="w-[150px] m-auto">
                                <div className="group w-full h-full rounded-[24px] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={370}
                                        height={465}
                                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-full text-[12px] text-black line-clamp-5 rounded-[10px] bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.10)] overflow-hidden p-[25px]">
                {slides[activeIndex]?.discription}
            </div>
        </div>
    );
}
