"use client";
import { navigationItems } from "@/constants/constants";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import PageBreadcrumb from "../common/PageBreadcrumb";
import Image from "next/image";
import PartnerLogo from "./PartnerLogo";
import api from "@/lib/api/axios";

// Loading skeleton component
const PartnersSkeleton = () => (
  <div className="flex flex-wrap -mx-[2px] 4xs:-mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
    {Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="w-1/4 sm:w-1/3 md:w-1/4 p-[4px_2px] 4xs:p-[6px_4px] lg:p-[10px_6px] 2xl:p-[15px_10px]">
        <div className="bg-gray-200 animate-pulse rounded-lg aspect-square"></div>
      </div>
    ))}
  </div>
);

// Error display component
const ErrorMessage = ({ message, onRetry }) => (
  <div className="text-center py-8">
    <div className="text-red-600 mb-4">{message}</div>
    {onRetry && (
      <button onClick={onRetry} className="px-4 py-2 bg-[#de5647] text-white rounded-lg hover:bg-[#c44a3b] transition-colors">
        Retry
      </button>
    )}
  </div>
);

// Empty state component
const EmptyState = ({ activeTab }) => (
  <div className="text-center py-12">
    <div className="text-gray-500 text-lg mb-2">No partners found</div>
    <div className="text-gray-400 text-sm">No partners are available for {activeTab?.title || "this category"} at the moment.</div>
  </div>
);

// Navigation item component for better reusability
const NavigationItem = ({ item, isActive, onClick, isMobile = false }) => {
  const baseClasses = isMobile
    ? "text-[12px] text-nowrap text-ellipsis capitalize w-full h-full block p-[4px_10px] 4xs:p-[8px_15px] rounded-[10px] transition-all duration-300"
    : "text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] text-nowrap text-ellipsis capitalize w-full h-full block p-[10px_15px] lg:p-[10px_20px] xl:p-[15px_30px] 2xl:p-[20px_40px] 3xl:p-[22px_50px] transition-all duration-300";

  const activeClasses = isMobile ? "font-bold text-white bg-base2 pointer-events-none" : "text-white font-medium bg-[#de5647] pointer-events-none";

  const inactiveClasses = isMobile
    ? "font-medium text-white hover:bg-base1/8 bg-base1"
    : "text-[#050505] font-normal hover:bg-base1/8 bg-transparent";

  return (
    <div
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} cursor-pointer`}
      onClick={() => onClick(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(item);
        }
      }}
      aria-selected={isActive}
    >
      {item.title}
      {isActive && !isMobile && (
        <div className="w-[20px] lg:w-[20px] xl:w-[25px] 2xl:w-[30px] 3xl:w-[35px] absolute z-1 top-0 bottom-0 right-[15px] lg:right-[20px] xl:right-[30px] 2xl:right-[40px] 3xl:right-[50px] my-auto flex">
          <Image
            src="/images/icon-aside-dropdown.svg"
            alt="Selected indicator"
            width={35}
            height={35}
            className="w-[15px] lg:w-[30px] 2xl:w-[35px] m-auto"
          />
        </div>
      )}
    </div>
  );
};

function PartnersSection({ content, initialError, partners = [] }) {
  
  // State management
  const [activeTab, setActiveTab] = useState(partners[0] || null);
  const [partnersData, setPartnersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(initialError || null);
  const [dataCache, setDataCache] = useState(new Map());

  // Memoized values
  const hasValidPartners = useMemo(() => partners && partners.length > 0, [partners]);
  const currentPartnersCount = useMemo(() => partnersData?.length || 0, [partnersData]);

  // API call with caching and better error handling
  const fetchPartnersData = useCallback(
    async (partnerId) => {
      if (!partnerId) return;

      // Check cache first
      if (dataCache.has(partnerId)) {
        setPartnersData(dataCache.get(partnerId));
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const { data } = await api.get(`/web/partner-data?type=${partnerId}`);
        const partnerData = data?.partnerData || [];

        // Cache the result
        setDataCache((prev) => new Map(prev).set(partnerId, partnerData));
        setPartnersData(partnerData);
      } catch (error) {
        console.error("Error fetching partners data:", error);
        const errorMessage = error.response?.data?.message || error.message || "Failed to load partners data. Please try again.";
        setError(errorMessage);
        setPartnersData([]);
      } finally {
        setLoading(false);
      }
    },
    [dataCache]
  );

  // Tab change handler
  const handleTabChange = useCallback(
    (newTab) => {
      if (newTab?.id === activeTab?.id) return; // Prevent unnecessary re-renders
      setActiveTab(newTab);
    },
    [activeTab?.id]
  );

  // Error retry handler
  const handleRetry = useCallback(() => {
    if (activeTab?.id) {
      fetchPartnersData(activeTab.id);
    }
  }, [activeTab?.id, fetchPartnersData]);

  // Effects
  useEffect(() => {
    if (!hasValidPartners) {
      setError("No partner categories available.");
      return;
    }

    if (!activeTab && partners[0]) {
      setActiveTab(partners[0]);
    }
  }, [hasValidPartners, activeTab, partners]);

  useEffect(() => {
    if (activeTab?.id) {
      fetchPartnersData(activeTab.id);
    }
  }, [activeTab?.id, fetchPartnersData]);

  // Early return for invalid state
  if (!hasValidPartners) {
    return (
      <section className="w-full block py-[30px] lg:py-[40px] 2xl:py-[50px]">
        <div className="container">
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No partner categories available</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full block py-[30px] lg:py-[40px] 2xl:py-[50px]">
      <div className="container">
        {/* Header Section */}
        <header className="w-full mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px]">
          <h1 className="text-title1 font-bold text-base2">{content?.title || "Our Partners"}</h1>
          <PageBreadcrumb />
        </header>

        <div className="flex flex-wrap -mx-[10px] lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[30px] 3xl:-mx-[35px] gap-y-[25px]">
          {/* Sidebar Navigation */}
          <aside className="w-full sm:w-[220px] lg:w-[320px] xl:w-[420px] 2xl:w-[476px] 3xl:w-[576px] px-[10px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px] 3xl:px-[35px]">
            {/* Desktop Navigation */}
            <div className="hidden sm:block">
              <nav
                className="w-full h-full bg-base3 py-[10px] lg:py-[15px] 2xl:py-[20px] 3xl:py-[25px] rounded-[10px] lg:rounded-[15px] 2xl:rounded-[20px] 3xl:rounded-[24px]"
                role="tablist"
                aria-label="Partner categories"
              >
                <ol className="list-none">
                  {partners.map((partner, index) => (
                    <li key={partner.id || index} className="w-full h-auto relative z-0">
                      <NavigationItem item={partner} isActive={activeTab?.id === partner.id} onClick={handleTabChange} />
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Mobile Navigation */}
            <div className="block sm:hidden">
              <nav className="w-full h-auto bg-base3 p-[15px_10px] rounded-[20px]" role="tablist" aria-label="Partner categories">
                <ol className="flex flex-wrap -mx-[2px] list-none">
                  {partners.map((partner, index) => (
                    <li key={partner.id || index} className="p-[2px_2px] 4xs:p-[4px_2px]">
                      <NavigationItem item={partner} isActive={activeTab?.id === partner.id} onClick={handleTabChange} isMobile={true} />
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="w-full sm:w-[calc(100%-220px)] lg:w-[calc(100%-320px)] xl:w-[calc(100%-420px)] 2xl:w-[calc(100%-476px)] 3xl:w-[calc(100%-576px)] px-[10px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px] 3xl:px-[35px]">
            {/* Active Tab Header */}
            <div className="flex items-center justify-between mb-[10px] xl:mb-[15px] 3xl:mb-[20px]">
              <h2 className="text-title1 font-medium">{activeTab?.title || "Partners"}</h2>
            </div>

            {/* Content Area */}
            <div role="tabpanel" aria-labelledby={`tab-${activeTab?.id}`}>
              {loading && <PartnersSkeleton />}

              {error && !loading && <ErrorMessage message={error} onRetry={handleRetry} />}

              {!loading && !error && currentPartnersCount === 0 && <EmptyState activeTab={activeTab} />}

              {!loading && !error && currentPartnersCount > 0 && (
                <div className="flex flex-wrap -mx-[2px] 4xs:-mx-[4px] lg:-mx-[6px] 2xl:-mx-[10px]">
                  {partnersData.map((item, index) => (
                    <div key={item.id || index} className="w-1/4 sm:w-1/3 md:w-1/4 p-[4px_2px] 4xs:p-[6px_4px] lg:p-[10px_6px] 2xl:p-[15px_10px]">
                      <PartnerLogo image={item?.logo} name={item?.name} loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
