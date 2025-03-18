import React from "react";
import OurValues from "@/components/features/indelvalues/OurValues";
import InnerBanner from "@/components/common/InnerBanner";

export default function IndelValuePage() {
  return (
    <>
      {/* InnerBanner contents */}
      <InnerBanner />

      {/* ManagementTeam contents */}
      <OurValues />
    </>
  );
}
