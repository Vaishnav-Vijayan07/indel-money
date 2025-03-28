import React from "react";
import KickStartVenture from "@/components/features/msmeloan/KickStartVenture";
import LoansList from "@/components/features/msmeloan/LoansList";
import WhyMsme from "@/components/features/msmeloan/WhyMsme";
import WhoDoServe from "@/components/features/msmeloan/WhoDoServe";
import MsmePresence from "@/components/features/msmeloan/MsmePresence";
import GrownWithMsme from "@/components/features/msmeloan/GrownWithMsme";

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
      <WhoDoServe />

      {/* MsmePresence contents*/}
      <MsmePresence />

      {/* Grown With Msme contents*/}
      <GrownWithMsme />
    </>

  );
}
