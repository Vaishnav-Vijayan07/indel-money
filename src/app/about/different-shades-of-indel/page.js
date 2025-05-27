import DifferentShadesIndelBanner from "@/components/features/about/DifferentShadesIndelBanner";
import DifferentShadesIndelSlide from "@/components/features/about/DifferentShadesIndelSlide";

import MobDifferentShadesIndelSlide from "@/components/features/about/MobDifferentShadesIndelSlide";

async function fetchData() {
  try {
    const response = await fetch("http://localhost:7700/api/web/shades-of-indel", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();
    const shadesValues = result.data

    if (result.status === "success") {
      return { contents: shadesValues?.shadesOfIndelContent, values: shadesValues?.differentShades, error: null };
    }
    return { contents: null, values: null, error: result.message };
  } catch (error) {
    return { contents: null, values: null, error: "Failed to fetch history data" };
  }
}

export default async function DifferentShadesIndel() {

  const { contents, values, error } = await fetchData();

  return (
    <>
      <DifferentShadesIndelBanner title={contents?.page_title} />

      <div className="hidden sm:block">
        <DifferentShadesIndelSlide shades={values} />
      </div>
      <div className="block sm:hidden">
        <MobDifferentShadesIndelSlide />
      </div>
    </>
  );
}
