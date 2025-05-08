import Image from "next/image";
import "./History.css";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";

// const historyImages = [
//   { image: "/images/h1.webp", alt: "Image 1" },
//   { image: "/images/h2.webp", alt: "Image 2" },
//   { image: "/images/h3.webp", alt: "Image 3" },
//   { image: "/images/h4.webp", alt: "Image 4" },
//   { image: "/images/h5.webp", alt: "Image 5" },
//   { image: "/images/h6.webp", alt: "Image 6" },
//   { image: "/images/h7.webp", alt: "Image 7" },
//   { image: "/images/h8.webp", alt: "Image 8" },
// ];

export default function IndelHistory({ historyImages, pageTitle, historyDesc, historyTitle }) {
  return (
    <section className="relative py-[30px] lg:py-[65px]">
      <div className="container">
        <h2 className="text-title2 mb-[5px] [&>span]:text-[#F30000] [&>span]:font-bold" dangerouslySetInnerHTML={{ __html: pageTitle }} />

        <div className="mb-[20px] lg:mb-[35px] 2xl:mb-[60px]">
          <PageBreadcrumb />
        </div>
        <div className="flex flex-wrap bg-white rounded-[15px] max-lg:shadow-[0_0_15px_rgba(0,0,0,0.15)] max-lg:p-[20px]">
          <div className="w-full lg:w-[350px] xl:w-[465px] 2xl:w-[535px] 3xl:w-[670px] max-lg:mb-[30px]">
            <div className="w-full h-auto lg:p-[25px] 2xl:p-[44px] lg:rounded-[25px] lg:shadow-[0_0_15px_rgba(0,0,0,0.15)] bg-white">
              <div className="text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] 3xl:text-[40px] text-black font-medium mb-[10px]">
                {historyTitle}
              </div>

              <div dangerouslySetInnerHTML={{ __html: historyDesc }} />
            </div>
          </div>
          <div className="w-full lg:w-[calc(100%-350px)] xl:w-[calc(100%-465px)] 2xl:w-[calc(100%-535px)] 3xl:w-[calc(100%-670px)] lg:pl-[40px]">
            <div className="itemsList columns-3 gap-4 xl:gap-7 3xl:gap-10">
              {historyImages?.map((img, index) => (
                <div
                  key={index}
                  className="item mb-[10px] lg:mb-[15px] xl:mb-[25px] 3xl:mb-[30px] break-inside-avoid overflow-hidden rounded-[15px] 3xl:rounded-[20px]"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img?.image}`}
                    width={500}
                    height={500}
                    alt={"Image"}
                    className="w-full h-full object-cover max-h-[320px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
