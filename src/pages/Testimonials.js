"use client";
import React, { useState, useCallback, useEffect } from "react";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import VideoTestimonialCard from "@/components/employeeTestimonials/TestimonialVideoCard";
import WordTestimonialCard from "@/components/employeeTestimonials/TestimonialWord";
import TestimonialFilters from "@/components/employeeTestimonials/Filters";
import { useRouter, useSearchParams } from "next/navigation";
import PaginationComponent from "@/components/Pagination";
import { renderHtml } from "@/lib/utils/htmlParser";

export default function Testimonial({ testimonials, pagination, contents }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from URL params
  const [activeFilter, setActiveFilter] = useState(() => {
    return searchParams.get("type") || "all";
  });

  const [currentPage, setCurrentPage] = useState(() => {
    return parseInt(searchParams.get("page")) || 1;
  });

  // Sync state with URL params when they change
  useEffect(() => {
    const urlFilter = searchParams.get("type") || "all";
    const urlPage = parseInt(searchParams.get("page")) || 1;

    setActiveFilter(urlFilter);
    setCurrentPage(urlPage);
  }, [searchParams]);

  const createQueryString = useCallback(
    (updates) => {
      const params = new URLSearchParams(searchParams.toString());

      // Apply all updates
      Object.entries(updates).forEach(([key, value]) => {
        if (value && value !== "all") {
          params.set(key, value);
        } else if (key === "type" && value === "all") {
          params.delete(key); // Remove type param when it's "all"
        } else {
          params.set(key, value);
        }
      });

      return params.toString();
    },
    [searchParams]
  );

  const handlePageChange = useCallback(
    (newPage) => {
      const queryString = createQueryString({
        page: newPage.toString(),
        type: activeFilter,
      });

      setCurrentPage(newPage);
      router.push(`?${queryString}`);
    },
    [activeFilter, createQueryString, router]
  );

  const handleFilterChange = useCallback(
    (filter) => {
      // Reset to page 1 when filter changes
      const queryString = createQueryString({
        type: filter,
        page: "1",
      });

      setActiveFilter(filter);
      setCurrentPage(1);
      router.push(`?${queryString}`);
    },
    [createQueryString, router]
  );

  // Get current filter and page from pagination object if available
  const totalPages = pagination?.totalPages || 1;
  const currentPageFromProps = pagination?.currentPage || currentPage;

  return (
    <section className="w-full block 2xl:p-[50px_0_75px] xl:p-[40px_0_50px] p-[20px_0]">
      <div className="container">
        <div className="mb-[15px] lg:mb-[20px] 2xl:mb-[40px] 3xl:mb-[60px] flex flex-wrap">
          <div className="text-title1 text-[#5e5959bf] w-full xl:w-[40%] xl:pr-[20px] 2xl:pr-[60px] 3xl:pr-[80px] [&>span]:text-base2 [&>span]:font-bold">
            {contents?.title ? renderHtml(contents?.title) : "Testimonials"}
            <PageBreadcrumb />
          </div>
          <div className="w-full xl:w-[60%] mt-2 xl:mt-[15px] sm:mb-[0] mb-[50px]">
            <TestimonialFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          </div>
        </div>

        <div className="flex flex-wrap -mx-[4px] lg:-mx-[10px] 2xl:-mx-[22px]">
          {testimonials && testimonials.length > 0 ? (
            testimonials.map((testimonial, index) =>
              testimonial.type === "video" ? (
                <VideoTestimonialCard key={testimonial?.id} item={testimonial} />
              ) : (
                <WordTestimonialCard key={testimonial?.id} item={testimonial} />
              )
            )
          ) : (
            <div className="w-full text-center py-12 text-gray-500">No testimonials available for this selection.</div>
          )}
        </div>

        {totalPages > 1 && <PaginationComponent totalPages={totalPages} currentPage={currentPageFromProps} onPageChange={handlePageChange} />}
      </div>
    </section>
  );
}
