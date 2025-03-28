"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Step 1",
    text: "Walk in any of our branches with your gold",
    img: "/images/step1.webp",
  },
  {
    title: "Step 2",
    text: "Fill in and submit the required documents",
    img: "/images/step2.webp",
  },
  {
    title: "Step 3",
    text: "After evaluation, our officer will sanction the loan",
    img: "/images/step3.webp",
  },
];

export default function GoldLoanCalculator({ hideTitle = false }) {
  return (
    <section className="w-full pt-[20px] md:pt-[30px] 2xl:pt-[60px] pb-[20px] md:pb-[30px] 2xl:pb-[100px]">
      <div className="container">
        {!hideTitle && (
          <div className="text-title1 font-normal">
            Our Easy Step{" "}
            <span className="font-bold text-base2">Gold Loan</span>{" "}
          </div>
        )}
        <div className="flex justify-between mt-[2.5rem]">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div>
                {/* Arrow - Animated & Hides for last step */}
                {index !== steps.length - 1 && (
                  <div
                    className={`absolute left-[110px] md:left-[130px] lg:left-[145px] xl:left-[180px] 2xl:left-[260px] 3xl:left-[265px] max-w-[110px] w-full md:max-w-[140px] lg:max-w-[160px] xl:max-w-[220px]  2xl:max-w-[260px] 3xl:max-w-[380px]   ${
                      index % 2 === 1
                        ? "rotate-x-[-180deg]  top-1/4"
                        : "top-[30px]"
                    }`}
                  >
                    <Image
                      src="/images/ArrowGold.webp"
                      alt="arrow"
                      width={350}
                      height={75}
                      className="w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}

                {/* Step Circle - Animated */}
                <motion.div
                  className="2xl:w-[240px] 2xl:h-[240px] xl:w-[160px] xl:h-[160px] lg:w-[130px] lg:h-[130px] w-[100px] h-[100px] 
                    lg:p-[35px] p-[15px] rounded-full flex items-center justify-center overflow-hidden group 
                     bg-gradient-to-b from-transparent to-[#C0DBFF]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={190}
                    height={190}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>

                {/* Step Info */}
                <motion.div
                  className="info mt-[1.9rem] 3xl:max-w-[350px] xl:max-w-[245px] lg:max-w-[220px] max-w-[140px]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="relative flex justify-between w-full">
                    <motion.div
                      className="bg-base2 text-white px-4 py-2 rounded-lg 
                      3xl:text-[1.8rem] xl:text-[1.2rem] lg:text-[1rem] text-[0.8rem] font-bold"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                      {step.title}
                    </motion.div>

                    {/* Dashed Line Animation (Only if not last step) */}
                    {index !== steps.length - 1 && (
                      <motion.div
                        className="border border-black border-dashed top-[18px] 3xl:top-[30px] h-[1px] w-full absolute left-[calc((100%-55px))] md:left-[calc((100%-30px))] lg:left-[calc((100%-125px))] xl:left-[calc((100%-120px))] 2xl:left-[calc((100%-50px))] 3xl:left-[calc((100%-130px))] before:content'' before:absolute before:top-0 before:bottom-0 before:m-auto before:left-[-1px] before:w-[10px] before:h-[10px] before:bg-base1 before:rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                      >
                        <span className="w-[20px] h-[20px] rounded-full bg-base1 absolute top-0 right-[-2px] bottom-0 m-auto before:content'' before:absolute before:top-0 before:bottom-0 before:m-auto before:left-0 before:right-0 before:w-[10px] before:h-[10px] before:bg-base2 before:rounded-full"></span>
                      </motion.div>
                    )}
                  </div>

                  <motion.p
                    className="text-[#002362] 3xl:text-[1.5rem] xl:text-[1rem] text-[0.8rem] font-medium mt-[1rem]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    {step.text}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="flex flex-wrap -mx-[10px] lg:-mx-[15px] 2xl:-mx-[20px]">
          <div className="w-1/2 p-[10px] lg:p-[15px] 2xl:p-[20px]">
            <div className="w-full h-full bg-[#c0dbff] rounded-[15px] lg:rounded-[30px] 2xl:rounded-[36px] p-[15px_20px] lg:p-[20px_40px] 2xl:p-[40px_60px] 3xl:p-[50px_65px]">
              <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[34px] leading-[1] font-medium">Gold Loan Calculator</div>
            </div>
          </div>
          <div className="w-1/2 p-[10px] lg:p-[15px] 2xl:p-[20px]">xvcdv</div>
        </div> */}

      </div>
    </section>
  );
}
