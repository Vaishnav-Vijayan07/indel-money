"use client";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "There are many variations of passages of Lorem Ipsum available?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",
  },
  {
    question:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    question: "All the Lorem Ipsum generators on the Internet tend to repeat?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    question:
      "Lorem Ipsum is therefore always free from repetition, injected humour?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    question:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
];

export default function GoldLoanFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-[35px] xl:py-[45px] 2xl:py-[65px]">
      <div className="container">
        <div className="text-black text-title1 font-normal mb-[20px]">
          Frequently Asked{" "}
          <span className="text-base2 font-bold">Questions</span>
        </div>
        <div className="w-full rounded-[24px] overflow-hidden bg-[#E7EFF9] py-[30px] 2xl:py-[40px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`px-[25px] xl:px-[45px] 3xl:px-[65px] py-[10px] ${
                openIndex === index ? "bg-[#D7E9FF]" : "bg-[#E7EFF9]"
              }`}
            >
              <button
                className="flex justify-between w-full items-center font-medium text-left text-black 2xl:text-[1.25rem] xl:text[1rem] text-[0.8rem] cursor-pointer hover:no-underline transition-all duration-300 pb-[10px]"
                onClick={() => toggleAccordion(index)}
              >
                <div className="2xl:w-[calc(100%-33px)] w-[calc(100%-25px)] pr-2">
                  {faq.question}
                </div>
                {openIndex === index ? (
                  <Minus
                    className="relative text-white bg-base2 rounded-full 2xl:w-[33px] 3xl:h-[33px] w-[22px] h-[22px] p-[3px] transition-all duration-300 xl:top-[25px]"
                    size={17}
                  />
                ) : (
                  <Plus
                    className="relative text-white bg-base2 rounded-full 2xl:w-[33px] 3xl:h-[33px] w-[22px] h-[22px] p-[3px] transition-all duration-300 xl:top-[25px]"
                    size={17}
                  />
                )}
              </button>
              {openIndex === index && (
                <div className="text-sm1 pb-[10px] transition-all duration-300 text-[rgba(0,0,0,0.75)] max-w-[500px] xl:max-w-[600px] leading-[1.5]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
