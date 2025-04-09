import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoldLoanForm from "../../common/GoldLoanForm";
import EmiForm from "../../common/EmiForm";

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

const TabsTriggerStyle =
  "text-[14px] font-medium leading-[1] text-center w-1/2 bg-white rounded-[20px_20px_0_0] shadow-none p-[20px_25px_10px_25px] border-0 data-[state=active]:font-bold data-[state=active]:bg-[#c0dbff] data-[state=active]:shadow-none data-[state=active]:z-1 data-[state=active]:before:block relative z-0 before:absolute before:bottom-0 before:z-2 before:hidden before:w-[20px] before:h-[20px] before:bg-white before:rounded-[0_0_0_20px] before:shadow-[-5px_5px_0_0_rgba(192,219,255,1)]";

export default function MobStepGoldLoan() {
  return (
    <section className="w-full py-[20px]">
      <div className="container">
        <div className="text-title1 text-center mb-[10px] 2xl:mb-[15px]">
          Our Easy Step&nbsp;
          <span className="text-base2 font-bold">Gold Loan</span>
        </div>
        <div className="flex flex-wrap mb-[20px]">
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

        <Tabs defaultValue="goldloan" className="w-full gap-0 my-[20px]">
          <TabsList className="w-full p-0">
            <TabsTrigger value="goldloan" className={`${TabsTriggerStyle} before:left-full`}>
              Gold Loan Calculator
            </TabsTrigger>
            <TabsTrigger value="emicalculator" className={`${TabsTriggerStyle} before:right-full before:scale-x-[-1]`}>
              EMI Calculator
            </TabsTrigger>
          </TabsList>
          <TabsContent value="goldloan">
            <div className="w-full h-auto p-[30px_25px] bg-[#c0dbff] rounded-[0_20px_20px_20px]">
              <GoldLoanForm />
            </div>
          </TabsContent>
          <TabsContent value="emicalculator">
            <div className="w-full h-auto p-[30px_25px] bg-[#c0dbff] rounded-[20px_0_20px_20px]">
              <EmiForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
