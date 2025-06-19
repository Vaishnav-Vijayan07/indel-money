"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/custom-accordion";
import { cn } from "../../../lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import api from "@/lib/api/axios";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import LoadingCircleSpinner from "@/components/common/LoadingCircleSpinner";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { FreeMode } from "swiper/modules";

export default function QuarterlyReportSection() {
  const [activeYear, setActiveYear] = useState({});
  const [openAccordion, setOpenAccordion] = useState("");
  const [years, setYears] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAccordionToggle = (year) => {
    setOpenAccordion(openAccordion === year ? null : year);
  };

  const fetchFiscalYears = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/web/investors/fiscal_years");
      const years = data?.fiscal_years || [];
      setYears(years);
      setActiveYear(years[0]);
      setOpenAccordion(years[0]?.fiscal_year);
    } catch (error) {
      console.error("Error fetching fiscal years:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchReportsData = async (year) => {
    try {
      const { data } = await api.get("/web/investors/quarterly-reports", { params: { year } });
      setReports(data?.data?.reports || []);
    } catch (error) {
      console.error("Error fetching fiscal years:", error);
    }
  };

  useEffect(() => {
    if (activeYear?.id) {
      fetchReportsData(activeYear?.id);
    }
  }, [activeYear]);

  useEffect(() => {
    fetchFiscalYears();
  }, []);

  return (
    <section>
      {loading ? (
        <div className="flex justify-center items-center">
          <LoadingCircleSpinner />
        </div>
      ) : (
        <>
          <div className="sm:hidden block">
            <Swiper slidesPerView="auto" spaceBetween={10} freeMode={true} modules={[FreeMode]} className="mb-4 px-2">
              {years?.map((year) => (
                <SwiperSlide key={year?.id} className="!w-auto">
                  <button
                    onClick={() => {
                      setActiveYear(year);
                      handleAccordionToggle(year?.fiscal_year);
                    }}
                    className={cn(
                      "text-[12px] sm:text-[8px] lg:text-[14px] 2xl:text-[18px] 3xl:text-[20px] px-[15px] xl:px-[20px] py-[8px] 3xl:px-[25px] 3xl:py-[11px] rounded-full font-bold transition-all text-white cursor-pointer whitespace-nowrap",
                      activeYear?.fiscal_year === year?.fiscal_year ? "bg-base1" : "bg-[#85B6CF]"
                    )}
                  >
                    {year?.fiscal_year}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <ScrollArea className="hidden mb-4 w-full overflow-x-auto sm:flex sm:space-x-2">
            <div className="flex space-x-2 mb-2">
              {years?.map((year) => (
                <button
                  key={year?.id}
                  onClick={() => {
                    setActiveYear(year);
                    handleAccordionToggle(year?.fiscal_year);
                  }}
                  className={cn(
                    "text-xs lg:text-sm 2xl:text-base 3xl:text-lg px-4 xl:px-5 py-2 3xl:px-6 3xl:py-3 rounded-full font-bold transition-all text-white cursor-pointer truncate",
                    activeYear?.fiscal_year === year?.fiscal_year ? "bg-base1" : "bg-[#85B6CF]"
                  )}
                >
                  {year?.fiscal_year}
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <Accordion type="single" collapsible value={openAccordion}>
            {years?.map((year) => (
              <AccordionItem key={year?.id} value={year?.fiscal_year} className="border-0">
                <AccordionTrigger className="hidden border-0">{year?.fiscal_year}</AccordionTrigger>
                <AccordionContent>
                  {/* Board Meeting Section */}
                  <div className="mb-[20px] xl:mb-[25px]">
                    <div className="overflow-auto w-full">
                      <table className="w-full border-collapse rounded-[20px] px-[55px] 3xl:px-[76px] bg-[#D7E9FF] overflow-hidden">
                        <thead>
                          <tr className="bg-[#CDE2FF] text-left text-gray-800">
                            <th className="text-[12px] sm:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] break-spaces sm:whitespace-nowrap">
                              Quarter
                            </th>
                            <th className="text-[12px] sm:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] break-spaces sm:whitespace-nowrap">
                              File
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {reports
                            ?.filter((m) => m.year === year.id)
                            ?.map((stock, index) => (
                              <tr key={index} className="bg-[#E7EFF6] border-t border-[#E5F0FA]">
                                <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] font-medium pl-[30px] xl:pl-[55px]  3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-nowrap">
                                  {stock?.title}
                                  {stock?.fiscalYear?.fiscal_year}
                                </td>
                                <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)]">
                                  <Link
                                    href={stock?.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] xl:text-[12px] 3xl:text-[16px] flex items-center space-x-2 text-[#1F1B1B] hover:text-red-600"
                                  >
                                    <span>View PDF</span>
                                    <Image
                                      src="/images/pdf.svg"
                                      alt="PDF Icon"
                                      width={24}
                                      height={24}
                                      className="w-[20px] h-[20px] 3xl:w-[25px] 3xl:h-[25px] object-contain"
                                    />
                                  </Link>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      )}
    </section>
  );
}
