"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Link from "next/link";
const slides = [
    { image: "/images/accolades1.png", alt: "accoladesImg" },
    { image: "/images/accolades2.png", alt: "accoladesImg" },
    { image: "/images/accolades3.png", alt: "accoladesImg" },
    { image: "/images/accolades4.png", alt: "accoladesImg" },
    { image: "/images/accolades5.png", alt: "accoladesImg" },
    { image: "/images/accolades5.png", alt: "accoladesImg" },
];


export default function AboutVSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="w-full 3xl:px-[110px] px-[70px]">
            <div className="relative w-full">
                {/* Custom Navigation Buttons */}
                <button className="custom-prev absolute top-1/2 xl:left-[-80px] md:left-[-50px] left-[-40px] transform -translate-y-1/2 2xl:w-[40px] 2xl:h-[40px] w-[35px] h-[35px] flex items-center justify-center text-white rounded-full shadow-md transition-all duration-300 cursor-pointer rotate-180 opacity-100 swiper-button-disabled:opacity-50">
                    <svg  viewBox="0 0 37 37" fill="none">
                        <circle cx="18.5" cy="18.5" r="18.5" fill="url(#prev-gradient)" />
                        <path d="M21.125 23.375L19.9875 22.1969L22.8719 19.3125H13V17.6875H22.8719L19.9875 14.8031L21.125 13.625L26 18.5L21.125 23.375Z" fill="white" />
                        <defs>
                            <linearGradient id="prev-gradient" x1="18.5" y1="0" x2="18.5" y2="37" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#17479E" />
                                <stop offset="1" stopColor="#EB0208" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>

                <button className="custom-next absolute top-1/2 xl:right-[-80px] md:right-[-50px] right-[-40px] transform -translate-y-1/2  w-[35px] h-[35px] flex items-center justify-center text-white rounded-full shadow-md transition-all duration-300 cursor-pointer opacity-100 swiper-button-disabled:opacity-50">
                    <svg  viewBox="0 0 37 37" fill="none">
                        <circle cx="18.5" cy="18.5" r="18.5" fill="url(#next-gradient)" />
                        <path d="M21.125 23.375L19.9875 22.1969L22.8719 19.3125H13V17.6875H22.8719L19.9875 14.8031L21.125 13.625L26 18.5L21.125 23.375Z" fill="white" />
                        <defs>
                            <linearGradient id="next-gradient" x1="18.5" y1="0" x2="18.5" y2="37" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#17479E" />
                                <stop offset="1" stopColor="#EB0208" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>  

                {/*  Thumbnail Slider */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    modules={[Navigation, Thumbs]}
                    slidesPerView={5}
                    spaceBetween={10}
                    grabCursor={true}
                    watchSlidesProgress={true}
                    loop={false}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    className="2xl:h-[135px] lg:h-[90px] h-[70px] w-full mb-[40px] relative border-b border-b-[#93ABD6]"
                >
                    {slides.map((item, index) => (
                        <SwiperSlide key={index} className="group flex justify-center items-center transition-all duration-300 cursor-pointer">
                            <div className="relative w-full h-full grayscale overflow-hidden flex items-center justify-center rounded-[10px] transition-all duration-300 group-hover:grayscale-0 group-[.swiper-slide-thumb-active]:grayscale-0 group-[.swiper-slide-thumb-active]:bg-gradient-to-t from-[rgba(23,71,158,0.50)] to-[rgba(255,255,255,0.00)]">
                                <Image
                                    src={item.image}
                                    width={135}
                                    height={70}
                                    alt={item.alt}
                                    priority
                                    className="w-full h-full object-contain 2xl:max-w-[135px] lg:max-w-[110px] max-w-[90px]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>


            {/* Main Slider */}
            <Swiper
                modules={[Autoplay, Thumbs]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <div className="flex flex-wrap w-full">
                        <div className="3xl:w-[250px] 2xl:w-[200px] w-[150px] max-md:mb-[20px]">
                            <div className="w-ful h-full">
                                <Image
                                    src={"/images/achievement.png"}
                                    width={250}
                                    height={360}
                                    alt={'achievementimage'}
                                    priority
                                    className="w-full  object-cover"
                                />
                            </div>
                        </div>
                        <div className="3xl:w-[calc(100%-250px)] 2xl:w-[calc(100%-200px)] w-[calc(100%-150px)]  2xl:pl-[55px] md:pl-[35px] pl-[25px] text-justify">
                            <div className="3xl:text-[32px] xl:text-[20px]  text-[14px] text-black mb-[15px]">Indel Money Limited is bestowed as <span className="block font-medium text-black"> GREAT PLACE TO WORK</span></div>
                            <p className="3xltext-[18px] 2xl:text-[16px]  text-[12px] text-[#343434] leading-[1.4]">Each year, over 10,000 organizations from more than 60 countries collaborate with Great Place to Work® Institute to assess, benchmark, and plan actions that strengthen their workplace culture. While numerous variations of Lorem Ipsum are available, most have been altered or contain random, non-contextual text. Our Lorem Ipsum generator, however, creates high-quality, meaningful content by combining a dictionary of over 200 Latin words with model sentence structures. This ensures the generated text is free from repetition, humor, or irrelevant words, providing a more authentic and usable placeholder for your projects.</p>
                            <Link href="#" className="3xl:text-[18px] lg:text-[16px] text-[14px] text-white 2xl:h-[50px] h-[40px] w-full overflow-hidden rounded-[50px] bg-base2 max-w-[150px] flex items-center justify-center 2xl:mt-[40px] mt-[20px] lg:ml-auto transition-all duration-300 hover:bg-base1">
                                VIEW ALL
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}