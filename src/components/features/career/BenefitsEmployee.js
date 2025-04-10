import Image from "next/image";

const benefitsEmployee = [
    {
        src: "/images/benefitsEmployee-1.svg",
        alt: "benefitsEmployee",
        title: "Career Growth",
        description: "Indel offers ample opportunities for professional development and advancement.",
    },
    {
        src: "/images/benefitsEmployee-2.svg",
        alt: "benefitsEmployee",
        title: "Innovative Culture",
        description: "Be part of a dynamic and forward-thinking work environment.",
    },
    {
        src: "/images/benefitsEmployee-3.svg",
        alt: "benefitsEmployee",
        title: "Work-Life Balance",
        description: "Enjoy a healthy work-life balance with flexible work arrangements.",
    },
    {
        src: "/images/benefitsEmployee-4.svg",
        alt: "benefitsEmployee",
        title: "Employee Welfare",
        description: "Benefit from comprehensive employee welfare programs and initiatives.",
    },
    {
        src: "/images/benefitsEmployee-5.svg",
        alt: "benefitsEmployee",
        title: "Financial Rewards",
        description: "Receive competitive compensation packages and performance-based incentives.",
    },
    {
        src: "/images/benefitsEmployee-6.svg",
        alt: "benefitsEmployee",
        title: "Strong Leadership",
        description: "Learn from experienced leaders and mentors who inspire and guide.",
    }
];

export default function BenefitsEmployee() {
    return (
        <section className="w-full block py-[30px] lg:py-[40px] 2xl:py-[50px]">
            <div className="container">
                <div className="text-title1 font-medium capitalize flex items-center mb-[10px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[40px]">
                    <Image
                        src={"/images/icon-contact-tle.svg"}
                        alt="contact tle"
                        width={50}
                        height={50}
                        className="w-[30px] xl:w-[40px] 2xl:w-[50px] inline aspect-square mr-[10px] lg:mr-[15px] 2xl:mr-[20px]"
                    />
                    Benefits of being an
                    <span className="text-base2 font-bold">
                        &nbsp;indel employee
                    </span>
                </div>
                <div className="flex flex-wrap -mx-[5px] sm:-mx-[10px] lg:-mx-[15px] xl:-mx-[30px] 2xl:-mx-[40px]">
                    {benefitsEmployee?.map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 md:w-1/3 p-[5px_5px] sm:p-[5px_10px] lg:p-[5px_15px] xl:p-[10px_30px] 2xl:p-[15px_40px]"
                        >
                            <div
                                className={`
                                        ${index % 2 === 0 ? 'border-base1/20 hover:shadow-[0_4px_15px_0_rgba(23,71,71,0.20)]' : 'border-[#d6071e]/20 hover:shadow-[0_4px_15px_0_rgba(214,7,30,0.20)]'} 
                                        w-full h-full flex rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px] shadow-[0_4px_15px_0_rgba(0,0,0,0.15)] border overflow-hidden hover:-translate-y-[5px] transition-all duration-300
                                        `}
                            >
                                <div className={`
                                        ${index % 2 === 0 ? 'bg-base1' : 'bg-[#d6071e]'} 
                                        w-[50px] lg:w-[60px] xl:w-[80px] 2xl:w-[100px] 3xl:w-[120px] p-[20px_10px] lg:p-[30px_15px] 2xl:p-[40px_20px] flex items-center justify-center`}>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={70}
                                        height={70}
                                        className="aspect-square"
                                    />
                                </div>
                                <div className="w-[calc(100%-50px)] lg:w-[calc(100%-60px)] xl:w-[calc(100%-80px)] 2xl:w-[calc(100%-100px)] 3xl:w-[calc(100%-120px)] p-[15px_10px] lg:p-[30px_15px] 2xl:p-[40px_20px] flex flex-col justify-center">
                                    <div className="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] 3xl:text-[28px] font-medium leading-[1] text-[#161616] mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                                        {item.title}
                                    </div>
                                    <div className="text-sm1 text-[#161616] line-clamp-3">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
