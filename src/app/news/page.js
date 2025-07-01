import LatestNews from "@/pages/LatestNews";
import AllNewsPage from "@/pages/AllNews";

async function getMetaData() {
  const defaultMeta = {
    title: "News | My Website",
    description: "Explore insights, stories, and updates from Indel.",
    keywords: "news, indel, articles, insights",
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=news`);
    const result = await response.json();
    const meta = result?.data;

    if (result.status === "success" && meta) {
      return {
        title: meta.meta_title || defaultMeta.title,
        description: meta.meta_description || defaultMeta.description,
        keywords: meta.meta_keywords || defaultMeta.keywords,
        error: null,
      };
    }

    return {
      ...defaultMeta,
      error: result?.message || "Metadata not found",
    };
  } catch (error) {
    return {
      ...defaultMeta,
      error: "Failed to fetch meta data",
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

export default async function News({ searchParams }) {
  const page = (await searchParams?.page) || 1;
  return (
    <>
      <LatestNews />
      <AllNewsPage page={page} />
    </>
  );
}
