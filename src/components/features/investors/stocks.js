"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../../../@/components/ui/accordion";
import { cn } from "../../../lib/utils";

const years = ["2024-2025", "2023-2024", "2022-2023", "2021-2022"];

const stocksData = [
    { Date: "May 2024", IntimationLink: "/pdfs/2022-23.pdf", Outcome: "/pdfs/2022-23.pdf" },
    { Date: "June 2024", IntimationLink: "/pdfs/2021-22.pdf", Outcome: "/pdfs/2022-23.pdf" },
    { Date: "August 2024", IntimationLink: "/pdfs/2020-21.pdf", Outcome: "/pdfs/2022-23.pdf" },
    { Date: "November 2024", IntimationLink: "/pdfs/2020-21.pdf", Outcome: "/pdfs/2022-23.pdf" },
];

const IntimationsData = [
    { month: "April 2024", recordDate: "/pdfs/2022-23.pdf", interest: "/pdfs/2022-23.pdf" },
    { month: "May 2024", recordDate: "/pdfs/2021-22.pdf", interest: "/pdfs/2022-23.pdf" },
    { month: "June 2024", recordDate: "/pdfs/2020-21.pdf", interest: "/pdfs/2022-23.pdf" },
    { month: "July 2024", recordDate: "/pdfs/2020-21.pdf", interest: "/pdfs/2022-23.pdf" },
    { month: "August 2024", recordDate: "/pdfs/2020-21.pdf", interest: "/pdfs/2022-23.pdf" },
    { month: "September 2024", recordDate: "/pdfs/2020-21.pdf", interest: "/pdfs/2022-23.pdf" },
    { month: "October 2024", recordDate: "/pdfs/2020-21.pdf", interest: "/pdfs/2022-23.pdf" },
    { month: "November 2024", recordDate: "/pdfs/2020-21.pdf", interest: "/pdfs/2022-23.pdf" },
];

export default function StockExchange() {
    const [activeYear, setActiveYear] = useState("2024-2025");
    const [openAccordion, setOpenAccordion] = useState("2024-2025"); // Set the first accordion to open initially

    const handleAccordionToggle = (year) => {
        setOpenAccordion(openAccordion === year ? null : year);
    };

    return (
        <section>
            <div className="flex space-x-2 mb-4">
                {years.map((year) => (
                    <button
                        key={year}
                        onClick={() => {
                            setActiveYear(year);
                            handleAccordionToggle(year);
                        }}
                        className={cn(
                            "text-[8px] lg:text-[14px] 2xl:text-[18px] 3xl:text-[20px] px-[15px] xl:px-[20px] py-[8px] 3xl:px-[25px] 3xl:py-[11px] rounded-full font-bold transition-all text-white cursor-pointer",
                            activeYear === year
                                ? "bg-[#17479E]"
                                : "bg-[#85B6CF]"
                        )}
                    >
                        {year}
                    </button>
                ))}
            </div>

            <Accordion type="single" collapsible value={openAccordion}>
                {years.map((year) => (
                    <AccordionItem key={year} value={year} className="border-0">
                        <AccordionTrigger className="hidden border-0">{year}</AccordionTrigger>
                        <AccordionContent>
                            {/* Board Meeting Section */}
                            <div className="mb-[20px] xl:mb-[25px]">
                                <div className="text-[18px] lg:text-[26px] xl:text-[28px] 2xl:text-[35px] 3xl:text-[42px] font-medium text-black mb-[20px] xl:mb-[25px]">
                                    1. Board Meeting
                                </div>
                                <div className="overflow-auto w-full">
                                    <table className="w-full border-collapse rounded-[20px] px-[55px] 3xl:px-[76px] bg-[#D7E9FF] overflow-hidden">
                                        <thead>
                                            <tr className="bg-[#CDE2FF] text-left text-gray-800">
                                                <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] whitespace-nowrap">Meeting Date</th>
                                                <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] whitespace-nowrap">Intimation</th>
                                                <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] whitespace-nowrap">Outcome</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stocksData.map((stock, index) => (
                                                <tr key={index} className="bg-[#E7EFF6] border-t border-[#E5F0FA]">
                                                    <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] font-medium pl-[30px] xl:pl-[55px]  3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-nowrap">{stock.Date}</td>
                                                    <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)]">

                                                        <Link
                                                            href={stock.IntimationLink}
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
                                                    <td className="text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px]">

                                                        <Link
                                                            href={stock.Outcome}
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

                            {/* Other Intimations Section */}
                            <div className="mb-[20px] xl:mb-[25px]">
                                <div className="text-[18px] lg:text-[28px] xl:text-[30px] 2xl:text-[35px] 3xl:text-[42px] font-medium text-black mb-[20px] xl:mb-[25px]">
                                    2. Other Intimations Filed With BSE
                                </div>
                                <div className="overflow-auto w-full">
                                    <table className="w-full border-collapse rounded-[20px] px-[55px] 3xl:px-[76px] bg-[#CDE2FF] overflow-hidden">
                                        <thead>
                                            <tr className="bg-[#CDE2FF] text-left text-gray-800">
                                                <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] whitespace-nowrap">Monthly</th>
                                                <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] whitespace-nowrap">Record Date Intimation</th>
                                                <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] whitespace-nowrap">Interest Payment Confirmation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {IntimationsData.map((intimation, index) => (
                                                <tr key={index} className="bg-[#E7EFF6] border-t border-[#E5F0FA]">
                                                    <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] font-medium pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-nowrap">{intimation.month}</td>
                                                    <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-nowrap">

                                                        <Link
                                                            href={intimation.recordDate}
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
                                                    <td className="text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px]">

                                                        <Link
                                                            href={intimation.interest}
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
        </section>
    );
}
