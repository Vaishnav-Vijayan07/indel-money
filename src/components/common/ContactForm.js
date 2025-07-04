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

// Schema Validation
const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().regex(/^\+?\d{10,15}$/, {
      message: "Phone number must be 10-15 digits.",
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
      console.log("reCAPTCHA Token:", recaptchaToken);
      
      if (!recaptchaToken) {
        toast.error("Failed to get reCAPTCHA token. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Proceed with form submission, including reCAPTCHA token
      const cleanedData = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value === "" ? null : value]));
      const payload = { ...cleanedData, enquiry_type: "contact", recaptcha: recaptchaToken };

      const { data: responseData } = await api.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/service-enquiries`,
        payload
      );

      if (responseData.success) {
        toast.success("Contact form submitted successfully!");
        form.reset(); // Reset form on success
      } else {
        toast.error(responseData.message || "Failed to submit contact form!");
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

// Main component that wraps the form with reCAPTCHA provider
export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // if (!isClient) {
  //   return (
  //     <div className="flex flex-wrap -mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
  //       <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
  //         <div className="bg-white border-white rounded p-4 text-center">Loading form...</div>
  //       </div>
  //     </div>
  //   );
  // }

  // if (!siteKey) {
  //   console.error("reCAPTCHA site key is not defined");
  //   return (
  //     <div className="flex flex-wrap -mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
  //       <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
  //         <div className="bg-white border-white rounded p-4 text-center text-red-600">
  //           Configuration error. Please try again later.
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

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

// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Textarea } from "../ui/textarea";
// import api from "@/lib/api/axios";
// import { useEffect, useMemo, useState } from "react";
// import toast from "react-hot-toast";

// // Schema Validation
// const formSchema = z
//   .object({
//     name: z.string().min(2, {
//       message: "Name must be at least 2 characters.",
//     }),
//     email: z.string().email({ message: "Invalid email address." }),
//     phone: z.string().regex(/^\+?\d{10,15}$/, {
//       message: "Phone number must be 10-15 digits.",
//     }),
//   })
//   .passthrough();

// export default function ContactForm() {
//   const [serviceTypes, setServiceTypes] = useState([]);
//   const fetchServiceTypes = async () => {
//     try {
//       const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/service-types`);
//       if (data.success) {
//         setServiceTypes(data.data);
//       } else {
//         toast.error("Failed to fetch service types!");
//       }
//     } catch (error) {
//       toast.error("Service fetching failed!");
//     }
//   };

//   useEffect(() => {
//     fetchServiceTypes();
//   }, []);

//   const formattedServiceTypes = useMemo(() => {
//     if (serviceTypes?.length > 0) {
//       return serviceTypes?.map((type) => ({
//         label: type.type_name,
//         value: type.id.toString(),
//       }));
//     }
//     return [];
//   }, [serviceTypes]);

//   // Define form
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//       city: "",
//       service_types: "",
//     },
//   });

//   // Handle form submission
//   async function onSubmit(data) {
//     const cleanedData = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, value === "" ? null : value]));
//     const payload = { ...cleanedData, enquiry_type: "contact" };
//     try {
//       const { data } = await api.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service-enquiries/service-enquiries`, payload);
//       if (data.success) {
//         toast.success("Contact form submitted successfully!");
//         form.reset(); // Reset form on success
//       } else {
//         toast.error("Failed to submit contact form!");
//       }
//     } catch (error) {
//       toast.error("Submission failed! Please try again.");
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap -mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
//         <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//           {/* Name Field */}
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
//                 <FormControl>
//                   <Input className="bg-white border-white" placeholder="Your Name" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//           {/* Phone Field */}
//           <FormField
//             control={form.control}
//             name="phone"
//             render={({ field }) => (
//               <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
//                 <FormControl>
//                   <Input className="bg-white border-white" placeholder="Contact Number" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//           {/* Email Field */}
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
//                 <FormControl>
//                   <Input type="email" className="bg-white border-white" placeholder="Email Address" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//           {/* Subject Field */}
//           <FormField
//             control={form.control}
//             name="subject"
//             render={({ field }) => (
//               <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
//                 <FormControl>
//                   <Input className="bg-white border-white" placeholder="Subject" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//           {/* City Field */}
//           <FormField
//             control={form.control}
//             name="city"
//             render={({ field }) => (
//               <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
//                 <FormControl>
//                   <Input className="bg-white border-white" placeholder="City" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full md:w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//           {/* Service Type Field */}
//           <FormField
//             control={form.control}
//             name="service_types"
//             render={({ field }) => (
//               <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
//                 <Select onValueChange={field.onChange} value={field.value} key={field.value}>
//                   <SelectTrigger className="w-full bg-white border-white">
//                     <SelectValue placeholder="Select service" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border-white">
//                     {formattedServiceTypes?.map((service, index) => (
//                       <SelectItem key={index} value={service.value}>
//                         {service.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
//           {/* Message Field */}
//           <FormField
//             control={form.control}
//             name="message"
//             render={({ field }) => (
//               <FormItem className="mb-2 xl:mb-3 3xl:mb-5">
//                 <FormControl>
//                   <Textarea className="bg-white border-white" placeholder="Message" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px] mt-[15px] lg:mt-[20px] 2xl:mt-[30px]">
//           {/* Submit Button */}
//           <Button
//             className="btn btn-base2 block max-w-[110px] lg:max-w-[75px] xl:max-w-[95px] 2xl:max-w-[115px] 3xl:max-w-[140px] ml-auto"
//             type="submit"
//           >
//             Submit
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// }
