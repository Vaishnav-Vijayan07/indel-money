"use client";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/custom-tabs";
import MobGallCardSlider from "@/components/features/gallery/MobGallCardSlider";

import { useRouter, useSearchParams } from "next/navigation";
import PaginationComponent from "@/components/Pagination";

const data = [
  {
    title: "Christmas 2023",
    desc: "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
    images: ["/images/gall01.jpg", "/images/gall011.jpg", "/images/gall012.jpg"],
  },
  {
    title: "Onam 2024",
    desc: "Lorem ipsum",
    images: ["/images/gall02.jpg"],
  },
  {
    title: "Convention 2024",
    desc: "Lorem ipsum",
    images: ["/images/gall03.jpg"],
  },
  {
    title: "Ramzan 2024",
    desc: "Lorem ipsum",
    images: ["/images/gall06.jpg"],
  },
  {
    title: "Anniversary 2024",
    desc: "Lorem ipsum",
    images: ["/images/gall05.jpg"],
  },
  {
    title: "Christmas 2024",
    desc: "Lorem ipsum",
    images: ["/images/gall04.jpg"],
  },
];

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

const GalleryItem = ({ item, width, height }) => {
  console.log(item);
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (hovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % item?.thumbnails?.length);
      }, 1000); // Change image every 1 second
    } else {
      setCurrentImage(0); // Reset to first image when not hovered
    }
    return () => clearInterval(interval);
  }, [hovered, item?.thumbnails?.length]);

  return (
    <div
      className="group relative rounded-[20px] overflow-hidden w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-full">
        {item?.thumbnails?.map((img, index) => (
          <Image
            key={index}
            src={img ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}` : "/images/gall04.jpg"}
            width={width}
            height={height}
            alt={`${item.title} image ${index + 1}`}
            className={`absolute w-full h-full rounded-[20px] object-cover transition-opacity duration-500 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="w-full h-[100%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end bg-gradient-to-b from-transparent via-[#80000080] to-[#0047AB] p-[15px_20px] 4xs:p-[20px_30px]">
        <div className="w-full h-fit">
          <div className="relative text-white font-semibold text-[17px] leading-[1.1] uppercase pb-[6px] 2xl:pb-[10px] 3xl:pb-[15px] mb-[8px] 2xl:mb-[10px] 3xl:mb-[15px] after:content-[''] after:w-[17%] 2xl:after:w-[23%] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0 line-clamp-2">
            {item.title ? item.title : "Title"}
          </div>
          <div className="text-sm1 w-full text-white line-clamp-2">{item.description ? item.description : "Description"}</div>
        </div>
      </div>
    </div>
  );
};

const btnStyle =
  "text-[12px] leading-none font-medium text-white w-full max-w-[80px] 4xs:max-w-[110px] h-[30px] rounded-[15px] overflow-hidden p-[6px_6px] 4xs:p-[8px_10px] aria-selected:font-bold aria-selected:text-white";

export default function MobGallery({ title = "Gallery", medias = [], sliderItems = [], pagination = {} }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slides = Array.from({ length: Math.ceil(medias.length / 3) }, (_, i) => medias.slice(i * 3, i * 3 + 3));
  // Memoized values
  const totalPages = useMemo(() => pagination?.totalPages || 1, [pagination?.totalPages]);

  // State management
  const [activeFilter, setActiveFilter] = useState(() => searchParams.get("type") || FILTER_TYPES.ALL);

  const [currentPage, setCurrentPage] = useState(() => parseInt(searchParams.get("page")) || 1);

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

  return (
    <section className="w-full pt-[30px] pb-[40px]">
      <div className="container mx-auto">
        <div className="w-full flex flex-wrap items-center mb-[10px]">
          <h2 className="text-title1 text-base2 font-bold">Gallery</h2>
        </div>
      </div>
      <Tabs value={activeFilter} className="w-full gallTab">
        <div className="container">
          <TabsList className="w-full h-auto flex m-auto justify-center mb-[20px] rounded-[20px] bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.10)] p-[15px_5px] 4xs:p-[15px_10px]">
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
          <div className="w-full pb-[20px]">
            <MobGallCardSlider items={sliderItems} />
          </div>
          <div className="container mx-auto flex flex-wrap">
            {slides?.map((group, index) => {
              const gallClass = index % 2 === 0 ? "flex-col" : "flex-col-reverse";
              return (
                <div key={index} className={`${gallClass} w-full mb-[8px] 3xs:h-[170px] h-[150px] flex flex-wrap`}>
                  <div className="flex flex-wrap w-full h-full">
                    {group.slice(0, 1)?.map((item, i) => (
                      <div key={i} className="w-full mb-4 h-full">
                        <GalleryItem item={item} width={380} height={150} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        {/* Tab Content - Photo Gallery */}
        <TabsContent value={FILTER_TYPES.PHOTO}>
          <div className="w-full pb-[20px]">
            <MobGallCardSlider items={sliderItems} />
          </div>
          <div className="container mx-auto flex flex-wrap">
            {slides?.map((group, index) => {
              const gallClass = index % 2 === 0 ? "flex-col" : "flex-col-reverse";
              return (
                <div key={index} className={`${gallClass} w-full mb-[8px] 3xs:h-[170px] h-[150px] flex flex-wrap`}>
                  <div className="flex flex-wrap w-full h-full">
                    {group.slice(0, 1)?.map((item, i) => (
                      <div key={i} className="w-full mb-4 h-full">
                        <GalleryItem item={item} width={380} height={150} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>

        {/* Tab Content - Video Gallery */}
        <TabsContent value={FILTER_TYPES.VIDEO}>
          <div className="w-full 2xl:pb-[100px] md:pb-[60px] pb-[40px]">
            <MobGallCardSlider items={sliderItems} />
          </div>
          <div className="container mx-auto flex flex-wrap">
            {slides?.map((group, index) => {
              const gallClass = index % 2 === 0 ? "flex-col" : "flex-col-reverse";

              return (
                <div key={index} className={`${gallClass} w-full mb-[8px] h-[150px] flex flex-wrap`}>
                  <div className="flex flex-wrap w-full h-full">
                    {group.slice(0, 1)?.map((item, i) => (
                      <div key={i} className="w-full mb-4 h-full">
                        <GalleryItem item={item} width={380} height={150} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
      <div className="container mx-auto flex flex-wrap">
        <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </section>
  );
}
