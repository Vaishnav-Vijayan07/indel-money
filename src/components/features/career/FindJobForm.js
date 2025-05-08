"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Schema Validation
const formSchema = z.object({
  yourState: z.string().nonempty({
    message: "Please select a state.",
  }),
  preferredLocation: z.string().nonempty({
    message: "Please select a location.",
  }),
  preferredRole: z.string().nonempty({
    message: "Please select a role.",
  }),
});

const gridStyle =
  "w-full lg:w-[calc((100%-80px)/4)] xl:w-[calc((100%-140px)/4)] 2xl:w-[calc((100%-160px)/4)] 3xl:w-[calc((100%-220px)/4)] px-[5px] lg:px-[10px] 2xl:px-[15px] mb-[10px] lg:mb-0";

export default function FindJobForm({ variant = "default" }) {
  // Define form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      yourName: "",
      contactNumber: "",
      emailAddress: "",
      serviceType: "",
    },
  });

  // Handle form submission
  function onSubmit(values) {
    
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`${
          variant === "activeJobs" ? "bg-base1 sm:bg-[#cae5f4]" : "bg-base1"
        } w-full flex flex-wrap items-center rounded-[20px] lg:rounded-[30px] 2xl:rounded-[36px] p-[20px_15px] sm:p-[15px_10px] lg:p-[20px_10px] 2xl:p-[25px_10px]`}
      >
        <div className="w-full lg:w-[80px] xl:w-[140px] 2xl:w-[160px] 3xl:w-[220px] px-[5px] lg:px-[10px] 2xl:px-[15px] mb-[10px] lg:mb-0 max-sm:hidden">
          <div
            className={`${
              variant === "activeJobs" ? "text-[#4b4b4b]" : "text-white"
            } text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] font-bold`}
          >
            Filter
          </div>
        </div>
        <div className={gridStyle}>
          {/* Select Service Field */}
          <FormField
            control={form.control}
            name="yourState"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full max-w-full max-sm:h-[40px] bg-white border-white rounded-[12px] lg:rounded-[12px] 2xl:rounded-[16px]">
                    <SelectValue placeholder="-- Select your state --" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-white">
                    <SelectItem value="gold-loan">Gold Loan</SelectItem>
                    <SelectItem value="other-loans">Other Loans</SelectItem>
                    <SelectItem value="doorstep-gold-loan">
                      Door Step Gold Loan
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={gridStyle}>
          {/* Select Service Field */}
          <FormField
            control={form.control}
            name="preferredLocation"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="text-ellipsis w-full max-w-full max-sm:h-[40px] bg-white border-white rounded-[12px] lg:rounded-[12px] 2xl:rounded-[16px]">
                    <SelectValue placeholder="-- Select your preferred location --" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-white">
                    <SelectItem value="gold-loan">Gold Loan</SelectItem>
                    <SelectItem value="other-loans">Other Loans</SelectItem>
                    <SelectItem value="doorstep-gold-loan">
                      Door Step Gold Loan
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={gridStyle}>
          {/* Select Service Field */}
          <FormField
            control={form.control}
            name="preferredRole"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full max-w-full max-sm:h-[40px] bg-white border-white rounded-[12px] lg:rounded-[12px] 2xl:rounded-[16px]">
                    <SelectValue placeholder="-- Select your preferred role --" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-white">
                    <SelectItem value="gold-loan">Gold Loan</SelectItem>
                    <SelectItem value="other-loans">Other Loans</SelectItem>
                    <SelectItem value="doorstep-gold-loan">
                      Door Step Gold Loan
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={gridStyle}>
          <Button
            type="submit"
            className="btn btn-base2 max-w-full sm:max-w-[140px] lg:max-w-[160px] xl:max-w-[195px] 3xl:max-w-[220px] ml-auto hover:bg-[#cf2613]!"
          >
            SEARCH
          </Button>
        </div>
        <div className="max-sm:block mt-[8px] hidden w-full">
          <Link
            href={"/career/active-jobs"}
            className="text-[14px] leading-[1] font-bold text-white h-[40px] flex items-center justify-center bg-base2 rounded-[35px] p-[4px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
          >
            <span className="px-[5px] md:px-[10px] lg:px-[15px] 2xl:px-[20px]">
              VIEW ACTIVE ROLES
            </span>
            <Image
              src={"/images/icon-careerBtn.svg"}
              alt="careerBtn"
              width={40}
              height={40}
              className="w-[25px] h-auto aspect-4/4 block ml-[5px]"
            />
          </Link>
        </div>
      </form>
    </Form>
  );
}
