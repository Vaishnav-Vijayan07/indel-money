import Image from "next/image";
import styles from './Header.module.scss';
import { ShiftingDropDown } from "./NavLinks";


export default function Header() {
  return (
    <header className="w-full h-">
      <div className="container">
        <div className="flex items-center h-[80px]">
          <div className="w-[140px]">
            <Image
              src="/icons/logo_sm.svg"
              alt="Logo"
              width={50}
              height={30}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
          </div>
          <nav className="w-[calc(100%-140px)] flex justify-end">
            
            
            <ShiftingDropDown />


            {/* <button className={`${styles.contact__btn} {""}`}>Contact</button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
