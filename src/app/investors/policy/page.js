import React from "react";
import Policies from "../../../components/features/investors/Policies";
import { fetchPolicyData } from "../../../lib/fetchCalls/fetchInvestors";

export default async function Policy({ searchParams }) {

  const page = await searchParams?.page || 1

  const { content, policies, totalPages, currentPage, limit, error } = await fetchPolicyData(page)

  return (
    <>
      <Policies policies={policies} currentPage={currentPage} totalPages={totalPages} limit={limit} />

    </>

  );
}
