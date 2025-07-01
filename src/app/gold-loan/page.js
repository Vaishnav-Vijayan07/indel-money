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
import { title } from "process";

async function fetchGoldLoanData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/gold-loan`, {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();
    const goldloanData = result.data;

    if (result.status === "success") {
      return {
        steps: goldloanData.Steps,
        announcement: goldloanData.announcement,
        contents: goldloanData.GoldloanContent,
        bannerIcons: goldloanData.GoldloanBannerFeatures,
        schemes: goldloanData.schemes,
        faqs: goldloanData.GoldLoanFaq,
        features: goldloanData.GoldLoanFeatures,
        GoldloanBenefits: goldloanData.GoldloanBenefits,
        error: null,
      };
    }
    return {
      steps: null,
      contents: null,
      announcement: null,
      bannerIcons: null,
      GoldloanBenefits: null,
      schemes: null,
      faqs: null,
      features: null,
      error: result.message,
    };
  } catch (error) {
    return {
      steps: null,
      contents: null,
      announcement: null,
      bannerIcons: null,
      schemes: null,
      faqs: null,
      features: null,
      GoldloanBenefits: null,
      error: "Failed to fetch service data",
    };
  }
}

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=goldloan`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "Gold Loan | My Website",
        description: meta?.meta_description || "Get the best gold loan offers with us.",
        keywords: meta?.meta_keywords || "gold loan, offers, financial services",
        error: null,
      };
    }
    return {
      title: "Gold Loan | My Website",
      description: "Get the best gold loan offers with us.",
      keywords: "gold loan, offers, financial services",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "Gold Loan | My Website",
      description: "Get the best gold loan offers with us.",
      keywords: "gold loan, offers, financial services",
      error: "Failed to fetch service data",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords } = await getMetaData();

  return {
    title,
    description,
    keywords,
  };
}

export default async function GoldLoan() {
  const { steps, contents, bannerIcons, schemes, faqs, features, GoldloanBenefits, announcement } = await fetchGoldLoanData();
  const flattenedFeatures = features?.flat()?.filter((item) => !item.is_center);

  if (!contents && !bannerIcons && !schemes && !faqs && !features) {
    return <div>Failed to fetch Gold Loan data</div>;
  }

  return (
    <>
      {/* Gold loan calculator contents*/}
      <div className="hidden sm:block">
        <ServiceBanner
          bannerIcons={bannerIcons}
          title={contents?.page_title}
          announcement_text={announcement?.text}
          gold_rate_text={contents?.gold_rate_text}
          banner_image={contents?.banner_image}
          alt={contents?.banner_alt}
        />
      </div>
      <div className="block sm:hidden">
        <MobServiceBanner
          bannerIcons={bannerIcons}
          title={contents?.page_title}
          announcement_text={announcement?.text}
          gold_rate_text={contents?.gold_rate_text}
          banner_image={contents?.banner_image}
          alt={contents?.banner_alt}
        />
      </div>

      {/* Gold loan contents*/}
      <div id="gold-loan-steps" className="hidden sm:block">
        <StepGoldLoan
          className="py-[30px] lg:py-[40px] 2xl:py-[80px] 3xl:py-[100px]"
          hideTitle={true}
          loanSteps={steps}
          title={contents?.gold_loan_step_title}
        />
      </div>
      <div className="block sm:hidden">
        <MobStepGoldLoan loanSteps={steps} className="py-[30px_20px]" title={contents?.gold_loan_step_title} />
      </div>

      {/* Gold loan steps */}
      <div id="easy-step" className="hidden sm:block">
        <GoldLoanCriteria
          title={contents?.gold_loan_step_title}
          eligibilityTitle={contents?.eligibility_title}
          description={contents?.description}
          documentationTitle={contents?.documentation_title}
          documentationDescription={contents?.documentation_description}
          identityProofTitle={contents?.identity_proof_title}
          identityProof={contents?.identity_proof_description}
          addressProofTitle={contents?.address_proof}
          addressProof={contents?.address_proof_description}
          image={contents?.steps_image}
        />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanCriteria
          title={contents?.gold_loan_step_title}
          description={contents?.description}
          idProofTitle={contents?.identity_proof_title}
          identityProof={contents?.identity_proof_description}
          addressProofTitle={contents?.address_proof}
          addressProof={contents?.address_proof_description}
          image={contents?.steps_image}
        />
      </div>

      {/* Gold loan calculator contents*/}
      <div className="hidden sm:block">
        <StepGoldLoanCalculator className="py-[30px] lg:py-[40px] 2xl:py-[80px] 3xl:py-[100px]" />
      </div>
      <div className="block sm:hidden">
        <MobStepGoldLoanCalculator />
      </div>

      {/* instant hussle free */}
      <div id="hassle-free" className="hidden sm:block">
        <InstantHasslefree
          title={contents?.gold_loan_title}
          description={contents?.gold_loan_description}
          hassle_free_image={contents?.hassle_free_image}
          hassle_free_image_alt={contents?.hassle_free_image_alt}
          GoldloanBenefits={GoldloanBenefits}
        />
      </div>
      <div className="block sm:hidden">
        <MobInstantHasslefree
          title={contents?.gold_loan_title}
          description={contents?.gold_loan_description}
          hassle_free_image={contents?.hassle_free_image}
          hassle_free_image_alt={contents?.hassle_free_image_alt}
          GoldloanBenefits={GoldloanBenefits}
        />
      </div>

      {/* instant hussle free */}
      <div className="hidden sm:block">
        <GoldLoanServices features={features} />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanServices features={flattenedFeatures} />
      </div>

      {/* Scheme */}
      <div id="scheme" className="hidden sm:block">
        <GoldLoanScheme goldLoanSchemes={schemes} scheme_title={contents?.scheme_title} />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanScheme goldLoanSchemes={schemes} scheme_title={contents?.scheme_title} />
      </div>

      {/* faq contents */}
      <div className="hidden sm:block">
        <GoldLoanFaq faqs={faqs} faq_title={contents?.faq_title} />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanFaq faqs={faqs} faq_title={contents?.faq_title} />
      </div>
    </>
  );
}
