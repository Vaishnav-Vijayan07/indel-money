"use client";
import React from "react";
import CountUp from "react-countup";
import Image from "next/image";

export default function Countersec() {
    return (
        <div className="flex flex-wrap w-full m-[-10px] md:items-end 3xl:h-[370px] 2xl:h-[300px] min-md:h-[260px]">
            {/* Card 1 */}
            <div className="w-[calc(100%/2)] md:w-[calc(100%/4)] 3xl:p-[10px] p-[5px] md:h-full flex flex-col-reverse">
                <div className="relative w-full h-full rounded-[25px] pt-[25px] px-[20px] overflow-hidden bg-[linear-gradient(156deg,rgba(23,71,158,0.30)_6.47%,rgba(198,59,59,0.30)_91.2%)] flex flex-col justify-between">
                    <div className="text-black text-[30px] sm:text-[25px] 2xl:text-[30px] 3xl:text-[43px] font-bold leading-[1.2] mb-[10px]">
                        <CountUp end={300} duration={2} separator="," />+
                    </div>
                    <p className="text-[rgba(0,0,0,0.90)] 3xl:text-[16px] 2xl:text-[14px] text-[12px] font-medium mb-[15px]">
                        Over 300 Convenient Locations Across India
                    </p>
                    <div className="w-full 3xl:max-w-[160px] 2xl:max-w-[125px] max-w-[105px]  m-auto">
                        <Image src="/images/india.svg" width={185} height={175} alt="India Icon" priority className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="w-[calc(100%/2)] md:w-[calc(100%/4)]  3xl:p-[10px] p-[5px] md:h-full flex flex-col-reverse">
                <div className="relative w-full md:h-[calc(100%-50px)] h-full rounded-[25px] py-[25px] px-[20px] overflow-hidden bg-[linear-gradient(156deg,rgba(23,71,158,0.30)_6.47%,rgba(198,59,59,0.30)_91.2%)] flex flex-col justify-between">
                    <div className="text-black text-[30px] sm:text-[25px] 2xl:text-[30px] 3xl:text-[43px] font-bold leading-[1.2] mb-[10px]">
                        <CountUp end={1} duration={2} separator="," />Million+
                    </div>
                    <p className="text-[rgba(0,0,0,0.90)] 3xl:text-[16px] 2xl:text-[14px] text-[12px] font-medium mb-[15px]">
                        Trusted by millions, our financial services have positively impacted lives.
                    </p>
                    <div className="w-full 3xl:max-w-[160px] 2xl:max-w-[125px] max-w-[105px]">
                        <Image src="/images/gropImg.png" width={185} height={175} alt="Group Image" priority className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="w-[calc(100%/2)] md:w-[calc(100%/4)]  3xl:p-[10px] p-[5px] md:h-full flex flex-col-reverse">
                <div className="relative w-full h-full rounded-[25px] pt-[25px] px-[20px] overflow-hidden bg-[linear-gradient(156deg,rgba(23,71,158,0.30)_6.47%,rgba(198,59,59,0.30)_91.2%)] flex flex-col justify-between">
                    <div className="text-black text-[30px] sm:text-[25px] 2xl:text-[30px] 3xl:text-[43px] font-bold leading-[1.2] mb-[10px]">
                        <CountUp end={1700} duration={2} separator="," />+
                    </div>
                    <p className="text-[rgba(0,0,0,0.90)] 3xl:text-[16px] 2xl:text-[14px] text-[12px] font-medium mb-[15px]">
                        Trusted, Skilled Employees Committed to Excellence
                    </p>
                    <div className="w-full 3xl:max-w-[160px] 2xl:max-w-[125px] max-w-[105px] m-auto">
                        <Image src="/images/man.png" width={185} height={175} alt="Man Icon" priority className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Card 4 */}
            <div className="w-[calc(100%/2)] md:w-[calc(100%/4)] 3xl:p-[10px] p-[5px] md:h-full flex flex-col-reverse">
                <div className="relative w-full rounded-[25px] md:h-[calc(100%-50px)] h-full pt-[25px] px-[20px] overflow-hidden bg-[linear-gradient(156deg,rgba(23,71,158,0.30)_6.47%,rgba(198,59,59,0.30)_91.2%)]">
                    <div className="text-black text-[30px] sm:text-[25px] 2xl:text-[30px] 3xl:text-[43px] font-bold leading-[1.2] mb-[10px]">
                        <CountUp end={30} duration={2} separator="," />+
                    </div>
                    <p className="text-[rgba(0,0,0,0.90)] 3xl:text-[16px] 2xl:text-[14px] text-[12px] font-medium mb-[15px]">
                        Backed by years of experience, we deliver reliable and effective solutions.
                    </p>
                </div>
            </div>

        </div>
    );
}
