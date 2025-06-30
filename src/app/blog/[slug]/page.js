import dynamic from "next/dynamic";
import Link from "next/link";
import BlogDetail from "@/components/features/blog/BlogDetail";
import RecentBlog from "@/components/features/blog/RecentBlog";

// Fetch blog data for a specific post
async function fetchBlogData(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    if (result.status === "success") {
      const { blog, recentBlogs } = result.data || {};
      return {
        data: blog,
        recentBlogs,
        error: null,
      };
    }
    return {
      data: null,
      recentBlogs: null,
      error: result.message,
    };
  } catch (error) {
    return { data: null, recentBlogs: null, error: "Failed to fetch blog data" };
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
      title: "Blog Post | My Website",
      description: "Read our latest blog post.",
      openGraph: {
        title: "Blog Post | My Website",
        description: "Read our latest blog post.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
        type: "article",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
            width: 1200,
            height: 630,
            alt: "Blog Post",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Blog Post | My Website",
        description: "Read our latest blog post.",
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`],
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      },
    };
  }

  return {
    title: data?.title || "Blog Post | My Website",
    description: data?.meta_description || data?.description || "Read our latest blog post.",
    keywords: data?.meta_keywords || "blog, post, news",
    openGraph: {
      title: data?.meta_title || data?.title || "Blog Post | My Website",
      description: data?.meta_description || data?.description || "Read our latest blog post.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      type: "article",
      images: [
        {
          url: data?.image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}` : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
          width: 1200,
          height: 630,
          alt: data?.image_alt || data?.title || "Blog Post",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.title || "Blog Post | My Website",
      description: data?.meta_description || data?.description || "Read our latest blog post.",
      images: [
        data?.meta_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.meta_image}` : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
    },
  };
}

export default async function Blog({ params }) {
  const { slug } = await params;
  const { data: blogData, recentBlogs, error: blogError } = await fetchBlogData(slug);

  // Handle error state for blog data
  if (blogError || !blogData) {
    return (
      <div className="container py-10">
        <h1>Error Loading Blog Post</h1>
        <p>{blogError || "Blog post not found."}</p>
      </div>
    );
  }

  return (
    <>
      <BlogDetail data={blogData} />
      <RecentBlog recentBlogs={recentBlogs} error={blogError} />
    </>
  );
}
