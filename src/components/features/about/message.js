import Image from "next/image";

export default function Messages() {
    const messages = [
        {
            image: "/images/chairman.png",
            name: "Mr. Mohanan Gopalakrishnan",
            title: 'Message from <span class="text-[#F30000] font-bold">Chairman</span>',
            post: "Chairman",
            designation: "Chairman & Managing Director",
            message:
                "We at Indel Money believe in dynamism blended with human values at every point of our organization. That is why we do not believe in working along the lines of certain preconceived missions and visions, rather, we believe in certain values which we do practice and showcase in our business. We call them INDEL VALUES, which are presented in the relevant section. Empowered by the values we believe in, we are well equipped to operate in this challenging environment, where the only real constant is “change”, to offer better than the best, always.",
        },
        {
            image: "/images/ceo.png",
            name: "Mr. Umesh Mohanan",
            title: 'From The <span class="text-[#F30000] font-bold">CEO’s</span> Desk',
            post: "CEO",
            designation: "Executive Director & CEO",
            message:
                "At Indel Money, we are committed to building strong, trust-based relationships with a customer-first approach. As a diversified financial services provider, we offer tailored solutions to meet the needs of individuals from all walks of life. Whether you are a customer, partner, investor, or future employee, we strive to deliver exceptional value through innovation and transparency Our vision is to become the most sought-after financial solutions provider in the country. Through our branch network, designed as financial supermarkets, we proactively address the evolving needs of our customers. Leveraging technology-driven processes and rigorous monitoring, we ensure timely and reliable service, making us a preferred financier Backed by a passionate and experienced management team, Indel Money adheres to the highest standards of business excellence. With a proven track record and a relentless focus on improvement, we are dedicated to becoming a market champion in the financial services industry.",
        },
    ];

    return (
        <section className="py-[80px]">
            <div className="custom-container">
                {messages.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-wrap w-full h-full rounded-[30px] overflow-hidden mb-[30px]
                        ${index % 2 === 0
                                ? "bg-gradient-to-r from-[rgba(238,56,36,0.2)] via-[rgba(190,45,29,0.1)] to-[rgba(255,255,255,0)]"
                                : "bg-gradient-to-l from-[rgba(23,71,158,0.2)] via-[rgba(23,71,158,0.12)] to-[rgba(23,71,158,0)] flex-row-reverse"
                            }`}
                    >
                        {/* Left Section */}
                        <div className="w-[180px]">
                            <div className={`w-full h-full rounded-[20px] overflow-hidden pt-[25px] 
                                ${index % 2 === 0 ? "bg-[#EE3824]" : "bg-[#17479E]"}`}>
                                <div className="text-[30px] mb-[10px] text-white text-center leading-[1]">
                                    {item.post}
                                </div>
                                <div className="w-full max-w-[180px] m-auto">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={180}
                                        height={180}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className={`w-[calc(100%-180px)] ${index % 2 === 0 ? "3xl:pl-[60px] 2xl:pl-[50px] pl-[30px]" : "3xl:pr-[60px] 2xl:pr-[50px] pr-[30px] text-right"} py-[50px]`}>
                            <div className="text-title1 mb-[25px]" dangerouslySetInnerHTML={{ __html: item.title }}></div>
                            <p>{item.message}</p>
                            <div className="mt-[30px]">
                                <div className="3xl:text-[24px] xl:text-[20px] text-[#0B0B0B] font-medium mb-[5px]">
                                    {item.name}
                                </div>
                                <div className="3xl:text-[18px] xl:text-[16px] text-[#33538C] font-normal">
                                    {item.designation}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
