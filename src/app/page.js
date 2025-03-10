import React from "react";
import HeroBanner from "@/components/features/home/HeroBanner";
import DreamsToReality from "../components/features/home/DreamsToReality";
import GoldLoanCalculator from "../components/features/home/GoldLoanCalculator";
import LifeAtIndel from "../components/features/home/LifeAtIndel";
import LatestUpdates from "../components/features/home/LatestUpdates";
import TrustedInvestment from "../components/features/home/TrustedInvestment";
import BranchLocator from "../components/features/home/BranchLocator";
import Innovations from "../components/features/home/Innovations";

import FAQ from "../components/features/home/FAQ";

const FAQS = React.lazy(() => import("../components/features/home/FAQ"))

export default function Home() {
  return (
    <>
      {/* banner section contents*/}
      <HeroBanner />

      {/* Dreams to Reality contents*/}
      <DreamsToReality />

      {/* Gold loan calculator contents*/}
      <GoldLoanCalculator />

      {/* Life at Indel contents*/}
      <LifeAtIndel />

      {/* Latest Updates contents*/}
      <LatestUpdates />

      {/* Trusted investment contents*/}
      <TrustedInvestment />

      {/* Innovations*/}
      <Innovations />

      {/* Branch locator contents*/}
      <BranchLocator />

      {/* faq contents */}
      <FAQ />
    </>
  );
}
