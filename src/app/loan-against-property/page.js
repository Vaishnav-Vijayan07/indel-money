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
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/loan-against-property`, {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();
    const loanAgainstPropertyData = result.data;

    if (result.status === "success") {
      return {
        contents: loanAgainstPropertyData?.loanAgainstPropertyContent,
        offerings: loanAgainstPropertyData?.loanPropertyOfferings,
        faqs: loanAgainstPropertyData?.loanAgainstPropertyFaq,
        loanTypes: loanAgainstPropertyData?.loanAgainstPropertyTypes,
        industries: loanAgainstPropertyData?.loanAgainstPropertySupportedIndustries,
        audience: loanAgainstPropertyData?.loanAgainstPropertyTargetedAudience,
        error: result.message,
      };
    }
    return { contents: null, offerings: null, faqs: null, loanTypes: null, industries: null, audience: null, error: result.message };
  } catch (error) {
    return { contents: null, offerings: null, faqs: null, loanTypes: null, industries: null, audience: null, error: "Failed to fetch service data" };
  }
}

export default async function LapLoan() {
  const { contents, offerings, faqs, loanTypes, industries, audience, error } = await fetchData();

  if (error) {
    return <div>Failed to fetch LAP data</div>;
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

      {/* WhyLAP contents*/}
      <WhyMsme
        title={contents?.why_loan_against_property_title}
        description={contents?.why_loan_against_property_description}
        image={contents?.why_loan_against_property_image}
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

      {/* LapPresence contents*/}
      <MsmePresence
        title={contents?.about_loan_against_property_title}
        description={contents?.about_loan_against_property_description}
        audience={industries}
      />

      {/* Grown With Lap contents*/}
      <GrownWithMsme
        faqs={faqs}
        title={contents?.loan_against_property_overview_title}
        description={contents?.loan_against_property_overview_description}
      />
    </>
  );
}
