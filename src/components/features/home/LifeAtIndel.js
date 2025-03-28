import Image from "next/image";
import Link from "next/link";
import LifeIndelSlider from "../../features/home/LifeIndelSlider";

const images = [
  {
    src: "/images/life-1.jpg",
    alt: "1",
  },
  {
    src: "/images/life-2.jpg",
    alt: "2",
  },
  {
    src: "/images/life-3.jpg",
    alt: "3",
  },
];
export default function LifeAtIndel() {
  return (
    <section className="w-full pt-[20px] pb-[20px] md:pt-[70px] md:pb-[70px] sm:pt-[30px] sm:pb-[30px] lg:pb-[60px]">
      <div className="container">
        <div className="flex flex-wrap items-center lg:-mx-[15px] xl:-mx-[20px] 3xl:-mx-[35px]">
          <div className="w-full mb-[15px] lg:mb-0 lg:w-1/2 lg:px-[15px] xl:px-[20px] 3xl:px-[35px]">
            <div className="flex flex-wrap">
              <div className="w-4/10">
                {images.slice(0, 2).map((item, index) => (
                  <ImageBox
                    key={index}
                    item={item} 
                    className="h-1/2"
                  />
                ))}
              </div>
              <div className="w-6/10">
                {images.slice(2).map((item, index) => (
                  <ImageBox
                    key={index}
                    item={item}
                    className="h-full"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:px-[15px] xl:px-[20px] 3xl:px-[35px]">
            <h2 className="text-title1">
              Life at
              <span className="text-base2 font-bold">&nbsp;Indel</span>
            </h2>
            <div className="text-sm-1 line-clamp-4 mb-[15px] xl:mb-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
            <LifeIndelSlider />
            <div className="flex flex-wrap gap-[10px] lg:gap-[15px] 3xl:gap-[20px]">
              <div>
                <Link
                  href="/"
                  className="btn btn-base2 min-w-[160px] lg:min-w-[180px] xl:min-w-[220px] 3xl:min-w-[280px]"
                >
                  TAKE ME TO CAREERS PAGE
                </Link>
              </div>
              <div>
                <Link
                  href="/"
                  className="btn btn-base2 min-w-[100px] lg:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[180px]"
                >
                  VISIT GALLERY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

function ImageBox({ item, className }) {
  return (
    <div
      className={`${className} w-full p-1 sm:p-2`}
    >
      <div
        className={`${className} group w-full h-full xl:rounded-[35px] md:rounded-[28px] rounded-[20px] overflow-hidden`}
      >
        <Image
          src={item.src}
          width={276}
          height={276}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-300  group-hover:scale-105"
        />
      </div>
    </div>
  )
}




