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
import { useState } from "react";

// Schema Validation
const formSchema = z.object({
  carat: z.string().min(2, {
    message: "must be at least 2 characters.",
  }),
  goldType: z.string().min(10, {
    message: "must be at least 2 characters.",
  }),
  goldAmount: z.string().email({
    message: "must be at least 2 characters.",
  }),
});

const labelStyle =
  "text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1] font-normal text-black";
const toggleBtnStyle =
  "text-[10px] lg:text-[12px] 2xl:text-[14px] text-center leading-[1.2] font-normal text-white w-[40px] lg:w-[50px] 2xl:w-[54px] h-[20px] lg:h-[22px] 2xl:h-[26px] rounded-[4px] lg:rounded-[6px] flex items-center justify-center cursor-pointer transition-colors duration-300";

export default function GoldLoanForm() {
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

  // Handle form submission
  function onSubmit(values) {
    console.log("Form submitted:", values);
  }

  const [unit, setUnit] = useState("gm");

  const handleToggle = (selectedUnit) => {
    setUnit(selectedUnit);
  };

  return (
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
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full bg-white border-white">
                    <SelectValue placeholder="Carat" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-white">
                    <SelectItem value="1">18 Carat</SelectItem>
                    <SelectItem value="2">24 Carat</SelectItem>
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
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full bg-white border-white">
                    <SelectValue placeholder="Gold type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-white">
                    <SelectItem value="1">Gold type 1</SelectItem>
                    <SelectItem value="2">Gold type 2</SelectItem>
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
                  <FormLabel className={`${labelStyle} flex-1`}>Gold amount </FormLabel>
                  <div className="inline-flex gap-[4px] lg:gap-[6px] 2xl:gap-[8px] rounded-[5px] lg:rounded-[10px] 2xl:rounded-[15px] bg-white p-[2px_4px] lg:p-[3px_6px] 2xl:p-[4px_8px]">
                    <div
                      onClick={() => handleToggle("gm")}
                      className={`${
                        unit === "gm" ? "bg-base1" : " bg-base1/50 hover:bg-base1/60"
                      } ${toggleBtnStyle}`}
                    >
                      gm
                    </div>
                    <div
                      onClick={() => handleToggle("kg")}
                      className={`${
                        unit === "kg" ? "bg-base1" : " bg-base1/50 hover:bg-base1/60"
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
                    className="w-[6px] lg:w-[10px] 2xl:w-[15px] aspect-square absolute z-1 top-0 bottom-0 right-[10px] lg:right-[12px] 2xl:right-[15px] m-auto cursor-pointer hover:scale-95 transition-transform duration-300"
                  />
                </div>
                <FormDescription className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1] font-normal text-[#3c3c3c]">
                  Rate Calculated @ 5798 / Gm
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px] mt-[15px] lg:mt-[20px] 2xl:mt-[30px]">
          <Button
            className="btn btn-base2 max-w-[100px] lg:max-w-[120px] 2xl:max-w-[140px] 3xl:max-w-[160px uppercase ml-auto"
            type="submit"
          >
            apply now
          </Button>
        </div>
      </form>
    </Form>
  );
}
