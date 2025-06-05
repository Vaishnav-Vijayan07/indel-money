import Gallery from "@/components/features/gallery/Gallery";
import MobGallery from "@/components/features/gallery/MobGallery";
import NoContents from "@/components/NoContents";
async function fetchData() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/event-gallery`, {
            cache: "no-store", // Ensure fresh data
        });

        const result = await response.json();
        const galleryData = result.data;

        if (result.status === "success") {
            return {
                contents: galleryData?.galleryPageContent,
                medias: galleryData?.galleryItems,
                sliderItems: galleryData?.mainSliderItems,
                error: null
            };
        }

        return {
            contents: null,
            medias: null,
            sliderItems: null,
            error: result.message
        };



    } catch (error) {
        return {
            contents: null,
            medias: null,
            sliderItems: null,
            error: "Failed to fetch gallery data"
        };
    }
}

export default async function GalleryPage() {

    const { contents, medias, sliderItems, error, } = await fetchData()


    if (!contents || !medias || !sliderItems) {
        return <NoContents />
    }

    return (
        <>

            {/* Gallery contents */}
            <div className="sm:block hidden">
                <Gallery title={contents?.title} description={contents?.description} medias={medias} sliderItems={sliderItems} />
            </div>

            {/* Gallery contents */}
            <div className="block sm:hidden">
                <MobGallery />
            </div>

        </>
    );
}
