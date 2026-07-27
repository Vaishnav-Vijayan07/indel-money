"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Career.css";
import { renderHtml } from "@/lib/utils/htmlParser";

const careerLifeAtIndelImages = [
  {
    id: 0,
    src: "/images/careerLifeAtIndel-1.jpg",
    alt: "careerLifeAtIndel",
  },
  {
    id: 1,
    src: "/images/careerLifeAtIndel-2.jpg",
    alt: "careerLifeAtIndel",
  },
  {
    id: 2,
    src: "/images/careerLifeAtIndel-3.jpg",
    alt: "careerLifeAtIndel",
  },
  {
    id: 3,
    src: "/images/careerLifeAtIndel-4.jpg",
    alt: "careerLifeAtIndel",
  },
  {
    id: 4,
    src: "/images/careerLifeAtIndel-5.jpg",
    alt: "careerLifeAtIndel",
  },
];

function ImageBox({ item, heightClass }) {
  return (
    <div className={`group w-full ${heightClass} overflow-hidden rounded-[15px] relative z-0`}>
      <Image
        src={item.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}` : "/images/careerLifeAtIndel-5.jpg"}
        alt={item?.image_alt ? item.image_alt : "careerLifeAtIndel"}
        fill
        sizes="320px"
        className="group-hover:scale-105 object-cover transition-transform duration-300"
      />
    </div>
  );
}

export default function MobCareerLifeAtIndel({
  gallery_title,
  gallery_sub_title,
  gallery_description,
  gallery_button_text,
  gallery_button_link,
  gallery,
}) {
  return (
    <section className="w-full block bg-[#f8e8ea] relative z-0">
      <div className="w-full h-full p-[40px_0_35px_0] rounded-[15px] bg-linear-to-b from-transparent to-white relative z-0 overflow-hidden presented by xAI after:content-[''] after:absolute after:-z-1 after:inset-0 after:opacity-50 after:block after:bg-linear-to-b after:from-base1 after:to-base2 after:pointer-events-none">
        <Image
          src="/images/careerLifeAtIndel-bg.jpg"
          alt="careerLifeAtIndel-bg"
          fill
          sizes="676px"
          className="w-full h-full object-cover opacity-5 pointer-events-none"
        />
        <div className="container">
          <div className="editor">
            <div>
              <div className="text-title1 font-bold text-white mb-[10px] [&>span]:text-base2 [&>span]:font-bold">
                {" "}
                {gallery_title ? renderHtml(gallery_title) : "Life at Indel"}
              </div>
              <div className="text-sm1 text-white mb-[15px]">{gallery_sub_title ? gallery_sub_title : ""}</div>
            </div>
            <div className="editor">{gallery_description ? renderHtml(gallery_description) : ""}</div>
            {/* <ul className="!mb-[10px] !pl-[17px]">
              <li>
                <b>A Culture of Excellence: </b>Immerse yourself in a culture that values hard work, creativity, and a relentless pursuit of
                excellence.
              </li>
              <li>
                <b>Empowering Opportunities: </b>Explore diverse career paths and receive continuous learning and development opportunities.
              </li>
              <li>
                <b>Work-Life Harmony: </b>Balance your professional and personal life with flexible work
              </li>
              <li>
                <b>Social Events and Celebrations: </b>Participate in a range of social events and celebrations that foster camaraderie and team
                spirit.
              </li>
              <li>
                <b>Recognition and Rewards: </b>Be recognized and rewarded for your contributions through various incentive programs and accolades.
              </li>
              <li>
                <b>Social Events and Celebrations: </b>Participate in a range of social events and celebrations that foster camaraderie and team
                spirit.
              </li>
            </ul>
            <p className="mb-[30px]">Join the Indel family and experience a fulfilling and rewarding career journey.</p> */}
          </div>
        </div>
        <div className="w-full max-w-[calc(100%-((100%-var(--container-x))/2))] pr-0 mr-0 mx-auto pl-[var(--container-padding)] mb-[30px]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={2.5}
            autoplay={{
              delay: 3000,
              speed: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mobCareerSlider w-full"
          >
            {gallery?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="p-[4px] lg:p-[6px] 2xl:p-[10px]">
                  <ImageBox item={item} heightClass="h-[176px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="container">
          <Link href={gallery_button_link ? gallery_button_link : "/"} className="btn btn-base1 min-w-[140px] w-fit text-[14px]">
            {gallery_button_text ? gallery_button_text : "Learn More"}
          </Link>
        </div>
      </div>
    </section>
  );
}
