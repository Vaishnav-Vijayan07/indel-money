"use client";
import Image from "next/image";
import Link from "next/link";
import { encodeId } from "@/lib/hashids";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import parse, { domToReact } from "html-react-parser";
import truncateText from "@/lib/truncate";
import { toSentenceCase } from "@/lib/utils/toSentenceCase";

const options = {
  replace: (domNode) => {
    if (domNode.type === "tag" && /^h[1-6]$/.test(domNode.name)) {
      const text = domToReact(domNode.children);
      return <>{text}</>; // return plain text, no styles or h-tags
    }
  },
};

export default function JobResultBox({ item, variant = "default" }) {
  // Generate the job details URL
  const jobUrl = `${process.env.NEXT_PUBLIC_SITE_URL || ""}/career-list/job-details/${encodeId(item?.id)}`;
  const jobTitle = item?.job_title || "Job Opportunity";
  const shareText = encodeURIComponent(`Check out this job opening: ${jobTitle}\n\n${jobUrl}`);
  const whatsappUrl = `https://wa.me/?text=${shareText}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent("Job Opportunity: " + jobTitle)}&body=${shareText}`;

  return (
    <div
      className={`${variant === "activeJobs" ? "hover:shadow-[0_15px_30px_rgba(23,71,158,0.10)]" : ""
        } group w-full h-auto bg-[#dceafb] border-1 border-[#dceafb] rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] 2xl:rounded-[30px] 3xl:rounded-[36px] p-[10px_20px] lg:p-[10px_15px] xl:p-[18px_25px] 2xl:p-[20px_30px] 3xl:p-[25px_30px] hover:bg-[#c7e0ff] hover:border-base1/05 transition-all duration-300`}
    >
      <div className="w-full h-auto block border-b-[1px] border-dashed border-[#7670b3] mb-[8px] xl:mb-[10px] 2xl:mb-[20px]">
        <div className="flex flex-wrap items-center mb-[4px] xl:mb-[6px] 2xl:mb-[8px]">
          <div className="w-1/2">
            <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] font-bold leading-none text-black">
              {item?.job_title}
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center gap-[5px] lg:gap-[10px] 2xl:gap-[20px]">
            {/* Share Dropdown using Radix UI */}
            <div className="relative">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  {/* Your original Share button styles */}
                  <button
                    className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-normal leading-none text-[#484877] w-full h-auto flex items-center gap-[2px] lg:gap-[4px] 2xl:gap-[6px] hover:text-base1 bg-transparent border-none outline-none"
                    style={{ cursor: "pointer" }}
                    aria-label="Share"
                    type="button"
                  >
                    <Image
                      src="/images/icon-share.svg"
                      alt="share"
                      width={20}
                      height={20}
                      className="w-[10px] lg:w-[15px] 2xl:w-[20px] h-auto aspect-4/4 block"
                    />
                    Share
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    side="bottom"
                    align="end"
                    className="z-50 min-w-[180px] rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
                    style={{ marginTop: 8 }}
                  >
                    <DropdownMenu.Item asChild>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                      >
                        <Image
                          src="/images/floating-whatsapp.svg"
                          alt="WhatsApp"
                          width={18}
                          height={18}
                          className="w-[18px] h-[18px]"
                        />
                        Share via WhatsApp
                      </a>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild>
                      <a
                        href={emailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 transition-colors"
                      >
                        <Image src="/images/floating-mail.svg" alt="Email" width={18} height={18} className="w-[18px] h-[18px]" />
                        Share via Email
                      </a>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
            <div>
              {/* <JobResultAlert /> */}



              <Link
                href={`/career-list/job-details/${encodeId(item?.id)}`}
                className="text-[12px] 4xs:text-[14px] sm:text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-bold text-white w-full max-4xs:max-w-[110px] h-[30px] 4xs:h-[35px] sm:h-[25px] lg:h-[25px] xl:h-[30px] 2xl:h-[35px] 3xl:h-[48px] flex items-center bg-base1 rounded-[10px] sm:rounded-[20px] lg:rounded-[40px] 2xl:rounded-[80px] 3xl:rounded-[100px] p-[10px] sm:p-[4px] xl:p-[6px] 2xl:p-[8px] cursor-pointer transition-color duration-300 group-hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
              >
                {/* <span className="pr-[4px] sm:px-[2px] lg:px-[4px] 2xl:px-[6px]"></span> */}
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-[-10px] px-[5px]
                 md:px-[10px] lg:px-[15px] 2xl:px-[20px]">
                  Apply Now
                </span>
                <div className="relative z-10 flex items-center justify-center w-[30px] h-[30px] lg:w-[30px] lg:h-[30px]
                 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[35px] 
                3xl:h-[35px] bg-base2 rounded-full text-red-500 transition-all duration-300  group-hover:translate-x-1 group-hover:bg-base1  group-hover:text-white">
                  <svg viewBox="0 0 13 11" className="max-w-[15px]">
                    <path
                      d="M8.125 10.375L6.9875 9.19687L9.87187 6.3125H0V4.6875H9.87187L6.9875 1.80312L8.125 0.625L13 5.5L8.125 10.375Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-medium text-[#484877] mb-[5px] lg:mb-[10px] 2xl:mb-[20px]">
          {variant === "default" && `Experience: ${item.experience}`}
          {variant === "activeJobs" && `Experience: ${item.experience}`}
        </div>
        <div className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-medium text-[#484877] mb-[5px] lg:mb-[10px] 2xl:mb-[20px]">
          {variant === "default" && `Location: ${item?.locationDisplay}`}
          {variant === "activeJobs" && `Location: ${item?.locationDisplay}`}
        </div>
      </div>
      <div className="w-full h-auto block">
        <div className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-bold text-[#4b4b4b] mb-[4px] lg:mb-[6px] 2xl:mb-[10px]">
          Job Description
        </div>
        <div className={`${variant === "default" ? "line-clamp-2" : ""} text-sm1 text-[#4d4d4d]`}>
          {parse(truncateText(item.job_description), options) || "No job description provided."}
        </div>
      </div>
    </div>
  );
}
