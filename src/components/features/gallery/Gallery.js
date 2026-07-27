"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/custom-tabs";
import CardSlider from "@/components/features/gallery/CardSlider";
import GalleryItem from "./GalleryItem";
import PaginationComponent from "@/components/Pagination";
import Link from "next/link";

// Constants
const ITEMS_PER_GROUP = 3;
const FILTER_TYPES = {
  ALL: "all",
  PHOTO: "image",
  VIDEO: "video",
};

const GALLERY_FILTERS = [
  { value: FILTER_TYPES.ALL, label: "All Gallery" },
  { value: FILTER_TYPES.PHOTO, label: "Photo Gallery" },
  { value: FILTER_TYPES.VIDEO, label: "Video Gallery" },
];

const btnStyle = `
  text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] 
  leading uppercase text-base1 rounded-[30px] overflow-hidden 
  w-1/2 sm:w-1/3 px-[30px] 2xl:px-[35px] 3xl:px-[50px] 
  py-[12px] 2xl:py-[15px] 3xl:py-[20px] h-fit 
  aria-selected:text-white cursor-pointer transition-colors 
  duration-200 hover:opacity-80
`
  .replace(/\s+/g, " ")
  .trim();

export default function Gallery({ title = "Gallery", description = "", medias = [], sliderItems = [], pagination = {} }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Memoized values
  const totalPages = useMemo(() => pagination?.totalPages || 1, [pagination?.totalPages]);

  // State management
  const [activeFilter, setActiveFilter] = useState(() => searchParams.get("type") || FILTER_TYPES.ALL);

  const [currentPage, setCurrentPage] = useState(() => parseInt(searchParams.get("page")) || 1);

  // Create slides from filtered medias
  const slides = useMemo(() => {
    if (!medias?.length) return [];

    return Array.from({ length: Math.ceil(medias.length / ITEMS_PER_GROUP) }, (_, i) => medias.slice(i * ITEMS_PER_GROUP, (i + 1) * ITEMS_PER_GROUP));
  }, [medias]);

  // URL query string management
  const createQueryString = useCallback(
    (updates) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value && value !== FILTER_TYPES.ALL) {
          params.set(key, value);
        } else if (key === "type" && value === FILTER_TYPES.ALL) {
          params.delete(key);
        } else if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      return params.toString();
    },
    [searchParams]
  );

  // Event handlers
  const handlePageChange = useCallback(
    (newPage) => {
      if (newPage === currentPage) return;

      const queryString = createQueryString({
        page: newPage.toString(),
        type: activeFilter,
      });

      setCurrentPage(newPage);
      router.push(`?${queryString}`, { scroll: false });
    },
    [activeFilter, createQueryString, router, currentPage]
  );

  const handleTabClick = useCallback(
    (type) => {
      if (type === activeFilter) return;

      const queryString = createQueryString({
        type: type,
        page: "1",
      });

      setActiveFilter(type);
      setCurrentPage(1);
      router.push(`?${queryString}`, { scroll: false });
    },
    [createQueryString, router, activeFilter]
  );

  // Sync with URL parameters
  useEffect(() => {
    const urlFilter = searchParams.get("type") || FILTER_TYPES.ALL;
    const urlPage = parseInt(searchParams.get("page")) || 1;

    if (urlFilter !== activeFilter) {
      setActiveFilter(urlFilter);
    }

    if (urlPage !== currentPage) {
      setCurrentPage(urlPage);
    }
  }, [searchParams, activeFilter, currentPage]);

  // Gallery grid component
  const GalleryGrid = useMemo(
    () =>
      ({ slides }) => {
        return (
          <div className="mx-auto flex flex-wrap">
            {slides?.map((group, index) => {
              const gallClass = index % 2 === 0 ? "flex-col" : "flex-col-reverse";

              return (
                <div
                  key={`gallery-group-${index}`}
                  className={`
              ${gallClass} w-full lg:w-1/2 mb-2 
              h-[400px] md:h-[468px] xl:h-[545px] 2xl:h-[640px] 3xl:h-[815px] 
              flex flex-wrap
            `}
                >
                  {/* Main image - larger */}
                  <div className="flex flex-wrap w-full p-2 h-[40%] md:h-[50%] xl:h-[42%]">
                    {group?.slice(0, 1)?.map((item, i) => (
                      <Link href={`/gallery/${item?.slug}`} key={`main-${index}-${i}`} className="w-full mb-4 h-full">
                        <GalleryItem
                          item={item}
                          width={800}
                          height={335}
                          priority={index < 2} // Prioritize first 2 groups
                        />
                      </Link>
                    ))}
                  </div>

                  {/* Secondary images - smaller */}
                  <div className="flex flex-wrap w-full h-[60%] md:h-[50%] xl:h-[58%]">
                    {group?.slice(1, 3)?.map((item, i) => (
                      <Link href={`/gallery/${item?.slug}`} key={`secondary-${index}-${i}`} className="w-1/2 p-2 h-full">
                        <GalleryItem item={item} width={380} height={445} priority={false} />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="w-full mt-8">
                <PaginationComponent totalPages={totalPages} currentPage={pagination?.currentPage || currentPage} onPageChange={handlePageChange} />
              </div>
            )}
          </div>
        );
      },
    [totalPages, currentPage, pagination?.currentPage, handlePageChange]
  );

  return (
    <section className="w-full pt-[40px] pb-[40px] xl:pb-[60px] 3xl:pb-[100px]">
      <div className="container">
        {/* Header Section */}
        <header
          className="
          w-full flex flex-wrap items-center mb-[40px] 2xl:mb-[50px] 3xl:mb-[65px] 
          py-[10px] 2xl:py-[15px] px-[30px] 2xl:px-[40px] 3xl:px-[60px] 
          rounded-l-[20px] border-l-2 border-[#17479E] 
          bg-gradient-to-r from-[rgba(238,56,36,0.30)] to-[rgba(23,71,158,0.00)]
        "
        >
          <div className="w-full md:w-[30%] xl:w-[20%] 2xl:w-[26%]">
            <h1 className="text-title1">
              <span className="text-base2 font-bold">{title}</span>
            </h1>
            <PageBreadcrumb />
          </div>
          <div
            className="
            w-full md:w-[70%] xl:w-[80%] 2xl:w-[74%] 
            pt-[20px] md:pt-0 md:pl-[20px] 2xl:pl-[30px]
          "
          >
            <p className="text-sm1">{description}</p>
          </div>
        </header>

        {/* Gallery Tabs */}
        <Tabs value={activeFilter} className="w-full gallTab">
          {/* Tab Navigation */}
          <div
            className="
            w-full h-fit lg:max-w-[85%] xl:max-w-[75%] m-auto 
            flex justify-center mb-[20px] xl:mb-[40px] 3xl:mb-[80px] 
            rounded-[50px] bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.10)] 
            p-[15px] 2xl:p-[25px]
          "
          >
            <TabsList
              className="
              flex flex-wrap h-fit w-full lg:max-w-[90%] xl:max-w-[70%] m-auto
            "
            >
              {GALLERY_FILTERS.map((filter) => (
                <TabsTrigger
                  key={filter.value}
                  value={filter.value}
                  className={btnStyle}
                  onClick={() => handleTabClick(filter.value)}
                  aria-label={`Filter by ${filter.label}`}
                >
                  {filter.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Content - All Gallery */}
          <TabsContent value={FILTER_TYPES.ALL}>
            {sliderItems?.length > 0 && (
              <div className="w-full 2xl:pb-[100px] md:pb-[60px] pb-[40px]">
                <CardSlider sliderItems={sliderItems} />
              </div>
            )}
            {slides?.length > 0 ? (
              <GalleryGrid slides={slides} />
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl text-gray-500">No gallery items found</h3>
              </div>
            )}
          </TabsContent>

          {/* Tab Content - Photo Gallery */}
          <TabsContent value={FILTER_TYPES.PHOTO}>
            {slides?.length > 0 ? (
              <GalleryGrid slides={slides} />
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl text-gray-500">No gallery items found</h3>
              </div>
            )}
          </TabsContent>

          {/* Tab Content - Video Gallery */}
          <TabsContent value={FILTER_TYPES.VIDEO}>
            {slides?.length > 0 ? (
              <GalleryGrid slides={slides} />
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl text-gray-500">No gallery items found</h3>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
