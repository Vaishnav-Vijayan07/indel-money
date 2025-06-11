import Gallery from "@/components/features/gallery/Gallery";
import MobGallery from "@/components/features/gallery/MobGallery";
import NoContents from "@/components/NoContents";
async function fetchData(page = 1, type = "all", limit = 10) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/event-gallery?page=${page}&limit=${limit}&type=${type}`, {
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

export default async function GalleryPage({ searchParams }) {
  const page = (await searchParams?.page) || 1;
  const type = (await searchParams?.type) || "all";

  const { contents, medias, sliderItems, pagination, error } = await fetchData(page, type);

  console.log(sliderItems);

  if (!contents || !medias || !sliderItems) {
    return <NoContents />;
  }

  return (
    <>
      {/* Gallery contents */}
      <div className="sm:block hidden">
        <Gallery title={contents?.title} description={contents?.description} medias={medias} sliderItems={sliderItems} pagination={pagination} />
      </div>

      {/* Gallery contents */}
      <div className="block sm:hidden">
        <MobGallery />
      </div>
    </>
  );
}
