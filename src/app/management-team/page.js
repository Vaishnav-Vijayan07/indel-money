import ManagementTeam from "@/components/features/management-team/ManagementTeam";

async function fetchManagementData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/management`, {
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

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=management`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "Our Management | My Website",
        description: meta?.meta_description || "Meet our management team and learn about their expertise.",
        keywords: meta?.meta_keywords || "management team, leadership, expertise",
        error: null,
      };
    }
    return {
      title: "Our Management | My Website",
      description: "Meet our management team and learn about their expertise.",
      keywords: "management team, leadership, expertise",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "Our Management | My Website",
      description: "Meet our management team and learn about their expertise.",
      keywords: "management team, leadership, expertise",
      error: "Failed to fetch service data",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords } = await getMetaData();

  return {
    title,
    description,
    keywords,
  };
}

export default async function ManagementTeamPage() {
  const { data, error } = await fetchManagementData();

  if (!data) {
    return <div>Failed to fetch management data</div>;
  }

  return (
    <>
      <ManagementTeam pageContent={data?.content} teams={data?.teams} />
    </>
  );
}
