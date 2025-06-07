"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { optional, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import EnquiryModal from "./EnquiryModal";
import api from "@/lib/api/axios";
import toast from 'react-hot-toast';

// Schema Validation
const formSchema = z.object({
  carat: z.string().nonempty({
    message: "carat is required",
  }),
  goldType: z.string().nonempty({
    message: "Gold type is required",
  }),
  // goldAmount: z.string().min(2, {
  //   message: "must be at least 2 characters.",
  // }),
});

const labelStyle =
  "text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-none font-normal text-black";
const toggleBtnStyle =
  "text-[10px] lg:text-[12px] 2xl:text-[14px] text-center leading-[1.2] font-normal text-white w-[40px] lg:w-[45px] 2xl:w-[54px] h-[20px] lg:h-[20px] 2xl:h-[26px] rounded-[4px] lg:rounded-[6px] flex items-center justify-center cursor-pointer transition-colors duration-300";

export default function GoldLoanForm({ goldCaratTypes, goldTypes }) {
  const API_KEY_GOLD_RATE = "ed8d7baf6b5bc3be44ea3fcd65482541a6770d8d";
  const [submittedData, setSubmittedData] = useState({});
  const [goldRate, setGoldRate] = useState(Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000);
  const [reductionPercent, setReductionPercent] = useState(7);

  // Define form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      carat: "",
      goldType: "",
      goldAmount: "",
      loanAmount: "₹ 59,080",
    },
  });

  const [unit, setUnit] = useState("gm");

  const handleToggle = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle form submission
  function onSubmit() {
    setSubmittedData({
      ...form.getValues(),
      loanAmount: unit == "gm" ? finalRate.toFixed(2) : (finalRate * 1000).toFixed(2),
    });

    setIsDialogOpen(true);
  }

  // Handle dialog cancel
  function handleCancel() {
    setIsDialogOpen(false);
  }

  const finalRate = useMemo(() => {
    return goldRate * (1 - reductionPercent / 100);
  }, [goldRate, reductionPercent]);

  const fetchGoldRateLive = async () => {
    try {
      const { data } = await api.post(
        "http://insight.indelmoney.com:8089/indel/api/insight/latestLTV",
        {},
        {
          headers: {
            Api_key: API_KEY_GOLD_RATE
          }
        }
      );

      if (data.status) {
        setGoldRate(data.LTV);
      } else {
        toast.error("Failed to fetch gold carat types!");
      }
    } catch (error) {
      toast.error("Gold carat fetching failed!");
    }
  };

  useEffect(() => {
    fetchGoldRateLive();
  }, [])

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-wrap -mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]"
        >
          <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
            <FormField
              control={form.control}
              name="carat"
              render={({ field }) => (
                <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                  <FormLabel className={labelStyle}>Carat</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    key={field.value}
                  >
                    <SelectTrigger className="w-full bg-white border-white">
                      <SelectValue placeholder="Carat" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-white">
                      {goldCaratTypes?.map((carat) => (
                        <SelectItem key={carat?.value} value={carat?.label}>
                          {carat?.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
            <FormField
              control={form.control}
              name="goldType"
              render={({ field }) => (
                <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                  <FormLabel className={labelStyle}>Gold type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    key={field.value}
                  >
                    <SelectTrigger className="w-full bg-white border-white">
                      <SelectValue placeholder="Gold type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-white">
                      {goldTypes?.map((type) => (
                        <SelectItem key={type?.value} value={type?.label}>
                          {type?.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
            <FormField
              control={form.control}
              name="goldAmount"
              render={({ field }) => (
                <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                  <div className="flex">
                    <FormLabel className={`${labelStyle} flex-1`}>
                      Gold amount{" "}
                    </FormLabel>
                    <div className="inline-flex gap-[4px] lg:gap-[6px] 2xl:gap-[8px] rounded-[5px] lg:rounded-[10px] 2xl:rounded-[15px] bg-white p-[2px_4px] lg:p-[3px_6px] 2xl:p-[4px_8px]">
                      <div
                        onClick={() => handleToggle("gm")}
                        className={`${unit === "gm"
                          ? "bg-base1"
                          : " bg-base1/50 hover:bg-base1/60"
                          } ${toggleBtnStyle}`}
                      >
                        gm
                      </div>
                      <div
                        onClick={() => handleToggle("kg")}
                        className={`${unit === "kg"
                          ? "bg-base1"
                          : " bg-base1/50 hover:bg-base1/60"
                          } ${toggleBtnStyle}`}
                      >
                        kg
                      </div>
                    </div>
                  </div>
                  <FormControl>
                    <Input
                      className="bg-white border-white"
                      placeholder="Gold Amount (in gms)"
                      {...field}
                      value={
                        finalRate
                          ? unit === "gm"
                            ? finalRate.toFixed(2)
                            : (finalRate * 1000).toFixed(2)
                          : ""
                      }

                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
            <FormField
              control={form.control}
              name="loanAmount"
              render={({ field }) => (
                <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                  <FormLabel className={labelStyle}>Loan Amount</FormLabel>
                  <div className="relative z-0">
                    <FormControl>
                      <Input
                        className="bg-white border-white"
                        placeholder="Loan amount"
                        {...field}
                      />
                    </FormControl>
                    <Image
                      src="/images/icon-refresh.svg"
                      alt="refresh"
                      width={16}
                      height={16}
                      className="w-[10px] sm:w-[10px] 2xl:w-[15px] aspect-square absolute z-1 top-0 bottom-0 right-[10px] lg:right-[12px] 2xl:right-[15px] m-auto cursor-pointer hover:scale-95 transition-transform duration-300"
                    />
                  </div>
                  <FormDescription className="text-[10px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-none font-normal text-[#3c3c3c]">
                    Rate Calculated @ 5798 / Gm
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px] mt-[15px] lg:mt-[20px] 2xl:mt-[30px]">
            <Button
              className="btn btn-base2 max-w-[105px] lg:max-w-[120px] 2xl:max-w-[140px] 3xl:max-w-[160px uppercase ml-auto"
              type="submit"
            >
              apply now
            </Button>
          </div>
        </form>
      </Form>
      {isDialogOpen && (
        <EnquiryModal isDialogOpen={isDialogOpen} onCancel={handleCancel} enquiryCalculatorData={submittedData} type={'gold_loan_calculator'} />
      )}
    </>
  );
}
