
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import LoanCard from "@/components/common/LoanCard";

const slides = [
    {
        image: "/images/loan01.jpg",
        alt: "Loan Image 1",
        title: "Trader’s Loan",
        title2: "Short Term Trader’s Loan",
        description: "We understand the requirement of small trading businesses and your struggle to meet daily working capital requirements. ",
        href: "/",
    },
    {
        image: "/images/loan02.jpg",
        alt: "Loan Image 2",
        title: "Business Loans",
        title2: "Structured Business Loans",
        description: "The key success factor of every MSME sector enterprise is ready availability of credit to facilitate working capital or fixed asset purchase requirements. ",
        href: "/",
    },
    {
        image: "/images/loan03.jpg",
        alt: "Loan Image 3",
        title: "Loans Against Property",
        title2: "Loans against property",
        description: "We understand the long-term financial needs of the small business units. Our long-term business loan options enables your access to high value loans by encashing the power of your property assets. ",
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
            {slides?.map((item, index) => (
                <SwiperSlide key={index}>
                    <LoanCard item={item} />
                </SwiperSlide>
            ))}
        </Swiper>

    );
}