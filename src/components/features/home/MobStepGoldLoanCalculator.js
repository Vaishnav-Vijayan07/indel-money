import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoldLoanForm from "../../common/GoldLoanForm";
import EmiForm from "../../common/EmiForm";

const TabsTriggerStyle =
  "text-[12px] 4xs:text-[14px] font-medium leading-none text-center w-1/2 bg-white rounded-[20px_20px_0_0] shadow-none p-[20px_25px_10px_25px] border-0 data-[state=active]:font-bold data-[state=active]:bg-[#c0dbff] data-[state=active]:shadow-none data-[state=active]:z-1 data-[state=active]:before:block relative z-0 before:absolute before:bottom-0 before:z-2 before:hidden before:w-[20px] before:h-[20px] before:bg-white before:rounded-[0_0_0_20px] before:shadow-[-5px_5px_0_0_rgba(192,219,255,1)]";

export default function MobStepGoldLoan() {
  return (
    <section className="w-full py-[0_20px]">
      <div className="container">
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
