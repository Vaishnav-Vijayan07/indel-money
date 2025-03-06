
import Image from "next/image";
import Link from "next/link";
import LatestUpdatesSlide from "@/components/common/LatestUpdatesSlide";



export default function LatestUpdates() {

  const slides = [
    {
      href: "/",
      image: "/images/news-1.jpg",
      alt: "news-1",
      date: "24 SEPTEMBER 2024:",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
      discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
      href: "/",
      image: "/images/news-2.jpg",
      alt: "news-1",
      date: "24 SEPTEMBER 2024:",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
      discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
      href: "/",
      image: "/images/news-3.jpg",
      alt: "news-1",
      date: "24 SEPTEMBER 2024:",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
      discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
      href: "/",
      image: "/images/news-4.jpg",
      alt: "news-1",
      date: "24 SEPTEMBER 2024:",
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
      discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
  ];
  
  return (
    <section className="w-full block">
      <div className="container">
        <div className="flex bg-[#cae5f4] rounded-[30px] overflow-hidden">
          <div className="w-1/2 p-8">
            <div className="flex justify-between items-center gap-2 mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
              <h3 className="text-sm sm:text-lg md:text-xl xl:text-4xl 2xl:text-5xl text-black font-medium">Latest Updates</h3>
              <Link href="/" className="text-sm font-bold flex items-center">
                VIEW ALL
                <Image
                  src="/images/icon-right.svg"
                  width={7}
                  height={13}
                  alt="right"
                  className="ml-1"
                />
              </Link>
            </div>
            <LatestUpdatesSlide slides={slides.slice(1)} />
          </div>
          <div className="w-1/2">
            {/* Show only the first object */}
            {slides.slice(0, 1).map((item, index) => (
              <div key={index} className="group w-full h-full overflow-hidden block relative z-0">
                <Image
                  src={item?.image}
                  width={768}
                  height={840}
                  alt={item?.alt}
                  className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
                />
                <div className="w-full h-auto absolute inset-0 top-auto p-[15px] lg:p-[20px] xl:p-[30px] 2xl:p-[50px] bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-sm 2xl:text-lg text-white line-clamp-1 mb-2 2xl:mb-4">
                    {item?.date}
                  </div>
                  <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl text-white font-medium line-clamp-2 mb-4 2xl:mb-6">
                    {item?.title}
                  </div>
                  <Link href={item?.href} className="text-sm font-bold text-white hover:text-base2 transition-color duration-300 uppercase flex items-center">
                    Read More
                    <Image
                      src="/images/icon-news1.svg"
                      width={20}
                      height={20}
                      alt="news1"
                      className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


