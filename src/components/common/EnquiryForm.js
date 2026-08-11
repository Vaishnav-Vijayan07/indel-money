import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";

import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";

// Sanitize input - strip HTML tags, stray angle brackets, and trim
function sanitizeInput(value) {
  if (typeof value !== "string") return value;
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .trim();
}

// Check for HTML tags or dangerous XSS/SQLi patterns
function hasMaliciousContent(value) {
  if (typeof value !== "string") return false;

  const dangerousPatterns = [
    /<[^>]*>/,
    /[<>]/,
    /javascript\s*:/i,
    /vbscript\s*:/i,
    /data\s*:\s*text\/html/i,
    /on\w+\s*=/i,
    /expression\s*\(/i,
    /eval\s*\(/i,
    /alert\s*\(/i,
    /confirm\s*\(/i,
    /prompt\s*\(/i,
    /document\s*\./i,
    /window\s*\./i,
    /String\.fromCharCode/i,
    /&#x?[0-9a-f]+;/i,
    /%3c|%3e/i,
    /\b(union\s+select|select\s+.+\s+from|insert\s+into|drop\s+table|delete\s+from|--\s|;--)\b/i,
  ];

  return dangerousPatterns.some((pattern) => pattern.test(value));
}

// Only letters, numbers, spaces, and common name punctuation allowed
function isValidNameFormat(value) {
  if (typeof value !== "string") return false;
  return /^[a-zA-Z0-9\s.,'-]+$/.test(value);
}

// Schema Validation
const formSchema = z.object({
  yourName: z
    .string()
    .min(2, {
      message: "Your Name must be at least 2 characters.",
    })
    .max(100, { message: "Your Name is too long." })
    .refine((val) => !hasMaliciousContent(val), {
      message: "Your Name contains invalid characters.",
    })
    .refine((val) => isValidNameFormat(val), {
      message: "Your Name can only contain letters, numbers, spaces, and . , ' -",
    }),
  contactNumber: z.string().regex(/^\+?\d{10,15}$/, {
    message: "Contact Number must be 10-15 digits.",
  }),
  emailAddress: z.string().email({
    message: "Invalid email address.",
  }),
  serviceType: z.coerce.number().refine((val) => !isNaN(val) && val !== 0, {
    message: "Please select a service.",
  }),
});

export default function EnquiryForm({ handleSubmit, serviceTypes }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  async function onSubmit(values) {
    try {
      setIsSubmitting(true);

      // Sanitize all string fields before submission
      const sanitizedValues = {
        ...values,
        yourName: sanitizeInput(values.yourName),
        contactNumber: sanitizeInput(values.contactNumber),
        emailAddress: sanitizeInput(values.emailAddress),
      };

      // Defense-in-depth: re-check after sanitizing in case something slipped through
      const stillDangerous = ["yourName", "contactNumber", "emailAddress"].some((key) => hasMaliciousContent(sanitizedValues[key]));
      if (stillDangerous) {
        setIsSubmitting(false);
        return;
      }

      await handleSubmit(sanitizedValues);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
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
                <Input className="pl-[40px] bg-white border-white" placeholder="Your Name" {...field} />
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
                <Input className="pl-[40px] bg-white border-white" placeholder="Contact Number" {...field} />
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
                <Input type="email" className="pl-[40px] bg-white border-white" placeholder="Email Address" {...field} />
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
              <Select onValueChange={field.onChange} value={field.value ? String(field.value) : ""}>
                <SelectTrigger className="w-full bg-white border-white">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent className="bg-white border-white">
                  {serviceTypes?.map((service) => (
                    <SelectItem key={service.value} value={String(service.value)}>
                      {service.label}
                    </SelectItem>
                  ))}
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
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
