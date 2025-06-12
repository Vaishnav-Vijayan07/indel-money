
import Image from "next/image";
import Link from "next/link";
const reports = [
    { year: "2022-23", link: "/pdfs/2022-23.pdf" },
    { year: "2021-22", link: "/pdfs/2021-22.pdf" },
    { year: "2020-21", link: "/pdfs/2020-21.pdf" },
];

export default function AnnualReturns() {
    return (
        <section>
            <div className="text-black text-title1 font-medium mb-[20px] 2xlmb-[30px] 3xl:mb-[40px]">Annual Returns</div>
            <div className="overflow-auto w-full">
                <table className="w-full border-collapse rounded-[16px] sm:rounded-[20px] px-[55px] 3xl:px-[76px] bg-[#D4E6FF] overflow-hidden">

                    <thead>
                        <tr className="bg-[#B7D0FF] sm:bg-[#D4E6FF] text-left text-gray-800">
                            <th className="text-[14px] sm:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-bold py-[12px] 3xl:py-[18px]  pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] sm:bg-[#D7E9FF] bg-[#B7D0FF] border-r border-r-[rgba(32,35,102,0.12)] w-[50%] sm:w-[65%]">Year</th>
                            <th className="text-[14px] sm:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-bold py-[12px] 3xl:py-[18px]  pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] sm:bg-[#D7E9FF] bg-[#B7D0FF] ">Report</th>
                        </tr>
                    </thead>


                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={index} className="sm:bg-[#D7E9FF] sm:border-t sm:border-[#E5F0FA]">
                                <td className="text-[13px] sm:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] w-[50%] sm:w-[65%]">{report.year}</td>
                                <td className="text-[13px] sm:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px]">
                                    <Link
                                        href={report.link}
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
                                            className="w-[12px] sm:w-[20px] h-[12px] sm:h-[20px] 3xl:w-[25px] 3xl:h-[25px] object-contain"
                                        />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    );
}
