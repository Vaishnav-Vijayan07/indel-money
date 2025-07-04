import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import { renderHtml } from "@/lib/utils/htmlParser";
import GalleryItems from "./GalleryItems";

export default function GalleryDetail({ slug,description }) {
  return (
    <section className="w-full pt-[40px] pb-[25px] xl:pb-[40px] 3xl:pb-[80px]">
      <div className="container mx-auto">
        <div className="w-full sm:pb-[20px] lg:pb-[40px] 2xl:pb-[60px]">
          <h1 className="text-title2 text-black mb-[15px] 2xl:mb-[20px] sm:flex sm:flex-wrap [&>span]:block [&>span]:text-base2 [&>span]:font-bold [&>span]:sm:hidden">
            {description ? renderHtml(description) : "No description available"}
          </h1>
          <div className="sm:block hidden">
            <PageBreadcrumb />
          </div>
        </div>
        <GalleryItems slug={slug} />
      </div>
    </section>
  );
}
