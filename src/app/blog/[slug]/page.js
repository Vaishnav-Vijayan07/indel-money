import BlogDetail from "@/components/features/blog/BlogDetail";
import RecentBlog from "@/components/features/blog/RecentBlog";

// Fetch blog data for a specific post
async function fetchBlogData(slug) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs/${slug}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    if (result.status === "success") {
      return { data: result.data, error: null };
    }
    return { data: null, error: result.message };
  } catch (error) {
    console.error("Fetch error for slug:", slug, error.message);
    return { data: null, error: "Failed to fetch blog data" };
  }
}

// Fetch recent blogs
async function fetchRecentBlogs() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs?limit=3`, {
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
    console.error("Fetch error for recent blogs:", error.message);
    return { data: [], error: "Failed to fetch recent blogs" };
  }
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = params; // params is already an object, no need to await
  const { data, error } = await fetchBlogData(slug);

  // Log for debugging
  console.log("Metadata Data:", { data, error, slug });

  // Fallback metadata in case of error or missing data
  if (error || !data) {
    console.warn("Metadata fallback used for slug:", slug, "Error:", error);
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
          url: data?.image
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}`
            : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
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
        data?.meta_image
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.meta_image}`
          : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
      ],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
    },
  };
}

export default async function Blog({ params }) {
  const { slug } = params; // params is already an object, no need to await
  const { data: blogData, error: blogError } = await fetchBlogData(slug);
  const { data: recentBlogs, error: recentError } = await fetchRecentBlogs();

  // Log for debugging
  console.log("Blog Page Data:", { blogData, blogError, recentBlogs, recentError });

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
      <RecentBlog recentBlogs={recentBlogs?.slice(0, 10)} error={recentError} />
    </>
  );
}
