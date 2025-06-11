import React, { useEffect, useState } from "react";
import Image from "next/image";
function GalleryItem({ item, width, height }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (hovered) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % item.images.length);
      }, 1000); // Change image every 1 second
    } else {
      setCurrentImage(0); // Reset to first image when not hovered
    }
    return () => clearInterval(interval);
  }, [hovered, item.images.length]);

  return (
    <div
      className="group relative rounded-[20px] overflow-hidden w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-full">
        {item.images.length > 0 ? (
          item.images.map((img, index) => (
            <Image
              key={index}
              src={img ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${img}` : "/images/gall04.jpg"}
              width={width}
              height={height}
              alt={`${item.title} image ${index + 1}`}
              className={`absolute w-full h-full rounded-[20px] object-cover grayscale-100 group-hover:grayscale-0 transition-opacity duration-500 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))
        ) : (
          <Image
            src="/images/gall04.jpg"
            width={width}
            height={height}
            alt={`${item.title} image`}
            className="absolute w-full h-full rounded-[20px] object-cover grayscale-100 group-hover:grayscale-0 transition-opacity duration-500"
          />
        )}
      </div>
      <div className="w-full h-[70%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end bg-gradient-to-b from-transparent via-[#80000080] to-[#0047AB] px-[25px] py-[35px] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
        <div className="w-full max-w-[325px] 3xl:max-w-[495px] h-fit">
          <div className="relative text-white font-semibold text-[17px] 2xl:text-[20px] 3xl:text-[25px] leading-[1.1] uppercase pb-[6px] 2xl:pb-[10px] 3xl:pb-[15px] mb-[8px] 2xl:mb-[10px] 3xl:mb-[15px] after:content-[''] after:w-[17%] 2xl:after:w-[23%] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0">
            {item.title ? item.title : "Title"}
          </div>
          <div className="text-sm1 w-full text-white">{item.description ? item.description : "Description"}</div>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
