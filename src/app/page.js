import HeroBanner from "@/app/components/home/HeroBanner";
import styles from "@/styles/pages/Home.module.scss";
import MoneyDeals from "./components/home/MoneyDeals";
import DreamsToReality from "./components/home/DreamsToReality";
import GoldLoanCalculator from "./components/home/GoldLoanCalculator";
import LifeAtIndel from "./components/home/LifeAtIndel";
import LatestUpdates from "./components/home/LatestUpdates";
import TrustedInvestment from "./components/home/TrustedInvestment";
import BranchLocator from "./components/home/BranchLocator";
import FAQ from "./components/home/FAQ";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* banner section contents*/}
        <HeroBanner />

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
      </main>
    </div>
  );
}
