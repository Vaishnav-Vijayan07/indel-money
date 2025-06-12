"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/custom-sheet";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { usePathname } from "next/navigation";

const GoldLoans = [
  {
    image: "/images/icon-goldloan-1.svg",
    alt: "item",
    title: "Gold Loan Steps:",
    link: "about",
  },
  {
    image: "/images/icon-goldloan-2.svg",
    alt: "item",
    title: "Instant & hassle free Gold Loan",
    link: "#",
  },
  {
    image: "/images/icon-goldloan-3.svg",
    alt: "item",
    title: "Our Easy Step Gold Loan",
    link: "#",
  },
  {
    image: "/images/icon-goldloan-4.svg",
    alt: "item",
    title: "Gold Loan Scheme",
    link: "#",
  },
];
const OtherLoans = [
  {
    image: "/images/icon-goldloan-1.svg",
    alt: "item",
    title: "Gold Loan",
    link: "/gold-loan",
  },
  {
    image: "/images/icon-goldloan-2.svg",
    alt: "item",
    title: "MSME Loan",
    link: "/msme-loan",
  },
  {
    image: "/images/icon-goldloan-3.svg",
    alt: "item",
    title: "consumer durable Loan",
    link: "/services/consumer-durable-loan",
  },
  {
    image: "/images/icon-goldloan-4.svg",
    alt: "item",
    title: "Loan againist property",
    link: "#",
  },
  {
    image: "/images/icon-goldloan-1.svg",
    alt: "item",
    title: "Foreign exchange",
    link: "#",
  },
];
const Careers = [
  {
    title: "life at indel",
    link: "/career",
  },
  {
    title: "employee testimonial",
    link: "/employee-testimonial",
  },
  {
    title: "current openings",
    link: "/career/active-jobs",
  },
  {
    title: "apply now",
    link: "/career/active-jobs",
  },
];
const Abouts = [
  {
    title: "indel values",
    link: "/about/indel-values",
  },
  {
    title: "board of directors",
    link: "/about",
  },
  {
    title: "management team",
    link: "/management-team",
  },
  {
    title: "partners",
    link: "/partners",
  },
  {
    title: "different shades of indel",
    link: "/about/different-shades-of-indel",
  },
];

const Arrow = () => {
  return (
    <svg
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-2 ml-0.5"
    >
      <path d="M5.5 6L10.2631 0.75H0.73686L5.5 6Z" fill="#2A2A2A" />
    </svg>
  );
};

function DropdownMenu({ items }) {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col py-[5px]">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>
            <div
              className={`${
                pathname === item.link ? "text-base2" : ""
              } text-[14px] leading-none font-normal hover:text-base2 capitalize cursor-pointer p-[10px_15px] transition-color duration-300`}
            >
              {item.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const tabStyle =
  "group text-header1 capitalize hover:text-base2 w-full h-auto flex gap-[5px] justify-between transition-color duration-300 p-[15px] cursor-pointer";

export default function MobNavMenu() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <Sheet>
      <SheetTrigger className="outline-0">
        <div className="w-[30px] @sm:w-[38px] h-[30px] @sm:h-[38px] bg-base2 rounded-[4px] flex items-center justify-center">
          <Image
            src="/images/mob-navMenuIcon.svg"
            alt="nav"
            width={16}
            height={12}
          />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white">
        <SheetHeader className="p-0">
          <SheetTitle className="sr-only">Indel Money</SheetTitle>
          <SheetDescription className="sr-only">
            mobile navigation
          </SheetDescription>
          <div className="w-full h-[var(--header-y)] bg-white shadow-sm p-[15px] flex justify-between items-center">
            <div className="w-[40px] 4xs:w-[60px]">
              <Link
                href="/"
                className="block transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/icons/logo_sm.svg"
                  alt="Logo"
                  width={145}
                  height={75}
                />
              </Link>
            </div>
          </div>
          <div className="py-[5px]">
            <div>
              <div
                className={`${tabStyle} relative z-0 before:content-[''] before:absolute before:z-0 before:bottom-0 before:left-0 before:right-0 before:w-[calc(100%-30px)] before:h-[1px] before:bg-gray-200 before:block before:mx-auto`}
              >
                <span>Gold Loan</span>
                <button
                  className={`${
                    openDropdown === "goldLoan" ? "rotate-180" : "rotate-0"
                  } focus:outline-none transform-center`}
                  onClick={() => toggleDropdown("goldLoan")}
                  aria-label="Toggle mobile menu"
                >
                  <Arrow />
                </button>
              </div>
              <div
                className={`w-full bg-base1/10 overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === "goldLoan" ? "max-h-full" : "max-h-0"
                }`}
              >
                <DropdownMenu items={GoldLoans} />
              </div>
            </div>
            <div>
              <Link
                href={"/"}
                className={`${tabStyle} relative z-0 before:content-[''] before:absolute before:z-0 before:bottom-0 before:left-0 before:right-0 before:w-[calc(100%-30px)] before:h-[1px] before:bg-gray-200 before:block before:mx-auto`}
              >
                <span>foreign exchange</span>
              </Link>
            </div>
            <div>
              <div
                className={`${tabStyle} relative z-0 before:content-[''] before:absolute before:z-0 before:bottom-0 before:left-0 before:right-0 before:w-[calc(100%-30px)] before:h-[1px] before:bg-gray-200 before:block before:mx-auto`}
              >
                <span>other loan</span>
                <button
                  className={`${
                    openDropdown === "otherLoan" ? "rotate-180" : "rotate-0"
                  } focus:outline-none transform-center`}
                  onClick={() => toggleDropdown("otherLoan")}
                  aria-label="Toggle mobile menu"
                >
                  <Arrow />
                </button>
              </div>
              <div
                className={`w-full bg-base1/10 overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === "otherLoan" ? "max-h-full" : "max-h-0"
                }`}
              >
                <DropdownMenu items={OtherLoans} />
              </div>
            </div>
            <div>
              <div
                className={`${tabStyle} relative z-0 before:content-[''] before:absolute before:z-0 before:bottom-0 before:left-0 before:right-0 before:w-[calc(100%-30px)] before:h-[1px] before:bg-gray-200 before:block before:mx-auto`}
              >
                <span>careers</span>
                <button
                  className={`${
                    openDropdown === "careers" ? "rotate-180" : "rotate-0"
                  } focus:outline-none transform-center`}
                  onClick={() => toggleDropdown("careers")}
                  aria-label="Toggle mobile menu"
                >
                  <Arrow />
                </button>
              </div>
              <div
                className={`w-full bg-base1/10 overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === "careers" ? "max-h-full" : "max-h-0"
                }`}
              >
                <DropdownMenu items={Careers} />
              </div>
            </div>
            <div>
              <div
                className={`${tabStyle} relative z-0 before:content-[''] before:absolute before:z-0 before:bottom-0 before:left-0 before:right-0 before:w-[calc(100%-30px)] before:h-[1px] before:bg-gray-200 before:block before:mx-auto`}
              >
                <span>about</span>
                <button
                  className={`${
                    openDropdown === "abouts" ? "rotate-180" : "rotate-0"
                  } focus:outline-none transform-center`}
                  onClick={() => toggleDropdown("abouts")}
                  aria-label="Toggle mobile menu"
                >
                  <Arrow />
                </button>
              </div>
              <div
                className={`w-full bg-base1/10 overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === "abouts" ? "max-h-full" : "max-h-0"
                }`}
              >
                <DropdownMenu items={Abouts} />
              </div>
            </div>
            <div>
              <Link
                href={"/contact"}
                className={`${tabStyle} relative z-0 before:content-[''] before:absolute before:z-0 before:bottom-0 before:left-0 before:right-0 before:w-[calc(100%-30px)] before:h-[1px] before:bg-gray-200 before:block before:mx-auto`}
              >
                <span>Contact us</span>
              </Link>
            </div>
            <div>
              <Link
                href={"/"}
                className={`${tabStyle} relative z-0 before:content-[''] before:absolute before:z-0 before:bottom-0 before:left-0 before:right-0 before:w-[calc(100%-30px)] before:h-[1px] before:bg-gray-200 before:block before:mx-auto`}
              >
                <span>quick pay</span>
              </Link>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
