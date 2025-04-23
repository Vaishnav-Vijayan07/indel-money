"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/lifeImage1.webp",
  "/images/lifeImage2.webp",
  "/images/lifeImage3.webp",
  "/images/lifeImage1.webp",
];

export default function MobLifeIndel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full py-[40px_50px] block overflow-hidden">
      <div className="container">
        <div className="text-title1 font-medium text-center mb-[10px]">
          Life at <span className="text-base2 font-bold">Indel</span>
        </div>
        <div className="relative py-[30px] 4xs:py-[40px] xs:py-[50px]">
          <div className="relative w-[200px] 4xs:w-[240px] h-auto aspect-240/300 mx-auto">
            {images.map((src, index) => {
              const offset = -4;
              const translateValue = index * offset;

              return (
                <div
                  key={index}
                  className={`w-full h-full rounded-[5px] overflow-hidden absolute inset-0 m-auto transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-100"
                  }`}
                  style={{
                    transform:
                      index === currentIndex
                        ? `rotateZ(0deg) translateX(${translateValue + 10}px)`
                        : `translateX(${translateValue + 10}px) rotateZ(${
                            translateValue + offset
                          }deg)`,
                    opacity: index === currentIndex ? 1 : 1,
                    zIndex:
                      index === currentIndex ? 9
                       : images.length - index,
                    transition: "transform 0.5s ease, opacity 1s ease",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    sizes="240px"
                    objectFit="cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full h-[40px] flex justify-between items-center rounded-[50px] p-[8px] bg-linear-to-t from-base2/30 to-base1/30 absolute inset-0 m-auto">
            <button
              onClick={goToPrevious}
              className="w-[22px] h-[22px] rounded-full bg-base1 text-white flex items-center justify-center shadow-xl z-20 transition-all duration-500 cursor-pointer hover:bg-base2"
            >
              <svg viewBox="0 0 19 15" className="w-[8px]">
                <path
                  d="M7.25 14.25L8.825 12.6187L4.83125 8.625H18.5V6.375H4.83125L8.825 2.38125L7.25 0.75L0.5 7.5L7.25 14.25Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-[22px] h-[22px] rounded-full bg-base1 text-white flex items-center justify-center shadow-xl z-20 transition-all duration-500 cursor-pointer hover:bg-base2"
            >
              <svg viewBox="0 0 19 15" className="w-[8px]">
                <path
                  d="M11.75 14.25L10.175 12.6187L14.1687 8.625H0.5V6.375H14.1687L10.175 2.38125L11.75 0.75L18.5 7.5L11.75 14.25Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <div className="w-full h-[360px] relative z-0">
          <Swiper
            slidesPerView={"auto"}
            autoplay={false}
            grabCursor={true}
            centeredSlides={true}
            watchSlidesProgress={true}
            spaceBetween={0}
            modules={[Navigation]}
            simulateTouch={false}
            allowTouchMove={false}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="h-[295px] mx-auto overflow-visible! lifeIndelSlide"
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                className="w-[240px]! absolute! inset-0 mx-auto rounded-[5px]"
                style={{
                  transform: `translateX(${index * -4 + 10}px) rotateZ(${
                    index === 0 ? 0 : -4 * index + -4
                  }deg)`,
                  zIndex: images.length - index,
                  transition: "transform 0.5s ease, opacity 1s ease",
                  border: `translateX(${index * -4 + 10}px) rotateZ(${
                    index === 0 ? 0 : -4 * index + -4
                  }deg)`,
                }}
              >
                <div className="w-full h-full relative z-0 overflow-hidden">
                  <Image
                    src={img}
                    alt={`Slide ${index}`}
                    fill
                    sizes="240px"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-between items-center rounded-[50px] p-[8px] 3xl:p-[15px] bg-custom-gradient absolute top-0 bottom-0 m-auto w-full h-fit">
            <button className="custom-prev w-[40px] h-[40px] 3xl:w-[50px] 3xl:h-[50px] rounded-full bg-base1 text-white flex items-center justify-center shadow-xl z-20 transition-all duration-500 cursor-pointer hover:bg-base2 swiper-button-disabled:opacity-50 swiper-button-disabled:cursor-not-allowed">
              <svg viewBox="0 0 19 15" className="w-[18px]">
                <path
                  d="M7.25 14.25L8.825 12.6187L4.83125 8.625H18.5V6.375H4.83125L8.825 2.38125L7.25 0.75L0.5 7.5L7.25 14.25Z"
                  fill="white"
                />
              </svg>
            </button>

            <button className="custom-next w-[40px] h-[40px] 3xl:w-[50px] 3xl:h-[50px]  rounded-full bg-base1 text-white flex items-center justify-center shadow-xl z-20 transition-all duration-500 cursor-pointer hover:bg-base2 swiper-button-disabled :opacity-50 swiper-button-disabled :cursor-not-allowed">
              <svg viewBox="0 0 19 15" className="w-[18px]">
                <path
                  d="M11.75 14.25L10.175 12.6187L14.1687 8.625H0.5V6.375H14.1687L10.175 2.38125L11.75 0.75L18.5 7.5L11.75 14.25Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div> */}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Link
          href={"/"}
          className="group text-[12px] leading-none font-medium capitalize text-[#100f0f] flex items-center mt-[15px] hover:text-base1"
        >
          apply now
          <Image
            src={"/images/about-btn.svg"}
            alt="btn"
            width={24}
            height={24}
            className="aspect-square ml-[8px] group-hover:translate-x-[4px] transition-transform duration-300"
          />
        </Link>
      </div>
    </section>
  );
}
