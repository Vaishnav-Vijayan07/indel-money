import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';


const navigationMenuTriggerStyle = () => 'hover:bg-gray-100 p-2 rounded-md transition';

const GoldLoans = [
  {
    image: "/images/icon-goldloan-1.svg",
    alt: "goldloan",
    title: "Gold Loan Steps:",
    link: "/",
  },
  {
    image: "/images/icon-goldloan-1.svg",
    alt: "goldloan",
    title: "Instant & hassle free Gold Loan",
    link: "/",
  },
  {
    image: "/images/icon-goldloan-1.svg",
    alt: "goldloan",
    title: "Our Easy Step Gold Loan",
    link: "/",
  },
  {
    image: "/images/icon-goldloan-4.svg",
    alt: "goldloan",
    title: "Gold Loan Scheme",
    link: "/",
  }
];

const NavMenu = () => {
  return (
    <div className='flex gap-[8px] xl:gap-[12px] 2xl:gap-[14px]'>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-[8px] xl:gap-[12px] 2xl:gap-[14px]">
          {/* Gold Loan Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0 cursor-pointer"><span className="text-header-sm uppercase hover:text-base2">Gold Loan</span></NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white border-none shadow-none">
              <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {GoldLoans.map((goldLoan, index) => (
                <li key={index}>
                  <NavigationMenuLink asChild>
                    <Link href={goldLoan.link}
                      className="group flex gap-[10px] 2xl:gap-[20px] flex-nowrap flex-row items-center"
                    >
                      <div className="w-[40px] h-[40px] bg-gradient-to-r from-base1 to-base2 rounded-full flex items-center justify-center 2xl:w-[60px] 2xl:h-[60px] transition-transform duration-300 group-hover:scale-95">
                        <Image src={goldLoan.image} width={28} height={28} alt={goldLoan.alt} className="w-full h-full bloack max-w-2/4" />
                      </div>
                      <div className="text-header-sm">{goldLoan.title}</div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Foreign Exchange Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0 cursor-pointer"><span className="text-header-sm uppercase hover:text-base2">Foreign Exchange</span></NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block"
                    >
                      <div className="">Foreign Exchange 1</div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block"
                    >
                      <div className="">Foreign Exchange 2</div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block"
                    >
                      <div className="">Foreign Exchange 3</div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block"
                    >
                      <div className="">Foreign Exchange 4</div>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Other Loan Menu */}
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} p-0 cursor-pointer`}><span className="text-header-sm uppercase hover:text-base2">Other Loan</span></NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Careers Menu */}
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} p-0 cursor-pointer`}><span className="text-header-sm uppercase hover:text-base2">Careers</span></NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          {/* About Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-header-sm uppercase p-0 cursor-pointer"><span className="text-header-sm uppercase hover:text-base2">About</span></NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="md:w-[150px] lg:w-[200px]">
                <li>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink>About 1</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink>About 2</NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavMenu;
