import Link from "next/link";
import Image from "next/image";
import BlogCard from "@/components/common/BlogCard";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import IndelMoneyCarsGallery from "@/components/features/indel-money-cares/IndelMoneyCarsGallery";

const events = [
    {
        href: "/",
        image: "/images/care-events-1.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus  ",
    },
    {
        href: "/",
        image: "/images/care-events-2.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus ",
    },
    {
        href: "/",
        image: "/images/care-events-3.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus ",
    },
];

export default function IndelMoneyCars() {
    return (
        <>
            <section className="w-full block py-[20px] lg:py-[30px] 2xl:py-[50px]">
                <div className="container">
                    <div className="w-full mb-[20px] lg:mb-[15px] 2xl:mb-[50px]">
                        <div className="2xl:text-[68px] font-bold text-base2">Indel<span className="font-normal text-black">Money Cares</span></div>
                        <PageBreadcrumb />
                    </div>
                </div>
            </section>
            <section className="pb-[50px]">
                <IndelMoneyCarsGallery />
            </section>
            <section className="w-full block 2xl:p-[80px_0_70px] lg:p-[40px_0_50px] sm:p-[30px_0_40px] relative z-0 before:content-[''] before:absolute before:top-0 before:left-0 before:block before:w-full before:h-[80%] before:bg-gradient-to-r before:from-[rgba(243,0,0,0.00)] before:to-[rgba(235,2,8,0.10)] before:pointer-events-none">
                <div className="container">
                    <h2 className="text-title1 2xl:mb-[40px] xl:mb-[30px] sm:mb-[20px]">
                        <span className="text-base2 font-bold">Indel&nbsp;</span>
                        Care Events
                    </h2>
                    <div className="flex flex-wrap">
                        <div className="md:w-1/2 2xl:pr-[50px] md:pr-[30px] sm:mb-[20px]">
                            {events?.slice(0, 1).map((item, index) => (
                                <div key={index} className="w-full">
                                    <Link
                                        href={item?.href}
                                        className="group w-full h-full flex gap-[10px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px]"
                                    >
                                        <div className="w-[170px] lg:w-[240px] xl:w-[320px] 3xl:w-[510px] overflow-hidden rounded-[20px] relative z-0">
                                            <Image
                                                src={item?.image}
                                                fill
                                                alt={item?.alt}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="3xl:w-[calc(100%-510px)] xl:w-[calc(100%-320px)] lg:w-[calc(100%-240px)] w-[calc(100%-170px)]">
                                            {item?.date && (
                                                <div className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#505050] line-clamp-1 mb-0.5 3xl:mb-1 group-hover:text-base2 transition-colors duration-300">
                                                    {item?.date}
                                                </div>
                                            )}
                                            <div className="text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-[1.3] text-black font-bold line-clamp-3 mb-1 3xl:mb-3">
                                                {item?.title}
                                            </div>
                                            <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.3] text-[#2d2d2d] font-normal line-clamp-12">
                                                {item?.description || item?.discription}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="md:w-1/2">
                            {events.slice(1, 3).map((item, index) => (
                                <div key={index} className="w-full 3xl:mb-[60px] xl:mb-[30px] md:mb-[20px] sm:mb-[15px] last:mb-0">
                                    <BlogCard item={item} className="!p-0" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
