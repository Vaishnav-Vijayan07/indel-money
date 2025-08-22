"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoldLoanForm from "../../common/GoldLoanForm";
import EmiForm from "../../common/EmiForm";
import { useEffect, useMemo, useState } from "react";
import api from "../../../lib/api/axios";

const TabsTriggerStyle =
  "text-[12px] 4xs:text-[14px] font-medium leading-none text-center w-1/2 bg-white rounded-[20px_20px_0_0] shadow-none p-[20px_25px_10px_25px] border-0 data-[state=active]:font-bold data-[state=active]:bg-[#c0dbff] data-[state=active]:shadow-none data-[state=active]:z-1 data-[state=active]:before:block relative z-0 before:absolute before:bottom-0 before:z-2 before:hidden before:w-[20px] before:h-[20px] before:bg-white before:rounded-[0_0_0_20px] before:shadow-[-5px_5px_0_0_rgba(128,128,128,1)]";

export default function MobStepGoldLoan({ goldRate }) {
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
    <section className="w-full py-[0_20px]">
      <div className="container">
        <Tabs defaultValue="goldloan" className="w-full gap-0 my-[20px]">
          <TabsList className="w-full p-0">
            <TabsTrigger value="goldloan" className={`${TabsTriggerStyle} before:left-full
             data-[state=active]:bg-[#80808033]`}>
              Gold Loan Calculator
            </TabsTrigger>
            <TabsTrigger
              value="emicalculator"
              className={`${TabsTriggerStyle} before:right-full before:scale-x-[-1] 
              data-[state=active]:bg-[#80808033] before:shadow-[-5px_5px_0_0_#80808033]`}
            >
              EMI Calculator
            </TabsTrigger>
          </TabsList>
          <TabsContent value="goldloan">
            <div className="w-full h-auto p-[30px_25px] bg-[#80808033] rounded-[0_20px_20px_20px]">
              <GoldLoanForm goldCaratTypes={formattedGoldCaratTypes} goldTypes={formattedGoldTypes} goldRate={goldRate} />
            </div>
          </TabsContent>
          <TabsContent value="emicalculator">
            <div className="w-full h-auto p-[30px_25px] bg-[#80808033] rounded-[20px_0_20px_20px]">
              <EmiForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
