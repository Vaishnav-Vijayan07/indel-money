//export const dynamic = "force-dynamic";
import BlogDetail from "@/components/features/blog/BlogDetail";
import RecentBlog from "@/components/features/blog/RecentBlog";
import { defaultMeta } from "@/constants/constants";
import { title } from "process";

// Fetch news data for a specific post
async function fetchBlogData(id) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/news/${id}`, {
      cache: "force-cache",
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result.status === "success") {
      const { news, recentNews, title } = result.data || {};
      return {
        data: news,
        recentNews,
        title,
        error: null,
      };
    }
    return {
      data: null,
      recentNews: null,
      title: null,
      error: result.message,
    };
  } catch (error) {
    return { data: null, title: null, recentNews: null, error: "Failed to fetch news data" };
  }
}

const defaultMetadata = (id = "") => ({
  title: "News Post | My Website",
  description: "Read our latest news post.",
  keywords: "news, post, update",
  openGraph: {
    title: "News Post | My Website",
    description: "Read our latest news post.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/news/${id}`,
    type: "article",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "News Post",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News Post | My Website",
    description: "Read our latest news post.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/news/${id}`,
  },
});

async function getMetaData(id) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta-id?page=newsItem&id=${id}`);
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        meta,
        error: null,
      };
    }
    return {
      meta: null,
      error: result.message,
    };
  } catch (error) {
    return {
      meta: null,
      error: "Failed to fetch service data",
    };
  }
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const { meta, error } = await getMetaData(id);

  if (!meta || error) {
    return defaultMetadata(id);
  }
  return {
    title: meta?.meta_title || defaultMetadata(id).title,
    description: meta?.meta_description || meta?.description || defaultMetadata(id).description,
    keywords: meta?.meta_keywords || defaultMetadata(id).keywords,
    openGraph: {
      title: meta?.meta_title || meta?.title || defaultMetadata(id).openGraph.title,
      description: meta?.meta_description || meta?.description || defaultMetadata(id).openGraph.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/news/${id}`,
      type: "article",
      images: [
        {
          url: meta?.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${meta.image}` : defaultMetadata(id).openGraph.images[0].url,
          width: 1200,
          height: 630,
          alt: meta?.image_alt || meta?.title || defaultMetadata(id).openGraph.images[0].alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title || defaultMetadata(id).twitter.title,
      description: meta?.meta_description || meta?.description || defaultMetadata(id).twitter.description,
      images: [meta?.meta_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${meta.meta_image}` : defaultMetadata(id).twitter.images[0]],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/news/${id}`,
    },
  };
}

export default async function News({ params }) {
  const { id } = await params; // params is already an object, no need to await
  const { data: newsData, recentNews, title, error } = await fetchBlogData(id);

  // Handle error state for news data
  if (error || !newsData) {
    return (
      <div className="container py-10">
        <h1>Error Loading News Post</h1>
        <p>{error || "News post not found."}</p>
      </div>
    );
  }

  return (
    <>
      <BlogDetail data={newsData} type="news" />
      <RecentBlog recentBlogs={recentNews} type="news" title={title} />
    </>
  );
}
