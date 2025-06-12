"use client";
import Image from "next/image";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

const data = [
  { images: ["/images/gallDet01.jpg"] },
  { images: ["/images/gallDet02.jpg"] },
  { images: ["/images/gallDet03.jpg"] },
  { images: ["/images/gallDet04.jpg"] },
  { images: ["/images/gallDet05.jpg"] },
  { images: ["/images/gallDet06.jpg"] },
  { images: ["/images/gallDet06.jpg"] },
];

function ImageBox({ item, className, isVideo }) {
  return (
    <div className={`w-full p-1 sm:p-2 ${className}`}>
      <div className="group w-full h-full rounded-[3px] sm:rounded-[15px] overflow-hidden relative z-0">
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          download={false}
          elementClassNames="w-full h-full"
        >
          <a href={item.images[0]} className="w-full h-full relative z-0 block">
            <Image
              src={item.images[0]}
              alt="Gallery Image"
              fill
              sizes="520px"
              className="group-hover:scale-105 object-cover transition-transform duration-300"
            />
          </a>
        </LightGallery>
        {isVideo && <div className="w-[30px] lg:w-[35px] 2xl:w-[48px] aspect-square absolute z-1 inset-0 m-auto pointer-events-none">
          <Image src={"/images/icon-play.svg"} alt={"play"} fill sizes="48px" />
        </div>}
      </div>
    </div>
  );
}

export default function GalleryDetail() {
  return (
    <section className="w-full pt-[40px] pb-[25px] xl:pb-[40px] 3xl:pb-[80px]">
      <div className="container mx-auto">
        <div className="w-full sm:pb-[20px] lg:pb-[40px] 2xl:pb-[60px]">
          <h1 className="text-title2 text-black mb-[15px] 2xl:mb-[20px] sm:flex sm:flex-wrap">
            Onam Celebrations 2024 for
            <span className="sm:block hidden"> &nbsp;LIFE@INDEL </span>
            <span className="text-base2 font-bold sm:hidden block">
              {" "}
              &nbsp;LIFE@INDEL{" "}
            </span>
          </h1>
          <div className="sm:block hidden">
            <PageBreadcrumb />
          </div>
        </div>

        <div className="mx-auto flex flex-wrap overflow-hidden h-fit">
          <div className="w-full 4xs:w-1/2 mb-2 flex flex-wrap h-[300px] 4sx:h-[200px] 3xs:h-[280px] sm:h-[405px] md:h-[410px] xl:h-[550px] 2xl:h-[740px] 3xl:h-[860px]">
            <div className="flex flex-wrap w-full h-full">
              <div className="w-1/2 h-full">
                <ImageBox item={data[0]} className="h-1/2" isVideo={true} />
                <ImageBox item={data[1]} className="h-1/2" isVideo={false} />
              </div>
              <div className="w-1/2 h-full">
                <ImageBox item={data[2]} className="h-full" isVideo={false} />
              </div>
            </div>
          </div>

          <div className="w-full 4xs:w-1/2 mb-2 flex flex-wrap h-[300px] 4sx:h-[200px] 3xs:h-[280px] sm:h-[405px] md:h-[410px] xl:h-[550px] 2xl:h-[740px] 3xl:h-[860px]">
            <div className="flex flex-wrap w-full h-[40%] md:h-[50%]">
              <div className="w-full mb-4 h-full">
                <ImageBox
                  item={data[3]}
                  width={800}
                  height={335}
                  className="h-full"
                  isVideo={true}
                />

              </div>
            </div>
            <div className="flex flex-wrap w-full h-[60%] md:h-[50%]">
              <div className="w-1/2 h-full">
                <ImageBox
                  item={data[4]}
                  width={380}
                  height={445}
                  className="h-full"
                  isVideo={false}
                />
              </div>
              <div className="w-1/2 h-full">
                <ImageBox
                  item={data[5]}
                  width={380}
                  height={445}
                  className="h-full"
                  isVideo={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
