"use client";

import BlogCard from "@/components/common/BlogCard";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import AwardHighlightBox from "@/components/features/award/AwardHighlightBox";
import MobAwardHighlightBox from "@/components/features/award/MobAwardHightlightBox";
import PaginationComponent from "@/components/Pagination";
import { useEffect, useState } from "react";

export default function AwardClient({ contents, awards, sliderItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil((awards?.length || 0) / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = awards?.slice(indexOfFirstPost, indexOfLastPost);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [awards]);

  return (
    <>
      <section className="w-full block py-[23px] lg:py-[30px] 2xl:py-[50px]">
        <div className="container">
          <div className="w-full">
            <div className="text-title1 font-bold text-base2">{contents?.title || ""}</div>
            <PageBreadcrumb />
          </div>
        </div>
      </section>

      <section className="2xl:pb-[55px] lg:pb-[30px] pb-[20px]">
        <div className="container">
          <div className="sm:block hidden">
            <AwardHighlightBox items={sliderItems} />
          </div>
          <div className="sm:hidden block">
            <MobAwardHighlightBox items={sliderItems} title={contents?.mobile_title} />
          </div>
        </div>
      </section>

      <section className="w-full block p-[20px_0_30px_0] lg:p-[30px_0_40px_0] 2xl:p-[50px_0_60px_0] border-b border-b-[rgb(0,0,0,18%)] relative z-0 before:content-[''] before:absolute before:top-0 before:left-0 before:hidden before:w-full before:h-full md:before:h-[calc(100%-80px)] lg:before:h-[calc(100%-100px)] 2xl:before:h-[calc(100%-140px)] before:bg-gradient-to-r before:from-[rgba(243,0,0,0.00)] before:to-[rgba(235,2,8,0.10)] before:pointer-events-none sm:before:block">
        <div className="container">
          <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black font-medium mb-[10px]">
            {contents?.all_awards_title || ""}
          </div>
          <div className="flex flex-wrap -mx-[4px] lg:-mx-[15px] 2xl:-mx-[35px]">
            {currentPosts?.map((item, index) => (
              <div key={index} className="w-full md:w-1/2 p-[6px_4px] lg:p-[10px_15px] 2xl:p-[25px_35px]">
                <BlogCard item={item} type="award" />
              </div>
            ))}
          </div>

          {totalPages > 1 && <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />}
        </div>
      </section>
    </>
  );
}
