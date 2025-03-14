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
          <div className="w-full lg:w-[320px] xl:w-[340px] 2xl:w-[520px] 3xl:w-[550px] max-lg:mb-5">
            <div className="w-full overflow-hidden rounded-[35px]">
              <Image src={"/images/faqImg.webp"} alt="aboutImg" width={550} height={610} className="w-full h-full object-cover duration-450 transition-all group hover:scale-[1.1] " />
            </div>
          </div>
          <div className="w-full lg:w-[calc(100%-320px)] xl:w-[calc(100%-340px)] 2xl:w-[calc(100%-520px)] 3xl:w-[calc(100%-550px)] lg:pl-[30px] xl:pl-[50px] 3xl:pl-[70px]">
            <div className="contentBx w-full">
              <div className="font-bold text-black mb-1 xl:text-[20px] lg:text-[18px] text-[16px] uppercase">FAQ</div>
              <div className="flex items-center justify-between mb-2 pb-[30px] border-b-1 border-[rgba(0,0,0,0.68)]">
                <div className="text-black text-title1">Frequently asked Questions</div>
                <Link
                  href="/"
                  className="btn btn-base2 max-w-[100px] lg:max-w-[90px] xl:max-w-[100px] 2xl:max-w-[120px] 3xl:max-w-[140px]"  >
                  <span>VIEW ALL</span>
                </Link>
              </div>
              {faqs.map((faq, index) => (
                <div key={index} className="border-b last:border-none 2xl:pt-[15px] pt-[10px] pb-[5px] 2xl:pb-[10px]">
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
                    <div className="text-sm-1 pb-[10px] transition-all duration-300">{faq.answer}</div>
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