"use client";
import BranchForm from "@/components/common/BranchForm";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamically import BranchLocationMap with SSR disabled
const BranchLocationMap = dynamic(() => import("@/components/features/home/BranchLocationMap"), {
  ssr: false, // Ensures this only runs on the client
});

export default function BranchLocator({ variant = "default", pageContent }) {
  return (
    <section
      className={`${
        variant === "contact"
          ? "sm:bg-[#e6edf7] rounded-t-[10px] sm:py-[20px] lg:py-[30px] 2xl:py-[40px] 3xl:py-[50px] max-sm:shadow-[0_0_150px_0_rgba(0,0,0,0.25)]"
          : ""
      }
       ${variant === "branch" ? "pt-[30px] sm:pt-[40px] pb-[0px] 2xl:pt-[30px] 2xl:pb-[90px] 3xl:pt-[50px] 3xl:pb-[120px]" : ""}F
       w-full block`}
    >
      <div className="sm:py-0">
        <div className="container">
          <div className="mb-[35px] sm:mb-[20px] lg:mb-30px flex flex-col lg:flex-row items-start xl:items-start justify-between flex-wrap">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-title1 w-full lg:w-[calc(100%-468px)] xl:w-[calc(100%-500px)] 2xl:w-[calc(100%-600px)] 3xl:w-[calc(100%-668px)] xl:pr-[20px] 2xl:pr-[60px] 3xl:pr-[80px]  [&>span]:text-base2 [&>span]:font-bold"
              dangerouslySetInnerHTML={{ __html: pageContent?.branch_section_title }}
            />
            {/* Discover Gold Loan Options Near You with Our{" "} */}
            {/* {pageContent?.branch_section_title} */}
            {/* <span className="text-base2 font-bold">Branch Locator</span> */}
            {/* </motion.div> */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[468px] xl:w-[500px] 2xl:w-[600px] 3xl:w-[668px] mt-2 xl:mt-[15px] xl:text-right hidden sm:block"
            >
              <p className="text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#323232]">
                {/* Find the closest Indel Money branch using our locator tool and
                unlock gold loan opportunities in your vicinity. Let&apos;s work
                together to meet your financial needs. */}
                {pageContent?.branch_section_description}
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container"
        >
          <div className="bg-white shadow-[0_0_50px_rgba(0,0,0,0.15)] rounded-[20px] 2xl:rounded-[30px] p-[18px] sm:p-[10px_15px] lg:p-[15px_20px] 2xl:p-[20px_30px] mb-[30px] sm:mb-[15px] lg:mb-[30px] 2xl:mb-[35px]">
            <BranchForm />
          </div>
        </motion.div>
      </div>
      <div
        className={`${
          variant === "home"
            ? "sm:pb-[45px] xl:pb-[60px] 2xl:pb-[90px] relative z-0 before:content-[''] before:block before:w-full before:h-[calc(100%-95px)] before:bg-gradient-to-r before:from-[rgba(243,0,0,0)] before:to-[rgba(235,2,8,0.10)] before:absolute before:bottom-0 before:left-0 before:-z-1 before:pointer-events-none before:rotate-180"
            : variant === "contact"
            ? ""
            : ""
        }`}
      >
        <div className="max-sm:max-w-full container">
          <BranchLocationMap />
        </div>
      </div>
    </section>
  );
}
