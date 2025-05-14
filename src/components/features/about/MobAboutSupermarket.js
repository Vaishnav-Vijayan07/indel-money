"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const slides = [
  {
    image: "/images/spImg1.webp",
    alt: "spImg1",
  },
  {
    image: "/images/spImg2.webp",
    alt: "spImg1",
  },
  {
    image: "/images/spImg3.webp",
    alt: "spImg1",
  },
  {
    image: "/images/spImg1.webp",
    alt: "spImg1",
  },
];

export default function MobAboutSupermarket({serviceImages}) {
  return (
    <section className="w-full py-[25px_35px] rounded-[10px] bg-[#eef9ff]">
      <div className="container">
        <div className="text-title1 max-w-[220px] mb-[20px]">
          The Complete Financial
          <span className="font-bold text-base2">&nbsp;Supermarket</span>
        </div>
        <div className="rounded-[24px] mb-[20px] overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={5}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            384: {
              spaceBetween: 10,
            },
          }}
        >
          {serviceImages?.map((item, index) => (
            <SwiperSlide key={index} className="max-w-[240px]">
              <div className="group w-full h-[160px] rounded-[24px] overflow-hidden relative z-0">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}`}
                  alt={"spImg1"}
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div>
          <p>
            Indel Money offers various financial services under one roof. We
            offer a wide range of services to all folks of the society including
            high net-worth individuals, business institutions, retail investors
            and to the common man. We offer value-added solutions for life
            requirements of a person and it helps to altering the dreams to
            reality.
          </p>
          <br />
          <p>
            Indel Money is the flagship financial institution of Indel
            Corporation, which is a dynamic and unique holding business
            enterprise with a total paid-up capital of 200+ Cr and a total
            turnover crossing 1,000 Cr. Headquartered in Mumbai, Indel Money has
            its corporate office in Kochi. We are a financial service
            supermarket with our services spread across multiple industries like
            Financial Services, Automobile, Hospitality, Infrastructure
            Development, Media, Communication, and Entertainment
          </p>
        </div>
      </div>
    </section>
  );
}
