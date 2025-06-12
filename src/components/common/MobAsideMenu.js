"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobAsideMenu({ navigationItems }) {
  const pathname = usePathname();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  // Toggle submenu for specific item
  const toggleSubmenu = (index) => {
    // If clicking the same menu that's already open, close it
    // Otherwise, open the clicked menu and close any other
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <aside className="w-full h-auto bg-base3 p-[15px_10px] rounded-[20px]">
      <ol className="flex flex-wrap -mx-[2px]">
        {navigationItems?.map((item, index) => {
          return (
            <li key={item.id} className="p-[2px_2px] 4xs:p-[4px_2px]">
              <div
                className={`${
                  item.sub_menu && openMenuIndex === item.id ? "z-1" : "z-0"
                } w-full h-auto relative`}
              >
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href
                      ? "font-bold text-white bg-base2 pointer-events-none"
                      : "font-medium text-white hover:bg-base1/8 bg-base1 "
                  }                  
                ${item.sub_menu && "pr-[20px] 4xs:pr-[24px]"} 
                text-[12px] text-nowrap text-ellipsis capitalize w-full h-full block p-[4px_10px] 4xs:p-[8px_15px] rounded-[10px] transition-background duration-300`}
                >
                  {item.title}
                </Link>

                {item.sub_menu && (
                  <button
                    onClick={() => toggleSubmenu(item.id)}
                    className="w-[10px] aspect-4/4 absolute z-1 top-0 bottom-0 right-[10px] my-auto"
                    aria-expanded={openMenuIndex === item.id ? "true" : "false"}
                    aria-label={`Toggle ${item.title} submenu`}
                  >
                    <svg
                      width="11"
                      height="6"
                      viewBox="0 0 11 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className={`${item.sub_menu && openMenuIndex === item.id && ("scale-y-[-1]")} w-[10px] block`}
                    >
                      <path
                        d="M5.50002 6L10.2632 0.75H0.736877L5.50002 6Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </button>
                )}

                {item.sub_menu && openMenuIndex === item.id && (
                  <ul className="w-[140px] h-auto bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.4)] rounded-[10px] absolute z-2 top-full left-0 p-[4px_0]">
                    {item.sub_menu.map((subItem, subIndex) => {
                      return (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.href}
                            className={`text-[12px] text-black text-nowrap text-ellipsis capitalize block p-[2px_10px] 4xs:p-[4px_15px] overflow-hidden hover:bg-base2/20 transition-background duration-300 ${
                              pathname === subItem.href
                                ? "bg-base2/30"
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
              </div>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
