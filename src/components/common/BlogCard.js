
import Image from "next/image";
import Link from "next/link"

export default function BlogCard({ item, className }) {
    return (
        <Link href={item?.href} className={`${className} group w-full h-full flex py-[5px] xl:py-[10px] 3xl:py-[15px] gap[10px] xl:gap-[15px] 2xl:gap-[25px] 3xl:gap-[30px]`}>
            <div className="group w-[276px] 3xl:w-[320px] overflow-hidden rounded-[20px] aspect-3/2">
                <Image
                    src={item?.image}
                    width={320}
                    height={220}
                    alt={item?.alt}
                    className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
                />
            </div>
            <div className="w-[calc(100%-276px)] 3xl:w-[calc(100%-320px)] py-2">
                <div className="text-sm 3xl:text-[16px] text-[#505050] line-clamp-1 mb-0.5 3xl:mb-1 transition-transform duration-300 group-hover:text-base2">{item?.date}</div>
                <div className="text-{12px} lg:text-sm xl:text-lg 3xl:text-xl leading-[1.3] text-black font-bold line-clamp-2 mb-1 3xl:mb-3">
                    {item?.title}
                </div>
                <div className="text-[12px] xl:text-sm 3xl:text-[16px] leading-[1.3] text-[#2d2d2d] font-normal line-clamp-4">
                    {item?.discription}
                </div>
            </div>
        </Link>
    )
}
