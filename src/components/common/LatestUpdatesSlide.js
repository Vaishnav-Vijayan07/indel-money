
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import LatestUpdatesCard from './LatestUpdatesCard';



export default function LatestUpdatesSlide() {
    return (
        <Swiper
            direction={'vertical'}
            slidesPerView={'auto'}
            className="mySwiper h-[960px]"
        >
            <SwiperSlide className="h-[320px]!">
                <LatestUpdatesCard />
            </SwiperSlide>
            <SwiperSlide className="h-[320px]!">
                <LatestUpdatesCard />
            </SwiperSlide>
            <SwiperSlide className="h-[320px]!">
                <LatestUpdatesCard />
            </SwiperSlide>
            <SwiperSlide className="h-[320px]!">
                <LatestUpdatesCard />
            </SwiperSlide>
        </Swiper>
    )
}
