
import Image from "next/image";
import NavMenu from "./NavMenu";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu"

export default function Header() {
  return (
    <header className="w-full relative z-10 flex items-center" style={{ height: "var(--header-y)" }}>
      <div className="container">
        <div className="flex items-center">
          <div className="w-[60px] xl:w-[90px] 2xl:w-[120px] 3xl:w-[140px]">
            <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
              <Image
                src="/icons/logo_sm.svg"
                alt="Logo"
                width={145}
                height={75}
              />
            </Link>
          </div>
          <nav className="w-[calc(100%-60px)] xl:w-[calc(100%-90px)] 2xl:w-[calc(100%-120px)] 3xl:w-[calc(100%-140px)] flex justify-end">
            <div className="flex items-center gap-[6px] xl:gap-[10px] 2xl:gap-[14px] 3xl:gap-[14px]">
              <div>
                <NavMenu />
              </div>
              <div>
                <ContactBox href="/" src="/images/icon-map.svg" title="Branch Locator" alt="location" />
              </div>
              <div>
                <ContactBox href="tel:18004253990" src="/images/icon-call.svg" title="1800 4253 990" alt="call" />
              </div>
              <div>
                <Link href={"/"} className="w-[10px] lg:w-[14px] 2xl:w-[18px] h-auto block transition-transform duration-300 hover:scale-105">
                  <Image src={"/images/icon-appStore.svg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    alt="app"
                  />
                </Link>
              </div>
              <div>
                <Link href={"tel:18004253990"} className="w-[10px] lg:w-[14px] 2xl:w-[18px] h-auto block transition-transform duration-300 hover:scale-105">
                  <Image
                    src={"/images/icon-playStore.svg"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    alt="app"
                  />
                </Link>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="btn btn-base1 min-w-[80px] lg:min-w-[85px] xl:min-w-[95px] 2xl:min-w-[115px] 3xl:min-w-[140px] cursor-pointer">
                    quick pay
                    <Image
                      src="/images/icon-dropdown.svg"
                      width={11}
                      height={6}
                      style={{
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                      alt="dropdown"
                      className="ml-1"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#d2dff6] border-none">
                    <DropdownMenuLabel><div className="text-header-sm">Payment modes</div></DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-black/20" />
                    <DropdownMenuItem>
                      <Link href="/" className="text-header-sm hover:text-base2">Payment 1</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/" className="text-header-sm hover:text-base2">Payment 2</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/" className="text-header-sm hover:text-base2">Payment 3</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <Link href={"/"} className="btn btn-base2 min-w-[80px] lg:min-w-[85px] xl:min-w-[95px] 2xl:min-w-[115px] 3xl:min-w-[140px]">
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


function ContactBox({ href, src, title, alt }) {
  return (
    <a href={href} className="group flex items-center gap-1">
      <span>
        <Image src={src} width={15} height={15} alt={alt} className="w-[10px] h-[auto] lg:w-[12px] 3xl:w-[14px] block" />
      </span>
      <span className="text-header-sm group-hover:text-base2 transition-color duration-300">{title}</span>
    </a>
  )
}


