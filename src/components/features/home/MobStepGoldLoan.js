import Image from "next/image";

const steps = [
  {
    image: "/images/step1.webp",
    alt: "step",
    title: "Step 1",
    description: "Walk in any of our branches with your gold",
  },
  {
    image: "/images/step2.webp",
    alt: "step",
    title: "Step 2",
    description: "Fill in and submit the required documents",
  },
  {
    image: "/images/step3.webp",
    alt: "step",
    title: "Step 3",
    description: "After evaluation, our officer will sanction the loan",
  },
];

export default function MobStepGoldLoan({className}) {
  return (
    <section className={`${className} w-full py-[20px_0]`}>
      <div className="container">
        <div className="text-title1 text-center mb-[10px] 2xl:mb-[15px]">
          Our Easy Step&nbsp;
          <span className="text-base2 font-bold">Gold Loan</span>
        </div>
        <div className="flex flex-wrap">
          {steps?.map((item, index) => (
            <div key={index} className="w-full py-[10px]">
              <div className="w-full h-auto rounded-[10px] bg-gradient-to-r from-base1/10 to-base2/10 border-dashed border-[1px] border-base1/80 p-[15px] flex gap-[20px] @md:gap-[25px] items-center">
                <div className="w-[80px] h-[80px] relative z-0">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="aspect-square"
                  />
                </div>
                <div className="w-[calc(100%-80px)]">
                  <div className="text-[13px] font-normal leading-[1] line-clamp-1 text-white text-center capitalize mb-[5px] @md:mb-[10px] bg-gradient-to-tl from-base2 to-base1 rounded-[15px] inline-block p-[8px_15px]">
                    {item.title}
                  </div>
                  <div className="text-[14px] font-medium leading-[1] line-clamp-3 text-[#002362]">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
