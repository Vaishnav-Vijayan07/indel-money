import ServiceBanner from "../../components/features/goldLoan/ServiceBanner";
import StepGoldLoan from "../../components/features/home/StepGoldLoan";
import StepGoldLoanCalculator from "../../components/features/home/StepGoldLoanCalculator";
import GoldLoanCriteria from "../../components/features/goldLoan/GoldLoanCriteria";
import InstantHasslefree from "../../components/features/goldLoan/InstantHasslefree";
import Services from "../../components/features/goldLoan/GoldLoanServices";
import Scheme from "../../components/features/goldLoan/loanScheme";
import Faq from "../../components/features/goldLoan/faq";

import MobServiceBanner from "../../components/features/goldLoan/MobServiceBanner";
import MobStepGoldLoan from "../../components/features/home/MobStepGoldLoan";
import MobStepGoldLoanCalculator from "../../components/features/home/MobStepGoldLoanCalculator";
import MobGoldLoanCriteria from "../../components/features/goldLoan/MobGoldLoanCriteria";

export default function GoldLoan() {
  return (
    <>
      {/* Gold loan calculator contents*/}
      <div className="hidden sm:block">
        <ServiceBanner />
      </div>
      <div className="block sm:hidden">
        <MobServiceBanner />
      </div>

      {/* Gold loan contents*/}
      <div className="hidden sm:block">
        <StepGoldLoan
          className="py-[30px] lg:py-[40px] 2xl:py-[80px] 3xl:py-[100px]"
          hideTitle={true}
        />
      </div>
      <div className="block sm:hidden">
        <MobStepGoldLoan className="py-[30px_20px]" />
      </div>

      {/* Gold loan steps */}
      <div className="hidden sm:block">
        <GoldLoanCriteria />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanCriteria />
      </div>

      {/* Gold loan calculator contents*/}
      <div className="hidden sm:block">
        <StepGoldLoanCalculator className="py-[30px] lg:py-[40px] 2xl:py-[80px] 3xl:py-[100px]" />
      </div>
      <div className="block sm:hidden">
        <MobStepGoldLoanCalculator />
      </div>

      {/* instant hussle free */}
      <InstantHasslefree />

      {/* instant hussle free */}
      <Services />

      {/* Scheme */}
      <Scheme />

      {/* faq contents */}
      <Faq />
    </>
  );
}
