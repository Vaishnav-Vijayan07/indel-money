"use client";
import React, { memo, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import { useRouter, useSearchParams } from "next/navigation";
import PaginationComponent from "@/components/Pagination";
import api from "@/lib/api/axios";
import LoadingCircleSpinner from "@/components/common/LoadingCircleSpinner";
import { serverMediaPath } from "@/constants/constants";

// Memoized ImageBox component to prevent unnecessary re-renders
const ImageBox = memo(function ImageBox({ item, className, isVideo = false }) {
  const isYouTube = item?.video?.includes("youtube.com") || item?.video?.includes("youtu.be");
  const src = item?.image || item?.video_thumbnail || "/images/placeholder.jpg";
  const alt = item?.thumbnail_alt || (isVideo ? "Gallery Video" : "Gallery Image");

  return (
    <div className={`w-full p-1 sm:p-2 ${className}`}>
      {isVideo ? (
        <div className="group w-full h-full rounded-[3px] sm:rounded-[15px] block overflow-hidden relative z-0">
          <LightGallery speed={300} plugins={[lgThumbnail, lgZoom, lgVideo]} download={false} elementClassNames="w-full">
            <a
              data-lg-size="1280-720"
              {...(isYouTube
                ? { "data-src": item?.video }
                : {
                    "data-video": JSON.stringify({
                      source: [{ src: `${serverMediaPath}${item?.video}`, type: "video/mp4" }],
                      attributes: { preload: false, controls: true },
                    }),
                  })}
              data-poster={`${serverMediaPath}${src}`}
            >
              <Image
                src={`${serverMediaPath}${src}`}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, 520px"
                className="group-hover:scale-105 object-cover transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </LightGallery>
          <div
            className="w-[30px] lg:w-[35px] 2xl:w-[48px] aspect-square absolute z-10 inset-0 m-auto pointer-events-none"
            role="img"
            aria-label="Play video"
          >
            <Image src="/images/icon-play.svg" alt="Play icon" fill sizes="48px" />
          </div>
        </div>
      ) : (
        <div className="group w-full h-full rounded-[3px] sm:rounded-[15px] overflow-hidden">
          <LightGallery plugins={[lgThumbnail, lgZoom]} download={false} elementClassNames="w-full h-full">
            <a href={`${serverMediaPath}${src}`} className="w-full h-full relative z-0 block">
              <Image
                src={`${serverMediaPath}${src}`}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, 520px"
                className="group-hover:scale-105 object-cover transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </LightGallery>
        </div>
      )}
    </div>
  );
});

function GalleryItems({ slug }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const limit = 6; // Configurable limit

  const [galleryItems, setGalleryItems] = useState(null);
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1 });
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/event?slug=${slug}&page=${page}&limit=${limit}`);

      const { galleryItems, pagination } = data?.data;

      setGalleryItems(galleryItems);
      setPagination(pagination);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on page change
  useEffect(() => {
    if (slug) {
      fetchData();
    }
  }, [page, slug, limit, searchParams]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handlePageChange = useCallback(
    (newPage) => {
      router.push(`?${createQueryString("page", newPage.toString())}`, { scroll: false });
    },
    [router, createQueryString]
  );

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full py-4">
          <LoadingCircleSpinner />
        </div>
      ) : (
        <div className="mx-auto flex flex-wrap overflow-hidden h-fit">
          <>
            {galleryItems && galleryItems?.length > 0 ? (
              <>
                <div className="w-full sm:w-1/2 mb-2 flex flex-wrap h-[300px] sm:h-[405px] md:h-[410px] xl:h-[550px] 2xl:h-[740px] 3xl:h-[860px]">
                  <div className="flex flex-wrap w-full h-full">
                    <div className="w-1/2 h-full">
                      {galleryItems?.[0] && <ImageBox item={galleryItems?.[0]} className="h-1/2" isVideo={galleryItems?.[0]?.is_video} />}
                      {galleryItems?.[1] && <ImageBox item={galleryItems?.[1]} className="h-1/2" isVideo={galleryItems[1]?.is_video} />}
                    </div>
                    <div className="w-1/2 h-full">
                      {galleryItems?.[2] && <ImageBox item={galleryItems?.[2]} className="h-full" isVideo={galleryItems[2]?.is_video} />}
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 mb-2 flex flex-wrap h-[300px] sm:h-[405px] md:h-[410px] xl:h-[550px] 2xl:h-[740px] 3xl:h-[860px]">
                  <div className="flex flex-wrap w-full h-[40%] md:h-[50%]">
                    <div className="w-full mb-4 h-full">
                      {galleryItems?.[3] && <ImageBox item={galleryItems?.[3]} className="h-full" isVideo={galleryItems[3]?.is_video} />}
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full h-[60%] md:h-[50%]">
                    <div className="w-1/2 h-full">
                      {galleryItems?.[4] && <ImageBox item={galleryItems?.[4]} className="h-full" isVideo={galleryItems[4]?.is_video} />}
                    </div>
                    <div className="w-1/2 h-full">
                      {galleryItems?.[5] && <ImageBox item={galleryItems?.[5]} className="h-full" isVideo={galleryItems[5]?.is_video} />}
                    </div>
                  </div>
                </div>
                <div className="w-full flex sm:flex-row sm:justify-between sm:items-center gap-y-4 sm:gap-y-0 mt-4 sm:mt-6 2xl:mt-10 3xl:mt-[70px]">
                  <div className="w-full sm:w-2/5 md:w-1/3 xl:w-[27%] 2xl:w-[30%]">
                    <h2 className="text-[20px] md:text-[22px] lg:text-[26px] xl:text-[30px] 2xl:text-[35px] font-medium leading-normal text-[#020202]">
                      View More Galleries
                    </h2>
                  </div>
                  <div className="w-full sm:w-3/5 md:w-2/3 xl:w-[73%] 2xl:w-[70%] pt-5 sm:pt-0 sm:pl-5 2xl:pl-[30px]">
                    <PaginationComponent totalPages={pagination.totalPages} currentPage={pagination.currentPage} onPageChange={handlePageChange} />
                  </div>
                </div>
              </>
            ) : (
              <p>No items found</p>
            )}
          </>
        </div>
      )}
    </>
  );
}

export default GalleryItems;
