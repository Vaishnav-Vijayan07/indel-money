import Image from "next/image";

export default function OurValues({ values }) {
  return (
    <section className="w-full pt-[30px] xl:pt-[60px] 2xl:pt-[100px] pb-[30px] sm:pb-[50px] xl:pb-[30px] lg:pb-[40px] 2xl:pb-[70px] bg-[#17479E]">
      <div className="container">
        <div className="relative flex flex-wrap">
          <div className="absolute right-0 lg:right-auto lg:left-0 bottom-0 lg:bottom-auto lg:top-[27%] xl:top-[0px] z-1 max-w-[100%] md:max-w-[48%] h-auto max-sm:hidden">
            <Image
              src="/images/bgText.svg"
              alt="indel-textLogo"
              width={815}
              height={445}
              style={{ objectFit: "contain" }}
              className="w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="w-[220px] lg:w-[280px] xl:w-[370px] 2xl:w-[470px] py-[15px] xl:py-[20px] 2xl:py-[30px] px-[10px] xl:px-[15px] 2xl:px-[20px]  flex items-end">
            <div className="group w-[80%] lg:w-full relative z-0 h-[150px] md:h-[240px]">
              <Image
                src="/images/indelLogo.png"
                alt="indel-valueLogo"
                fill
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="relative w-ful xl:w-[calc(100%-370px)] 2xl:w-[calc(100%-470px)] xl:pl-[30px] 2xl:pl-[50px]">
            <div className="w-full left-0 right-0 mx-auto max-w-[82%] -bottom-[10px] xl:-bottom-[55px] z-0 absolute">
              <Image
                src="/images/logoBg.png"
                alt="indel-logo"
                width={1115}
                height={120}
                style={{ objectFit: "contain" }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[20px] relative z-3">
              {values?.map((item, index) => (
                <div key={index} className={` ${index === 0 ? "lg:col-start-2" : ""}`}>
                  <ValueBox item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ValueBox({ item }) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[rgba(255,255,255,.10)] shadow-[0_0_28px_rgba(0,0,0,0.10)] p-[20px] xl:p-[30px] 2xl:p-[40px] rounded-[10px] sm:rounded-[20px] transition-transform duration-600 hover:transform hover:translate-y-2 2xl:hover:translate-y-4 hover:bg-[#EE3824]">
      <div className="flex flex-wrap mb-[15px] xl:mb-[25px]">
        <div className="group w-[65px] 3xs:w-[74px] sm:w-[40px] xl:w-[50px] 2xl:w-[60px] h-[65px] 3xs:h-[74px] sm:h-[40px] xl:h-[45px] 3xl:h-[65px] mb-[10px] sm:mb-0 rounded-full sm:rounded-0 sm:rounded-0 sm:bg-none">
          <Image
            src={item.icon ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.icon}` : "/images/value01.png"}
            alt={item?.alt ? item?.alt : "value-1"}
            width={72}
            height={65}
            className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-[1.05]"
          />
        </div>
        <div className="w-[calc(100%-60px)] 3xs::w-[calc(100%-70px)] sm:w-[calc(100%-40px)] xl:w-[calc(100%-50px)] 2xl:w-[calc(100%-60px)] sm:pl-[15px] 2xl:pl-[24px]">
          <div className="text-white font-medium 2xl:font-normal leading-[1.1] text-[18px] 3xs:text-[20px] sm:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] xl:min-h-[40px] 2xl:min-h-[50px] 3xl:min-h-[60px]">
            {item.title}
          </div>
        </div>
      </div>
      <div className="text-sm1 text-white ">{item.description}</div>
    </div>
  );
}
