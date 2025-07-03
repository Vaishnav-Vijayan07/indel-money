import DifferentShadesIndelBanner from "@/components/features/about/DifferentShadesIndelBanner";
import DifferentShadesIndelSlide from "@/components/features/about/DifferentShadesIndelSlide";

import MobDifferentShadesIndelSlide from "@/components/features/about/MobDifferentShadesIndelSlide";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/shades-of-indel`, {
      // cache: "no-store", // Ensure fresh data
      cache: "no-store",
      next: { revalidate: 600 },
    });
    const result = await response.json();
    const shadesValues = result.data;

    if (result.status === "success") {
      return { contents: shadesValues?.shadesOfIndelContent, values: shadesValues?.differentShades, error: null };
    }
    return { contents: null, values: null, error: result.message };
  } catch (error) {
    return { contents: null, values: null, error: "Failed to fetch history data" };
  }
}

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=shades`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "Shades of indel | My Website",
        description:
          meta?.meta_description || "Explore the different shades of indel money, its history, milestones, and journey.",
        keywords: meta?.meta_keywords || "indel, money, shades, history, milestones",
        error: null,
      };
    }
    return {
      title: "Shades of indel | My Website",
      description: "Explore the different shades of indel money, its history, milestones, and journey.",
      keywords: "indel, money, shades, history, milestones",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "Shades of indel | My Website",
      description: "Explore the different shades of indel money, its history, milestones, and journey.",
      keywords: "indel, money, shades, history, milestones",
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

export default async function DifferentShadesIndel() {
  const { contents, values, error } = await fetchData();

  if (!contents || !values) {
    return <div>Failed to fetch Different Shades of Indel data</div>;
  }

  return (
    <>
      <DifferentShadesIndelBanner title={contents?.page_title} />

      <div className="hidden sm:block">
        <DifferentShadesIndelSlide shades={values} />
      </div>
      <div className="block sm:hidden">
        <MobDifferentShadesIndelSlide shades={values} />
      </div>
    </>
  );
}
