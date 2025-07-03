"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import api from "@/lib/api/axios";
import Cookies from "js-cookie";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import toast, { Toaster } from "react-hot-toast";

// Schema Validation
const baseSchema = {
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
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
};

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

const otpSchema = z.object({
  otp: z
    .string()
    .length(6, { message: "OTP must be 6 digits." })
    .regex(/^\d{6}$/, { message: "OTP must be numeric." }),
});

export default function CareerForm({ jobId, isGeneral }) {
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropdowns, setDropdowns] = useState({ locations: [], roles: [] });
  const [dropdownsLoaded, setDropdownsLoaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [isDraggingMobile, setIsDraggingMobile] = useState(false);
  const [isDraggingDesktop, setIsDraggingDesktop] = useState(false);

  const truncateFilename = (filename, maxLength = 8) => {
    if (!filename || filename.length <= maxLength) return filename;
    return filename.substring(0, maxLength) + "....";
  };

  // File type display helper
  const getFileTypeDisplay = (file, fileName) => {
    if (file) {
      const typeMap = {
        "application/pdf": "PDF",
        "image/jpeg": "JPEG",
        "image/png": "PNG",
      };
      return typeMap[file.type] || file.type.split("/")[1]?.toUpperCase() || "";
    }
    if (fileName) {
      const extension = fileName.split(".").pop()?.toLowerCase();
      const extensionMap = {
        pdf: "PDF",
        jpg: "JPEG",
        jpeg: "JPEG",
        png: "PNG",
      };
      return extensionMap[extension] || extension?.toUpperCase() || "";
    }
    return "";
  };

  // Dynamic form schema
  const formSchema = useMemo(() => {
    return z.object({
      ...baseSchema,
      file:
        selectedFile || selectedFileName
          ? z.any().optional()
          : z.any().refine((file) => file instanceof File, { message: "Please upload a resume." }),
    });
  }, [selectedFile, selectedFileName]);

  // Forms
  const emailForm = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  const otpForm = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

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
      preferred_role: isGeneral ? "" : jobId?.toString() || "",
      current_salary: "",
      expected_salary: "",
      file: null,
    },
  });

  // Fetch dropdowns
  const fetchDropdowns = async () => {
    try {
      const { data } = await api.get("/career/jobs/dropdowns");

      if (!data.success) throw new Error(data.message || "Failed to fetch dropdowns");
      setDropdowns(data.data || { locations: [], roles: [] });
      setDropdownsLoaded(true);
    } catch (error) {
      console.error("Error fetching dropdowns:", error);
      toast.error("Failed to load dropdown options");
    }
  };

  // Auto-fill form
  const autoFillForm = (data) => {
    const validatedData = {
      name: data.name || "",
      phone: data.phone || "",
      email: data.email || "",
      preferred_location: dropdowns.locations.some((loc) => loc.value.toString() === data.preferred_location?.toString())
        ? data.preferred_location.toString()
        : "",
      referred_employee_name: data.referred_employee_name || "",
      employee_referral_code: data.employee_referral_code || "",
      age: data.age?.toString() || "",
      preferred_role: isGeneral
        ? dropdowns.roles.some((role) => role.value.toString() === data.preferred_role?.toString())
          ? data.preferred_role?.toString() || ""
          : ""
        : jobId?.toString() || "",
      current_salary: data.current_salary?.toString() || "",
      expected_salary: data.current_salary?.toString() || "",
      file: null,
    };
    form.reset(validatedData);
  };

  // Check cookies
  useEffect(() => {
    fetchDropdowns();
  }, []);

  useEffect(() => {
    if (dropdownsLoaded) {
      const savedData = Cookies.get("applicantData");

      if (savedData) {
        const parsedData = JSON.parse(savedData);

        setEmail(parsedData.email);
        setSelectedFileName(parsedData.file || null);
        autoFillForm(parsedData);
        setIsOtpVerified(true);
      }
    }
  }, [dropdownsLoaded]);

  // Handle email submission
  const handleEmailSubmit = async (values) => {
    try {
      setLoading(true);
      const { data } = await api.post("/web/careers/send-otp", { email: values.email });

      if (!data.success) throw new Error(data.message || "Failed to send OTP");
      setEmail(values.email);
      form.setValue("email", values.email);
      setShowOtpInput(true);

      toast.success("OTP sent to your email");
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error(error.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP submission
  const handleOtpSubmit = async (values) => {
    try {
      setLoading(true);
      const payload = { email, otp: values.otp.trim() };

      const { data } = await api.post("/web/careers/verify-otp", payload);

      if (!data.success) throw new Error(data.message || "Invalid OTP");
      if (data.data) {
        autoFillForm(data.data);
        Cookies.set("applicantData", JSON.stringify(data.data), {
          expires: 7,
          sameSite: "strict",
        });
      }
      setIsOtpVerified(true);
      setIsModalOpen(false);
      toast.success("OTP verified successfully");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error(error.message || "Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const onSubmit = async (values) => {
    if (!isOtpVerified) {
      toast.error("Please verify OTP before submitting the form.");
      setIsModalOpen(true);
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
    if (selectedFile) {
      formData.append("applicant[file]", selectedFile);
    }
    formData.append("applicant[is_active]", "true");

    const apiUrl = isGeneral ? "/web/careers/general_application" : "/web/careers/job_application";
    if (isGeneral) {
      formData.append("general_application[role_id]", values.preferred_role);
    } else {
      formData.append("job_application[job_id]", jobId || "");
    }

    try {
      setLoading(true);

      const response = await api.post(apiUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (!response.data.success) throw new Error(response.data.message || "Failed to submit application");

      Cookies.set("applicantData", JSON.stringify({ ...values, file: selectedFile ? selectedFile.name : selectedFileName }), {
        expires: 7,
        sameSite: "strict",
      });

      // form.reset();
      setSelectedFile(null);
      // setIsOtpVerified(false);
      // setEmail("");
      emailForm.reset();
      otpForm.reset();
      setShowOtpInput(false);
      toast.success("Application submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error(err.response.data.error.message || "Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  const validateAndSetFile = (file) => {
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return false;
      }
      if (!["application/pdf"].includes(file.type)) {
        toast.error("Please upload a PDF file");
        return false;
      }
      setSelectedFile(file);
      setSelectedFileName(file.name);
      form.setValue("file", file);
      return true;
    }
    return false;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    validateAndSetFile(file);
  };

  const handleDrop = (event, isDesktop) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    validateAndSetFile(file);
    isDesktop ? setIsDraggingDesktop(false) : setIsDraggingMobile(false);
  };

  const handleDragOver = (event, isDesktop) => {
    event.preventDefault();
    isDesktop ? setIsDraggingDesktop(true) : setIsDraggingMobile(true);
  };

  const handleDragLeave = (event, isDesktop) => {
    event.preventDefault();
    isDesktop ? setIsDraggingDesktop(false) : setIsDraggingMobile(false);
  };

  return (
    <div className="p-4">
      <Toaster position="top-right" />
      {/* Email Verification Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-semibold text-gray-900">
                    Verify Your Email
                  </Dialog.Title>
                  <div className="mt-4">
                    {!showOtpInput ? (
                      <Form {...emailForm} key="email-form">
                        <form onSubmit={emailForm.handleSubmit(handleEmailSubmit)} className="space-y-4">
                          <FormField
                            control={emailForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    type="email"
                                    className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-500 text-sm" />
                              </FormItem>
                            )}
                          />
                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
                            disabled={loading}
                          >
                            {loading ? (
                              <span className="flex items-center">
                                <svg
                                  className="animate-spin h-5 w-5 mr-2 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                                </svg>
                                Sending OTP...
                              </span>
                            ) : (
                              "Send OTP"
                            )}
                          </Button>
                        </form>
                      </Form>
                    ) : (
                      <Form {...otpForm} key="otp-form">
                        <form onSubmit={otpForm.handleSubmit(handleOtpSubmit)} className="space-y-4">
                          <FormField
                            control={otpForm.control}
                            name="otp"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input
                                    type="text"
                                    inputMode="numeric"
                                    className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Enter OTP"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-500 text-sm" />
                              </FormItem>
                            )}
                          />
                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
                            disabled={loading}
                          >
                            {loading ? (
                              <span className="flex items-center">
                                <svg
                                  className="animate-spin h-5 w-5 mr-2 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                                </svg>
                                Verifying...
                              </span>
                            ) : (
                              "Verify OTP"
                            )}
                          </Button>
                        </form>
                      </Form>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Main Form */}
      <div className={`transition-opacity duration-300`}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap -mx-1 lg:-mx-6.5 2xl:-mx-2.5">
            <div
              className={`max-sm:flex items-center hidden p-2.5 bg-white bg-custom-svg mb-5 w-full mx-1.5 ${
                isDraggingMobile ? "border-2 border-blue-500 rounded-lg" : ""
              }`}
              onDragOver={(e) => handleDragOver(e, false)}
              onDragLeave={(e) => handleDragLeave(e, false)}
              onDrop={(e) => handleDrop(e, false)}
            >
              <div className="w-20 lg:w-28">
                <label className="text-xs lg:text-sm leading-none font-normal w-20 lg:w-28 h-10 flex items-center p-2.5 lg:p-3.5 bg-base1 rounded-2.5 cursor-pointer hover:bg-[#c8e1ff] transition-colors duration-300">
                  <Image
                    src="/images/icon-upload.svg"
                    alt="icon-upload"
                    width={21}
                    height={16}
                    className="w-[14px] lg:w-[24px] filter brightness-0 invert"
                  />
                  <span className="font-medium ml-1 lg:ml-1.5 text-white">Choose</span>
                  <input
                    type="file"
                    name="file"
                    accept=".pdf,.jpeg,.png"
                    className="hidden"
                    onChange={handleFileChange}
                    // disabled={!isOtpVerified}
                  />
                </label>
              </div>
              <div className="text-xs leading-normal font-normal pl-[10px] lg:pl-[14px] text-gray-700 truncate">
                {selectedFile
                  ? `${selectedFile.name} (${getFileTypeDisplay(selectedFile, null)})`
                  : selectedFileName
                  ? `${selectedFileName.replace("uploads/job-applications/", "")} (${getFileTypeDisplay(null, selectedFileName)})`
                  : "No file chosen"}
              </div>
            </div>

            <div className="w-full px-1 lg:px-1.5 2xl:px-2.5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <FormControl>
                      <Input
                        className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Name"
                        {...field}
                        // disabled={!isOtpVerified}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <FormControl>
                      <Input
                        type="tel"
                        className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Phone Number"
                        {...field}
                        // disabled={!isOtpVerified}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <FormControl>
                      <Input
                        type="email"
                        className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter your email"
                        {...field}
                        onFocus={() => {
                          setIsModalOpen(true);
                        }}
                        disabled={isOtpVerified}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full px-1 lg:px-1.5 2xl:px-2.5">
              <FormField
                control={form.control}
                name="preferred_location"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      // disabled={!isOtpVerified}
                    >
                      <SelectTrigger className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Preferred Location" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300">
                        {dropdowns.locations.map((location) => (
                          <SelectItem key={location?.value} value={String(location?.value)}>
                            {location?.label || "-"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5">
              <FormField
                control={form.control}
                name="referred_employee_name"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <FormControl>
                      <Input
                        className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Referred Employee Name"
                        {...field}
                        // disabled={!isOtpVerified}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5">
              <FormField
                control={form.control}
                name="employee_referral_code"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <FormControl>
                      <Input
                        className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Employee Referral Code"
                        {...field}
                        // disabled={!isOtpVerified}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full px-1 lg:px-1.5 2xl:px-2.5">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <FormControl>
                      <Input
                        type="number"
                        className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Age"
                        {...field}
                        // disabled={!isOtpVerified}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full px-1 lg:px-1.5 2xl:px-2.5">
              <FormField
                control={form.control}
                name="preferred_role"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      // disabled={!isOtpVerified}
                    >
                      <SelectTrigger className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Preferred Role" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300">
                        {dropdowns.roles.map((role) => (
                          <SelectItem key={role?.value} value={String(role?.value)}>
                            {role?.label || "-"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5">
              <FormField
                control={form.control}
                name="current_salary"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Current Salary (Month)"
                        {...field}
                        // disabled={!isOtpVerified}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5 mb-1.5 lg:mb-2.5 2xl:mb-3.5">
              <FormField
                control={form.control}
                name="expected_salary"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Expected Salary (Month)"
                        {...field}
                        // disabled={!isOtpVerified}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>

            <div
              className={`max-sm:hidden w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-120px)] xl:w-[calc(100%-140px)] 2xl:w-[calc(100%-180px)] 3xl:w-[calc(100%-200px)] px-[4px] lg:px-[6px] 2xl:px-[10px] mb-[10px] lg:mb-0 ${
                isDraggingDesktop ? "border-2 border-blue-500 rounded-lg" : ""
              }`}
              onDragOver={(e) => handleDragOver(e, true)}
              onDragLeave={(e) => handleDragLeave(e, true)}
              onDrop={(e) => handleDrop(e, true)}
            >
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                    <FormControl>
                      <div className="flex items-center">
                        <label className="text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] w-[100px] lg:w-[100px] 2xl:w-[120px] 3xl:w-[145px] h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[50px] flex items-center p-[4px_10px] lg:p-[6px_15px] 3xl:p-[10px_25px] bg-[#b3d5ff] rounded-full cursor-pointer hover:bg-[#c8e1ff] transition-background duration-300">
                          <Image src="/images/icon-upload.svg" alt="icon-upload" width={26} height={21} />
                          <span className="font-medium ml-1 lg:ml-1.5">Choose</span>
                          <input
                            type="file"
                            accept=".pdf,.jpeg,.png"
                            className="hidden"
                            onChange={handleFileChange}
                            // disabled={!isOtpVerified}
                          />
                        </label>
                        <span className="text-xs lg:text-xs 2xl:text-base leading-none font-normal text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis flex-1 ml-1 lg:ml-1.5">
                          {selectedFile
                            ? `${truncateFilename(selectedFile.name)} (${getFileTypeDisplay(selectedFile, null)})`
                            : selectedFileName
                            ? `${truncateFilename(selectedFileName.replace("uploads/job-applications/", ""))} (${getFileTypeDisplay(
                                null,
                                selectedFileName
                              )})`
                            : "No file chosen"}
                        </span>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[180px] 3xl:w-[200px] px-[4px] lg:px-[6px] 2xl:px-[10px]">
              <Button
                className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-bold text-white w-full max-w-[140px] lg:max-w-[160px] 2xl:max-w-[180px] 3xl:max-w-[200px] h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[50px] 3xl:h-[55px] flex items-center justify-between bg-base2 rounded-[20px] lg:rounded-[30px] 2xl:rounded-[40px] 3xl:rounded-[60px] p-[4px] lg:p-[6px] 2xl:p-[8px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
                type="submit"
                disabled={loading || !isOtpVerified}
              >
                <span className="px-1 lg:px-3.5">{loading ? "Submitting..." : "Submit"}</span>
                <Image src="/images/icon-careerBtn.svg" alt="careerBtn" width={40} height={40} className="w-5 lg:w-6 2xl:w-8 h-auto" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
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
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import api from "@/lib/api/axios";
// import Cookies from "js-cookie";
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import toast, { Toaster } from "react-hot-toast";

// // Schema Validation
// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
//   email: z.string().email({ message: "Invalid email address." }),
//   preferred_location: z.string().min(1, { message: "Please select a location." }),
//   referred_employee_name: z.string().optional(),
//   employee_referral_code: z.string().optional(),
//   age: z.string().regex(/^\d+$/, { message: "Age must be a number." }).min(1, { message: "Please enter your age." }),
//   preferred_role: z.string().min(1, { message: "Please select a preferred role." }),
//   current_salary: z
//     .string()
//     .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid salary format (e.g., 50000.00)." })
//     .optional(),
//   expected_salary: z
//     .string()
//     .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid salary format (e.g., 60000.00)." })
//     .optional(),
//   file: z.any().refine((file) => file instanceof File, { message: "Please upload a resume." }),
// });

// const emailSchema = z.object({
//   email: z.string().email({ message: "Invalid email address." }),
// });

// const otpSchema = z.object({
//   otp: z
//     .string()
//     .length(6, { message: "OTP must be 6 digits." })
//     .regex(/^\d{6}$/, { message: "OTP must be numeric." }),
// });

// export default function CareerForm({ jobId, isGeneral }) {
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [showOtpInput, setShowOtpInput] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [dropdowns, setDropdowns] = useState({ locations: [], roles: [] });
//   const [dropdownsLoaded, setDropdownsLoaded] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [selectedFileName, setSelectedFileName] = useState(null);
//   const [isDraggingMobile, setIsDraggingMobile] = useState(false);
//   const [isDraggingDesktop, setIsDraggingDesktop] = useState(false);

//

//   // Forms
//   const emailForm = useForm({
//     resolver: zodResolver(emailSchema),
//     defaultValues: { email: "" },
//   });

//   const otpForm = useForm({
//     resolver: zodResolver(otpSchema),
//     defaultValues: { otp: "" },
//   });

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       phone: "",
//       email: "",
//       preferred_location: "",
//       referred_employee_name: "",
//       employee_referral_code: "",
//       age: "",
//       preferred_role: isGeneral ? "" : jobId?.toString() || "",
//       current_salary: "",
//       expected_salary: "",
//       file: null,
//     },
//   });

//   // Fetch dropdowns
//   const fetchDropdowns = async () => {
//     try {
//       const { data } = await api.get("/career/jobs/dropdowns");
//
//       if (!data.success) throw new Error(data.message || "Failed to fetch dropdowns");
//       setDropdowns(data.data || { locations: [], roles: [] });
//       setDropdownsLoaded(true);
//     } catch (error) {
//       console.error("Error fetching dropdowns:", error);
//       toast.error("Failed to load dropdown options");
//     }
//   };

//   // Auto-fill form
//   const autoFillForm = (data) => {
//
//     const validatedData = {
//       name: data.name || "",
//       phone: data.phone || "",
//       email: data.email || "",
//       preferred_location: dropdowns.locations.some((loc) => loc.value.toString() === data.preferred_location?.toString())
//         ? data.preferred_location.toString()
//         : "",
//       referred_employee_name: data.referred_employee_name || "",
//       employee_referral_code: data.employee_referral_code || "",
//       age: data.age?.toString() || "",
//       preferred_role: isGeneral
//         ? dropdowns.roles.some((role) => role.value.toString() === data.preferred_role?.toString())
//           ? data.preferred_role?.toString() || ""
//           : ""
//         : jobId?.toString() || "",
//       current_salary: data.current_salary?.toString() || "",
//       expected_salary: data.expected_salary?.toString() || "",
//       file: data?.file || null,
//     };
//     form.reset(validatedData);
//   };

//   // Check cookies
//   useEffect(() => {
//     fetchDropdowns();
//   }, []);

//   useEffect(() => {
//     if (dropdownsLoaded) {
//       const savedData = Cookies.get("applicantData");
//

//       if (savedData) {
//         const parsedData = JSON.parse(savedData);
//
//         setEmail(parsedData.email);
//         setSelectedFileName(parsedData.file || null);
//         autoFillForm(parsedData);
//         setIsOtpVerified(true);
//       }
//     }
//   }, [dropdownsLoaded]);

//   // Handle email submission
//   const handleEmailSubmit = async (values) => {
//     try {
//       setLoading(true);
//       const { data } = await api.post("/web/careers/send-otp", { email: values.email });
//
//       if (!data.success) throw new Error(data.message || "Failed to send OTP");
//       setEmail(values.email);
//       form.setValue("email", values.email);
//       setShowOtpInput(true);
//
//       toast.success("OTP sent to your email");
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       toast.error(error.message || "Failed to send OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle OTP submission
//   const handleOtpSubmit = async (values) => {
//     try {
//       setLoading(true);
//       const payload = { email, otp: values.otp.trim() };
//
//       const { data } = await api.post("/web/careers/verify-otp", payload);
//
//       if (!data.success) throw new Error(data.message || "Invalid OTP");
//       if (data.data) {
//         autoFillForm(data.data);
//         Cookies.set("applicantData", JSON.stringify(data.data), {
//           expires: 7,
//           sameSite: "strict",
//         });
//       }
//       setIsOtpVerified(true);
//       setIsModalOpen(false);
//       toast.success("OTP verified successfully");
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       toast.error(error.message || "Invalid or expired OTP");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle form submission
//   const onSubmit = async (values) => {
//     if (!isOtpVerified) {
//       toast.error("Please verify OTP before submitting the form.");
//       setIsModalOpen(true);
//       return;
//     }
//     if (!selectedFile) {
//       toast.error("Please upload your resume.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("applicant[name]", values.name);
//     formData.append("applicant[email]", values.email);
//     formData.append("applicant[phone]", values.phone);
//     formData.append("applicant[preferred_location]", values.preferred_location);
//     formData.append("applicant[referred_employee_name]", values.referred_employee_name || "");
//     formData.append("applicant[employee_referral_code]", values.employee_referral_code || "");
//     formData.append("applicant[age]", values.age);
//     formData.append("applicant[current_salary]", values.current_salary || "");
//     formData.append("applicant[expected_salary]", values.expected_salary || "");
//     formData.append("applicant[file]", selectedFile);
//     formData.append("applicant[is_active]", "true");

//     const apiUrl = isGeneral ? "/web/careers/general_application" : "/web/careers/job_application";
//     if (isGeneral) {
//       formData.append("general_application[role_id]", values.preferred_role);
//     } else {
//       formData.append("job_application[job_id]", jobId || "");
//     }

//     try {
//       setLoading(true);
//
//       const response = await api.post(apiUrl, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//
//       if (!response.data.success) throw new Error(response.data.message || "Failed to submit application");

//       Cookies.set("applicantData", JSON.stringify({ ...values, file: null }), {
//         expires: 7,
//         sameSite: "strict",
//       });

//       // form.reset();
//       // setSelectedFile(null);
//       // setIsOtpVerified(false);
//       // setEmail("");
//       emailForm.reset();
//       otpForm.reset();
//       setShowOtpInput(false);
//       toast.success("Application submitted successfully!");
//     } catch (err) {
//       console.error("Error submitting form:", err);
//       toast.error(err.message || "Failed to submit application.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const validateAndSetFile = (file) => {
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         toast.error("File size should be less than 5MB");
//         return false;
//       }
//       if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
//         toast.error("Please upload a PDF, JPEG, or PNG file");
//         return false;
//       }
//       setSelectedFile(file);
//       form.setValue("file", file);
//       return true;
//     }
//     return false;
//   };

//   // Update handleFileChange to use validateAndSetFile
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     validateAndSetFile(file);
//   };

//   // Add handleDrop function
//   const handleDrop = (event, isDesktop) => {
//     event.preventDefault();
//     const file = event.dataTransfer.files[0];
//     validateAndSetFile(file);
//     isDesktop ? setIsDraggingDesktop(false) : setIsDraggingMobile(false);
//   };

//   // Add handleDragOver and handleDragLeave
//   const handleDragOver = (event, isDesktop) => {
//     event.preventDefault();
//     isDesktop ? setIsDraggingDesktop(true) : setIsDraggingMobile(true);
//   };

//   const handleDragLeave = (event, isDesktop) => {
//     event.preventDefault();
//     isDesktop ? setIsDraggingDesktop(false) : setIsDraggingMobile(false);
//   };

//   return (
//     <div className="p-4">
//       <Toaster position="top-right" />
//       {/* Email Verification Modal */}
//       <Transition appear show={isModalOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={() => {}}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-50" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <Dialog.Title as="h3" className="text-lg font-semibold text-gray-900">
//                     Verify Your Email
//                   </Dialog.Title>
//                   <div className="mt-4">
//                     {!showOtpInput ? (
//                       <Form {...emailForm} key="email-form">
//                         <form onSubmit={emailForm.handleSubmit(handleEmailSubmit)} className="space-y-4">
//                           <FormField
//                             control={emailForm.control}
//                             name="email"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormControl>
//                                   <Input
//                                     type="email"
//                                     className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                                     placeholder="Enter your email"
//                                     {...field}
//                                   />
//                                 </FormControl>
//                                 <FormMessage className="text-red-500 text-sm" />
//                               </FormItem>
//                             )}
//                           />
//                           <Button
//                             type="submit"
//                             className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
//                             disabled={loading}
//                           >
//                             {loading ? (
//                               <span className="flex items-center">
//                                 <svg
//                                   className="animate-spin h-5 w-5 mr-2 text-white"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="none"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
//                                 </svg>
//                                 Sending OTP...
//                               </span>
//                             ) : (
//                               "Send OTP"
//                             )}
//                           </Button>
//                         </form>
//                       </Form>
//                     ) : (
//                       <Form {...otpForm} key="otp-form">
//                         <form onSubmit={otpForm.handleSubmit(handleOtpSubmit)} className="space-y-4">
//                           <FormField
//                             control={otpForm.control}
//                             name="otp"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormControl>
//                                   <Input
//                                     type="text"
//                                     inputMode="numeric"
//                                     className="bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                                     placeholder="Enter OTP"
//                                     {...field}
//                                   />
//                                 </FormControl>
//                                 <FormMessage className="text-red-500 text-sm" />
//                               </FormItem>
//                             )}
//                           />
//                           <Button
//                             type="submit"
//                             className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
//                             disabled={loading}
//                           >
//                             {loading ? (
//                               <span className="flex items-center">
//                                 <svg
//                                   className="animate-spin h-5 w-5 mr-2 text-white"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="none"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
//                                 </svg>
//                                 Verifying...
//                               </span>
//                             ) : (
//                               "Verify OTP"
//                             )}
//                           </Button>
//                         </form>
//                       </Form>
//                     )}
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>

//       {/* Main Form */}
//       <div className={`transition-opacity duration-300`}>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap -mx-1 lg:-mx-1.5 2xl:-mx-2.5">
//             <div
//               className={`max-sm:flex items-center hidden p-2.5 bg-white bg-custom-svg mb-5 w-full mx-1.5 ${
//                 isDraggingMobile ? "border-2 border-blue-500 rounded-lg" : ""
//               }`}
//               onDragOver={(e) => handleDragOver(e, false)}
//               onDragLeave={(e) => handleDragLeave(e, false)}
//               onDrop={(e) => handleDrop(e, false)}
//             >
//               <div className="w-20 lg:w-28">
//                 <label className="text-xs lg:text-sm leading-none font-normal w-20 lg:w-28 h-10 flex items-center p-2.5 lg:p-3.5 bg-base1 rounded-2.5 cursor-pointer hover:bg-[#c8e1ff] transition-colors duration-300">
//                   <Image
//                     src="/images/icon-upload.svg"
//                     alt="icon-upload"
//                     width={26}
//                     height={21}
//                     className="w-3.5 lg:w-6 filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(100%)_saturate(0%)_hue-rotate(137deg)_brightness(107%)_contrast(101%)]"
//                   />
//                   <span className="font-medium ml-1 lg:ml-1.5 text-white">Choose</span>
//                   <input
//                     type="file"
//                     name="file"
//                     accept=".pdf,.jpeg,.png"
//                     className="hidden"
//                     onChange={handleFileChange}
//                     // disabled={!isOtpVerified}
//                   />
//                 </label>
//               </div>
//               <div className="text-xs leading-normal font-normal pl-1.5 lg:pl-3.5 text-gray-700 truncate">
//                 {selectedFile?.name ||
//                   selectedFileName?.replace("uploads/job-applications/", "") ||
//                   "Upload Your Resume; we’ll connect when the right role opens."}
//               </div>
//             </div>

//             <div className="w-full px-1 lg:px-1.5 2xl:px-2.5">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <FormControl>
//                       <Input
//                         className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                         placeholder="Name"
//                         {...field}
//                         // disabled={!isOtpVerified}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5">
//               <FormField
//                 control={form.control}
//                 name="phone"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <FormControl>
//                       <Input
//                         type="tel"
//                         className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                         placeholder="Phone Number"
//                         {...field}
//                         // disabled={!isOtpVerified}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <FormControl>
//                       <Input
//                         type="email"
//                         className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                         placeholder="Enter your email"
//                         {...field}
//                         onFocus={() => {
//
//                           setIsModalOpen(true);
//                         }}
//                         disabled={isOtpVerified}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-full px-1 lg:px-1.5 2xl:px-2.5">
//               <FormField
//                 control={form.control}
//                 name="preferred_location"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <Select
//                       onValueChange={field.onChange}
//                       value={field.value}
//                       // disabled={!isOtpVerified}
//                     >
//                       <SelectTrigger className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
//                         <SelectValue placeholder="Preferred Location" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-white border-gray-300">
//                         {dropdowns.locations.map((location) => (
//                           <SelectItem key={location?.value} value={String(location?.value)}>
//                             {location?.label || "-"}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5">
//               <FormField
//                 control={form.control}
//                 name="referred_employee_name"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <FormControl>
//                       <Input
//                         className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                         placeholder="Referred Employee Name"
//                         {...field}
//                         // disabled={!isOtpVerified}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5">
//               <FormField
//                 control={form.control}
//                 name="employee_referral_code"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <FormControl>
//                       <Input
//                         className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                         placeholder="Employee Referral Code"
//                         {...field}
//                         // disabled={!isOtpVerified}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-full px-1 lg:px-1.5 2xl:px-2.5">
//               <FormField
//                 control={form.control}
//                 name="age"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <FormControl>
//                       <Input
//                         type="number"
//                         className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                         placeholder="Age"
//                         {...field}
//                         // disabled={!isOtpVerified}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-full px-1 lg:px-1.5 2xl:px-2.5">
//               <FormField
//                 control={form.control}
//                 name="preferred_role"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <Select
//                       onValueChange={field.onChange}
//                       value={field.value}
//                       // disabled={!isOtpVerified}
//                     >
//                       <SelectTrigger className="w-full bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
//                         <SelectValue placeholder="Preferred Role" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-white border-gray-300">
//                         {dropdowns.roles.map((role) => (
//                           <SelectItem key={role?.value} value={String(role?.value)}>
//                             {role?.label || "-"}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5">
//               <FormField
//                 control={form.control}
//                 name="current_salary"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <FormControl>
//                       <Input
//                         type="number"
//                         step="0.01"
//                         className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                         placeholder="Current Salary (Month)"
//                         {...field}
//                         // disabled={!isOtpVerified}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-1 lg:px-1.5 2xl:px-2.5 mb-1.5 lg:mb-2.5 2xl:mb-3.5">
//               <FormField
//                 control={form.control}
//                 name="expected_salary"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <FormControl>
//                       <Input
//                         type="number"
//                         step="0.01"
//                         className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                         placeholder="Expected Salary (Month)"
//                         {...field}
//                         // disabled={!isOtpVerified}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <div
//               className={`max-sm:hidden w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-120px)] xl:w-[calc(100%-140px)] 2xl:w-[calc(100%-180px)] 3xl:w-[calc(100%-200px)] px-[4px] lg:px-[6px] 2xl:px-[10px] mb-[10px] lg:mb-0 ${
//                 isDraggingDesktop ? "border-2 border-blue-500 rounded-lg" : ""
//               }`}
//               onDragOver={(e) => handleDragOver(e, true)}
//               onDragLeave={(e) => handleDragLeave(e, true)}
//               onDrop={(e) => handleDrop(e, true)}
//             >
//               <FormField
//                 control={form.control}
//                 name="file"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
//                     <FormControl>
//                       <div className="flex items-center">
//                         <label className="text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] w-[100px] lg:w-[100px] 2xl:w-[120px] 3xl:w-[145px] h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[50px] flex items-center p-[4px_10px] lg:p-[6px_15px] 3xl:p-[10px_25px] bg-[#b3d5ff] rounded-full cursor-pointer hover:bg-[#c8e1ff] transition-background duration-300">
//                           <Image src="/images/icon-upload.svg" alt="icon-upload" width={26} height={21} />
//                           <span className="font-medium ml-1 lg:ml-1.5">Choose</span>
//                           <input
//                             type="file"
//                             accept=".pdf,.jpeg,.png"
//                             className="hidden"
//                             onChange={handleFileChange}
//                             // disabled={!isOtpVerified}
//                           />
//                         </label>
//                         <span className="text-xs lg:text-sm 2xl:text-base leading-none font-normal text-gray-700 whitespace-nowrap text-ellipsis overflow-hidden flex-1 ml-1 lg:ml-1.5">
//                           {selectedFile?.name || selectedFileName?.replace("uploads/job-applications/", "") || "No file chosen"}
//                         </span>
//                       </div>
//                     </FormControl>
//                     <FormMessage className="text-red-500 text-sm" />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <div className="w-full md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[180px] 3xl:w-[200px] px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <Button
//                 className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-bold text-white w-full max-w-[140px] lg:max-w-[160px] 2xl:max-w-[180px] 3xl:max-w-[200px] h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[50px] 3xl:h-[55px] flex items-center justify-between bg-base2 rounded-[20px] lg:rounded-[30px] 2xl:rounded-[40px] 3xl:rounded-[60px] p-[4px] lg:p-[6px] 2xl:p-[8px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
//                 type="submit"
//                 disabled={loading || !isOtpVerified}
//               >
//                 <span className="px-1 lg:px-3.5">{loading ? "Submitting..." : "Submit"}</span>
//                 <Image
//                   src="/images/icon-careerBtn.svg"
//                   alt="careerBtn"
//                   width={40}
//                   height={40}
//                   className="w-5 lg:w-6 2xl:w-8 h-auto"
//                 />
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import api from "@/lib/api/axios";
// import Cookies from "js-cookie";

// // Schema Validation
// const formSchema = z.object({
//   name: z.string().min(2, { message: "Your Name must be at least 2 characters." }),
//   phone: z.string().min(10, { message: "Phone Number must be at least 10 digits." }),
//   email: z.string().email({ message: "Invalid email address." }),
//   preferred_location: z.string().min(1, { message: "Please select a location." }),
//   referred_employee_name: z.string().optional(),
//   employee_referral_code: z.string().optional(),
//   age: z.string().regex(/^\d+$/, { message: "Age must be a number." }).min(1, { message: "Please enter your age." }),
//   preferred_role: z.string().min(1, { message: "Please select a preferred role." }),
//   current_salary: z
//     .string()
//     .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid salary format (e.g., 50000.00)." })
//     .optional(),
//   expected_salary: z
//     .string()
//     .regex(/^\d+(\.\d{1,2})?$/, { message: "Invalid salary format (e.g., 60000.00)." })
//     .optional(),
//   resume: z.any().refine((file) => file instanceof File, { message: "Please upload a resume." }),
// });

// const emailSchema = z.object({
//   email: z.string().email({ message: "Invalid email address." }),
// });

// const otpSchema = z.object({
//   otp: z.string().length(6, { message: "OTP must be 6 digits." }),
// });

// export default function CareerForm({ jobId, isGeneral }) {
//   const [step, setStep] = useState("email"); // email, otp, form
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [dropdowns, setDropdowns] = useState({ locations: [], roles: [] });
//   const [dropdownsLoaded, setDropdownsLoaded] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);

//   // Email form
//   const emailForm = useForm({
//     resolver: zodResolver(emailSchema),
//     defaultValues: { email: "" },
//   });

//   // OTP form
//   const otpForm = useForm({
//     resolver: zodResolver(otpSchema),
//     defaultValues: { otp: "" },
//   });

//   // Main form
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       phone: "",
//       email: "",
//       preferred_location: "",
//       referred_employee_name: "",
//       employee_referral_code: "",
//       age: "",
//       preferred_role: "",
//       current_salary: "",
//       expected_salary: "",
//       resume: null,
//     },
//   });

//   // Fetch dropdowns
//   const fetchDropdowns = async () => {
//     try {
//       const { data } = await api.get("/career/jobs/dropdowns");
//       if (!data.success) throw new Error(data.message || "Failed to fetch dropdowns");
//       setDropdowns(data.data || { locations: [], roles: [] });
//       setDropdownsLoaded(true);
//     } catch (error) {
//       setErrorMessage("Failed to load dropdown options");
//       setTimeout(() => setErrorMessage(null), 5000);
//     }
//   };

//   // Auto-fill form with validated data
//   const autoFillForm = (data) => {
//     const validatedData = {
//       name: data.name || "",
//       phone: data.phone || "",
//       email: data.email || "",
//       preferred_location: dropdowns.locations.some((loc) => loc.value.toString() === data.preferred_location?.toString())
//         ? data.preferred_location.toString()
//         : "",
//       referred_employee_name: data.referred_employee_name || "",
//       employee_referral_code: data.employee_referral_code || "",
//       age: data.age?.toString() || "",
//       preferred_role: dropdowns.roles.some((role) => role.value.toString() === data.preferred_role?.toString())
//         ? data.preferred_role.toString()
//         : "",
//       current_salary: data.current_salary?.toString() || "",
//       expected_salary: data.expected_salary?.toString() || "",
//       resume: null,
//     };
//     form.reset(validatedData);
//   };

//   // Check cookies for auto-fill
//   useEffect(() => {
//     fetchDropdowns();
//   }, []);

//   useEffect(() => {
//     if (dropdownsLoaded) {
//       const savedData = Cookies.get("applicantData");
//       if (savedData) {
//         const parsedData = JSON.parse(savedData);
//         setEmail(parsedData.email);
//         autoFillForm(parsedData);
//         setStep("form");
//       }
//     }
//   }, [dropdownsLoaded]);

//   // Handle email submission
//   const handleEmailSubmit = async (values) => {
//     try {
//       setLoading(true);
//       const { data } = await api.post("/web/careers/send-otp", { email: values.email });
//       if (!data.success) throw new Error(data.message || "Failed to send OTP");
//       setEmail(values.email);
//       setStep("otp");
//       setSuccessMessage("OTP sent to your email");
//       setTimeout(() => setSuccessMessage(null), 5000);
//     } catch (error) {
//       setErrorMessage(error.message || "Failed to send OTP");
//       setTimeout(() => setErrorMessage(null), 5000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle OTP submission
//   const handleOtpSubmit = async (values) => {
//     try {
//       setLoading(true);
//       const { data } = await api.post("/web/careers/verify-otp", { email, otp: values.otp });
//       if (!data.success) throw new Error(data.message || "Invalid OTP");
//       if (data.data) {
//         // Auto-fill form with applicant data
//         autoFillForm(data.data);
//         // Save to cookies
//         Cookies.set("applicantData", JSON.stringify(data.data), {
//           expires: 7,
//           sameSite: "strict",
//         });
//       }
//       form.setValue("email", email);
//       setStep("form");
//       setSuccessMessage("OTP verified successfully");
//       setTimeout(() => setSuccessMessage(null), 5000);
//     } catch (error) {
//       setErrorMessage(error.message || "Invalid or expired OTP");
//       setTimeout(() => setErrorMessage(null), 5000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle form submission
//   const onSubmit = async (values) => {
//     if (!selectedFile) {
//       setErrorMessage("Please upload your resume.");
//       setTimeout(() => setErrorMessage(null), 5000);
//       return;
//     }

//     const formData = new FormData();
//     formData.append("applicant[name]", values.name);
//     formData.append("applicant[email]", values.email);
//     formData.append("applicant[phone]", values.phone);
//     formData.append("applicant[preferred_location]", values.preferred_location);
//     formData.append("applicant[referred_employee_name]", values.referred_employee_name || "");
//     formData.append("applicant[employee_referral_code]", values.employee_referral_code || "");
//     formData.append("applicant[age]", values.age);
//     formData.append("applicant[current_salary]", values.current_salary || "");
//     formData.append("applicant[expected_salary]", values.expected_salary || "");
//     formData.append("applicant[file]", selectedFile);
//     formData.append("applicant[is_active]", "true");

//     const apiUrl = isGeneral ? "/web/careers/general_application" : "/web/careers/job_application";
//     if (isGeneral) {
//       formData.append("general_application[role_id]", values.preferred_role);
//     } else {
//       formData.append("job_application[job_id]", jobId || "");
//     }

//     try {
//       setLoading(true);
//       const response = await api.post(apiUrl, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       if (!response.data.success) throw new Error(response.data.message || "Failed to submit application");

//       // Save form data to cookies (excluding resume)
//       const cookieData = { ...values, resume: null };
//       Cookies.set("applicantData", JSON.stringify(cookieData), {
//         expires: 7,
//         sameSite: "strict",
//       });

//       form.reset();
//       setSelectedFile(null);
//       setSuccessMessage("Application submitted successfully!");
//       setTimeout(() => {
//         setSuccessMessage(null);
//         setStep("email");
//       }, 5000);
//     } catch (err) {
//       setErrorMessage(err.message || "Failed to submit application. Please try again.");
//       setTimeout(() => setErrorMessage(null), 5000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (file.size > 5 * 1024 * 1024) {
//         setErrorMessage("File size should be less than 5MB");
//         setTimeout(() => setErrorMessage(null), 5000);
//         return;
//       }
//       if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
//         setErrorMessage("Please upload a PDF, JPEG, or PNG file");
//         setTimeout(() => setErrorMessage(null), 5000);
//         return;
//       }
//       setSelectedFile(file);
//       form.setValue("resume", file);
//     }
//   };

//   return (
//     <div className="p-4">
//       {successMessage && (
//         <div className="mb-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded">{successMessage}</div>
//       )}
//       {errorMessage && <div className="mb-4 p-4 bg-red-100 text-red-800 border border-red-300 rounded">{errorMessage}</div>}

//       {step === "email" && (
//         <Form {...emailForm}>
//           <form onSubmit={emailForm.handleSubmit(handleEmailSubmit)} className="space-y-4">
//             <FormField
//               control={emailForm.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input type="email" className="bg-white border-white" placeholder="Enter your email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" className="bg-blue-500 text-white" disabled={loading}>
//               {loading ? "Sending OTP..." : "Send OTP"}
//             </Button>
//           </form>
//         </Form>
//       )}

//       {step === "otp" && (
//         <Form {...otpForm}>
//           <form onSubmit={otpForm.handleSubmit(handleOtpSubmit)} className="space-y-4">
//             <FormField
//               control={otpForm.control}
//               name="otp"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Input type="text" className="bg-white border-white" placeholder="Enter OTP" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" className="bg-blue-500 text-white" disabled={loading}>
//               {loading ? "Verifying..." : "Verify OTP"}
//             </Button>
//           </form>
//         </Form>
//       )}

//       {step === "form" && (
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap -mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
//             <div className="max-sm:flex items-center hidden p-[10px] bg-white bg-custom-svg mb-[20px]">
//               <div className="w-[80px] lg:w-[110px]">
//                 <div className="flex items-center">
//                   <label className="text-[12px] lg:text-[14px] leading-none font-normal w-[80px] lg:w-[110px] h-[40px] flex items-center p-[5px_10px] lg:p-[10px_15px] bg-base1 rounded-[10px] cursor-pointer hover:bg-[#c8e1ff] transition-background duration-300">
//                     <Image
//                       src="/images/icon-upload.svg"
//                       alt="icon-upload"
//                       width={26}
//                       height={21}
//                       className="w-[15px] lg:w-[25px] filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(100%)_saturate(0%)_hue-rotate(137deg)_brightness(107%)_contrast(101%)]"
//                     />
//                     <span className="font-medium ml-[4px] lg:ml-[6px] 3xl:ml-[8px] text-white">Choose</span>
//                     <input
//                       type="file"
//                       name="resume"
//                       accept=".pdf,image/jpeg,image/png"
//                       className="hidden"
//                       onChange={handleFileChange}
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div className="text-[12px] leading-normal font-normal pl-[5px] lg:pl-[15px]">
//                 Upload Your Resume; we'll connect when the right role opens up.
//               </div>
//             </div>
//             <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <FormControl>
//                       <Input className="bg-white border-white" placeholder="Name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <FormField
//                 control={form.control}
//                 name="phone"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <FormControl>
//                       <Input type="tel" className="bg-white border-white" placeholder="Phone Number" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <FormControl>
//                       <Input type="email" className="bg-white border-white" placeholder="Email Address" {...field} disabled />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <FormField
//                 control={form.control}
//                 name="preferred_location"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <Select onValueChange={field.onChange} value={field.value}>
//                       <SelectTrigger className="w-full bg-white border-white">
//                         <SelectValue placeholder="Preferred Location" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-white border-white">
//                         {dropdowns.locations.map((location) => (
//                           <SelectItem key={location?.value} value={String(location?.value)}>
//                             {location?.label || "-"}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <FormField
//                 control={form.control}
//                 name="referred_employee_name"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <FormControl>
//                       <Input className="bg-white border-white" placeholder="Referred Employee Name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <FormField
//                 control={form.control}
//                 name="employee_referral_code"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <FormControl>
//                       <Input className="bg-white border-white" placeholder="Employee Referral Code" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <FormField
//                 control={form.control}
//                 name="age"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <FormControl>
//                       <Input type="number" className="bg-white border-white" placeholder="Age" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <FormField
//                 control={form.control}
//                 name="preferred_role"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <Select onValueChange={field.onChange} value={field.value}>
//                       <SelectTrigger className="w-full bg-white border-white">
//                         <SelectValue placeholder="Preferred Role" />
//                       </SelectTrigger>
//                       <SelectContent className="bg-white border-white">
//                         {dropdowns.roles.map((role) => (
//                           <SelectItem key={role?.value} value={String(role?.value)}>
//                             {role?.label || "-"}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <FormField
//                 control={form.control}
//                 name="current_salary"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <FormControl>
//                       <Input
//                         type="number"
//                         step="0.01"
//                         className="bg-white border-white"
//                         placeholder="Current Salary (Month)"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px] mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
//               <FormField
//                 control={form.control}
//                 name="expected_salary"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <FormControl>
//                       <Input
//                         type="number"
//                         step="0.01"
//                         className="bg-white border-white"
//                         placeholder="Expected Salary (Month)"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="max-sm:hidden w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-120px)] xl:w-[calc(100%-140px)] 2xl:w-[calc(100%-180px)] 3xl:w-[calc(100%-200px)] px-[4px] lg:px-[6px] 2xl:px-[10px] mb-[10px] lg:mb-0">
//               <FormField
//                 control={form.control}
//                 name="resume"
//                 render={({ field }) => (
//                   <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
//                     <FormControl>
//                       <div className="flex items-center">
//                         <label className="text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] w-[100px] lg:w-[100px] 2xl:w-[120px] 3xl:w-[145px] h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[50px] flex items-center p-[4px_10px] lg:p-[6px_15px] 3xl:p-[10px_25px] bg-[#b3d5ff] rounded-full cursor-pointer hover:bg-[#c8e1ff] transition-background duration-300">
//                           <Image src="/images/icon-upload.svg" alt="icon-upload" width={26} height={21} />
//                           <span className="font-medium ml-[4px] lg:ml-[6px] 3xl:ml-[8px]">Choose</span>
//                           <input type="file" accept=".pdf,image/jpeg,image/png" className="hidden" onChange={handleFileChange} />
//                         </label>
//                         <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-none font-normal text-[#373737] whitespace-nowrap text-ellipsis overflow-hidden flex-1 ml-[4px] lg:ml-[6px] 2xl:ml-[8px]">
//                           {selectedFile?.name || "No file chosen"}
//                         </span>
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-full md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[180px] 3xl:w-[200px] px-[4px] lg:px-[6px] 2xl:px-[10px]">
//               <Button
//                 className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-bold text-white w-full max-w-[140px] lg:max-w-[160px] 2xl:max-w-[180px] 3xl:max-w-[200px] h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[50px] 3xl:h-[55px] flex items-center justify-between bg-base2 rounded-[20px] lg:rounded-[30px] 2xl:rounded-[40px] 3xl:rounded-[60px] p-[4px] lg:p-[6px] 2xl:p-[8px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
//                 type="submit"
//                 disabled={loading}
//               >
//                 <span className="px-[4px] lg:px-[15px] 2xl:px-[20px]">{loading ? "Submitting..." : "Submit"}</span>
//                 <Image
//                   src={"/images/icon-careerBtn.svg"}
//                   alt="careerBtn"
//                   width={40}
//                   height={40}
//                   className="w-[20px] lg:w-[25px] 2xl:w-[35px] 3xl:w-[40px] h-auto aspect-4/4 block"
//                 />
//               </Button>
//             </div>
//           </form>
//         </Form>
//       )}
//     </div>
//   );
// }
