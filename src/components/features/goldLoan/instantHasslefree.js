
import Image from "next/image";

export default function InstantHasslefree() {
    const features = [
        {
            icon: "/images/instantIcon1.svg",
            text: "Instant processing",
        },
        {
            icon: "/images/instantIcon2.svg",
            text: "Maximum value for your gold",
        },
        {
            icon: "/images/instantIcon3.svg",
            text: "Easy documentation",
        },
        {
            icon: "/images/instantIcon4.svg",
            text: "Part-payment and pre-payment options",
        },
        {
            icon: "/images/instantIcon5.svg",
            text: "Maximum value for your gold",
        },
        {
            icon: "/images/instantIcon6.svg",
            text: "Taking over existing gold loans at unparalleled additional funding and interest rates",
        },
       
        {
            icon: "/images/instantIcon8.svg",
            text: "Tailor made repayment plans",
        },
        {
            icon: "/images/instantIcon9.svg",
            text: "Guaranteed safety for your gold",
        },
        {
            icon: "/images/instantIcon10.svg",
            text: "Competitive interest rates",
        },
        // Add more items here if needed
    ];

    return (
        <section className="py-[45px] xl:py-[65px] bg-[linear-gradient(90deg,#CDDFFF_1%,#FFD2D2_99%)]">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-[700px]">
                        <div className="w-full h-full">
                            <div className="w-full h-full overflow-hidden rounded-[30px]">
                                <Image src={"/images/loanImag1.webp"} alt="loanImg" width={700} height={550} className="w-full h-full object-cover duration-450 transition-all group hover:scale-[1.1] " />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[calc(100%-700px)] pl-[70px] max-lg:mb-[25px]">

                        <div className="text-black text-title1 font-normal mb-[20px] 2xlmb-[30px] 3xl:mb-[40px]">Instant & hassle free <br></br><span className="text-base2 font-bold">Gold Loan</span></div>
                        <p>
                            Availing gold loan from Indel Money branches is super easy. You just walk into your nearest Indel Money branch with your jewellery to get maximum value for your gold and receive the loan at our instant counter processing with minimal documentation, the shortest processing time and low interest rates. We yearn for customer satisfaction and our happiness lies in serving you best.
                        </p>
                        <div className="w-full bg-white rounded-[24px] p-[20px] 2xl:p-[25px] mt-[25px]">
                            <ul className="flex flex-wrap ">
                                {features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="min-w-[300px] max-w-[50%] 3xl:text-[18px] 2xl:text-[16px] text-[12px] text-[#000] relative pl-[20px] mb-[10px] flex flex-wrap"
                                    >
                                        <div className="w-[24px] h-[24px]">
                                            <Image
                                                src={feature.icon}
                                                alt="loanicon"
                                                width={24}
                                                height={24}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="w-[calc(100%-24px)] pl-[15px]">{feature.text}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
