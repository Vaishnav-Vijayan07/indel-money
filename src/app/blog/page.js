export const dynamic = "force-dynamic";
import LatestBlogs from "@/pages/LatestBlogs";
import AllBlogsPage from "@/pages/AllBlogs";
import { Suspense } from "react";
import { defaultMeta } from "@/constants/constants";

async function getMetaData() {
  const defaultMeta = {
    title: "Blogs | My Website",
    description: "Explore insights, stories, and updates from Indel.",
    keywords: "blogs, indel, articles, insights",
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=blog`);
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

export default async function Blog({ searchParams }) {
  const page = (await searchParams?.page) || 1;
  return (
    <>
      <LatestBlogs />
      <AllBlogsPage page={page} />
    </>
  );
}
