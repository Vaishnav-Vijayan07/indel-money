import ManagementTeam from "@/components/features/management-team/ManagementTeam";

async function fetchManagementData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/directors`, {
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

  if (!data) {
    return <div>Failed to fetch directors data</div>;
  }

  return (
    <>
      <ManagementTeam pageContent={data?.content} teams={data?.teams} />
    </>
  );
}
