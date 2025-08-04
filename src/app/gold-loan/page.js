//export const dynamic = "force-dynamic";
import ServiceBanner from "../../components/features/goldLoan/ServiceBanner";
import StepGoldLoan from "../../components/features/home/StepGoldLoan";
import StepGoldLoanCalculator from "../../components/features/home/StepGoldLoanCalculator";
import GoldLoanCriteria from "../../components/features/goldLoan/GoldLoanCriteria";
import InstantHasslefree from "../../components/features/goldLoan/InstantHasslefree";
import GoldLoanServices from "../../components/features/goldLoan/GoldLoanServices";
import GoldLoanScheme from "../../components/features/goldLoan/GoldLoanScheme";
import GoldLoanFaqTab from "../../components/features/goldLoan/GoldLoanFaqTab";
import GoldLoanFaq from "../../components/features/goldLoan/GoldLoanFaq";

import MobServiceBanner from "../../components/features/goldLoan/MobServiceBanner";
import MobStepGoldLoan from "../../components/features/home/MobStepGoldLoan";
import MobStepGoldLoanCalculator from "../../components/features/home/MobStepGoldLoanCalculator";
import MobGoldLoanCriteria from "../../components/features/goldLoan/MobGoldLoanCriteria";
import MobInstantHasslefree from "../../components/features/goldLoan/MobInstantHasslefree";
import MobGoldLoanServices from "../../components/features/goldLoan/MobGoldLoanServices";
import MobGoldLoanScheme from "../../components/features/goldLoan/MobGoldLoanScheme";
import MobGoldLoanFaq from "../../components/features/goldLoan/MobGoldLoanFaq";
import { defaultMeta } from "@/constants/constants";

async function fetchGoldLoanData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/gold-loan`, {
      // cache: "no-store",
      cache: "force-cache",
      next: { revalidate: 600 },
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

async function fetchGoldRate() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/gold-rate`, {
      cache: "force-cache",
      next: { revalidate: 600 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result?.success && result?.goldRate) {
      return { data: result.goldRate, error: null };
    }

    return { data: null, error: result?.message || "Invalid response from gold rate API" };
  } catch (error) {
    return { data: null, error: "Failed to fetch gold rate" };
  }
}

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=goldloan`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || defaultMeta.title,
        description: meta?.meta_description || defaultMeta.description,
        keywords: meta?.meta_keywords || defaultMeta.keywords,
        // Enhanced SEO fields
        openGraph: {
          title: meta?.og_title || meta?.meta_title || defaultMeta.title,
          description: meta?.og_description || meta?.meta_description || defaultMeta.description,
          images: meta?.og_image ? [{ url: meta.og_image, width: 1200, height: 630 }] : [],
          type: "website",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/gold-loan`,
        },
        twitter: {
          card: "summary_large_image",
          title: meta?.twitter_title || meta?.meta_title || defaultMeta.title,
          description: meta?.twitter_description || meta?.meta_description || defaultMeta.description,
          images: meta?.twitter_image ? [meta.twitter_image] : [],
        },
        alternates: {
          canonical: meta?.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}/gold-loan`,
        },
        error: null,
      };
    }
    return {
      title: defaultMeta.title,
      description: defaultMeta.description,
      keywords: defaultMeta.keywords,
      openGraph: {
        title: defaultMeta.title,
        description: defaultMeta.description,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/gold-loan`,
      },
      twitter: {
        card: "summary_large_image",
        title: defaultMeta.title,
        description: defaultMeta.description,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/gold-loan`,
      },
      error: result.message || "No metadata found",
    };
  } catch (error) {
    return {
      title: defaultMeta.title,
      description: defaultMeta.description,
      keywords: defaultMeta.keywords,
      openGraph: {
        title: defaultMeta.title,
        description: defaultMeta.description,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/gold-loan`,
      },
      twitter: {
        card: "summary_large_image",
        title: defaultMeta.title,
        description: defaultMeta.description,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/gold-loan`,
      },

      error: result.message || "No metadata found",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords, twitter, openGraph, alternates } = await getMetaData();
  return {
    title,
    description,
    keywords,
    twitter,
    openGraph,
    alternates,
  };
}

export default async function GoldLoan() {
  const { steps, contents, bannerIcons, schemes, faqs, features, GoldloanBenefits, announcement } = await fetchGoldLoanData();
  const flattenedFeatures = features?.flat()?.filter((item) => !item.is_center);
  const { data: goldRateData, error: goldRateError } = await fetchGoldRate();
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
          banner_image_mobile={contents?.banner_image_mobile}
          goldRate={goldRateData}
        />
      </div>
      <div className="block sm:hidden">
        <MobServiceBanner
          bannerIcons={bannerIcons}
          title={contents?.page_title}
          announcement_text={announcement?.text}
          gold_rate_text={contents?.gold_rate_text}
          banner_image={contents?.banner_image_mobile}
          alt={contents?.banner_alt}
          goldRate={goldRateData}
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

      <GoldLoanFaqTab />

      {/* faq contents */}
      <div className="hidden sm:block">
        <GoldLoanFaq faqs={faqs} faq_title={contents?.faq_title} />
      </div>
      <div className="block sm:hidden">
        <MobGoldLoanFaq faqs={faqs} faq_title={contents?.faq_title} type="goldloan" />
      </div>
    </>
  );
}
