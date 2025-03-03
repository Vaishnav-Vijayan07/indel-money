import Image from "next/image";
import styles from './Header.module.scss';
import { ShiftingDropDown } from "./NavLinks";
import Link from "next/link";
// import iconMap from "public/images/icon-map.svg";
// import iconCall from "@/public/images/icon-call.svg";
// import appStore from "public/images/icon-appStore.svg";
// import playStore from "./images/MainSlide1.webp";



export default function Header() {
  return (
    <header className="w-full" style={{ height: "var(--header-y)" }}>
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
              <ShiftingDropDown />
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
                <Link href={"/"} className="flex items-center gap-2">
                  <span>QUICK PAY</span>
                </Link>
              </div>
              <div>
                <Link href={"/"} className="flex items-center gap-2">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>


            {/* <button className={`${styles.contact__btn} {""}`}>Contact</button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
