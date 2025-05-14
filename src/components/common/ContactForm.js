"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

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

export default function ContactForm() {
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
        className="flex flex-wrap -mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]"
      >
        <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* Your Name Field */}
          <FormField
            control={form.control}
            name="yourName"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <FormControl>
                  <Input
                    className="bg-white border-white"
                    placeholder="Your Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* Contact Number Field */}
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <FormControl>
                  <Input
                    className="bg-white border-white"
                    placeholder="Contact Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* Email Address Field */}
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <FormControl>
                  <Input
                    type="email"
                    className="bg-white border-white"
                    placeholder="Email Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* Subject Field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <FormControl>
                  <Input
                    className="bg-white border-white"
                    placeholder="Subject"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* City Field */}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <FormControl>
                  <Input
                    className="bg-white border-white"
                    placeholder="City"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* Select Service Field */}
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
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
        </div>
        <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* Textarea Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <FormControl>
                  <Textarea
                    className="bg-white border-white"
                    placeholder="Message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px] mt-[15px] lg:mt-[20px] 2xl:mt-[30px]">
          {/* Submit Button */}
          <Button
            className="btn btn-base2 block max-w-[110px] lg:max-w-[75px] xl:max-w-[95px] 2xl:max-w-[115px] 3xl:max-w-[140px] ml-auto"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
