"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const goldloanServices = [
  {
    icon: "/images/servIcon1.svg",
    title: "India’s Longest Tenure",
    description:
      "Best possible means of capital been provided through our long tenure gold loan schemes in order",
  },
  {
    icon: "/images/servIcon2.svg",
    title: "Instant ; Swift processing and instant funds",
    description:
      "Get instant gold loan within minutes and choose any custom repayment option that suits you.",
  },
  {
    icon: "/images/servIcon3.svg",
    title: "Safety guaranteed",
    description:
      "We value the safety of your precious jewellery. Your gold will be evaluated, sealed & documented in your presence and moved into vaults in our strong rooms.",
  },
  {
    icon: "/images/servIcon4.svg",
    title: "Attractive ; Lowest interest rates",
    description:
      "We offer gold loan with low interest rates that is highly competitive. Another attractive feature is being able to choose repayment plans tailor made to your convenience.",
  },
  {
    icon: "/images/servIcon5.svg",
    title: "Flexible ; Maximum value for your gold",
    description:
      "We value the safety of your precious jewellery. Your gold will be evaluated, sealed & documented in your presence and moved into vaults in our strong rooms.",
  },
  {
    icon: "/images/servIcon6.svg",
    title: "Transparent ; Trusted and reliable",
    description:
      "Our interest rate, payment modes and other charges will be communicated with you in writing at the very outset of the loan processing. We assure you there won’t be any hidden costs or charges.",
  },
];

export default function MobGoldLoanServices() {
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
              {goldloanServices.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[160px] block bg-[#d4e6ff] p-[20px] rounded-[16px]">
                    <div className="flex items-center mb-[15px]">
                      <div className="w-[25px] 4xs:w-[30px] aspect-square relative z-0">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          fill
                          sizes="30px"
                          className="object-contain"
                        />
                      </div>
                      <div className="w-[calc(100%-25px)] 4xs:w-[calc(100%-30px)] pl-[10px]">
                        <div className="text-[16px] 4xs:text-[20px] leading-none font-medium text-base1 line-clamp-2">
                          {item.title}
                        </div>
                      </div>
                    </div>
                    <div className="line-clamp-3">
                      <p>{item.description}</p>
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
