export const dynamic = "force-dynamic";
import React from "react";
import Policies from "../../components/features/investors/Policies";
import { defaultMeta } from "@/constants/constants";

async function fetchPolicyData(page = 1, limit = 10) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/investors/policies?page=${page}&limit=${limit}`,
      {
        // cache: "no-store", // or 'force-cache' depending on your needs
        cache: "force-cache",
        next: { revalidate: 600 },
      }
    );

    const result = await response.json();
    const policyData = result.data;
    const pagination = result.data.pagination;

    if (result.status === "success") {
      return {
        content: policyData?.content,
        policies: policyData?.policies,
        totalPages: pagination?.totalPages,
        currentPage: pagination?.currentPage,
        limit: pagination?.limit,
        error: null,
      };
    }
    return {
      content: null,
      policies: null,
      totalPages: null,
      currentPage: null,
      limit: null,
      error: result.message,
    };
  } catch (error) {
    return {
      content: null,
      policies: null,
      totalPages: null,
      currentPage: null,
      limit: null,
      error: "Failed to fetch policy data",
    };
  }
}

export default async function Policy({ searchParams }) {
  const page = (await searchParams?.page) || 1;

  const { content, policies, totalPages, currentPage, limit, error } = await fetchPolicyData(page);

  if (!content && !policies && !totalPages && !currentPage && !limit) {
    return <div>Failed to fetch policy data</div>;
  }

  return (
    <>
      <Policies policies={policies} content={content} currentPage={currentPage} totalPages={totalPages} limit={limit} />
    </>
  );
}
