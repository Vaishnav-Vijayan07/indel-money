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
                <div className="text-title1 capitalize flex items-center mb-[10px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[40px]">
                    <Image
                        src={"/images/icon-contact-tle.svg"}
                        alt="contact tle"
                        width={50}
                        height={50}
                        className="inline mr-[10px] lg:mr-[15px] 2xl:mr-[20px]"
                    />
                    Benefits of being an
                    <span className="text-base2 font-bold">
                        &nbsp;indel employee
                    </span>
                </div>
                <div className="flex flex-wrap -mx-[15px] lg:-mx-[20px] 2xl:-mx-[40px]">
                    <div className="flex flex-wrap">
                        {benefitsEmployee?.map((item, index) => (
                            <div
                                key={index}
                                className="w-1/3 p-[10px_15px] lg:p-[15px_20px] 2xl:p-[15px_40px]"
                            >
                                <div
                                    className={`
                                        ${index % 2 === 0 ? 'border-base1/10' : 'border-[#d6071e]/10'} 
                                        w-full h-full flex rounded-[15px] lg:rounded-[20px] 2xl:rounded-[24px] shadow-[0_4px_15px_0_rgba(0,0,0,0.15)] border overflow-hidden
                                        `}
                                >
                                    <div className={`
                                        ${index % 2 === 0 ? 'bg-base1' : 'bg-[#d6071e]'} 
                                        w-[80px] lg:w-[100px] 2xl:w-[120px] p-[20px_10px] lg:p-[30px_15px] 2xl:p-[40px_20px] flex items-center justify-center`}>
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="w-[calc(100%-80px)] lg:w-[calc(100%-100px)] 2xl:w-[calc(100%-120px)] p-[20px_10px] lg:p-[30px_15px] 2xl:p-[40px_20px] flex flex-col justify-center">
                                        <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] font-medium leading-[1] text-[#161616] mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
                                            {item.title}
                                        </div>
                                        <div className="text-sm-1 text-[#161616] line-clamp-3">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
