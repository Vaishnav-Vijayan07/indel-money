import React from "react";
import Image from "next/image";
import Countersec from "./countersec";

export default function Financial() {

    return (
        <section className="relative 3xl:py-[100px] 2xl:py-[80px] py-[50px]">
            <div className="container">
                <div className="flex flex-wrap items-end w-full ">
                    {/* Left Content Section */}
                    <div className="3xl:w-[620px] 2xl:w-[450px] xl:w-[400px] lg:w-[300px]  w-full max-lg:p-[10px]">
                        <div className="3xl:max-w-[540px] 2xl:max-w-[400px] xl:max-w-[350px] lg:max-w-[260px] max-w-full">
                            <h2 className="text-[30px] lg:text-[22px] xl:text-[30px] 2xl:text-[33px] 3xl:text-[50px] text-black leading-[1.1] font-medium mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
                                <span className="block text-[35px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[64px] text-base2 leading-[1] font-bold xl:mb-[15px] mb-[10px]">
                                    Indel
                                </span>
                                Your Financial Partner for a Brighter Future
                            </h2>
                            <div className="subT text-[18px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[35px] font-medium text-black mb-[10px]">
                                Truly Indian Born
                            </div>
                            <div className="lg:max-w-[500px] max-w-full">
                                <p>
                                    Indel Money, an RBI-regulated Non-Banking Finance Company (NBFC) since 1986, has built a strong foundation on the values of Indian civilization. With 268 branches across Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, Odisha, Maharashtra, Madhya Pradesh, Delhi-NCR, and Puducherry, we’ve served millions for over two decades
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Right Content Section */}
                    <div className="3xl:w-[calc(100%-620px)] 2xl:w-[calc(100%-450px)] xl:w-[calc(100%-400px)] lg:w-[calc(100%-300px)] w-full max-lg:p-[10px]">

                        <Countersec />

                    </div>
                </div>
            </div>
        </section>
    );
}
