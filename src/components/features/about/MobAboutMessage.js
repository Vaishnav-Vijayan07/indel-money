"use client";

import Image from "next/image";
import { useState } from "react";

const messages = [
  {
    image: "/images/mob-chairman.png",
    title: "Message from Chairman",
    highlight: "Chairman",
    name: "Mr. Mohanan Gopalakrishnan",
    position: "Chairman & Managing Director",
    message:
      "We at Indel Money believe in dynamism blended with human values at every point of our organization. That is why we do not believe in working along the lines of certain preconceived missions and visions, rather, we believe in certain values which we do practice and showcase in our business. We call them INDEL VALUES, which are presented in the relevant section. We at Indel Money believe in dynamism blended with human values at every point of our organization. That is why we do not believe in working along the lines of certain preconceived missions and visions, rather, we believe in certain values which we do practice and showcase in our business. We call them INDEL VALUES, which are presented in the relevant section.",
  },
  {
    image: "/images/mob-ceo.png",
    title: "From The CEO's Desk",
    highlight: "CEO's Desk",
    name: "Mr. Umesh Mohanan",
    position: "Executive Director & CEO",
    message:
      "We at Indel Money believe in dynamism blended with human values at every point of our organization. That is why we do not believe in working along the lines of certain preconceived missions and visions, rather, we believe in certain values which we do practice and showcase in our business. We call them INDEL VALUES, which are presented in the relevant section. We at Indel Money believe in dynamism blended with human values at every point of our organization. That is why we do not believe in working along the lines of certain preconceived missions and visions, rather, we believe in certain values which we do practice and showcase in our business. We call them INDEL VALUES, which are presented in the relevant section.",
  },
];

export default function MobAboutMessage() {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-[30px]">
      <div className="container">
        <div className="-mx-[0.5rem]">
          {messages.map((item, index) => {
            const isExpanded = expanded[index];
            const preview = item.message.slice(0, 360) + "...";

            const isFirst = index === 0;

            return (
              <div
                key={index}
                className={`${!isFirst ? "-mt-[40px]" : ""}
               w-full h-auto bg-white rounded-[28px] shadow-[0_0_50px_0_rgba(0,0,0,0.25)] p-[15px_20px_40px] 4xs:p-[20px_30px_50px]`}
              >
                <div className="flex items-center gap-[10px] 4xs:gap-[20px] mb-[20px]">
                  <div className="w-[60px] 4xs:w-[76px] h-[60px] 4xs:h-[76px] overflow-hidden rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.15)] relative z-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="aspect-square object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[16px] 4xs:text-[18px] leading-[1] line-clamp-1 font-semibold text-[#1e1e1e] mb-[8px]">
                      {item.title.replace(item.highlight, "")}
                      <span className="text-base2 font-bold">
                        {item.highlight}
                      </span>
                    </h4>
                    <h5 className="text-[12px] 4xs:text-[14px] leading-[1] line-clamp-1 font-medium text-[#0b0b0b] mb-[5px]">
                      {item.name}
                    </h5>
                    <p className="text-[11px] 4xs:text-[13px] leading-[1] line-clamp-1 font-normal text-[#33538c]">
                      {item.position}
                    </p>
                  </div>
                </div>
                <p className="text-sm1">
                  {/* {item.message} */}
                  {isExpanded ? item.message : preview}
                </p>
                <div
                  onClick={() => toggleReadMore(index)}
                  className="text-[13px] leading-[1] font-medium text-base1 capitalize my-[10px]"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
