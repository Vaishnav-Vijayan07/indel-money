
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../investors/sidebar";

const policies = [
    { name: "Risk Management Policy", link: "/pdfs/2023-24.pdf" },
    { name: "CSR Policy", link: "/pdfs/2023-24.pdf" },
    { name: "CO Lending Policy", link: "/pdfs/2023-24.pdf" },
    { name: "Covid 19 Moratorium Policy ", link: "/pdfs/2023-24.pdf" },
    { name: "Moratorium Policy 2.0 ", link: "/pdfs/2023-24.pdf" },
    { name: "Policy on Loans to Related Party  ", link: "/pdfs/2023-24.pdf" },
    { name: "RPT Policy  ", link: "/pdfs/2023-24.pdf" },
    { name: "Fair Practice Code  ", link: "/pdfs/2023-24.pdf" },
    { name: "KYC AML CFT Policy  ", link: "/pdfs/2023-24.pdf" },
    { name: "Asset Liability Management Policy", link: "/pdfs/2023-24.pdf" },
    { name: "Whistle Blower Policy ", link: "/pdfs/2023-24.pdf" },
    { name: "Policy of Stakeholders Relationship Committee  ", link: "/pdfs/2023-24.pdf" },
];

export default function Policies() {


    return (
        <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
            <div className="container">
                <h2 className="text-[28px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[68px] text-black font-regular mb-[5px]">
                    <span className="text-[#F30000] font-bold">Investors</span>
                </h2>
                <div className='breadcrumb flex flex-wrap mb-[35px]'>
                    <Link href="/" className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                    before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                    before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                    before:content-[''] duration-100 hover:text-base2 last:pointer-events-none last:before:hidden"  >
                        Home
                    </Link>

                    <Link
                        href="/" className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                        before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                        before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                        before:content-[''] duration-100 hover:text-base2 
                        last:before:hidden last:pointer-events-none" >
                        Investors Report
                    </Link>
                    <Link
                        href="/" className="block w-fit text-[12px] 2xl:text-[16px] 3xl:text-[18px] text-[#383838] mr-[25px] relative 
                        before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 
                        before:border-l-[6px] 3xl:before:border-l-[8px] before:border-b-[6px] 3xl:before:border-b-[8px] before:border-l-[#17479E] before:border-b-transparent 
                        before:content-[''] duration-100 hover:text-base2 
                        last:before:hidden last:pointer-events-none" >
                        Policies
                    </Link>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-[270px] xl:w-[330px] 2xl:w-[400px] 3xl:w-[510px]">
                        <Sidebar />
                    </div>
                    <div className="w-[calc(100%-300px)] xl:w-[calc(100%-330px)] 2xl:w-[calc(100%-400px)] 3xl:w-[calc(100%-510px)] pl-[30px] xl:pl-[50px] 2xl:pl-[80px] 3xl:pl-[100px]">
                        <div className="text-black text-title1 font-medium mb-[20px] 2xlmb-[30px] 3xl:mb-[40px]">Policies</div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-4 3xl:gap-6">
                            {policies.map((policies, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between py-[25px] px-[15px] xl:py-[30px] xl:px-[20px] 3xl:py-[35px] 3xl:px-[25px] min-h-[85px] 2xl:min-h-[100px] 3xl:min-h-[140px] rounded-2xl bg-gradient-to-r from-[rgba(23,71,158,0.40)] to-[rgba(238,56,36,0.40)] "
                                >
                                    <h3 className="text-[12px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold text-black max-w-[260px]">{`${policies.name}`}</h3>
                                    <Link
                                        href={policies.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 max-lg:mt-[10px]"
                                    >
                                        <span className="text-[10px] xl:text-[12px] 3xl:text-[16px] text-black whitespace-nowrap">View PDF</span>
                                        <div className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px] 3xl:w-[40px] 3xl:h-[40px] bg-red-500 rounded-full flex items-center justify-center">
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

                    </div>
                </div>
            </div>
        </section >
    );
}
