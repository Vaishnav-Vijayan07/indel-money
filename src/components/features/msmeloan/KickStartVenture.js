import Image from "next/image";
import Link from "next/link";

export default function KickStartVenture() {
    return (
        <div>
            <section className="w-full py-[20px] md:py-[20px] xl:pt-[30px] 2xl:py-[50px] 3xl:py-[70px]">
                <div className="container">
                    <div className="flex flex-wrap lg:-mx-[40px]">
                        <div className="w-full lg:w-5/10 lg:px-[40px] relative before:content-[''] before:hidden lg:before:block before:absolute before:h-full before:w-[1px] before:top-[0] before:right-0 before:bg-[rgba(22,69,156,0.26)] before:opacity-25">
                            <h2 className="text-title1 mb-[15px] 2xl:mb-[20px] font-medium 2xl:font-normal">
                                Kickstart your new venture <br></br>
                                with our
                                <span className="text-base2 font-bold">&nbsp;MSME loan</span>
                            </h2>
                            <div className="w-full xl:w-[85%] 2xl:w-[100%]">
                                <div className="text-[14px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] sm:mb-[15px] xl:mb-[20px] text-[#1E1E1E] font-medium 2xl:font-normal leading-normal">
                                    Our MSME loans are bespoke for aspiring and upcoming entrepreneurs.
                                </div>
                                <div className="text-sm1 mb-[15px] xl:mb-[20px] sm:block hidden">
                                    We are delighted to offer our premium services to Micro, Small, and Medium Enterprises (MSMEs) as well as aspiring entrepreneurs. Our tailored financial packages are designed to meet the specific needs of your business, ensuring that you receive the support necessary to help you grow and succeed. Whether you are looking for working capital to manage day-to-day operations, financing for the purchase of fixed assets to expand your capabilities, or a combination of both, we have the perfect solutions to match your goals. Our expert team will work closely with you to understand your unique challenges and provide personalized assistance that fosters your business's growth, stability, and long-term success. Let us be your trusted partner in turning your entrepreneurial vision into a reality.
                                </div>
                                <Link
                                    href="/"
                                    className="btn btn-base2 w-fit min-w-[90px] lg:min-w-[110px] xl:min-w-[120px] 3xl:min-w-[180px] sm:flex hidden"
                                >
                                    GET A CALL
                                </Link>
                            </div>
                        </div>
                        {/* only in Desktop view ie;above 640px */}
                        <div className="w-full lg:w-5/10 lg:px-[40px] sm:p-0 p-[25px] sm:pt-[30px] lg:pt-0 sm:block hidden">
                            <div className="text-base1 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[40px] font-medium 2xl:font-normal leading-normal lg:pl-[30px]">
                                Our Offerings
                            </div>
                            <div className="text-sm1 mb-[15px] xl:mb-[20px] max-w-[90%] lg:pl-[30px]">
                                To be with you at the cornerstone of development of MSME segment, we extend
                                our product offerings to fulfil your needs:
                            </div>
                            <div className="flex flex-wrap justify-center -m-[5px] 2xl:-m-[7.5px] sm:px-0 px-[15px] sm:py-0 py-[20px]">
                                <div className="w-full sm:w-[45%] xl:w-[40%] 2xl:w-1/3 p-[5px] 2xl:p-[7.5px] sm:pl-[30px]">
                                    <div className="rounded-[10px] bg-white sm:shadow-[0px_0px_50px_rgba(0,0,0,0.10)] flex flex-wrap sm:flex-col items-center sm:px-[10px] xl:px-[15px]  2xl:px-[20px] sm:py-[15px] xl:py-[20px]  2xl:py-[30px]">
                                        <div className="w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[45px] h-[25px] xl:h-[30px] 2xl:h-[40px] 3xl:h-[45px] sm:mr-auto">
                                            <Image
                                                src="/images/offr-01.svg"
                                                alt="lifeintelImg"
                                                width={45}
                                                height={45}
                                                className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-105" />
                                        </div>
                                        <div className="text-sm1 text-[#151515] font-medium 2xl:font-normal sm:pt-[10px] 2xl:pt-[15px] sm:w-full w-[calc(100%-25px)] sm:pl-0 pl-[10px]">
                                            For CAPEX / working capital expenses
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-[55%] xl:w-[60%] 2xl:w-2/3 p-[5px] 2xl:p-[7.5px] content-end">
                                    <div className="rounded-[10px] h-fit bg-white sm:shadow-[0px_0px_50px_rgba(0,0,0,0.10)] sm:px-[10px] xl:px-[15px] 2xl:px-[20px] sm:py-[15px] xl:py-[20px] 2xl:py-[30px] flex items-center">
                                        <div className="w-[20px] xl:w-[26px] 2xl:w-[35px] 3xl:w-[40px]h-[20px] xl:h-[26px] 2xl:h-[35px] 3xl:h-[40px]">
                                            <Image
                                                src="/images/offr-02.svg"
                                                alt="lifeintelImg"
                                                width={45}
                                                height={45}
                                                className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="text-sm1 text-[#151515] font-medium 2xl:font-normal w-[calc(100%-20px)] xl:w-[calc(100%-26px)] 2xl:w-[calc(100%-35px)] 3xl:w-[calc(100%-40px)] pl-[10px] xl:pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                                            For CAPEX / working capital expenses
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-[60%] xl:w-[65%] 2xl:w-2/3 content-end">
                                    <div className="p-[5px] 2xl:p-[7.5px]">
                                        <div className="rounded-[10px] h-fit bg-white sm:shadow-[0px_0px_50px_rgba(0,0,0,0.10)] sm:px-[10px] xl:px-[15px]  2xl:px-[20px] sm:py-[25px] 2xl:py-[30px] 3xl:py-[40px] flex items-center">
                                            <div className="w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[45px] h-[25px] xl:h-[30px] 2xl:h-[40px] 3xl:h-[45px]">
                                                <Image
                                                    src="/images/offr-03.svg"
                                                    alt="lifeintelImg"
                                                    width={45}
                                                    height={45}
                                                    className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="text-sm1 text-[#151515] font-medium 2xl:font-normal w-[calc(100%-25px)] xl:w-[calc(100%-30px)] 2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-45px)] pl-[10px] xl:pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                                                Balance transfer from other NBFC’s to reduce interest / EMI burden
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full p-[5px] 2xl:p-[7.5px] justify-items-end">
                                        <div className="rounded-[10px] w-full sm:w-fit h-fit bg-white sm:shadow-[0px_0px_50px_rgba(0,0,0,0.10)] sm:px-[10px] xl:px-[15px]  2xl:px-[20px] sm:py-[25px] 2xl:py-[30px] 3xl:py-[40px] flex items-center">
                                            <div className="w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[45px] h-[25px] xl:h-[30px] 2xl:h-[40px] 3xl:h-[45px]">
                                                <Image
                                                    src="/images/offr-05.svg"
                                                    alt="lifeintelImg"
                                                    width={45}
                                                    height={45}
                                                    className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="text-sm1 text-[#151515] font-medium 2xl:font-normal  w-[calc(100%-25px)] xl:w-[calc(100%-35px)] 2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-45px)] pl-[10px] xl:pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                                                Business<br></br> expansion
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-[40%] xl:w-[35%] 2xl:w-1/3 p-[5px] 2xl:p-[7.5px]">
                                    <div className="rounded-[10px] h-fit bg-white sm:shadow-[0px_0px_50px_rgba(0,0,0,0.10)] sm:px-[10px] xl:px-[15px]  2xl:px-[20px] sm:py-[40px] 2xl:py-[50px] 3xl:py-[60px]  flex items-center">
                                        <div className="w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[45px] h-[25px] xl:h-[30px] 2xl:h-[40px] 3xl:h-[45px]">
                                            <Image
                                                src="/images/offr-04.svg"
                                                alt="lifeintelImg"
                                                width={45}
                                                height={45}
                                                className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="text-sm1 text-[#151515] font-medium 2xl:font-normal w-[calc(100%-25px)] xl:w-[calc(100%-30px)] 2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-45px)] pl-[10px] xl:pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                                            Debt <br></br> consolidation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* only in mobile view ie;below 640px */}
            <section className="w-full sm:bg-none bg-[#E2EFFF] sm:rounded-[0] rounded-[20px] sm:hidden block">
                <div className="container">
                    <div className="w-full lg:w-5/10 lg:px-[40px] sm:py-0 py-[25px] sm:pt-[30px] lg:pt-0">
                        <div className="text-base1 text-[18px] md:text-[20px] lg:text-[22px] xl:text-[28px] 2xl:text-[34px] 3xl:text-[40px] font-medium 2xl:font-normal leading-normal lg:pl-[30px] mb-[15px]">
                            Our Offerings
                        </div>
                        <div className="text-sm1 mb-[15px] xl:mb-[20px] max-w-[90%] lg:pl-[30px] hidden">
                            To be with you at the cornerstone of development of MSME segment, we extend
                            our product offerings to fulfil your needs:
                        </div>
                        <div className="flex flex-wrap justify-center -m-[5px] 2xl:-m-[7.5px] sm:bg-none bg-white sm:rounded-[0] rounded-[10px] overflow-hidden sm:px-0 px-[15px] sm:py-0 py-[20px]">
                            <div className="w-full sm:w-[45%] xl:w-[40%] 2xl:w-1/3 p-[5px] 2xl:p-[7.5px] sm:pl-[30px]">
                                <div className="rounded-[10px] bg-white sm:shadow-[0px_0px_50px_rgba(0,0,0,0.10)] flex flex-wrap sm:flex-col 3xs:items-center sm:px-[10px] xl:px-[15px]  2xl:px-[20px] sm:py-[15px] xl:py-[20px]  2xl:py-[30px]">
                                    <div className="w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[45px] h-[25px] xl:h-[30px] 2xl:h-[40px] 3xl:h-[45px] sm:mr-auto">
                                        <Image
                                            src="/images/offr-01.svg"
                                            alt="lifeintelImg"
                                            width={45}
                                            height={45}
                                            className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-105" />
                                    </div>
                                    <div className="text-sm1 text-[#151515] font-medium 2xl:font-normal sm:pt-[10px] 2xl:pt-[15px] sm:w-full w-[calc(100%-25px)] sm:pl-0 pl-[10px]">
                                        For CAPEX / working capital expenses
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-[55%] xl:w-[60%] 2xl:w-2/3 p-[5px] 2xl:p-[7.5px] content-end">
                                <div className="rounded-[10px] h-fit bg-white sm:shadow-[0px_0px_50px_rgba(0,0,0,0.10)] sm:px-[10px] xl:px-[15px] 2xl:px-[20px] sm:py-[15px] xl:py-[20px] 2xl:py-[30px] flex 3xs:items-center">
                                    <div className="w-[20px] xl:w-[26px] 2xl:w-[35px] 3xl:w-[40px]h-[20px] xl:h-[26px] 2xl:h-[35px] 3xl:h-[40px]">
                                        <Image
                                            src="/images/offr-02.svg"
                                            alt="lifeintelImg"
                                            width={45}
                                            height={45}
                                            className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="text-sm1 text-[#151515] font-medium 2xl:font-normal w-[calc(100%-20px)] xl:w-[calc(100%-26px)] 2xl:w-[calc(100%-35px)] 3xl:w-[calc(100%-40px)] pl-[10px] xl:pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                                        For CAPEX / working capital expenses
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-[60%] xl:w-[65%] 2xl:w-2/3 content-end">
                                <div className="p-[5px] 2xl:p-[7.5px]">
                                    <div className="rounded-[10px] h-fit bg-white sm:shadow-[0px_0px_50px_rgba(0,0,0,0.10)] sm:px-[10px] xl:px-[15px]  2xl:px-[20px] sm:py-[25px] 2xl:py-[30px] 3xl:py-[40px] flex 3xs:items-center">
                                        <div className="w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[45px] h-[25px] xl:h-[30px] 2xl:h-[40px] 3xl:h-[45px]">
                                            <Image
                                                src="/images/offr-03.svg"
                                                alt="lifeintelImg"
                                                width={45}
                                                height={45}
                                                className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="text-sm1 text-[#151515] font-medium 2xl:font-normal w-[calc(100%-25px)] xl:w-[calc(100%-30px)] 2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-45px)] pl-[10px] xl:pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                                            Balance transfer from other NBFC’s to reduce interest / EMI burden
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-[5px] 2xl:p-[7.5px] justify-items-end">
                                    <div className="rounded-[10px] w-full sm:w-fit h-fit bg-white sm:shadow-[0px_0px_50px_rgba(0,0,0,0.10)] sm:px-[10px] xl:px-[15px]  2xl:px-[20px] sm:py-[25px] 2xl:py-[30px] 3xl:py-[40px] flex 3xs:items-center">
                                        <div className="w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[45px] h-[25px] xl:h-[30px] 2xl:h-[40px] 3xl:h-[45px]">
                                            <Image
                                                src="/images/offr-05.svg"
                                                alt="lifeintelImg"
                                                width={45}
                                                height={45}
                                                className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="text-sm1 text-[#151515] font-medium 2xl:font-normal  w-[calc(100%-25px)] xl:w-[calc(100%-35px)] 2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-45px)] pl-[10px] xl:pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                                            Business<br></br> expansion
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-[40%] xl:w-[35%] 2xl:w-1/3 p-[5px] 2xl:p-[7.5px]">
                                <div className="rounded-[10px] h-fit bg-white sm:shadow-[0px_0px_50px_rgba(0,0,0,0.10)] sm:px-[10px] xl:px-[15px]  2xl:px-[20px] sm:py-[40px] 2xl:py-[50px] 3xl:py-[60px]  flex 3xs:items-center">
                                    <div className="w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[45px] h-[25px] xl:h-[30px] 2xl:h-[40px] 3xl:h-[45px]">
                                        <Image
                                            src="/images/offr-04.svg"
                                            alt="lifeintelImg"
                                            width={45}
                                            height={45}
                                            className="w-full h-auto object-cover transition-transform duration-600 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="text-sm1 text-[#151515] font-medium 2xl:font-normal w-[calc(100%-25px)] xl:w-[calc(100%-30px)] 2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-45px)] pl-[10px] xl:pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px]">
                                        Debt <br></br> consolidation
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link
                            href="/"
                            className="btn btn-base2 w-full max-w-[380px] sm:hidden flex m-auto mt-[20px]"
                        >
                            GET A CALL
                        </Link>
                    </div>
                </div>
            </section>
        </div>

    );
}
