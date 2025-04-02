"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const slides = [
    {
        image: "/images/indel-money-cars-1.jpg",
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        date: "24 NOVEMBER 2024",
    },
    {
        image: "/images/indel-money-cars-2.jpg",
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        date: "24 NOVEMBER 2024",
    },
    {
        image: "/images/indel-money-cars-3.jpg",
        caption: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        date: "24 NOVEMBER 2024",
    },
];

const IndelMoneyCarsGallery = () => {
    return (
        <div className="relative w-[90%] md:w-[620px] lg:w-[820px] xl:w-[1000px] 2xl:w-[1300px] mx-auto">
            <Swiper
                modules={[Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 1200,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{
                    640: {
                        coverflowEffect: {
                            stretch: 200,
                        },
                    },
                    768: {
                        coverflowEffect: {
                            stretch: 970,
                        },
                    },
                    1024: {
                        coverflowEffect: {
                            stretch: 730,
                        },
                    },
                    1280: {
                        coverflowEffect: {
                            stretch: 890,
                        },
                    },
                    1536: {
                        coverflowEffect: {
                            stretch: 1170,
                        },
                    },
                }}
                autoplay={{ delay: 100000000000000 }}
                loop={true}
                className="w-full rounded-[35px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="">
                        <div className="relative z-0 w-[90%] h-[400px] 2xl:h-[690px] xl:h-[480px] mx-auto overflow-hidden rounded-[35px]">
                            <div className="group w-full h-full overflow-hidden">
                                <Image
                                    src={slide.image}
                                    alt={`Slide ${index}`}
                                    width={1230}
                                    height={690}
                                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                                />
                            </div>
                            <div className="absolute z-1 bottom-0 left-0 block w-full bg-gradient-to-t from-black/80 to-transparent text-white rounded-[35px] 2xl:p-[0_0_55px_65px] xl:p-[0_0_40px_40px] md:p-[0_0_30px_30px]">
                                <h2 className="2xl:text-[36px] xl:text-[24px] md:text-[22px] leading-[1.3] font-bold 2xl:max-w-[874px] xl:max-w-[720px] md:max-w-[640px] xl:mb-[15px] mb-[10px]">{slide.caption}</h2>
                                <p className="2xl:text-[18px] xl:text-[16px] text-[14px] font-normal text-white">{slide.date}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default IndelMoneyCarsGallery;
