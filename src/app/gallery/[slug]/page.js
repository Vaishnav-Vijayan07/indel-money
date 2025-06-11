// import GalleryDetail from "@/components/features/gallery/gallerydetail";

import GalleryDetail from "@/components/features/gallery/GalleryDetail";
import GallerySlider from "../../../components/features/gallery/GallerySlider";

async function fetchData(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/event?&${slug}`, {
      cache: "no-store", // Ensure fresh data
    });

    const result = await response.json();
    const galleryData = result.data;

    if (result.status === "success") {
      return {
        contents: galleryData?.galleryPageContent,
        medias: galleryData?.galleryItems,
        sliderItems: galleryData?.mainSliderItems,
        pagination: galleryData?.pagination,
        error: null,
      };
    }

    return {
      contents: null,
      medias: null,
      sliderItems: null,
      pagination: null,
      error: result.message,
    };
  } catch (error) {
    return {
      contents: null,
      medias: null,
      sliderItems: null,
      pagination: null,
      error: "Failed to fetch gallery data",
    };
  }
}

export default function GalleryDetailPage({ searchParams }) {
  const slug = searchParams.slug;

  return (
    <>
      {/* Gallery contents */}
      <GalleryDetail />

      {/* GallerySlider contents */}
      <GallerySlider />
    </>
  );
}
