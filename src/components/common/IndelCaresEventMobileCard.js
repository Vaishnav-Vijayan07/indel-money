import { formatPostDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { renderHtml } from "@/lib/utils/htmlParser"; // Assuming you have a utility for HTML parsing

export default function IndelCaresEventMobileCard({ item, className }) {
  return (
    <Link
      href={item?.href || "/"}
      className={`${
        className ? className : ""
      } group w-full h-full flex flex-wrap py-[5px] xl:py-[10px] 3xl:py-[15px] gap-[10px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px]`}
    >
      <div className="group w-[100%] h-[210px] sm:h-auto sm:w-[160px] lg:w-[180px] xl:w-[220px] 2xl:w-[240px] 3xl:w-[320px] overflow-hidden rounded-[20px] relative z-0">
        <Image
          src={item?.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.image}` : "/images/blog/1.jpg"}
          alt={item?.image_alt}
          fill
          sizes="320px"
          className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
        />
      </div>
      <div className="w-[100%] sm:w-[calc(100%-160px)] lg:w-[calc(100%-180px)] xl:w-[calc(100%-220px)] 2xl:w-[calc(100%-240px)] 3xl:w-[calc(100%-320px)] py-1 3xl:py-2">
        <div className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#505050] line-clamp-1 mb-0.5 3xl:mb-1 transition-transform duration-300 group-hover:text-base2">
          {formatPostDate(item?.event_date)}
        </div>
        <div className="text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-[1.3] text-black font-bold line-clamp-2 mb-1 3xl:mb-3">
          {item?.title}
        </div>
        <div className="text-[13px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.3] text-[#2d2d2d] font-normal line-clamp-3 sm:line-clamp-4">
          {item?.description ? renderHtml(item?.description) : ""}
        </div>
      </div>
    </Link>
  );
}
