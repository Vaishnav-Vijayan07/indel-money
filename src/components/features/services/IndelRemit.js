import Image from "next/image";
import Link from "next/link";

export default function IndelRemit() {
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
        <section className="relative z-1 w-full pb-[30px] xl:pb-[40px] 2xl:pb-[90px]">
            <div className="container">

                <div className="w-full bg-[#CAE5F4] flex flex-wrap rounded-[36px] overflow-hidden">
                    <div className="group w-[600px] 2xl:w-[700px] overflow-hidden">
                        <Image
                            src="/images/remit01.jpg"
                            alt="money-deal"
                            width={700}
                            height={475}
                            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.05]" />
                    </div>
                    <div className="flex flex-wrap content-between w-[calc(100%-600px)] 2xl:w-[calc(100%-700px)] p-[50px]">
                        <div className="w-full">
                            <div className="w-full font-bold leading-none text-base1 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] mb-[15px]">
                                INDEL REMIT
                            </div>
                            <p className="text-sm-1 line-clamp-4 mb-[35px]">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </p>
                            <p className="text-sm-1 line-clamp-5">
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </div>
                        <Link href="/" className="w-full text-[12px] lg:text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal flex items-center hover:text-base2 transition-color duration-300">
                            LEARN MORE
                            <Image
                                src="/images/icon-right.svg"
                                width={7}
                                height={13}
                                alt="right"
                                className="ml-1 lg:ml-2"
                            />
                        </Link>
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
                <div className="text-sm-1 w-[calc(100%-20px)] 2xl:w-[calc(100%-25px)] pl-[15px]">
                    {item.benefit}
                </div>
            </div>
        </div>
    );
}


