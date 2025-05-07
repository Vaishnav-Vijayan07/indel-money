import React from "react";
import ManagementTeam from "@/components/features/managementteam/ManagementTeam";

async function fetchManagementData() {
  try {
    const response = await fetch("http://localhost:7700/api/web/management", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();

    if (result.status === "success") {
      return { data: result.data, error: null };
    }
    return { data: null, error: result.message };
  } catch (error) {
    return { data: null, error: "Failed to fetch management data" };
  }
}

export default async function ManagementTeamPage() {
  const { data, error } = await fetchManagementData();

  return (
    <>
      <ManagementTeam pageContent={data?.content} teams={data?.teams} />
    </>
  );
}
