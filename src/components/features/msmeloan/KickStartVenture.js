import Image from "next/image";
import Link from "next/link";

export default function KickStartVenture() {
    return (
        <section className="w-full py-[70px]">
            <div className="container">
                <div className="flex flex-wrap -mx-[40px]">
                    <div className="w-5/10 px-[40px] relative before:content-[''] before:absolute before:h-[460px] before:w-[1px] before:top-[0] before:right-0 before:bg-[rgba(22,69,156,0.26)] before:opacity-25">
                        <h2 className="text-title1 mb-[15px] 2xl:mb-[20px]">
                            Kickstart your new venture <br></br>
                            with our
                            <span className="text-base2 font-bold">&nbsp;MSME loan</span>
                        </h2>
                        <div className="text-[24px] mb-[15px] xl:mb-[20px] text-[#1E1E1E] font-normal leading-normal">
                            Our MSME loans are bespoke for aspiring and upcoming entrepreneurs.
                        </div>
                        <div className="text-sm-1 mb-[15px] xl:mb-[20px]">
                            We are delighted to offer our premium services to Micro, Small, and Medium Enterprises (MSMEs) as well as aspiring entrepreneurs. Our tailored financial packages are designed to meet the specific needs of your business, ensuring that you receive the support necessary to help you grow and succeed. Whether you are looking for working capital to manage day-to-day operations, financing for the purchase of fixed assets to expand your capabilities, or a combination of both, we have the perfect solutions to match your goals. Our expert team will work closely with you to understand your unique challenges and provide personalized assistance that fosters your business's growth, stability, and long-term success. Let us be your trusted partner in turning your entrepreneurial vision into a reality.
                        </div>
                        <Link
                            href="/"
                            className="btn btn-base2 w-fit min-w-[100px] lg:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[180px]"
                        >
                            GET A CALL
                        </Link>
                    </div>
                    <div className="w-5/10 px-[40px]">
                        <div className="text-[#17479E] font-normal leading-normal text-[40px]">
                            Our Offerings
                        </div>
                        <div className="text-sm-1 mb-[15px] xl:mb-[20px] max-w-[90%]">
                            To be with you at the cornerstone of development of MSME segment, we extend
                            our product offerings to fulfil your needs:
                        </div>
                        <div className="flex flex-wrap justify-center -m-[7.5px]">
                            <div className="w-1/3 p-[7.5px]">
                                <div className="rounded-[10px] bg-white shadow-[0px_0px_50px_rgba(0,0,0,0.10)] p-4 flex flex-col items-center">
                                    <div className="w-[45px] h-auto mr-auto ">
                                        <Image
                                            src="/images/offr-01.svg"
                                            alt="lifeintelImg"
                                            width={45}
                                            height={45}
                                            className="w-[45px] h-[45px] object-cover transition-transform duration-600 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="text-[#151515] font-[Amino] text-[18px] font-normal leading-[26px]">
                                        For CAPEX / working capital expenses
                                    </p>
                                </div>
                            </div>
                            <div className="w-2/3 p-[7.5px]">
                                <div className="rounded-[10px] bg-white shadow-[0px_0px_50px_rgba(0,0,0,0.10)] p-4 flex items-center">
                                    <div className="">
                                        <Image
                                            src="/images/offr-02.svg"
                                            alt="lifeintelImg"
                                            width={45}
                                            height={45}
                                            className="w-[45px] h-[45px] object-cover transition-transform duration-600 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="text-[#151515] font-[Amino] text-[18px] font-normal leading-[26px]">
                                        For CAPEX / working capital expenses
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}
