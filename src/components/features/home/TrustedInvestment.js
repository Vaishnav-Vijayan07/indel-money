"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrustedInvestment({ pageContent }) {
  return (
    <section className="w-full pt-[20px] pb-[20px] md:pt-[70px] md:pb-[70px] sm:pt-[30px] sm:pb-[30px]">
      <div className="container">
        <div className="flex flex-wrap flex-col-reverse md:flex-row md:-mx-[15px] lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[30px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[45%] 2xl:w-[40%] mt-[15px] md:mt-0 md:px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]"
          >
            <div className="group w-full h-full 2xl:rounded-[36px] xl:rounded-[30px] md:rounded-[30px] rounded-[18px] overflow-hidden">
              <Image
                // src={"/images/trust01.jpg"}
                src={
                  pageContent?.investment_image_url
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${pageContent?.investment_image_url}`
                    : "/images/trust01.jpg"
                }
                alt="lifeintelImg"
                width={650}
                height={480}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[55%] 2xl:w-[60%] md:px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]"
          >
            <h2 className="text-title1 mb-[15px] 2xl:mb-[20px]">
              {/* Your Trusted <br></br> Investment Opportunity */}
              {pageContent?.investment_title}
            </h2>
            <div className="text-sm1 mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. */}
              {pageContent?.investment_description}
            </div>
            <ul>
              <li className="2xl:text-[20px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px] mb-[3px]">
                Listed in NSE/BSE
              </li>
              <li className="2xl:text-[20px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px] mb-[3px]">
                Listed in stock market
              </li>
              <li className="2xl:text-[20px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base2 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px] ">
                Company total revenue: 500cr +
              </li>
            </ul>
            <div className="flex flex-wrap gap-[10px] lg:gap-[15px] 2xl:gap-[20px] mt-[15px] xl:mt-[20px] 2xl:mt-[40px]">
              <div>
                <Link
                  href={pageContent?.investment_button_link || "#"}
                  className="btn btn-base2 min-w-[140px] lg:min-w-[140px] xl:min-w-[150px] 2xl:min-w-[227px]"
                >
                  {/* INVESTORS REPORT */}
                  {pageContent?.investment_button_name}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
