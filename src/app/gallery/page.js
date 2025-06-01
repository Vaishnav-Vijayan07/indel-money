import Gallery from "@/components/features/gallery/Gallery";
import MobGallery from "@/components/features/gallery/MobGallery";
import NoContents from "@/components/NoContents";
import { fetchData } from "@/lib/fetchCalls/fetchGalleryPageData";

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
