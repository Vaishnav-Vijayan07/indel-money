import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

import Image from "next/image";

export default function EmployeeTestimonialsVideoBox({ item }) {
  return (
    <div className="group w-full h-auto aspect-[526/360] overflow-hidden rounded-[10px] lg:rounded-[20px] 2xl:rounded-[24px] block relative z-0">
      <LightGallery
        speed={300}
        plugins={[lgThumbnail, lgZoom, lgVideo]}
        download={false}
        elementClassNames="w-full"
      >
        <a
          data-src="//www.youtube.com/watch?v=EIUJfXk3_3w"
          data-poster={item.src}
          data-lg-size="1280-720"
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="520px"
            className="group-hover:scale-105 object-cover transition-transform duration-300"
          />
        </a>
      </LightGallery>
      <div className="w-[25px] lg:w-[30px] 2xl:w-[48px] aspect-48/38 absolute z-1 top-[15px] left-[15px] lg:top-[20px] lg:left-[20px] 2xl:top-[30px] 2xl:left-[30px]">
        <Image
          src={"/images/employeeTestimonialsVideo-delmt-1.svg"}
          alt={"employeeTestimonialsVideo-delmt"}
          fill
          sizes="48px"
        />
      </div>
      <div className="w-[30px] lg:w-[35px] 2xl:w-[48px] aspect-square absolute z-1 inset-0 m-auto">
        <Image src={"/images/icon-play.svg"} alt={"play"} fill sizes="48px" />
      </div>
      <div className="flex flex-wrap items-center gap-[5px] lg:gap-[10px] 2xl:gap-[20px] p-[10px_15px] lg:p-[15px_20px] 2xl:p-[20px_30px] absolute z-1 bottom-0 left-0 right-0 bg-linear-to-t to-transparent from-black/85">
        <div className="group w-[30px] lg:w-[40px] xl:w-[60px] 2xl:w-[80px] h-[30px] lg:h-[40px] xl:h-[60px] 2xl:h-[80px] rounded-full overflow-hidden border-black/10 border-1 border-solid relative z-0">
          <Image
            src={item.user_image}
            alt={item.title}
            fill
            sizes="80px"
            className="group-hover:scale-105 object-cover transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-[14px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1] font-bold text-[#93bffa] capitalize line-clamp-1 mb-4px lg:mb-[6px] 2xl:mb-[8px]">
            {item.title}
          </div>
          <div className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-[1] font-normal text-white capitalize line-clamp-1">
            {item.designation}
          </div>
        </div>
      </div>
    </div>
  );
}
