// import GalleryDetail from "@/components/features/gallery/gallerydetail";

import GalleryDetail from "@/components/features/gallery/GalleryDetail";
import GallerySlider from "../../../components/features/gallery/GallerySlider";

async function fetchData(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/event?slug=${slug}`, {
      cache: "no-store", // Ensure fresh data
    });

    const result = await response.json();
    const galleryData = result.data;

    if (result.status === "success") {
      return {
        images: galleryData?.galleryItems,
        error: null,
      };
    }

    return {
      images: null,
      error: result.message,
    };
  } catch (error) {
    return {
      images: null,
      error: "Failed to fetch gallery data",
    };
  }
}

export default async function GalleryDetailPage({ params }) {
  const { slug } = await params;
  const { images, error } = await fetchData(slug);

  return (
    <>
      {/* Gallery contents */}
      <GalleryDetail galleryItems={images} error={error} />

      {/* GallerySlider contents */}
      <GallerySlider />
    </>
  );
}
