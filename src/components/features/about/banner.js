
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
        image: "/images/aboutBanner.webp",
        alt: "Indel Money Banner 1",
        mainTitle: "ABOUT INDEL",
        title1: "Simplifying ",
        title2: "Finance",
        title3: "Empowering You",
    },
    {
        image: "/images/hero_banner.jpeg",
        alt: "Indel Money Banner 1",
        mainTitle: "ABOUT INDEL",
        title1: "Simplifying ",
        title2: "Finance",
        title3: "Empowering You",
    },
    {
        image: "/images/aboutBanner.webp",
        alt: "Indel Money Banner 1",
        mainTitle: "ABOUT INDEL",
        title1: "Simplifying ",
        title2: "Finance",
        title3: "Empowering You",
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
            className="aboutSlide heroSlide lg:h-[570px] h-[350px]"
        >
            {slides?.map((item, index) => (
                <SwiperSlide className="relative z-0">
                    <div className="absolute inset-0 w-[60%] h-full bg-gradient-to-r from-white/80 to-gray-500/0"></div>
                    <Image src={item?.image} width={1920} height={570} alt={item?.alt || "Slide Image"} priority className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 container ">
                        <div className="max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[550px] 3xl:max-w-[750px]">
                            <div className='text-[14px] lg:text-[18px] 2xl:text-[20px] text-[#17479E] font-[400] mb-[10px] leading-[1] uppercase'>{item?.mainTitle}</div>
                            <h1 className="text-[28px] sm:text-[32px] lg:text-[38px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[68px] leading-[1.2] capitalize font-normal text-black mb-4">
                                {item?.title1}
                                <span className="text-base2 font-bold"> {item?.title2} </span>
                                <span> {item?.title3} </span>
                            </h1>
                            <div className='breadcrumb flex flex-wrap'>
                                <Link href="/" className="block w-fit text-[14px] lg:text-[16px] xl:text-[18px] text-[#383838] mr-[25px] relative 
                                                before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                                                before:border-l-[8px] before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                                                before:content-[''] duration-100 hover:text-base2" >
                                    Home
                                </Link>
                                <Link
                                    href="/" className="block w-fit text-[14px] lg:text-[16px] xl:text-[18px] text-[#383838] mr-[25px] relative 
                                                before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                                                before:border-l-[8px] before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                                                before:content-[''] duration-100 hover:text-base2 
                                                last:before:hidden" >
                                    About
                                </Link>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    );
}