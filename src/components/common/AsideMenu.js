"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
    <aside className="w-full h-full bg-base3 py-[10px] lg:py-[15px] 2xl:py-[20px] 3xl:py-[25px] rounded-[10px] lg:rounded-[15px] 2xl:rounded-[20px] 3xl:rounded-[24px]">
      <ol>
        {navigationItems?.map((item, index) => {
          return (
            <li key={index}>
              <div className="w-full h-auto relative z-0">
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "text-white font-medium bg-[#de5647] pointer-events-none"
                      : "text-[#050505] font-normal hover:bg-base1/8 bg-transparent "
                  } text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] text-nowrap text-ellipsis capitalize w-full h-full  block p-[10px_15px] lg:p-[10px_20px] xl:p-[15px_30px] 2xl:p-[20px_40px] 3xl:p-[22px_50px] transition-background duration-300`}
                >
                  {item.title}
                  {pathname === item.href && (
                    <div className="w-[20px] lg:w-[20px] xl:w-[25px] 2xl:w-[30px] 3xl:w-[35px] absolute z-1 top-0 bottom-0 right-[15px] lg:right-[20px] xl:right-[30px] 2xl:right-[40px] 3xl:right-[50px] my-auto flex">
                      <Image
                        src="/images/icon-aside-dropdown.svg"
                        alt="icon-aside-dropdown"
                        width={35}
                        height={35}
                        className="w-[15px] lg:w-[30px] 2xl:w-[35px] m-auto"
                      />
                    </div>
                  )}
                </Link>

                {item.sub_menu && (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="w-[20px] lg:w-[20px] xl:w-[25px] 2xl:w-[30px] 3xl:w-[35px] absolute z-1 top-0 bottom-0 right-[15px] lg:right-[20px] xl:right-[30px] 2xl:right-[40px] 3xl:right-[50px]"
                    aria-expanded={openMenuIndex === index ? "true" : "false"}
                    aria-label={`Toggle ${item.title} submenu`}
                  >
                    <svg
                      width="11"
                      height="6"
                      viewBox="0 0 11 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className={`${
                        item.sub_menu &&
                        openMenuIndex === index &&
                        "scale-y-[-1]"
                      } w-[10px] block m-auto`}
                    >
                      <path
                        d="M5.50002 6L10.2632 0.75H0.736877L5.50002 6Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>

              {item.sub_menu && openMenuIndex === index && (
                <ul className="submenu pl-4 lg:pl-6 xl:pl-8">
                  {item.sub_menu.map((subItem, subIndex) => {
                    return (
                      <li key={subIndex} className="submenu-item">
                        <Link
                          href={subItem.href}
                          className={`text-white text-nowrap text-ellipsis capitalize block text-xs lg:text-base xl:text-xl 2xl:text-2xl p-2 lg:p-4 xl:p-5 2xl:p-6 ${
                            pathname === subItem.href
                              ? "bg-base2"
                              : "bg-transparent"
                          }`}
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
