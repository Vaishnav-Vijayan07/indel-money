"use client";

import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import PaginationComponent from "../../Pagination";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import api from "@/lib/api/axios";
import { cn } from "../../../lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Policies({ policies, initialCategories, currentPage, totalPages, content }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState(initialCategories || []);
  const [activeCategory, setActiveCategory] = useState(initialCategories?.[0] || null);
  
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const [policiesList, setPoliciesList] = useState(policies || []);
  const [localCurrentPage, setLocalCurrentPage] = useState(currentPage || 1);
  const [localTotalPages, setLocalTotalPages] = useState(totalPages || 1);

  const fetchPoliciesData = async (categoryId, page = 1) => {
    try {
      const { data } = await api.get("/web/investors/policies", { 
        params: { category_id: categoryId, page, limit: 10 } 
      });
      setPoliciesList(data?.data?.policies || []);
      setLocalTotalPages(data?.data?.pagination?.totalPages || 1);
      setLocalCurrentPage(page);
    } catch (error) {
      console.error("Error fetching policies:", error);
    }
  };

  const handlePageChange = (newPage) => {
    fetchPoliciesData(activeCategory?.id, newPage);
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (activeCategory?.id) {
      fetchPoliciesData(activeCategory.id, 1);
    }
  }, [activeCategory]);

  const isDataPresent = policiesList?.length > 0;

  return (
    <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
      <div className="container">
        <h2 className="text-[28px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[68px] text-black font-regular mb-[5px]">
          <span className="text-[#F30000] font-bold">{content?.page_title}</span>
        </h2>
        <div className="breadcrumb hidden sm:flex flex-wrap mb-[10px] md:mb-[35px]">
          <Link
            href="/"
            className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                    before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                    before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                    before:content-[''] duration-100 hover:text-base2 last:pointer-events-none last:before:hidden"
          >
            Home
          </Link>

          <Link
            href="/"
            className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                        before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                        before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                        before:content-[''] duration-100 hover:text-base2 
                        last:before:hidden last:pointer-events-none"
          >
            Investors Report
          </Link>
          <Link
            href="/"
            className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                        before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                        before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                        before:content-[''] duration-100 hover:text-base2 
                        last:before:hidden last:pointer-events-none"
          >
            Policies
          </Link>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-[270px] xl:w-[330px] 2xl:w-[400px] 3xl:w-[510px]">
            <Sidebar />
          </div>
          <div className="w-full md:w-[calc(100%-300px)] xl:w-[calc(100%-330px)] 2xl:w-[calc(100%-400px)] 3xl:w-[calc(100%-510px)] md:pl-[30px] xl:pl-[50px] 2xl:pl-[80px] 3xl:pl-[100px]">
            <div className="text-black text-title1 font-medium mb-[20px] 2xlmb-[30px] 3xl:mb-[40px]">{content?.policies_title}</div>
            
            {categories?.length > 0 && (
              <>
                <div className="sm:hidden block">
                  <Swiper slidesPerView="auto" spaceBetween={10} freeMode={true} modules={[FreeMode]} className="mb-4 px-2">

                    {categories.map((cat) => (
                      <SwiperSlide key={cat.id} className="!w-auto">
                        <button
                          onClick={() => setActiveCategory(cat)}
                          className={cn(
                            "text-[12px] sm:text-[8px] lg:text-[14px] 2xl:text-[18px] 3xl:text-[20px] px-[15px] xl:px-[20px] py-[8px] 3xl:px-[25px] 3xl:py-[11px] rounded-full font-bold transition-all text-white cursor-pointer whitespace-nowrap mb-[4px]",
                            activeCategory?.id === cat.id ? "bg-base1" : "bg-[#85B6CF]"
                          )}
                        >
                          {cat.title}
                        </button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <ScrollArea type="auto" className="hidden mb-4 w-full sm:block">
                  <div className="flex space-x-2 mb-2 w-max">
                    {/* <button
                      onClick={() => setActiveCategory(null)}
                      className={cn(
                        "text-xs lg:text-sm 2xl:text-base 3xl:text-lg px-4 xl:px-5 py-2 3xl:px-6 3xl:py-3 rounded-full font-bold transition-all text-white cursor-pointer truncate",
                        activeCategory === null ? "bg-base1" : "bg-[#85B6CF]"
                      )}
                    >
                      All
                    </button> */}
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                          "text-xs lg:text-sm 2xl:text-base 3xl:text-lg px-4 xl:px-5 py-2 3xl:px-6 3xl:py-3 rounded-full font-bold transition-all text-white cursor-pointer truncate",
                          activeCategory?.id === cat.id ? "bg-base1" : "bg-[#85B6CF]"
                        )}
                      >
                        {cat.title}
                      </button>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" className="data-[state=hidden]:hidden" />
                </ScrollArea>
              </>
            )}

            {isDataPresent ? (
              <>
                <div className="grid grid-cols-1 4xs:grid-cols-2 gap-2 xl:gap-4 3xl:gap-6">
                  {policiesList?.map((policies, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-[10px] sm:py-[25px] px-[10px] sm:px-[15px] xl:py-[30px] xl:px-[20px] 3xl:py-[35px] 3xl:px-[25px] min-h-[55px] sm:min-h-[85px] 2xl:min-h-[100px] 3xl:min-h-[140px] rounded-2xl bg-gradient-to-r from-[rgba(23,71,158,0.40)] to-[rgba(238,56,36,0.40)] "
                    >
                      <h3 className="text-[13px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-medium sm:font-bold text-black max-w-[260px]">{`${
                        policies.title ? policies.title : ""
                      }`}</h3>

                      {policies.file && policies.file !== "" ? (
                        <Link
                          href={policies.file ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${policies.file}` : "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 md:max-lg:mt-[10px]"
                        >
                          <span className="text-[10px] xl:text-[12px] 3xl:text-[16px] text-black whitespace-nowrap sm:block hidden">View PDF</span>
                          <div className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px] 3xl:w-[40px] 3xl:h-[40px] bg-red-500 rounded-full flex items-center justify-center">
                            <Image
                              src="/images/pdf-icon.svg"
                              alt="PDF Icon"
                              width={24}
                              height={24}
                              className="w-[10px] h-[10px] xl:w-[15px] xl:h-[15px] 2xl:w-[20px] 2xl:h-[20px] 3xl:w-[24px] 3xl:h-[24px]"
                            />
                          </div>
                        </Link>
                      ) : (
                        <span className="text-[10px] xl:text-[12px] 3xl:text-[16px] text-black-400 italic">No PDF Available</span>
                      )}
                    </div>
                  ))}
                </div>
                <PaginationComponent totalPages={localTotalPages} currentPage={localCurrentPage} onPageChange={handlePageChange} />
              </>
            ) : (
              <span className="text-[10px] xl:text-[12px] 3xl:text-[16px] text-black-400 italic">No Data Available</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
