import Image from "next/image";
import Link from "next/link";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/custom-alert-dialog"
import CareerForm from "@/components/common/CareerForm";

function JobResultAlert() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div
                    className="text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[16px] leading-[1] font-bold text-white h-[25px] lg:h-[25px] xl:h-[30px] 2xl:h-[35px] 3xl:h-[48px] flex items-center bg-base2 rounded-[20px] lg:rounded-[40px] 2xl:rounded-[80px] 3xl:rounded-[100px] p-[4px] xl:p-[6px] 2xl:p-[8px] cursor-pointer transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
                >
                    <span className="px-[2px] lg:px-[4px] 2xl:px-[6px]">
                        APPLY NOW
                    </span>
                    <Image
                        src="/images/icon-careerBtn.svg"
                        alt="careerBtn"
                        width={30}
                        height={30}
                        className="w-[15px] lg:w-[15px] xl:w-[20px] 2xl:w-[25px] 3xl:w-[30px] h-auto aspect-4/4 block"
                    />
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <div className="w-full max-w-[340px] sm:max-w-[360px] md:max-w-[376px] lg:max-w-[420px] xl:max-w-[468px] 2xl:max-w-[576px] 3xl:max-w-[668px] mx-auto bg-[#dceafb] rounded-[15px] lg:rounded-[30px] 2xl:rounded-[36px] p-[20px_25px] lg:p-[20px_30px] xl:p-[30px_50px] 2xl:p-[40px_60px] 3xl:p-[50px_80px] relative z-0">
                    <AlertDialogCancel
                        className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] focus:outline-0 flex gap-[4px] lg:gap-[6px] 2xl:gap-[10px] absolute z-0 top-[15px] xl:top-[20px] 2xl:top-[25px] 3xl:top-[30px] right-[15px] xl:right-[20px] 2xl:right-[25px] 3xl:right-[30px] transition-color cursor-pointer hover:text-base2"
                    >
                        Close
                        <Image
                            src="/images/modal-cancel.svg"
                            alt="modal-cancel"
                            width={20}
                            height={20}
                        />
                    </AlertDialogCancel>
                    <div className="w-full h-auto block">
                        <div className="w-full mb-[10px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
                            <AlertDialogTitle className="text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[48px] text-black font-bold flex items-center mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                                Make Your <span className="text-base2 font-bold">&nbsp;Move</span></AlertDialogTitle>
                            <div className="text-sm-1">Upload Your Resume ; we&apos;ll connect when the right role opens up.</div>
                        </div>
                        <CareerForm />
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default function JobResultBox({ item, variant = 'default' }) {
    return (
        <div className={`${variant === "activeJobs" ? "hover:shadow-[0_15px_30px_rgba(23,71,158,0.10)]" : ""} group w-full h-auto bg-[#dceafb] border-1 border-[#dceafb] rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] 2xl:rounded-[30px] 3xl:rounded-[36px] p-[10px_20px] lg:p-[10px_15px] xl:p-[18px_25px] 2xl:p-[20px_30px] 3xl:p-[25px_30px] hover:bg-[#c7e0ff] hover:border-base1/05 transition-all duration-300`}>
            <div className="w-full h-auto block border-b-[1px] border-dashed border-[#7670b3] mb-[8px] xl:mb-[10px] 2xl:mb-[20px]">
                <div className="flex flex-wrap items-center mb-[4px] xl:mb-[6px] 2xl:mb-[8px]">
                    <div className="w-1/2">
                        <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] font-bold leading-[1] text-black">
                            {item.job_title}
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end items-center gap-[5px] lg:gap-[10px] 2xl:gap-[20px]">
                        <div>
                            <Link href="/" className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-normal leading-[1] text-[#484877] w-full h-auto flex items-center gap-[2px] lg:gap-[4px] 2xl:gap-[6px] hover:text-base1">
                                <Image
                                    src="/images/icon-share.svg"
                                    alt="share"
                                    width={20}
                                    height={20}
                                    className="w-[10px] lg:w-[15px] 2xl:w-[20px] h-auto aspect-4/4 block"
                                />
                                Share
                            </Link>
                        </div>
                        <div>
                            <JobResultAlert />
                        </div>
                    </div>
                </div>
                <div className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-medium text-[#484877] mb-[5px] lg:mb-[10px] 2xl:mb-[20px]">
                    {variant === "default" && `Location: ${item.location}`}
                    {variant === "activeJobs" && `Experience: ${item.experience}`}
                </div>
            </div>
            <div className="w-full h-auto block">
                <div className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-bold text-[#4b4b4b] mb-[4px] lg:mb-[6px] 2xl:mb-[10px]">
                    Job Description
                </div>
                <div className={`${variant === "default" ? "line-clamp-2" : ""} text-sm-1 text-[#4d4d4d]`}>
                    {item.job_description}
                </div>
            </div>
        </div>
    );
}