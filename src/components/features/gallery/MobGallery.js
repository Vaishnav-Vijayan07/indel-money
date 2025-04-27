"use client";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/custom-tabs";
import MobGallCardSlider from "@/components/common/MobGallCardSlider";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const data = [
  {
    title: "Christmas 2023",
    desc: "There are many variations of passages of Lorem Ipsum available There are many variations of passages",
    images: [
      "/images/gall01.jpg",
      "/images/gall011.jpg",
      "/images/gall012.jpg",
    ],
  },
  {
    title: "Onam 2024",
    desc: "Lorem ipsum",
    images: ["/images/gall02.jpg"],
  },
  {
    title: "Convention 2024",
    desc: "Lorem ipsum",
    images: ["/images/gall03.jpg"],
  },
  {
    title: "Ramzan 2024",
    desc: "Lorem ipsum",
    images: ["/images/gall06.jpg"],
  },
  {
    title: "Anniversary 2024",
    desc: "Lorem ipsum",
    images: ["/images/gall05.jpg"],
  },
  {
    title: "Christmas 2024",
    desc: "Lorem ipsum",
    images: ["/images/gall04.jpg"],
  },
];

const btnStyle =
  "text-[12px] leading-none font-medium text-white w-full max-w-[110px] h-[30px] rounded-[15px] overflow-hidden p-[8px_10px] aria-selected:font-bold aria-selected:text-white";

export default function MobGallery() {
  const slides = Array.from({ length: Math.ceil(data.length / 3) }, (_, i) =>
    data.slice(i * 3, i * 3 + 3)
  );

  const GalleryItem = ({ item, width, height }) => {
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
          {item.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              width={width}
              height={height}
              alt={`${item.title} image ${index + 1}`}
              className={`absolute w-full h-full rounded-[20px] object-cover transition-opacity duration-500 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="w-full h-[100%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end bg-gradient-to-b from-transparent via-[#80000080] to-[#0047AB] px-[20px] py-[30px]">
          <div className="w-full h-fit">
            <div className="relative text-white font-semibold text-[17px] leading-[1.1] uppercase pb-[6px] 2xl:pb-[10px] 3xl:pb-[15px] mb-[8px] 2xl:mb-[10px] 3xl:mb-[15px] after:content-[''] after:w-[17%] 2xl:after:w-[23%] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0 line-clamp-2">
              {item.title}
            </div>
            <div className="text-sm1 w-full text-white line-clamp-2">
              {item.desc}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full pt-[30px] pb-[40px]">
      <div className="container mx-auto">
        <div className="w-full flex flex-wrap items-center mb-[10px]">
          <h2 className="text-title1 text-base2 font-bold">Gallery</h2>
        </div>
      </div>
      <Tabs defaultValue="all" className="w-full gallTab">
        <div className="container">
          <TabsList className="w-full h-auto flex m-auto justify-center mb-[20px] rounded-[20px] bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.10)] p-[15px_10px]">
            <TabsTrigger value="all" className={btnStyle}>
              All Gallery
            </TabsTrigger>
            <TabsTrigger value="photo" className={btnStyle}>
              Photo Gallery
            </TabsTrigger>
            <TabsTrigger value="video" className={btnStyle}>
              Video Gallery
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all">
          <div className="w-full pb-[20px]">
            <MobGallCardSlider />
          </div>
          <div className="container mx-auto flex flex-wrap">
            {slides?.map((group, index) => {
              const gallClass =
                index % 2 === 0 ? "flex-col" : "flex-col-reverse";

              return (
                <div
                  key={index}
                  className={`${gallClass} w-full mb-[8px] 3xs:h-[170px] h-[150px] flex flex-wrap`}
                >
                  <div className="flex flex-wrap w-full h-full">
                    {group.slice(0, 1).map((item, i) => (
                      <div key={i} className="w-full mb-4 h-full">
                        <GalleryItem item={item} width={380} height={150} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            <Pagination className="justify-start sm:justify-end mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    01
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">02</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">03</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </TabsContent>
        <TabsContent value="video">
          <div className="w-full 2xl:pb-[100px] md:pb-[60px] pb-[40px]">
            <MobGallCardSlider />
          </div>
          <div className="container mx-auto flex flex-wrap">
            {slides?.map((group, index) => {
              const gallClass =
                index % 2 === 0 ? "flex-col" : "flex-col-reverse";

              return (
                <div
                  key={index}
                  className={`${gallClass} w-full mb-[8px] h-[150px] flex flex-wrap`}
                >
                  <div className="flex flex-wrap w-full h-full">
                    {group.slice(0, 1).map((item, i) => (
                      <div key={i} className="w-full mb-4 h-full">
                        <GalleryItem item={item} width={380} height={150} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
