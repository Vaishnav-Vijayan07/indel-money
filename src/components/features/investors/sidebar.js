"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
    const menuItems = [
        { name: "Annual Report", link: "/investors/report" },
        { name: "Investors Contact", link: "/investors/contact" },
        { name: "NCD", link: "/ncd" },
        { name: "Policies", link: "/policies" },
        { name: "Annual Reports", link: "/annual-reports" },
        { name: "Quarterly Results", link: "/quarterly-results" },
        { name: "Stock Exchange Filing", link: "/stock-exchange-filing" },
        { name: "Corporate Governance", link: "/investors/Goverenance" },
        { name: "Credit Rating", link: "/credit-rating" },
        { name: "Key Managerial Personnel", link: "/key-managerial-personnel" },
        { name: "CSR", link: "/csr" },
    ];

    const [activeIndex, setActiveIndex] = useState(0); // First item active by default

    return (
        <aside className="w-full bg-[#B7D0FF] rounded-[25px] overflow-hidden">
            <ul className="py-[25px] 3xl:py-[30px]">
                {menuItems.map((item, index) => (
                    <li key={index} className="group">
                        <Link
                            href={item.link}
                            className={`text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[30px] cursor-pointer transition-all duration-300 py-[15px] px-[25px] 2xl:py-[20px] 2xl:px-[40px] 3xl:py-[30px] 3xl:px-[50px] flex justify-between items-center 
                                ${activeIndex === index
                                    ? "bg-[#DE5647] text-white font-bold"
                                    : "hover:bg-[#DE5647] hover:text-white"
                                }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {item.name}
                            {/* Show arrow on active or hover state */}
                            <span
                                className={`transition-opacity duration-300 opacity-0 group-hover:opacity-100 
                                ${activeIndex === index ? "opacity-100" : ""}`}
                            >
                                <Image
                                    src="/images/arrowIcon.svg"
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                    className="w-full h-full object-contain max-w-[20px] max-h-[20px] 2xl:max-w-[25px] 2xl:max-h-[25px] 3xl:max-w-[38px] 3xl:max-h-[38px]"
                                />
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
