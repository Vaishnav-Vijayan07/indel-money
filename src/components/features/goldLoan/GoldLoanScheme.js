"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";

export default function Scheme({ goldLoanSchemes, scheme_title }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const schemes = goldLoanSchemes?.goldLoanSchemes || [];
    const schemeDetails = goldLoanSchemes?.goldLoanSchemeDetails || [];

    return (
        <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center">
                    {/* Title */}
                    <div className="w-full xl:w-[calc(100%-700px)] 2xl:w-[calc(100%-950px)] 3xl:w-[calc(100%-1020px)] text-black text-title1 font-normal max-xl:mb-[20px] [&>span]:text-base2 [&>span]:font-bold" dangerouslySetInnerHTML={{ __html: scheme_title || "" }} />

                    {/* Thumbnail Slider */}
                    <div className="w-full xl:w-[700px] 2xl:w-[950px] 3xl:w-[1020px]">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={6}
                            watchSlidesProgress
                            modules={[Thumbs]}
                            className="w-full"
                            breakpoints={{
                                320: { slidesPerView: 2, spaceBetween: 5 },
                                480: { slidesPerView: 3, spaceBetween: 8 },
                                768: { slidesPerView: 4, spaceBetween: 10 },
                                1024: { slidesPerView: 5, spaceBetween: 12 },
                                1280: { slidesPerView: 6, spaceBetween: 15 },
                            }}
                        >
                            {schemes?.map((type, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className={`w-full h-[40px] 2xl:h-[50px] 3xl:h-[60px] text-[12px] 2xl:text-[18px] 3xl:text-[20px] px-[10px] font-bold flex items-center justify-center rounded-[100px] cursor-pointer transition-all duration-300
                                        ${activeIndex === index
                                                ? "bg-base1 text-white thumbActive"
                                                : "bg-[#CFDFFE] text-black"
                                            }`}
                                    >
                                        {type}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Main Slider */}
                <div className="w-full mt-4">
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        modules={[Navigation, Thumbs]}
                        className="w-full"
                    >
                        {schemeDetails?.map((detailsArray, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="flex flex-wrap m-[-8px] 3xl:m-[-12px] py-[15px]">
                                    {detailsArray?.map((detail, detailIndex) => (
                                        <div className="w-[calc(100%/4)] lg:w-[calc(100%/5)] xl:w-[calc(100%/6)] p-[8px] 3xl:p-[12px]" key={detail.id || detailIndex}>
                                            <div className="w-full h-full shadow-[0_0_10px_rgba(0,0,0,0.20)] text-center rounded-[15px] 3xl:rounded-[25px] overflow-hidden">
                                                <div className="bg-[#CDE2FF] w-full min-h-[50px] 2xl:min-h-[55px] 3xl:min-h-[73px] flex items-center justify-center text-[12px] 2xl:text-[18px] 3xl:text-[24px] text-[#1F1B1B] font-medium">
                                                    {detail.title}
                                                </div>
                                                <div className="text-[#08388E] text-[12px] 2xl:text-[18px] 3xl:text-[24px] font-bold 
                                                    h-[calc(100%-50px)] 2xl:h-[calc(100%-55px)] 3xl:h-[calc(100%-73px)] flex items-center justify-center min-h-[65px] xl:min-h-[80px] 3xl:min-h-[120px] p-[15px]">
                                                    {detail.value || "—"}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
