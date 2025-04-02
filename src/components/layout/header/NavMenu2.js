import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import Link from "next/link";

const GoldLoans = [
  {
    image: "/images/icon-goldLoan-1.svg",
    alt: "item",
    title: "Gold Loan Steps:",
    link: "about",
  },
  {
    image: "/images/icon-goldLoan-2.svg",
    alt: "item",
    title: "Instant & hassle free Gold Loan",
    link: "/",
  },
  {
    image: "/images/icon-goldLoan-3.svg",
    alt: "item",
    title: "Our Easy Step Gold Loan",
    link: "/",
  },
  {
    image: "/images/icon-goldLoan-4.svg",
    alt: "item",
    title: "Gold Loan Scheme",
    link: "/",
  },
];
const OtherLoans = [
  {
    image: "/images/icon-goldLoan-1.svg",
    alt: "item",
    title: "Gold Loan",
    link: "/gold-loan",
  },
  {
    image: "/images/icon-goldLoan-2.svg",
    alt: "item",
    title: "MSME Loan",
    link: "/msme-loan",
  },
  {
    image: "/images/icon-goldLoan-3.svg",
    alt: "item",
    title: "consumer durable Loan",
    link: "/",
  },
  {
    image: "/images/icon-goldLoan-4.svg",
    alt: "item",
    title: "Loan againist property",
    link: "/",
  },
  {
    image: "/images/icon-goldLoan-1.svg",
    alt: "item",
    title: "Foreign exchange",
    link: "/",
  },
];
const Careers = [
  {
    title: "life at indel",
    link: "/career",
  },
  {
    title: "employee testimonial",
    link: "/",
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
      className="size-2 ml-0.5 transition duration-300 group-data-[state=open]:rotate-180"
    >
      <path d="M5.5 6L10.2631 0.75H0.73686L5.5 6Z" fill="#2A2A2A" />
    </svg>
  );
};

function DropdownMenu({ items }) {
  return (
    <ul className="flex flex-col p-[5px] 3xl:p-[10px] w-[180px] lg:w-[200px] 2xl:w-[240px]">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.link} legacyBehavior passHref>
            <MenubarItem>
              <div className="text-header-sm hover:text-base2 capitalize cursor-pointer transition-color duration-300">
                {item.title}
              </div>
            </MenubarItem>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function MegaMenu({ items }) {
  return (
    <ul className="grid md:grid-cols-2 p-[10px] 3xl:p-[15px] w-[360px] lg:w-[420px] 2xl:w-[576px] 3xl:w-[600px]">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.link}
            legacyBehavior
            passHref
            className="cursor-pointer"
          >
            <MenubarItem className="p-0">
              <div className="group flex flex-row items-center gap-[5px] lg:gap-[8px] 3xl:gap-[10px] p-[10px] 3xl:p-[10px]">
                <div className="w-[40px] h-[40px] bg-gradient-to-r from-base1 to-base2 rounded-full flex items-center justify-center 3xl:w-[60px] 3xl:h-[60px] transition-transform duration-300 group-hover:scale-95">
                  <Image
                    src={item.image}
                    width={28}
                    height={28}
                    alt={item.alt}
                    className="w-full h-full block max-w-2/4 object-contain"
                  />
                </div>
                <div className="w-[calc(100%-40px)] 3xl:w-[calc(100%-60px)] text-header-sm capitalize group-hover:text-base2 transition-color duration-300">
                  {item.title}
                </div>
              </div>
            </MenubarItem>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function NavMenu2() {
  return (
    <Menubar className="flex gap-[8px] xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[15px] h-[var(--header-y)] lg:px-[10px] 2xl:px-[15px] 3xl:px-[20px] border-none shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="group p-0 cursor-pointer">
          <span className="text-header-sm uppercase hover:text-base2 transition-color duration-300">
            Gold Loan
          </span>
          <Arrow />
        </MenubarTrigger>
        <MenubarContent className="border-[#e4e4e4] bg-white p-0">
          <MegaMenu items={GoldLoans} />
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <Link
          href={"#"}
          className="text-header-sm uppercase hover:text-base2 transition-color duration-300 p-0 cursor-pointer block"
        >
          FOREIGN EXCHANGE
        </Link>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="group p-0 cursor-pointer">
          <span className="text-header-sm uppercase hover:text-base2 transition-color duration-300">
            other loan
          </span>
          <Arrow />
        </MenubarTrigger>
        <MenubarContent className="border-[#e4e4e4] bg-white p-0">
          <MegaMenu items={OtherLoans} />
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="group p-0 cursor-pointer">
          <span className="text-header-sm uppercase hover:text-base2 transition-color duration-300">
            CAREERS
          </span>
          <Arrow />
        </MenubarTrigger>
        <MenubarContent className="border-[#e4e4e4] bg-white p-0">
          <DropdownMenu items={Careers} />
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="group p-0 cursor-pointer">
          <span className="text-header-sm uppercase hover:text-base2 transition-color duration-300">
            ABOUT
          </span>
          <Arrow />
        </MenubarTrigger>
        <MenubarContent className="border-[#e4e4e4] bg-white p-0">
          <DropdownMenu items={Abouts} />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
