"use client";
import CountUp from "react-countup";
import Image from "next/image";

const boxOuterStyle = "w-[calc(100%/2)] md:w-[calc(100%/4)] p-[5px] 3xl:p-[10px] md:h-full flex flex-col-reverse";
const boxStyle =
  "w-full h-full rounded-[25px] p-[20px_15px] 3xl:p-[25px_20px] overflow-hidden bg-[linear-gradient(156deg,rgba(23,71,158,0.30)_6.47%,rgba(198,59,59,0.30)_91.2%)] flex flex-col";
const titleStyle = "text-[18px] sm:text-[20px] lg:text-[24px] 2xl:text-[30px] 3xl:text-[43px] font-bold leading-[1.2] text-black mb-[10px]";
const descriptionStyle = "text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-medium text-black/90 mb-[15px]";
const imageStyle = "w-full max-w-[80px] lg:max-w-[100px] 2xl:max-w-[125px] 3xl:max-w-[160px] mt-auto mx-auto";

const stylesForEven = `${boxStyle} md:h-[calc(100%-50px)]`;

export default function CountersecCopy({ statsData }) {
  return (
    <div className="flex flex-wrap md:items-end -m-[5px] 3xl:-m-[10px] md:h-[260px] 2xl:h-[300px] 3xl:h-[370px]">
      {statsData?.map((item, index) => (
        <div className={boxOuterStyle} key={item?.id}>
          <div className={index % 2 === 0 ? stylesForEven : boxStyle}>
            <div className={titleStyle}>
              <CountUp end={item?.value} duration={2} separator="," />
              {item?.suffix}
            </div>
            <p className={descriptionStyle}>{item?.description}</p>
            <div className={imageStyle}>
              <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.icon}`} alt="India Icon" width={185} height={175} className="object-cover" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
