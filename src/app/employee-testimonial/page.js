"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
const TestimonialFilter = {
    ALL: "ALL_TESTIMONIALS",
    WORDS: "EMPLOYEE_WORDS",
    VIDEO: "VIDEO_TESTIMONIAL",
};

const testimonialData = [
    {
        thumbnail: "/images/employeeTestimonialsVideo-1.jpg",
        src: "/images/employeeTestimonialsVideo-1.jpg",
        profileImage: "/images/testimonial-profile-image-2.jpg",
        discription: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
        name: "Sreerajitha",
        role: "Branch Manager, Indel Money South Kalamassery",
        hasVideo: false,
    },
    {
        thumbnail: "/images/testimonial-1.jpg",
        src: "/images/testimonial-1.jpg",
        profileImage: "/images/testimonial-profile-image-1.jpg",
        name: "Preetha S",
        role: "Sr. Branch Manager",
        hasVideo: true,
    },
    {
        thumbnail: "/images/testimonial-3.jpg",
        src: "/images/testimonial-3.jpg",
        profileImage: "/images/testimonial-profile-image-3.jpg",
        name: "Sruthy Madhav",
        role: "Branch Manager",
        hasVideo: true,
    },
    {
        thumbnail: "/images/employeeTestimonialsVideo-3.jpg",
        src: "/images/employeeTestimonialsVideo-3.jpg",
        profileImage: "/images/testimonial-profile-image-1.jpg",
        discription: "I manage to contribute to the company and still have time for my family. The management team makes sure that the suggestions and opinions of the employees are valued and included in the planning process of the organisation. I am proud to work for Indel Money.",
        name: "Preetha S",
        role: "Sr. Branch Manager",
        hasVideo: false,
    },
    {
        thumbnail: "/images/employeeTestimonialsVideo-1.jpg",
        src: "/images/employeeTestimonialsVideo-1.jpg",
        profileImage: "/images/testimonial-profile-image-2.jpg",
        discription: "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
        name: "Sreerajitha",
        role: "Branch Manager, Indel Money South Kalamassery",
        hasVideo: false,
    },
    {
        thumbnail: "/images/employeeTestimonialsVideo-3.jpg",
        src: "/images/employeeTestimonialsVideo-3.jpg",
        profileImage: "/images/testimonial-profile-image-1.jpg",
        discription: "I manage to contribute to the company and still have time for my family. The management team makes sure that the suggestions and opinions of the employees are valued and included in the planning process of the organisation. I am proud to work for Indel Money.",
        name: "Preetha S",
        role: "Sr. Branch Manager",
        hasVideo: false,
    },
];

const TestimonialFilters = ({ activeFilter, onFilterChange }) => {
    const filterOptions = [
        { key: TestimonialFilter.ALL, label: "ALL TESTIMONIALS" },
        { key: TestimonialFilter.WORDS, label: "EMPLOYEE TESTIMONIALS" },
        { key: TestimonialFilter.VIDEO, label: "VIDEO TESTIMONIALS" },
    ];
    return (
        <div className="flex flex-wrap 2xl:gap-[12px] gap-[8px] max-xl:mt-[20px] justify-center xl:justify-end">
            {filterOptions.map(({ key, label }) => (
                <button
                    key={key}
                    onClick={() => onFilterChange(key)}
                    className={`2xl:p-[10px_20px] p-[10px_15px] 3xl:text-[20px] xl:text-[14px] text-[12px] font-bold text-white rounded-[100px] select-none transition-all duration-500 ${activeFilter === key ? "bg-[#17479E]" : "bg-[#85B6CF] hover:bg-base2"}`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

const VideoTestimonialCard = ({ testimonial }) => {
    return (
        <div className="w-full h-full md:w-1/2 p-[6px_4px] sm:p-[10px] 2xl:p-[22px]">
            <div className='group w-full h-full rounded-[10px] lg:rounded-[20px] 2xl:rounded-[24px] p-[15px] xl:p-[20px] 2xl:p-[30px] bg-[#D4E6FF] block relative z-0'>
                <div className="w-full h-full aspect-[795/415] overflow-hidden rounded-[10px] lg:rounded-[20px] 2xl:rounded-[24px] relative z-0">
                    <div className='w-[25px] lg:w-[30px] 2xl:w-[48px] aspect-48/38 absolute z-1 top-[15px] left-[15px] lg:top-[20px] lg:left-[20px] 2xl:top-[30px] 2xl:left-[30px]'>
                        <Image
                            src={"/images/employeeTestimonialsVideo-delmt-1.svg"}
                            alt={"employeeTestimonialsVideo-delmt"}
                            fill
                            sizes="48px"
                        />
                    </div>
                    <div className='w-[30px] lg:w-[35px] 2xl:w-[48px] aspect-square absolute z-1 inset-0 m-auto'>
                        <Image
                            src={"/images/icon-play.svg"}
                            alt={"play"}
                            fill
                            sizes="48px"
                        />
                    </div>
                    <Image
                        src={testimonial.src}
                        alt={testimonial.name}
                        fill
                        sizes="520px"
                        className="group-hover:scale-105 object-cover transition-transform duration-300"
                    />
                    <div className="flex flex-wrap items-center gap-[5px] lg:gap-[10px] 2xl:gap-[20px] p-[10px_15px] lg:p-[15px_20px] 2xl:p-[20px_30px] absolute z-1 bottom-0 left-0 right-0 bg-linear-to-t to-transparent from-black/85">
                        <div
                            className="group w-[30px] lg:w-[40px] xl:w-[60px] 2xl:w-[80px] h-[30px] lg:h-[40px] xl:h-[60px] 2xl:h-[80px] rounded-full overflow-hidden border-black/10 border-1 border-solid relative z-0"
                        >
                            <Image
                                src={testimonial.profileImage}
                                alt={testimonial.name}
                                fill
                                sizes="80px"
                                className="group-hover:scale-105 object-cover transition-transform duration-300"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <div className="text-[14px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1] font-bold text-[#93bffa] capitalize line-clamp-1 mb-4px lg:mb-[6px] 2xl:mb-[8px]">
                                {testimonial.name}
                            </div>
                            <div className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-[1] font-normal text-white capitalize line-clamp-1">
                                {testimonial.role}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WordTestimonialCard = ({ testimonial }) => {
    return (
        <div className="w-full md:w-1/2 p-[6px_4px] sm:p-[10px] 2xl:p-[22px]">
            <div className='group w-full h-full aspect-[795/415] bg-[#D4E6FF] overflow-hidden rounded-[10px] lg:rounded-[20px] 2xl:rounded-[24px] block p-[15px_20px] sm:p-[20px_30px] xl:p-[40px_30px] 3xl:p-[60px_40px] relative z-0'>
                <div className='w-[25px] lg:w-[30px] 2xl:w-[48px] aspect-48/38 relative z-1 left-[0]'>
                    <Image
                        src={"/images/employeeTestimonialsVideo-delmt-1.svg"}
                        alt={"employeeTestimonialsVideo-delmt"}
                        fill
                        sizes="48px"
                    />
                </div>
                <div className="flex items-center h-[70%] 2xl:h-[80%]">
                    <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.3] text-[#121212] font-normal line-clamp-6">
                        {testimonial.discription}
                    </div>
                </div>
                <div className="flex flex-wrap items-center gap-[5px] lg:gap-[10px] 2xl:gap-[20px] p-[10px_15px] lg:p-[15px_20px] 2xl:p-[20px_30px] absolute z-1 bottom-0 left-0 right-0">
                    <div
                        className="group w-[30px] lg:w-[40px] xl:w-[60px] 2xl:w-[80px] h-[30px] lg:h-[40px] xl:h-[60px] 2xl:h-[80px] rounded-full overflow-hidden border-black/10 border-1 border-solid relative z-0"
                    >
                        <Image
                            src={testimonial.profileImage}
                            alt={testimonial.name}
                            fill
                            sizes="80px"
                            className="group-hover:scale-105 object-cover transition-transform duration-300"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <div className="text-[14px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1] font-bold text-[#004F83] capitalize line-clamp-1 mb-4px lg:mb-[6px] 2xl:mb-[8px]">
                            {testimonial.name}
                        </div>
                        <div className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-[1] font-normal text-[#121212] capitalize line-clamp-1">
                            {testimonial.role}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Testimonial() {
    const [activeFilter, setActiveFilter] = useState(TestimonialFilter.ALL);
    const filteredTestimonials = useMemo(() => {
        switch (activeFilter) {
            case TestimonialFilter.VIDEO:
                return testimonialData.filter((t) => t.hasVideo);
            case TestimonialFilter.WORDS:
                return testimonialData.filter((t) => !t.hasVideo);
            default:
                return testimonialData;
        }
    }, [activeFilter]);

    return (
        <section className="w-full block 2xl:p-[50px_0_75px] xl:p-[40px_0_50px]">
            <div className="container">
                <div className="3xl:mb-[70px] 2xl:mb-[40px] mb-[20px] flex flex-wrap">
                    <div className="text-title1 w-full xl:w-[40%] xl:pr-[20px] 2xl:pr-[60px] 3xl:pr-[80px]">
                        Employee <span className='text-base2 font-bold'>Testimonials</span>
                        <PageBreadcrumb />
                    </div>
                    <div className="w-full xl:w-[60%] mt-2 xl:mt-[15px]">
                        <TestimonialFilters
                            activeFilter={activeFilter}
                            onFilterChange={setActiveFilter}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-[4px] lg:-mx-[10px] 2xl:-mx-[22px]">
                    {filteredTestimonials.length > 0 ? (
                        filteredTestimonials.map((testimonial, index) => (
                            testimonial.hasVideo ? (
                                <VideoTestimonialCard
                                    key={`video-${testimonial.name}-${index}`}
                                    testimonial={testimonial}
                                />
                            ) : (
                                <WordTestimonialCard
                                    key={`word-${testimonial.name}-${index}`}
                                    testimonial={testimonial}
                                />
                            )
                        ))
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            No testimonials available for this selection.
                        </div>
                    )}
                </div>
                <Pagination className="justify-end mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </section>
    );
}