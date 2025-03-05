"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function LifeAtIndel() {
  return (
    <section className="w-full pt-[200px] pb-[128px] md:pt-[150px] md:pb-[100px] sm:pt-[100px] sm:pb-[80px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="2xl:w-[795px] xl:w-[655px] lg:w-[560px]">
            <div className="w-full h-[625px]">
              <div className="flex flex-wrap h-full">
                <div className="w-[calc(100%-480px)] h-full">
                  <div className="w-full h-full flex flex-wrap">
                    <div className="w-full h-1/2 p-[10px]">
                      <div className="w-full h-full rounded-[36px] overflow-hidden group">
                        <Image
                          src={"/images/life01.webp"}
                          alt="lifeintelImg"
                          width={290}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                        />
                      </div>
                    </div>
                    <div className="w-full h-1/2 p-[10px]">
                      <div className="w-full h-full rounded-[36px] overflow-hidden group">
                        <Image
                          src={"/images/life02.webp"}
                          alt="lifeintelImg"
                          width={290}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[480px]">
                  <div className="w-full h-full p-[10px]">
                    <div className="w-full h-full rounded-[36px] overflow-hidden group">
                      <Image
                        src={"/images/life03.webp"}
                        alt="lifeintelImg"
                        width={480}
                        height={625}
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="w-[calc(100%-795px)] pl-[75px] md:pl-[50px] sm:pl-[30px]">
            <h2 className="text-title1">
              Life at <span>Indel</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>

            <div className="w-full pt-[25px] relative">
              <Swiper
                modules={[Pagination,]}
                slidesPerView={1}
                spaceBetween={20}
                // autoplay={{ delay: 3000 }}
                autoplay={false}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                }}
                className="w-full lifeSlide pb-[30px]"
              >
                {[...Array(3)].map((_, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="w-full rounded-[24px] bg-[#E6EDF7] overflow-hidden p-[20px] pl-[25px]">
                      <div className="w-full flex flex-wrap">
                        <div className="w-[calc(100%-200px)] pr-[30px]">
                          <h5 className="text-[#1E1E1E] text-[23px] font-normal leading-normal mb-[25px]">
                            Indel Money Limited is bestowed as
                            <span className="text-[#EE3824] uppercase font-medium pl-[5px]">
                              ‘GREAT PLACE TO WORK’
                            </span>
                          </h5>
                          <p className="line-clamp-4 mb-[30px]">
                            Every year, more than 10,000 organizations from
                            over 60 countries partner with Great Place to Work®
                            over 60 countries partner with Great Place to Work®
                            over 60 countries partner with Great Place to Work®
                            Institute...
                          </p>
                        </div>
                        <div className="w-[200px]">
                          <div className="w-full h-auto h-full rounded-[24px] overflow-hidden group">
                            <Image
                              src="/images/life04.webp"
                              alt="lifeintelImg"
                              width={200}
                              height={250}
                              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-full pt-10">
              <div className="w-fit">
                <div className="flex flex-wrap w-full">
                  <div className="p-2">
                    <div className="px-7 py-3 rounded-full bg-[#EE3824] transition-all duration-600 hover:bg-[#17479E]">
                      <span className="text-white text-lg font-normal leading-normal">
                        TAKE ME TO CAREERS PAGE
                      </span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="px-7 py-3 rounded-full bg-[#EE3824] transition-all duration-600 hover:bg-[#17479E]">
                      <span className="text-white text-lg font-normal leading-normal">
                        VISIT GALLERY
                      </span>
                    </div>

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
