import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/custom-accordion";

function FaqAccordion({ items }) {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      {items?.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`} className="border-b border-black/25 [&:first-child]:border-t">
          <AccordionTrigger className="text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1.3] font-normal text-[#242424] text-left">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-sm1 max-sm:text-[12px] text-black/75 [&>*:text-sm1] [&>*:text-black/75]">{item.answer}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FaqAccordion;
