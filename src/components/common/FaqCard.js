"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SwiperNavigation from "./SwiperNavigation.js";


const formSchema = z.object({
    search: z.string().min(1, "Please enter a search query."),
});

export default function FaqCard({
    data,
    theme = "default",
}) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const swiperRef = useRef(null);

    const isDesktop = useMediaQuery({
        query: "(min-width: 640px)",
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        search: "",
        defaultValues: {
        },
    });

    return (
        <>


            {isDesktop ? (
                <Tabs
                    defaultValue={"tabs-" + data?.faq_info_list?.[0]?.key}
                    className="bg-none"
                >
                    <TabsList className="h-fit bg-background-none space-x-[15px] md:space-x-[20px] xl:space-x-[40px] mx-auto">
                        {data?.faq_info_list?.map((item, index) => (
                            <TabsTrigger
                                key={"TabsTrigger-" + index}
                                value={"tabs-" + item?.key}
                                className={`3xl:text-[18px] 2xl:text-[16px] xl:text-[14px] lg:text-[14px] sm:text-[12px] text-[16px] leading-none font-normal text-center data-[state=active]:font-semibold text-black w-fit h-auto 3xl:min-h-[50px] xl:min-h-[40px] p-[10px_20px] rounded-[20px] data-[state=active]:shadow-none data-[state=active]:bg-base1 data-[state=active]:text-white bg-[#CFDFFE] cursor-pointer`}
                            >
                                {item.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {data?.faq_info_list?.map((item, index) => (
                        <TabsContent
                            key={"TabsContent-" + index}
                            value={"tabs-" + item?.key}
                        >
                            <FaqInfoComp item={item} theme={theme} />
                        </TabsContent>
                    ))}
                </Tabs>
            ) : (
                <>
                    <div className="[--bx-xy:30px] w-full max-w-[268px] h-auto flex flex-wrap justify-center mx-auto mt-[20px]">
                        <div
                            className={`text-[14px] leading-none font-semibold text-center text-white  w-fit min-w-[120px] h-auto !min-h-[35px] p-[10px_20px] rounded-[10px] flex 
                                justify-center items-centetext-center  bg-base1 data-[state=active]:text-white cursor-pointer mb-[20px]`}
                        >
                            {data?.faq_info_list?.[currentSlide]?.title}
                        </div>
                        <div className="w-full flex justify-center mb-[10px]">
                            <SwiperNavigation swiperRef={swiperRef} />
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        loop={false}
                        rewind={true}
                        spaceBetween={10}
                        pagination={false}
                        navigation={false}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                    >
                        {data?.faq_info_list?.map((item, index) => (
                            <SwiperSlide key={"item" + index}>
                                <FaqInfoComp item={item} theme={theme} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </>
    );
}

function FaqInfoComp({ item, theme }) {
    return (
        <Accordion
            type="single"
            defaultValue={"accordion-" + item?.faqs?.[0]?.key}
            collapsible
        >
            {item?.faqs?.map((item, index) => (
                <AccordionItem
                    key={"AccordionItem-" + index}
                    value={"accordion-" + item?.key}
                    className={`border-none 3xl:my-[15px] xl:my-[10px] lg:my-[8px] sm:my-[5px] my-[15px]  px-[25px] xl:px-[45px] 3xl:px-[65px] data-[state=open]:bg-[#D7E9FF]
                        }`}
                >
                    <AccordionTrigger
                        className={`group 3xl:text-[20px] 2xl:text-[17px] xl:text-[14px] lg:text-[12px] sm:text-[10px] text-[14px] text-black font-medium leading-tight 3xl:py-[10px] xl:py-[8px] sm:py-[8px] py-[5px_8px] data-[state=closed]:text-black data-[state=open]:text-black bg-clip-text bg-gradient-to-r [&>svg]:hidden [&[data-state=open]>img]:rotate-180 items-center transition-all duration-300 hover:no-underline`}
                    >
                        {item?.title}

                        <Image
                            src="/images/home-faq-icon-plus.svg"
                            alt="faq-icon-plus"
                            width={30}
                            height={30}
                            className="2xl:w-[33px] w-[25px] h-auto aspect-square block group-data-[state=closed]:block group-data-[state=open]:hidden transition duration-300"
                        />
                        <Image
                            src="/images/home-faq-icon-minus.svg"
                            alt="faq-icon-plus"
                            width={30}
                            height={30}
                            className="2xl:w-[33px]  w-[25px] h-auto aspect-square block group-data-[state=closed]:hidden group-data-[state=open]:block transition duration-300"
                        />
                    </AccordionTrigger>
                    <AccordionContent className="">
                        <div className="typography [&_p,&_li]:3xl:text-[18px] [&_p,&_li]:text-sm1 max-w-[90%] xl:max-w-[70%] [&>*]:first:mt-0">
                            <p>{item?.description}</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
