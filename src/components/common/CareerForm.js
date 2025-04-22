"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { optional, z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import Image from "next/image";

// Schema Validation
const formSchema = z.object({
    yourName: z.string().min(2, {
        message: "Your Name must be at least 2 characters.",
    }),
    phoneNumber: z.string().min(10, {
        message: "Phone Number must be at least 10 digits.",
    }),
    emailAddress: z.string().email({
        message: "Invalid email address.",
    }),
    age: z.string().nonempty({
        message: "Please select a service.",
    }),
    fileUpload: z.string().nonempty({
        message: "Please upload your resume.",
    }),
})

export default function CareerForm() {

    // Define form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            yourName: "",
            phoneNumber: "",
            emailAddress: "",
            preferredLocation: "",
            referredName: "",
            referralCode: "",
            age: "",
            preferredRole: "",
            currentSalary: "",
            expectedSalary: "",
            fileUpload: "",
        },
    })

    // Handle form submission
    function onSubmit(values) {
        console.log("Form submitted:", values)
    }

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap -mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
                <div className="max-sm:flex items-center hidden p-[10px] bg-white bg-custom-svg mb-[20px]">
                    <div className="w-[110px]">
                        <div className="flex items-center">
                            <label className="text-[14px] leading-[1] font-normal w-[110px] h-[40px] flex items-center p-[10px_15px] bg-[#17479E] rounded-[10px] cursor-pointer hover:bg-[#c8e1ff] transition-background duration-300">
                                <Image
                                className="filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(100%)_saturate(0%)_hue-rotate(137deg)_brightness(107%)_contrast(101%)]"
                                    src="/images/icon-upload.svg"
                                    alt="icon-upload"
                                    width={26}
                                    height={21}
                                />
                                <span className="font-medium ml-[4px] lg:ml-[6px] 3xl:ml-[8px] text-white">Choose</span>
                                <input
                                    type="file"
                                    name="fileUpload"
                                    accept="image/*,.pdf"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="text-sm1 pl-[15px] text-black text-[13px]">Upload Your Resume ; we&apos;ll connect when the right role opens up.</div>
                </div>
                <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
                    <FormField
                        control={form.control}
                        name="yourName"
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
                        name="phoneNumber"
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
                        name="emailAddress"
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
                        name="preferredLocation"
                        render={({ field }) => (
                            <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full bg-white border-white">
                                        <SelectValue placeholder="Preferred Location" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-white">
                                        <SelectItem value="1">Preferred Location 1</SelectItem>
                                        <SelectItem value="2">Preferred Location 2</SelectItem>
                                        <SelectItem value="3">Preferred Location 3</SelectItem>
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
                        name="referredName"
                        render={({ field }) => (
                            <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                                <FormControl>
                                    <Input className="bg-white border-white" placeholder="Referred employee name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px]">
                    <FormField
                        control={form.control}
                        name="referralCode"
                        render={({ field }) => (
                            <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                                <FormControl>
                                    <Input className="bg-white border-white" placeholder="Employee referral code" {...field} />
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
                                    <Input className="bg-white border-white" placeholder="Age" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-full px-[4px] lg:px-[6px] 2xl:px-[10px]">
                    <FormField
                        control={form.control}
                        name="preferredRole"
                        render={({ field }) => (
                            <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full bg-white border-white">
                                        <SelectValue placeholder="Preferred Role" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-white">
                                        <SelectItem value="1">Preferred Role 1</SelectItem>
                                        <SelectItem value="2">Preferred Role 2</SelectItem>
                                        <SelectItem value="3">Preferred Role 3</SelectItem>
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
                        name="currentSalary"
                        render={({ field }) => (
                            <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                                <FormControl>
                                    <Input className="bg-white border-white" placeholder="Current Salary (Month)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-1/2 px-[4px] lg:px-[6px] 2xl:px-[10px] mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                    <FormField
                        control={form.control}
                        name="expectedSalary"
                        render={({ field }) => (
                            <FormItem className="mb-2 xl:mb-3 3xl:mb-4">
                                <FormControl>
                                    <Input className="bg-white border-white" placeholder="Expected Salary (Month)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="max-sm:hidden w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-120px)] xl:w-[calc(100%-140px)] 2xl:w-[calc(100%-180px)] 3xl:w-[calc(100%-200px)] px-[4px] lg:px-[6px] 2xl:px-[10px] mb-[10px] lg:mb-0">
                    <div className="flex items-center">
                        <label className="text-[12px] lg:text-[12px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-normal text-[#373737] w-[100px] lg:w-[100px] 2xl:w-[120px] 3xl:w-[145px] h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[50px] flex items-center p-[4px_10px] lg:p-[6px_15px] 3xl:p-[10px_25px] bg-[#b3d5ff] rounded-full cursor-pointer hover:bg-[#c8e1ff] transition-background duration-300">
                            <Image
                                src="/images/icon-upload.svg"
                                alt="icon-upload"
                                width={26}
                                height={21}
                            />
                            <span className="font-medium ml-[4px] lg:ml-[6px] 3xl:ml-[8px]">Choose</span>
                            <input
                                type="file"
                                name="fileUpload"
                                accept="image/*,.pdf"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                        <span className="text-[12px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-normal text-[#373737] whitespace-nowrap text-ellipsis overflow-hidden flex-1 ml-[4px] lg:ml-[6px] 2xl:ml-[8px]">{selectedFile ? selectedFile.name : "No file chosen"}</span>
                    </div>
                </div>
                <div className="max-sm:hidden w-full md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[180px] 3xl:w-[200px] px-[4px] lg:px-[6px] 2xl:px-[10px]">
                    <Button className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-bold text-white w-full max-w-[140px] lg:max-w-[160px] 2xl:max-w-[180px] 3xl:max-w-[200px] h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[50px] 3xl:h-[55px] flex items-center justify-between bg-base2 rounded-[20px] lg:rounded-[30px] 2xl:rounded-[40px] 3xl:rounded-[60px] p-[4px] lg:p-[6px] 2xl:p-[8px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]" type="submit">
                        <span
                            className="px-[4px] lg:px-[15px] 2xl:px-[20px]">
                            Submit
                        </span>
                        <Image
                            src={"/images/icon-careerBtn.svg"}
                            alt="careerBtn"
                            width={40}
                            height={40}
                            className="w-[20px] lg:w-[25px] 2xl:w-[35px] 3xl:w-[40px] h-auto aspect-4/4 block"
                        />
                    </Button>
                </div>
            </form>
        </Form>
    )
}
