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

    <section className="w-full 2xl:pt-[100px] 2xl:pb-[100px] md:pt-[60px] md:pb-[60px] pt-[40px] pb-[40px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="2xl:w-[550px] xl:w-[485px] lg:w-[420px] md:w-[380px] max-lg:mb-5">
            <div className="w-full   overflow-hidden rounded-[35px]">
              <Image src={"/images/faqImg.webp"} alt="aboutImg" width={550} height={610} className="w-full h-full object-cover duration-450 transition-all group hover:scale-[1.1]  " />
            </div>
          </div>
          <div className="2xl:w-[calc(100%-550px)] xl:w-[calc(100%-485px)] lg:w-[calc(100%-420px)] md:w-[calc(100%-380px)] 2xl:pl-[70px] lg:pl-[50px] md:pl-[30px]">
            <div className="contentBx w-full">
              <div className="font-bold text-black mb-2 text-[20px] uppercase">FAQ</div>
              <div className="flex items-center justify-between mb-5 pb-[20px] border-b-1 border-[rgba(0,0,0,0.68)]">
                <div className="text-black text-title1">Frequently asked Questions</div>
                <Link
                  href="#"
                  className="relative group flex items-center justify-center  
                    w-full 2xl:max-w-[150px] max-w-[130px] 2xl:h-[50px] h-[45px] 
                    rounded-full bg-base2 text-white 
                    font-bold transition-all duration-300 overflow-hidden hover:bg-base1 2xl:text-[18px] lg:text-[14px]"  >
                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-[-15px] ">
                    VIEW ALL
                  </span>

                </Link>
              </div>

              {faqs.map((faq, index) => (
                <div key={index} className="border-b last:border-none pt-[15px] pb-[10px]">
                  <button
                    className="flex justify-between w-full items-center font-medium text-left text-black 2xl:text-[1.25rem] xl:text[1rem] cursor-pointer hover:no-underline  transition-all duration-300 pb-[10px]"
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
                    <div className="font-normal text-[18px] pb-[10px] transition-all duration-300">{faq.answer}</div>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}