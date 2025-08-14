"use client";
import Image from "next/image";
import CareerForm from "@/components/common/CareerForm";
import "./Career.css";
import parse from "html-react-parser";
import { toSentenceCase } from "@/lib/utils/toSentenceCase";

function CareerDetailInfoBox({ children }) {
  return (
    <div className="text-[13px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] leading-none font-normal text-[#484877] w-full h-[35px] lg:h-[50px] border-[1px] border-dashed border-[linear-gradient(to right, #ff0, #f00) 1] rounded-[10px] flex items-center p-[8px_10px] lg:p-[10px_20px]">
      {children}
    </div>
  );
}

export default function CareerDetailInfo({ job }) {
  const jobUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || ""
  }/career-list/job-details/${encodeId(job?.id)}`;
  const jobTitle = job?.job_title || "Job Opportunity";
  const shareText = encodeURIComponent(
    `Check out this job opening: ${jobTitle}\n\n${jobUrl}`
  );
  const whatsappUrl = `https://wa.me/?text=${shareText}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent(
    "Job Opportunity: " + jobTitle
  )}&body=${shareText}`;

  return (
    <section className="w-full h-auto py-[30px] lg:py-[50px_80px]">
      <div className="container">
        <div className="w-full h-auto p-[10px] sm:p-[30px] lg:p-[50px] rounded-[30px] bg-linear-to-r from-base1/10 to-base2/10">
          <div className="w-full h-auto bg-white rounded-[20px] overflow-hidden">
            <div className="flex justify-between items-center w-full">
              <div className="text-[16px] sm:text-[20px] lg:text-[24px] 2xl:text-[28px] leading-none font-bold text-black w-full sm:max-w-[260px] lg:max-w-[320px] 2xl:max-w-[380px] p-[20px_20px] sm:p-[25px_40px] lg:p-[35px_50px] bg-linear-to-r from-base1/50 via-base2/50 to-transparent mt-[15px] lg:mt-[30px]">
                APPLY FOR
              </div>
              <div className="w-1/2 flex justify-end items-center gap-[5px] lg:gap-[10px] 2xl:gap-[20px] mx-8">
                {/* Share Dropdown using Radix UI */}
                <div className="relative">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      {/* Your original Share button styles */}
                      <button
                        className="text-[12px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[26px] font-normal leading-none text-[#484877] w-full h-auto flex items-center gap-[2px] lg:gap-[4px] 2xl:gap-[6px] hover:text-base1 bg-transparent border-none outline-none"
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
                            <Image
                              src="/images/floating-mail.svg"
                              alt="Email"
                              width={18}
                              height={18}
                              className="w-[18px] h-[18px]"
                            />
                            Share via Email
                          </a>
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </div>
              </div>
            </div>
            <div className="w-full h-auto p-[10px_20px_0] sm:p-[30px_30px_0] lg:p-[50px_50px_0]">
              <div className="w-full h-auto mb-[30px] lg:mb-[40px] 2xl:mb-[60px]">
                <div className="text-[14px] sm:text-[16px] lg:text-[20px] 2xl:text-[24px] leading-none font-medium capitalize text-black mb-[15px]">
                  {job?.job_title}
                </div>
                <div className="flex flex-wrap gap-[5px] sm:gap-[10px] lg:gap-[15px] 2xl:gap-[20px]">
                  <div>
                    <CareerDetailInfoBox>
                      Experience: {job?.experience || "Not specified"}
                    </CareerDetailInfoBox>
                  </div>
                  <div>
                    <CareerDetailInfoBox>
                      <svg
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[10px] lg:w-[14px] mr-[6px]"
                      >
                        <path
                          d="M7 0C3.14067 0 0 3.0495 0 6.79875C0 12.126 6.342 17.6265 6.61189 17.8575C6.72311 17.9527 6.86156 18 7 18C7.13844 18 7.27689 17.9528 7.38811 17.8582C7.658 17.6265 14 12.126 14 6.79875C14 3.0495 10.8593 0 7 0ZM7 10.5C4.85567 10.5 3.11111 8.81775 3.11111 6.75C3.11111 4.68225 4.85567 3 7 3C9.14433 3 10.8889 4.68225 10.8889 6.75C10.8889 8.81775 9.14433 10.5 7 10.5Z"
                          fill="#17479E"
                        />
                      </svg>
                      {job?.locationDisplay || "Location not specified"}
                    </CareerDetailInfoBox>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto mb-[30px] lg:mb-[40px] 2xl:mb-[60px]">
                <div className="text-[16px] sm:text-[20px] lg:text-[24px] 2xl:text-[28px] leading-none font-bold text-black mb-[15px] lg:mb-[30px]">
                  JOB RESPONSIBILITIES
                </div>
                <div className="text-editor">
                  {parse(job?.job_description) ||
                    "No job description provided."}
                  {/* <h4>key Responsibilities and Accountabilities</h4> */}
                </div>
              </div>
            </div>
            <div className="w-full h-auto p-0 sm:p-[0_30px_30px] lg:p-[0_50px_50px]">
              <div className="w-full h-auto block bg-[#dce9fa] rounded-[20px] sm:rounded-[36px] p-[20px] sm:p-[30px] lg:p-[50px]">
                <div className="text-[13px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] leading-none font-normal text-black mb-[15px] lg:mb-[20px]">
                  Fill the fields below to apply for this post
                </div>
                <CareerForm jobId={job?.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
