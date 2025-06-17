// import ServiceBanner from "@/components/features/services/ServiceBanner";
// import OtherGoldLoan from "@/components/features/services/OtherGoldLoan";
// import SmartMoneyDeal from "@/components/features/services/SmartMoneyDeal";
// import IndelRemit from "@/components/features/services/IndelRemit";

// async function fetchManagementData() {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/our-services`, {
//       cache: "no-store", // Ensure fresh data
//     });
//     const result = await response.json();
//     const serviceData = result.data;

//     if (result.status === "success") {
//       return { serviceContent: serviceData.serviceContent, services: serviceData.services, error: null };
//     }
//     return { serviceContent: null, services: null, error: result.message };
//   } catch (error) {
//     return { serviceContent: null, services: null, error: "Failed to fetch service data" };
//   }
// }

// export default async function Services() {
//   const { serviceContent, services, error } = await fetchManagementData();

//   if (!serviceContent || !services) {
//     return <div>Failed to fetch about data</div>;
//   }

//   return (
//     <div className="relative">
//       <div className="absolute bottom-[7%] left-0 w-full h-[65%] md:h-[55%] xl:h-[59%] bg-gradient-to-r from-[rgba(243,0,0,0)] to-[rgba(235,2,8,0.10)] z-0 sm:block hidden"></div>

//       {/* InnerBanner contents */}
//       <ServiceBanner
//         page_title={serviceContent?.page_title}
//         page_super_title={serviceContent?.page_super_title}
//         image={serviceContent?.banner_image}
//         alt={serviceContent?.banner_alt}
//       />

//       {/* SmartMoneyDeal contents */}
//       <SmartMoneyDeal
//         deals_description={serviceContent?.deals_description}
//         deals_title={serviceContent?.deals_title}
//         benfits_title={serviceContent?.benfits_title}
//         title={serviceContent?.gold_loan_title}
//         desc={serviceContent?.gold_title_description}
//         image={serviceContent?.gold_loan_image}
//         alt={serviceContent?.gold_loan_image_alt}
//       />

//       {/* OtherGoldLoan contents */}
//       <OtherGoldLoan services={services} />

//       {/* IndelRemit contents */}
//       <IndelRemit
//         remit_section_description={serviceContent?.remit_section_description}
//         remit_section_title={serviceContent?.remit_section_title}
//         image={serviceContent?.image}
//         remit_section_button_link={serviceContent?.remit_section_button_link}
//         remit_section_button_title={serviceContent?.remit_section_button_title}
//       />
//     </div>
//   );
// }


import KickStartVenture from "@/components/features/loanAgainstProperty/KickStartVenture";
import LoansList from "@/components/features/loanAgainstProperty/LoansList";
import WhyLAP from "@/components/features/loanAgainstProperty/WhyLAP";
import WhoDoServe from "@/components/features/loanAgainstProperty/WhoDoServe";
import LapPresence from "@/components/features/loanAgainstProperty/LapPresence";
import GrownWithLAP from "@/components/features/loanAgainstProperty/GrownWithLAP";

import MobKickStartVenture from "@/components/features/loanAgainstProperty/MobKickStartVenture";
import MobWhoDoServe from "@/components/features/loanAgainstProperty/MobWhoDoServe";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/loan-against-property`, {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();
    const loanAgainstPropertyData = result.data;

    if (result.status === "success") {

      console.log(loanAgainstPropertyData);
      


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
        <MobKickStartVenture />
      </div>

      {/* LoanSlider contents*/}
      <LoansList loanTypes={loanTypes} />

      {/* WhyLAP contents*/}
      <WhyLAP
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
      <div className="block sm:hidden">{/* <MobWhoDoServe /> */}</div>

      {/* LapPresence contents*/}
      <LapPresence title={contents?.about_loan_against_property_title} description={contents?.about_loan_against_property_description} audience={industries} />

      {/* Grown With Lap contents*/}
      <GrownWithLAP faqs={faqs} title={contents?.loan_against_property_overview_title} description={contents?.loan_against_property_overview_description} />
    </>
  );
}


