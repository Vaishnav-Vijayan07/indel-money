"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Yearsinception() {

    const slides = [
        {
            year: "1986",
            image: "/images/h1.webp",
            title: "The Inception",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            year: "1991",
            image: "/images/h2.webp",
            title: "Expansion Phase",
            desc: "Growth into new markets and services.",
        },
        {
            year: "2000",
            image: "/images/h3.webp",
            title: "Millennium Leap",
            desc: "Technological advancements and brand revamp.",
        },
        {
            year: "2024",
            image: "/images/h4.webp",
            title: "Future Vision",
            desc: "Focused on innovation and global reach.",
        },
    ];

    return (
        <section className="relative   bg-[#003596]">
            <div className="container">
                <div className="flex flex-wrap" >
                    <div className="w-[420px] py-[120px] flex items-end">
                        <div className="h-fit w-full">
                            <div className="w-full text-[68px] text-white font-normal leading-[1]">Years Since
                                Inception</div>
                        </div>
                    </div>
                    <div className="w-[calc(100%-420px)] bg-[#17479E] pl-[130px] pt-[70px]">
                        <div className="relative flex justify-center max-w-[760px]">
                            <div className="relative z-10 w-[120px]">
                                <div className="text-white text-[90px] leading-none font-bold">
                                    19
                                </div>
                            </div>

                            <div className="w-[calc(100%-120px)]">
                                <Swiper
                                    direction="vertical"
                                    slidesPerView={2}
                                    spaceBetween={50}
                                    mousewheel={true}
                                    pagination={{ clickable: true }}
                                    modules={[Pagination, Mousewheel]}
                                    className="h-[750px]"
                                >
                                    {slides.map((slide, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex flex-wrap items-start text-white relative">
                                                <div className="w-[100px]">
                                                    <div className="text-white text-[93px] leading-none font-bold ">
                                                        {slide.year.slice(2)}
                                                    </div>
                                                </div>
                                                <div className="w-[calc(100%-100px)] pl-[50px]">
                                                    <div className="w-full block h-full">
                                                        <div className="rounded-[24px] overflow-hidden w-full mb-[15px]">
                                                            <Image
                                                                src={slide.image}
                                                                alt={slide.title}
                                                                width={400}
                                                                height={250}
                                                                className="w-full object-cover max-h-[250px]"
                                                            />
                                                        </div>
                                                        <h3 className="text-[18px] 2xl:text-[20px] 3xl:text-[22px] text-white font-semibold mb-[10px]">
                                                            {slide.title}
                                                        </h3>
                                                        <p className="text-white ">{slide.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}

                                    {/* Dummy slide */}
                                    <SwiperSlide>
                                        <div className="h-full w-full flex items-center justify-center">
                                            {/* You can leave this empty or show a subtle message/image */}
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >

    );
}
