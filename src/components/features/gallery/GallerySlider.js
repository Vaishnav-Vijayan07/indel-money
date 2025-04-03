"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        title: "Christmas 2023",
        desc: "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
        images: ["/images/galLst01.jpg"]
    },
    {
        title: "Unveiling of our new branch",
        desc: "There are many variations of passages of Lorem Ipsum available There are many variations of ",
        images: ["/images/galLst02.jpg"]
    },
    {
        title: "Convention 2024",
        desc: "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
        images: ["/images/galLst03.jpg"]
    },
    {
        title: "Christmas 2024",
        desc: "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
        images: ["/images/galLst04.jpg"],
    }
];

const GallSliderBx = ({ item }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (hovered) {
            interval = setInterval(() => {
                setCurrentImage((prev) => (prev + 1) % item.images.length);
            }, 1000); // Change image every 1 second
        } else {
            setCurrentImage(0); // Reset to first image when not hovered
        }
        return () => clearInterval(interval);
    }, [hovered, item.images.length]);

    return (
        <Link
        href={"/"}
            className="group block relative rounded-[20px] overflow-hidden w-full h-[250px] md:h-[205px] xl:h-[275px] 2xl:h-[360px] 3xl:h-[410px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative w-full h-full">
                {item.images.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        width={400}
                        height={400}
                        alt={`${item.title} image ${index + 1}`}
                        className={`absolute w-full h-full rounded-[20px] object-cover transition-opacity duration-500 ${index === currentImage ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </div>
            <div className="w-full h-[100%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end bg-gradient-to-b from-transparent via-[#80000080] to-[#0047AB] px-[25px] py-[35px] opacity-100 translate-y-0">
                <div className="w-full h-fit">
                    <div className="relative text-white font-semibold text-[17px] 2xl:text-[20px] 3xl:text-[25px] leading-[1.1] uppercase pb-[6px] 2xl:pb-[10px] 3xl:pb-[15px] mb-[8px] 2xl:mb-[10px] 3xl:mb-[15px] after:content-[''] after:w-[17%] line-clamp-2 2xl:after:w-[23%] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0">
                        {item.title}
                    </div>
                    <div className="text-sm-1 w-full text-white line-clamp-3">{item.desc}</div>
                </div>
            </div>
        </Link>
    );
};

export default function GallerySlider({ className }) {
    return (
        <section className="w-full pb-[40px] xl:pb-[60px] 3xl:pb-[100px]">
            <div className="container w-full">
                <div className="w-full flex flex-wrap justify-between items-center mb-[30px] 2xl:mb-[40px] 3xl:mb-[70px]">
                    <div className="w-full md:w-[30%] xl:w-[27%] 2xl:w-[30%]">
                        <h2 className="text-[20px] md:[22px] lg:[26px] xl:text-[30px] 2xl:text-[35px] font-medium text-[#020202] leading-normal">View More Galleries
                        </h2>
                    </div>
                    <div className="w-fit pt-[20px] md:pt-0 md:pl-[20px] 2xl:pl-[30px]">
                        
                    </div>
                </div>
            </div>
            <div className="max-w-[var(--container-x)] lg:max-w-[calc(100%-(100%-var(--container-x))/2)] mx-auto lg:mr-[0] px-[var(--container-padding,1rem)] lg:pr-[0]">
                <Swiper
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 3.8, spaceBetween: 30 },
                    }}
                    className={`LoanSlider mb-[15px] lg:mb-[20px] xl:mb-[30px] ${className}`}
                >
                    {data?.map((item, index) => {

                        // Define dynamic classes for even/odd slides
                        const cardClass =
                            index % 2 === 0
                                ? "bg-[linear-gradient(156deg,_rgba(23,71,158,0.20)_6.47%,_rgba(198,59,59,0.20)_91.2%)]"
                                : "bg-[linear-gradient(156deg,_rgba(198,59,59,0.20)_6%,_rgba(23,71,158,0.20)_91%)]";

                        return (
                            <SwiperSlide key={index}>
                                <GallSliderBx item={item} className={`${cardClass}`} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>

    );


}
