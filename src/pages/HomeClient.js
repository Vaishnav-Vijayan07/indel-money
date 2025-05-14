"use client";
import { useMediaQuery } from "@react-hook/media-query";

import React from "react";
// DESKTOP COMPONENTS
import HeroBanner from "../components/features/home/HeroBanner";
import DreamsToReality from "../components/features/home/DreamsToReality";
import StepGoldLoan from "../components/features/home/StepGoldLoan";
import StepGoldLoanCalculator from "../components/features/home/StepGoldLoanCalculator";
import LifeAtIndel from "../components/features/home/LifeAtIndel";
import LatestUpdates from "../components/features/home/LatestUpdates";
import TrustedInvestment from "../components/features/home/TrustedInvestment";
import BranchLocator from "../components/features/home/BranchLocator";
import Innovations from "../components/features/home/Innovations";
import FAQ from "../components/features/home/FAQ";
import WelcomeModal from "../components/common/WelcomeModal";
// MOBILE COMPONENTS
import MobHeroBanner from "../components/features/home/MobHeroBanner";
import MobSmartMoneyDeals from "../components/features/home/MobSmartMoneyDeals";
import MobStepGoldLoan from "../components/features/home/MobStepGoldLoan";
import MobStepGoldLoanCalculator from "../components/features/home/MobStepGoldLoanCalculator";
import MobBranchLocator from "../components/features/home/MobBranchLocator";
import MobJoinTeam from "../components/features/home/MobJoinTeam";
import MobLatestUpdates from "../components/features/home/MobLatestUpdates";
import MobInnovations from "../components/features/home/MobInnovations";
import MobWelcomeModal from "../components/common/MobWelcomeModal";

export default function Home({ initialData, initialError }) {
  

  const isMobile = useMediaQuery("only screen and (max-width: 768px)");
  return (
    <>
      {/* welcome contents*/}
      {isMobile ? <MobWelcomeModal /> : <WelcomeModal />}

      {/* banner section contents*/}
      <div className="hidden sm:block">
        <HeroBanner heroBanner={initialData?.heroBanner || []} initialData={initialData} />
      </div>
      <div className="block sm:hidden">
        <MobHeroBanner heroBanner={initialData?.heroBanner || []} initialData={initialData} />
      </div>

      {/* Dreams to Reality contents*/}
      <div className="hidden sm:block">
        <DreamsToReality initialData={initialData?.pageContent} statsData={initialData?.homeStatistics} />
      </div>
      <div className="block sm:hidden">
        {/* Develope api for smart money deals */}
        <MobSmartMoneyDeals initialData={initialData} />
      </div>

      {/* Gold loan contents*/}
      <div className="hidden sm:block">
        <StepGoldLoan loanSteps={initialData?.loanSteps} sectionTitle={initialData?.pageContent?.step_title} />
      </div>
      <div className="block sm:hidden">
        <MobStepGoldLoan loanSteps={initialData?.loanSteps} />
      </div>

      {/* Gold loan calculator*/}
      <div className="hidden sm:block">
        <StepGoldLoanCalculator />
      </div>
      <div className="block sm:hidden">
        <MobStepGoldLoanCalculator />
      </div>

      {/* Branch locator contents*/}
      <div className="hidden sm:block">
        <BranchLocator pageContent={initialData?.pageContent} variant={"home"} />
      </div>
      <div className="block sm:hidden">
        <MobBranchLocator />
      </div>

      {/* Life at Indel contents*/}
      <div className="hidden sm:block">
        <LifeAtIndel pageContent={initialData?.pageContent} /> 
      </div>
      <div className="block sm:hidden">
        <MobJoinTeam pageContent={initialData?.pageContent} />
      </div>

      {/* Latest Updates contents*/}
      <div className="hidden sm:block">
        <LatestUpdates />
      </div>
      <div className="block sm:hidden">
        <MobLatestUpdates />
      </div>

      {/* Trusted investment contents*/}
      <div className="hidden sm:block">
        <TrustedInvestment pageContent={initialData?.pageContent} />
      </div>

      {/* Innovations*/}
      <div className="hidden sm:block">
        <Innovations pageContent={initialData?.pageContent} />
      </div>
      <div className="block sm:hidden">
        <MobInnovations />
      </div>

      {/* faq contents */}
      <div className="hidden sm:block">
        <FAQ faqs={initialData?.faqs} pageContents={initialData?.pageContent} />
      </div>
    </>
  );
}
