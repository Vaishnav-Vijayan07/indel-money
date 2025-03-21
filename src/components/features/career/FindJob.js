import Image from "next/image"
import Link from "next/link"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


function CareerForm() {
    return (
        <div>sdfsf</div>
        // <Form {...form}>
        //     <form
        //         onSubmit={form.handleSubmit(onSubmit)}
        //         className="w-full flex items-center bg-base1 rounded-[20px] lg:rounded-[30px] 2xl:rounded-[36px] p-[10px] lg:p-[15px] 2xl:p-[20px]"
        //     >
        //         <div
        //             className="w-[220px]">
        //             <div
        //                 className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] text-white font-bold"
        //             >
        //                 Filter
        //             </div>
        //         </div>
        //         <div
        //             className="w-[calc((100%-220px)/3)]"
        //         >
        //             <FormField
        //                 control={form.control}
        //                 name="username"
        //                 render={({ field }) => (
        //                     <FormItem>
        //                         <FormLabel>Username</FormLabel>
        //                         <FormControl>
        //                             <Input placeholder="shadcn" {...field} />
        //                         </FormControl>
        //                         <FormDescription>This is your public display name.</FormDescription>
        //                         <FormMessage />
        //                     </FormItem>
        //                 )}
        //             />
        //         </div>
        //         <div
        //             className="w-[calc((100%-220px)/3)]"
        //         >
        //             1
        //         </div>
        //         <div
        //             className="w-[calc((100%-220px)/3)]"
        //         >
        //             1
        //         </div>
        //     </form>
        // </Form>
    )
}

function CareerBtn() {
    return (
        <Link
            href="/"
            className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-bold text-white h-[35px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px] 3xl:h-[55px] flex items-center bg-base2 rounded-[20px] lg:rounded-[40px] 2xl:rounded-[80px] 3xl:rounded-[100px] p-[4px] lg:p-[6px] 2xl:p-[8px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
        >
            <span
                className="px-[4px] lg:px-[15px] 2xl:px-[20px]">
                VIEW ACTIVE ROLES
            </span>
            <Image
                src={"/images/icon-careerBtn.svg"}
                alt="careerBtn"
                width={40}
                height={40}
                className="w-[25px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[40px] h-auto aspect-4/4 block"
            />
        </Link>
    )
}

export default function FindJob() {
    return (
        <section className="w-full block py-[40px_20px] lg:py-[60px_30px] 2xl:py-[80px_40px] 3xl:py-[100px_50px]">
            <div className="container">
                <div className="flex justify-between mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">
                    <div className="text-title1">
                        Find Your
                        <span className="font-bold text-base2">
                            {""}   Ideal Job
                        </span>
                    </div>
                    <div>
                        <CareerBtn />
                    </div>
                </div>
                <div
                    className=""
                >
                    <CareerForm />
                </div>
            </div>
        </section>
    )
}
