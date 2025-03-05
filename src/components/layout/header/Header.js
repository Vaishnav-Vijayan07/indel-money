
import Image from "next/image";
import NavMenu from "./NavMenu";
import Link from "next/link";
// import iconMap from "public/images/icon-map.svg";
// import iconCall from "@/public/images/icon-call.svg";
// import appStore from "public/images/icon-appStore.svg";
// import playStore from "./images/MainSlide1.webp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




export default function Header() {
  return (
    <header className="w-full relative z-99" style={{ height: "var(--header-y)" }}>
      <div className="container">
        <div className="flex items-center h-[80px]">
          <div className="w-[140px]">
            <Image
              src="/icons/logo_sm.svg"
              alt="Logo"
              width={145}
              height={75}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <nav className="w-[calc(100%-140px)] flex justify-end">

            <div className="flex items-center gap-4">
              <div>
                <NavMenu />
              </div>
              <div>
                <Link href={"/"} className="flex items-center gap-2">
                  <span>
                    <Image src={"/images/icon-map.svg"} width={15} height={15} alt="map" />
                  </span>
                  <span>Branch Locator</span>
                </Link>
              </div>
              <div>
                <Link href={"tel:18004253990"} className="flex items-center gap-2">
                  <span>
                    <Image src={"/images/icon-call.svg"} width={15} height={15} alt="call" />
                  </span>
                  <span>1800 4253 990</span>
                </Link>
              </div>
              <div>
                <Link href={"/"} className="flex items-center gap-2">
                  <Image src={"/images/icon-appStore.svg"} width={18} height={18} alt="app" />
                </Link>
              </div>
              <div>
                <Link href={"tel:18004253990"} className="flex items-center gap-2">
                  <Image src={"/images/icon-playStore.svg"} width={18} height={18} alt="app" />
                </Link>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="btn btn-base2 min-w-[80px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[160px]">quick pay</DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <Link href={"/"} className="btn btn-base1 min-w-[80px] lg:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[160px]">
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}


