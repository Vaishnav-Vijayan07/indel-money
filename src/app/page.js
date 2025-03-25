import HeroBanner from "../components/features/home/HeroBanner";
import DreamsToReality from "../components/features/home/DreamsToReality";
import GoldLoanCalculator from "../components/features/home/GoldLoanCalculator";
import LifeAtIndel from "../components/features/home/LifeAtIndel";
import LatestUpdates from "../components/features/home/LatestUpdates";
import TrustedInvestment from "../components/features/home/TrustedInvestment";
import BranchLocator from "../components/features/home/BranchLocator";
import Innovations from "../components/features/home/Innovations";
import FAQ from "../components/features/home/FAQ";
import React from "react";
import WelcomeModal from "../components/common/WelcomeModal";


const FAQS = React.lazy(() => import("../components/features/home/FAQ"))

export default function Home() {
  return (
    <>
      {/* welcome contents*/}
      <WelcomeModal />
      
      {/* banner section contents*/}
      <HeroBanner />

      {/* Dreams to Reality contents*/}
      <DreamsToReality />

      {/* Gold loan calculator contents*/}
      <GoldLoanCalculator />

      {/* Branch locator contents*/}
      <BranchLocator variant={"home"} />

      {/* Life at Indel contents*/}
      <LifeAtIndel />

      {/* Latest Updates contents*/}
      <LatestUpdates />

      {/* Trusted investment contents*/}
      <TrustedInvestment />

      {/* Innovations*/}
      <Innovations />

      {/* faq contents */}
      <FAQ />
    </>
  );
}


