import Image from "next/image";
export default function DreamsToReality() {
  return (
    <section className="w-full pt-[200px] pb-[128px] md:pt-[150px] md:pb-[100px] sm:pt-[100px] sm:pb-[80px]">
      <div className="container">
        <div className="flex flex-wrap -mx-[40px] 2xl:-mx-[60px]">
          <div className="w-[calc(100%-468px)] 2xl:w-[calc(100%-610px)] px-[40px] 2xl:px-[60px]">
            <div className="max-w-[900px]">
              <div className="text-[20px]">
                Welcome to <span className="text-base4">INDEL MONEY</span>
              </div>
              <h2 className="text-title1 mt-2 leading-tight">
                From <span className="text-base2 font-bold">Dreams To Reality</span>,
                We&apos;re With You Every Step Of The Way.
              </h2>
              <h2 className="text-lg font-bold mt-4 text-base1">
                Indel Money : <span className="font-normal text-[#343434]">Overview</span>
              </h2>
              <p className="text-[#343434] font-normal mt-2 leading-relaxed">
                Indel Money is a comprehensive financial services provider dedicated to offering a diverse array of
                solutions to meet the unique needs of every individual and organization. Our wide range of services is
                designed to cater to high-net-worth individuals, business institutions, retail investors, and the general
                public alike, ensuring that everyone, regardless of their financial standing, has access to expert financial
                guidance and solutions.
              </p>
              <p className="font-normal text-[#343434] leading-relaxed">
                We understand that life is filled with various financial requirements, both expected and unforeseen, and
                that each person&apos;s needs are different. That’s why at Indel Money, we provide personalized, value-added
                services that are tailored to meet the specific goals and dreams of our clients.
              </p>
            </div>
          </div>
          <div className="w-[468px] 2xl:w-[610px] text-base1 px-[40px] 2xl:px-[60px]">
            <div className="group w-full  rounded-[20px] overflow-hidden">
              <Image src={"/images/aboutImg.webp"} alt="aboutImg" width={610} height={535} className="w-100 h-100 object-cover transition-transform duration-300 group-hover:scale-[1.05]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}