
import Image from "next/image";
import Link from "next/link";

export default function LatestUpdatesCard() {
    return (
        <div className="group w-full h-full flex">
            <div className="w-[276px] 2xl:w-[320px] overflow-hidden rounded-[20px]">
                <Image
                    src="/images/news-1.jpg"
                    width={768}
                    height={840}
                    alt="news"
                    className="w-full h-full transition object-cover group-hover:scale-105"
                />
            </div>
            <div className="w-[calc(100%-276px] 2xl:w-[calc(100%-320px] h-auto p-[10px] lg:p-[15px] xl:p-[20px] 2xl:p-[20px]">
                <div className="text-sm 2xl:text-[16px] text-[#505050] line-clamp-1 mb-0.5 2xl:mb-1">24 SEPTEMBER 2024</div>
                <div className="text-sm sm:text-[16px] xl:text-lg 2xl:text-xl text-black font-bold line-clamp-2 mb-4 2xl:mb-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting
                </div>
                <Link href="/" className="group text-sm font-bold text-white uppercase flex items-center">
                    Read More
                    <Image
                        src="/images/icon-news1.svg"
                        width={20}
                        height={20}
                        alt="news1"
                        className="ml-1 transition group-hover:scale-105"
                    />
                </Link>
            </div>
        </div>
    )
}
