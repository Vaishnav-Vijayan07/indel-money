import AwardClient from "@/pages/AwardClient";
import NoContents from "@/components/NoContents";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/awards`, {
      cache: "no-store",
      next: { revalidate: 600 },
    });
    const result = await response.json();
    const awardsData = result.data;

    if (result.status === "success") {
      return {
        contents: awardsData?.awardPageContent,
        awards: awardsData?.nonSlideItems,
        sliderItems: awardsData?.slideItems,
        error: null,
      };
    }
    return { contents: null, awards: null, sliderItems: null, error: result.message };
  } catch (error) {
    return { contents: null, awards: null, sliderItems: null, error: "Failed to fetch history data" };
  }
}

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=award`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || "Award and achievements | My Website",
        description: meta?.meta_description || "Our awards",
        keywords: meta?.meta_keywords || "indel, money, shades, history, milestones,awards",
        error: null,
      };
    }
    return {
      title: "Award and achievements | My Website",
      description: "Our awards",
      keywords: "indel, money, shades, history, milestones,awards",
      error: result.message,
    };
  } catch (error) {
    return {
      title: "Award and achievements | My Website",
      description: "Our awards",
      keywords: "indel, money, shades, history, milestones,awards",
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

export default async function Award() {
  const { contents, awards, sliderItems, error } = await fetchData();

  if (!contents) {
    return <NoContents />;
  }

  return <AwardClient contents={contents} awards={awards} sliderItems={sliderItems} error={error} />;
}
