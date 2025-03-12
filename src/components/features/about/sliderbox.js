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
    { image: "/images/spImg1.webp", alt: "Indel Money Banner 3" }, 
];

export default function AboutVSlider() {
    return (
        <div className="flex justify-center items-center h-[700px] w-full">
            <Swiper
                direction="vertical"
                modules={[Autoplay, EffectCoverflow]}
                // autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={2} // Ensures top & bottom slides are visible
                spaceBetween={30} // Adjusts gap between slides
                centeredSlides={true}
                // effect="coverflow"
                // coverflowEffect={{
                //     rotate: 0, 
                //     // stretch: 0,
                //     // depth: 100, 
                //     modifier: 2,
                // }}
                className="h-full w-full"
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center transition-all duration-300">
                        <div className="relative w-[85%] h-full m-auto rounded-3xl overflow-hidden  transition-transform duration-300 scale-90 swiper-slide-active:w-full swiper-slide-active:scale-100">
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
