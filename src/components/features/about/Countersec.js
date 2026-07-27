"use client";
import CountUp from "react-countup";
import Image from "next/image";

const boxOuterStyle =
  "w-[calc(100%/2)] md:w-[calc(100%/4)] p-[5px] 3xl:p-[10px] md:h-full flex flex-col-reverse";
const boxStyle =
  "w-full h-full rounded-[25px] p-[20px_15px] 3xl:p-[25px_20px] overflow-hidden bg-[linear-gradient(156deg,rgba(23,71,158,0.30)_6.47%,rgba(198,59,59,0.30)_91.2%)] flex flex-col";
const titleStyle =
  "text-[18px] sm:text-[20px] lg:text-[24px] 2xl:text-[30px] 3xl:text-[43px] font-bold leading-[1.2] text-black mb-[10px]";
const descriptionStyle =
  "text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-medium text-black/90 mb-[15px]";
const imageStyle =
  "w-full max-w-[80px] lg:max-w-[100px] 2xl:max-w-[125px] 3xl:max-w-[160px] mt-auto mx-auto";

export default function Countersec() {
  return (
    <div className="flex flex-wrap md:items-end -m-[5px] 3xl:-m-[10px] md:h-[260px] 2xl:h-[300px] 3xl:h-[370px]">
      {/* Card 1 */}
      <div className={boxOuterStyle}>
        <div className={boxStyle}>
          <div className={titleStyle}>
            <CountUp end={300} duration={2} separator="," />+
          </div>
          <p className={descriptionStyle}>
            Over 300 Convenient Locations Across India
          </p>
          <div className={imageStyle}>
            <Image
              src="/images/india.svg"
              alt="India Icon"
              width={185}
              height={175}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className={boxOuterStyle}>
        <div className={`${boxStyle} md:h-[calc(100%-50px)]`}>
          <div className={titleStyle}>
            <CountUp end={1} duration={2} separator="," />
            Million+
          </div>
          <p className={descriptionStyle}>
            Trusted by millions, our financial services have positively impacted
            lives.
          </p>
          <div className={`${imageStyle} mx-0!`}>
            <Image
              src="/images/gropImg.png"
              alt="Group Image"
              width={185}
              height={175}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className={boxOuterStyle}>
        <div className={`${boxStyle} pb-0!`}>
          <div className={titleStyle}>
            <CountUp end={1700} duration={2} separator="," />+
          </div>
          <p className={descriptionStyle}>
            Trusted, Skilled Employees Committed to Excellence
          </p>
          <div className={imageStyle}>
            <Image
              src="/images/man.png"
              alt="Man Icon"
              width={185}
              height={175}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className={boxOuterStyle}>
        <div className={`${boxStyle} md:h-[calc(100%-50px)]`}>
          <div className={titleStyle}>
            <CountUp end={30} duration={2} separator="," />+
          </div>
          <p className={descriptionStyle}>
            Backed by years of experience, we deliver reliable and effective
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
