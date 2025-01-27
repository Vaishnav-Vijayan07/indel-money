import HeroBanner from "@/components/features/home/HeroBanner";
import MoneyDeals from "../components/features/home/MoneyDeals";
import DreamsToReality from "../components/features/home/DreamsToReality";
import GoldLoanCalculator from "../components/features/home/GoldLoanCalculator";
import LifeAtIndel from "../components/features/home/LifeAtIndel";
import LatestUpdates from "../components/features/home/LatestUpdates";
import TrustedInvestment from "../components/features/home/TrustedInvestment";
import BranchLocator from "../components/features/home/BranchLocator";
import FAQ from "../components/features/home/FAQ";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      {/* banner section contents*/}
      <HeroBanner styles={styles} />

      {/* Smart Money Deals contents*/}
      <MoneyDeals styles={styles} />

      {/* Dreams to Reality contents*/}
      <DreamsToReality styles={styles} />

      {/* Gold loan calculator contents*/}
      <GoldLoanCalculator styles={styles} />

      {/* Life at Indel contents*/}
      <LifeAtIndel styles={styles} />

      {/* Latest Updates contents*/}
      <LatestUpdates styles={styles} />

      {/* Trusted investment contents*/}
      <TrustedInvestment styles={styles} />

      {/* Branch locator contents*/}
      <BranchLocator styles={styles} />

      {/* faq contents */}
      <FAQ styles={styles} />
    </>
  );
}
