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
    const response = await fetch("http://localhost:7700/api/web/msme", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();
    const msmeData = result.data;

    if (result.status === "success") {

      return { contents: msmeData?.msmeLoanContent, offerings: msmeData?.msmeOfferings, faqs: msmeData?.msmeLoanFaq, error: result.message };
    }
    return { contents: null, offerings: null, faqs: null, error: result.message };
  } catch (error) {
    return { contents: null, offerings: null, faqs: null, error: "Failed to fetch service data" };
  }
}

export default async function MsmeLoan() {

  const { contents, offerings, faqs, error } = await fetchData();


  return (
    <>
      {/* KickStartVenture contents*/}
      <div className="hidden sm:block">
        <KickStartVenture title={contents?.title} sub_title={contents?.sub_title} description={contents?.description} button_text={contents?.button_text} button_url={contents?.button_url} our_offering_title={contents?.our_offering_title} our_offering_description={contents?.our_offering_description} offerings={offerings} />
      </div>
      {/* WhoDoServe Mobile contents*/}
      <div className="block sm:hidden">
        <MobKickStartVenture />
      </div>

      {/* LoanSlider contents*/}
      <LoansList />

      {/* WhyMsme contents*/}
      <WhyMsme />

      {/* WhoDoServe contents*/}
      <div className="hidden sm:block">
        <WhoDoServe />
      </div>
      {/* WhoDoServe Mobile contents*/}
      <div className="block sm:hidden">
        <MobWhoDoServe />
      </div>

      {/* MsmePresence contents*/}
      <MsmePresence />

      {/* Grown With Msme contents*/}
      <GrownWithMsme faqs={faqs} />
    </>
  );
}
