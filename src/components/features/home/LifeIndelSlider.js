
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
        image: "/images/life04.webp",
        alt: "Indel Money Banner 1",
        p: "Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute Every year, more than 10,000 organizations from over 60 countries partner with Great Place to Work® Institute...",
        mHd: "Indel Money Limited is bestowed as",
        span: "GREAT PLACE TO WORK’",
        link: "/",
    },
    {
        image: "/images/life04.webp",
        alt: "Indel Money Banner 2",
        p: "We are committed to financial excellence and providing reliable services for our customers.",
        mHd: "Building a brighter financial future",
        span: "TOGETHER",
        link: "/",
    },
    {
        image: "/images/life04.webp",
        alt: "Indel Money Banner 3",
        p: "With a legacy of trust and innovation, we empower individuals and businesses alike.",
        mHd: "Your reliable financial partner",
        span: "FOR LIFE",
        link: "/",
    },
];

export default function LifeIndelSlider() {
    return (
        <Swiper
            effect={'fade'}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={false}
            pagination={{ clickable: true }}
            className="w-full lifeSlide pb-[30px]"
        >
            {slides.map((slide, index) => (  
                <SwiperSlide key={index}>  
                    <Link
                        href={slide.link}
                        className="block w-full h-full rounded-[24px] bg-[#E6EDF7] overflow-hidden p-[20px] pl-[25px]"
                    >
                        <div className="w-full flex flex-wrap sm:flex-row flex-col-reverse">
                            {/* Text Content Section */}
                            <div className="2xl:w-[calc(100%-200px)] xl:w-[calc(100%-150px)] lg:w-[calc(100%-100px)] sm:w-[calc(100%-100px)] w-full 2xl:pr-[30px] sm:pr-[20px] sm:pt-0 pt-[20px]">
                                <h5 className="mHd text-[#1E1E1E] 2xl:text-[23px] xl:text-[18px] sm:text-[16px] text-[15px] font-normal leading-normal 2xl:mb-[25px] mb-[15px]">
                                    {slide.mHd}
                                    <span className="text-base2 uppercase font-medium pl-[5px]">
                                        {slide.span}
                                    </span>
                                </h5>
                                <div className="w-full pb-[30px]">
                                    <p className="text-sm-1 line-clamp-4 xl:mb-[30px]">{slide.p}</p>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="2xl:w-[200px] xl:w-[150px] lg:w-[100px] w-[100px]">
                                <div className="group w-full h-auto xl:h-full rounded-[24px] overflow-hidden">
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        width={200}
                                        height={250}
                                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>

    );
}