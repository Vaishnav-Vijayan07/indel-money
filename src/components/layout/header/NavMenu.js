import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import Link from "next/link";
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


function MegaMenu({ items }) {
    const pathname = usePathname();
    // const pathname = usePathname();
    return (
        <ul className="grid md:grid-cols-2 p-[10px] 3xl:p-[15px] w-[360px] lg:w-[420px] 2xl:w-[576px] 3xl:w-[600px]">
            {items.map((item, index) => (
                <li key={index}>
                    <Link href={item.link} legacyBehavior passHref>
                        <div className="group flex flex-row items-center p-[10px] 3xl:p-[10px] cursor-pointer">
                            <div className="w-[40px] h-[40px] bg-gradient-to-r from-base1 to-base2 rounded-full flex items-center justify-center 3xl:w-[60px] 3xl:h-[60px] transition-transform duration-300 group-hover:scale-95">
                                <Image
                                    src={item.image}
                                    width={28}
                                    height={28}
                                    alt={item.alt}
                                    className="w-full h-full block max-w-2/4 object-contain"
                                />
                            </div>
                            <div
                                className={`${pathname === item.link ? "text-base2" : ""
                                    } w-[calc(100%-40px)] 3xl:w-[calc(100%-60px)] text-header1 capitalize pl-[5px] lg:pl-[8px] 3xl:pl-[10px] group-hover:text-base2! transition-color duration-300`}
                            >
                                {item.title}
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default function NavMenu() {
    const pathname = usePathname();
    const tabStyle =
        "text-header1 uppercase hover:text-base2! transition-color duration-300 group p-0 cursor-pointer data-[state=open]:text-base2!";

    return (
        <NavigationMenu>
            <NavigationMenuList
            // className="gap-[8px] xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[15px]"
            >
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={tabStyle}>
                        Gold Loan
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white !border-0 outline-none ring-0 p-0">
                        <MegaMenu items={GoldLoans} />
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={tabStyle}>
                        <Link
                            href={"#"}
                            className={`${pathname === "#" ? "" : ""
                                } text-header1 uppercase hover:text-base2! transition-color duration-300 p-0 cursor-pointer block`}
                        >FOREIGN EXCHANGE</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={tabStyle}>
                        other loan
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white !border-0 outline-none ring-0 p-0">
                        <MegaMenu items={OtherLoans} />
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger >
                        <NavigationMenuLink asChild className={tabStyle}>
                            <Link
                                href={"#"}
                                className={`${pathname === "#" ? "" : ""
                                    } text-header1 uppercase hover:text-base2! transition-color duration-300 p-0 cursor-pointer block`}>
                                careers
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border-[#e4e4e4] bg-white p-0">
                        <DropdownMenu items={Careers} />
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <NavigationMenuLink asChild className={tabStyle}>
                            <Link
                                href={"/about"}
                                className={`${pathname === "#" ? "" : ""
                                    } text-header1 uppercase hover:text-base2! transition-color duration-300 p-0 cursor-pointer block`}>
                                about
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border-[#e4e4e4] bg-white p-0">
                        <DropdownMenu items={Abouts} />
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function DropdownMenu({ items }) {
    const pathname = usePathname();
    return (
        <ul className="flex flex-col p-[5px] 3xl:p-[10px] w-[180px] lg:w-[200px] 2xl:w-[240px]">
            {items.map((item, index) => (
                <li key={index}>
                    <Link href={item.link} legacyBehavior passHref>
                        <div
                            className={`${pathname === item.link ? "text-base2" : ""
                                } text-header1 hover:text-base2! capitalize cursor-pointer transition-color duration-300 p-1`}
                        >
                            {item.title}
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
