"use client";
import PageBreadcrumb from "@/components/common/PageBreadcrumb"
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/custom-tabs";

export default function Gallery() {
    const images = [
        { src: "/images/gall01.jpg", src2: "/images/gall02.jpg", src3: "/images/gall04.jpg", alt: "1" },
        { src: "/images/gall02.jpg", alt: "2" },
        { src: "/images/gall03.jpg", alt: "3" },
        { src: "/images/gall06.jpg", alt: "5" },
        { src: "/images/gall04.jpg", alt: "4" },
        { src: "/images/gall05.jpg", alt: "6" },
    ];

    // Group images into sets of 3
    const slides = Array.from({ length: Math.ceil(images.length / 3) }, (_, i) =>
        images.slice(i * 3, i * 3 + 3)
    );
    

    const ImageSlider = ({ group }) => {
        const images = [group[0].src, group[0].src2, group[0].src3]; // Array of images
        const [currentImage, setCurrentImage] = useState(0);
        const [hovered, setHovered] = useState(false);

        useEffect(() => {
            let interval;
            if (hovered) {
                interval = setInterval(() => {
                    setCurrentImage((prev) => (prev + 1) % images.length); // Loop images
                }, 1000); // Change image every 1s
            } else {
                setCurrentImage(0); // Reset to the first image when hover ends
            }
            return () => clearInterval(interval); // Cleanup on unmount
        }, [hovered]);
    }

    return (
        <section className="w-full pt-[40px] pb-[100px]">
            <div className="container mx-auto">
                <div className="w-full flex flex-wrap items-center mb-[65px] py-[15px] px-[60px] rounded-l-[20px] border-l-2 border-[#17479E] bg-gradient-to-r from-[rgba(238,56,36,0.30)] to-[rgba(23,71,158,0.00)]">
                    <div className="w-full md:w-[30%] xl:w-[26%]">
                        <h2 className="text-title1">
                            <span className="text-base2 font-bold">Gallery</span>
                        </h2>
                        <PageBreadcrumb />
                    </div>
                    <div className="w-full md:w-[70%] xl:w-[74%] md:pl-[30px]">
                        <p className="text-sm-1">
                            Welcome to The Gallery, a vibrant space where art comes to life. Discover a carefully curated collection of contemporary and classic works, each telling a unique story. Whether you're an art enthusiast or a curious visitor, step into a world of creativity, inspiration, and connection
                        </p>
                    </div>
                </div>
                <Tabs defaultValue="all" className="w-full gallTab">
                    <div className="w-full h-fit max-w-[75%] m-auto flex justify-center mb-[100px] rounded-[50px] bg-white shadow-[0px_0px_25px_0px_rgba(0,0,0,0.10)] p-[25px]">
                        <TabsList className="grid h-fit w-fit m-auto grid-cols-3">
                            <TabsTrigger value="all" className="text-title1 uppercase text-base1 rounded-[30px] overflow-hidden px-[50px] py-[20px] h-fit aria-selected:text-[#fff]">
                                All Gallery
                            </TabsTrigger>
                            <TabsTrigger value="photo" className="text-title1 uppercase text-base1 rounded-[30px] overflow-hidden px-[50px] py-[20px] h-fit aria-selected:text-[#fff]">photo Gallery</TabsTrigger>
                            <TabsTrigger value="video" className="text-title1 uppercase text-base1 rounded-[30px] overflow-hidden px-[50px] py-[20px] h-fit aria-selected:text-[#fff]">Video Gallery</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="all">
                        <div className="mx-auto flex flex-wrap">
                            {slides.map((group, index) => {
                                const gallClass = index % 2 === 0 ? "flex-col" : "flex-col-reverse";

                                return (
                                    <div key={index} className={`${gallClass} w-full lg:w-1/2 mb-6 h-[815px] flex flex-wrap`}>
                                        <div className="flex flex-wrap w-full p-2 h-[40%]">
                                            {group.slice(0, 2).map((item, i) => (
                                                <div key={i} className="group relative rounded-[20px] overflow-hidden w-full mb-4 h-full">
                                                    <div className="relative w-full h-full">
                                                        {/* Image 1 */}
                                                        <Image
                                                            src={item.src}
                                                            width={800}
                                                            height={335}
                                                            alt={item.alt}
                                                            className="absolute w-full h-full rounded-[20px] object-cover opacity-100 transition-opacity duration-[1s] group-hover:opacity-0"
                                                        />
                                                        {/* Image 2 */}
                                                        <Image
                                                            src={item.src2}
                                                            width={800}
                                                            height={335}
                                                            alt={item.alt}
                                                            className="absolute w-full h-full rounded-[20px] object-cover opacity-0 transition-opacity duration-[1s] group-hover:opacity-100 group-hover:animate-imageFade"
                                                        />
                                                        {/* Image 3 */}
                                                        <Image
                                                            src={item.src3}
                                                            width={800}
                                                            height={335}
                                                            alt={item.alt}
                                                            className="absolute w-full h-full rounded-[20px] object-cover opacity-0 transition-opacity duration-[1s] group-hover:opacity-100 group-hover:animate-imageFade"
                                                        />
                                                    </div>

                                                    {/* Gradient Overlay */}
                                                    <div className="w-full h-[70%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end justify-center bg-gradient-to-b from-transparent via-[#80000080] to-[#0047AB] px-[25px] py-[35px] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                                                        <div className="w-full h-fit">
                                                            <div className="relative text-white text-[25px] font-normal leading-[28px] uppercase pb-[15px] mb-[15px] after:content-[''] after:w-[123px] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0">
                                                                CHRISTMAS 2023
                                                            </div>
                                                            <div className="text-sm-1 text-white">
                                                                There are many variations of passages of Lorem Ipsum available There are many variations of passages
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>


                                        <div className="flex flex-wrap w-full h-[60%]">
                                            {group.slice(1, 3).map((item, i) => (
                                                <div key={i} className="w-1/2 p-2 h-full">
                                                    <div className="group relative rounded-[20px] overflow-hidden w-full h-full">
                                                        <Image
                                                            src={item.src}
                                                            width={380}
                                                            height={445}
                                                            alt={item.alt}
                                                            className="w-full h-full rounded-[20px] object-cover transition-transform duration-600 hover:scale-[1.05] grayscale-100 group-hover:grayscale-0"
                                                        />
                                                        <div className="w-full h-[70%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end justify-center bg-gradient-to-b from-[rgba(243,0,0,0)] to-base1 px-[25px] py-[35px] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                                                            <div className="w-full h-fit">
                                                                <div className="relative text-white text-[25px] font-normal leading-[28px] uppercase pb-[15px] mb-[15px] after:content-[''] after:w-[123px] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0">
                                                                    CHRISTMAS 2023
                                                                </div>
                                                                <div className="text-sm-1 text-white">
                                                                    There are many variations of passages of Lorem Ipsum available There are many variations of passages
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </TabsContent>
                    <TabsContent value="photo">
                        <div className="mx-auto flex flex-wrap">
                            {slides.map((group, index) => {
                                const gallClass = index % 2 === 0 ? "flex-col" : "flex-col-reverse";

                                return (
                                    <div key={index} className={`${gallClass} w-full lg:w-1/2 mb-6 h-[815px] flex flex-wrap`}>
                                        {/* First Image (100% Width) */}
                                        <div className="flex flex-wrap w-full p-2 h-[40%]">
                                            {group.slice(0, 1).map((item, i) => (
                                                <div key={i} className="group relative rounded-[20px] overflow-hidden w-full mb-4 h-full">
                                                    {/* Image Container */}
                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            src={item.src}
                                                            width={800}
                                                            height={335}
                                                            alt={item.alt}
                                                            className="w-full h-full rounded-[20px] object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                                                        />
                                                        <Image
                                                            src={item.hoverSrc} // Use a different image for hover
                                                            width={800}
                                                            height={335}
                                                            alt={item.alt}
                                                            className="absolute top-0 left-0 w-full h-full rounded-[20px] object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                                                        />
                                                    </div>

                                                    {/* Overlay Content */}
                                                    <div className="w-full h-[70%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end justify-center bg-gradient-to-b from-[rgba(243,0,0,0)] to-base1 px-[25px] py-[35px] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                                                        <div className="w-full h-fit">
                                                            <div className="relative text-white text-[25px] font-normal leading-[28px] uppercase pb-[15px] mb-[15px] after:content-[''] after:w-[123px] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0">
                                                                CHRISTMAS 2023
                                                            </div>
                                                            <div className="text-sm-1 text-white">
                                                                There are many variations of passages of Lorem Ipsum available There are many variations of passages
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))}
                                        </div>

                                        <div className="flex flex-wrap w-full h-[60%]">
                                            {group.slice(1, 3).map((item, i) => (
                                                <div key={i} className="w-1/2 p-2 h-full">
                                                    <div className="group relative rounded-[20px] overflow-hidden w-full h-full">
                                                        <Image
                                                            src={item.src}
                                                            width={380}
                                                            height={445}
                                                            alt={item.alt}
                                                            className="w-full h-full rounded-[20px] object-cover transition-transform duration-600 hover:scale-[1.05] grayscale-100 group-hover:grayscale-0"
                                                        />
                                                        <div className="w-full h-[70%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end justify-center bg-gradient-to-b from-[rgba(243,0,0,0)] to-base1 px-[25px] py-[35px] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                                                            <div className="w-full h-fit">
                                                                <div className="relative text-white text-[25px] font-normal leading-[28px] uppercase pb-[15px] mb-[15px] after:content-[''] after:w-[123px] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0">
                                                                    CHRISTMAS 2023
                                                                </div>
                                                                <div className="text-sm-1 text-white">
                                                                    There are many variations of passages of Lorem Ipsum available There are many variations of passages
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </TabsContent>
                    <TabsContent value="video">
                        <div className="mx-auto flex flex-wrap">
                            {slides.map((group, index) => {
                                const gallClass = index % 2 === 0 ? "flex-col" : "flex-col-reverse";

                                return (
                                    <div key={index} className={`${gallClass} w-full lg:w-1/2 mb-6 h-[815px] flex flex-wrap`}>
                                        {/* First Image (100% Width) */}
                                        <div className="flex flex-wrap w-full p-2 h-[40%]">
                                            {group.slice(0, 1).map((item, i) => (
                                                <div key={i} className="group relative rounded-[20px] overflow-hidden w-full mb-4 h-full">
                                                    <Image
                                                        src={item.src}
                                                        width={800}
                                                        height={335}
                                                        alt={item.alt}
                                                        className="w-full h-full rounded-[20px] object-cover transition-transform duration-600 hover:scale-[1.05] grayscale group-hover:grayscale-0"
                                                    />
                                                    <div className="w-full h-[70%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end justify-center bg-gradient-to-b from-[rgba(243,0,0,0)] to-base1 px-[25px] py-[35px] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                                                        <div className="w-full h-fit">
                                                            <div className="relative text-white text-[25px] font-normal leading-[28px] uppercase pb-[15px] mb-[15px] after:content-[''] after:w-[123px] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0">
                                                                CHRISTMAS 2023
                                                            </div>
                                                            <div className="text-sm-1 text-white">
                                                                There are many variations of passages of Lorem Ipsum available There are many variations of passages
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap w-full h-[60%]">
                                            {group.slice(1, 3).map((item, i) => (
                                                <div key={i} className="w-1/2 p-2 h-full">
                                                    <div className="group relative rounded-[20px] overflow-hidden w-full h-full">
                                                        <Image
                                                            src={item.src}
                                                            width={380}
                                                            height={445}
                                                            alt={item.alt}
                                                            className="w-full h-full rounded-[20px] object-cover transition-transform duration-600 hover:scale-[1.05] grayscale-100 group-hover:grayscale-0"
                                                        />
                                                        <div className="w-full h-[70%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end justify-center bg-gradient-to-b from-[rgba(243,0,0,0)] to-base1 px-[25px] py-[35px] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                                                            <div className="w-full h-fit">
                                                                <div className="relative text-white text-[25px] font-normal leading-[28px] uppercase pb-[15px] mb-[15px] after:content-[''] after:w-[123px] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0">
                                                                    CHRISTMAS 2023
                                                                </div>
                                                                <div className="text-sm-1 text-white">
                                                                    There are many variations of passages of Lorem Ipsum available There are many variations of passages
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
