import Image from "next/image";

export default function SmartMoneyDeal() {
    const slides = [
        {
            icon: "/images/benefitIcon01.svg",
            alt: "value-1",
            benefit: "Instant processing",
        },
        {
            icon: "/images/benefitIcon02.svg",
            alt: "value-2",
            benefit: "Maximum value for your gold",
        },
        {
            icon: "/images/benefitIcon03.svg",
            alt: "value-3",
            benefit: "Easy documentation",
        },
        {
            icon: "/images/benefitIcon04.svg",
            alt: "value-4",
            benefit: "Part-payment and pre-payment options",
        },
        {
            icon: "/images/benefitIcon05.svg",
            alt: "value-5",
            benefit: "In-house gold evaluation",
        },
        {
            icon: "/images/benefitIcon06.svg",
            alt: "value-6",
            benefit: "Competitive interest rates",
        },
    ];

    return (
        <section className="relative z-1 w-full pt-[30px] xl:pt-[40px] 2xl:pt-[70px] 3xl:pt-[100px] pb-[30px] xl:pb-[40px] 2xl:pb-[90px]">
            <div className="container">
                <div className="flex flex-wrap mb-[25px] 2xl:mb-[30px]">
                    <div className="w-full md:w-[45%] xl:w-[40%]">
                        <h2 className="text-title1">
                            Smart
                            <span className="text-base2 font-bold">&nbsp;Money deals</span>
                        </h2>
                    </div>
                    <div className="w-full md:w-[55%] xl:w-[60%] md:pl-[30px]">
                        <p className="text-sm-1">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                </div>

                <div className="w-full bg-[#CAE5F4] flex flex-wrap rounded-[36px] overflow-hidden">
                    <div className="w-[calc(100%-445px)] 2xl:w-[calc(100%-700px)] p-[35px] 2xl:p-[45px]">
                        <div className="font-bold leading-none text-base1 text-[20px] md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[40px] mb-[15px]">
                            GOLD LOAN
                        </div>
                        <p className="text-sm-1">
                            Indel Money is a leading and trusted provider via years of dedicated service in the gold loan industry. We have become a household name synonymous with gold loaning for our low interest rates, easy documentation, instant processing and various tailor-made loan options that fit your requirement.
                        </p>
                        <div className="w-full rounded-[36px] overflow-hidden mt-[25px]">
                            <div className="relative w-full bg-[#DCEAFB] px-[25px] 2xl:px-[35px] py-[20px] 2xl:py-[30px]">
                                <div className="absolute z-0 left-0 top-0 w-[45%] h-full pointer-events-none">
                                    <Image
                                        src="/images/beneClip.png"
                                        alt="benefit-clip"
                                        width={408}
                                        height={475}
                                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]" />
                                </div>
                                <div className="absolute z-0 right-0 top-0 w-[45%] h-full pointer-events-none">
                                    <Image
                                        src="/images/benefitClipR.png"
                                        alt="benefit-clip"
                                        width={408}
                                        height={475}
                                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]" />
                                </div>
                                <div className="relative z-1 text-base2 text-[14px] lg:text-[14px] 2xl:text-[18px] 3xl:text-[20px] font-bold leading-normal uppercase mb-[10px]">BENEFITS</div>
                                <div className="relative z-1 flex flex-wrap -my-[5px] 2xl:-my-[8px] -mx-[10px] 2xl:-mx-[15px]">
                                    {slides?.map((item, index) => (
                                        <div key={index} className="w-1/2 py-[5px] 2xl:py-[8px] px-[10px] 2xl:px-[15px]">
                                            <ValueBox item={item} />
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group w-[445px] 2xl:w-[700px] overflow-hidden">
                        <Image
                            src="/images/deal01.jpg"
                            alt="money-deal"
                            width={700}
                            height={475}
                            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
function ValueBox({ item }) {
    return (
        <div className="w-wfull">
            <div className="flex items-center">
                <div className="group w-[20px] 2xl:w-[25px] h-[20px] 2xl:h-[25px]">
                    <Image
                        src={item.icon}
                        alt={item.alt}
                        width={25}
                        height={25}
                        className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-[1.05]"
                    />
                </div>
                <div className="text-[11px] 2xl:text-[14px] 3xl:text-[18px] leading-[1.4] font-normal text-black w-[calc(100%-20px)] 2xl:w-[calc(100%-25px)] pl-[15px]">
                    {item.benefit}
                </div>
            </div>
        </div>
    );
}


