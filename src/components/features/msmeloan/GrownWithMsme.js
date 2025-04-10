"use client";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";


export default function FAQ() {
    const faqs = [
        {
            question: "There are many variations of passages of Lorem Ipsum available?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
        },
        {
            question: "If you are going to use a passage of Lorem Ipsum, you need to be sure?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
        },
        {
            question: "All the Lorem Ipsum generators on the Internet tend to repeat?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
        },
        {
            question: "Lorem Ipsum is therefore always free from repetition, injected humour?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
        },
        {
            question: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced?",
            answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[90px]">
            <div className="container">
                <div className="flex flex-wrap lg:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[30px]">
                    <div className="w-full lg:w-[40%] 2xl:w-[35%] lg:border-r lg:border-r-[rgba(23,71,158,0.26)] pb-[30px] lg:pb-[0] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
                        <div className="w-full">
                            <h2 className="text-title1 mb-[20px] 2xl:mb-[30px]">
                            Grow with  
                                <span className="text-base2 font-bold">&nbsp;MSME loan</span>
                            </h2>
                            <div className="text-sm1">
                            We at Indel Money understand the necessity for growth of small business units and their productive impact on the economy. We are committed to providing requisite timely financial assistance to the sector through our MSME product suits.
Indel Money believes in market linkage and provide ‘Go to Market Initiative’ application services to get connected with the suppliers, retailers, buyers and sellers for their products.
The major hurdle faced by the sector to progress and survive is inadequate working capital. Less than optimum book of accounts and banking habits also makes it difficult to access financial support. Indel Money analyses the cash flow through spending time and understanding individual business dynamics and guides you to properly deploy funds in income generating activities.
Our dedicated officers are well equipped to understand the business cash flows through real time personal discussions and market reference. Any entrepreneur intending to expand to another unit or to add a new line of business can avail our expertise services including straight term loans, structured moratorium based loans, short term daily collection loans, supply chain financing, high value loan against property and more.
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[60%] 2xl:w-[65%] lg:px-[15px] xl:px-[20px] 2xl:px-[30px]">
                        <div className="contentBx w-full">
                            <div className="font-bold text-black mb-2 xl:text-[20px] lg:text-[18px] text-[16px] uppercase">FAQ</div>
                            <div className="flex items-center justify-between mb-5 pb-[20px] border-b-1 border-[rgba(0,0,0,0.68)]">
                                <div className="text-black text-title1">Frequently asked <span className="text-base2 font-bold">&nbsp;Questions</span></div>
                               
                            </div>

                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-[rgba(0,0,0,0.26)] 2xl:pt-[15px] pt-[10px] pb-[5px] 2xl:pb-[10px]">
                                    <button
                                        className="flex justify-between w-full items-center font-medium text-left text-black 2xl:text-[1.25rem] xl:text[1rem] text-[0.8rem] cursor-pointer hover:no-underline  transition-all duration-300 pb-[10px]"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className="2xl:w-[calc(100% -33px )] w-[calc(100%-25px)] pr-2">{faq.question}</div>
                                        {openIndex === index ? (
                                            <Minus className="text-white bg-base2 rounded-full  2xl:w-[33px] 2xl:h-[33px] w-[25px] h-[25px] p-[3px] transition-all duration-300" size={17} />
                                        ) : (
                                            <Plus className="text-white bg-base2 rounded-full  2xl:w-[33px]  2xl:h-[33px] w-[25px] h-[25px]   p-[3px] transition-all duration-300" size={17} />
                                        )}
                                    </button>
                                    {openIndex === index && (
                                        <div className="font-normal 2xl:text-[18px] xl:text-[16px] text-[14px] pb-[10px] transition-all duration-300">{faq.answer}</div>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


