"use client";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    src: "/images/shadeIndel-1.svg",
    alt: "shadeIndel",
    title: "automotive",
    link: "/",
  },
  {
    src: "/images/shadeIndel-2.svg",
    alt: "shadeIndel",
    title: "Hospitality",
    link: "/",
  },
  {
    src: "/images/shadeIndel-3.svg",
    alt: "shadeIndel",
    title: "Insurance",
    link: "/",
  },
  {
    src: "/images/shadeIndel-4.svg",
    alt: "shadeIndel",
    title: "Media & Entertainment",
    link: "/",
  },
  {
    src: "/images/shadeIndel-5.svg",
    alt: "shadeIndel",
    title: "Infrastructure",
    link: "/",
  },
];

const slideContents = [
  {
    logo: {
      src: "/images/shadeIndel-disc-1.png",
      alt: "Indel Automotive",
      width: 260,
      height: 100,
      className: "max-w-[100px] aspect-[260/100] mb-0",
    },
    content: (
      <>
        <p>
          Indel Automotive Private Limited, the automotive division of our
          organization, stands as one of India&apos;s foremost automotive
          dealership conglomerates. With a strong legacy of excellence and
          customer-centric values, we have established ourselves as a trusted
          name in the automotive industry. Over the years, we have forged
          strategic partnerships with some of the world&apos;s most renowned
          automotive manufacturers, enabling us to deliver cutting-edge vehicles
          and exceptional after-sales services to our customers.
        </p>
        <Image
          src="/images/shadeIndel-disc-2.jpg"
          alt="indel"
          width={420}
          height={276}
          className="max-w-[160px] inline m-[0_20px_10px_0]"
        />
        <Image
          src="/images/shadeIndel-disc-3.jpg"
          alt="indel"
          width={420}
          height={276}
          className="max-w-[160px] inline m-[0_20px_10px_0]"
        />
        <p>
          Our extensive network spans multiple cities across the country,
          featuring state-of-the-art showrooms and service centers designed to
          provide a seamless and premium experience. Each of our showrooms is
          equipped with modern facilities and staffed by highly trained
          professionals who are dedicated to assisting customers in finding the
          perfect vehicle to meet their needs. Our service centers, on the other
          hand, are equipped with advanced tools and technologies to ensure that
          every vehicle we sell receives the highest standard of maintenance and
          care. The Indel Automotive group comprises several distinguished
          brands, each representing a legacy of innovation, performance, and
          reliability. These include **KERALA VOLVO**, where we offer the luxury
          and sophistication of Volvo vehicles; **KAIRALI FORD**, delivering the
          rugged durability and innovation of Ford automobiles; **INDEL
          YAMAHA**, bringing the thrill and precision of Yamaha motorcycles;
          **INDEL HONDA**, showcasing the efficiency and reliability of Honda
          vehicles; and **INDEL SUZUKI**, providing the versatility and
          affordability of Suzuki cars and two-wheelers.
          <br />
          At Indel Automotive, we are committed to delivering more than just
          vehicles; we aim to create lasting relationships with our customers by
          offering unparalleled service, transparency, and trust. Whether you
          are looking to purchase a new vehicle or maintain an existing one, our
          team is here to ensure that your automotive journey is smooth,
          enjoyable, and rewarding. With a focus on innovation, customer
          satisfaction, and sustainable growth, we continue to drive forward as
          a leader in India&apos;s automotive landscape.
        </p>
      </>
    ),
  },
  {
    logo: {
      src: "/images/shadeIndel-disc-1.png",
      alt: "Indel Technology",
      width: 260,
      height: 100,
      className: "max-w-[100px] aspect-[260/100] mb-0",
    },
    content: (
      <p>
        Indel Technology Solutions, a key pillar of our group, focuses on
        delivering innovative tech solutions for the automotive sector. By
        leveraging advanced AI and IoT technologies, we empower dealerships with
        smart inventory management and predictive maintenance tools, driving
        efficiency and customer satisfaction.
      </p>
    ),
  },
  {
    logo: {
      src: "/images/shadeIndel-disc-1.png",
      alt: "Indel Sustainability",
      width: 260,
      height: 100,
      className: "max-w-[100px] aspect-[260/100] mb-0",
    },
    content: (
      <p>
        Indel Sustainability Initiatives lead the charge in eco-friendly
        automotive practices. Our commitment to green technologies includes
        promoting electric vehicles and implementing sustainable manufacturing
        processes, contributing to a cleaner and greener future for the
        industry.
      </p>
    ),
  },
];

function ShadeIndelBox({ item, isActive }) {
  return (
    <div
      className={`
      ${
        isActive
          ? "from-[rgba(198,59,59,0.30)] to-base1/30"
          : "from-[rgba(198,59,59,0.10)] to-base1/10"
      } w-full h-auto min-h-[100px] flex items-center justify-center rounded-[15px] p-[15px] bg-linear-to-tr transition-all duration-300`}
    >
      <div>
        <div className="w-50px h-[30px] mx-auto relative z-0 mb-[10px]">
          <Image
            src={item?.src}
            alt={item?.alt}
            fill
            sizes="50px"
            className="mx-auto"
          />
        </div>
        <div className="text-[14px] leading-none font-medium capitalize text-[#1e1e1e] text-center overflow-hidden transition-all duration-300 block">
          {item?.title}
        </div>
      </div>
    </div>
  );
}

export default function MobDifferentShadesIndelSlide() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <section className="w-full block py-[20px_40px]">
      <div className="container">
        <div className="flex flex-wrap -mx-[5px] mb-[30px]">
          {slides?.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSlideClick(index)}
              className="w-5/10 p-[5px]"
            >
              <ShadeIndelBox item={item} isActive={index === activeIndex} />
            </div>
          ))}
        </div>
        <div className="[&_p]:text-sm1 [&_p]:mb-[10px] sm:[&_p]:mb-[15px] lg:[&_p]:mb-[20px]">
          {slideContents[activeIndex]?.logo && (
            <div className="w-full h-auto bg-white shadow-[0_0_50px_0_rgba(0,0,0,0.1)] rounded-[10px] p-[20px] mb-[15px]">
              <Image
                src={slideContents[activeIndex].logo.src}
                alt={slideContents[activeIndex].logo.alt}
                width={slideContents[activeIndex].logo.width}
                height={slideContents[activeIndex].logo.height}
                className={slideContents[activeIndex].logo.className}
              />
            </div>
          )}
          {slideContents[activeIndex]?.content || <p>Content not available</p>}
          {/* 
          <div className="w-full h-auto bg-white shadow-[0_0_50px_0_rgba(0,0,0,0.1)] rounded-[10px] p-[20px] mb-[15px]">
            <Image
              src="/images/shadeIndel-disc-1.png"
              alt="indel"
              width={260}
              height={100}
              className="max-w-[100px] mb-0"
            />
          </div>
          <p>
            Indel Automotive Private Limited, the automotive division of our
            organization, stands as one of India&apos;s foremost automotive
            dealership conglomerates. With a strong legacy of excellence and
            customer-centric values, we have established ourselves as a trusted
            name in the automotive industry. Over the years, we have forged
            strategic partnerships with some of the world&apos;s most renowned
            automotive manufacturers, enabling us to deliver cutting-edge
            vehicles and exceptional after-sales services to our customers.
          </p>
          <Image
            src="/images/shadeIndel-disc-2.jpg"
            alt="indel"
            width={420}
            height={276}
            className="max-w-[160px] inline m-[0_20px_10px_0]"
          />
          <Image
            src="/images/shadeIndel-disc-3.jpg"
            alt="indel"
            width={420}
            height={276}
            className="max-w-[160px] inline m-[0_20px_10px_0]"
          />
          <p>
            Our extensive network spans multiple cities across the country,
            featuring state-of-the-art showrooms and service centers designed to
            provide a seamless and premium experience. Each of our showrooms is
            equipped with modern facilities and staffed by highly trained
            professionals who are dedicated to assisting customers in finding
            the perfect vehicle to meet their needs. Our service centers, on the
            other hand, are equipped with advanced tools and technologies to
            ensure that every vehicle we sell receives the highest standard of
            maintenance and care. The Indel Automotive group comprises several
            distinguished brands, each representing a legacy of innovation,
            performance, and reliability. These include **KERALA VOLVO**, where
            we offer the luxury and sophistication of Volvo vehicles; **KAIRALI
            FORD**, delivering the rugged durability and innovation of Ford
            automobiles; **INDEL YAMAHA**, bringing the thrill and precision of
            Yamaha motorcycles; **INDEL HONDA**, showcasing the efficiency and
            reliability of Honda vehicles; and **INDEL SUZUKI**, providing the
            versatility and affordability of Suzuki cars and two-wheelers.
            <br />
            At Indel Automotive, we are committed to delivering more than just
            vehicles; we aim to create lasting relationships with our customers
            by offering unparalleled service, transparency, and trust. Whether
            you are looking to purchase a new vehicle or maintain an existing
            one, our team is here to ensure that your automotive journey is
            smooth, enjoyable, and rewarding. With a focus on innovation,
            customer satisfaction, and sustainable growth, we continue to drive
            forward as a leader in India&apos;s automotive landscape.
          </p> */}
        </div>
      </div>
    </section>
  );
}
