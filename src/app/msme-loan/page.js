import KickStartVenture from "@/components/features/msmeloan/KickStartVenture";
import LoansList from "@/components/features/msmeloan/LoansList";
import WhyMsme from "@/components/features/msmeloan/WhyMsme";
import WhoDoServe from "@/components/features/msmeloan/WhoDoServe";
import MsmePresence from "@/components/features/msmeloan/MsmePresence";
import GrownWithMsme from "@/components/features/msmeloan/GrownWithMsme";

import MobKickStartVenture from "@/components/features/msmeloan/MobKickStartVenture";
import MobWhoDoServe from "@/components/features/msmeloan/MobWhoDoServe";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/msme`, {
      // cache: "no-store", // Ensure fresh data
      cache: "force-cache",
      next: { revalidate: 600 },
    });
    const result = await response.json();
    const msmeData = result.data;

    if (result.status === "success") {
      return {
        contents: msmeData?.msmeLoanContent,
        offerings: msmeData?.msmeOfferings,
        faqs: msmeData?.msmeLoanFaq,
        loanTypes: msmeData?.msmeLoanTypes,
        industries: msmeData?.msmeLoanSupportedIndustries,
        audience: msmeData?.msmeTargetedAudience,
        error: result.message,
      };
    }
    return {
      contents: null,
      offerings: null,
      faqs: null,
      loanTypes: null,
      industries: null,
      audience: null,
      error: result.message,
    };
  } catch (error) {
    return {
      contents: null,
      offerings: null,
      faqs: null,
      loanTypes: null,
      industries: null,
      audience: null,
      error: "Failed to fetch service data",
    };
  }
}
async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=msme`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "MSME Loan | My Website",
        description: meta?.meta_description || "Get the best MSME loan offers with us.",
        keywords: meta?.meta_keywords || "msme loan, offers, financial services",
        error: null,
      };
    }
    return {
      title: "MSME Loan | My Website",
      description: "Get the best MSME loan offers with us.",
      keywords: "msme loan, offers, financial services",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "MSME Loan | My Website",
      description: "Get the best MSME loan offers with us.",
      keywords: "msme loan, offers, financial services",
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

export default async function MsmeLoan() {
  const { contents, offerings, faqs, loanTypes, industries, audience, error } = await fetchData();

  if (error) {
    return <div>Failed to fetch MSME data</div>;
  }

  return (
    <>
      {/* KickStartVenture contents*/}
      <div className="hidden sm:block">
        <KickStartVenture
          title={contents?.title}
          sub_title={contents?.sub_title}
          description={contents?.description}
          button_text={contents?.button_text}
          button_url={contents?.button_url}
          our_offering_title={contents?.our_offering_title}
          our_offering_description={contents?.our_offering_description}
          offerings={offerings}
        />
      </div>
      {/* WhoDoServe Mobile contents*/}
      <div className="block sm:hidden">
        <MobKickStartVenture
          title={contents?.title}
          sub_title={contents?.sub_title}
          button_text={contents?.button_text}
          button_url={contents?.button_url}
          our_offering_title={contents?.our_offering_title}
          offerings={offerings}
        />
      </div>

      {/* LoanSlider contents*/}
      <LoansList loanTypes={loanTypes} />

      {/* WhyMsme contents*/}
      <WhyMsme
        title={contents?.why_msme_loan_title}
        description={contents?.why_msme_loan_description}
        image={contents?.why_msme_loan_image}
        alt={contents?.image_alt}
      />

      {/* WhoDoServe contents*/}
      <div className="hidden sm:block">
        <WhoDoServe audience={audience} who_do_serve_title={contents?.who_do_serve_title} />
      </div>
      {/* WhoDoServe Mobile contents*/}
      <div className="block sm:hidden">
        <MobWhoDoServe audience={audience} who_do_serve_title={contents?.who_do_serve_title} />
      </div>

      {/* MsmePresence contents*/}
      <MsmePresence title={contents?.about_msme_title} description={contents?.about_msme_description} audience={industries} />

      {/* Grown With Msme contents*/}
      <GrownWithMsme
        faqs={faqs}
        title={contents?.msme_loan_overview_title}
        description={contents?.msme_loan_overview_description}
      />
    </>
  );
}
