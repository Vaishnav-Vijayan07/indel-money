"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";

export default function OurValues() {
    const slides = [
        {
            image: "/images/apprch01.svg",
            alt: "value-1",
            title: "Approach",
            description: "We follow an approach that is focused on innovation, sustainability and growth. We always strive to more and more efficient, customer-focused and matching to the need of time. Emerging opportunities are constantly monitored and acquired throughout the journey and we continue the same mission.",
        },
        {
            image: "/images/apprch02.svg",
            alt: "value-1",
            title: "Professional Integrity",
            description: "We follow an approach that is focused on innovation, sustainability and growth. We always strive to more and more efficient, customer-focused and matching to the need of time. Emerging opportunities are constantly monitored and acquired throughout the journey and we continue the same mission.",
        },
        {
            image: "/images/apprch03.svg",
            alt: "value-1",
            title: "Corporate Social Responsibility",
            description: "We follow an approach that is focused on innovation, sustainability and growth. We always strive to more and more efficient, customer-focused and matching to the need of time. Emerging opportunities are constantly monitored and acquired throughout the journey and we continue the same mission.",
        },
        {
            image: "/images/apprch01.svg",
            alt: "value-1",
            title: "Approach",
            description: "We follow an approach that is focused on innovation, sustainability and growth. We always strive to more and more efficient, customer-focused and matching to the need of time. Emerging opportunities are constantly monitored and acquired throughout the journey and we continue the same mission.",
        },
    ];

    return (
        <section className="w-full pb-[30px] xl:pb-[50px] 2xl:pb-[70px] 3xl:pb-[100px]">
            <div className="max-w-[var(--container-x)] lg:max-w-[calc(100%-(100%-var(--container-x))/2)] mx-auto lg:mr-[0] px-[var(--container-padding,1rem)] lg:pr-[0]">
                <h1 className="text-title1 text-[#1E1E1E] mb-[30px] 2xl:mb-[50px]">
                    Our Approach <br></br>
                    <span className="text-base2 font-bold">Proposition</span>
                </h1>
                <div className="w-full">
                    <Swiper
                        spaceBetween={10}
                        autoplay={false}
                        pagination={{ clickable: false }}
                        breakpoints={{
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 2.92, spaceBetween: 30 },
                        }}
                        className="!pb-[15px] !lg:pb-[20px] !xl:pb-[30px]">
                        {slides?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ValueBox item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
export function ValueBox({ item }) {
    return (
        <div className="w-full h-full overflow-hidden bg-gradient-to-b from-[rgba(23,71,158,0.06)] via-[rgba(23,71,158,0.12)] to-[rgba(238,56,36,0.30)] hover:from-[rgba(238,56,36,0.30)] hover:via-[rgba(23,71,158,0.12)] hover:to-[rgba(23,71,158,0.06)] p-[20px] xl:p-[30px] 2xl:p-[50px] 3xl:p-[60px] rounded-[20px] transition-all duration-600 hover:transform hover:translate-y-2 2xl:hover:translate-y-4">
            <div className="flex items-center mb-[20px]">
                <div className="group w-[35px] 2xl:w-[45px] h-[40px] 2xl:h-[50px]">
                    <Image
                        src={item.image}
                        alt={item.alt}
                        width={45}
                        height={50}
                        className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-[1.05]"
                    />
                </div>
                <div className="w-[calc(100%-35px)] 2xl:w-[calc(100%-45px)] pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px] text-black font-medium 2xl:font-normal leading-[1.1] text-[16px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] line-clamp-2">
                    {item.title}
                </div>
            </div>
            <div className="text-sm-1 text-black line-clamp-6">
                {item.description}
            </div>
        </div>
    );
}
