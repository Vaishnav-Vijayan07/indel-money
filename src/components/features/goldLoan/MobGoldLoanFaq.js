import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/custom-accordion";


function FaqAccordion({ items }) {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      {items?.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`} className="border-b border-black/25 [&:first-child]:border-t">
          <AccordionTrigger className="text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1.3] font-normal text-[#242424] text-left">
            {item?.question}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-sm1 max-sm:text-[12px] text-black/75 [&>*:text-sm1] [&>*:text-black/75]">{item?.answer}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function MobGoldLoanFaq({ faqs, faq_title }) {
  return (
    <section className="w-full block py-[30px] bg-[#f0faff] px-[var(--container-padding)]">
      <div className="text-[12px] leading-none font-bold text-black mb-[5px]">FAQ</div>
      <h3 className="text-title1 mb-[15px] [&>span]:text-base2 [&>span]:font-bold">{faq_title}</h3>
      <FaqAccordion items={faqs} />
    </section>
  );
}
