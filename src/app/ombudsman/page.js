import Ombudsman from "@/components/features/ombudsman/Ombudsman";
import NoContents from "@/components/NoContents";
import { defaultMeta } from "@/constants/constants";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/ombudsman`, {
      // cache: "no-store",
      //next: { revalidate: 600 },
    });

    const result = await response.json();

    if (result.status === "success") {
      return {
        data: result.files,
        error: null, // ← Fixed: should be null on success
      };
    }

    return {
      data: null,
      error: result.message || "Failed to fetch ombudsman data",
    };
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      data: null,
      error: "Failed to fetch ombudsman data",
    };
  }
}

export default async function Ombudsmans() {
  const { data: files, error } = await fetchData(); // ← Fixed destructuring

  // Handle not found case
  if (!files || files.length === 0) {
    <NoContents />;
  }

  return (
    <>
      <Ombudsman files={files} />
    </>
  );
}
