import Image from "next/image";
import Link from "next/link";

export default function MsmePresence() {
    const slides = [
        {
            href: "/",
            image: "/images/presnc01.svg",
            alt: "presence-1",
            title: "Food processing",
        },
        {
            href: "/",
            image: "/images/presnc02.svg",
            alt: "presence-2",
            title: "Agricultural inputs",
        },
        {
            href: "/",
            image: "/images/presnc03.svg",
            alt: "presence-3",
            title: "Chemicals & pharmaceuticals",
        },
        {
            href: "/",
            image: "/images/presnc04.svg",
            alt: "presence-4",
            title: "Meat products",
        },
        {
            href: "/",
            image: "/images/presnc05.svg",
            alt: "presence-5",
            title: "Bioengineering",
        },
        {
            href: "/",
            image: "/images/presnc06.svg",
            alt: "presence-6",
            title: "Sports goods",
        },
        {
            href: "/",
            image: "/images/presnc0.svg",
            alt: "presence-7",
            title: "Plastics products",
        },
        {
            href: "/",
            image: "/images/presnc08.svg",
            alt: "presence-8",
            title: "Computer software, etc",
        },
        {
            href: "/",
            image: "/images/presnc09.svg",
            alt: "presence-9",
            title: "Electro-medical Equipment",
        },
        {
            href: "/",
            image: "/images/presnc010.svg",
            alt: "presence-10",
            title: "Textiles & Garments",
        },
        {
            href: "/",
            image: "/images/presnc011.svg",
            alt: "presence-11",
            title: "Leather & Leather goods",
        },
    ];

    return (
        <section className="w-full py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[90px] bg-[rgba(192,219,255,0.50)]">
            <div className="container">
                <div className="flex flex-wrap md:-mx-[15px] lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[30px]">
                    <div className="w-full lg:w-[45%] 2xl:w-[40%] md:px-[15px] pb-[30px] lg:pb-[0] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
                        <div className="w-full">
                            <h2 className="text-title1 mb-[20px] 2xl:mb-[30px]">
                                MSME Presence –  <br />
                                <span className="text-base2 font-bold">&nbsp;Driving the Economy</span>
                            </h2>
                            <div className="text-sm-1 w-full xl:w-[85%] 2xl:w-[82%]">
                                In India, the Micro, Small & Medium Enterprises (MSMEs) have been a major engine of economic growth, employment, and for promoting equitable development. The major advantage of this sector for India is its high employment potential at low capital cost and opportunities for growth. The labour intensity of the MSME sector is much higher than that of the large enterprises which are part of the organized sector. Helping MSMEs grow means that more and more labour is entered into the organized sector. <br />
                                MSMEs influence our economy in almost all the major sectors of the Indian industry such as:
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[55%] 2xl:w-[60%] md:px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
                        <div className="w-full flex flex-wrap -m-[10px] 2xl:-m-[15px] 3xl:-m-[20px]">
                            <PresenceBox slides={slides} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function PresenceBox({ slides }) {
    return (
        <>
            {slides.map((item, index) => (
                <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 h-fit flex flex-wrap justify-center p-[7px] 2xl:p-[15px] 3xl:p-[20px]">
                    <div className="w-[50px] 2xl:w-[65px] 3xl:w-[72px] h-[50px] 2xl:h-[65px] 3xl:h-[72px] bg-base2 border-4 border-[#93BFFA] rounded-full flex items-center justify-center overflow-hidden p-[7px] 2xl:p-[12px] mb-[10px] 2xl:mb-[20px]">
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={42}
                            height={42}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-center font-medium text-base1 capitalize w-full">
                        {item.title}
                    </div>
                </div>
            ))}
        </>
    );
}
