import React from "react";
import Image from "next/image";
import Countersec from "./countersec";

export default function Financial() {


    return (
        <section className="relative py-[100px]">
            <div className="container">
                <div className="flex flex-wrap items-end w-full">
                    {/* Left Content Section */}
                    <div className="3xl:w-[620px] 2xl:w-[450px] lg:w-[330px] md:w-[]">
                        <div className="3xl:max-w-[540px] 2xl:max-w-[400px] max-w-[285px]">
                            <h2 className="text-[30px] lg:text-[24px] 2xl:text-[33px] 3xl:text-[50px] text-black leading-[1.1] font-medium mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
                                <span className="block text-[35px] lg:text-[30px] 2xl:text-[40px] 3xl:text-[64px] text-base2 leading-[1] font-bold mb-[15px]">
                                    Indel
                                </span>
                                Your Financial Partner for a Brighter Future
                            </h2>
                            <div className="subT text-[20px]  2xl:text-[25px] 3xl:text-[35px] font-medium text-black mb-[10px]">
                                Truly Indian Born
                            </div>
                            <p>
                                Indel Money, an RBI-regulated Non-Banking Finance Company (NBFC) since 1986, has built a strong foundation on the values of Indian civilization.
                                With 268 branches across multiple states, we’ve served millions for over two decades.
                            </p>
                        </div>
                    </div>
                    {/* Right Content Section */}
                    <div className="3xl:w-[calc(100%-620px)] 2xl:w-[calc(100%-450px)] w-[calc(100%-330px)] pl-[25px]">

                        <Countersec />

                    </div>
                </div>
            </div>
        </section>
    );
}
