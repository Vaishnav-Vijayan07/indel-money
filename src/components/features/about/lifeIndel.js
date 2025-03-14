'use client';
import Link from "next/link";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const images = [
    "/images/lifeImage1.webp",
    "/images/lifeImage1.webp",
    "/images/lifeImage1.webp",
    "/images/lifeImage1.webp",
    "/images/lifeImage1.webp",
    "/images/lifeImage1.webp",
];
export default function lifeatIndel() {

    return (

        <section className="w-full 3xl:py-[70px] xl:py-[60px] py-[50px] bg-[linear-gradient(94deg, rgba(243, 0, 0, 0.00) 3%, rgba(235, 2, 8, 0.15) 97%);]">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-1/2">
                        <div className="relative w-[450px] m-auto">
                            {/* Swiper */}
                            <Swiper
                                effect="coverflow"
                                modules={[Navigation, EffectCoverflow]}
                                slidesPerView={6} // Show part of the previous & next slides
                                centeredSlides={true}
                                spaceBetween={-400} // Controls overlap
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2.5,
                                    slideShadows: false,
                                }}
                                navigation={{
                                    nextEl: ".swiper-next",
                                    prevEl: ".swiper-prev",
                                }}
                                className="relative w-full h-full !overflow-visible"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index} className="flex justify-center">
                                        <div
                                            className="relative w-full h-full bg-white rounded-lg shadow-xl transition-transform duration-300"
                                            style={{
                                                transform: `rotateZ(${index * -10}deg)`, // Subtle rotation effect
                                                zIndex: images.length - index, // Ensure top layering
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt={`Slide ${index}`}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                    <div className="w-1/2 flex items-center">
                        <div className="w-full">
                            <div className="text-title1 font-medium xl:mb-[20px] mb-[10px]">
                                Life at <span className="text-[#EE3824] font-bold">Indel</span>
                            </div>
                            <p className="3xl:text-[18px] mb-[15px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p className="3xl:text-[18px]">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. </p>
                            <Link
                                href="/"
                                className="group btn btn-base1 relative z-0 flex items-center justify-between mt-[15px] lg:mt-[30px] w-fit min-w-[200px] pr-3 pl-5 h-[45px] lg:h-[40px] 2xl:h-[50px] 3xl:h-[60px] rounded-full bg-base2 text-white font-bold transition-all duration-300 overflow-hidden shadow-lg hover:bg-base1"
                            >
                                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-[-15px]">
                                    APPLY NOW
                                </span>
                                <div
                                    className="relative z-10 flex items-center justify-center w-[30px] h-[30px] lg:w-[30px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[48px] 3xl:h-[48px] bg-base1 rounded-full text-red-500 transition-all duration-300  group-hover:translate-x-2 group-hover:bg-red-600 group-hover:text-white"
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
