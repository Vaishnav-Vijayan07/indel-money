"use client";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@react-hook/media-query";
// DESKTOP COMPONENTS
const HeroBanner = dynamic(() => import("../components/features/home/HeroBanner"), { ssr: false });
const DreamsToReality = dynamic(() => import("../components/features/home/DreamsToReality"), { ssr: false });
const StepGoldLoan = dynamic(() => import("../components/features/home/StepGoldLoan"), { ssr: false });
const StepGoldLoanCalculator = dynamic(() => import("../components/features/home/StepGoldLoanCalculator"), { ssr: false });
const LifeAtIndel = dynamic(() => import("../components/features/home/LifeAtIndel"), { ssr: false });
const LatestUpdates = dynamic(() => import("../components/features/home/LatestUpdates"), { ssr: false });
const TrustedInvestment = dynamic(() => import("../components/features/home/TrustedInvestment"), { ssr: false });
const BranchLocator = dynamic(() => import("../components/features/home/BranchLocator"), { ssr: false });
const Innovations = dynamic(() => import("../components/features/home/Innovations"), { ssr: false });
const FAQ = dynamic(() => import("../components/features/home/FAQ"), { ssr: false });
const WelcomeModal = dynamic(() => import("../components/common/WelcomeModal"), { ssr: false });

// MOBILE COMPONENTS
const MobHeroBanner = dynamic(() => import("../components/features/home/MobHeroBanner"), { ssr: false });
const MobSmartMoneyDeals = dynamic(() => import("../components/features/home/MobSmartMoneyDeals"), { ssr: false });
const MobStepGoldLoan = dynamic(() => import("../components/features/home/MobStepGoldLoan"), { ssr: false });
const MobStepGoldLoanCalculator = dynamic(() => import("../components/features/home/MobStepGoldLoanCalculator"), { ssr: false });
const MobBranchLocator = dynamic(() => import("../components/features/home/MobBranchLocator"), { ssr: false });
const MobJoinTeam = dynamic(() => import("../components/features/home/MobJoinTeam"), { ssr: false });
const MobLatestUpdates = dynamic(() => import("../components/features/home/MobLatestUpdates"), { ssr: false });
const MobInnovations = dynamic(() => import("../components/features/home/MobInnovations"), { ssr: false });
const MobWelcomeModal = dynamic(() => import("../components/common/MobWelcomeModal"), { ssr: false });

// const DreamsToReality = lazy(() => import("../components/features/home/DreamsToReality"));
// const StepGoldLoan = lazy(() => import("../components/features/home/StepGoldLoan"));
// const StepGoldLoanCalculator = lazy(() => import("../components/features/home/StepGoldLoanCalculator"));
// const LifeAtIndel = lazy(() => import("../components/features/home/LifeAtIndel"));
// const LatestUpdates = lazy(() => import("../components/features/home/LatestUpdates"));
// const TrustedInvestment = lazy(() => import("../components/features/home/TrustedInvestment"));
// const BranchLocator = lazy(() => import("../components/features/home/BranchLocator"));
// const Innovations = lazy(() => import("../components/features/home/Innovations"));
// const FAQ = lazy(() => import("../components/features/home/FAQ"));
// const WelcomeModal = lazy(() => import("../components/common/WelcomeModal"));

// // MOBILE COMPONENTS
// const MobHeroBanner = lazy(() => import("../components/features/home/MobHeroBanner"));
// const MobSmartMoneyDeals = lazy(() => import("../components/features/home/MobSmartMoneyDeals"));
// const MobStepGoldLoan = lazy(() => import("../components/features/home/MobStepGoldLoan"));
// const MobStepGoldLoanCalculator = lazy(() => import("../components/features/home/MobStepGoldLoanCalculator"));
// const MobBranchLocator = lazy(() => import("../components/features/home/MobBranchLocator"));
// const MobJoinTeam = lazy(() => import("../components/features/home/MobJoinTeam"));
// const MobLatestUpdates = lazy(() => import("../components/features/home/MobLatestUpdates"));
// const MobInnovations = lazy(() => import("../components/features/home/MobInnovations"));
// const MobWelcomeModal = lazy(() => import("../components/common/MobWelcomeModal"));

export default function Home({ initialData, serviceBanner, banner, branchLocatorData, initialError }) {
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");
  return (
    <>
      {/* welcome contents*/}
      {isMobile ? (
        <MobWelcomeModal />
      ) : banner || serviceBanner ? (
        <WelcomeModal banner={banner} serviceBanner={serviceBanner} />
      ) : null}

      {/* banner section contents*/}
      <div className="hidden sm:block">
        <HeroBanner
          heroBanner={initialData?.heroBanner || []}
          initialData={initialData}
          announcement={initialData?.pageContent?.announcement_text}
        />
      </div>
      <div className="block sm:hidden">
        <MobHeroBanner
          heroBanner={initialData?.heroBanner || []}
          initialData={initialData}
          announcement={initialData?.pageContent?.announcement_text}
        />
      </div>

      {/* Dreams to Reality contents*/}
      <div className="hidden sm:block">
        <DreamsToReality initialData={initialData?.pageContent} statsData={initialData?.homeStatistics} />
      </div>
      <div className="block sm:hidden">
        {/* Develope api for smart money deals */}
        <MobSmartMoneyDeals title={initialData?.pageContent?.smart_deal_title} deals={initialData?.smartMoneyDeals} />
      </div>

      {/* Gold loan contents*/}
      <div id="gold-loan-steps" className="hidden sm:block">
        <StepGoldLoan loanSteps={initialData?.loanSteps} sectionTitle={initialData?.pageContent?.step_title} />
      </div>
      <div className="block sm:hidden">
        <MobStepGoldLoan title={"sample"} loanSteps={initialData?.loanSteps} />
      </div>

      {/* Gold loan calculator*/}
      <div id="calculator" className="hidden sm:block">
        <StepGoldLoanCalculator />
      </div>
      <div className="block sm:hidden">
        <MobStepGoldLoanCalculator />
      </div>

      {/* Branch locator contents*/}
      <div className="hidden sm:block" id="branch-locator">
        <BranchLocator pageContent={branchLocatorData} variant={"home"} />
      </div>
      <div className="block sm:hidden" id="branch-locator">
        {/* Develope api for branch locator */}
        <MobBranchLocator pageContent={branchLocatorData} />
      </div>

      {/* Life at Indel contents*/}
      <div className="hidden sm:block">
        <LifeAtIndel
          pageContent={initialData?.pageContent}
          lifeAtIndel={initialData?.lifeAtIndel}
          image1={initialData?.pageContent?.life_section_image1}
          image2={initialData?.pageContent?.life_section_image2}
          image3={initialData?.pageContent?.life_section_image3}
        />
      </div>
      <div className="block sm:hidden">
        <MobJoinTeam
          pageContent={initialData?.pageContent}
          lifeAtIndel={initialData?.lifeAtIndel}
          image1={initialData?.pageContent?.life_section_image1}
          image2={initialData?.pageContent?.life_section_image2}
          image3={initialData?.pageContent?.life_section_image3}
        />
      </div>

      {/* Latest Updates contents*/}
      <div className="hidden sm:block">
        <LatestUpdates
          sliderItems={initialData?.blogs}
          sliderTitle={initialData?.pageContent?.updates_section_title}
          type="indel-money-cares"
        />
      </div>
      <div className="block sm:hidden">
        <MobLatestUpdates sliderItems={initialData?.blogs} sliderTitle={initialData?.pageContent?.updates_section_title} />
      </div>

      {/* <div className="hidden sm:block">
        <TrustedInvestment pageContent={initialData?.pageContent} />
      </div> */}

      {/* Innovations*/}
      <div className="hidden sm:block">
        <Innovations pageContent={initialData?.pageContent} />
      </div>
      <div className="block sm:hidden">
        <MobInnovations pageContent={initialData?.pageContent} />
      </div>

      {/* faq contents */}
      <div className="hidden sm:block">
        <FAQ faqs={initialData?.faqs} pageContents={initialData?.pageContent} />
      </div>
    </>
  );
}
