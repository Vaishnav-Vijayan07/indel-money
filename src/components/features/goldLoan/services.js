
import Image from "next/image";

export default function Services() {

    const serviceGroups = [
        [
            {
                icon: '/images/servIcon1.svg',
                title: "India’s Longest Tenure",
                description: "Best possible means of capital been provided through our long tenure gold loan schemes in order"
            },
            {
                icon: '/images/servIcon2.svg',
                title: "Instant ; Swift processing and instant funds",
                description: "Get instant gold loan within minutes and choose any custom repayment option that suits you."
            }
        ],
        [
            {
                icon: '/images/servIcon3.svg',
                title: "Safety guaranteed",
                description: "We value the safety of your precious jewellery. Your gold will be evaluated, sealed & documented in your presence and moved into vaults in our strong rooms."
            },
            {
                icon: '/images/indel-logo.svg',
                isImageOnly: true
            },
            {
                icon: '/images/servIcon4.svg',
                title: "Attractive ; Lowest interest rates",
                description: "We offer gold loan with low interest rates that is highly competitive. Another attractive feature is being able to choose repayment plans tailor made to your convenience."
            }
        ],
        [
            {
                icon: '/images/servIcon5.svg',
                title: "Flexible ; Maximum value for your gold",
                description: "We value the safety of your precious jewellery. Your gold will be evaluated, sealed & documented in your presence and moved into vaults in our strong rooms."
            },
            {
                icon: '/images/servIcon6.svg',
                title: "Transparent ; Trusted and reliable",
                description: "Our interest rate, payment modes and other charges will be communicated with you in writing at the very outset of the loan processing. We assure you there won’t be any hidden costs or charges."
            }
        ]
    ];


    return (
        <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
            <div className="container">
                <div className="flex flex-wrap lg:items-center m-[-15px] 3xl:p-[-20px]">
                    {serviceGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="w-full lg:w-[calc(100%/3)] p-[15px] 3xl:p-[20px] my-[-20px] 3xl:my-[-20px] max-lg:flex max-lg:flex-wrap">
                            {group.map((service, index) => (
                                <div key={index} className="h-fit w-full py-[15px] 3xl:py-[20px] ">
                                    {service.isImageOnly ? (
                                        <div className="max-lg:hidden w-full max-w-[250px] 2xl:max-w-[300px] 3xl:max-w-[400px] bg-white rounded-[20px] p-[10px] shadow-[0_0_25px_rgba(0,0,0,0.15)] flex items-center justify-center m-auto min-h-[100px] 3xl:min-h-[160px]">
                                            <Image
                                                src={service.icon}
                                                alt="loanicon"
                                                width={24}
                                                height={24}
                                                className="w-full h-full object-contain max-w-[100px] 3xl:max-w-[145px]"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full bg-[#D4E6FF] rounded-[24px] py-[30px] 3xl:py-[45px] 3xl:px-[35px] px-[20px]">
                                            <div className="flex flex-wrap mb-[15px] 3xl:mb-[25px]">
                                                <div className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px] 3xl:w-[60px] 3xl:h-[60px]">
                                                    <Image
                                                        src={service.icon}
                                                        alt="service-icon"
                                                        width={24}
                                                        height={24}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="text-[18px] 2xl:text-[22px] 3xl:text-[30px] text-[#17479E] font-medium w-[calc(100%-30px)] 2xl:w-[calc(100%-40px)] 3xl:w-[calc(100%-60px)] pl-[20px] 3xl:pl-[30px] leading-[1.3]">
                                                    {service.title}
                                                </div>
                                            </div>
                                            <p>{service.description}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
