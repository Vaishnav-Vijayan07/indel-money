"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const slides = [
    { image: "/images/spImg1.webp", alt: "Indel Money Banner 1" },
    { image: "/images/spImg2.webp", alt: "Indel Money Banner 2" },
    { image: "/images/spImg3.webp", alt: "Indel Money Banner 3" },
    { image: "/images/spImg2.webp", alt: "Indel Money Banner 3" },
];

export default function AboutVSlider() {
    return (
        <div className="flex justify-center items-center 3xl:h-[700px] 2xl:h-[650px] xl:h-[500px] lg:h-[450px] sm:h-[400px] h-[350px] w-full ">
            <Swiper
                direction="vertical"
                modules={[Autoplay]} // Include Autoplay
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={2}
                spaceBetween={15}
                centeredSlides={true}
                className="h-full w-full" >
                {slides.map((item, index) => (
                    <SwiperSlide key={index} className="group flex justify-center items-center transition-all duration-300">
                        <div className="relative w-[75%] h-full m-auto rounded-3xl overflow-hidden transition-all duration-300 group-[.swiper-slide-active]:w-[100%]">
                            <Image
                                src={item.image}
                                width={1920}
                                height={1080}
                                alt={item.alt}
                                priority
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}