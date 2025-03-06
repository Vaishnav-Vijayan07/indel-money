"use client";
import LifeIndelSlider from "@/components/features/home/LifeIndelSlider";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/life01.webp", alt: "lifeintelImg" },
  { src: "/images/life02.webp", alt: "lifeintelImg" },
  { src: "/images/life03.webp", alt: "lifeintelImg", fullHeight: true }
];
export default function LifeAtIndel() {
  return (
    <section className="w-full pt-[20px] pb-[20px] md:pt-[70px] md:pb-[70px] sm:pt-[30px] sm:pb-[30px]">
      <div className="container">
        <div className="flex flex-wrap">
          {/* Left Side (Image Grid) */}
          <div className="2xl:w-[795px] xl:w-[580px] lg:w-[490px] md:w-[100%] w-[100%]">
            <div className="w-full 2xl:h-[625px] xl:h-[450px] lg:h-[405px] ">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
                {/* Left Column (Stacked Images) */}
                <div className="flex flex-col gap-4 md:gap-6">
                  {images.slice(0, 2).map((image, index) => (
                    <div key={index} className="group overflow-hidden rounded-xl max-h-[312px] h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>

                {/* Right Column (Third Image Full Height, Max 625px) */}
                <div className="group overflow-hidden rounded-xl md:col-span-2 max-h-[625px] h-full">
                  <img
                    src={images[2].src}
                    alt={images[2].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="2xl:w-[calc(100%-795px)] xl:w-[calc(100%-580px)] lg:w-[calc(100%-490px)] md:w-[100%] w-[100%] 2xl:pl-[75px] xl:pl-[40px] lg:pl-[30px] lg:pt-[0px] pt-[30px]">
            <h2 className="text-title1">
              Life at <span>Indel</span>
            </h2>
            <p className="text-sm-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>

            <div className="w-full xl:pt-[25px] pt-[15px] relative">
              <LifeIndelSlider />
            </div>

            <div className="w-full 2xl:pt-10 xl:pt-5 pt-5">
              <div className="w-full">
                <div className="flex flex-wrap w-full sm:m-[-10px] m-[-6px]">
                  <div className="sm:p-[10px] p-[6px] sm:m-0 m-auto">
                    <Link
                      href="/"
                      className="btn btn-base2 2xl:px-7 xl:px-5 px-5 2xl:py-3  xl:py-1.5 py-1.5 transition-all duration-600"
                    >
                      <span className="text-white 2xl:text-[18px] xl:text-[13px] text-[13px] font-medium leading-normal">
                        TAKE ME TO CAREERS PAGE
                      </span>
                    </Link>
                  </div>
                  <div className="sm:p-[10px] p-[6px] sm:m-0 m-auto">
                    <Link
                      href="/"
                      className="btn btn-base2 2xl:px-7 xl:px-5 px-5 2xl:py-3  xl:py-1.5 py-1.5 transition-all duration-600"
                    >
                      <span className="text-white 2xl:text-[18px] xl:text-[13px] text-[13px] font-medium leading-normal">
                        VISIT GALLERY
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
