
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

const FAQS = React.lazy(() => import("../components/features/home/FAQ"));

export default function Home() {
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");
  return (
    <>
      {/* welcome contents*/}
      {isMobile ? <MobWelcomeModal /> : <WelcomeModal />}

      {/* banner section contents*/}
      <div className="hidden sm:block">
        <HeroBanner />
      </div>
      <div className="block sm:hidden">
        <MobHeroBanner />
      </div>

      {/* Dreams to Reality contents*/}
      <div className="hidden sm:block">
        <DreamsToReality />
      </div>
      <div className="block sm:hidden">
        <MobSmartMoneyDeals />
      </div>

      {/* Gold loan contents*/}
      <div className="hidden sm:block">
        <StepGoldLoan />
      </div>
      <div className="block sm:hidden">
        <MobStepGoldLoan />
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
        <BranchLocator variant={"home"} />
      </div>
      <div className="block sm:hidden">
        <MobBranchLocator />
      </div>

      {/* Life at Indel contents*/}
      <div className="hidden sm:block">
        <LifeAtIndel />
      </div>
      <div className="block sm:hidden">
        <MobJoinTeam />
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
        <TrustedInvestment />
      </div>

      {/* Innovations*/}
      <div className="hidden sm:block">
        <Innovations />
      </div>
      <div className="block sm:hidden">
        <MobInnovations />
      </div>

      {/* faq contents */}
      <div className="hidden sm:block">
        <FAQ />
      </div>
    </>
  );
}
