import React from "react";
import KickStartVenture from "@/components/features/msmeloan/KickStartVenture";
import LoansList from "@/components/features/msmeloan/LoansList";
import WhyMsme from "@/components/features/msmeloan/WhyMsme";
import WhoDoServe from "@/components/features/msmeloan/WhoDoServe";
import MsmePresence from "@/components/features/msmeloan/MsmePresence";
import GrownWithMsme from "@/components/features/msmeloan/GrownWithMsme";

// Mobile view

import MobWhoDoServe from "@/components/features/msmeloan/MobWhoDoServe";

export default function MsmeLoan() {
  return (
    <>
      {/* KickStartVenture contents*/}
      <KickStartVenture />

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
