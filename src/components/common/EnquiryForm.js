"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from "next/image"

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


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export default function EnquiryForm() {


    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            yourName: "",
            contactNumber: "",
            emailAddress: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    className=""
                    control={form.control}
                    name="yourName"
                    render={({ field }) => (
                        <FormItem
                            className="relative z-0 mb-2 xl:mb-3 3xl:mb-5"
                        >
                            <Image src={"/images/enquiry-yourName.svg"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    width: '18px',
                                    height: 'auto',
                                }}
                                className="absolute z-1 top-0 left-[15px] bottom-0 m-auto" alt="yourName"
                            />
                            <FormControl className="pl-[40px]">
                                <Input className="bg-white border-white" placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    className=""
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                        <FormItem
                            className="relative z-0 mb-2 xl:mb-3 3xl:mb-5"
                        >
                            <Image src={"/images/enquiry-contactNumber.svg"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    width: '18px',
                                    height: 'auto',
                                }}
                                className="absolute z-1 top-0 left-[15px] bottom-0 m-auto" alt="contactNumber"
                            />
                            <FormControl className="pl-[40px]">
                                <Input className="bg-white border-white" placeholder="Contact Number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    className=""
                    control={form.control}
                    name="emailAddress"
                    render={({ field }) => (
                        <FormItem
                            className="relative z-0 mb-2 xl:mb-3 3xl:mb-5"
                        >
                            <Image src={"/images/enquiry-emailAddress.svg"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    width: '18px',
                                    height: 'auto',
                                }}
                                className="absolute z-1 top-0 left-[15px] bottom-0 m-auto" alt="emailAddress"
                            />
                            <FormControl className="pl-[40px]">
                                <Input className="bg-white border-white" placeholder="Email Address" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormItem
                    className="relative z-0 mb-2 xl:mb-3 3xl:mb-5"
                >
                    <Select>
                        <SelectTrigger className="w-full bg-white border-white">
                            <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-white">
                            <SelectItem value="1">Gold Loan</SelectItem>
                            <SelectItem value="2">Other Loans</SelectItem>
                            <SelectItem value="3">Door Step Gold Loan</SelectItem>
                        </SelectContent>
                    </Select>
                </FormItem>
                <Button className="btn btn-base2 ml-auto block max-w-[80px] lg:max-w-[75px] xl:max-w-[95px] 2xl:max-w-[115px] 3xl:max-w-[140px]" type="submit">Submit</Button>
            </form>
        </Form>
    )
}
