"use client";

import { motion } from "framer-motion";
import GoldLoanForm from "../../common/GoldLoanForm";
import EmiForm from "../../common/EmiForm";

export default function StepGoldLoanCalculator({className}) {
  return (
    <section className={`${className} w-full py-[20px] md:py-[30px] 2xl:py-[100px]`}>
      <div className="container">
        <div className="flex flex-wrap -mx-[10px] lg:-mx-[15px] 2xl:-mx-[20px]">
          <div className="w-full sm:w-1/2 p-[10px] lg:p-[15px] 2xl:p-[20px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-full bg-[#c0dbff] rounded-[15px] lg:rounded-[30px] 2xl:rounded-[36px] p-[20px_20px] sm:p-[25px_30px] xl:p-[40px_45px] 2xl:p-[45px_55px] 3xl:p-[50px_65px]"
            >
              <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[34px] leading-none font-medium mb-[15px] lg:mb-[20px] 2xl:mb-[30px]">
                Gold Loan Calculator
              </div>
              <GoldLoanForm />
            </motion.div>
          </div>
          <div className="w-full sm:w-1/2 p-[10px] lg:p-[15px] 2xl:p-[20px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full h-full bg-[#fcdcdc] rounded-[15px] lg:rounded-[30px] 2xl:rounded-[36px] p-[20px_20px] sm:p-[25px_30px] xl:p-[40px_45px] 2xl:p-[45px_55px] 3xl:p-[50px_65px]"
            >
              <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[34px] leading-none font-medium mb-[15px] lg:mb-[20px] 2xl:mb-[30px]">
                EMI Calculator
              </div>
              <EmiForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
