import React from "react";
// DESKTOP COMPONENTS
import HeroBanner from "../components/features/home/HeroBanner";
import DreamsToReality from "../components/features/home/DreamsToReality";
import GoldLoanCalculator from "../components/features/home/GoldLoanCalculator";
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
import MobBranchLocator from "../components/features/home/MobBranchLocator";
import MobJoinTeam from "../components/features/home/MobJoinTeam";
import MobLatestUpdates from "../components/features/home/MobLatestUpdates";
import MobInnovations from "../components/features/home/MobInnovations";
import MobWelcomeModal from "../components/common/MobWelcomeModal";

const FAQS = React.lazy(() => import("../components/features/home/FAQ"));

export default function Home() {
  return (
    <>
      {/* welcome contents*/}
      <WelcomeModal />
      {/* <MobWelcomeModal /> */}

      {/* banner section contents*/}
      <HeroBanner />
      {/* <MobHeroBanner /> */}

      {/* Dreams to Reality contents*/}
      <DreamsToReality />
      {/* <MobSmartMoneyDeals /> */}

      {/* Gold loan calculator contents*/}
      <GoldLoanCalculator />
      {/* <MobStepGoldLoan /> */}

      {/* Branch locator contents*/}
      <BranchLocator variant={"home"} />
      {/* <MobBranchLocator /> */}

      {/* Life at Indel contents*/}
      <LifeAtIndel />
      {/* <MobJoinTeam /> */}

      {/* Latest Updates contents*/}
      <LatestUpdates />
      {/* <MobLatestUpdates /> */}

      {/* Trusted investment contents*/}
      <TrustedInvestment />

      {/* Innovations*/}
      <Innovations />
      {/* <MobInnovations /> */}

      {/* faq contents */}
      <FAQ />
    </>
  );
}
