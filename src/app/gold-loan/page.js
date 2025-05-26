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

async function fetchGoldLoanData() {
  try {
    const response = await fetch("http://localhost:7700/api/web/gold-loan", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();
    const goldloanData = result.data;

    if (result.status === "success") {
      return { contents: goldloanData.GoldloanContent, bannerIcons: goldloanData.GoldloanBannerFeatures, schemes: goldloanData.schemes, faqs: goldloanData.GoldLoanFaq, features: goldloanData.GoldLoanFeatures, error: null };
    }
    return { contents: null, bannerIcons: null, schemes: null, faqs: null, features: null, error: result.message };
  } catch (error) {
    return { contents: null, bannerIcons: null, schemes: null, faqs: null, features: null, error: "Failed to fetch service data" };
  }
}

export default async function GoldLoan() {
  const { contents, bannerIcons, schemes, faqs, features, error } = await fetchGoldLoanData();


  return (
    <>
      {/* Gold loan calculator contents*/}
      <div className="hidden sm:block">
        <ServiceBanner
          bannerIcons={bannerIcons}
          title={contents?.page_title}
          announcement_text={contents?.announcement_text}
          gold_rate_text={contents?.gold_rate_text}
        />
      </div>
      <div className="block sm:hidden">
        <MobServiceBanner />
      </div>

      {/* Gold loan contents*/}
      <div className="hidden sm:block">
        <StepGoldLoan className="py-[30px] lg:py-[40px] 2xl:py-[80px] 3xl:py-[100px]" hideTitle={true} />
      </div>
      <div className="block sm:hidden">
        <MobStepGoldLoan className="py-[30px_20px]" />
      </div>

      {/* Gold loan steps */}
      <div className="hidden sm:block">
        <GoldLoanCriteria
          title={contents?.gold_loan_step_title}
          description={contents?.description}
          idProofTitle={contents?.identity_proof_title}
          identityProof={contents?.identity_proof_description}
          addressProofTitle={contents?.address_proof}
          addressProof={contents?.address_proof_description}
          image={contents?.steps_image}
        />
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
        <InstantHasslefree title={contents?.gold_loan_title}  description={contents?.gold_loan_description} />
      </div>
      <div className="block sm:hidden">
        <MobInstantHasslefree />
      </div>

      {/* instant hussle free */}
      <div className="hidden sm:block">
        <GoldLoanServices features={features} />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanServices />
      </div>

      {/* Scheme */}
      <div className="hidden sm:block">
        <GoldLoanScheme goldLoanSchemes={schemes} scheme_title={contents?.scheme_title} />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanScheme />
      </div>

      {/* faq contents */}
      <div className="hidden sm:block">
        <GoldLoanFaq faqs={faqs} faq_title={contents?.faq_title} />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanFaq />
      </div>
    </>
  );
}
