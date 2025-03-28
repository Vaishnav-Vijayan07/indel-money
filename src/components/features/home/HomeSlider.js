
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        image: "/images/MainSlide1.webp",
        alt: "Indel Money Banner 1",
        title1: "Indel Money:",
        title2: "Your trusted partner for a brighter future.",
        link: "/",
    },
    {
        image: "/images/MainSlide1.webp",
        alt: "Indel Money Banner 2",
        title1: "Empowering your",
        title2: "Financial dreams with confidence.",
        link: "/",
    },
    {
        image: "/images/MainSlide1.webp",
        alt: "Indel Money Banner 3",
        title1: "Your reliable",
        title2: "Partner in every financial journey.",
        link: "/",
    }
];

export default function HomeSlider() {
    return (
        <Swiper
            effect={'fade'}
            modules={[EffectFade, Pagination, Autoplay]}
            navigation={false}
            pagination={{
                clickable: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="heroSlide h-[calc(100vh-(var(--header-y)+var(--marquee-y)))]"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative z-0 before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-[rgba(0,0,0,0.6)] before:to-transparent before:w-full before:h-full">
                    <Image src={slide.image} width={1920} height={1080} alt={slide.alt} className="w-full h-full object-cover" />
                    <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="max-w-[576px]">
                            <h1 className="text-5xl capitalize font-medium font-amino text-white mb-6"><span className="text-base2 font-bold">{slide.title1}</span> {slide.title2}</h1>
                            <Link href={slide.link} className="btn btn-base2 max-w-[80px] lg:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[160px]">
                                KNOW MORE
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}