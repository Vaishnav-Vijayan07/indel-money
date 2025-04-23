import ServiceBanner from "../../components/features/goldLoan/ServiceBanner";
import StepGoldLoan from "../../components/features/home/StepGoldLoan";
import StepGoldLoanCalculator from "../../components/features/home/StepGoldLoanCalculator";
import GoldLoanCriteria from "../../components/features/goldLoan/GoldLoanCriteria";
import InstantHasslefree from "../../components/features/goldLoan/InstantHasslefree";
import GoldLoanServices from "../../components/features/goldLoan/GoldLoanServices";
import GoldLoanScheme from "../../components/features/goldLoan/GoldLoanScheme";
import GoldLoanFaq from "../../components/features/goldLoan/GoldLoanFaq";

import MobServiceBanner from "../../components/features/goldLoan/MobServiceBanner";
import MobStepGoldLoan from "../../components/features/home/MobStepGoldLoan";
import MobStepGoldLoanCalculator from "../../components/features/home/MobStepGoldLoanCalculator";
import MobGoldLoanCriteria from "../../components/features/goldLoan/MobGoldLoanCriteria";
import MobInstantHasslefree from "../../components/features/goldLoan/MobInstantHasslefree";
import MobGoldLoanServices from "../../components/features/goldLoan/MobGoldLoanServices";
import MobGoldLoanScheme from "../../components/features/goldLoan/MobGoldLoanScheme";
import MobGoldLoanFaq from "../../components/features/goldLoan/MobGoldLoanFaq";

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
      <div className="hidden sm:block">
        <InstantHasslefree />
      </div>
      <div className="block sm:hidden">
        <MobInstantHasslefree />
      </div>

      {/* instant hussle free */}
      <div className="hidden sm:block">
        <GoldLoanServices />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanServices />
      </div>

      {/* Scheme */}
      <div className="hidden sm:block">
        <GoldLoanScheme />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanScheme />
      </div>

      {/* faq contents */}
      <div className="hidden sm:block">
        <GoldLoanFaq />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanFaq />
      </div>
    </>
  );
}
