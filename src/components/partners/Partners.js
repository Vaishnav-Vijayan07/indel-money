"use client";
import { navigationItems } from "@/constants/constants";
import React, { useState } from "react";
import PageBreadcrumb from "../common/PageBreadcrumb";
import Image from "next/image";
import PartnerLogo from "./PartnerLogo";

function PartnersSection({ content, initialError, partners }) {
  

  // State to track the active tab's href
  const data = partners;
  const [activeTab, setActiveTab] = useState("/partners");
  const [tabItems, setTabItems] = useState([]);
  const activeDataKey = navigationItems.find((item) => item.href === activeTab)?.key;
  const activePartners = data?.[activeDataKey] || [];


  console.log(content.content)

  // Find the active navigation item based on the activeTab href
  const activeNavItem = React.useMemo(() => {
    return navigationItems.find((navItem) => navItem.href === activeTab) || navigationItems[0];
  }, [activeTab, navigationItems]);

  const handleClick = (href) => {
    setActiveTab(href);
  };

  return (
    <section className="w-full block py-[30px] lg:py-[40px] 2xl:py-[50px]">
      <div className="container">
        <div className="w-full mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px]">
          <div className="text-title1 font-bold text-base2">{content?.content?.title}</div>
          <PageBreadcrumb />
        </div>
        <div className="flex flex-wrap -mx-[10px] lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[30px] 3xl:-mx-[35px] gap-y-[25px]">
          <div className="w-full sm:w-[220px] lg:w-[320px] xl:w-[420px] 2xl:w-[476px] 3xl:w-[576px] px-[10px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px] 3xl:px-[35px]">
            <div className="hidden sm:block">
              <aside className="w-full h-full bg-base3 py-[10px] lg:py-[15px] 2xl:py-[20px] 3xl:py-[25px] rounded-[10px] lg:rounded-[15px] 2xl:rounded-[20px] 3xl:rounded-[24px]">
                <ol>
                  {navigationItems.map((navItem, index) => (
                    <li key={index} onClick={() => handleClick(navItem?.href)} className="w-full h-auto relative z-0 cursor-pointer">
                      <div
                        className={`${
                          activeTab === navItem.href
                            ? "text-white font-medium bg-[#de5647] pointer-events-none"
                            : "text-[#050505] font-normal hover:bg-base1/8 bg-transparent "
                        } text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] text-nowrap text-ellipsis capitalize w-full h-full  block p-[10px_15px] lg:p-[10px_20px] xl:p-[15px_30px] 2xl:p-[20px_40px] 3xl:p-[22px_50px] transition-background duration-300`}
                      >
                        {navItem.title}
                        {activeTab === navItem.href && (
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
                      </div>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
            <div className="block sm:hidden">
              {/* <MobAsideMenu navigationItems={navigationItems} /> */}

              <aside className="w-full h-auto bg-base3 p-[15px_10px] rounded-[20px]">
                <ol className="flex flex-wrap -mx-[2px]">
                  {navigationItems.map((navItem, index) => (
                    <li key={index} onClick={() => handleClick(navItem.href)} className="p-[2px_2px] 4xs:p-[4px_2px]">
                      <div className="w-full h-auto relative z-0">
                        <div
                          className={`${
                            activeTab === navItem.href
                              ? "font-bold text-white bg-base2 pointer-events-none"
                              : "font-medium text-white hover:bg-base1/8 bg-base1 "
                          } 
                  text-[12px] text-nowrap text-ellipsis capitalize w-full h-full block p-[4px_10px] 4xs:p-[8px_15px] rounded-[10px] transition-background duration-300`}
                        >
                          {navItem.title}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
          <div className="w-full sm:w-[calc(100%-220px)] lg:w-[calc(100%-320px)] xl:w-[calc(100%-420px)] 2xl:w-[calc(100%-476px)] 3xl:w-[calc(100%-576px)] px-[10px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px] 3xl:px-[35px]">
            {/* <div className="text-title1 font-medium mb-[10px] xl:mb-[15px] 3xl:mb-[20px]">
                Debt Partners
              </div>
              <div className="flex flex-wrap -mx-[2px] 4xs:-mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
                {navigationItems.items?.map((item, index) => (
                  <div
                    key={index}
                    className="w-1/4 sm:w-1/3 md:w-1/4 p-[4px_2px] 4xs:p-[6px_4px] lg:p-[10px_6px] 2xl:p-[15px_10px]"
                  >
                    <PartnerLogo item={item} />
                  </div>
                ))}
              </div> */}

            {/* Active Tab Title */}
            <div className="text-title1 font-medium mb-[10px] xl:mb-[15px] 3xl:mb-[20px]">{activeNavItem.title}</div>
            {/* Items for Active Tab */}
            <div className="flex flex-wrap -mx-[2px] 4xs:-mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
              {activePartners?.length > 0 ? (
                activePartners.map((item, index) => (
                  <div key={index} className="w-1/4 sm:w-1/3 md:w-1/4 p-[4px_2px] 4xs:p-[6px_4px] lg:p-[10px_6px] 2xl:p-[15px_10px]">
                    <PartnerLogo image={item?.image} name={item?.name} />
                  </div>
                ))
              ) : (
                <div className="text-sm1">No partners available for this category.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
