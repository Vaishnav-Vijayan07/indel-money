"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "./Career.css";

const careerLifeAtIndelImages = [
    {
        id: 0,
        src: "/images/careerLifeAtIndel-1.jpg",
        alt: "careerLifeAtIndel",
    },
    {
        id: 1,
        src: "/images/careerLifeAtIndel-2.jpg",
        alt: "careerLifeAtIndel",
    },
    {
        id: 2,
        src: "/images/careerLifeAtIndel-3.jpg",
        alt: "careerLifeAtIndel",
    },
    {
        id: 3,
        src: "/images/careerLifeAtIndel-4.jpg",
        alt: "careerLifeAtIndel",
    },
    {
        id: 4,
        src: "/images/careerLifeAtIndel-5.jpg",
        alt: "careerLifeAtIndel",
    },
];

function ImageBox({ item, heightClass }) {
    return (
        <div
            className={`group w-full ${heightClass} overflow-hidden rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px] relative z-0`}
        >
            <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="320px"
                className="group-hover:scale-105 object-cover transition-transform duration-300"
            />
        </div>
    );
}

export default function MobCareerLifeAtIndel() {
    return (
        <section className="w-full max-sm:block hidden bg-[#f8e8ea] relative z-0">
            <div className="">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <div className="w-full h-full p-[40px_15px_35px_15px] rounded-[15px] bg-linear-to-b from-transparent to-white relative z-0 overflow-hidden presented by xAI after:content-[''] after:absolute after:-z-1 after:inset-0 after:opacity-50 after:block after:bg-linear-to-b after:from-base1 after:to-base2 after:pointer-events-none">
                            <Image
                                src="/images/careerLifeAtIndel-bg.jpg"
                                alt="careerLifeAtIndel-bg"
                                fill
                                sizes="676px"
                                className="w-full h-full object-cover opacity-5 pointer-events-none"
                            />
                            <div className="editor">
                                <div className="lg:max-w-[320px] xl:max-w-[376px] 2xl:max-w-[468px] 3xl:max-w-[576px]">
                                    <div className="text-title1 font-bold text-white mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">
                                        Life at
                                        <span className="font-bold text-base2"> Indel</span>
                                    </div>
                                    <div className="text-sm1 text-white mb-[15px]">
                                        Indel is more than just a workplace; it's a community where
                                        innovation thrives, and individuals flourish. Here, you'll
                                        experience:
                                    </div>
                                </div>
                                <ul className="!mb-[10px]">
                                    <li>
                                        <b>A Culture of Excellence: </b>Immerse yourself in a culture
                                        that values hard work, creativity, and a relentless pursuit of
                                        excellence.
                                    </li>
                                    <li>
                                        <b>Empowering Opportunities: </b>Explore diverse career paths
                                        and receive continuous learning and development
                                        opportunities.
                                    </li>
                                    <li>
                                        <b>Work-Life Harmony: </b>Balance your professional and
                                        personal life with flexible work
                                    </li>
                                    <li>
                                        <b>Social Events and Celebrations: </b>Participate in a range
                                        of social events and celebrations that foster camaraderie and
                                        team spirit.
                                    </li>
                                    <li>
                                        <b>Recognition and Rewards: </b>Be recognized and rewarded
                                        for your contributions through various incentive programs and
                                        accolades.
                                    </li>
                                    <li>
                                        <b>Social Events and Celebrations: </b>Participate in a range
                                        of social events and celebrations that foster camaraderie and
                                        team spirit.
                                    </li>
                                </ul>
                                <p className="mb-[30px]">
                                    Join the Indel family and experience a fulfilling and rewarding
                                    career journey.
                                </p>
                            </div>
                            <div className="w-full mb-[30px]">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={8}
                                    slidesPerView={2.5}
                                    className="mobCareerSlider w-full"
                                >
                                    {careerLifeAtIndelImages.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="p-[4px] lg:p-[6px] 2xl:p-[10px]">
                                                <ImageBox
                                                    item={item}
                                                    heightClass="h-[176px] lg:h-[220px] 2xl:h-[240px] 3xl:h-[320px]"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div>
                                <Link
                                    href={"/"}
                                    className="btn btn-base2 min-w-[120px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[140px] 3xl:min-w-[180px]"
                                >
                                    VISIT GALLERY
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}