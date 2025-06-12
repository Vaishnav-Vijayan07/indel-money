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
import CardSlider from "@/components/features/gallery/CardSlider";
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
  "text-[14px] sm:text-[16px] lg:text-[18px] 2xl:text-[20px] leading uppercase text-base1 rounded-[30px] overflow-hidden w-1/2 sm:w-1/3 px-[30px] 2xl:px-[35px] 3xl:px-[50px] py-[12px] 2xl:py-[15px] 3xl:py-[20px] h-fit aria-selected:text-white cursor-pointer";

export default function Gallery() {
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
              className={`absolute w-full h-full rounded-[20px] object-cover grayscale-100 group-hover:grayscale-0 transition-opacity duration-500 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="w-full h-[70%] absolute z-0 left-0 bottom-0 transition-all duration-500 ease-in-out flex flex-wrap items-end bg-gradient-to-b from-transparent via-[#80000080] to-[#0047AB] px-[25px] py-[35px] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
          <div className="w-full max-w-[325px] 3xl:max-w-[495px] h-fit">
            <div className="relative text-white font-semibold text-[17px] 2xl:text-[20px] 3xl:text-[25px] leading-[1.1] uppercase pb-[6px] 2xl:pb-[10px] 3xl:pb-[15px] mb-[8px] 2xl:mb-[10px] 3xl:mb-[15px] after:content-[''] after:w-[17%] 2xl:after:w-[23%] after:h-[1px] after:bg-white after:absolute after:left-0 after:bottom-0">
              {item.title}
            </div>
            <div className="text-sm1 w-full text-white">{item.desc}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full pt-[40px] pb-[40px] xl:pb-[60px] 3xl:pb-[100px]">
      <div className="container">
        <div className="w-full flex flex-wrap items-center mb-[40px] 2xl:mb-[50px] 3xl:mb-[65px] py-[10px] 2xl:py-[15px] px-[30px] 2xl:px-[40px] 3xl:px-[60px] rounded-l-[20px] border-l-2 border-[#17479E] bg-gradient-to-r from-[rgba(238,56,36,0.30)] to-[rgba(23,71,158,0.00)]">
          <div className="w-full md:w-[30%] xl:w-[20%] 2xl:w-[26%]">
            <h2 className="text-title1">
              <span className="text-base2 font-bold">Gallery</span>
            </h2>
            <PageBreadcrumb />
          </div>
          <div className="w-full md:w-[70%] xl:w-[80%] 2xl:w-[74%] pt-[20px] md:pt-0 md:pl-[20px] 2xl:pl-[30px]">
            <p className="text-sm1">
              Welcome to The Gallery, a vibrant space where art comes to life.
              Discover a carefully curated collection of contemporary and
              classic works, each telling a unique story. Whether you&apos;re an
              art enthusiast or a curious visitor, step into a world of
              creativity, inspiration, and connection
            </p>
          </div>
        </div>
        <Tabs defaultValue="all" className="w-full gallTab">
          <div className="w-full h-fit lg:max-w-[85%] xl:max-w-[75%] m-auto flex justify-center mb-[20px] xl:mb-[40px] 3xl:mb-[80px] rounded-[50px] bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.10)] p-[15px] 2xl:p-[25px]">
            <TabsList className="flex flex-wrap h-fit w-full lg:max-w-[90%] xl:max-w-[70%] m-auto">
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
            <div className="w-full 2xl:pb-[100px] md:pb-[60px] pb-[40px]">
              <CardSlider />
            </div>
            <div className="mx-auto flex flex-wrap">
              {slides?.map((group, index) => {
                const gallClass =
                  index % 2 === 0 ? "flex-col" : "flex-col-reverse";

                return (
                  <div
                    key={index}
                    className={`${gallClass} w-full lg:w-1/2 mb-2 h-[400px] md:h-[468px] xl:h-[545px] 2xl:h-[640px] 3xl:h-[815px] flex flex-wrap`}
                  >
                    <div className="flex flex-wrap w-full p-2 h-[40%] md:h-[50%] xl:h-[42%]">
                      {group.slice(0, 1).map((item, i) => (
                        <div key={i} className="w-full mb-4 h-full">
                          <GalleryItem item={item} width={800} height={335} />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap w-full h-[60%] md:h-[50%] xl:h-[58%]">
                      {group.slice(1, 3).map((item, i) => (
                        <div key={i} className="w-1/2 p-2 h-full">
                          <GalleryItem item={item} width={380} height={445} />
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
          <TabsContent value="photo">
            <div className="mx-auto flex flex-wrap">
              {slides?.map((group, index) => {
                const gallClass =
                  index % 2 === 0 ? "flex-col" : "flex-col-reverse";

                return (
                  <div
                    key={index}
                    className={`${gallClass} w-full lg:w-1/2 mb-6 h-[815px] flex flex-wrap`}
                  >
                    <div className="flex flex-wrap w-full p-2 h-[42%]">
                      {group.slice(0, 1).map((item, i) => (
                        <div key={i} className="w-full mb-4 h-full">
                          <GalleryItem item={item} width={800} height={335} />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap w-full h-[58%]">
                      {group.slice(1, 3).map((item, i) => (
                        <div key={i} className="w-1/2 p-2 h-full">
                          <GalleryItem item={item} width={380} height={445} />
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
            <div className="mx-auto flex flex-wrap">
              {slides?.map((group, index) => {
                const gallClass =
                  index % 2 === 0 ? "flex-col" : "flex-col-reverse";

                return (
                  <div
                    key={index}
                    className={`${gallClass} w-full lg:w-1/2 mb-6 h-[815px] flex flex-wrap`}
                  >
                    <div className="flex flex-wrap w-full p-2 h-[42%]">
                      {group.slice(0, 1).map((item, i) => (
                        <div key={i} className="w-full mb-4 h-full">
                          <GalleryItem item={item} width={800} height={335} />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap w-full h-[58%]">
                      {group.slice(1, 3).map((item, i) => (
                        <div key={i} className="w-1/2 p-2 h-full">
                          <GalleryItem item={item} width={380} height={445} />
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
        </Tabs>
      </div>
    </section>
  );
}
