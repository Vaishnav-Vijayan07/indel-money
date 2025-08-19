"use client";
import Image from "next/image";
import Link from "next/link";
import CounterBox from "./CounterBox";
// import { motion } from "framer-motion";
import * as motion from "motion/react-client";

export default function DreamsToReality({ initialData, statsData }) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full pt-[40px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[120px] 3xl:pt-[160px] pb-[20px] md:pb-[30px] lg:pb-[40px] 3xl:pb-[60px] overflow-hidden relative"
    >
      <div className="top-[45%] absolute -right-[6%] m-auto h-auto w-[20%] z-[4]">
        <Image
          src={"/images/outline.png"}
          alt="404-image"
          width={165}
          height={65}
          className="w-full h-full object-contain transition-transform duration-600"
        />
      </div>
      <div className="container">
        <div className="flex w-full flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Starting state: hidden and shifted down
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible when in view
            viewport={{ once: true }} // Only animate once when it enters the viewport
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[calc(100%-320px)] xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-540px)] 3xl:w-[calc(100%-610px)] lg:pr-[40px] xl:pr-[70px] 2xl:pr-[120px] mb-4"
          >
            <h1
              className="text-[12px] text-[#666262bf] lg:text-[12px] xl:text-[14px] 3xl:text-[18px] font-medium [&>span]:text-base4"
              dangerouslySetInnerHTML={{ __html: initialData?.about_super_title ? initialData?.about_super_title : "" }}
            />
            {/* Welcome to <span className="text-base4 ">INDEL MONEY</span> */}
            <h2
              className="text-title1 text-base5 font-medium mb-[10px] xl:mb-[15px] 2xl:mb-[20px] [&>span]:text-base2 [&>span]:font-bold"
              dangerouslySetInnerHTML={{ __html: initialData?.about_title }}
            />
            {/* From{" "}
              <span className="text-base2 font-bold">Dreams To Reality</span>,
              We&apos;re With You Every Step Of The Way. */}
            {/* {initialData?.about_title}
            </div> */}
            <h3
              className="text-[14px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[24px] leading-none font-bold mb-[10px] xl:mb-[15px] 2xl:mb-[20px] text-base1 [&>span]:font-normal [&>span]:text-[#343434]"
              dangerouslySetInnerHTML={{ __html: initialData?.about_sub_title ? initialData?.about_sub_title : "" }}
            />
            {/* Indel Money :{" "}
              <span className="font-normal text-[#343434]">Overview</span> */}

            {/* <p className="mb-[15px] lg:mb-[20px] 2xl:mb-[30px]">
              Indel Money is a comprehensive financial services provider dedicated to offering a diverse array of solutions to
              meet the unique needs of every individual and organization. Our wide range of services is designed to cater to
              high-net-worth individuals, business institutions, retail investors, and the general public alike, ensuring that
              everyone, regardless of their financial standing, has access to expert financial guidance and solutions.
            </p>
            <p>
              We understand that life is filled with various financial requirements, both expected and unforeseen, and that each
              person&apos;s needs are different. That’s why at Indel Money, we provide personalized, value-added services that are
              tailored to meet the specific goals and dreams of our clients.
            </p> */}

            <p className="mb-[15px] lg:mb-[20px] 2xl:mb-[30px]">{initialData?.about_description}</p>
            <Link
              href={initialData?.about_button_url || "#"}
              className="group btn btn-base1 relative z-0 flex items-center mt-[15px] lg:mt-[20px] 2xl:mt-[30px] w-full max-w-[140px] xl:max-w-[160px] 2xl:max-w-[200px] 3xl:max-w-[220px] pr-3 pl-5 h-[45px] lg:h-[40px] 2xl:h-[50px] 3xl:h-[65px] rounded-full bg-base1 text-white font-medium transition-all duration-300 overflow-hidden shadow-lg"
            >
              <span className="text-center relative z-10 w-[calc(100%-30px)] lg:w-[calc(100%-30px)] 2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-48px)] transition-transform duration-300 group-hover:-translate-x-[-15px]">
                {/* Our Story */}
                {initialData?.about_button_name}
              </span>
              <div className="relative z-10 flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white text-red-500 transition-all duration-300  group-hover:translate-x-2 group-hover:text-white">
                <Image src="/images/icon-right.svg" width={10} height={10} alt="about btn" className="w-[10px] h-[10px] m-auto" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Starting state: hidden and shifted down
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible when in view
            viewport={{ once: true }} // Only animate once when it enters the viewport
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[320px] xl:w-[400px] 2xl:w-[540px] 3xl:w-[610px] lg:m-0 m-auto relative z-0"
          >
            <div className="group w-full h-auto rounded-[20px] overflow-hidden">
              {/* <Image
                src={"/images/aboutImg.webp"}
                alt="aboutImg"
                width={610}
                height={535}
                className="w-full h-full object-cover duration-300 transition-transform group-hover:scale-110"
              /> */}

              {initialData?.about_image_url && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${initialData?.about_image_url}`}
                  alt="aboutImg"
                  width={610}
                  height={535}
                  className="w-full h-full object-cover duration-300 transition-transform group-hover:scale-110"
                />
              )}
            </div>
            <div className="w-full h-full max-w-[860px] pointer-events-none absolute -z-1 top-2.5 left-0 rounded-[30%] blur-3xl bg-[linear-gradient(90deg,rgba(1,91,255,0.2)_0%,rgba(255,25,0,0.2)_100%)]"></div>
          </motion.div>
        </div>
        {/* counter section */}
        <div
          className="w-full h-full mt-[45px] p-[25px] xl:p-[30px] 2xl:px-[75px] px-[30px] xl:px-[35px] overflow-hidden rounded-[28px] 
          bg-[linear-gradient(156deg,rgba(23,71,158,0.15)_6%,rgba(198,59,59,0.15)_91%)]"
        >
          <div className="flex flex-wrap w-full justify-center lg:text-left text-center">
            {statsData?.map((item, index) => (
              <CounterBox key={index} {...item} showDivider={index < 3} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
