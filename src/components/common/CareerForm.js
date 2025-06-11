"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/lib/api/axios";
import { toast } from "sonner";

// Schema Validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Your Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone Number must be at least 10 digits." }),
  email: z.string().email({ message: "Invalid email address." }),
  preferred_location: z.string().min(1, { message: "Please select a location." }),
  referred_employee_name: z.string().optional(),
  employee_referral_code: z.string().optional(),
  age: z.string().regex(/^\d+$/, { message: "Age must be a number." }).min(1, { message: "Please enter your age." }),
  preferred_role: z.string().min(1, { message: "Please select a preferred role." }),
  current_salary: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid salary format (e.g., 50000.00)." })
    .optional(),
  expected_salary: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid salary format (e.g., 60000.00)." })
    .optional(),
  resume: z.any().refine((file) => file instanceof File, { message: "Please upload a resume." }),
});

export default function CareerForm({ jobId }) {
  console.log("CareerForm rendered with jobId:", jobId);

  const [loading, setLoading] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    locations: [],
    roles: [],
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchDropdowns = async () => {
    try {
      const { data } = await api.get("/career/jobs/dropdowns");
      if (!data.success) {
        throw new Error(data.message || "Failed to fetch dropdowns");
      }
      setDropdowns(data.data || { locations: [], roles: [] });
    } catch (error) {
      console.error("Error fetching dropdowns:", error);
      toast.error("Failed to load dropdown options");
    }
  };

  // Define form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferred_location: "",
      referred_employee_name: "",
      employee_referral_code: "",
      age: "",
      preferred_role: "",
      current_salary: "",
      expected_salary: "",
      resume: null,
    },
  });

  // Handle form submission
  async function onSubmit(values) {
    if (!selectedFile) {
      toast.error("Please upload your resume.");
      return;
    }

    const formData = new FormData();
    formData.append("applicant[name]", values.name);
    formData.append("applicant[email]", values.email);
    formData.append("applicant[phone]", values.phone);
    formData.append("applicant[preferred_location]", values.preferred_location);
    formData.append("applicant[referred_employee_name]", values.referred_employee_name || "");
    formData.append("applicant[employee_referral_code]", values.employee_referral_code || "");
    formData.append("applicant[age]", values.age);
    formData.append("applicant[current_salary]", values.current_salary || "");
    formData.append("applicant[expected_salary]", values.expected_salary || "");
    formData.append("applicant[file]", selectedFile);
    formData.append("applicant[is_active]", "true");
    formData.append("job_application[job_id]", jobId || "");

    try {
      setLoading(true);
      const response = await api.post("/web/careers/job_application", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (!response.data.success) {
        throw new Error(response.data.message || "Failed to submit application");
      }
      form.reset();
      setSelectedFile(null);
      toast.success("Application submitted successfully!");
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error(err.message || "Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return;
      }
      if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
        toast.error("Please upload a PDF, JPEG, or PNG file");
        return;
      }
      setSelectedFile(file);
      form.setValue("resume", file);
    }
  };

  useEffect(() => {
    fetchDropdowns();
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap -mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
        <div className="max-sm:flex items-center hidden p-[10px] bg-white bg-custom-svg mb-[20px]">
          <div className="w-[80px] lg:w-[110px]">
            <div className="flex items-center">
              <label className="text-[12px] lg:text-[14px] leading-none font-normal w-[80px] lg:w-[110px] h-[40px] flex items-center p-[5px_10px] lg:p-[10px_15px] bg-base1 rounded-[10px] cursor-pointer hover:bg-[#c8e1ff] transition-background duration-300">
                <Image
                  src="/images/icon-upload.svg"
                  alt="icon-upload"
                  width={26}
                  height={21}
                  className="w-[15px] lg:w-[25px] filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(100%)_saturate(0%)_hue-rotate(137deg)_brightness(107%)_contrast(101%)]"
                />
                <span className="font-medium ml-[4px] lg:ml-[6px] 3xl:ml-[8px] text-white">Choose</span>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,image/jpeg,image/png"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <div className="text-[12px] leading-normal font-normal pl-[5px] lg:pl-[15px]">
            Upload Your Resume; we'll connect when the right role opens up.
          </div>
        </div>
        <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <FormControl>
                  <Input className="bg-white border-white" placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <FormControl>
                  <Input type="tel" className="bg-white border-white" placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <FormControl>
                  <Input type="email" className="bg-white border-white" placeholder="Email Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
          <FormField
            control={form.control}
            name="preferred_location"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full bg-white border-white">
                    <SelectValue placeholder="Preferred Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-white">
                    {dropdowns.locations.map((location) => (
                      <SelectItem key={location?.value} value={String(location?.value)}>
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
        <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          <FormField
            control={form.control}
            name="referred_employee_name"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <FormControl>
                  <Input className="bg-white border-white" placeholder="Referred Employee Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          <FormField
            control={form.control}
            name="employee_referral_code"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <FormControl>
                  <Input className="bg-white border-white" placeholder="Employee Referral Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <FormControl>
                  <Input type="number" className="bg-white border-white" placeholder="Age" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
          <FormField
            control={form.control}
            name="preferred_role"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full bg-white border-white">
                    <SelectValue placeholder="Preferred Role" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-white">
                    {dropdowns.roles.map((role) => (
                      <SelectItem key={role?.value} value={String(role?.value)}>
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
        <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
          <FormField
            control={form.control}
            name="current_salary"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    className="bg-white border-white"
                    placeholder="Current Salary (Month)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px] mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
          <FormField
            control={form.control}
            name="expected_salary"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    className="bg-white border-white"
                    placeholder="Expected Salary (Month)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="max-sm:hidden w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-120px)] xl:w-[calc(100%-140px)] 2xl:w-[calc(100%-180px)] 3xl:w-[calc(100%-200px)] px-[4px] lg:px-[6px] 2xl:px-[10px] mb-[10px] lg:mb-0">
          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                <FormControl>
                  <div className="flex items-center">
                    <label className="text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] w-[100px] lg:w-[100px] 2xl:w-[120px] 3xl:w-[145px] h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[50px] flex items-center p-[4px_10px] lg:p-[6px_15px] 3xl:p-[10px_25px] bg-[#b3d5ff] rounded-full cursor-pointer hover:bg-[#c8e1ff] transition-background duration-300">
                      <Image src="/images/icon-upload.svg" alt="icon-upload" width={26} height={21} />
                      <span className="font-medium ml-[4px] lg:ml-[6px] 3xl:ml-[8px]">Choose</span>
                      <input type="file" accept=".pdf,image/jpeg,image/png" className="hidden" onChange={handleFileChange} />
                    </label>
                    <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] whitespace-nowrap text-ellipsis overflow-hidden flex-1 ml-[4px] lg:ml-[6px] 2xl:ml-[8px]">
                      {selectedFile?.name || "No file chosen"}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[180px] 3xl:w-[200px] px-[4px] lg:px-[6px] 2xl:px-[10px]">
          <Button
            className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-bold text-white w-full max-w-[120px] md:max-w-[140px] lg:max-w-[160px] 2xl:max-w-[180px] 3xl:max-w-[200px] h-[35px] sm:h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[50px] 3xl:h-[55px] flex items-center justify-between bg-base2 rounded-[20px] lg:rounded-[30px] 2xl:rounded-[40px] 3xl:rounded-[60px] p-[4px_8px] sm:p-[4px] lg:p-[6px] 2xl:p-[8px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
            type="submit"
            disabled={loading}
          >
            <span className="px-[4px] lg:px-[15px] 2xl:px-[20px]">{loading ? "Submitting..." : "Submit"}</span>
            <Image
              src="/images/icon-careerBtn.svg"
              alt="careerBtn"
              width={40}
              height={40}
              className="w-[20px] lg:w-[25px] 2xl:w-[35px] 3xl:w-[40px] h-auto aspect-4/4 block"
            />
          </Button>
        </div>
      </form>
    </Form>
  );
}
