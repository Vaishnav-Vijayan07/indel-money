import React from "react";
import CsrDetailsSection from "../../../components/features/investors/CsrDetailsSection";
import { fetchCsrData } from "../../../lib/fetchCalls/fetchInvestors";


export default async function contact() {

  const { contents, reports, commitee, actionPlans, error } = await fetchCsrData()

  if (!contents && !reports && !commitee && !actionPlans) {
    return <div>Failed to fetch report data</div>;
  }


  return (
    <>
      <CsrDetailsSection reports={reports} commitee={commitee} actionPlans={actionPlans} content={contents} />
    </>

  );
}
