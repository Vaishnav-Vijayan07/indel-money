import Image from "next/image";


export default function () {
    const slides = [
        {
            icon: "/images/ftrB-01.svg",
            alt: "value-1",
            benefit: "No Interest",
        },
    ];
    return (
        <section className="w-full bg-[#C0DBFF] pt-[30px] sm:pt-[30px] 2xl:pt-[50px]">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-[calc(100%-590px)]">
                        <div>
                            <h2 className="text-title1 mb-[25px]">
                                Products
                                <span className="text-base2 font-bold">&nbsp;Covered</span>
                            </h2>
                            <div className="relative z-1 flex flex-wrap -my-[5px] 2xl:-my-[8px] -mx-[10px] 2xl:-mx-[15px]">
                                {slides?.map((item, index) => (
                                    <div key={index} className="w-full py-[5px] 2xl:py-[8px] px-[10px] 2xl:px-[15px]">
                                        <ProductCoveredBox item={item} />
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                    <div className="w-[590px] pl:[75px] pb-[60px]">
                        <div className="flex items-center mb-[20px]">
                            <div className="w-[72px] h-[72px] bg-[#EB0208] p-[12px] rounded-full border-5 border-white overflow-hidden">
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
                        <ul className="w-full bg-[#ECF4FF] rounded-[24px] overflow-hidden px-[30px] py-[15px] mb-[35px]">
                            <li className="2xl:text-[20px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base1 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px] mb-[3px]" >Minimum age – 21 years</li>
                            <li className="2xl:text-[20px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base1 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px] mb-[3px]" >Maximum age – 60 years</li>
                            <li className="2xl:text-[20px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base1 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px] mb-[3px]">Tenure – 6 months</li>
                            <li className="2xl:text-[20px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base1 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px] mb-[3px]">Customer type – IMPL customer</li>
                            <li className="2xl:text-[20px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base1 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px]">Security – Gold Ornament</li>
                        </ul>
                        <div className="text-sm-1 font-medium max-w-[70%]">
                            With up to 100% financing and swift approval, enjoy a hassle-free process.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
function ProductCoveredBox({ item }) {
    return (
        <div className="w-wfull">
            <div className="flex items-center">
                <div className="group w-[16px]  :w-[25px] 3xl:w-[25px] h-[16px] 2xl:h-[20px] 3xl:h-[25px]">
                    <Image
                        src={item.icon}
                        alt={item.alt}
                        width={25}
                        height={25}
                        className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-[1.05]"
                    />
                </div>
                <div className="text-[11px] 2xl:text-[14px] 3xl:text-[17px] leading-[1.4] font-normal text-[#151515] xl:w-[calc(100%-16px)] 2xl:w-[calc(100%-20px)] 3xl:w-[calc(100%-25px)] pl-[10px] 2xl:pl-[15px]">
                    {item.benefit}
                </div>
            </div>
        </div>
    );
}


