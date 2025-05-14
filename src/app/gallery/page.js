import Gallery from "@/components/features/gallery/Gallery";
import MobGallery from "@/components/features/gallery/MobGallery";

export default function GalleryPage() {
    return (
        <>

            {/* Gallery contents */}
            <div className="sm:block hidden">
                <Gallery />
            </div>

            {/* Gallery contents */}
            <div className="block sm:hidden">
                <MobGallery />
            </div>

        </>
    );
}
