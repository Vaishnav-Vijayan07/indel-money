"use client";
import Link from "next/link";
import Image from "next/image";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import IndelMoneyCarsGallery from "@/components/features/indel-money-cares/IndelMoneyCarsGallery";

import { formatPostDate } from "@/lib/utils";
import PaginationComponent from "@/components/Pagination";
import { useSearchParams, useRouter } from "next/navigation";
import IndelCaresEventCard from "@/components/common/IndelCaresEventCard";
import { useCallback } from "react";
import IndelCaresEventMobileCard from "@/components/common/IndelCaresEventMobileCard";

export default function IndelMoneyCars({ content, slideItems, nonSlideItems, totalPages, currentPage, limit }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handlePageChange = (newPage) => {
    router.push(`?${createQueryString("page", newPage.toString())}`,{
      scroll: false, // Prevent scrolling to the top
    });
  };

  return (
    <>
      <section className="w-full block py-[20px] lg:py-[30px] 2xl:py-[50px]">
        <div className="container">
          <div className="w-full mb-[20px] lg:mb-[15px] 2xl:mb-[50px]">
            <div
              className="text-title2 [&>span]:text-base2 [&>span]:font-bold "
              dangerouslySetInnerHTML={{ __html: content?.page_title ? content?.page_title : "" }}
            />
            <PageBreadcrumb />
          </div>
        </div>
      </section>
      <section className="md:pb-[50px] pb-[25px]">
        <IndelMoneyCarsGallery sliderItems={slideItems} />
      </section>
      <section className="w-full block 2xl:p-[80px_0_70px] lg:p-[40px_0_50px] sm:p-[30px_0_40px] p-[20px_0_25px] sm:mb-[0] mb-[50px] relative z-0 before:content-[''] before:absolute before:z-[-1] before:top-0 before:left-0 before:block before:w-full before:h-[100%] sm:before:h-[70%] before:bg-[rgba(212,230,255,0.6)] sm:before:bg-gradient-to-r sm:before:from-[rgba(243,0,0,0.00)] sm:before:to-[rgba(235,2,8,0.10)] before:pointer-events-none">
        <div className="container">
          <h2
            className="text-title1 2xl:mb-[40px] xl:mb-[30px] mb-[20px] [&>span]:text-base2 [&>span]:font-bold"
            dangerouslySetInnerHTML={{ __html: content?.events_title ? content?.events_title : "" }}
          />
          <div className="flex flex-wrap">
            <div className="md:w-1/2 2xl:pr-[50px] md:pr-[30px] mb-[20px]">
              {nonSlideItems?.slice(0, 1)?.map((item, index) => (
                <div key={index} className="w-full">
                  <Link
                    href={`/indel-money-cares/${item?.slug}`}
                    className="group w-full h-full flex flex-wrap sm:flex-nowrap gap-[10px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px]"
                  >
                    <div className="w-[100%] sm:w-[170px] lg:w-[240px] xl:w-[320px] 3xl:w-[510px] h-[210px] sm:h-auto overflow-hidden rounded-[20px] relative z-0">
                      <Image
                        src={item?.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.image}` : "/images/care-events-1.jpg"}
                        fill
                        alt={item?.image_alt ? item?.image_alt : "news-1"}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="3xl:w-[calc(100%-510px)] xl:w-[calc(100%-320px)] lg:w-[calc(100%-240px)] sm:w-[calc(100%-170px)] w-[100%]">
                      {item?.event_date && (
                        <div className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#505050] line-clamp-1 mb-0.5 3xl:mb-1 group-hover:text-base2 transition-colors duration-300">
                          {formatPostDate(item?.event_date)}
                        </div>
                      )}
                      <div className="text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-[1.3] text-black font-bold line-clamp-3 mb-1 3xl:mb-3">
                        {item?.title}
                      </div>
                      <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.3] text-[#2d2d2d] font-normal line-clamp-12">
                        {item?.description || item?.description}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="md:w-1/2">
              {nonSlideItems?.slice(1).map((item, index) => (
                <div key={index} className="w-full 3xl:mb-[60px] xl:mb-[30px] mb-[20px] last:mb-0">
                  <IndelCaresEventCard item={item} className="!p-0 sm:flex hidden" />
                  <IndelCaresEventMobileCard item={item} className="sm:hidden flex" />
                </div>
              ))}
            </div>
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
          </div>
        </div>
      </section>
    </>
  );
}
