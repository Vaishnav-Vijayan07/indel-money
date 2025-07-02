import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    icon: "/images/icon-indel-1.png",
    title: "Indel Values",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    id: 2,
    icon: "/images/icon-indel-2.png",
    title: "Board of directors",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    id: 3,
    icon: "/images/icon-indel-3.png",
    title: "Management Team",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    id: 4,
    icon: "/images/icon-indel-4.png",
    title: "Partners",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    id: 5,
    icon: "/images/icon-indel-5.png",
    title: "Different shades of indel",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
  {
    id: 6,
    icon: "/images/icon-indel-6.png",
    title: "Our Approach to proposition",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority.",
  },
];
export default function IndelValuesInfo({ links }) {
  return (
    <section className="w-full 3xl:py-[90px] 2xl:py-[50px] py-[40px]">
      <div className="container">
        <div className="flex flex-wrap w-full ">
          {/* Loop  */}
          {links?.map((item) => (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 2xl:p-[15px] p-[10px]">
              <div className="w-full h-full bg-white rounded-[24px] overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.15)] flex flex-col justify-between">
                <div className="2xl:py-[30px] 2xl:px-[30px] py-[20px] px-[20px]">
                  <div className="xl:w-[40px] xl:h-[40px] w-[35px] h-[35px]  xl:mb-[20px] mb-[10px]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}`}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-[18px] 2xl:text-[25px] 3xl:text-[30px] font-medium 3xl:mb-[15px] mb-[10px] text-base1 leading-[1.2]">
                    {item.title}
                  </div>
                  <p className="max-w-[350px]">{item.description}</p>
                </div>
                <Link
                  href={item.button_link || "/"}
                  className="w-full 2xl:h-[70px] xl:h-[60px] h-[50px] relative text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-bold uppercase bg-[#B7D0FF] flex items-center justify-center transition-all hover:bg-base1 hover:text-white"
                >
                  <span className="relative before:absolute before:right-[-12px] before:top-1/2 before:-translate-y-1/2 before:rotate-135 before:border-l-[8px] before:border-b-[8px] before:border-l-[#EE3824] before:border-b-transparent before:content-['']">
                    {item.button_name}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
