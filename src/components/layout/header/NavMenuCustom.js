import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const GoldLoans = [
  {
    image: "/images/icon-goldloan-1.svg",
    alt: "item",
    title: "Gold Loan Steps",
    link: "/gold-loan#gold-loan-steps",
  },
  {
    image: "/images/icon-goldloan-2.svg",
    alt: "item",
    title: "Instant & hassle free Gold Loan",
    link: "/gold-loan#hassle-free",
  },
  {
    image: "/images/icon-goldloan-3.svg",
    alt: "item",
    title: "Our Easy Step Gold Loan",
    link: "/gold-loan#easy-step",
  },
  {
    image: "/images/icon-goldloan-4.svg",
    alt: "item",
    title: "Gold Loan Scheme",
    link: "/gold-loan#scheme",
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
    link: "/consumer-durable-loans",
  },
];
const Careers = [
  {
    title: "life at indel",
    link: "/career#life",
  },
  {
    title: "employee testimonial",
    link: "/emptestimonial",
  },
  {
    title: "current openings",
    link: "/career-list",
  },
  {
    title: "apply now",
    link: "/career-list",
  },
];
const Abouts = [
  {
    title: "indel values",
    link: "/indel-values",
  },
  {
    title: "management team",
    link: "/management-team",
  },
  {
    title: "board of directors",
    link: "/board-of-directors",
  },
  {
    title: "partners",
    link: "/partners",
  },
  {
    title: "history",
    link: "/history-of-indel",
  },
  {
    title: "different shades of indel",
    link: "/different-shades-of-indelmoney",
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
      className="size-2 ml-0.5 transition duration-300 group-data-[state=open]:rotate-180"
    >
      <path d="M5.5 6L10.2631 0.75H0.73686L5.5 6Z" fill="#2A2A2A" />
    </svg>
  );
};

function DropdownMenu({ items }) {
  const pathname = usePathname();
  return (
    <div className="border-[#e4e4e4] bg-white p-0 hidden">
      <ul className="flex flex-col p-[5px] 3xl:p-[10px] w-[180px] lg:w-[200px] 2xl:w-[240px]">
        {items?.map((item, index) => (
          <li key={index}>
            <Link href={item.link} passHref>
              <div
                className={`${
                  pathname === item.link ? "text-base2" : ""
                } text-header1 hover:text-base2! capitalize cursor-pointer transition-color duration-300`}
              >
                {item.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaMenu({ items }) {
  const pathname = usePathname();
  return (
    <div className="border-[#e4e4e4] bg-white p-0 hidden">
      <ul className="grid md:grid-cols-2 p-[10px] 3xl:p-[15px] w-[360px] lg:w-[420px] 2xl:w-[576px] 3xl:w-[600px]">
        {items?.map((item, index) => (
          <li key={index}>
            <Link href={item.link} passHref>
              <div className="p-0">
                <div className="group flex flex-row items-center p-[10px] 3xl:p-[10px] cursor-pointer">
                  <div className="w-[40px] h-[40px] bg-gradient-to-r from-base1 to-base2 rounded-full flex items-center justify-center 3xl:w-[60px] 3xl:h-[60px] transition-transform duration-300 group-hover:scale-95">
                    <Image src={item.image} width={28} height={28} alt={item?.alt} className="w-full h-full block max-w-2/4 object-contain" />
                  </div>
                  <div
                    className={`${
                      pathname === item.link ? "text-base2" : ""
                    } w-[calc(100%-40px)] 3xl:w-[calc(100%-60px)] text-header1 capitalize pl-[5px] lg:pl-[8px] 3xl:pl-[10px] group-hover:text-base2! transition-color duration-300`}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const tabStyle = "text-header1 uppercase hover:text-base2! transition-color duration-300 group p-0 cursor-pointer data-[state=open]:text-base2!";

export default function NavMenu() {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (menu) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);
  return (
    <div className="flex items-center gap-[8px] xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[15px] h-[var(--header-y)] lg:px-[10px] 2xl:px-[15px] 3xl:px-[20px] border-none shadow-none">
      <div className="relative z-0" onMouseEnter={() => handleMouseEnter("goldloan")} onMouseLeave={handleMouseLeave}>
        <div className="flex">
          <Link href={"/gold-loan"} className={tabStyle}>
            Gold Loan
          </Link>
          <div className={tabStyle}>
            <Arrow />
          </div>
        </div>
        {openDropdown === "goldloan" && <MegaMenu items={GoldLoans} />}
      </div>

      <div>
        <Link
          href={"https://indelremit.com"}
          className={`${pathname === "#" ? "" : ""} text-header1 uppercase hover:text-base2! transition-color duration-300 p-0 cursor-pointer block`}
        >
          FOREIGN EXCHANGE
        </Link>
      </div>

      <div>
        <div className={tabStyle}>
          <span>other loans</span>
          <Arrow />
        </div>
        <MegaMenu items={OtherLoans} />
      </div>

      <div>
        <div className="flex">
          <Link href={"/career"} className={tabStyle}>
            careers
          </Link>
          <div className={tabStyle}>
            <Arrow />
          </div>
        </div>
        <DropdownMenu items={Careers} />
      </div>

      <div>
        <div className="flex">
          <Link href={"/about-indel-money"} className={tabStyle}>
            about
          </Link>
          <div className={tabStyle}>
            <Arrow />
          </div>
        </div>
        <DropdownMenu items={Abouts} />
      </div>
    </div>
  );
}
