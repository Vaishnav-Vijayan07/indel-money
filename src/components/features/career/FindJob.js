import Image from "next/image"
import Link from "next/link"
import FindJobForm from "./FindJobForm";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const jobLocations = [
    {
        src: "/images/job-location-1.jpg",
        alt: "job-location",
        title: "Kerala",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-2.jpg",
        alt: "job-location",
        title: "Tamilnadu",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-3.jpg",
        alt: "job-location",
        title: "Karnataka",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-4.jpg",
        alt: "job-location",
        title: "Andra Pradesh",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-5.jpg",
        alt: "job-location",
        title: "Telengana",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-6.jpg",
        alt: "job-location",
        title: "Odisha",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-7.jpg",
        alt: "job-location",
        title: "Maharashtra",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-8.jpg",
        alt: "job-location",
        title: "Madhya Pradesh",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-9.jpg",
        alt: "job-location",
        title: "Delhi - NCR",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-10.jpg",
        alt: "job-location",
        title: "Puducherry",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-11.jpg",
        alt: "job-location",
        title: "Coming Soon",
        link: "/",
        status: false,
    },
    {
        src: "/images/job-location-12.jpg",
        alt: "job-location",
        title: "Coming Soon",
        link: "/",
        status: false,
    },
    {
        src: "/images/job-location-1.jpg",
        alt: "job-location",
        title: "Kerala",
        link: "/",
        status: true,
    },
    {
        src: "/images/job-location-2.jpg",
        alt: "job-location",
        title: "Tamilnadu",
        link: "/",
        status: true,
    },
];

const jobResults = [
    {
        job_title: "Senior Accountant",
        location: "Kochi, Kerala",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis"
    },
    {
        job_title: "IT Administrator",
        location: "Mumbai, Maharashtra",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis"
    },
];

function JobLocationBox({ item }) {
    return (
        <Link href={item.link} className={`${item.status ? "group opacity-100 grayscale-0 cursor-pointer" : "opacity-80 grayscale-100 cursor-default"} w-full h-auto aspect-220/160 bg-white rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px] overflow-hidden block relative z-0`}>
            <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="20vw"
                className="group-hover:scale-105 transition-transform duration-300"
            />
            <div
                className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1] whitespace-nowrap text-ellipsis overflow-hidden font-medium text-white bg-gradient-to-r to-white/0 from-[#f30000]/90 absolute z-1 left-0 bottom-0 right-0 mb-[5px] lg:mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[24px] p-[5px] lg:p-[4px_10px] xl:p-[6px_14px] 2xl:p-[8px_16px] 3xl:p-[8px_18px]"
            >
                {item.title}
            </div>
        </Link>
    );
}

function JobResultBox({ }) {
    return (
        <div className="w-full h-auto bg-[#dceafb] rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] 2xl:rounded-[30px] 3xl:rounded-[36px] p-[15px_20px] lg:p-[20px_25px] 2xl:p-[25px_30px]">
            <div className="w-full h-auto block border-b-[1px] border-dashed border-[#7670b3] mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">
                <div className="flex flex-wrap items-center mb-[4px] lg:mb-[6px] 2xl:mb-[8px]">
                    <div className="w-1/2">
                        <div className="text-[12px] lg:text-[14px] xl:lg-[16px] 2xl:text-[18px] 3xl:text-[22px] font-bold leading-[1] text-black">Senior Accountant</div>
                    </div>
                    <div className="w-1/2 flex justify-end items-center gap-[10px] lg:gap-[15px] 2xl:gap-[20px]">
                        <div>
                            <Link href={"/"} className="text-[12px] lg:text-[14px] 2xl:lg-[16px] 3xl:text-[18px] font-normal leading-[1] text-[#484877] w-full h-auto flex items-center gap-[2px] lg:gap-[4px] 2xl:gap-[6px] hover:text-base2">
                                <Image
                                    src={"/images/icon-share.svg"}
                                    alt={"share"}
                                    width={20}
                                    height={20}
                                    className="w-[10px] lg:w-[15px] 2xl:w-[20px] h-auto aspect-4/4 block"
                                />
                                Share
                            </Link>
                        </div>
                        <div>
                            <Link
                                href={"/"}
                                className="text-[12px] lg:text-[12px] 2xl:text-[12px] 3xl:text-[16px] leading-[1] font-bold text-white h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[44px] 3xl:h-[48px] flex items-center bg-base2 rounded-[20px] lg:rounded-[40px] 2xl:rounded-[80px] 3xl:rounded-[100px] p-[4px] lg:p-[6px] 2xl:p-[8px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
                            >
                                <span
                                    className="px-[2px] lg:px-[4px] 2xl:px-[6px]">
                                    APPLY NOW
                                </span>
                                <Image
                                    src={"/images/icon-careerBtn.svg"}
                                    alt="careerBtn"
                                    width={30}
                                    height={30}
                                    className="w-[15px] lg:w-[20px] xl:w-[25px] 2xl:w-[30px] h-auto aspect-4/4 block"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-medium text-[#484877] mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">Location : Kochi, Kerala</div>
            </div>
            <div className="w-full h-auto block">
                <div className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-medium text-[#4b4b4b] mb-[4px] lg:mb-[6px] 2xl:mb-[10px]">Job Description</div>
                <div className="text-sm-1 text-[#4d4d4d]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis</div>
            </div>
        </div>
    )
}

export default function FindJob() {
    return (
        <section className="w-full block py-[40px_20px] lg:py-[60px_30px] 2xl:py-[80px_40px] 3xl:py-[100px_50px] relative z-0 after:content-[''] after:w-full after:h-[50%] after:absolute after:-z-1 after:bottom-0 after:left-0 after:right-0 after:block after:bg-gradient-to-r after:to-[#fde7e7] after:from-transparent">
            <div className="container">
                <div className="flex justify-between mb-[10px] lg:mb-[15px] 2xl:mb-[20px]">
                    <div className="text-title1 font-bold">
                        Find Your
                        <span className="font-bold text-base2">
                            {""}   Ideal Job
                        </span>
                    </div>
                    <div>
                        <Link
                            href={"/"}
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
                                className="w-[25px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px] h-auto aspect-4/4 block"
                            />
                        </Link>
                    </div>
                </div>
                <div
                    className="w-full h-auto block mb-[20px] lg:mb-[30px] 2xl:mb-[40px]"
                >
                    <FindJobForm />
                </div>
                <div
                    className="flex flex-wrap"
                >
                    <div className="w-full lg:w-[calc(100%-468px)] xl:w-[calc(100%-468px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-700px)]">
                        <ScrollArea className="w-full h-[320px] lg:h-[376px] xl:h-[376px] 2xl:h-[468px] 3xl:h-[540px]">
                            <div className="flex flex-wrap -mx-[4px] lg:-mx-[8px] 2xl:-mx-[12px]">
                                {jobLocations?.map((item, index) => (
                                    <div key={index} className="w-1/4 p-[0_4px_8px] lg:p-[0_8px_16px] 2xl:p-[0_12px_24px]">
                                        <JobLocationBox item={item} />
                                    </div>
                                ))}
                            </div>
                            {/* <ScrollBar className="right-[calc(100%+15px)]!" /> */}
                        </ScrollArea>
                    </div>
                    <div className="w-full lg:w-[468px] xl:w-[468px] 2xl:w-[576px] 3xl:w-[700px] pl-[15px] lg:pl-[20px] 2xl:pl-[30px]">
                        {jobResults?.map((item, index) => (
                            <div key={index} className="w-full mb-[15px] lg:mb-[20px] 2xl:mb-[30px]">
                                <JobResultBox item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
