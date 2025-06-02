import React from "react";
import Report from "../../../components/features/investors/Report";
import { fetchReportData } from '../../../lib/fetchCalls/fetchInvestors'

export default async function report() {

  const { content, reports, returns, error } = await fetchReportData();

  console.log(reports, returns, error);

  if (!reports && !returns) {
    return <div>Failed to fetch report data</div>;
  }

  return (
    <>
      <Report reports={reports} returns={returns} content={content} />
    </>

  );
}
