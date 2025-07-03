import Gallery from "@/components/features/gallery/Gallery";
import MobGallery from "@/components/features/gallery/MobGallery";
import NoContents from "@/components/NoContents";

const defaultGalleryMeta = {
  title: "Gallery | My Website",
  description: "Explore our gallery to see highlights, events, and memorable moments captured through the lens.",
  keywords: "gallery, photo gallery, event highlights, Indel Money photos, media showcase",
};
async function fetchData(page = 1, type = "all", limit = 6) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/event-gallery?page=${page}&limit=${limit}&type=${type}`,
      {
        cache: "no-store", // Ensure fresh data
        // cache: "force-cache",
        // next: { revalidate: 600 },
      }
    );

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

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=gallery`);
    const result = await response.json();

    if (result.status === "success") {
      const meta = result.data;
      return {
        title: meta?.meta_title || defaultGalleryMeta.title,
        description: meta?.meta_description || defaultGalleryMeta.description,
        keywords: meta?.meta_keywords || defaultGalleryMeta.keywords,
        error: null,
      };
    }

    return {
      ...defaultGalleryMeta,
      error: result.message || "Failed to fetch metadata",
    };
  } catch (error) {
    return {
      ...defaultGalleryMeta,
      error: "Failed to fetch metadata",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords } = await getMetaData();

  return {
    title,
    description,
    keywords,
  };
}

export default async function GalleryPage({ searchParams }) {
  const page = (await searchParams?.page) || 1;
  const type = (await searchParams?.type) || "all";

  const { contents, medias, sliderItems, pagination, error } = await fetchData(page, type);

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
        <MobGallery title={contents?.title} medias={medias} sliderItems={sliderItems} pagination={pagination} />
      </div>
    </>
  );
}
