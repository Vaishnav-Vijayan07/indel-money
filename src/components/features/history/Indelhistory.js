
import Image from "next/image";
import Link from "next/link";
import styles from "../history/History.module.css";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";

const historyImages = [
  { image: "/images/h1.webp", alt: "Image 1" },
  { image: "/images/h2.webp", alt: "Image 2" },
  { image: "/images/h3.webp", alt: "Image 3" },
  { image: "/images/h4.webp", alt: "Image 4" },
  { image: "/images/h5.webp", alt: "Image 5" },
  { image: "/images/h6.webp", alt: "Image 6" },
  { image: "/images/h7.webp", alt: "Image 7" },
  { image: "/images/h8.webp", alt: "Image 8" },
];

export default function Indelhistory() {
  return (
    <section className="relative py-[30px] lg:py-[65px]">
      <div className="container">
        <h2 className="text-title2 mb-[5px]">
          History of{" "}
          <span className="text-[#F30000] font-bold">Indel Money</span>
        </h2>
        <div className="mb-[20px] lg:mb-[35px] 2xl:mb-[60px]">
          <PageBreadcrumb />
        </div>
        <div className="flex flex-wrap bg-white rounded-[15px] max-lg:shadow-[0_0_15px_rgba(0,0,0,0.15)] max-lg:p-[20px]">
          <div className="w-full lg:w-[350px] xl:w-[465px] 2xl:w-[535px] 3xl:w-[670px] max-lg:mb-[30px]">
            <div className="w-full h-auto lg:p-[25px] 2xl:p-[44px] lg:rounded-[25px] lg:shadow-[0_0_15px_rgba(0,0,0,0.15)] bg-white">
              <div className="text-[20px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] 3xl:text-[40px] text-black font-medium mb-[10px]">
                Our History
              </div>
              <p>
                Indel Money is was founded by Mr.Palliyil Janardhanan Nair
                (1929- 2011), known as Peejay was one of the pilots in the first
                batch of then Bharat Airways which later became “The Indian
                Airlines”. After serving in the popular Tata Tea, Pee Jay moved
                into the Middle Eastern country, Kuwait in the early 70s where
                he joined Al Mulla Group as it’s commercial director. He played
                an integral key role for the growth of the “Al Mulla group” as
                one of the leading brands across the middle eastern countries.
                In the mid 80’s Pee Jay returned to India to start his
                entrepreneurial journey and established his financial services
                securing a license under the Kerala Money Lenders Act. His
                initial service location was Palakkad, a town in Kerala.
                Henceforth, the organization strived to achieve greater
                milestones and started its growth as a leading financial service
                provider in India. With a customer-centric approach to business,
                the group diversified into Automobile, Hospitality,
                Infrastructure Development, Media, Communication and
                Entertainment.
              </p>
              <br />
              <p>
                Today with multiple business faces and with a team of highly
                qualified professionals we continue to grow our business,
                serving millions of people across the region.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[calc(100%-350px)] xl:w-[calc(100%-465px)] 2xl:w-[calc(100%-535px)] 3xl:w-[calc(100%-670px)] lg:pl-[40px]">
            <div
              className={`columns-3 gap-4 xl:gap-7 3xl:gap-10 ${styles.itemsList}`}
            >
              {historyImages.map((img, index) => (
                <div
                  key={index}
                  className={`mb-[10px] lg:mb-[15px] xl:mb-[25px] 3xl:mb-[30px] break-inside-avoid overflow-hidden rounded-[15px] 3xl:rounded-[20px] ${styles.item}`}
                >
                  <Image
                    src={img.image}
                    width={500}
                    height={500}
                    alt={img.alt}
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
