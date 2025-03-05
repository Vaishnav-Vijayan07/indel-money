import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import Link from 'next/link';

const navigationMenuTriggerStyle = () => 'hover:bg-gray-100 p-2 rounded-md transition';

const NavMenu = () => {
  return (
    <div className='flex gap-[8px] xl:gap-[12px] 2xl:gap-[14px]'>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-[8px] xl:gap-[12px] 2xl:gap-[14px]">
          {/* Gold Loan Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0 cursor-pointer"><span className="text-header-sm uppercase hover:text-base2">Gold Loan</span></NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="md:w-[150px] lg:w-[200px]">
                <li>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Gold Loan Steps</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Instant & hassle free Gold Loan</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Our Easy Step Gold Loan</NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Gold Loan Scheme</NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Foreign Exchange Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0 cursor-pointer"><span className="text-header-sm uppercase hover:text-base2">Foreign Exchange</span></NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <Link href="/">
                    <NavigationMenuLink asChild>
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 mt-4 text-lg font-medium">Foreign Exchange</div>
                        <p className="leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and Tailwind CSS.
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </Link>
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
