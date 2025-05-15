"use client";
import Image from "next/image";
import Link from "next/link";
import LatestUpdatesSlide from "../../common/LatestUpdatesSlide";
import MobLatestUpdatesSlide from "@/components/features/blog/MobLatestUpdatesSlide";
import { motion } from "framer-motion";
import { format } from "date-fns";


export default function MobLatestUpdates({ sliderItems, sliderTitle, sliderButtonText, sliderButtonLink }) {

  return (
    <section className="w-full block">
      <div className="container">
        <div className="flex flex-wrap bg-[#cae5f4] rounded-[25px] 3xs:rounded-[36px] overflow-hidden ">
          <div className="w-full py-[20px] 3xs:py-[25px] px-[15px] 3xs:px-[22px]">
            <h3 className="text-[20px] text-black font-medium mb-[15px] 3xs:mb-[30px]">{sliderTitle}</h3>
            <div className="sm:hidden block">
              <MobLatestUpdatesSlide
                className={
                  "relative lg:before:[''] before:hidden lg:before:block before:absolute before:bottom-0 before:right-0 before:w-[170px] before:lg:w-[198px] before:xl:w-[241px] before:2xl:w-[337px] before:3xl:w-[423px] before:h-[1px] before:bg-[#a8a8a8]"
                }
                slides={sliderItems?.slice(0, 2)}
              />
            </div>
            <div className="sm:block hidden">
              <LatestUpdatesSlide
                className={
                  "relative lg:before:[''] before:hidden lg:before:block before:absolute before:bottom-0 before:right-0 before:w-[170px] before:lg:w-[198px] before:xl:w-[241px] before:2xl:w-[337px] before:3xl:w-[423px] before:h-[1px] before:bg-[#a8a8a8]"
                }
                slides={sliderItems?.slice(0, 2)}
              />
            </div>
          </div>
          <div className="w-full h-[260px]">
            {/* Show only the first object */}
            {sliderItems?.slice(0, 1).map((item, index) => (
              <div key={index} className="group w-full h-full overflow-hidden block relative">
                {console.log("item", `${process.env.NEXT_PUBLIC_BACKEND_URL}/${item?.image}`)}
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item?.image}`}
                  alt={item?.image_alt}
                  fill
                  sizes="520px"
                  className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
                />
                <div className="w-full h-full absolute inset-0 top-auto px-[25px] py-[30px] bg-gradient-to-b from-black/0 to-black flex flex-wrap items-end">
                  <div className="h-fit w-full">
                    <div className="text-[12px] text-white line-clamp-1 mb-2">{format(new Date(item?.createdAt), "d MMMM yyyy")}</div>
                    <div className="text-[16px] leading-[1.2] text-white font-medium line-clamp-2 mb-4">{item?.title}</div>
                    <Link
                      href={item?.href || "/"}
                      className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-bold text-white hover:text-base2 transition-color duration-300 uppercase flex items-center"
                    >
                      Read More
                      <Image
                        src="/images/icon-news1.svg"
                        width={20}
                        height={20}
                        alt="news1"
                        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
