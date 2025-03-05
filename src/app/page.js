import React from "react";
import HeroBanner from "@/components/features/home/HeroBanner";
import MoneyDeals from "../components/features/home/MoneyDeals";
import DreamsToReality from "../components/features/home/DreamsToReality";
import GoldLoanCalculator from "../components/features/home/GoldLoanCalculator";
import LifeAtIndel from "../components/features/home/LifeAtIndel";
import LatestUpdates from "../components/features/home/LatestUpdates";
import TrustedInvestment from "../components/features/home/TrustedInvestment";
import BranchLocator from "../components/features/home/BranchLocator";
import FAQ from "../components/features/home/FAQ";

const FAQS = React.lazy(() => import("../components/features/home/FAQ"))

export default function Home() {
  return (
    <div>
      <main>
        {/* banner section contents*/}
        <HeroBanner />

        {/* Dreams to Reality contents*/}
        <DreamsToReality />

        {/* Smart Money Deals contents*/}
        <MoneyDeals />



        {/* Gold loan calculator contents*/}
        <GoldLoanCalculator />

        {/* Life at Indel contents*/}
        <LifeAtIndel />

        {/* Latest Updates contents*/}
        <LatestUpdates />

        {/* Trusted investment contents*/}
        <TrustedInvestment />

        {/* Branch locator contents*/}
        <BranchLocator />

        {/* faq contents */}
        <FAQS />
      </main>
    </div>
  );
}
