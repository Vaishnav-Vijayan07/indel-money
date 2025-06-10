"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/api/axios";
import { useEffect, useState } from "react";

// Schema Validation
const formSchema = z.object({
  state: z.string().optional(),
  location: z.string().optional(),
  role: z.string().optional(),
});

const gridStyle =
  "w-full lg:w-[calc((100%-80px)/4)] xl:w-[calc((100%-140px)/4)] 2xl:w-[calc((100%-160px)/4)] 3xl:w-[calc((100%-220px)/4)] px-[5px] lg:px-[10px] 2xl:px-[15px] mb-[10px] lg:mb-0";

export default function FindJobForm({ variant = "default" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [dropdowns, setDropdowns] = useState({
    states: [],
    locations: [],
    roles: [],
  });
  const [isDropdownsLoaded, setIsDropdownsLoaded] = useState(false);

  const fetchDropdowns = async () => {
    try {
      const { data } = await api.get("/career/jobs/dropdowns");
      setDropdowns(data.data);
      setIsDropdownsLoaded(true);
    } catch (error) {
      console.error("Error fetching dropdowns:", error);
      setIsDropdownsLoaded(true); // Set to true even on error to prevent infinite loading
    }
  };

  // Define form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      state: "",
      location: "",
      role: "",
    },
  });

  // Sync form with URL query params - only after dropdowns are loaded
  useEffect(() => {
    if (!isDropdownsLoaded) return;

    const state = searchParams.get("state_id") || "";
    const location = searchParams.get("location_id") || "";
    const role = searchParams.get("role_id") || "";

    // Only reset if values have changed to avoid unnecessary re-renders
    const currentValues = form.getValues();
    if (currentValues.state !== state || currentValues.location !== location || currentValues.role !== role) {
      form.reset({
        state,
        location,
        role,
      });
    }
  }, [searchParams, form, isDropdownsLoaded]);

  // Handle form submission
  function onSubmit(values) {
    const { state, location, role } = values;
    const params = {
      state_id: state,
      location_id: location,
      role_id: role,
    };
    // Filter out empty values
    const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, value]) => value !== ""));
    const query = new URLSearchParams(filteredParams).toString();
    // Redirect only if at least one parameter is present, otherwise go to base URL
    router.push(query ? `/career/active-jobs?${query}` : "/career/active-jobs");
  }

  useEffect(() => {
    fetchDropdowns();
  }, []);

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
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <SelectTrigger className="w-full max-w-full max-sm:h-[40px] bg-white border-white rounded-[12px] lg:rounded-[12px] 2xl:rounded-[16px]">
                    <SelectValue placeholder="-- Select your state --" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-white">
                    {dropdowns.states.map((state) => (
                      <SelectItem key={String(state?.value)} value={String(state?.value)}>
                        {state?.label || "-"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={gridStyle}>
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <SelectTrigger className="text-ellipsis w-full max-w-full sm:h-full max-sm:h-[40px] bg-white border-white rounded-[11px]">
                    <SelectValue placeholder="-- Select your preferred location --" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {dropdowns.locations.map((location) => (
                      <SelectItem key={String(location?.value)} value={String(location?.value)}>
                        {location?.label || "-"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={gridStyle}>
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value || ""}>
                  <SelectTrigger className="w-full max-w-full max-sm:h-[40px] bg-white border-white rounded-[12px] lg:rounded-[12px] 2xl:rounded-[16px]">
                    <SelectValue placeholder="-- Select role --" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-white">
                    {dropdowns.roles.map((role) => (
                      <SelectItem key={String(role?.value)} value={String(role?.value)}>
                        {role?.label || "-"}
                      </SelectItem>
                    ))}
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
            className="btn btn-base2 max-w-full sm:max-w-xs lg:min-w-[160px] xl:max-w-[195px] 3xl:min-w-[220px] ml-auto hover:bg-[#cf2613]"
          >
            SEARCH
          </Button>
        </div>
        <div className="max-sm:block mt-[8px] hidden w-full">
          <Link
            href="/career/active-jobs"
            className="text-[14px] leading-[1] font-bold text-white h-[40px] flex items-center justify-center bg-base2 rounded-[24px] p-[4px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
            onClick={() => form.reset()}
          >
            <span className="px-[10px] md:px-[10px] lg:px-[15px] px-[20px]">VIEW ALL</span>
            <Image
              src="/images/icon-career.png"
              alt="careerBtn"
              width={40}
              height="40"
              className="w-[25px] h-auto aspect-4/4 block ml-[5px]"
            />
          </Link>
        </div>
      </form>
    </Form>
  );
}

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import Link from "next/link";
// import Image from "next/image";
// import { z } from "zod";
// import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { useRouter, useSearchParams } from "next/navigation";
// import api from "@/lib/api/axios";
// import { useEffect, useState } from "react";

// // Schema Validation
// const formSchema = z.object({
//   state: z.string().optional(),
//   location: z.string().optional(),
//   role: z.string().optional(),
// });

// const gridStyle =
//   "w-full lg:w-[calc((100%-80px)/4)] xl:w-[calc((100%-140px)/4)] 2xl:w-[calc((100%-160px)/4)] 3xl:w-[calc((100%-220px)/4)] px-[5px] lg:px-[10px] 2xl:px-[15px] mb-[10px] lg:mb-0";

// export default function FindJobForm({ variant = "default" }) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [dropdowns, setDropdowns] = useState({
//     states: [],
//     locations: [],
//     roles: [],
//   });

//   const fetchDropdowns = async () => {
//     try {
//       const { data } = await api.get("/career/jobs/dropdowns");
//       setDropdowns(data.data);
//     } catch (error) {
//       console.error("Error fetching dropdowns:", error);
//     }
//   };

//   // Define form
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       state: "",
//       location: "",
//       role: "",
//     },
//   });

//   // Sync form with URL query params
//   useEffect(() => {
//     const state = searchParams.get("state_id") || "";
//     const location = searchParams.get("location_id") || "";
//     const role = searchParams.get("role_id") || "";
//     form.reset({
//       state,
//       location,
//       role,
//     });
//   }, [searchParams, form]);

//   // Handle form submission
//   function onSubmit(values) {
//     const { state, location, role } = values;
//     const params = {
//       state_id: state,
//       location_id: location,
//       role_id: role,
//     };
//     // Filter out empty values
//     const filteredParams = Object.fromEntries(Object.entries(params).filter(([_, value]) => value !== ""));
//     const query = new URLSearchParams(filteredParams).toString();
//     // Redirect only if at least one parameter is present, otherwise go to base URL
//     router.push(query ? `/career/active-jobs?${query}` : "/career/active-jobs");
//   }

//   useEffect(() => {
//     fetchDropdowns();
//   }, []);

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className={`${
//           variant === "activeJobs" ? "bg-base1 sm:bg-[#cae5f4]" : "bg-base1"
//         } w-full flex flex-wrap items-center rounded-[20px] lg:rounded-[30px] 2xl:rounded-[36px] p-[20px_15px] sm:p-[15px_10px] lg:p-[20px_10px] 2xl:p-[25px_10px]`}
//       >
//         <div className="w-full lg:w-[80px] xl:w-[140px] 2xl:w-[160px] 3xl:w-[220px] px-[5px] lg:px-[10px] 2xl:px-[15px] mb-[10px] lg:mb-0 max-sm:hidden">
//           <div
//             className={`${
//               variant === "activeJobs" ? "text-[#4b4b4b]" : "text-white"
//             } text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] font-bold`}
//           >
//             Filter
//           </div>
//         </div>
//         <div className={gridStyle}>
//           <FormField
//             control={form.control}
//             name="state"
//             render={({ field }) => (
//               <FormItem>
//                 <Select onValueChange={field.onChange} value={field.value}>
//                   <SelectTrigger className="w-full max-w-full max-sm:h-[40px] bg-white border-white rounded-[12px] lg:rounded-[12px] 2xl:rounded-[16px]">
//                     <SelectValue placeholder="-- Select your state --" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border-white">
//                     {dropdowns.states.map((state) => (
//                       <SelectItem key={String(state?.value)} value={String(state?.value)}>
//                         {state?.label || "-"}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className={gridStyle}>
//           <FormField
//             control={form.control}
//             name="location"
//             render={({ field }) => (
//               <FormItem>
//                 <Select onValueChange={field.onChange} value={field.value}>
//                   <SelectTrigger className="text-ellipsis w-full max-w-full sm:h-full max-sm:h-[40px] bg-white border-white rounded-[11px]">
//                     <SelectValue placeholder="-- Select your preferred location --" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white">
//                     {dropdowns.locations.map((location) => (
//                       <SelectItem key={String(location?.value)} value={String(location?.value)}>
//                         {location?.label || "-"}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className={gridStyle}>
//           <FormField
//             control={form.control}
//             name="role"
//             render={({ field }) => (
//               <FormItem>
//                 <Select onValueChange={field.onChange} value={field.value}>
//                   <SelectTrigger className="w-full max-w-full max-sm:h-[40px] bg-white border-white rounded-[12px] lg:rounded-[12px] 2xl:rounded-[16px]">
//                     <SelectValue placeholder="-- Select role --" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border-white">
//                     {dropdowns.roles.map((role) => (
//                       <SelectItem key={String(role?.value)} value={String(role?.value)}>
//                         {role?.label || "-"}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className={gridStyle}>
//           <Button
//             type="submit"
//             className="btn btn-base2 max-w-full sm:max-w-xs lg:min-w-[160px] xl:max-w-[195px] 3xl:min-w-[220px] ml-auto hover:bg-[#cf2613]"
//           >
//             SEARCH
//           </Button>
//         </div>
//         <div className="max-sm:block mt-[8px] hidden w-full">
//           <Link
//             href="/career/active-jobs"
//             className="text-[14px] leading-[1] font-bold text-white h-[40px] flex items-center justify-center bg-base2 rounded-[24px] p-[4px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
//             onClick={() => form.reset()}
//           >
//             <span className="px-[10px] md:px-[10px] lg:px-[15px] px-[20px]">VIEW ALL</span>
//             <Image
//               src="/images/icon-career.png"
//               alt="careerBtn"
//               width={40}
//               height="40"
//               className="w-[25px] h-auto aspect-4/4 block ml-[5px]"
//             />
//           </Link>
//         </div>
//       </form>
//     </Form>
//   );
// }
