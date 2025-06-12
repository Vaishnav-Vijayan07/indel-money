
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Corporate = [
    { Name: "Mr. S Ganesh", directorship: "Independent", Designation: "Chairman" },
    { Name: "Mr. C R Sasikumar", directorship: "Independent", Designation: "Member" },
    { Name: "Mr. Umesh Mohanan", directorship: "Executive", Designation: "Member" },
    { Name: "Mr. Salil Venu", directorship: "Non-Executive", Designation: "Member" },
];

const Reports = [
    { Year: "2021 – 2022", Report: "/pdfs/2022-23.pdf" },
    { Year: "2022 – 2023", Report: "/pdfs/2022-23.pdf" },
];

const Plan = [
    { Year: "2021 – 2022", Report: "/pdfs/2022-23.pdf" },
    { Year: "2022 – 2023", Report: "/pdfs/2022-23.pdf" },
    { Year: "2023 – 2024", Report: "/pdfs/2022-23.pdf" },
];


export default function CsrInfo() {


    return (
        <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
            <div className="container">
                <h2 className="text-[28px] lg:text-[35px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[68px] text-black font-regular mb-[5px]">
                    <span className="text-[#F30000] font-bold">Investors</span>
                </h2>
                <div className='breadcrumb hidden sm:flex flex-wrap mb-[10px] md:mb-[35px]'>
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
                        CSR
                    </Link>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-[270px] xl:w-[330px] 2xl:w-[400px] 3xl:w-[510px]">
                        <Sidebar />
                    </div>
                    <div className="w-full md:w-[calc(100%-270px)] xl:w-[calc(100%-330px)] 2xl:w-[calc(100%-400px)] 3xl:w-[calc(100%-510px)] md:pl-[30px] xl:pl-[50px] 2xl:pl-[80px] 3xl:pl-[100px]">
                        <div className="text-black text-title1 font-medium mb-[15px] 2xl:mb-[20px] 3xlmb-[30px]">CSR</div>
                        {/* Board Meeting Section */}
                        <div className="mb-[20px] xl:mb-[25px]">
                            <div className="text-[18px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[42px] font-medium text-black mb-[20px] xl:mb-[25px]">
                                Corporate Social Responsibility Committee
                            </div>
                            <div className="overflow-auto w-full">
                                <table className="w-full border-collapse rounded-[20px] px-[55px] 3xl:px-[76px] bg-[#D7E9FF] overflow-hidden">
                                    <thead>
                                        <tr className="bg-[#CDE2FF] text-left text-gray-800">
                                            <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap">Name of Directors</th>
                                            <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap">Nature of Directorship</th>
                                            <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] whitespace-normal sm:whitespace-nowrap">Designation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Corporate.map((Corporate, index) => (
                                            <tr key={index} className="bg-[#E7EFF6] border-t border-[#E5F0FA]">
                                                <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] font-medium pl-[30px] xl:pl-[55px]  3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap">{Corporate.Name}</td>
                                                <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] font-medium pl-[30px] xl:pl-[55px]  3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap">{Corporate.directorship}</td>
                                                <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] font-medium pl-[30px] xl:pl-[55px]  3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap">{Corporate.Designation}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Other Intimations Section */}
                        <div className="mb-[20px] xl:mb-[25px]">
                            <div className="text-[18px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[42px] font-medium text-black mb-[20px] xl:mb-[25px]">
                                CSR Reports
                            </div>
                            <div className="overflow-auto w-full">
                                <table className="w-full border-collapse rounded-[20px] px-[55px] 3xl:px-[76px] bg-[#CDE2FF] overflow-hidden">
                                    <thead>
                                        <tr className="bg-[#CDE2FF] text-left text-gray-800">
                                            <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap w-[50%] sm:w-[65%]">Monthly</th>
                                            <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap ">Record Date Intimation</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Plan.map((Plan, index) => (
                                            <tr key={index} className="bg-[#E7EFF6] border-t border-[#E5F0FA]">
                                                <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] font-medium pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap">{Plan.Year}</td>
                                                <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap">

                                                    <Link
                                                        href={Plan.Report}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[10px] xl:text-[12px] 3xl:text-[16px] flex items-center space-x-2 text-[#1F1B1B] hover:text-red-600"
                                                    >
                                                        <span>View PDF</span>
                                                        <Image
                                                            src="/images/pdf.svg"
                                                            alt="PDF Icon"
                                                            width={24}
                                                            height={24}
                                                            className="w-[20px] h-[20px] 3xl:w-[25px] 3xl:h-[25px] object-contain"
                                                        />
                                                    </Link>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Other Intimations Section */}
                        <div className="mb-[20px] xl:mb-[25px]">
                            <div className="text-[18px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[42px] font-medium text-black mb-[20px] xl:mb-[25px]">
                                Annual Action Plan
                            </div>
                            <div className="overflow-auto w-full">
                                <table className="w-full border-collapse rounded-[20px] px-[55px] 3xl:px-[76px] bg-[#CDE2FF] overflow-hidden">
                                    <thead>
                                        <tr className="bg-[#CDE2FF] text-left text-gray-800">
                                            <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap w-[50%] sm:w-[65%]">Monthly</th>
                                            <th className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold py-[12px] 3xl:py-[18px] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] bg-[#CDE2FF] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap ">Record Date Intimation</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Plan.map((Plan, index) => (
                                            <tr key={index} className="bg-[#E7EFF6] border-t border-[#E5F0FA]">
                                                <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] font-medium pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap">{Plan.Year}</td>
                                                <td className="text-[14px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] xl:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] whitespace-normal sm:whitespace-nowrap">

                                                    <Link
                                                        href={Plan.Report}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[10px] xl:text-[12px] 3xl:text-[16px] flex items-center space-x-2 text-[#1F1B1B] hover:text-red-600"
                                                    >
                                                        <span>View PDF</span>
                                                        <Image
                                                            src="/images/pdf.svg"
                                                            alt="PDF Icon"
                                                            width={24}
                                                            height={24}
                                                            className="w-[20px] h-[20px] 3xl:w-[25px] 3xl:h-[25px] object-contain"
                                                        />
                                                    </Link>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className="text-[18px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px] 3xl:text-[42px] font-medium text-black mb-[20px] xl:mb-[25px]">
                            CSR Policy
                        </div>

                        <div className="flex items-center justify-between px-[25px] py-[15px] 3xl:px-[35px] 3xl:py-[25px] bg-[#DCEAFB] rounded-[15px] 3xl:rounded-[24px] overflow-hidden">
                            <span className="text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px] font-medium text-black">
                                View CSR Policy Document
                            </span>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between bg-[#F30000] text-white text-[12px] 2xl:text-[16px] 3xl:text-[18px] font-bold px-[17px] sm:px-5 py-[15px] sm:py-2 rounded-full min-w-[120px] sm:min-w-[150px] 3xl:min-w-[200px] transition-all duration-300 ease-in-out hover:bg-[#D20000] hover:scale-105"
                            >
                                VIEW PDF
                                <div className="w-[20px] h-[20px] xl:w-[30px] xl:h-[30px] 3xl:w-[40px] 3xl:h-[40px] ml-2 bg-white rounded-full flex items-center justify-center ">
                                    <Image
                                        src="/images/pdficon.svg"
                                        alt="PDF Icon"
                                        width={20}
                                        height={20}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
