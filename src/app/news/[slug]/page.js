import dynamic from "next/dynamic";
import Link from "next/link";
import BlogDetail from "@/components/features/blog/BlogDetail";
import RecentBlog from "@/components/features/blog/RecentBlog";

// Fetch blog data for a specific post
async function fetchBlogData(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/news/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    console.log("Fetching blog data for slug:", result);

    if (result.status === "success") {
      // const { content, sliderItems, blogs, pagination } = result.data || {};
      return {
        content: result?.data,
        // sliderData: sliderItems,
        // blogs,
        // pagination: pagination || { currentPage: 1, totalPages: 1, totalItems: 0 },
        error: null,
      };
    }
    return {
      content: null,
      // sliderData: null,
      // blogs: null,
      // pagination: null,
      error: result.message,
    };
  } catch (error) {
    return { data: null, error: "Failed to fetch blog data" };
  }
}

// Fetch recent blogs
async function fetchRecentBlogs() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/news?limit=3`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    if (result.status === "success") {
      return { data: result.data?.blogs || [], error: null };
    }
    return { data: [], error: result.message };
  } catch (error) {
    return { data: [], error: "Failed to fetch recent blogs" };
  }
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params; // params is already an object, no need to await
  const { data, error } = await fetchBlogData(slug);

  // Log for debugging

  // Fallback metadata in case of error or missing data
  if (error || !data) {
    return {
      title: "News Post | My Website",
      description: "Read our latest news Post.",
      openGraph: {
        title: "News Post | My Website",
        description: "Read our latest news Post.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
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
        description: "Read our latest news Post.",
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`],
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      },
    };
  }

  return {
    title: data?.title || "News Post | My Website",
    description: data?.meta_description || data?.description || "Read our latest news Post.",
    keywords: data?.meta_keywords || "blog, post, news",
    openGraph: {
      title: data?.meta_title || data?.title || "News Post | My Website",
      description: data?.meta_description || data?.description || "Read our latest news Post.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      type: "article",
      images: [
        {
          url: data?.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}` : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
          width: 1200,
          height: 630,
          alt: data?.image_alt || data?.title || "News Post",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title || "News Post | My Website",
      description: data?.meta_description || data?.description || "Read our latest news Post.",
      images: [
        data?.meta_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.meta_image}` : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
    },
  };
}

export default async function News({ params }) {
  const { slug } = await params; // params is already an object, no need to await
  const { content: blogData, error: blogError } = await fetchBlogData(slug);
  const { data: recentBlogs, error: recentError } = await fetchRecentBlogs();

  // Log for debugging

  // Handle error state for blog data
  if (blogError || !blogData) {
    return (
      <div className="container py-10">
        <h1>Error Loading News Post</h1>
        <p>{blogError || "News post not found."}</p>
      </div>
    );
  }

  return (
    <>
      <BlogDetail data={blogData} type="news" />
      <RecentBlog recentBlogs={recentBlogs?.slice(0, 10)} error={recentError} type="news" />
    </>
  );
}
