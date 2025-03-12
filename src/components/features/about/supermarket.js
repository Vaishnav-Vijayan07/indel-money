import React from "react";
import Image from "next/image";
import Sliderbox from "./sliderbox";
export default function Supermarket() {

    return (
        <section className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:bg-[linear-gradient(270deg,rgba(23,71,158,0.00)_3.16%,rgba(23,71,158,0.15)_97.06%)]">

            <div className="custom-container">
                <div className="flex flex-wrap">
                    {/* leftSec */}
                    <div className="w-[630px]">
                         <Sliderbox/>
                    </div>

                    {/* right sec  */}
                    <div className="w-[calc(100%-630px)] pl-[110px] py-[40px] flex flex-wrap items-center before:absolute before:top-0 before:right-0 before:w-[60%] before:h-full before:content-[''] before:bg-[linear-gradient(94deg,rgba(243,0,0,0.00)_3.16%,rgba(235,2,8,0.15)_97.06%)]">
                        <div className="contentBx">
                            <div className="text-[45px] text-[##1E1E1E] font-normal leading-[1.2] mb-[20px] ">
                                The Complete Financial
                                <span className="text-[50px] text-[#F30000] font-bold block"> Supermarket</span>
                            </div>
                            <p>Indel Money offers various financial services under one roof. We offer a wide range of services to all folks of the society including high net-worth individuals, business institutions, retail investors and to the common man. We offer value-added solutions for life requirements of a person and it helps to altering the dreams to reality.</p>
                            <p>Indel Money is the flagship financial institution of Indel Corporation, which is a dynamic and unique holding business enterprise with a total paid-up capital of 200+ Cr and a total turnover crossing 1,000 Cr. Headquartered in Mumbai, Indel Money has its corporate office in Kochi. We are a financial service supermarket with our services spread across multiple industries like Financial Services, Automobile, Hospitality, Infrastructure Development, Media, Communication, and Entertainment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}