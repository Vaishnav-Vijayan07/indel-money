"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function GoldLoanCalculator() {
  const steps = [
    { title: "Step 1", text: "Walk in any of our branches with your gold", img: "/images/step1.webp" },
    { title: "Step 2", text: "Fill in and submit the required documents", img: "/images/step2.webp" },
    { title: "Step 3", text: "After evaluation, our officer will sanction the loan", img: "/images/step3.webp" },
  ];
  return (
    <section className="w-full 2xl:pt-[50px] 2xl:pb-50px] md:pt-[30px] md:pb-[30px] pt-[20px] pb-[20px]">
      <div className="container">
        <div className="text-title1 font-normal">Our Easy Step <span className="font-bold text-base2" >Gold Loan</span> </div>

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
                    className={`absolute 2xl:left-[255px] xl:left-[195px]  lg:left-[155px] md:left-[130px] left-[110px]
                  
                  2xl:max-w-[250px] xl:max-w-[180px]   md:max-w-[140px] max-w-[110px] 
                  w-full 
                  ${index % 2 === 1 ? "rotate-x-[-180deg]  top-1/4" : "top-[30px]"}`}

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
                  className="2xl:w-[240px] 2xl:h-[240px] xl:w-[180px] xl:h-[180px] lg:w-[130px] lg:h-[130px] w-[100px] h-[100px] 
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
                        className="border-dashed 3xl:top-[30px] top-[18px] border border-black ml-[40px] h-[1px] w-full absolute 
                        2xl:left-[calc((100%-150px))] xl:left-[calc((100%-170px))] lg:left-[calc((100%-170px))] 
                        md:left-[calc((100%-65px))] left-[calc((100%-100px))] before:content'' before:absolute before:top-0 before:bottom-0 before:m-auto before:left-[-1px] before:w-[10px] before:h-[10px] before:bg-base1 before:rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                      >
                        <span className="w-[20px] h-[20px] rounded-full bg-base1 absolute top-0 right-[-2px] bottom-0 m-auto 
                            before:content'' before:absolute before:top-0 before:bottom-0 before:m-auto before:left-0 before:right-0 before:w-[10px] before:h-[10px] before:bg-base2 before:rounded-full">
                        </span>
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

      </div >
    </section >
  );
}
