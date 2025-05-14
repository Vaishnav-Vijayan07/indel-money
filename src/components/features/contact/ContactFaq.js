import AddressBox from "@/components/contact/AddressBox";
import FaqAccordion from "@/components/contact/FaqAccordion";

const faqAccordion = [
  {
    id: "1",
    title: "There are many variations of passages of Lorem Ipsum available?",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: "2",
    title: "If you are going to use a passage of Lorem Ipsum, you need to be sure?",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: "3",
    title: "All the Lorem Ipsum generators on the Internet tend to repeat?",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: "4",
    title: "Lorem Ipsum is therefore always free from repetition, injected humour?",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: "5",
    title: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced?",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
];

const addressBox = [
  {
    title: "Registered Office",
    address: "Indel Money Limited Office No. 301, Floor No. 3, Sai Arcade, N S Road, Mulund, West Mumbai - 400 080",
    phone: "1800 4253 990",
    email: "care@indelmoney.com",
  },
  {
    title: "Corporate Office",
    address: "Indel Money Limited, Indel House, Changampuzhanagar, South Kalamassery P. O. Ernakulam Kerala - 682 033",
    phone: ["0484 6919999", "0484 2933990"],
    email: "care@indelmoney.com",
  },
];

export default function ContactFaq({ faqs, officeContacts, faqTitle, faqSuperTitle }) {
  return (
    <section className="w-full block py-[20px_0] sm:py-[40px_40px] lg:py-[80px_60px] 2xl:py-[100px_80px] sm:bg-gradient-to-r sm:to-[#fde7e7] sm:from-transparent">
      <div className="max-sm:max-w-full max-sm:px-0! container">
        <div className="flex flex-wrap lg:-mx-[15px] 2xl:-mx-[20px]">
          <div className="w-full lg:w-[376px] xl:w-[468px] 2xl:w-[576px] 3xl:w-[700px] py-[10px] lg:py-0 lg:px-[15px] 2xl:px-[20px] max-sm:px-[var(--container-padding)] max-sm:mb-[20px]">
            {officeContacts?.map((item, index) => (
              <div key={index} className="w-full py-[4px] lg:py-[6px] 2xl:py-[10px]">
                <AddressBox item={item} />
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[calc(100%-376px)] xl:w-[calc(100%-468px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-700px)] sm:py-[10px] lg:px-[15px] 2xl:px-[20px] max-sm:py-[30px_30px] max-sm:bg-[#f0faff] max-sm:px-[var(--container-padding)]">
            <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-none font-bold text-black mb-[5px] lg:mb-[5px] 2xl:mb-[10px] lg:mt-[10px]">
              {faqTitle}
            </div>
            <div
              className="text-title1 mb-[15px] lg:mb-[20px] 2xl:mb-[25px] [&>span]:text-base2 [&>span]:font-bold"
              dangerouslySetInnerHTML={{ __html: faqSuperTitle }}
            />
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
