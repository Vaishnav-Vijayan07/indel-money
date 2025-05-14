"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./History.css";

const slides = [
  {
    year: "1986",
    image: "/images/h1.webp",
    title: "The Inception",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "1991",
    image: "/images/history1.jpg",
    title: "Lorem Ipsum is dummy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "1994",
    image: "/images/history2.jpg",
    title: "Lorem Ipsum is dummy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "2000",
    image: "/images/history3.jpg",
    title: "Lorem Ipsum is dummy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "2025",
    image: "/images/history1.jpg",
    title: "Lorem Ipsum is dummy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    year: "5025",
    image: "/images/history2.jpg",
    title: "Lorem Ipsum is dummy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];

export default function YearsInception({ inceptionslides, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotsRef = useRef([]);
  const [arrowPos, setArrowPos] = useState(0);

  useEffect(() => {
    const activeDotIndex = Math.round((activeIndex / (inceptionslides?.length - 1)) * (12 - 1));
    const activeDot = dotsRef.current[activeDotIndex];
    if (activeDot) {
      const offset = activeDot.offsetTop;
      setArrowPos(offset);
    }
  }, [activeIndex, inceptionslides?.length]);

  return (
    <section className="w-full h-auto block bg-[#003596] overflow-hidden relative z-0 &:after:content[''] after:absolute after:top-0 after:left-0 after:h-full after:lg:w-[50%] after:w-full after:bg-[#003596]">
      <div className="container">
        <div className="flex flex-wrap relative z-1">
          <div className="w-full lg:w-[220px] xl:w-[300px] 2xl:w-[350px] 3xl:w-[420px] py-[40px] lg:py-[120px] flex items-end">
            <div className=" w-full">
              <div className="text-title2 text-white">{title}</div>
            </div>
          </div>
          <div className="w-full lg:w-[calc(100%-220px)] xl:w-[calc(100%-300px)] 2xl:w-[calc(100%-350px)] 3xl:w-[calc(100%-420px)] bg-base1 pr-[30px] 2xl:pr-[60px] pl-[30px] lg:pl-[60px] 3xl:pl-[130px] pt-[40px] lg:pt-[50px] 3xl:pt-[70px]">
            <div className="flex flex-wrap w-full justify-between">
              <div className="relative flex justify-center max-w-[525px] 3xl:max-w-[760px] w-[calc(100%-120px)] 3xl:w-[calc(100%-200px)]">
                <div className="relative z-1 w-[75px] 2xl:w-[110px] 3xl:w-[120px]">
                  <div className="text-white text-[55px] 2xl:text-[80px] 3xl:text-[93px] leading-none font-bold">
                    {inceptionslides?.[activeIndex]?.year?.slice(0, 2)}
                  </div>
                </div>
                <div className="w-[calc(100%-75px)] 2xl:w-[100%-110px] 3xl:w-[calc(100%-120px)]">
                  <Swiper
                    direction="vertical"
                    slidesPerView={1.6}
                    spaceBetween={50}
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
                    className="h-[400px] 2xl:h-[650px] 3xl:h-[750px]"
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  >
                    {inceptionslides?.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex flex-wrap items-start text-white relative h-full">
                          <div className="w-[70px] 2xl:w-[100px] relative h-full">
                            <div className="text-white text-[55px] 2xl:text-[80px] 3xl:text-[93px] leading-none font-bold">{item?.year.slice(2)}</div>
                            {index !== inceptionslides?.length - 1 && (
                              <div className="absolute bg-white w-[2px] left-0 2xl:left-0 right-0 m-auto bottom-0 h-[calc(100%-70px)] 3xl:h-[calc(100%-100px)] before:content-[''] before:absolute before:top-0 before:left-[-5px] before:m-auto before:w-[12px] before:h-[12px] before:bg-white before:rounded-full">
                                <span className="absolute bottom-0 left-[-8px] m-auto bg-[#DCEBFF] w-[18px] h-[18px] rounded-full before:content-[''] before:absolute before:inset-0 before:m-auto before:w-[10px] before:h-[10px] before:bg-[#EB0208] before:rounded-full"></span>
                              </div>
                            )}
                          </div>
                          <div className="w-[calc(100%-100px)] pl-[30px] 2xl:pl-[40px] 3xl:pl-[70px]">
                            <div className="w-full h-full">
                              <div className="rounded-[18px] 2xl:rounded-[24px] overflow-hidden w-full mb-[15px]">
                                <Image
                                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.image}`}
                                  alt={item?.title}
                                  width={400}
                                  height={250}
                                  className="w-full object-cover max-h-[175px] 3xl:max-h-[250px]"
                                />
                              </div>
                              <h3 className="text-[16px] 2xl:text-[20px] 3xl:text-[22px] text-white font-semibold mb-[5px] 2xl:mb-[10px]">
                                {item?.title}
                              </h3>
                              <p className="text-white">{item?.description}</p>
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
              <div className="relative w-[120px] 3xl:w-[200px] flex flex-col items-center justify-between h-[350px] 2xl:h-[510px] 3xl:h-[620px] my-auto mx-0 custom-pagination-wrapper">
                <div className="text-white text-[12px] 2xl:text-[14px] mb-2">{inceptionslides?.[0].year}</div>

                <div className="flex flex-col justify-between items-center relative h-full">
                  {[...Array(13)].map((_, index) => {
                    const activeDotIndex = Math.round((activeIndex / (inceptionslides?.length - 1)) * (12 - 1));
                    return (
                      <div
                        key={index}
                        ref={(el) => (dotsRef.current[index] = el)}
                        className={`dotTimeline ${index === activeDotIndex ? "active" : ""}`}
                      ></div>
                    );
                  })}

                  <div
                    className="movingArrowsIndicator"
                    style={{
                      transform: `translateY(${arrowPos}px) translateX(-50%)`,
                      transition: "transform 0.8s ease",
                    }}
                  >
                    <div className="arrowUp" />
                    <div className="arrowDown" />
                  </div>
                </div>

                <div className="text-white text-[12px] 2xl:text-[14px] mt-2">{inceptionslides?.[inceptionslides?.length - 1].year}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
