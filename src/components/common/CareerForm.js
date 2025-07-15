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
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toSentenceCase } from "@/lib/utils/toSentenceCase";

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

function CareerFormInner({ jobId, isGeneral }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
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

  // // Dynamic form schema
  // const formSchema = useMemo(() => {
  //   return z.object({
  //     ...baseSchema,
  //     file:
  //       selectedFile || selectedFileName
  //         ? z.any().optional()
  //         : z.any().refine((file) => file instanceof File, { message: "Please upload a resume." }),
  //   });
  // }, [selectedFile, selectedFileName]);

  const formSchema = useMemo(() => {
    return z
      .object({
        ...baseSchema,
        preferred_role_name: z.string().optional(), // Add this line
        file:
          selectedFile || selectedFileName
            ? z.any().optional()
            : z.any().refine((file) => file instanceof File, { message: "Please upload a resume." }),
      })
      .refine(
        (data) => {
          // Only require preferred_role_name if isGeneral and preferred_role is "Others"
          if (isGeneral && data.preferred_role === "Others") {
            return data.preferred_role_name && data.preferred_role_name.trim().length > 0;
          }
          return true;
        },
        {
          message: "Please enter a role name.",
          path: ["preferred_role_name"],
        }
      );
  }, [selectedFile, selectedFileName, isGeneral]);

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

    const recaptchaToken = await executeRecaptcha("job_form");

    if (!recaptchaToken) {
      toast.error("Failed to get reCAPTCHA token. Please try again.");
      setIsSubmitting(false);
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
    // Append reCAPTCHA token
    formData.append("recaptcha", recaptchaToken);

    if (selectedFile) {
      formData.append("applicant[file]", selectedFile);
    }
    formData.append("applicant[is_active]", "true");

    const apiUrl = isGeneral ? "/web/careers/general_application" : "/web/careers/job_application";
    if (isGeneral) {
      formData.append("general_application[role_id]", values.preferred_role);
      formData.append("general_application[preferred_role_name]", values.preferred_role_name);
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
                            {toSentenceCase(location?.label) || "-"}
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
                            {toSentenceCase(role?.label) || "-"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>
            {console.log("NEXT_PUBLIC_ROLE_ID", process.env.NEXT_PUBLIC_ROLE_ID)}
            {isGeneral && form.watch("preferred_role") == process.env.NEXT_PUBLIC_ROLE_ID && (
              <div className="w-full px-1 lg:px-1.5 2xl:px-2.5">
                <FormField
                  control={form.control}
                  name="preferred_role_name"
                  render={({ field }) => (
                    <FormItem className="mb-2 xl:mb-3 2xl:mb-4">
                      <FormControl>
                        <Input
                          className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Enter Role Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />
              </div>
            )}

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
                        placeholder="Current Monthly Salary"
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
                        placeholder="Expected Monthly Salary"
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
                            ? `${truncateFilename(
                                selectedFileName.replace("uploads/job-applications/", "")
                              )} (${getFileTypeDisplay(null, selectedFileName)})`
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
                <Image
                  src="/images/icon-careerBtn.svg"
                  alt="careerBtn"
                  width={40}
                  height={40}
                  className="w-5 lg:w-6 2xl:w-8 h-auto"
                />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default function CareerForm({ jobId, isGeneral }) {
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
      <CareerFormInner jobId={jobId} isGeneral={isGeneral} />
    </GoogleReCaptchaProvider>
  );
}
