"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/custom-alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function ManagementTeam() {
    const slides = [
        {
            id: "0",
            image: "/images/team01.png",
            alt: "team-1",
            title: "Umesh Mohanan",
            post: "Executive Director & CEO",
            desciption: "An investment professional with more than 2 decades of rich experience in Managing investment verticals with a proven track record of heading a Middle Eastern multi national multi billion conglomerate at its executive level,spearheading its complete global operations Diversified into portfolios such as Banking investments, infrastructure construction,Oil and Gas, Power stations, Defence supplies, Manufacturing , Trading of minerals, bullion and other commodities across the global. Currently he serves Indel Money as its ED & CEO, at Indel Money his corporate inheritance of skills from the multinational business background is envisaged to grow the business into multifolds.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at An investment professional with more than 2 decades of rich experience in Managing investment verticals with a proven track record of heading a Middle Eastern multi national multi billion conglomerate at its executive level,spearheading its complete global operations Diversified into portfolios such as Banking investments, infrastructure construction,Oil and Gas, Power stations, Defence supplies, Manufacturing , Trading of minerals, bullion and other commodities across the global. Currently he serves Indel Money as its ED & CEO, at Indel Money his corporate inheritance of skills from the multinational business background is envisaged to grow the business into multifolds.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at An investment professional with more than 2 decades of rich experience in Managing investment verticals with a proven track record of heading a Middle Eastern multi national multi billion conglomerate at its executive level,spearheading its complete global operations Diversified into portfolios such as Banking investments, infrastructure construction,Oil and Gas, Power stations, Defence supplies, Manufacturing , Trading of minerals, bullion and other commodities across the global. Currently he serves Indel Money as its ED & CEO, at Indel Money his corporate inheritance of skills from the multinational business background is envisaged to grow the business into multifolds.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ",
        },
        {
            href: "/",
            image: "/images/team02.png",
            alt: "team-1",
            title: "Jijith Raj Thekkayil",
            post: "Business Head",
        },
        {
            href: "/",
            image: "/images/team03.png",
            alt: "team-1",
            title: "Sudheesh PR",
            post: "Head – Strategy, Operations",
        },
        {
            href: "/",
            image: "/images/team04.png",
            alt: "team-1",
            title: "A Sreekumar",
            post: "Head Credit & Risk",
        },
        {
            href: "/",
            image: "/images/team05.png",
            alt: "team-1",
            title: "Venugopalan MV",
            post: "Head Internal Audit",
        },
        {
            href: "/",
            image: "/images/team06.png",
            alt: "team-1",
            title: "K.N.C NAIR",
            post: "Chief Information Officer",
        },
        {
            href: "/",
            image: "/images/team07.png",
            alt: "team-1",
            title: "Chandrasekharan Nair Saji",
            post: "Chief Compliance Officer",
        },
        {
            href: "/",
            image: "/images/team08.png",
            alt: "team-1",
            title: "Narayanan Pisharath",
            post: "Head – Finance & Accounts",
        },
        {
            href: "/",
            image: "/images/team09.png",
            alt: "team-1",
            title: "Hanna P Nazir",
            post: "Company Secretary",
        },
        {
            href: "/",
            image: "/images/team010.png",
            alt: "team-1",
            title: "Prasad Chemben",
            post: "Business Head TPBV",
        },
    ];

    return (
        <section className="relative w-full py-[30px] lg:py-[40px] xl:py-[70px]">
            <div className="absolute bottom-[12%] left-0 w-full h-[75%] md:h-[66%] xl:h-[60%] bg-gradient-to-r from-[rgba(243,0,0,0)] to-[rgba(235,2,8,0.10)] z-0"></div>
            <div className="container flex flex-wrap">
                <div className="flex flex-wrap mb-[60px]">
                    <div className="w-full md:w-[45%] 2xl:w-[40%]">
                        <h2 className="text-title1 mb-[15px] 2xl:mb-[20px]">
                            <span className="text-base2 font-bold">Indely</span>
                            ’s Guiding Lights
                        </h2>
                    </div>
                    <div className="w-full md:w-[55%] 2xl:w-[60%] md:pl-[30px]">
                        <p className="text-sm-1">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-[12px] xl:-mx-[15px] 2xl:-mx-[17px] -my-[20px] xl:-my-[25px] 2xl:-my-[30px]">
                    {slides.map((item, index) => (
                        <div key={index} className="w-1/2 md:w-1/3 xl:w-1/4 px-[12px] xl:px-[15px] 2xl:px-[17px] py-[20px] xl:py-[25px] 2xl:py-[30px]">
                            <TeamBox item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TeamBox({ item }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="w-full cursor-pointer">
                    <div className="relative group w-full h-full xl:rounded-[20px] md:rounded-[18px] rounded-[15px] overflow-hidden aspect-380/455">
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,#EFEFEF_0%,#DBEEF9_100%)] transition-opacity duration-500 group-hover:opacity-0"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,#EE3824_0%,#17479E_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={380}
                            height={455}
                            className="relative w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                        />
                    </div>
                    <div className="mt-[20px]">
                        <div className="text-footer-1 mb-[10px]">{item.title}</div>
                        <div className="text-sm-1">{item.post}</div>
                    </div>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-none w-full" >
                <AlertDialogHeader>
                    <AlertDialogDescription>
                        <TeamModal item={item} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}


function TeamModal({ item }) {
    return (
        <div className="container">
            <div className="relative z-1 w-full flex flex-wrap bg-white rounded-[36px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[20px] xl:px-[35px] 2xl:px-[55px] 3xl:px-[75px] py-[25px] xl:py-[40px] 2xl:py-[60px] 3xl:py-[80px]">
                <div className="group w-[150px] lg:w-[250px] xl:w-[270px] 2xl:w-[385px] flex justify-center items-center bg-gradient-to-b from-[#EFEFEF] to-[#AFDBF6] rounded-[20px] overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.alt}
                        layout="responsive"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                    />
                </div>
                <div className="w-full sm:w-[calc(100%-150px)] lg:w-[calc(100%-250px)] xl:w-[calc(100%-270px)] 2xl:w-[calc(100%-385px)] pt-[20px] sm:pt-[0] sm:pl-[20px] lg:pl-[30px] 3xl:pl-[50px]">
                    <div className="relative max-w-[450px] bg-gradient-to-r from-[rgba(238,56,36,0.20)] via-[rgba(58,69,138,0.10)] to-[rgba(23,71,158,0.00)] px-[25px] py-1">
                        <div className="absolute left-0 bottom-0 w-[7px] h-full rounded-[10px] bg-gradient-to-b from-[#EE3824] to-[#17479E]"></div>
                        <h2 className="text-[18px] xl:text-[22px] 2xl:text-[28px] 3xl:text-[35px] font-bold flex items-center text-#000">
                            {item.title}
                        </h2>
                        <p className="text-gray-600 mt-[5px]">{item.post}</p>
                    </div>

                    <div className="w-full hidden lg:block h-[200px] xl:h-[220px] 2xl:h-[335px] scrollbar-custom overflow-y-auto mt-[20px] 2xl:mt-[35px]">
                        <Swiper
                            direction="vertical"
                            slidesPerView="auto"
                            freeMode={true}
                            scrollbar={{ hide: false, draggable: true }} // Ensure hide is false
                            mousewheel={true}
                            modules={[FreeMode, Scrollbar, Mousewheel]}
                            className="TeamSwiper"
                        >
                            <SwiperSlide>
                                <div className="text-footer-1 font-normal leading-[150%] text-[#323232]">
                                    {item.desciption}
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="w-full lg:hidden h-[200px] scrollbar-custom overflow-y-auto mt-[20px]">
                    <Swiper
                        direction="vertical"
                        slidesPerView="auto"
                        freeMode={true}
                        scrollbar={{ hide: false, draggable: true }} // Ensure hide is false
                        mousewheel={true}
                        modules={[FreeMode, Scrollbar, Mousewheel]}
                        className="TeamSwiper"
                    >
                        <SwiperSlide>
                            <div className="text-footer-1 font-normal leading-[150%] text-[#323232]">
                                {item.desciption}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}


