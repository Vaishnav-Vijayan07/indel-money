import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

function PaginationComponent({ totalPages, currentPage, onPageChange }) {
    return (
        <Pagination className="sm:justify-end justify-start mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, index) => {
                    const page = index + 1;
                    return (
                        <PaginationItem key={page}>
                            <PaginationLink
                                isActive={page === currentPage}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
                <PaginationItem>
                    <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export default PaginationComponent;
