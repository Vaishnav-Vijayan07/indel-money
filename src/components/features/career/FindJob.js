import Image from "next/image"
import Link from "next/link"
import FindJobForm from "./FindJobForm";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import JobResultBoxSlide from "./JobResultBoxSlide";

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
        id: 0,
        job_title: "Senior Accountant",
        location: "Kochi, Kerala",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 1,
        job_title: "Sales Manager",
        location: "Mumbai, Maharashtra",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 2,
        job_title: "Branch Manager",
        location: "Kochi, Kerala",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 3,
        job_title: "IT Administrator",
        location: "Mumbai, Maharashtra",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 4,
        job_title: "Branch Manager",
        location: "Kochi, Kerala",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 5,
        job_title: "IT Administrator",
        location: "Mumbai, Maharashtra",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 6,
        job_title: "Branch Manager",
        location: "Kochi, Kerala",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
    {
        id: 7,
        job_title: "IT Administrator",
        location: "Mumbai, Maharashtra",
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat commodo elementum. Integer non vestibulum turpis, non auctor nisl. Integer ipsum leo, scelerisque vel erat quis, facilisis aliquam urna. Nam vitae risus id ligula ullamcorper ultricies non sed dolor. "
    },
];

function JobLocationBox({ item }) {
    return (
        <Link href={item.link} className={`${item.status ? "group opacity-100 grayscale-0 cursor-pointer" : "opacity-80 grayscale-100 cursor-default"} w-full h-auto aspect-220/160 bg-white rounded-[7px] sm:rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px] overflow-hidden block relative z-0`}>
            <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="20vw"
                className="group-hover:scale-105 transition-transform duration-300"
            />
            <div
                className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] leading-[1] whitespace-nowrap text-ellipsis overflow-hidden font-medium text-white bg-gradient-to-r to-white/0 from-[#f30000]/90 max-sm:bg-[linear-gradient(270deg,#17479E_0%,#F30000_100%)] absolute z-1 left-0 bottom-0 right-0 sm:mb-[5px] lg:mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[24px] p-[7px] lg:p-[4px_10px] xl:p-[6px_12px] 2xl:p-[8px_16px] 3xl:p-[8px_18px]"
            >
                {item.title}
            </div>
        </Link>
    );
}

export default function FindJob() {
    return (
        <section className="w-full block p-[30px_0_30px] sm:py-[40px_20px] lg:py-[60px_30px] 2xl:py-[80px_40px] 3xl:py-[100px_50px] relative z-0 after:content-[''] after:w-full after:h-[50%] after:absolute after:-z-1 after:bottom-0 after:left-0 after:right-0 after:block after:bg-gradient-to-r after:to-[#fde7e7] after:from-transparent after:max-sm:h-[100%] after:max-sm:bg-[linear-gradient(0deg,rgba(238,238,238,0.00)_0%,rgba(243,0,0,0.10)_0%,rgba(243,0,0,0.10)_100%)]">
            <div className="container">
                <div className="flex justify-between mb-[10px] lg:mb-[15px] 2xl:mb-[20px] max-sm:hidden">
                    <div className="text-title1 font-bold">
                        Find Your
                        <span className="font-bold text-base2">
                            {""}   Ideal Job
                        </span>
                    </div>
                    <div className="max-sm:hidden block">
                        <Link
                            href={"/career/active-jobs"}
                            className="text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-bold text-white h-[30px] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[54px] flex items-center bg-base2 rounded-[20px] lg:rounded-[40px] 2xl:rounded-[80px] 3xl:rounded-[100px] p-[4px] lg:p-[6px] 2xl:p-[8px] transition-color duration-300 hover:bg-base2/80 hover:[&>*-translate-x-[5px]]"
                        >
                            <span
                                className="px-[5px] md:px-[10px] lg:px-[15px] 2xl:px-[20px]">
                                VIEW ACTIVE ROLES
                            </span>
                            <Image
                                src={"/images/icon-careerBtn.svg"}
                                alt="careerBtn"
                                width={40}
                                height={40}
                                className="w-[20px] lg:w-[25px] xl:w-[30px] 2xl:w-[35px] 3xl:w-[40px] h-auto aspect-4/4 block"
                            />
                        </Link>
                    </div>
                </div>
                <div className="max-sm:flex max-sm:flex-col-reverse">
                    <div
                        className="w-full h-auto block sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px]"
                    >
                        <div className="max-sm:flex hidden max-sm:p-[25px_0_20px]">
                            <div className="text-title1 font-bold">
                                Find Your
                                <span className="font-bold text-base2">
                                    {""}   Ideal Job
                                </span>
                            </div>
                        </div>
                        <FindJobForm />
                    </div>
                    <div
                        className="flex flex-wrap"
                    >
                        <div className="w-full lg:w-[calc(100%-368px)] xl:w-[calc(100%-468px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-700px)] mb-[15px] lg-mb-0">
                            <ScrollArea className="w-full h-[290px] sm:h-[270px] lg:h-[276px] xl:h-[340px] 2xl:h-[430px] 3xl:h-[540px]">
                                <div className="flex flex-wrap -mx-[2px] sm:-mx-[4px] lg:-mx-[8px] 2xl:-mx-[12px]">
                                    {jobLocations?.map((item, index) => (
                                        <div key={index} className="w-1/4 p-[2px] sm:p-[0_4px_8px] lg:p-[0_8px_16px] 2xl:p-[0_12px_24px]">
                                            <JobLocationBox item={item} />
                                        </div>
                                    ))}
                                </div>
                                {/* <ScrollBar className="right-[calc(100%+15px)]!" /> */}
                            </ScrollArea>
                        </div>
                        <div className="w-full lg:w-[368px] xl:w-[468px] 2xl:w-[576px] 3xl:w-[700px] lg:pl-[20px] 2xl:pl-[30px]">
                            <JobResultBoxSlide jobResults={jobResults} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
