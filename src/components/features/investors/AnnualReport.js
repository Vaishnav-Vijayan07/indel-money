import Image from "next/image";
import Link from "next/link";

export default function Annualreport() {

    const reports = [
        { year: "2023-24", link: "/pdfs/2023-24.pdf" },
        { year: "2022-23", link: "/pdfs/2022-23.pdf" },
        { year: "2021-22", link: "/pdfs/2021-22.pdf" },
        { year: "2020-21", link: "/pdfs/2020-21.pdf" },
        { year: "2019-20", link: "/pdfs/2019-20.pdf" },
        { year: "2018-19", link: "/pdfs/2018-19.pdf" },
        { year: "2017-18", link: "/pdfs/2017-18.pdf" },
        { year: "2016-17", link: "/pdfs/2016-17.pdf" },
    ];
    return (
        <section className="pb-[25px] 3xl:pb-[50px]">
            <div className="text-black text-title1 font-medium mb-[20px] 2xlmb-[30px] 3xl:mb-[40px]">Annual Report</div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 xl:gap-4 3xl:gap-6">
                {reports.map((report, index) => (
                    <div
                        key={index}
                        className="flex items-center flex-wrap justify-between py-[10px] 4xs:py-[15px] sm:py-[25px] px-[10px] 4xs:px-[12px] sm:px-[15px] xl:py-[30px] xl:px-[20px] 3xl:py-[35px] 3xl:px-[25px] rounded-2xl bg-gradient-to-r from-blue-300 to-red-300 shadow-md">
                        {/* <h3 className="text-[13px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold text-black">Annual Report  <span>{report.year}</span> </h3> */}
                        <h3 className="text-[13px] xl:text-[14px] 2xl:text-[18px] 3xl:text-[20px] sm:font-bold font-medium text-blacksm:block flex flex-wrap sm:w-fit 4xs:w-[calc(100%-36px)] w-[calc(100%-28px)]">
                            Annual Report <span className="sm:ml-[3px] sm:text-black text-[#17479E] sm:w-fit w-full" >{report.year}</span>
                        </h3>
                        <Link
                            href={report.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 sm:max-lg:mt-[10px]">
                            <span className="text-[10px] xl:text-[12px] 3xl:text-[16px] text-black sm:block hidden">View PDF</span>
                            <div className="w-[28px] 4xs:w-[36px] sm:w-[20px] h-[28px] 4xs:h-[36px] sm:h-[20px] xl:w-[30px] xl:h-[30px] 3xl:w-[40px] 3xl:h-[40px] bg-red-500 rounded-full flex items-center justify-center">
                                <Image
                                    src="/images/pdf-icon.svg"
                                    alt="PDF Icon"
                                    width={24}
                                    height={24}
                                    className="w-[12px] 4xs:w-[15px] sm:w-[10px] h-[18px] sm:h-[10px] xl:w-[15px] xl:h-[15px] 2xl:w-[20px] 2xl:h-[20px] 3xl:w-[24px] 3xl:h-[24px]"/>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
