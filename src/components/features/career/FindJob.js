"use client";

import Image from "next/image";
import Link from "next/link";
import FindJobForm from "./FindJobForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import JobResultBoxSlide from "./JobResultBoxSlide";
import { toSentenceCase } from "@/lib/utils/toSentenceCase";
import toast from "react-hot-toast";

function JobLocationBox({ item }) {
  const handleClick = (e) => {

    if (!item?.is_active) {
      // e.preventDefault();
      // You can add your toast message logic here
      toast.error(
        "Currently we are not operational. Please send your resume. Once we are operational we will contact you back.",
        {
          duration: 10000, // 10s (or Infinity)
          style: {
            fontSize: "12px", // smaller text
            padding: "6px 10px", // smaller padding
            minHeight: "unset", // avoid default height
          },
        }
      );
      return;
    }
  };

  return (
    <Link
      href={item?.is_active ? `/career-list?state_id=${item.id}` : "#makemove"}
      onClick={handleClick}
      className={`${item.is_active
        ? "group opacity-100 grayscale-0"
        : "opacity-80 grayscale-100"
        } w-full h-auto aspect-220/160 bg-white rounded-[7px] sm:rounded-[15px] cursor-pointer lg:rounded-[20px] 2xl:rounded-[24px] overflow-hidden block relative z-0`}
    >
      <Image
        src={
          item?.image
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.image}`
            : "/images/job-location-1.jpg"
        }
        alt={item.image_alt ? item.image_alt : "job-location"}
        fill
        sizes="20vw"
        className="group-hover:scale-105 transition-transform duration-300"
      />
      <div className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] leading-[1] whitespace-nowrap text-ellipsis overflow-hidden font-medium text-white bg-gradient-to-r to-white/0 from-[#17479e]/100 max-sm:bg-[linear-gradient(270deg,#17479E_0%,#F30000_100%)] absolute z-1 left-0 bottom-0 right-0 sm:mb-[5px] lg:mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[24px] p-[7px] lg:p-[4px_10px] xl:p-[6px_12px] 2xl:p-[8px_16px] 3xl:p-[8px_18px]">
        {item?.state_name ? toSentenceCase(item?.state_name) : "State"}
      </div>
    </Link>
  );
}
export default function FindJob({
  find_job_title,
  find_job_button_name,
  find_job_button_link,
  states,
  jobs,
}) {
  return (
    <section className="w-full block p-[30px_0_30px] sm:py-[40px_20px] lg:py-[60px_30px] 2xl:py-[80px_40px] 3xl:py-[100px_50px] relative z-0 after:content-[''] after:w-full after:h-[50%] after:absolute after:-z-1 after:bottom-0 after:left-0 after:right-0 after:block after:bg-gradient-to-r after:to-[#fde7e7] after:from-transparent after:max-sm:h-[100%] after:max-sm:bg-[linear-gradient(0deg,rgba(238,238,238,0.00)_0%,rgba(243,0,0,0.10)_0%,rgba(243,0,0,0.10)_100%)]">
      <div className="container">
        <div className="flex justify-between mb-[10px] lg:mb-[15px] 2xl:mb-[20px] max-sm:hidden">
          <div
            className="text-title1 text-[#5e5959bf] font-bold [&>span]:font-bold [&>span]:text-base2"
            dangerouslySetInnerHTML={{
              __html: find_job_title ? find_job_title : "",
            }}
          />
          <div className="max-sm:hidden block">


            <Link
              href={
                find_job_button_link ? find_job_button_link : "/career-list"
              }
              className="group btn btn-base1 relative z-0 flex items-center justify-between mt-[15px] lg:mt-[30px] w-full max-w-[200px] 2xl:max-w-[260px]
                 3xl:max-w-[270px] pr-3 pl-5 h-[45px] lg:h-[40px] 2xl:h-[50px] 3xl:h-[60px] rounded-full bg-base1 text-white font-bold transition-all duration-300 
                 overflow-hidden shadow-lg hover:bg-base2"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-[-15px] px-[5px] md:px-[10px] lg:px-[15px] 2xl:px-[20px]">
                {find_job_button_name ? find_job_button_name : "Apply Now"}
              </span>
              <div className="relative z-10 flex items-center justify-center w-[30px] h-[30px] lg:w-[30px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[48px] 
                3xl:h-[48px] bg-base2 rounded-full text-red-500 transition-all duration-300  group-hover:translate-x-2 group-hover:bg-base1  group-hover:text-white">
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
        <div className="max-sm:flex max-sm:flex-col-reverse">
          <div className="w-full h-auto block sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px]">
            <div className="max-sm:flex hidden max-sm:p-[0px_0_20px]">
              <div
                className="text-title1 text-[#5e5959bf] font-bold [&>span]:text-base2 [&>span]:font-bold"
                dangerouslySetInnerHTML={{
                  __html: find_job_title ? find_job_title : "",
                }}
              />
            </div>
            <FindJobForm
              button_text={
                find_job_button_name ? find_job_button_name : "Apply Now"
              }
              button_link={
                find_job_button_link ? find_job_button_link : "/career-list"
              }
            />
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-[calc(100%-368px)] xl:w-[calc(100%-468px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-700px)] mb-[15px] lg-mb-0">
              <ScrollArea className="w-full h-[265px] sm:h-[270px] lg:h-[276px] xl:h-[340px] 2xl:h-[430px] 3xl:h-[540px]">
                <div className="flex flex-wrap -mx-[2px] sm:-mx-[4px] lg:-mx-[8px] 2xl:-mx-[12px]">
                  {states?.map((item, index) => (
                    <div
                      key={index}
                      className="w-1/4 p-[2px] sm:p-[0_4px_8px] lg:p-[0_8px_16px] 2xl:p-[0_12px_24px]"
                    >
                      <JobLocationBox item={item} />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className="w-full lg:w-[368px] xl:w-[468px] 2xl:w-[576px] 3xl:w-[700px] lg:pl-[20px] 2xl:pl-[30px] max-sm:hidden block">
              <JobResultBoxSlide jobResults={jobs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
