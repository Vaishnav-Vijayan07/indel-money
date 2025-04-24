"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const menuItems = [
        { name: "Annual Report", link: "/investors/report" },
        { name: "Investors Contact", link: "/investors/contact" },
        { name: "NCD", link: "/ncd" },
        { name: "Policies", link: "/investors/policy" },
        { name: "Quarterly Results", link: "/quarterly-results" },
        { name: "Stock Exchange Filing", link: "/investors/stockexchange" },
        { name: "Corporate Governance", link: "/investors/goverenance" },
        { name: "Credit Rating", link: "/credit-rating" },
        { name: "Key Managerial Personnel", link: "/key-managerial-personnel" },
        { name: "CSR", link: "/investors/csr" },
    ];

    const pathname = usePathname();  

    return (
        <aside className="w-full md:bg-[#B7D0FF] md:rounded-[25px] overflow-hidden h-full">
            <ul className="py-[15px] sm:py-[25px] 3xl:py-[30px] md:block flex flex-wrap sm:m-0 -m-[5px]">
                {menuItems.map((item, index) => {
                    const isActive = pathname === item.link;  
                    return (
                        <li key={index} className="group md:p-0 p-[5px] md:w-full w-fit md:min-w-full ">
                            <Link
                                href={item.link}
                                className={`text-[12px] sm:text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[30px] cursor-pointer transition-all duration-300 py-[8px] sm:py-[15px] px-[16px] sm:px-[25px] 2xl:py-[20px] 2xl:px-[40px] 3xl:py-[30px] 3xl:px-[50px] flex justify-between items-center bg-[#B7D0FF] md:rounded-[0] rounded-[10px]
                                    ${isActive
                                        ? "bg-[#DE5647] text-white font-bold"
                                        : "hover:bg-[#DE5647] hover:text-white"
                                    }`}
                            >
                                {item.name}
                             
                                <span
                                    className={`transition-opacity duration-300 opacity-0 group-hover:opacity-100 md:ml-[0] ml-[10px] 
                                    ${isActive ? "opacity-100" : ""}`}
                                >
                                    <Image
                                        src="/images/arrowIconMob.svg"
                                        alt="arrow"
                                        width={12}
                                        height={12}
                                        className="w-full h-full object-contain max-w-[12px] sm:max-w-[20px] max-h-[20px] 2xl:max-w-[25px] 2xl:max-h-[25px] 3xl:max-w-[38px] 3xl:max-h-[38px] sm:hidden block"
                                    />
                                    <Image
                                        src="/images/arrowIcon.svg"
                                        alt="arrow"
                                        width={24}
                                        height={24}
                                        className="w-full h-full object-contain max-w-[12px] sm:max-w-[20px] max-h-[20px] 2xl:max-w-[25px] 2xl:max-h-[25px] 3xl:max-w-[38px] 3xl:max-h-[38px] sm:block hidden"
                                    />
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
