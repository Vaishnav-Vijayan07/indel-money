
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import BlogCard from './BlogCard';

export default function LatestUpdatesSlide({ slides, className }) {
    return (
        <Swiper
            direction={'vertical'}
            slidesPerView={'auto'}
            spaceBetween={0}
            className="latestSlide h-[468px] lg:h-[576px] 2xl:h-[700px]"
        >
            {slides?.map((item, index) => (
                <SwiperSlide key={index} className="h-[calc(468px/3)]! lg:h-[calc(576px/3)]! 2xl:h-[calc(700px/3)]!">
                    <BlogCard className={className} item={item} />
                </SwiperSlide>
            ))}
        </Swiper >
    )
}
