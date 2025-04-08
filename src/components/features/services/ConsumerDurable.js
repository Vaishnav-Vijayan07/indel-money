import PageBreadcrumb from "@/components/common/PageBreadcrumb"
import Image from "next/image";
import Link from "next/link";


export default function ConsumerDurable() {
    return (
        <section className="w-full pt-[30px] pb-[20px] 2xl:pt-[50px]  2xl:pb-[70px] md:pb-[40px] sm:pt-[30px] sm:pb-[30px]">
            <div className="container">
                <div className="w-full pb-[20px] lg:pb-[40px] 2xl:pb-[60px]">
                    <h1 className="text-title2 text-black mb-[15px] 2xl:mb-[20px]">
                        Consumer Durable
                        <span className="text-base2 font-bold">&nbsp;Loans</span>
                    </h1>
                    <PageBreadcrumb />
                </div>
                <div className="flex flex-wrap md:-mx-[15px] lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[30px]">
                    <div className="w-full md:w-[48%] 2xl:w-[46%] mb-[15px] lg:mb-0 md:px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
                        <div className="group w-full h-full 2xl:rounded-[36px] xl:rounded-[30px] md:rounded-[30px] rounded-[18px] overflow-hidden aspect-735/390 ">
                            <Image
                                src={"/images/consumerImg.jpg"}
                                alt="lifeintelImg"
                                width={735}
                                height={390}
                                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-[52%] 2xl:w-[54%] md:px-[15px] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
                        <h2 className="text-title1 mb-[15px] 2xl:mb-[20px]">
                            Unlock the power of your
                            <br></br> gold @
                            <span className="text-base2 font-bold">&nbsp;NO cost (EMIs)</span>

                        </h2>
                        <div className="text-sm1">
                            Now you can purchase consumer durables, electronic items, home appliances etc., of your choice through Indel Money’s no cost CD loans. Just walk-in to any of our branches and avail CD loans for your next purchase. We assure you the best loaning experience with no EMIs, flexible repayment loans, no processing fee, no down payments etc. Never be doubtful again about your purchase decisions!
                        </div>
                        <div className="flex flex-wrap gap-[10px] lg:gap-[15px] 2xl:gap-[20px] mt-[15px] xl:mt-[30px] 2xl:mt-[40px]">
                            <div>
                                <Link
                                    href="tel:+9072588911"
                                    className="btn btn-base2 min-w-[120px] lg:min-w-[140px] xl:min-w-[160px] 2xl:min-w-[190px]">
                                    GET A CALL
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


