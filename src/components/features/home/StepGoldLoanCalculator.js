"use client";

import { motion } from "framer-motion";
import GoldLoanForm from "../../common/GoldLoanForm";
import EmiForm from "../../common/EmiForm";
import { useEffect, useMemo, useState } from "react";
import api from "@/lib/api/axios";
import toast from "react-hot-toast";

export default function StepGoldLoanCalculator({ className, goldRate }) {
  const [goldCaratTypes, setGoldCaratTypes] = useState(null);
  const [goldTypes, setGoldTypes] = useState(null);

  const fetchGoldTypes = async () => {
    try {
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/gold-types`);
      if (data.success) {
        setGoldTypes(data.data);
      } else {
        toast.error("Failed to fetch gold types!");
        return [];
      }
    } catch (error) {
      toast.error("gold types fetching failed!");
    }
  };

  const fetchGoldCaratTypes = async () => {
    try {
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/gold-carat-types`);
      if (data.success) {
        setGoldCaratTypes(data.data);
      } else {
        toast.error("Failed to fetch gold carat types!");
        return [];
      }
    } catch (error) {
      toast.error("gold carat fetching failed!");
    }
  };

  useEffect(() => {
    fetchGoldTypes();
    fetchGoldCaratTypes();
  }, []);

  const formattedGoldTypes = useMemo(() => {
    if (goldTypes?.length > 0) {
      return goldTypes?.map((type) => ({
        label: type.gold_type_name,
        value: type.id,
      }));
    }
    return [];
  }, [goldTypes]);

  const formattedGoldCaratTypes = useMemo(() => {
    if (goldCaratTypes?.length > 0) {
      return goldCaratTypes?.map((type) => ({
        label: type.name,
        value: type.id,
      }));
    }
    return [];
  }, [goldCaratTypes]);

  return (
    <section id="gold-loan-section" className={`${className} w-full py-[20px] md:py-[30px] 2xl:py-[100px]`}>
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
              <GoldLoanForm goldCaratTypes={formattedGoldCaratTypes} goldTypes={formattedGoldTypes} goldRate={goldRate} />
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
              <EmiForm goldRate={goldRate} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
