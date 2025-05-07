import KickStartVenture from "@/components/features/msmeloan/KickStartVenture";
import LoansList from "@/components/features/msmeloan/LoansList";
import WhyMsme from "@/components/features/msmeloan/WhyMsme";
import WhoDoServe from "@/components/features/msmeloan/WhoDoServe";
import MsmePresence from "@/components/features/msmeloan/MsmePresence";
import GrownWithMsme from "@/components/features/msmeloan/GrownWithMsme";

import MobKickStartVenture from "@/components/features/msmeloan/MobKickStartVenture";
import MobWhoDoServe from "@/components/features/msmeloan/MobWhoDoServe";

export default function MsmeLoan() {
  return (
    <>
      {/* KickStartVenture contents*/}
      <div className="hidden sm:block">
        <KickStartVenture />
      </div>
      {/* WhoDoServe Mobile contents*/}
      <div className="block sm:hidden">
        <MobKickStartVenture />
      </div>

      {/* LoanSlider contents*/}
      <LoansList />

      {/* WhyMsme contents*/}
      <WhyMsme />

      {/* WhoDoServe contents*/}
      <div className="hidden sm:block">
        <WhoDoServe />
      </div>
      {/* WhoDoServe Mobile contents*/}
      <div className="block sm:hidden">
        <MobWhoDoServe />
      </div>

      {/* MsmePresence contents*/}
      <MsmePresence />

      {/* Grown With Msme contents*/}
      <GrownWithMsme />
    </>
  );
}
