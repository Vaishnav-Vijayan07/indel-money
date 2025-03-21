import Image from "next/image";

export default function FeatureBenefit() {
    const slides = [
        {
            icon: "/images/ftrB-01.svg",
            alt: "value-1",
            benefit: "No Interest",
        },
        {
            icon: "/images/ftrB-02.svg",
            alt: "value-2",
            benefit: "Up to 100% finance",
        },
        {
            icon: "/images/ftrB-03.svg",
            alt: "value-3",
            benefit: "No down-payment",
        },
        {
            icon: "/images/ftrB-04.svg",
            alt: "value-4",
            benefit: "A wide range of consumer products covered",
        },
        {
            icon: "/images/ftrB-05.svg",
            alt: "value-5",
            benefit: "No processing fee",
        },
        {
            icon: "/images/ftrB-06.svg",
            alt: "value-6",
            benefit: "Many products can be purchased with one loan",
        },
        {
            icon: "/images/ftrB-07.svg",
            alt: "value-6",
            benefit: "No cost EMI & with flexibile repayment modes",
        },
        {
            icon: "/images/ftrB-08.svg",
            alt: "value-6",
            benefit: "Complete transparency",
        },
        {
            icon: "/images/ftrB-09.svg",
            alt: "value-6",
            benefit: "No pre-closure charges",
        },
        {
            icon: "/images/ftrB-010.svg",
            alt: "value-6",
            benefit: "Multiple payment options & schedules",
        },
        {
            icon: "/images/ftrB-011.svg",
            alt: "value-6",
            benefit: "Easy documentation",
        },
    ];
    return (
        <section className="w-full bg-gradient-to-r from-[rgba(243,0,0,0.00)] via-transparent to-[rgba(235,2,8,0.10)] py-[20px] lg:py-0">
            <div className="max-w-[var(--container-x)] lg:max-w-[calc(100%-(100%-var(--container-x))/2)] mx-auto lg:ml-[0] px-[var(--container-padding,1rem)] lg:pl-[0]">

                <div className="w-full flex flex-wrap flex-col-reverse lg:flex-row">
                    <div className="group h-full lg:h-auto w-full lg:w-[400px] xl:w-[470px] 2xl:w-[690px] overflow-hidden rounded-[36px] lg:rounded-tl-none lg:rounded-bl-none">
                        <Image
                            src="/images/ftrBeneft.jpg"
                            alt="money-deal"
                            width={690}
                            height={585}
                            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]" />
                    </div>
                    <div className="flex flex-wrap content-between w-full lg:w-[calc(100%-400px)] xl:w-[calc(100%-470px)] 2xl:w-[calc(100%-690px)] lg:p-[25px] xl:p-[30px] 2xl:p-[40px] 3xl:p-[55px]">
                        <div className="w-full pb-[20px] lg:pb-[0]">
                            <h2 className="text-title1">
                                Features and
                                <span className="text-base2 font-bold">&nbsp;Benefits</span>
                            </h2>
                            <div className="w-full rounded-[36px] overflow-hidden mt-[15px] xl:mt-[25px]">
                                <div className="relative w-full bg-[#DCEAFB] p-[25px] xl:p-[40px] 2xl:p-[50px]">
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
                                    <div className="relative z-1 flex flex-wrap -my-[5px] 2xl:-my-[8px] -mx-[10px] 2xl:-mx-[15px]">
                                        {slides?.map((item, index) => (
                                            <div key={index} className="w-1/2 py-[5px] 2xl:py-[8px] px-[10px] 2xl:px-[15px]">
                                                <FeatureBenefitBox item={item} />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
function FeatureBenefitBox({ item }) {
    return (
        <div className="w-wfull">
            <div className="flex items-center">
                <div className="group w-[16px] 2xl:w-[25px] 3xl:w-[25px] h-[16px] 2xl:h-[20px] 3xl:h-[25px]">
                    <Image
                        src={item.icon}
                        alt={item.alt}
                        width={25}
                        height={25}
                        className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-[1.05]"
                    />
                </div>
                <div className="text-[11px] 2xl:text-[14px] 3xl:text-[17px] leading-[1.4] font-normal text-black xl:w-[calc(100%-16px)] 2xl:w-[calc(100%-20px)] 3xl:w-[calc(100%-25px)] pl-[10px] 2xl:pl-[15px]">
                    {item.benefit}
                </div>
            </div>
        </div>
    );
} 