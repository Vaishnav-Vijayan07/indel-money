import Image from "next/image";
export default function DreamsToReality() {
  return (
    <section className="w-full pt-[200px] pb-[128px] md:pt-[150px] md:pb-[100px] sm:pt-[100px] sm:pb-[80px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-[calc(100%-610px)]">
            <div className="max-w-[900px]">
              <div className="text-[20px]">
                Welcome to <span className="text-[var(--color-base3)] ">INDEL MONEY</span>
              </div>

              <h1 className="text-[55px] font-medium mt-2 leading-tight">
                From <span className="text-[var(--color-base2)] font-bold">Dreams To Reality</span>,
                We're With You Every Step Of The Way.
              </h1>

              <h2 className="text-lg font-bold mt-4 text-[var(--color-base1)]">
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
                that each person's needs are different. That’s why at Indel Money, we provide personalized, value-added
                services that are tailored to meet the specific goals and dreams of our clients.
              </p>
            </div>

          </div>
          <div className="w-[610px] text-base1">
            <div className="w-100  rounded-[20px]">
              <Image src={"/images/aboutImg.webp"} alt="aboutImg" width={610} height={535} className="w-100 h-100  bject-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}