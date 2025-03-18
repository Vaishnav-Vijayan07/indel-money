import Image from "next/image";
import Link from "next/link";

export default function OurValues() {
    const slides = [
        {
            image: "/images/value01.png",
            alt: "value-1",
            title: "Performing in order to surpass excellence",
            description: "We at Indel Money believe that achieving excellence is just a milestone in the journey to destiny. We trust in striving for more than excellence in each and every endeavor we undertake.",
        },
        {
            image: "/images/value02.png",
            alt: "value-2",
            title: "'Customer' is regarded as Our King and 'Service', Our Queen",
            description: `At Indel Money, our customers are the central focus of everything we do. We follow the golden principle of "Customer First," always putting ourselves in their shoes. By continuously rethinking and innovating our products, services, and capabilities, we strive to exceed customer expectations and deliver true delight.`,
        },
        {
            image: "/images/value03.png",
            alt: "value-3",
            title: "Building trust and transparency",
            description: `At Indel Money, our customers are the central focus of everything we do. We follow the golden principle of "Customer First," always putting ourselves in their shoes. By continuously rethinking and innovating our products, services, and capabilities, we strive to exceed customer expectations and deliver true delight.`,
        },
        {
            image: "/images/value04.png",
            alt: "value-4",
            title: "Becoming a Preferred Employer",
            description: "We strive to be the industry’s most preferred employer by fostering an employee-friendly culture where individuals feel valued and empowered. Our environment attracts top talent, encourages growth, and drives innovation, all backed by strong management support.",
        },
        {
            image: "/images/value05.png",
            alt: "value-5",
            title: "Committed to the betterment of society",
            description: "We strive to be the industry’s most preferred employer by fostering an employee-friendly culture where individuals feel valued and empowered. Our environment attracts top talent, encourages growth, and drives innovation, all backed by strong management support.",
        },
    ];

    return (
        <section className="w-full py-[30px]">
            <div className="container">
                <h2 className="text-title1 mb-[15px] 2xl:mb-[20px]">
                    Our
                    <span className="text-base2 font-bold">&nbsp;Values</span>

                </h2>
                <div className="flex flex-wrap -my-[30px] -mx-[20px]">
                    {slides.map((item, index) => (
                        <div key={index} className="w-1/3 py-[30px] px-[20px]">
                            <ValueBox item={item} />
                        </div>
                    ))}
                    <div className="w-1/3 py-[30px] px-[20px]">
                        <div className="w-full h-full">
                            <Image
                                src="/images/valueLogo.png"
                                alt="indel-valueLogo"
                                width={72}
                                height={65}
                                className="relative w-full h-full object-contain  transition-transform duration-600 group-hover:scale-[1.05]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export function ValueBox({ item }) {
    return (
        <div className="w-full h-full relative overflow-hidden bg-white shadow-[0px_0px_28.45px_rgba(0,0,0,0.10)] p-[40px] rounded-[20px]">
            <div className="w-[240px] h-[240px] rotate-[150deg] rounded-full absolute left-[-10%] top-[-15%] bg-gradient-to-b from-[rgba(23,71,158,0.07)] via-[rgba(23,71,158,0.14)] to-[rgba(238,56,36,0.35)]">
            </div>
            <div className="w-[75px] h-[65px] mb-[90px]">
                <Image
                    src={item.image}
                    alt={item.alt}
                    width={72}
                    height={65}
                    className="relative w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                />
            </div>
            <div className="text-[28px] text-black font-400 leading-[1.1] mb-[20px] min-h-[60px]">
                {item.title}
            </div>
            <div className="text-black text-sm-1">
                {item.description}
            </div>
        </div>
    );
}
