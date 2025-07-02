import BranchLocator from "../../components/features/home/BranchLocator";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/branch-locator`, {
      // cache: "no-store", // Ensure fresh data
      cache: "force-cache",
      next: { revalidate: 600 },
    });
    const result = await response.json();
    const branchData = result.data;

    if (result.status === "success") {
      return {
        branchData,
        error: null,
      };
    }
    return {
      branchData: null,
      error: result.message,
    };
  } catch (error) {
    return {
      branchData: null,
      error: "Failed to fetch branch data",
    };
  }
}

export default async function Branch() {
  const { branchData, error } = await fetchData();

  if (!branchData || error) {
    return <div>{"No data"}</div>;
  }

  return (
    <>
      <BranchLocator variant={"branch"} pageContent={branchData?.branchLocatorData} />
    </>
  );
}
