"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const CounterBox = ({ end, suffix, text, showDivider }) => {
    const [start, setStart] = useState(false);

    return (
        <motion.div
            className={`lg:w-[calc(100%/4)] md:w-[calc(100%/3)] sm:w-[calc(100%/2)] p-2 relative ${showDivider
                ? "before:content-[''] before:absolute before:top-0 before:m-auto before:bottom-0 before:right-0 before:w-[4px] before:h-[60px] before:bg-gradient-to-r before:from-[#17479E] before:to-[#EE3824] before:rounded-full max-lg:before:hidden"
                : ""
                }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
            }}
            viewport={{ once: true, amount: 0.3 }} // Triggers only once when 30% of section is in view
            onViewportEnter={() => setStart(true)} // Start counter when enters view
        >
            <div className="w-full h-full lg:pl-[30px] 2xl:pl-[50px]">
                {/* CountUp Animation */}
                <div className="text-title1 conterTxt font-medium">
                    <CountUp start={start ? 0 : null} end={end} duration={3} suffix={suffix} />
                </div>
                <div className="text-[14px] 2xl:text-[16px] text-black font-medium xl:max-w-[80%] max-w-full">
                    {text}
                </div>
            </div>
        </motion.div>
    );
};

export default CounterBox;
