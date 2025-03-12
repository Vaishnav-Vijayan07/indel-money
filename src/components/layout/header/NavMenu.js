import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';


const navigationMenuTriggerStyle = () => 'hover:bg-gray-100 p-2 rounded-md transition';

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
  }
];

const NavMenu = () => {
  return (
      <NavigationMenu className="h-[var(--header-y)] lg:px-[10px] 2xl:px-[15px] 3xl:px-[20px]">
        <NavigationMenuList className="flex gap-[8px] xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[15px]">
          {/* Gold Loan Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0 cursor-pointer"><span className="text-header-sm uppercase hover:text-base2 transition-color duration-300">Gold Loan</span></NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white p-0">
              <ul className="grid w-[400px] p-[10px] 3xl:p-[15px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {GoldLoans.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className="group flex gap-[5px] lg:gap-[8px] 3xl:gap-[10px] p-[10px] 3xl:p-[15px] flex-row items-center"
                      >
                        <div className="w-[40px] h-[40px] bg-gradient-to-r from-base1 to-base2 rounded-full flex items-center justify-center 3xl:w-[60px] 3xl:h-[60px] transition-transform duration-300 group-hover:scale-95">
                          <Image src={item.image} width={28} height={28} alt={item.alt} className="w-full h-full block max-w-2/4 object-contain" />
                        </div>
                        <div className="w-[calc(100%-40px)] 3xl:w-[calc(100%-60px)] text-header-sm group-hover:text-base2 transition-color duration-300">{item.title}</div>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Foreign Exchange Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0 cursor-pointer"><span className="text-header-sm uppercase hover:text-base2 transition-color duration-300">Foreign Exchange</span></NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white p-0">
              <ul className="grid w-[400px] p-[10px] 3xl:p-[15px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {GoldLoans.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className="group flex gap-[5px] lg:gap-[8px] 3xl:gap-[10px] p-[10px] 3xl:p-[15px] flex-row items-center"
                      >
                        <div className="w-[40px] h-[40px] bg-gradient-to-r from-base1 to-base2 rounded-full flex items-center justify-center 3xl:w-[60px] 3xl:h-[60px] transition-transform duration-300 group-hover:scale-95">
                          <Image src={item.image} width={28} height={28} alt={item.alt} className="w-full h-full block max-w-2/4 object-contain" />
                        </div>
                        <div className="w-[calc(100%-40px)] 3xl:w-[calc(100%-60px)] text-header-sm group-hover:text-base2 transition-color duration-300">{item.title}</div>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Other Loan Menu */}
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} p-0 cursor-pointer`}><span className="text-header-sm uppercase hover:text-base2 transition-color duration-300">Other Loan</span></NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Careers Menu */}
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} p-0 cursor-pointer`}><span className="text-header-sm uppercase hover:text-base2 transition-color duration-300">Careers</span></NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* About Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0 cursor-pointer"><span className="text-header-sm uppercase hover:text-base2 transition-color duration-300">About</span></NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white p-0">
              <ul className="grid w-[400px] p-[10px] 3xl:p-[15px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {GoldLoans.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className="group flex gap-[5px] lg:gap-[8px] 3xl:gap-[10px] p-[10px] 3xl:p-[15px] flex-row items-center"
                      >
                        <div className="w-[40px] h-[40px] bg-gradient-to-r from-base1 to-base2 rounded-full flex items-center justify-center 3xl:w-[60px] 3xl:h-[60px] transition-transform duration-300 group-hover:scale-95">
                          <Image src={item.image} width={28} height={28} alt={item.alt} className="w-full h-full block max-w-2/4 object-contain" />
                        </div>
                        <div className="w-[calc(100%-40px)] 3xl:w-[calc(100%-60px)] text-header-sm group-hover:text-base2 transition-color duration-300">{item.title}</div>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
  );
};

export default NavMenu;