"use client";
import Image from "next/image";
import Link from "next/link";
import LatestUpdatesSlide from "../../common/LatestUpdatesSlide";
import MobLatestUpdatesSlide from "@/components/features/blog/MobLatestUpdatesSlide";
import { motion } from "framer-motion";

const slides = [
  {
    href: "/",
    image: "/images/news-1.jpg",
    alt: "news-1",
    date: "24 SEPTEMBER 2024:",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
    description:
      "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
  },
  {
    href: "/",
    image: "/images/news-2.jpg",
    alt: "news-1",
    date: "24 SEPTEMBER 2024:",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
    description:
      "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
  },
  {
    href: "/",
    image: "/images/news-3.jpg",
    alt: "news-1",
    date: "24 SEPTEMBER 2024:",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
    description:
      "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
  },
];

export default function MobLatestUpdates() {
  return (
    <section className="w-full block">
      <div className="container">
        <div className="flex flex-wrap bg-[#cae5f4] rounded-[25px] 3xs:rounded-[36px] overflow-hidden ">
          <div className="w-full py-[20px] 3xs:py-[25px] px-[15px] 3xs:px-[22px]">
            <h3 className="text-[20px] text-black font-medium mb-[15px] 3xs:mb-[30px]">
              Latest Updates
            </h3>
            <div className="sm:hidden block">
              <MobLatestUpdatesSlide
                className={
                  "relative lg:before:[''] before:hidden lg:before:block before:absolute before:bottom-0 before:right-0 before:w-[170px] before:lg:w-[198px] before:xl:w-[241px] before:2xl:w-[337px] before:3xl:w-[423px] before:h-[1px] before:bg-[#a8a8a8]"
                }
                slides={slides.slice(1)}
              />

            </div>
            <div className="sm:block hidden">
              <LatestUpdatesSlide
                className={
                  "relative lg:before:[''] before:hidden lg:before:block before:absolute before:bottom-0 before:right-0 before:w-[170px] before:lg:w-[198px] before:xl:w-[241px] before:2xl:w-[337px] before:3xl:w-[423px] before:h-[1px] before:bg-[#a8a8a8]"
                }
                slides={slides.slice(1)}
              />
            </div>

          </div>
          <div className="w-full h-[260px]">
            {/* Show only the first object */}
            {slides.slice(0, 1).map((item, index) => (
              <div
                key={index}
                className="group w-full h-full overflow-hidden block relative"
              >
                <Image
                  src={item?.image}
                  alt={item?.alt}
                  fill
                  sizes="520px"
                  className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
                />
                <div className="w-full h-full absolute inset-0 top-auto px-[25px] py-[30px] bg-gradient-to-b from-black/0 to-black flex flex-wrap items-end">
                  <div className="h-fit w-full">
                    <div className="text-[12px] text-white line-clamp-1 mb-2">
                      {item?.date}
                    </div>
                    <div className="text-[16px] leading-[1.2] text-white font-medium line-clamp-2 mb-4">
                      {item?.title}
                    </div>
                    <Link
                      href={item?.href}
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
