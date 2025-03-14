"use client"
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
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
} from "@/components/ui/alert-dialog"
import { useState, useEffect } from "react";


export default function WelcomeModal() {

    const [isOpen, setIsOpen] = useState(false);

    const slides = [
        {
            src: "/images/welcome-1.jpg",
            alt: "welcome-1",
            title: "Gold Loans",
            description: "Need quick financing? Get the best rates with our secure gold loans.",
            link: "/",
            linkname: "Get a Gold Loan Today",
        },
        {
            src: "/images/welcome-2.jpg",
            alt: "welcome-1",
            title: "Other Services",
            description: "We offer a range of services tailored to your needs. Let us guide you.",
            link: "/",
            linkname: "Explore Our Services",
        },
        {
            src: "/images/welcome-3.jpg",
            alt: "welcome-1",
            title: "Career Opportunities",
            description: "Looking for a new opportunity? Explore our open positions and start your journey with us.",
            link: "/",
            linkname: "FIND YOUR DREAM JOB",
        },
        {
            src: "/images/welcome-4.jpg",
            alt: "welcome-1",
            title: "Quick pay",
            description: "efficient payment solution designed to make transactions faster and easier.",
            link: "/",
            linkname: "Make your payment",
        },
    ];

    useEffect(() => {
        // Check if the user has seen the modal before using localStorage
        const hasSeenModal = localStorage.getItem("hasSeenWelcomeModal");

        if (!hasSeenModal) {
            // Initial delay
            const initialTimer = setTimeout(() => {
                setIsOpen(true);
            }, 2000);

            // Set up a 10-minute interval (600,000 ms) to re-show the modal
            const intervalTimer = setInterval(() => {
                setIsOpen(true);
            }, 600000);

            // Cleanup timers on component unmount
            return () => {
                clearTimeout(initialTimer);
                clearInterval(intervalTimer);
            };
        }
    }, []);

    // Handle closing the modal and mark it as seen
    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("hasSeenWelcomeModal", "true");
    };

    return (
            <AlertDialog
                open={isOpen}
                onOpenChange={setIsOpen}
            >
                <AlertDialogContent>
                    <div className="w-full sm:min-w-[608px] md:min-w-[736px] lg:min-w-[864px] xl:min-w-[1088px] 2xl:min-w-[1312px] 3xl:min-w-[1664px] mx-auto bg-white rounded-[15px] lg:rounded-[36px] py-[20px] lg:py-[30px] xl:py-[40px] 2xl:py-[60px] 3xl:py-[70px] px-[15px] lg:px-[40px] xl:px-[45px] 2xl:px-[50px] 3xl:px-[60px] relative z-0">
                        <AlertDialogCancel
                            onClick={handleClose}
                            className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] focus:outline-0 flex gap-[4px] lg:gap-[6px] 2xl:gap-[10px] absolute z-0 top-[15px] lg:top-[40px] xl:top-[45px] 2xl:top-[50px] 3xl:top-[60px] right-[15px] lg:right-[40px] xl:right-[45px] 2xl:right-[50px] 3xl:right-[60px] transition-color cursor-pointer hover:text-base2"
                        >
                            Close
                            <Image
                                src="/images/modal-cancel.svg"
                                alt="modal-cancel"
                                width={24}
                                height={24}
                            />
                        </AlertDialogCancel>
                        <div className="flex flex-wrap gap-[15px] lg:gap-[20px] xl:gap-[30px] 2xl:gap-[40px] 3xl:gap-[50px] mb-[10px] sm:mb-[15px] lg:mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]">
                            <div className="w-full max-w-[80px] sm:max-w-[90px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-[140px] 2xl:max-w-[180px] 3xl:max-w-[280px] h-auto inline-block">
                                <Image
                                    src="/icons/logo_sm.svg"
                                    alt="logo"
                                    width={218}
                                    height={112}
                                    inert
                                />
                            </div>
                            <div>
                                <AlertDialogTitle className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[38px] xl:text-[44px] 2xl:text-[56px] 3xl:text-[64px] text-base2 leading-[1] font-bold mt-[2px] 2xl:mt-[4px] mb-[4px] 2xl:mb-[6px]">Welcome!</AlertDialogTitle>
                                <div className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[32px] 3xl:text-[36px] text-[#1e1e1e] leading-[1] font-normal">What Brings You Here Today?</div>
                            </div>
                        </div>
                        <div className="-mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px] relative z-0 before:absolute before:inset-0 before:left-auto before:z-2 before:block before:bg-gradient-to-r before:to-white before:from-transparent before:w-[20px] before:h-full before:pointer-events-none before:xl:hidden">
                            <Swiper
                                slidesPerView={'auto'}
                                spaceBetween={0}
                                className="welcomeSlide"
                            >
                                {slides?.map((item, index) => (
                                    <SwiperSlide key={index} className={`${index === 0 ? "max-w-[220px] sm:max-w-[240px] lg:max-w-[260px] xl:max-w-[290px] 2xl:max-w-[360px] 3xl:max-w-[450px]" : "max-w-[200px] sm:max-w-[220px] lg:max-w-[240px] xl:max-w-[calc((100%-290px)/3)] 2xl:max-w-[calc((100%-360px)/3)] 3xl:max-w-[calc((100%-450px)/3)]"} h-auto! p-[4px] lg:p-[6px] 2xl:p-[10px] transition-all duration-300 `}>
                                        <WelcomeBox item={item} index={index} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
    )
}

export function WelcomeBox({ item, index }) {
    const isActive = index === 0;
    return (
        <div
            className={`
                ${isActive ? "bg-[#dceafb]" : "bg-[#e7eff9]"} w-full h-full rounded-[10px] lg:rounded-[15px] 2xl:rounded-[24px] p-[10px] lg:p-[10px] 2xl:p-[15px] 3xl:p-[20px] relative z-0 transition-all duration-300 flex flex-col
                `}
        >
            {isActive ? (
                <Image
                    src={"/images/welcomebx-bg.png"}
                    alt={"welcomeBg"}
                    width={200}
                    height={200}
                    className="max-w-[100px] lg:max-w-[140px] xl:max-w-[160px] 2xl:max-w-[180px] 3xl:max-w-[200px] opacity-75 absolute -z-1 bottom-[10px] lg:bottom-[15px] 2xl:bottom-[20px] left-0 right-0 m-auto transition-opacity duration-300"
                />
            ) : ""}
            <div className={`${isActive ? "aspect-[386/254]" : "aspect-[300/230]"} group w-full overflow-hidden rounded-[10px] lg:rounded-[15px] 2xl:rounded-[24px] mb-[15px] lg:mb-[20px] 3xl:mb-[30px] relative`}>
                <Image
                    src={item?.src}
                    alt={item?.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="w-full flex flex-col flex-grow">
                <div className={`${isActive ? "text-[14px] lg:text-[18px] xl:text-[19px] 2xl:text-[24px] 3xl:text-[30px]" : "text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[22px]"} font-bold text-base1 line-clamp-1 leading-[1] mb-[5px] lg:mb-[10px] 3xl:mb-[15px] transition-all duration-300`}>
                    {item?.title}
                </div>

                <div className={`${isActive ? "text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[22px] text-black leading-[1.1]" : "text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] 3xl:text-[18px] leading-[1.3]"} font-normal text-[#323232] line-clamp-3 mb-[10px] lg:mb-[15px] 2xl:mb-[20px] transition-all duration-300`}>
                    {item?.description}
                </div>

                <Link
                    href={item?.link}
                    className={`${isActive ? "border-base1 bg-base1 text-white" : "bg-white border-black/25 text-black"} group flex items-center justify-center gap-[4px] lg:gap-[6px] 2xl:gap-[8px] w-full h-[30px] lg:h-[35px] 2xl:h-[42px] text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] uppercase text-normal rounded-full border mt-auto transition-all duration-300 
                    `}
                >
                    {item?.linkname}
                    <svg
                        width="7"
                        height="13"
                        viewBox="0 0 7 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover:translate-x-[2px]"
                    >
                        <path d="M6.5 6.5L0.125 12.9952V0.00480938L6.5 6.5Z" fill="#EE3824" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

