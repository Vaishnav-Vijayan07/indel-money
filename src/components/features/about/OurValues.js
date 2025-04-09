import Image from "next/image";

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
        <section className="w-full pt-[30px] xl:pt-[60px] 2xl:pt-[100px] pb-[25px] lg:pb-[40px] 2xl:pb-[70px]">
            <div className="container">
                <div className="flex flex-wrap -my-[15px] xl:-my-[20px] 2xl:-my-[30px] -mx-[10px] xl:-mx-[15px] 2xl:-mx-[20px]">
                    {slides?.map((item, index) => (
                        <div key={index} className="w-full sm:w-2/4 lg:w-1/3 py-[15px] xl:py-[20px] 2xl:py-[30px] px-[10px] xl:px-[15px] 2xl:px-[20px]">
                            <ValueBox item={item} />
                        </div>
                    ))}
                    <div className="w-2/4 lg:w-1/3 py-[15px] xl:py-[20px] 2xl:py-[30px] px-[10px] xl:px-[15px] 2xl:px-[20px]">
                        <div className="group w-full h-full relative z-0">
                            <Image
                                src="/images/valueLogo.png"
                                alt="indel-valueLogo"
                                fill
                                style={{ objectFit: "contain" }}
                                className="transition-transform duration-300 group-hover:scale-105"
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
        <div className="w-full h-full relative overflow-hidden bg-white shadow-[0_0_28px_rgba(0,0,0,0.10)] p-[20px] xl:p-[30px] 2xl:p-[40px] rounded-[20px] transition-transform duration-600 hover:transform hover:translate-y-2 2xl:hover:translate-y-4">
            <div className="w-[120px] xl:w-[145px] 2xl:w-[190px] 3xl:w-[240px] h-[120px] xl:h-[145px] 2xl:h-[190px] 3xl:h-[240px] rotate-[65deg] 2xl:rotate-[150deg] rounded-full absolute left-[-8%] xl:left-[-5%] 2xl:left-[-10%] top-[-11%] 2xl:top-[-15%] sm:bg-gradient-to-b sm:from-[rgba(23,71,158,0.07)] sm:via-[rgba(23,71,158,0.14)] sm:to-[rgba(238,56,36,0.65)]"></div>
            <div className="group w-[74px] sm:w-[40px] xl:w-[50px] 3xl:w-[75px] h-[74px] sm:h-[40px] xl:h-[45px] 3xl:h-[65px] rounded-full p-[20px] sm:p-0 sm:rounded-0 mb-[12px] sm:mb-[45px] xl:mb-[65px] 2xl:mb-[80px] 3xl:mb-[90px] sm:rounded-0 sm:bg-none bg-gradient-to-b from-[rgba(23,71,158,0.07)] via-[rgba(23,71,158,0.14)] to-[rgba(238,56,36,0.35)]">
                <Image
                    src={item.image}
                    alt={item.alt}
                    width={72}
                    height={65}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                />
            </div>
            <div className="text-black font-medium 2xl:font-normal leading-[1.1] text-[20px] sm:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] mb-[20px] xl:min-h-[40px] 2xl:min-h-[50px] 3xl:min-h-[60px]">
                {item.title}
            </div>
            <div className="text-sm-1 text-black ">
                {item.description}
            </div>
        </div>
    );
}
