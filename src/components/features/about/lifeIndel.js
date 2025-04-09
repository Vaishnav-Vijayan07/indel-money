'use client';
import Link from "next/link";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
    "/images/lifeImage1.webp",
    "/images/lifeImage2.webp",
    "/images/lifeImage3.webp",
    "/images/lifeImage1.webp",
    "/images/lifeImage1.webp", 
];

export default function lifeatIndel() {
    return (
        <section className="w-full py-[80px] xl:py-[80px] 2xl:py-[120px] bg-[linear-gradient(95deg, rgba(243, 0, 0, 0) 3%, rgba(235, 2, 8, 0.15) 100%)]">
            <div className="container">
                <div className="flex flex-wrap items-center m-[-8px]">
                    <div className="w-full xl:w-[600px] 2xl:w-[750px] p-[8px]">
                        <div className="relative w-full max-w-[750px] m-auto">
                            <Swiper
                                slidesPerView={4}
                                slidesPerGroup={1}
                                grabCursor={true}
                                centeredSlides={true}
                                watchSlidesProgress={true}
                                spaceBetween={-500}
                                modules={[Navigation]}
                                simulateTouch={false}  
                                allowTouchMove={false}
                                navigation={{
                                    nextEl: ".custom-next",
                                    prevEl: ".custom-prev",
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: -100,
                                    },
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: -250,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: -240,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: -500,
                                    },
                                }}
                                className="relative w-[250px] lg:w-[260px] xl:w-[520px] h-full m-auto !overflow-visible lifeSlider"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index} className="flex justify-center">
                                        {({ isActive, isVisible }) => {
                                            const offset = -8;
                                            const translateValue = index * offset;

                                            return (
                                                <div
                                                    className="relative w-[300px] h-[350px] m-auto rounded-lg shadow-xl overflow-hidden"
                                                    style={{
                                                        transform: isActive
                                                            ? `rotateZ(0deg) translateX(${translateValue + 20}px) `
                                                            : `translateX(${translateValue + 20}px) rotateZ(${translateValue + offset}deg)`,
                                                        opacity: isVisible ? 1 : 0,
                                                        zIndex: isActive ? 9999 : images.length - index,
                                                        transition: "transform 0.5s ease, opacity 1s ease",
                                                    }}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`Slide ${index}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            );
                                        }}
                                    </SwiperSlide>
                                ))}
                            </Swiper>


                            <div className="flex justify-between items-center rounded-[50px] p-[8px] 3xl:p-[15px] bg-custom-gradient absolute top-0 bottom-0 m-auto w-full h-fit">

                                <button
                                    className="custom-prev w-[40px] h-[40px] 3xl:w-[50px] 3xl:h-[50px] rounded-full bg-base1 text-white flex items-center justify-center shadow-xl z-20 transition-all duration-500 cursor-pointer hover:bg-base2 swiper-button-disabled:opacity-50 swiper-button-disabled:cursor-not-allowed"
                                >
                                    <svg viewBox="0 0 19 15" className="w-[18px]" >
                                        <path d="M7.25 14.25L8.825 12.6187L4.83125 8.625H18.5V6.375H4.83125L8.825 2.38125L7.25 0.75L0.5 7.5L7.25 14.25Z" fill="white" />
                                    </svg>

                                </button>

                                <button
                                    className="custom-next w-[40px] h-[40px] 3xl:w-[50px] 3xl:h-[50px]  rounded-full bg-base1 text-white flex items-center justify-center shadow-xl z-20 transition-all duration-500 cursor-pointer hover:bg-base2 swiper-button-disabled :opacity-50 swiper-button-disabled :cursor-not-allowed"

                                >
                                    <svg viewBox="0 0 19 15" className="w-[18px]" >
                                        <path d="M11.75 14.25L10.175 12.6187L14.1687 8.625H0.5V6.375H14.1687L10.175 2.38125L11.75 0.75L18.5 7.5L11.75 14.25Z" fill="white" />
                                    </svg>

                                </button>
                            </div>
                        </div>


                    </div>
                    <div className=" w-full xl:w-[calc(100%-600px)] 2xl:w-[calc(100%-750px)] max-xl:pt-[50px] flex items-center p-[8px]">
                        <div className="w-full lg:pl-[60px]">
                            <div className="text-title1 font-medium xl:mb-[20px] mb-[10px]">
                                Life at <span className="text-[#EE3824] font-bold">Indel</span>
                            </div>
                            <p className="3xl:text-[18px] mb-[15px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p className="3xl:text-[18px]">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. </p>
                            <Link
                                href="/"
                                className="group btn btn-base1 relative z-0 flex items-center justify-between mt-[15px] lg:mt-[30px] w-fit min-w-[150px] 2xl:min-w-[200px] pr-3 pl-5 h-[45px] lg:h-[40px] 2xl:h-[50px] 3xl:h-[60px] rounded-full bg-base2 text-white font-bold transition-all duration-300 overflow-hidden shadow-lg hover:bg-base1"
                            >
                                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-[-15px]">
                                    APPLY NOW
                                </span>
                                <div
                                    className="relative z-10 flex items-center justify-center w-[30px] h-[30px] lg:w-[30px] lg:h-[30px] xl:w-[40px] 2xl:h-[40px] 3xl:w-[48px] 3xl:h-[48px] bg-base1 rounded-full text-red-500 transition-all duration-300  group-hover:translate-x-2 group-hover:bg-red-600 group-hover:text-white"
                                >
                                    <svg viewBox="0 0 13 11" className="max-w-[15px]" >
                                        <path d="M8.125 10.375L6.9875 9.19687L9.87187 6.3125H0V4.6875H9.87187L6.9875 1.80312L8.125 0.625L13 5.5L8.125 10.375Z" fill="white" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
