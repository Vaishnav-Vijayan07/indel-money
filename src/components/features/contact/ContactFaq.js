import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/custom-accordion";

const faqAccordion = [
  {
    id: "1",
    title: "There are many variations of passages of Lorem Ipsum available?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: "2",
    title:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: "3",
    title: "All the Lorem Ipsum generators on the Internet tend to repeat?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: "4",
    title:
      "Lorem Ipsum is therefore always free from repetition, injected humour?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: "5",
    title:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
];

const addressBox = [
  {
    title: "Registered Office",
    address:
      "Indel Money Limited Office No. 301, Floor No. 3, Sai Arcade, N S Road, Mulund, West Mumbai - 400 080",
    phone: "1800 4253 990",
    email: "care@indelmoney.com",
  },
  {
    title: "Corporate Office",
    address:
      "Indel Money Limited, Indel House, Changampuzhanagar, South Kalamassery P. O. Ernakulam Kerala - 682 033",
    phone: ["0484 6919999", "0484 2933990"],
    email: "care@indelmoney.com",
  },
];

function LinkBox({ href, src, title, alt, items }) {
  return (
    <div className="group w-full flex items-center my-[5px] 3xl:my-[10px]">
      <span>
        <Image
          src={src}
          width={15}
          height={15}
          alt={alt}
          className="w-[10px] h-[auto] lg:w-[12px] 3xl:w-[14px] block"
        />
      </span>
      <p className="text-[14px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-bold text-white sm:text-[#1b1b1b] ml-[6px] lg:ml-[10px] 3xl:ml-[14px]">
        {Array.isArray(items) ? (
          items.map((number, idx) => (
            <span key={`phone-${idx}`}>
              <a
                href={`tel:${number}`}
                aria-label={number}
                className="hover:text-base2 transition-color duration-300"
              >
                {number}
              </a>
              {idx < items.length - 1 && ", "}
            </span>
          ))
        ) : (
          <a
            href={href}
            aria-label={title}
            className="hover:text-base2 transition-color duration-300"
          >
            {title}
          </a>
        )}
      </p>
    </div>
  );
}

function AddressBox({ item }) {
  return (
    <div className="w-full h-auto max-sm:bg-gradient-to-tl max-sm:to-base1 max-sm:from-base2 sm:bg-[#dceafb] p-[20px]  4xs:p-[25px] sm:p-[15px_20px] lg:p-[30px_40px] 3xl:p-[48px_60px] rounded-[15px] 2xl:rounded-[20px] 3xl:rounded-[24px] overflow-hidden relative z-0">
      <Image
        src={"/images/contactbx-delmt.png"}
        alt="contactbx-delmt"
        fill
        className="object-cover scale-[1.05]"
      />
      <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] text-white sm:text-base1 font-bold mb-[5px] lg:mb-[10px] 2xl:mb-[15px]">
        {item.title}
      </div>
      <div className="text-sm1 text-white sm:text-black/80 mb-[15px] lg:mb-[10px] 2xl:mb-[15px]">
        {item.address}
      </div>
      {item.phone && (
        <LinkBox
          href={`tel:${item.phone}`}
          src="/images/icon-call.svg"
          title={item.phone}
          alt="call"
          items={item.phone}
        />
      )}
      {item.email && (
        <LinkBox
          href={`mailto:${item.email}`}
          src="/images/icon-ft-email.svg"
          title={item.email}
          alt="mail"
          items={item.email}
        />
      )}
    </div>
  );
}

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

export default function ContactFaq() {
  return (
    <section className="w-full block py-[20px_0] sm:py-[40px_40px] lg:py-[80px_60px] 2xl:py-[100px_80px] sm:bg-gradient-to-r sm:to-[#fde7e7] sm:from-transparent">
      <div className="max-sm:max-w-full max-sm:px-0! container">
        <div className="flex flex-wrap lg:-mx-[15px] 2xl:-mx-[20px]">
          <div className="w-full lg:w-[376px] xl:w-[468px] 2xl:w-[576px] 3xl:w-[700px] py-[10px] lg:py-0 lg:px-[15px] 2xl:px-[20px] max-sm:px-[var(--container-padding)] max-sm:mb-[20px]">
            {addressBox.map((item, index) => (
              <div
                key={index}
                className="w-full py-[4px] lg:py-[6px] 2xl:py-[10px]"
              >
                <AddressBox item={item} />
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[calc(100%-376px)] xl:w-[calc(100%-468px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-700px)] sm:py-[10px] lg:px-[15px] 2xl:px-[20px] max-sm:py-[30px_30px] max-sm:bg-[#f0faff] max-sm:px-[var(--container-padding)]">
            <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1] font-bold text-black mb-[5px] lg:mb-[5px] 2xl:mb-[10px] lg:mt-[10px]">
              FAQ
            </div>
            <div className="text-title1 mb-[15px] lg:mb-[20px] 2xl:mb-[25px]">
              Frequently asked{" "}
              <span className="text-base2 font-bold">Questions</span>
            </div>
            <FaqAccordion items={faqAccordion} />
          </div>
        </div>
      </div>
    </section>
  );
}
