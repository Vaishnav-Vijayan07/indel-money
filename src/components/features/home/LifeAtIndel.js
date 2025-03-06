"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function LifeAtIndel() {
  return (
    <section className="w-full pt-[20px] pb-[20px] md:pt-[70px] md:pb-[70px] sm:pt-[30px] sm:pb-[30px]">
      <div className="container">
        <div className="flex flex-wrap">  
          <div className="2xl:w-[795px] xl:w-[580px] lg:w-[490px] md:w-[100%] w-[100%]">
            <div className="w-full 2xl:h-[625px] xl:h-[450px] md:h-[405px] sm:h-[305px] h-[auto]">
              <div className="flex flex-wrap h-full 2xl:m-[-10px] m-[-6px]">
                <div className="2xl:w-[calc(100%-480px)] xl:w-[calc(100%-395px)] lg:w-[calc(100%-320px)] sm:w-[40%] w-[100%] h-full lg:h-full md:h-[100%]">
                  <div className="w-full lg:h-full h-full flex flex-wrap">
                    <div className="lg:w-full sm:w-full w-[50%] md:w-[100%] lg:h-1/2 sm:h-1/2 h-full 2xl:p-[10px] md:p-[6px] p-[4px]">
                      <div className="group w-full h-full 2xl:rounded-[36px] xl:rounded-[30px] md:rounded-[30px] rounded-[18px] overflow-hidden">
                        <Image
                          src={"/images/life01.webp"}
                          alt="lifeintelImg"
                          width={290}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                        />
                      </div>
                    </div>
                    <div className="lg:w-full sm:w-full w-[50%] md:w-[100%] lg:h-1/2 sm:h-1/2 h-full 2xl:p-[10px] md:p-[6px] p-[4px]">
                      <div className="group w-full h-full 2xl:rounded-[36px] xl:rounded-[30px] md:rounded-[30px] rounded-[18px] overflow-hidden">
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
                <div className="2xl:w-[480px] xl:w-[395px] lg:w-[320px] sm:w-[60%] w-[100%] lg:h-full md:h-[100%] h-full">
                  <div className="w-full h-full 2xl:p-[10px] md:p-[6px] p-[4px]">
                    <div className="group w-full h-full 2xl:rounded-[36px] xl:rounded-[30px] md:rounded-[30px] rounded-[18px] overflow-hidden">
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
          <div className="2xl:w-[calc(100%-795px)] xl:w-[calc(100%-580px)] lg:w-[calc(100%-490px)] md:w-[100%] w-[100%] 2xl:pl-[75px] xl:pl-[40px] lg:pl-[30px] lg:pt-[0px] pt-[30px]">
            <h2 className="text-title1">
              Life at <span>Indel</span>
            </h2>
            <p className="text-sm-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>

            <div className="w-full xl:pt-[25px] pt-[15px] relative">
              <Swiper
                modules={[Pagination,]}
                slidesPerView={1}
                spaceBetween={20}
                // autoplay={{ delay: 3000 }}
                autoplay={false}
                pagination={{ clickable: true }}
              
                className="w-full lifeSlide pb-[30px]"
              >
                {[...Array(5)].map((_, index) => (
                  <SwiperSlide key={index} className="">
                    <a href="#!" className="lifebx block w-full rounded-[24px] bg-[#E6EDF7] overflow-hidden p-[20px] pl-[25px]">
                      <div className="w-full flex flex-wrap sm:flex-row flex-col-reverse">
                        <div className="2xl:w-[calc(100%-200px)] xl:w-[calc(100%-150px)] lg:w-[calc(100%-100px)] sm:w-[calc(100%-100px)] w-full 2xl:pr-[30px] sm:pr-[20px] sm:pt-0 pt-[20px]">
                          <h5 className="text-[#1E1E1E] 2xl:text-[23px] xl:text-[18px] sm:text-[16px] text-[15px] font-normal leading-normal 2xl:mb-[25px] mb-[15px] ">
                            Indel Money Limited is bestowed as
                            <span className="text-base2 uppercase font-medium pl-[5px]">
                              ‘GREAT PLACE TO WORK’
                            </span>
                          </h5>
                          <div className="w-full pb-[30px]">
                            <p className="text-sm-1 line-clamp-4 xl:mb-[30px]">
                              Every year, more than 10,000 organizations from
                              over 60 countries partner with Great Place to Work®
                              over 60 countries partner with Great Place to Work®
                              over 60 countries partner with Great Place to Work®
                              Institute...
                            </p>

                          </div>
                        </div>
                        <div className="2xl:w-[200px] xl:w-[150px] lg:w-[100px] w-[100px]">
                          <div className="group w-full h-auto xl:h-full rounded-[24px] overflow-hidden">
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
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-full 2xl:pt-10 xl:pt-5 pt-5">
              <div className="w-full">
                <div className="flex flex-wrap w-full sm:m-[-10px] m-[-6px]">
                  <div className="sm:p-[10px] p-[6px] sm:m-0 m-auto">
                    <a href="#!" className="flex justify-center items-center 2xl:px-7 xl:px-5 px-5 2xl:py-3  xl:py-1.5 py-1.5 rounded-full bg-[#EE3824] text-white font-normal leading-normal transition-all duration-600 hover:bg-[#17479E]">
                      <span className="text-white 2xl:text-[18px] xl:text-[13px] text-[13px] font-medium leading-normal">
                        TAKE ME TO CAREERS PAGE
                      </span>
                    </a>
                  </div>
                  <div className="sm:p-[10px] p-[6px]  sm:m-0 m-auto">
                    <a href="#!" className="flex justify-center items-center 2xl:px-7 xl:px-5 px-5 2xl:py-3 xl:py-1.5 py-1.5 rounded-full bg-[#EE3824] text-white font-normal leading-normal transition-all duration-600 hover:bg-[#17479E]">
                      <span className="text-white 2xl:text-[18px] xl:text-[13px] text-[13px] font-medium leading-normal">
                        VISIT GALLERY
                      </span>
                    </a>

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
