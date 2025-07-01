import { formatPostDate } from "@/lib/utils";
import Image from "next/image";
import React, { memo } from "react";

function BlogCard({ item, className, index, type = "blog" }) {
  return (
    <div
      className={`${
        className ? className : ""
      } group w-full h-full flex py-[5px] xl:py-[10px] 3xl:py-[15px] gap-[10px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px]`}
    >
      <div className="group w-[127px] sm:w-[160px] lg:w-[180px] xl:w-[220px] 2xl:w-[240px] 3xl:w-[320px] aspect-[4/3] overflow-hidden rounded-[20px] relative z-0">
        <Image
          src={item?.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.image}` : "/images/blog/1.jpg"}
          alt={item?.image_alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
          quality={25}
          placeholder="blur" // Optional: Add a blur placeholder
          blurDataURL="/placeholder.jpg" // Optional: Low-res placeholder
          priority={index === 0} // Prioritize first blog card image
          className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
        />
      </div>
      <div className="w-[calc(100%-127px)] sm:w-[calc(100%-160px)] lg:w-[calc(100%-180px)] xl:w-[calc(100%-220px)] 2xl:w-[calc(100%-240px)] 3xl:w-[calc(100%-320px)] py-1 3xl:py-2">
        {((type === "blog" || type == "vertical") && item?.createdAt) || item?.posted_on ? (
          <div className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#505050] line-clamp-1 mb-0.5 3xl:mb-1 transition-transform duration-300 group-hover:text-base2">
            {formatPostDate(type === "blog" || type == "vertical" ? item?.posted_on : item?.createdAt)}
          </div>
        ) : null}

        {type == "indel-money-cares" && (
          <div className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#505050] line-clamp-1 mb-0.5 3xl:mb-1 transition-transform duration-300 group-hover:text-base2">
            {item?.event_date ? formatPostDate(item?.event_date) : ""}
          </div>
        )}

        <div
          className="text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-[1.3] text-black font-bold line-clamp-2 mb-1 3xl:mb-3"
          dangerouslySetInnerHTML={{ __html: item?.title ? item?.title : "" }}
        />
        {type == "blog" ? (
          <div
            className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.3] text-[#2d2d2d] font-normal line-clamp-2 sm:line-clamp-4"
            dangerouslySetInnerHTML={{ __html: item?.image_description ? item?.image_description : "" }}
          />
        ) : (
          <div
            className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.3] text-[#2d2d2d] font-normal line-clamp-2 sm:line-clamp-4"
            dangerouslySetInnerHTML={{ __html: item?.description ? item?.description : item?.image_description }}
          />
        )}

        {item?.year && (
          <div className="text-[12px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-medium text-[#2d2d2d] line-clamp-1 mt-[10px] lg:mt-[10px] 2xl:mt-[20px]">
            Award Year:
            <span className="text-[#eb0208] font-bold"> {item?.year}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(BlogCard);
