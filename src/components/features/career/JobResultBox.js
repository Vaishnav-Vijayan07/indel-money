import Image from "next/image";
import Link from "next/link";
import JobResultAlert from "./JobResultAlert";

export default function JobResultBox({ item, variant = "default" }) {
  return (
    <div
      className={`${
        variant === "activeJobs"
          ? "hover:shadow-[0_15px_30px_rgba(23,71,158,0.10)]"
          : ""
      } group w-full h-auto bg-[#dceafb] border-1 border-[#dceafb] rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] 2xl:rounded-[30px] 3xl:rounded-[36px] p-[10px_20px] lg:p-[10px_15px] xl:p-[18px_25px] 2xl:p-[20px_30px] 3xl:p-[25px_30px] hover:bg-[#c7e0ff] hover:border-base1/05 transition-all duration-300`}
    >
      <div className="w-full h-auto block border-b-[1px] border-dashed border-[#7670b3] mb-[8px] xl:mb-[10px] 2xl:mb-[20px]">
        <div className="flex flex-wrap items-center mb-[4px] xl:mb-[6px] 2xl:mb-[8px]">
          <div className="w-1/2">
            <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] font-bold leading-none text-black">
              {item.job_title}
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center gap-[5px] lg:gap-[10px] 2xl:gap-[20px]">
            <div>
              <Link
                href="/"
                className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-normal leading-none text-[#484877] w-full h-auto flex items-center gap-[2px] lg:gap-[4px] 2xl:gap-[6px] hover:text-base1"
              >
                <Image
                  src="/images/icon-share.svg"
                  alt="share"
                  width={20}
                  height={20}
                  className="w-[10px] lg:w-[15px] 2xl:w-[20px] h-auto aspect-4/4 block"
                />
                Share
              </Link>
            </div>
            <div>
              <JobResultAlert />
            </div>
          </div>
        </div>
        <div className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-medium text-[#484877] mb-[5px] lg:mb-[10px] 2xl:mb-[20px]">
          {variant === "default" && `Location: ${item.location}`}
          {variant === "activeJobs" && `Experience: ${item.experience}`}
        </div>
      </div>
      <div className="w-full h-auto block">
        <div className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-bold text-[#4b4b4b] mb-[4px] lg:mb-[6px] 2xl:mb-[10px]">
          Job Description
        </div>
        <div
          className={`${
            variant === "default" ? "line-clamp-2" : ""
          } text-sm1 text-[#4d4d4d]`}
        >
          {item.job_description}
        </div>
      </div>
    </div>
  );
}
