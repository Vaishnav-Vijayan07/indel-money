"use client";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";


export default function FAQ() {
  const faqData = [
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
  return (


    <section className="w-full 2xl:pt-[100px] 2xl:pb-[100px] md:pt-[60px] md:pb-[60px] pt-[40px] pb-[40px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-[550px]">
            <div className="w-full h-full overflow-hidden rounded-[35px]">
              <Image src={"/images/faqImg.webp"} alt="aboutImg" width={550} height={610} className="w-full h-full object-cover duration-450 transition-all group hover:scale-[1.1]  " />
            </div>
          </div>
          <div className="w-[calc(100%-550px)] pl-[70px]">
            <div className="contentBx w-full">
              <div className="font-bold text-black mb-2 text-[20px] uppercase">FAQ</div>
              <div className="flex justify-between pb-[20px] border-b-1 border-[rgba(0,0,0,0.68)]">
                <div className="text-black mb-2 text-title1">Frequently asked Questions</div>
                <Link
                  href="#"
                  className="relative group flex items-center justify-center  
                    w-full max-w-[150px] lg:h-[50px] h-[45px] 
                    rounded-full bg-base2 text-white 
                    font-medium transition-all duration-300 overflow-hidden hover:bg-base1"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-[-15px] ">
                    VIEW ALL
                  </span>
                </Link>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-300">
                    <AccordionTrigger className="flex justify-between items-center w-full text-left px-5 py-4 text-lg font-semibold text-black hover:bg-gray-100 transition-all duration-300">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-gray-700 text-[16px] leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}