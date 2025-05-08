
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
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
  );
}
