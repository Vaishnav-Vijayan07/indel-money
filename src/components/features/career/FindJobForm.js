"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Schema Validation
const formSchema = z.object({
    yourState: z.string().nonempty({
        message: "Please select a state.",
    }),
    preferredLocation: z.string().nonempty({
        message: "Please select a location.",
    }),
    preferredRole: z.string().nonempty({
        message: "Please select a role.",
    }),
})

export default function FindJobForm({ variant = 'default' }) {

    // Define form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            yourName: "",
            contactNumber: "",
            emailAddress: "",
            serviceType: "",
        },
    })

    // Handle form submission
    function onSubmit(values) {
        console.log("Form submitted:", values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={`${variant === "activeJobs" ? "bg-[#cae5f4]" : "bg-base1"} w-full flex flex-wrap items-center rounded-[20px] lg:rounded-[30px] 2xl:rounded-[36px] p-[15px_10px] lg:p-[20px_10px] 2xl:p-[25px_10px]`}>
                <div
                    className="w-full lg:w-[80px] xl:w-[140px] 2xl:w-[160px] 3xl:w-[220px] px-[5px] lg:px-[10px] 2xl:px-[15px] mb-[10px] lg:mb-0">
                    <div
                        className={`${variant === "activeJobs" ? "text-[#4b4b4b]" : "text-white"} text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] font-bold`}
                    >
                        Filter
                    </div>
                </div>
                <div className="w-full lg:w-[calc((100%-80px)/3)] xl:w-[calc((100%-140px)/3)] 2xl:w-[calc((100%-160px)/3)] 3xl:w-[calc((100%-220px)/3)] px-[5px] lg:px-[10px] 2xl:px-[15px] mb-[10px] lg:mb-0">
                    {/* Select Service Field */}
                    <FormField
                        control={form.control}
                        name="yourState"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full bg-white border-white rounded-[10px] lg:rounded-[12px] 2xl:rounded-[16px]">
                                        <SelectValue placeholder="-- Select your state --" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-white">
                                        <SelectItem value="gold-loan">Gold Loan</SelectItem>
                                        <SelectItem value="other-loans">Other Loans</SelectItem>
                                        <SelectItem value="doorstep-gold-loan">Door Step Gold Loan</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-full lg:w-[calc((100%-80px)/3)] xl:w-[calc((100%-140px)/3)] 2xl:w-[calc((100%-160px)/3)] 3xl:w-[calc((100%-220px)/3)] px-[5px] lg:px-[10px] 2xl:px-[15px] mb-[10px] lg:mb-0">
                    {/* Select Service Field */}
                    <FormField
                        control={form.control}
                        name="preferredLocation"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full bg-white border-white rounded-[10px] lg:rounded-[12px] 2xl:rounded-[16px]">
                                        <SelectValue placeholder="-- Select your preferred location --" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-white">
                                        <SelectItem value="gold-loan">Gold Loan</SelectItem>
                                        <SelectItem value="other-loans">Other Loans</SelectItem>
                                        <SelectItem value="doorstep-gold-loan">Door Step Gold Loan</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="w-full lg:w-[calc((100%-80px)/3)] xl:w-[calc((100%-140px)/3)] 2xl:w-[calc((100%-160px)/3)] 3xl:w-[calc((100%-220px)/3)] px-[5px] lg:px-[10px] 2xl:px-[15px] mb-[10px] lg:mb-0">
                    {/* Select Service Field */}
                    <FormField
                        control={form.control}
                        name="preferredRole"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full bg-white border-white rounded-[10px] lg:rounded-[12px] 2xl:rounded-[16px]">
                                        <SelectValue placeholder="-- Select your preferred role --" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white border-white">
                                        <SelectItem value="gold-loan">Gold Loan</SelectItem>
                                        <SelectItem value="other-loans">Other Loans</SelectItem>
                                        <SelectItem value="doorstep-gold-loan">Door Step Gold Loan</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    )
}