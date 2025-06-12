"use client";
import Image from "next/image";
import CountUp from "react-countup";

function MobCountBox({ count, title }) {
  return (
    <div>
      <div className="text-[22px] font-bold leading-none line-clamp-1 text-white mb-[6px]">
        <span className="relative z-0">
          <span className="text-transparent">{count}</span>
          <CountUp
            className="absolute z-1 inset-0 top-[2px] m-auto"
            end={count}
            duration={2}
            separator=""
          />
        </span>
        +
      </div>
      <div className="text-[12px] leading-none font-medium line-clamp-1 text-white max-w-100% bg-base1 rounded-[32px] p-[8px_10px]">
        <span className="w-[10px] h-[10px] rounded-full bg-base2 mr-[4px] 4xs:mr-[8px] inline-block"></span>
        {title}
      </div>
    </div>
  );
}

export default function MobAboutFinacial() {
  return (
    <section className="w-full py-[30px_25px]">
      <div className="container">
        <div className="w-full">
          <h2 className="text-[20px] leading-[1.2] font-normal text-[#1e1e1e] max-w-[300px] mb-[20px]">
            <span className="font-bold text-base2">Indel&nbsp;</span>: Your
            Financial Partner for a Brighter Future
          </h2>
          <div className="w-full h-auto p-[10px_5px] rounded-[15px] bg-linear-to-tl from-base2 to-base1 flex flex-wrap [&>*]:p-[5px] 4sx:[&>*]:p-[10px]">
            <div className="w-1/2">
              <div className="w-full h-[170px] 4xs:h-[175px] overflow-hidden rounded-[24px] relative z-0">
                <Image
                  src="/images/mob-about-1.jpg"
                  alt="mob"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full h-[170px] 4xs:h-[175px] overflow-hidden rounded-[24px] bg-white p-[18px_12px]">
                <div className="text-[22px] 4sx:text-[26px] font-bold leading-none line-clamp-1 text-black mb-[10px]">
                  <span className="relative z-0">
                    <span className="text-transparent">{1}</span>
                    <CountUp
                      className="absolute z-1 inset-0 top-[2px] m-auto"
                      end={1}
                      duration={2}
                      separator=""
                    />
                  </span>
                  Million+
                </div>
                <div className="w-full mb-[10px]">
                  <Image
                    src="/images/gropImg.png"
                    alt="Group Image"
                    width={110}
                    height={36}
                  />
                </div>
                <p className="text-[12px] leading-[1.3] line-clamp-4 font-medium text-black">
                  Trusted by million of satisfied users, our financial services
                  have made a real impact on people ss lives.
                </p>
              </div>
            </div>
            <MobCountBox count="300" title="Locations all over India" />
            <MobCountBox count="1700" title="Trusted Employees" />
            <MobCountBox count="30" title="Years of Experience" />
            <div>
              <div className="w-full h-auto overflow-hidden rounded-[10px] bg-white p-[18px]">
                <h5 className="text-[16px] leading-[1.2] font-bold text-base1 mb-[8px]">
                  Truly Indian Born
                </h5>
                <p>
                  Indel Money, an RBI-regulated Non-Banking Finance Company
                  (NBFC) since 1986, has built a strong foundation on the values
                  of Indian civilization. With 268 branches across Kerala, Tamil
                  Nadu, Karnataka, Andhra Pradesh, Telangana, Odisha,
                  Maharashtra, Madhya Pradesh, Delhi-NCR, and Puducherry, we’ve
                  served millions for over two decades
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
