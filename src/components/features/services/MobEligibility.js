import Image from "next/image";


export default function () {
    const slides = [
        {
            icon: "/images/proIcon01.svg",
            alt: "proIcon-1",
            benefit: "TV",
        },
        {
            icon: "/images/proIcon02.svg",
            alt: "proIcon-1",
            benefit: "Refrigerator",
        },
        {
            icon: "/images/proIcon03.svg",
            alt: "proIcon-1",
            benefit: "Mobile Phones",
        },
        {
            icon: "/images/proIcon04.svg",
            alt: "proIcon-1",
            benefit: "AC",
        },
        {
            icon: "/images/proIcon05.svg",
            alt: "proIcon-1",
            benefit: "Washing Machine",
        },
        {
            icon: "/images/proIcon06.svg",
            alt: "proIcon-1",
            benefit: "Gas Top Stove",
        },
        {
            icon: "/images/proIcon07.svg",
            alt: "proIcon-1",
            benefit: "Sewing Machine",
        },
        {
            icon: "/images/proIcon08.svg",
            alt: "proIcon-1",
            benefit: "Mixer Grinders",
        },
    ];
    return (
        <div className="pt-[20px] pb-[40px]">
            <section className="w-full bg-[linear-gradient(156deg,_rgba(23,71,158,0.20)_6.47%,_rgba(198,59,59,0.20)_91.2%)] rounded-[28px] py-[25px] md:p-0">
                <div className="container">
                    <div className="w-full">
                        <div className="flex items-center mb-[10px]">
                            <div className="w-[30px] h-[30px] bg-[#EB0208] p-[2px] rounded-full border-3 2xl:border-5 border-white overflow-hidden">
                                <Image
                                    src={"/images/criteriaIcon.svg"}
                                    alt="lifeintelImg"
                                    width={735}
                                    height={390}
                                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                                />
                            </div>
                            <h2 className="text-[20px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[40px] font-normal text-[#141414] pl-[15px]">
                                Eligibility
                                <span className="text-base2 font-bold">&nbsp;Criteria</span>
                            </h2>
                        </div>
                        <ul className="w-full bg-[#FFF] rounded-[16px] overflow-hidden px-[20px] py-[15px]">
                            <li className="text-[12px] text-[#151515] relative pl-[30px] before:content-[''] before:absolute before:top-[7px] 2xl:before:top-[10px] before:left-0 before:w-[18px] before:h-[7px] before:bg-[url('/images/listIcon.svg')] before:bg-no-repeat before:bg-contain mb-[15px]">
                                Minimum age – 21 years
                            </li>
                            <li className="text-[13px] text-[#151515] relative pl-[30px] before:content-[''] before:absolute before:top-[7px] 2xl:before:top-[10px] before:left-0 before:w-[18px] before:h-[7px] before:bg-[url('/images/listIcon.svg')] before:bg-no-repeat before:bg-contain mb-[15px]" >Maximum age – 60 years</li>
                            <li className="text-[13px] text-[#151515] relative pl-[30px] before:content-[''] before:absolute before:top-[7px] 2xl:before:top-[10px] before:left-0 before:w-[18px] before:h-[7px] before:bg-[url('/images/listIcon.svg')] before:bg-no-repeat before:bg-contain mb-[15px]">Tenure – 6 months</li>
                            <li className="text-[13px] text-[#151515] relative pl-[30px] before:content-[''] before:absolute before:top-[7px] 2xl:before:top-[10px] before:left-0 before:w-[18px] before:h-[7px] before:bg-[url('/images/listIcon.svg')] before:bg-no-repeat before:bg-contain mb-[15px]">Customer type – IMPL customer</li>
                            <li className="text-[13px] text-[#323232] relative pl-[30px] before:content-[''] before:absolute before:top-[7px] 2xl:before:top-[10px] before:left-0 before:w-[18px] before:h-[7px] before:bg-[url('/images/listIcon.svg')] before:bg-no-repeat before:bg-contain">Security – Gold Ornament</li>
                        </ul>
                        <div className="text-sm1 font-medium w-full mt-[18px]">
                            With up to 100% financing and swift approval, enjoy a hassle-free process.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
function ProductCoveredBox({ item }) {
    return (
        <div className="w-wfull">
            <div className="flex items-center">
                <div className="group w-[25px] 3xl:w-[25px] h-[16px] 2xl:h-[20px] 3xl:h-[25px]">
                    <Image
                        src={item.icon}
                        alt={item.alt}
                        width={25}
                        height={25}
                        className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-[1.05]"
                    />
                </div>
                <div className="text-[13px] 2xl:text-[14px] 3xl:text-[17px] leading-[1.4] font-normal text-[#151515] xl:w-[calc(100%-25px)] pl-[10px] 2xl:pl-[15px]">
                    {item.benefit}
                </div>
            </div>
        </div>
    );
}
