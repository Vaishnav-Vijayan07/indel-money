"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

const slides = [
    { src: 'https://placehold.co/1237x693/webp?text=01', title: '0nam 2024', description: 'There are many variations of passages of Lorem Ipsum available There are many variations of passages' },
    { src: 'https://placehold.co/1237x693/webp?text=02', title: '0nam 2024', description: 'There are many variations of passages of Lorem Ipsum available There are many variations of passages' },
    { src: 'https://placehold.co/1237x693/webp?text=03', title: '0nam 2024', description: 'There are many variations of passages of Lorem Ipsum available There are many variations of passages' },
    { src: 'https://placehold.co/1237x693/webp?text=04', title: '0nam 2024', description: 'There are many variations of passages of Lorem Ipsum available There are many variations of passages' },
    { src: 'https://placehold.co/1237x693/webp?text=05', title: '0nam 2024', description: 'There are many variations of passages of Lorem Ipsum available There are many variations of passages' },
    { src: 'https://placehold.co/1237x693/webp?text=06', title: '0nam 2024', description: 'There are many variations of passages of Lorem Ipsum available There are many variations of passages' },
    { src: 'https://placehold.co/1237x693/webp?text=07', title: '0nam 2024', description: 'There are many variations of passages of Lorem Ipsum available There are many variations of passages' },
];

export default function CardSlider() {
    return (
        <div className="w-full flex justify-center items-center py-10">
            <style>{`
          .GallRoundSlide:not(.swiper-slide-active) .SwiprCntn{
                opacity: 0;
          }
      `}</style>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.5}
                spaceBetween={20}
                loop={true}
                initialSlide={2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                coverflowEffect={{
                    // rotate: -2,
                    // stretch: 2,
                    // depth: 3,
                    // modifier: 2,
                    rotate: -5,
                    stretch: 0,
                    depth: 80,
                    modifier: 1.2,
                    slideShadows: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1.8,
                        spaceBetween: 30,
                        coverflowEffect: {
                            rotate: -5,
                            stretch: 0,
                            depth: 80,
                            modifier: 1.2,
                            slideShadows: false,
                        },
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        coverflowEffect: {
                            rotate: -5,
                            stretch: 0,
                            depth: 80,
                            modifier: 1.2,
                            slideShadows: false,
                        },
                    },
                    1536: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                        coverflowEffect: {
                            rotate: -5,
                            stretch: 0,
                            depth: 80,
                            modifier: 1.2,
                            slideShadows: false,
                        },
                    },
                    1920: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                        coverflowEffect: {
                            rotate: -5,
                            stretch: 0,
                            depth: 20,
                            modifier: 1.8,
                            slideShadows: false,
                        },
                    },
                }}
                modules={[EffectCoverflow, Navigation, Autoplay]}
                className="w-full max-w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="w-full h-full GallRoundSlide not-[:where(.swiper-slide-visible)]:opacity-0 not-[:has(.swiper-slide-active)]:[.SwiprCntn]:opacity-0">
                        {({ isActive }) => (
                            <div className="relative w-full h-[370px] lg:h-[350px] xl:h-[400px] 2xl:h-[400px] 3xl:h-[518px] rounded-[38px] overflow-hidden shadow-lg">
                                <img
                                    src={slide.src}
                                    alt={`Slide ${index}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* {isActive && ( */}
                                <div className="SwiprCntn absolute bottom-0 left-0 right-0 text-white text-center py-[65px] px-[25px] bg-gradient-to-b from-[rgba(143,0,0,0)] to-[#17479E] z-1 pointer-events-none">
                                    <h3 className="font-black text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[18px] 3xl:text-[25px] text-[#fff] uppercase mb-[15px] pb-[15px] relative before:content-[''] before:absolute before:bottom-0 before:m-auto before:w-[30%] before:h-[1px] before:right-0 before:left-0 before:bg-white">{slide.title}</h3>
                                    <p className="font-normal text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[14px] 3xl:text-[18px] text-[#fff]">{slide.description}</p>
                                </div>
                                {/* // )} */}
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
