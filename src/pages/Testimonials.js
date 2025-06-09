"use client";
import React, { useState, useMemo } from "react";
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
import VideoTestimonialCard from "@/components/employeeTestimonials/TestimonialVideoCard";
import WordTestimonialCard from "@/components/employeeTestimonials/TestimonialWord";
import TestimonialFilters from "@/components/employeeTestimonials/Filters";

const testimonialData = [
  {
    thumbnail: "/images/employeeTestimonialsVideo-1.jpg",
    src: "/images/employeeTestimonialsVideo-1.jpg",
    user_image: "/images/testimonial-profile-image-2.jpg",
    description:
      "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    title: "Sreerajitha",
    designation: "Branch Manager, Indel Money South Kalamassery",
    hasVideo: false,
  },
  {
    thumbnail: "/images/testimonial-1.jpg",
    src: "/images/testimonial-1.jpg",
    user_image: "/images/testimonial-profile-image-1.jpg",
    title: "Preetha S",
    designation: "Sr. Branch Manager",
    hasVideo: true,
  },
  {
    thumbnail: "/images/testimonial-3.jpg",
    src: "/images/testimonial-3.jpg",
    user_image: "/images/testimonial-profile-image-3.jpg",
    title: "Sruthy Madhav",
    designation: "Branch Manager",
    hasVideo: true,
  },
  {
    thumbnail: "/images/employeeTestimonialsVideo-3.jpg",
    src: "/images/employeeTestimonialsVideo-3.jpg",
    user_image: "/images/testimonial-profile-image-1.jpg",
    description:
      "I manage to contribute to the company and still have time for my family. The management team makes sure that the suggestions and opinions of the employees are valued and included in the planning process of the organisation. I am proud to work for Indel Money.",
    title: "Preetha S",
    designation: "Sr. Branch Manager",
    hasVideo: false,
  },
  {
    thumbnail: "/images/employeeTestimonialsVideo-1.jpg",
    src: "/images/employeeTestimonialsVideo-1.jpg",
    user_image: "/images/testimonial-profile-image-2.jpg",
    description:
      "Team Indel Money is like my second home. I feel honored and valued as a member in this environment that holds inclusiveness at its core. My company understands my life roles as a professional and also as a mother. My peers and the company always extend their helping hands whenever I face an emergency situation. The vibrant atmosphere and culture in the office binds everyone together and experience a feeling of togetherness.",
    title: "Sreerajitha",
    designation: "Branch Manager, Indel Money South Kalamassery",
    hasVideo: false,
  },
  {
    thumbnail: "/images/employeeTestimonialsVideo-3.jpg",
    src: "/images/employeeTestimonialsVideo-3.jpg",
    user_image: "/images/testimonial-profile-image-1.jpg",
    description:
      "I manage to contribute to the company and still have time for my family. The management team makes sure that the suggestions and opinions of the employees are valued and included in the planning process of the organisation. I am proud to work for Indel Money.",
    title: "Preetha S",
    designation: "Sr. Branch Manager",
    hasVideo: false,
  },
];

export default function Testimonial(filteredTestimonials) {
  const [activeFilter, setActiveFilter] = useState("All");
  return (
    <section className="w-full block 2xl:p-[50px_0_75px] xl:p-[40px_0_50px] p-[20px_0]">
      <div className="container">
        <div className="mb-[15px] lg:mb-[20px] 2xl:mb-[40px] 3xl:mb-[60px] flex flex-wrap">
          <div className="text-title1 w-full xl:w-[40%] xl:pr-[20px] 2xl:pr-[60px] 3xl:pr-[80px]">
            Employee <span className="text-base2 font-bold">Testimonials</span>
            <PageBreadcrumb />
          </div>
          <div className="w-full xl:w-[60%] mt-2 xl:mt-[15px] sm:mb-[0] mb-[50px]">
            <TestimonialFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-[4px] lg:-mx-[10px] 2xl:-mx-[22px]">
          {filteredTestimonials.length > 0 ? (
            filteredTestimonials?.map((testimonial, index) =>
              testimonial.hasVideo ? (
                <VideoTestimonialCard key={`video-${testimonial.name}-${index}`} item={testimonial} />
              ) : (
                <WordTestimonialCard key={`word-${testimonial.name}-${index}`} item={testimonial} />
              )
            )
          ) : (
            <div className="text-center py-12 text-gray-500">No testimonials available for this selection.</div>
          )}
        </div>
        <Pagination className="justify-start sm:justify-end mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
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
