import Image from "next/image";
import Link from "next/link";

export default function OtherGoldLoan() {
    const slides = [
        {
            image: "/images/OthrLoan01.jpg",
            alt: "loan-1",
            title: "MSME LOAN",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa neque. Aliquam mi dui, ultricies vitae vehicula at, feugiat et ipsum. Nunc vel ante id neque ultricies rutrum.",
        },
        {
            image: "/images/OthrLoan02.jpg",
            alt: "loan-2",
            title: "CONSUMER DURABLE  LOAN",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa neque. Aliquam mi dui, ultricies vitae vehicula at, feugiat et ipsum. Nunc vel ante id neque ultricies rutrum.",
        },
        {
            image: "/images/OthrLoan03.jpg",
            alt: "loan-3",
            title: "LOAN AGAINST PROPERTY",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa neque. Aliquam mi dui, ultricies vitae vehicula at, feugiat et ipsum. Nunc vel ante id neque ultricies rutrum.",
        },
        {
            image: "/images/OthrLoan04.jpg",
            alt: "loan-4",
            title: "FOREIGN EXCHANGE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at massa neque. Aliquam mi dui, ultricies vitae vehicula at, feugiat et ipsum. Nunc vel ante id neque ultricies rutrum.",
        },
    ];

    return (
        <section className="relative z-1 w-full pb-[40px] xl:pb-[40px] 2xl:pb-[90px]">
            <div className="container">
                <div className="relative z-1 flex flex-wrap -my-[25px] -mx-[10px] lg:-mx-[15px] 2xl:-mx-[20px] 3xl:-mx-[30px]">
                    {slides?.map((item, index) => (
                        <div key={index} className="w-full md:w-1/2 py-[15px] 2xl:py-[25px] px-[10px] lg:px-[15px] 2xl:px-[20px] 3xl:px-[30px]">
                            <ServiceCard item={item} />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

function ServiceCard({ item }) {
    return (
        <div className="group w-full h-full flex gap-[10px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px]">
            <Link href="/" className="group w-[160px] lg:w-[200px] xl:w-[255px] 3xl:w-[400px] overflow-hidden rounded-[20px]">
                <Image
                    src={item?.image}
                    width={400}
                    height={275}
                    alt={item?.alt}
                    className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-105"
                />
            </Link>
            <div className="flex flex-wrap content-between w-[calc(100%-160px)] lg:w-[calc(100%-200px)] xl:w-[calc(100%-255px)] 3xl:w-[calc(100%-400px)] py-1 3xl:py-2">
                <div className="w-full">
                    <div className="text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] leading-[1.3] text-base1 font-medium line-clamp-2 mb-1 3xl:mb-3">
                        {item?.title}
                    </div>
                    <div className="text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.3] text-[#2d2d2d] font-normal line-clamp-5">
                        {item?.description}
                    </div>
                </div>
                {/* LEARN MORE Link */}
                <div>
                    <Link href="/" className="text-[10px] lg:text-[11px] 2xl:text-[14px] 3xl:text-[16px] font-normal flex items-center mt-2 2xl:mt-3 hover:text-base2 transition-color duration-300">
                        LEARN MORE
                        <Image
                            src="/images/icon-right.svg"
                            width={7}
                            height={13}
                            alt="right"
                            className="ml-1 lg:ml-2"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}


