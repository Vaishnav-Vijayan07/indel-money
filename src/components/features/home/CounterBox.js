"use client"
import React from "react";
import CountUp from "react-countup";

const CounterBox = ({ end, suffix, text, showDivider }) => {
    return (
        <div
            className={`lg:w-[calc(100%/4)] md:w-[calc(100%/3)] sm:w-[calc(100%/2)] p-2 relative ${showDivider
                    ? "before:content-[''] before:absolute before:top-0 before:m-auto before:bottom-0 before:right-0 before:w-[4px] before:h-[60px] before:bg-gradient-to-r before:from-[#17479E] before:to-[#EE3824] before:rounded-full max-lg:before:hidden"
                    : ""
                }`}
        >
            <div className="w-full h-full lg:pl-[30px] 2xl:pl-[50px]">
                <div className="text-title1 conterTxt font-medium">
                    <CountUp end={end} duration={3} suffix={suffix} />
                </div>
                <div className="text-[14px] 2xl:text-[16px] text-black font-medium xl:max-w-[80%] max-w-full">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default CounterBox;
