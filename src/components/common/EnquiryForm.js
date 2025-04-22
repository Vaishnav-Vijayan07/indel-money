"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";

import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui//input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { motion } from "framer-motion";

// Schema Validation
const formSchema = z.object({
  yourName: z.string().min(2, {
    message: "Your Name must be at least 2 characters.",
  }),
  contactNumber: z.string().min(10, {
    message: "Contact Number must be at least 10 digits.",
  }),
  emailAddress: z.string().email({
    message: "Invalid email address.",
  }),
  serviceType: z.string().nonempty({
    message: "Please select a service.",
  }),
});

export default function EnquiryForm() {
  const [open, setOpen] = useState(true);

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
    console.log("Form submitted:", values);
  }

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{
        x: "[calc(((100vw-var(--container-x))/2)+var(--container-padding))]",
        opacity: 1,
      }}
      className={`${
        open
          ? "right-[calc(((100vw-var(--container-x))/2)+var(--container-padding))]"
          : "right-0 translate-x-full"
      } w-full max-w-[calc(var(--container-x)-2rem)] sm:max-w-[276px] lg:max-w-[320px] 2xl:max-w-[420px] 3xl:max-w-[476px] h-auto absolute z-1 top-0 bottom-[calc(150px+var(--marquee-y))] sm:bottom-[var(--marquee-y)] my-auto flex items-center transition-transform duration-300`}
    >
      <div className={`${
            open ? "max-sm:rounded-tl-[10px]" : "rounded-tl-0"
          } w-full h-auto relative bg-[#c0dbff] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] rounded-tl-0 p-[30px_20px_20px] 4xs:p-[40px_30px_30px] sm:p-[10px_15px] lg:p-[20px_20px] 3xl:p-[20px_35px]`}>
        <div className="text-[20px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] leading-[1.2] font-medium text-black mb-[15px] 4xs:mb-[30px] sm:mb-2 xl:mb-3 3xl:mb-4">
          Select the type of service you are looking for?
        </div>

        <div
          className={`${
            open ? "max-sm:opacity-0" : "max-sm:opacity-100"
          } text-sm1 leading-none [writing-mode:vertical-lr] rotate-[180deg] w-[30px] h-[80px] 3xl:w-[36px] 3xl:h-[120px] bg-[#c0dbff] cursor-pointer absolute top-0 right-full flex justify-center items-center rounded-br-[10px] rounded-tr-[10px] transition-opacity duration-300 hover:opacity-95`}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Open"}
          <Image
            src={"/images/enquiry-delmt.svg"}
            alt="enquiry"
            width={40}
            height={38}
            className="absolute -z-1 left-0 top-[-12px] rotate-180"
          />
        </div>

        <div
          className="sm:hidden w-[12px] h-auto aspect-square cursor-pointer absolute top-[16px] right-[16px] block transition-opacity duration-300 hover:opacity-95"
          onClick={() => setOpen(!open)}
        >
          <Image
            src={"/images/icon-close.svg"}
            alt="close"
            width={12}
            height={12}
            className="aspect-square"
          />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Your Name Field */}
            <FormField
              control={form.control}
              name="yourName"
              render={({ field }) => (
                <FormItem className="relative mb-[10px] sm:mb-2 xl:mb-3 3xl:mb-5">
                  <Image
                    src="/images/enquiry-yourName.svg"
                    width={0}
                    height={0}
                    sizes="18px"
                    className="w-[18px] sm:w-[14px] xl:w-[16px] 3xl:w-[18px] h-auto absolute left-[15px] -translate-y-1/2 top-[calc(35px/2)] sm:top-[calc(30px/2)] xl:top-[calc(35px/2)] 2xl:top-[calc(40px/2)] 3xl:top-[calc(48px/2)] pointer-events-none"
                    alt="Your Name"
                  />
                  <FormControl>
                    <Input
                      className="pl-[40px] bg-white border-white"
                      placeholder="Your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact Number Field */}
            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem className="relative mb-[10px] sm:mb-2 xl:mb-3 3xl:mb-5">
                  <Image
                    src="/images/enquiry-contactNumber.svg"
                    width={0}
                    height={0}
                    sizes="18px"
                    className="w-[18px] sm:w-[14px] xl:w-[16px] 3xl:w-[18px] h-auto absolute left-[15px] -translate-y-1/2 top-[calc(35px/2)] sm:top-[calc(30px/2)] xl:top-[calc(35px/2)] 2xl:top-[calc(40px/2)] 3xl:top-[calc(48px/2)] pointer-events-none"
                    alt="Contact Number"
                  />
                  <FormControl>
                    <Input
                      className="pl-[40px] bg-white border-white"
                      placeholder="Contact Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Address Field */}
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem className="relative mb-[10px] sm:mb-2 xl:mb-3 3xl:mb-5">
                  <Image
                    src="/images/enquiry-emailAddress.svg"
                    width={0}
                    height={0}
                    sizes="18px"
                    className="w-[18px] sm:w-[14px] xl:w-[16px] 3xl:w-[18px] h-auto absolute left-[15px] -translate-y-1/2 top-[calc(35px/2)] sm:top-[calc(30px/2)] xl:top-[calc(35px/2)] 2xl:top-[calc(40px/2)] 3xl:top-[calc(48px/2)] pointer-events-none"
                    alt="Email Address"
                  />
                  <FormControl>
                    <Input
                      type="email"
                      className="pl-[40px] bg-white border-white"
                      placeholder="Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select Service Field */}
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem className="relative mb-[10px] sm:mb-2 xl:mb-3 3xl:mb-5">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full bg-white border-white">
                      <SelectValue placeholder="Select service" />
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

            {/* Submit Button */}
            <Button
              className="btn btn-base2 ml-auto block max-w-[100px] sm:max-w-[80px] lg:max-w-[75px] xl:max-w-[95px] 2xl:max-w-[115px] 3xl:max-w-[140px]"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}
