"use client";

import CardSlider from '@/components/common/CardSlider';

export default function Gallery() {
    return (
        <section className="w-full 2xl:pt-[100px] 2xl:pb-[100px] md:pt-[60px] md:pb-[60px] pt-[40px] pb-[40px]">
            <div className="container">
                <CardSlider />
            </div>
        </section>
    )
}
