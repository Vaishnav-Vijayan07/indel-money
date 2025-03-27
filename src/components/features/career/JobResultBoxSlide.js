"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import JobResultBox from './JobResultBox';

export default function JobResultBoxSlide({ jobResults }) {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            direction={'vertical'}
            slidesPerView={'auto'}
            spaceBetween={0}
            rewind={true}
            className="jobResultBoxSlide [--slide-y:270px] lg:[--slide-y:276px] xl:[--slide-y:340px] 2xl:[--slide-y:430px] 3xl:[--slide-y:540px] h-[var(--slide-y)]"
        >
            {jobResults?.map((item, index) => (
                <SwiperSlide
                    key={index}
                    className="h-[calc(var(--slide-y)/2)]!"
                >
                    <JobResultBox item={item} />
                </SwiperSlide>
            ))}
        </Swiper >
    )
}
