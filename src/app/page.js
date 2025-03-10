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
import Image from "next/image";

const FAQS = React.lazy(() => import("../components/features/home/FAQ"))

export default function Home() {
  return (
    <>
    <Image src={"/images/home-bg.jpg"} width={1920} height={9526} alt="home bg" className="absolute z-1 top-0 left-0 opacity-50 pointer-events-none" />
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
