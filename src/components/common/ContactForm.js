"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import api from "@/lib/api/axios";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

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

// Rejects strings that are entirely (or mostly) symbols/punctuation with no real content
function isSymbolOnly(value) {
  if (typeof value !== "string") return false;
  const lettersOrDigits = (value.match(/[a-zA-Z0-9]/g) || []).length;
  return lettersOrDigits < 2;
}

// Schema Validation
const formSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters." })
      .max(100, { message: "Name is too long." })
      .refine((val) => !hasMaliciousContent(val), {
        message: "Name contains invalid characters.",
      })
      .refine((val) => isValidNameFormat(val), {
        message: "Name can only contain letters, numbers, spaces, and . , ' -",
      }),
    email: z.string().email({ message: "Invalid email address." }),
    service_types: z.string().min(1, { message: "Please select a service type." }),
    phone: z.string().regex(/^\+?\d{10,15}$/, {
      message: "Phone number must be 10-15 digits.",
    }),
    subject: z
      .string()
      .max(200, { message: "Subject is too long." })
      .refine((val) => val === "" || val.length >= 2, {
        message: "Subject must be at least 2 characters.",
      })
      .refine((val) => val === "" || !hasMaliciousContent(val), {
        message: "Subject contains invalid characters.",
      })
      .refine((val) => val === "" || !isSymbolOnly(val), {
        message: "Subject must contain actual text, not just symbols.",
      }),
    city: z
      .string()
      .max(100, { message: "City is too long." })
      .refine((val) => val === "" || !hasMaliciousContent(val), {
        message: "City contains invalid characters.",
      })
      .refine((val) => val === "" || !isSymbolOnly(val), {
        message: "City must contain actual text, not just symbols.",
      }),
    message: z
      .string()
      .max(2000, { message: "Message is too long." })
      .refine((val) => val === "" || val.length >= 10, {
        message: "Message must be at least 10 characters.",
      })
      .refine((val) => val === "" || !hasMaliciousContent(val), {
        message: "Message contains invalid characters.",
      })
      .refine((val) => val === "" || !isSymbolOnly(val), {
        message: "Message must contain actual text, not just symbols.",
      }),
  })
  .passthrough();

// Inner form component that uses reCAPTCHA
function ContactFormInner() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [serviceTypes, setServiceTypes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchServiceTypes = async () => {
    try {
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/service-types`);
      if (data.success) {
        setServiceTypes(data.data);
      } else {
        toast.error("Failed to fetch service types!");
      }
    } catch (error) {
      toast.error("Service fetching failed!");
    }
  };

  useEffect(() => {
    fetchServiceTypes();
  }, []);

  const formattedServiceTypes = useMemo(() => {
    if (serviceTypes?.length > 0) {
      return serviceTypes?.map((type) => ({
        label: type.type_name,
        value: type.id.toString(),
      }));
    }
    return [];
  }, [serviceTypes]);

  // Define form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      city: "",
      service_types: "",
    },
  });

  // Handle form submission
  async function onSubmit(data) {
    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not available. Please refresh the page.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha("contact_form");

      if (!recaptchaToken) {
        toast.error("Failed to get reCAPTCHA token. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Sanitize ALL string fields before submission
      const sanitizedData = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, sanitizeInput(value)]));

      // Defense-in-depth: re-check after sanitizing in case something slipped through
      const stillDangerous = Object.entries(sanitizedData).some(([key, value]) => key !== "service_types" && hasMaliciousContent(value));
      if (stillDangerous) {
        toast.error("Your submission contains invalid characters. Please remove them and try again.");
        setIsSubmitting(false);
        return;
      }

      const cleanedData = Object.fromEntries(Object.entries(sanitizedData).map(([key, value]) => [key, value === "" ? null : value]));
      const payload = { ...cleanedData, enquiry_type: "contact", recaptcha: recaptchaToken };

      const { data: responseData } = await api.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/service-enquiries`, payload);

      if (responseData.success) {
        toast.success("Contact form submitted successfully!");
        form.reset(); // Reset form on success
      } else {
        toast.error(responseData?.message || "Failed to submit contact form!");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Submission failed! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap -mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
        <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <FormControl>
                  <Input className="bg-white border-white" placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <FormControl>
                  <Input className="bg-white border-white" placeholder="Contact Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <FormControl>
                  <Input type="email" className="bg-white border-white" placeholder="Email Address" {...field} />
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
                  <Input className="bg-white border-white" placeholder="Subject" {...field} />
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
                  <Input className="bg-white border-white" placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          {/* Service Type Field */}
          <FormField
            control={form.control}
            name="service_types"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <Select onValueChange={field.onChange} value={field.value} key={field.value}>
                  <SelectTrigger className="w-full bg-white border-white">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-white">
                    {formattedServiceTypes?.map((service, index) => (
                      <SelectItem key={index} value={service.value}>
                        {service.label}
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
          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
                <FormControl>
                  <Textarea className="bg-white border-white" placeholder="Message" {...field} />
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
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <ContactFormInner />
    </GoogleReCaptchaProvider>
  );
}
