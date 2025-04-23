
"use client"
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import LoanCard from "@/components/common/LoanCard";
const slides = [
    {
        image: "/images/serve01.jpg",
        alt: "Loan Image 1",
        title: "Manufacturing Enterprises",
        description: "Enterprises engaged in the manufacture, production, processing, preservation or packaging of goods with investment (original cost) in plant & machinery. ",
        href: "/",
    },
    {
        image: "/images/serve02.jpg",
        alt: "Loan Image 2",
        title: "Small Traders",
        description: "Enterprises engaged in small trading activities including small provision stores, medical stores, kirana stores, diary farms, poultries, textile shops, farm product trading/retailers & wholesalers, automobile workshops, service centres etc.",
        href: "/",
    },
    {
        image: "/images/serve03.jpg",
        alt: "Loan Image 3",
        title: "Service Enterprises",
        description: "Enterprises involved in providing or rendering of services with investments (original cost) in equipment excluding land, building, furniture and fittings not directly related to services rendered.",
        href: "/",
    },
];

export default function WhoServeSlider({ className }) {
    const [showPagination, setShowPagination] = useState(false);

    useEffect(() => {
        const updatePagination = () => {
            const screenWidth = window.innerWidth;
            let visibleSlides = 1.3;

            if (screenWidth >= 1024) visibleSlides = 3;
            else if (screenWidth >= 768) visibleSlides = 2;
            else if (screenWidth >= 640) visibleSlides = 2;

            setShowPagination(slides.length > visibleSlides);
        };

        updatePagination();
        window.addEventListener("resize", updatePagination);
        return () => window.removeEventListener("resize", updatePagination);
    }, []);
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            autoplay={false}
            pagination={{ clickable: false }}
            breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="LoanSlider mb-[15px] lg:mb-[20px] xl:mb-[30px]"
        >
            {slides?.map((item, index) => {
                // Define dynamic classes for even/odd slides
                const cardClass =
                    index % 2 === 0
                        ? "bg-[linear-gradient(156deg,_rgba(23,71,158,0.20)_6.47%,_rgba(198,59,59,0.20)_91.2%)]"
                        : "bg-[linear-gradient(156deg,_rgba(198,59,59,0.20)_6%,_rgba(23,71,158,0.20)_91%)]";

                return (
                    <SwiperSlide key={index}>
                        {/* Pass dynamic class to LoanCard */}
                        <LoanCard className={cardClass} item={item} />
                    </SwiperSlide>
                );

            })}
        </Swiper>

    );
}