
import Image from "next/image";
import Link from "next/link";


export default function CsrCommittee({ data, title }) {
    return (
        <section>
            <div className="text-black text-title1 font-medium mb-[20px] 2xlmb-[30px] 3xl:mb-[40px]">{title}</div>
            <div className="overflow-auto w-full">
                <table className="w-full border-collapse rounded-[16px] sm:rounded-[20px] px-[55px] 3xl:px-[76px] bg-[#D4E6FF] overflow-hidden">

                    <thead>
                        <tr className="bg-[#B7D0FF] sm:bg-[#D4E6FF] text-left text-gray-800">
                            {/* <th className="text-[14px] sm:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-bold py-[12px] 3xl:py-[18px]  pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] sm:bg-[#D7E9FF] bg-[#B7D0FF] border-r border-r-[rgba(32,35,102,0.12)] w-[50%] sm:w-[65%]">{"Year" : "Title"}</th> */}
                            <th className="text-[14px] sm:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-bold py-[12px] 3xl:py-[18px]  pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] sm:bg-[#D7E9FF] bg-[#B7D0FF] border-r border-r-[rgba(32,35,102,0.12)]  ">Name of Directors</th>
                            <th className="text-[14px] sm:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-bold py-[12px] 3xl:py-[18px]  pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] sm:bg-[#D7E9FF] bg-[#B7D0FF] border-r border-r-[rgba(32,35,102,0.12)]  ">Nature of Directorship</th>
                            <th className="text-[14px] sm:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-bold py-[12px] 3xl:py-[18px]  pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] sm:bg-[#D7E9FF] bg-[#B7D0FF] ">Designation</th>
                        </tr>
                    </thead>


                    <tbody>
                        {data?.map((report, index) => (
                            <tr key={index} className="sm:bg-[#D7E9FF] sm:border-t sm:border-[#E5F0FA]">
                                <td className="text-[13px] sm:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] ">{report?.name}</td>
                                <td className="text-[13px] sm:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] ">{report?.nature}</td>
                                <td className="text-[13px] sm:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-[#1F1B1B] pl-[30px] sm:pl-[55px] 3xl:pl-[76px] pr-[10px] py-[12px] 3xl:py-[18px] border-r border-r-[rgba(32,35,102,0.12)] ">{report?.designation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    );
}
