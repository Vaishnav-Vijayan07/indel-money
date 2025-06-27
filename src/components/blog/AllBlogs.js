"use client";
import BlogItem from "@/components/blog/BlogItem";
import PaginationComponent from "@/components/Pagination";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useMemo } from "react";

function AllBlogs({ blogs = [], pagination = {}, title, type }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalPages = useMemo(() => pagination?.totalPages || 1, [pagination?.totalPages]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handlePageChange = (newPage) => {
    router.push(`?${createQueryString("page", newPage.toString())}`, {
      scroll: false,
    });
  };

  return (
    <section className="p-[30px_0_20px_0] 2xl:p-[40px_0_60px_0] relative z-0">
      <div className="container" id="all">
        <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black font-medium mb-[15px]">{title}</div>
        <div className="flex flex-wrap -mx-[4px] lg:-mx-[15px] sm:border-b sm:border-b-[rgb(0,0,0,18%)] 2xl:-mx-[35px] sm:pb-[20px] 2xl:pb-[50px] 2xl:mb-[40px] sm:mb-[20px]">
          {blogs?.length > 0 ? (
            blogs?.map((item, index) => <BlogItem index={index} key={item.id || index} item={item} type={type} />)
          ) : (
            <p>No data available.</p>
          )}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="w-full mt-8">
            <PaginationComponent totalPages={totalPages} currentPage={pagination?.currentPage} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </section>
  );
}

export default AllBlogs;

// export async function generateMetadata({ params }) {
//   const page = parseInt(params?.page) || 1;
//   const { content, error } = await fetchBlogsData(page, 10);
//   // ... metadata logic (same as original)
// }

// const PaginationItems = memo(({ currentPage, totalPages }) => {
//   // ... pagination logic (same as renderPaginationItems)
// });
