"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../history/History.module.css";

const slides = [
  {
    year: "1986",
    image: "/images/h1.webp",
    title: "The Inception",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "1991",
    image: "/images/history1.jpg",
    title: "Lorem Ipsum is dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "1994",
    image: "/images/history2.jpg",
    title: "Lorem Ipsum is dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "2000",
    image: "/images/history3.jpg",
    title: "Lorem Ipsum is dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "2025",
    image: "/images/history1.jpg",
    title: "Lorem Ipsum is dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "5025",
    image: "/images/history2.jpg",
    title: "Lorem Ipsum is dummy",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

const yearStyle =
  "text-[20px] 4xs:text-[30px] leading-none font-bold text-white";

export default function MobYearsInception() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotsRef = useRef([]);
  const [arrowPos, setArrowPos] = useState(0);

  useEffect(() => {
    const activeDotIndex = Math.round(
      (activeIndex / (slides.length - 1)) * (12 - 1)
    );
    const activeDot = dotsRef.current[activeDotIndex];
    if (activeDot) {
      const offset = activeDot.offsetTop;
      setArrowPos(offset);
    }
  }, [activeIndex, slides.length]);

  return (
    <section className="w-full block bg-[#003595]">
      <div className="container">
        <div className="text-[24px] leading-none font-medium text-white flex items-center py-[30px]">
          <span className="text-[48px] 4xs:text-[72px] xs:text-[90px] leading-none font-bold text-base2 mr-[25px]">
            38
          </span>
          Years Since Inception
        </div>
      </div>
      <div className="w-full pt-[30px] bg-linear-to-tl to-[#c63b3b] from-base1">
        <div className="container">
          <div className="flex flex-wrap w-full justify-between">
            <div className="relative flex justify-center w-[calc(100%-60px)] 4xs:w-[calc(100%-80px)]">
              <div className="relative z-1 w-[28px] 4xs:w-[40px]">
                <div className={yearStyle}>
                  {slides[activeIndex]?.year.slice(0, 2)}
                </div>
              </div>
              <div className="w-[calc(100%-28px)] 4xs:w-[calc(100%-40px)]">
                <Swiper
                  direction="vertical"
                  slidesPerView={1.6}
                  spaceBetween={35}
                  speed={1000}
                  mousewheel={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} custom-dot" data-index="${index}"></span>`;
                    },
                  }}
                  modules={[Pagination, Mousewheel, Autoplay]}
                  className="h-[400px]"
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                  {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex flex-wrap h-full">
                        <div className="w-[30px] 4xs:w-[40px] relative h-full">
                          <div className={yearStyle}>{item.year.slice(2)}</div>
                          {index !== slides.length - 1 && (
                            <div className="absolute bg-white w-[2px] left-0 right-0 m-auto bottom-0 h-[calc(100%-40px)] before:content-[''] before:absolute before:top-0 before:left-[-4px] before:m-auto before:w-[10px] before:h-[10px] before:bg-white before:rounded-full">
                              <span className="absolute bottom-0 left-[-6px] m-auto bg-[#DCEBFF] w-[14px] h-[14px] rounded-full before:content-[''] before:absolute before:inset-0 before:m-auto before:w-[8px] before:h-[8px] before:bg-[#EB0208] before:rounded-full"></span>
                            </div>
                          )}
                        </div>
                        <div className="w-[calc(100%-30px)] 4xs:w-[calc(100%-40px)] pl-[10px] 4xs:pl-[20px]">
                          <div className="w-full h-auto">
                            <div className="w-full h-auto mb-[10px]">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={240}
                                height={140}
                                className="rounded-[18px] object-cover"
                              />
                            </div>
                            <h3 className="text-[14px] 4xs:text-[15px] leading-[1.2] text-white font-semibold mb-[5px]">
                              {item.title}
                            </h3>
                            <p className="max-4xs:text-[12px] text-white">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <SwiperSlide>
                    <div className="h-full w-full flex items-center justify-center"></div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            {/* Timeline with moving arrow */}
            <div className="relative w-[60px] 4xs:w-[80px] flex flex-col items-center justify-between h-[350px] my-auto mx-0 custom-pagination-wrapper">
              <div className="text-[12px] text-white mb-2">
                {slides[0].year}
              </div>
              <div className="flex flex-col justify-between items-center relative h-full">
                {[...Array(13)].map((_, index) => {
                  const activeDotIndex = Math.round(
                    (activeIndex / (slides.length - 1)) * (12 - 1)
                  );
                  return (
                    <div
                      key={index}
                      ref={(el) => (dotsRef.current[index] = el)}
                      className={`${styles.dotTimeline} ${
                        index === activeDotIndex ? "active" : ""
                      }`}
                    ></div>
                  );
                })}

                <div
                  className={styles.movingArrowsIndicator}
                  style={{
                    transform: `translateY(${arrowPos}px) translateX(-50%)`,
                    transition: "transform 0.8s ease",
                  }}
                >
                  <div className={styles.arrowUp} />
                  <div className={styles.arrowDown} />
                </div>
              </div>

              <div className="text-white text-[12px] mt-2">
                {slides[slides.length - 1].year}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
