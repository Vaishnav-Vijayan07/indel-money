import Image from "next/image";

export default function SmartMoneyDeal({
  deals_title,
  deals_description,
  benfits_title,
  title,
  desc,
  image,
  alt,
  serviceBenefit,
}) {
  return (
    <section className="relative z-1 w-full pt-[30px] xl:pt-[40px] 2xl:pt-[70px] 3xl:pt-[100px] pb-[50px] xl:pb-[40px] 2xl:pb-[90px]">
      <div className="container">
        <div className="flex flex-wrap mb-[25px] 2xl:mb-[30px]">
          <div className="w-full md:w-[45%] xl:w-[40%]">
            <h2
              className="text-title1 text-[#5e5959bf] md:pb-[0] pb-[12px] [&>span]:text-base2 [&>span]:font-bold"
              dangerouslySetInnerHTML={{ __html: deals_title ? deals_title : "Smart Money Deal" }}
            />
          </div>
          <div className="w-full md:w-[55%] xl:w-[60%] md:pl-[30px]">
            <p className="text-sm1">
              {deals_description
                ? deals_description
                : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected  humour, or randomised words which don't look even slightly believable"}
            </p>
          </div>
        </div>

        <div className="w-full relative bg-[#CAE5F4] flex flex-wrap rounded-[36px] overflow-hidden lg:flex-row flex-col-reverse">
          <div className="w-full lg:w-[calc(100%-345px)] xl:w-[calc(100%-445px)] 2xl:w-[calc(100%-700px)] p-[20px] sm:p-[25px] xl:p-[35px] 2xl:p-[45px]">
            <div className="font-bold leading-none text-base1 text-[20px] md:text-[20px] lg:text-[22px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[40px] mb-[15px]">
              {title ? title : "Why choose Indel Money?"}
            </div>
            <p className="text-sm1">{desc ? desc : ""}</p>
            <div className="w-full rounded-[36px] overflow-hidden mt-[25px]">
              <div className="relative w-full bg-[#DCEAFB] px-[25px] 2xl:px-[35px] py-[20px] 2xl:py-[30px]">
                <div className="absolute z-0 sm:left-0 left-[10px] top-0 sm:w-[45%] w-[100%] h-full pointer-events-none">
                  <Image
                    src="/images/beneClip.png"
                    alt="benefit-clip"
                    width={408}
                    height={475}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="absolute z-0 right-0 top-0 w-[45%] h-full pointer-events-none sm:block hidden">
                  <Image
                    src="/images/benefitClipR.png"
                    alt="benefit-clip"
                    width={408}
                    height={475}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="relative z-1 text-base2 text-[14px] lg:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold leading-normal uppercase mb-[10px]">
                  {benfits_title ? benfits_title : "Benefits"}
                </div>
                <div className="relative z-1 flex flex-wrap -my-[5px] 2xl:-my-[8px] -mx-[10px] 2xl:-mx-[15px]">
                  {serviceBenefit?.map((item, index) => (
                    <div key={index} className="w-full 3xs:w-1/2 py-[5px] 2xl:py-[8px] px-[10px] 2xl:px-[15px]">
                      <ValueBox item={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full h-full lg:h-auto lg:w-[345px] xl:w-[445px] 2xl:w-[700px] overflow-hidden left-0 top-0 opacity-[100%] relative z-0 lg:z-1">
            <Image
              src={image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${image}` : "/images/deal01.jpg"}
              alt={alt ? alt : "money-deal"}
              width={700}
              height={475}
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function ValueBox({ item }) {
  return (
    <div className="w-wfull">
      <div className="flex items-center">
        <div className="group w-[20px] 2xl:w-[25px] h-[20px] 2xl:h-[25px]">
          <Image
            src={item?.icon ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.icon}` : "/images/ftrB-01.svg"}
            alt={item?.image_alt}
            width={25}
            height={25}
            className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-[1.05]"
          />
        </div>
        <div className="text-[11px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.4] font-normal text-black w-[calc(100%-20px)] 2xl:w-[calc(100%-25px)] pl-[15px]">
          {item?.title}
        </div>
      </div>
    </div>
  );
}
