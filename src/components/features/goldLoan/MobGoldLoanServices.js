"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import parse from "html-react-parser";
export default function MobGoldLoanServices({ features }) {
  
  
  return (
    <section className="w-full block py-[30px]">
      <div className="container">
        <div className="w-full h-full relative z-0 before:content-[''] before:absolute before:inset-0 before:-z-1 before:bg-[#e4efff] before:rounded-[10px] before:scale-90 before:block before:translate-y-[20px] before:pointer-events-none after:content-[''] after:absolute after:inset-0 after:-z-2 after:bg-[#e9f3ff] after:rounded-[10px] after:scale-80 after:block after:translate-y-[35px] after:pointer-events-none">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            loop={true}
            className=""
          >
            <>
              {features?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[160px] block bg-[#d4e6ff] p-[20px] rounded-[16px]">
                    <div className="flex items-center mb-[15px]">
                      <div className="w-[25px] 4xs:w-[30px] aspect-square relative z-0">
                        <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.icon}`} alt={item?.image_alt} fill sizes="30px" className="object-contain" />
                      </div>
                      <div className="w-[calc(100%-25px)] 4xs:w-[calc(100%-30px)] pl-[10px]">
                        <div className="text-[16px] 4xs:text-[20px] leading-none font-medium text-base1 line-clamp-2">
                          {item?.title}
                        </div>
                      </div>
                    </div>
                    <div className="line-clamp-3">
                      <p>{parse(item?.description)}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
