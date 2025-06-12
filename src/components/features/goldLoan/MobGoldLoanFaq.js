import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/custom-accordion";

const faqAccordion = [
  {
    id: 1,
    title: "There are many variations of passages of Lorem Ipsum available?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",
  },
  {
    id: 2,
    title:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: 3,
    title: "All the Lorem Ipsum generators on the Internet tend to repeat?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: 4,
    title:
      "Lorem Ipsum is therefore always free from repetition, injected humour?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: 5,
    title:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
];

function FaqAccordion({ items }) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className="border-b border-black/25 [&:first-child]:border-t"
        >
          <AccordionTrigger className="text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1.3] font-normal text-[#242424] text-left">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-sm1 max-sm:text-[12px] text-black/75 [&>*:text-sm1] [&>*:text-black/75]">
              {item.description}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function MobGoldLoanFaq() {
  return (
    <section className="w-full block py-[30px] bg-[#f0faff] px-[var(--container-padding)]">
      <div className="text-[12px] leading-none font-bold text-black mb-[5px]">
        FAQ
      </div>
      <div className="text-title1 mb-[15px]">
        Frequently asked <span className="text-base2 font-bold">Questions</span>
      </div>
      <FaqAccordion items={faqAccordion} />
    </section>
  );
}
