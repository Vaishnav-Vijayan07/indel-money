import React from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

function PaginationComponent({ totalPages, currentPage, onPageChange }) {
  console.log("PaginationComponent rendered with:", {
    totalPages,
    currentPage,
  });

  // Don't render if there's only one page or no pages
  if (totalPages <= 1) return null;

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  // Function to generate visible page numbers (for large page counts)
  const getVisiblePages = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    // Always show first page
    range.push(1);

    // Calculate range around current page
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    // Remove duplicates and sort
    const uniqueRange = [...new Set(range)].sort((a, b) => a - b);

    // Add dots where there are gaps
    let prev = 0;
    for (const i of uniqueRange) {
      if (prev + 1 < i) {
        rangeWithDots.push("...");
      }
      rangeWithDots.push(i);
      prev = i;
    }

    return rangeWithDots;
  };

  const visiblePages = totalPages <= 7 ? Array.from({ length: totalPages }, (_, i) => i + 1) : getVisiblePages();

  console.log("Visible pages:", visiblePages);

  return (
    <Pagination className="sm:justify-end justify-start mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={canGoPrevious ? () => onPageChange(currentPage - 1) : undefined}
            className={!canGoPrevious ? "pointer-events-none opacity-50" : "cursor-pointer"}
            aria-disabled={!canGoPrevious}
          />
        </PaginationItem>

        {visiblePages.map((page, index) => {
          if (page === "...") {
            return (
              <PaginationItem key={`dots-${index}`}>
                <span className="px-3 py-2">...</span>
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page == currentPage}
                onClick={() => {
                  console.log(page);
                  console.log(currentPage);
                  onPageChange(page);
                }}
                className="cursor-pointer"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            onClick={canGoNext ? () => onPageChange(currentPage + 1) : undefined}
            className={!canGoNext ? "pointer-events-none opacity-50" : "cursor-pointer"}
            aria-disabled={!canGoNext}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationComponent;
