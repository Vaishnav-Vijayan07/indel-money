"use client";
import { useState } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'

export default function AsideMenu({ navigationItems }) {
    const pathname = usePathname();
    const [openMenuIndex, setOpenMenuIndex] = useState(null);

    // Toggle submenu for specific item
    const toggleSubmenu = (index) => {
        // If clicking the same menu that's already open, close it
        // Otherwise, open the clicked menu and close any other
        setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    return (
        <aside className="w-full h-full bg-base3 lg:py-[15px] 2xl:py-[20px] 3xl:py-[25px] rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px]">
            <ol>
                {navigationItems?.map((item, index) => {

                    return (
                        <li key={index}>
                            <div
                                className="w-full h-auto relative z-0"
                            >
                                <Link
                                    href={item.href}
                                    className={`text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] text-[#050505] text-nowrap text-ellipsis capitalize font-normal w-full h-full  block p-[10px_15px] lg:p-[10px_20px] xl:p-[15px_30px] 2xl:p-[20px_40px] 3xl:p-[30px_50px] ${pathname === item.href ? "bg-base2" : "bg-transparent"}`}
                                >
                                    {item.title}
                                </Link>

                                {item.sub_menu && (
                                    <button
                                        onClick={() => toggleSubmenu(index)}
                                        className="w-[20px] lg:w-[25px] 2xl:w-[30px] 3xl:w-[35px] aspect-4/4 absolute z-1 top-0 bottom-0 right-[15px] lg:right-[20px] xl:right-[30px] 2xl:right-[40px] 3xl:right-[50px] my-auto  "
                                        aria-expanded={openMenuIndex === index ? "true" : "false"}
                                        aria-label={`Toggle ${item.title} submenu`}
                                    >
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 0C8.50695 0 0 8.50695 0 19C0 29.493 8.50695 38 19 38C29.493 38 38 29.493 38 19C38 8.50695 29.493 0 19 0ZM29.9102 19.5418L23.4064 26.1012C23.336 26.1762 23.2512 26.2362 23.1572 26.2778C23.0632 26.3195 22.9618 26.3418 22.8591 26.3436C22.7563 26.3454 22.6541 26.3266 22.5587 26.2883C22.4633 26.25 22.3766 26.1929 22.3036 26.1206C22.2306 26.0482 22.1729 25.9619 22.1338 25.8668C22.0947 25.7717 22.075 25.6697 22.076 25.5669C22.0769 25.4641 22.0985 25.3626 22.1393 25.2682C22.1802 25.1739 22.2395 25.0887 22.3139 25.0177L27.5181 19.7696H8.63684C8.43271 19.7696 8.23695 19.6886 8.09261 19.5442C7.94828 19.3999 7.86719 19.2041 7.86719 19C7.86719 18.7959 7.94828 18.6001 8.09261 18.4558C8.23695 18.3114 8.43271 18.2304 8.63684 18.2304H27.5173L22.3131 12.9823C22.2388 12.9113 22.1794 12.8261 22.1386 12.7318C22.0977 12.6374 22.0762 12.5359 22.0752 12.4331C22.0743 12.3303 22.0939 12.2283 22.133 12.1332C22.1721 12.0381 22.2299 11.9518 22.3029 11.8794C22.3758 11.8071 22.4626 11.75 22.558 11.7117C22.6534 11.6734 22.7555 11.6546 22.8583 11.6564C22.9611 11.6582 23.0625 11.6805 23.1565 11.7222C23.2505 11.7638 23.3352 11.8238 23.4056 11.8988L29.9102 18.4582C30.0532 18.6022 30.1335 18.797 30.1335 19C30.1335 19.203 30.0532 19.3978 29.9102 19.5418Z" fill="white" />
                                        </svg>
                                    </button>
                                )}
                            </div>

                            {item.sub_menu && (openMenuIndex === index) && (
                                <ul className="submenu pl-4 lg:pl-6 xl:pl-8">
                                    {item.sub_menu.map((subItem, subIndex) => {

                                        return (
                                            <li key={subIndex} className="submenu-item">
                                                <Link
                                                    href={subItem.href}
                                                    className={`text-white text-nowrap text-ellipsis capitalize block text-xs lg:text-base xl:text-xl 2xl:text-2xl p-2 lg:p-4 xl:p-5 2xl:p-6 ${pathname === subItem.href ? 'bg-base2' : 'bg-transparent'}`}
                                                >
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ol>
        </aside>
    );
}
