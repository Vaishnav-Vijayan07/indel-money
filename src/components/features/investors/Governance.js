import Image from "next/image";
import Link from "next/link";
import Sidebar from "../investors/sidebar";
import Disclosure from "../investors/disclosure";

const pdfItems = [
    { title: "Code of Conduct for Independent Directors", link: "#" },
    { title: "Terms and Conditions of Appointment of Independent Directors", link: "#" },
    { title: "Composition of the Board", link: "#" },
    { title: "Committees of the Board", link: "#" },
    { title: "Shareholding Pattern", link: "#" },
];

export default function Contact() {
    return (
        <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
            <div className="container">
                <h2 className="text-[28px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[68px] text-black font-regular mb-[5px]">
                    <span className="text-[#F30000] font-bold">Investors</span>
                </h2>
                <div className="breadcrumb hidden sm:flex flex-wrap mb-[10px] md:mb-[35px]">
                    <Link
                        href="/"
                        className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                        before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                        before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                        before:content-[''] duration-100 hover:text-base2 last:pointer-events-none last:before:hidden"
                    >
                        Home
                    </Link>

                    <Link
                        href="/"
                        className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                        before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                        before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                        before:content-[''] duration-100 hover:text-base2 last:before:hidden last:pointer-events-none"
                    >
                        Investors Report
                    </Link>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-[270px] xl:w-[330px] 2xl:w-[400px] 3xl:w-[510px]">
                        <Sidebar />
                    </div>
                    <div className="w-full md:w-[calc(100%-300px)] xl:w-[calc(100%-330px)] 2xl:w-[calc(100%-400px)] 3xl:w-[calc(100%-510px)] md:pl-[30px] xl:pl-[50px] 2xl:pl-[80px] 3xl:pl-[100px]">
                        <div className="text-black text-title1 font-medium mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]">
                        Corporate Governance
                        </div>

                        <div className="grid grid-cols-1 4xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-2 xl:gap-4 3xl:gap-6">
                            {pdfItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="py-[15px] sm:py-[25px] px-[15px] xl:py-[30px] xl:px-[20px] 3xl:py-[35px] 3xl:px-[25px] rounded-2xl bg-gradient-to-r from-[rgba(23,71,158,0.40)] to-[rgba(238,56,36,0.40)] shadow-md min-h-[100px] 2xl:min-h-[120px] 3xl:min-h-[150px]"
                                >
                                    <h3 className="text-[13px] sm:text-[12px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-medium sm:font-bold text-black max-w-[85%]">
                                        {item.title}
                                    </h3>
                                    <Link
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 w-fit ml-auto mt-[8px] sm:mt-[25px]"
                                    >
                                        <span className="text-[10px] xl:text-[12px] 3xl:text-[16px] text-black sm:block hidden">
                                            View PDF
                                        </span>
                                        <div className="w-[25px] h-[25px] xl:w-[35px] xl:h-[35px] 3xl:w-[40px] 3xl:h-[40px] bg-red-500 rounded-full flex items-center justify-center">
                                            <Image
                                                src="/images/pdf-icon.svg"
                                                alt="PDF Icon"
                                                width={24}
                                                height={24}
                                                className="w-[10px] h-[10px] xl:w-[15px] xl:h-[15px] 2xl:w-[20px] 2xl:h-[20px] 3xl:w-[24px] 3xl:h-[24px]"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <Disclosure/>
                    </div>
                </div>
            </div>
        </section>
    );
}
