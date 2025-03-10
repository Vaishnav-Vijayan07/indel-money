
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        image: "/images/loan01.jpg",
        alt: "Loan Image 1",
        title: "Trader’s Loan",
        title2: "Short Term Trader’s Loan",
        discription: "We understand the requirement of small trading businesses and your struggle to meet daily working capital requirements. ",
        href: "/",
    },
    {
        image: "/images/loan02.jpg",
        alt: "Loan Image 2",
        title: "Business Loans",
        title2: "Structured Business Loans",
        discription: "The key success factor of every MSME sector enterprise is ready availability of credit to facilitate working capital or fixed asset purchase requirements. ",
        href: "/",
    },
    {
        image: "/images/loan03.jpg",
        alt: "Loan Image 3",
        title: "Loans Against Property",
        title2: "Loans against property ",
        discription: "We understand the long-term financial needs of the small business units. Our long-term business loan options enables your access to high value loans by encashing the power of your property assets. ",
        href: "/",
    },
];

export default function LoanSlider() {
    return (
        <Swiper
            modules={[]}
            spaceBetween={30}
            autoplay={false}
            pagination={{ clickable: false }}
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 3 },
            }}
            className="LoanSlider mb-[15px] lg::mb-[20px] xl:mb-[30px]">
            {slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <Link
                        href={item.href}
                        className="w-full h-full block rounded-[36px] overflow-hidden p-[30px] pb-[40px] transition-all duration-600 hover:bg-[#F8FBFF] hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)]">
                        <div className="w-full flex flex-wrap sm:flex-row flex-col-reverse">
                            <div className="group w-full h-auto xl:h-full rounded-[24px] overflow-hidden mb-[30px]">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={465}
                                    height={295}
                                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                                />
                            </div>
                            <div className="w-full 3xl:pr-[30px] sm:pr-[20px] sm:pt-0 pt-[20px]">
                                <h5 className="text-[14px] sm:text-[16px] xl:text-[18px] 3xl:text-[30px] text-[#17479E] font-bold mb-[5px]">
                                    {item.title}

                                </h5>
                                <div className="text-[20px] text-[#1E1E1E] font-normal mb-[15px]">
                                    {item.title2}
                                </div>
                                <div className="w-full mb-[15px] 3xl:mb-[20px] text-sm-1 line-clamp-4">
                                    {item.discription}
                                </div>
                            </div>

                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>

    );
}