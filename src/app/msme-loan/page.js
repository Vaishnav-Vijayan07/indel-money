import React from "react";
import KickStartVenture from "@/components/features/msmeloan/KickStartVenture";
import LoansList from "@/components/features/msmeloan/LoansList";

export default function MsmeLoan() {
  return (
    <>
      {/* KickStartVenture contents*/}
      <KickStartVenture />

      {/* LoanSlider contents*/}
      <LoansList />
    </>

  );
}
