
import Image from "next/image";
import Link from "next/link"

export default function MobBlogListCard({ item, className }) {
    return (
        <Link href={item?.href} className={`${className ? className : ""} group w-full h-full flex gap-[10px] bg-white rounded-[10px] overflow-hidden`}>
            <div className="group w-[135px] 3xs:w-[165px] overflow-hidden rounded-[10px] relative z-0">
                <Image
                    src={item?.image}
                    alt={item?.alt}
                    fill
                    sizes="320px"
                    className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
                />
            </div>
            <div className="w-[calc(100%-135px)] 3xs:w-[calc(100%-165px)] py-1">
                {item?.date &&
                    <div className="text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#505050] line-clamp-1 mb-0.5 3xl:mb-1 transition-transform duration-300 group-hover:text-base2">{item?.date}</div>
                }
                <div className="text-[13px] leading-[1.3] text-black font-bold line-clamp-3 mb-1 3xl:mb-3">
                    {item?.title}
                </div>
                <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.3] text-[#2d2d2d] font-normal line-clamp-2 sm:line-clamp-3">
                    {item?.discription}
                </div>
                {item?.year &&
                    <div className="text-[12px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-medium text-[#2d2d2d] line-clamp-1 mt-[10px] lg:mt-[10px] 2xl:mt-[20px]">
                        Award Year:
                        <span className="text-[#eb0208] font-bold">&nbsp;{item?.year}</span>
                    </div>
                }
            </div>
        </Link>
    )
}
