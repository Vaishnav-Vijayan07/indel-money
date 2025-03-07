"use client";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";


export default function FAQ() {
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
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-medium text-black text-[1.25rem] cursor-pointer hover:no-underline">There are many variations of passages of Lorem Ipsum available?</AccordionTrigger>
                  <AccordionContent className="font-normal text-[18px]">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-medium text-black text-[1.25rem] cursor-pointer hover:no-underline">If you are going to use a passage of Lorem Ipsum, you need to be sure?</AccordionTrigger>
                  <AccordionContent className="font-normal text-[18px]">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}