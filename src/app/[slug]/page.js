import dynamic from "next/dynamic";
import { Suspense, memo } from "react";
import BlogItem from "@/components/blog/BlogItem";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const LatestUpdates = dynamic(() => import("@/components/features/home/LatestUpdates"), {
  loading: () => <div>Loading slider...</div>,
});
const MobLatestUpdates = dynamic(() => import("@/components/features/blog/MobLatestUpdates"), {
  loading: () => <div>Loading mobile slider...</div>,
});

async function fetchBlogsData(page = 1, limit = 10) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs?page=${page}&limit=${limit}`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();
    if (result.status === "success") {
      const { content, sliderItems, blogs, pagination } = result.data || {};
      return {
        content,
        sliderData: sliderItems,
        blogs,
        pagination: pagination || { currentPage: 1, totalPages: 1, totalItems: 0 },
        error: null,
      };
    }
    return {
      content: null,
      sliderData: null,
      blogs: null,
      pagination: null,
      error: result.message,
    };
  } catch (error) {
    console.error("Fetch error:", error.message);
    return {
      content: null,
      sliderData: null,
      blogs: null,
      pagination: null,
      error: "Failed to fetch blog data",
    };
  }
}

export async function generateMetadata({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;
  const { content, error } = await fetchBlogsData(page);
  // ... metadata logic (same as original)
}

const PaginationItems = memo(({ currentPage, totalPages }) => {
  const items = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  items.push(
    <PaginationItem key="prev">
      <PaginationPrevious
        href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : "#"}
        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
      />
    </PaginationItem>
  );

  if (startPage > 1) {
    items.push(
      <PaginationItem key={1}>
        <PaginationLink href={`/blog?page=1`}>1</PaginationLink>
      </PaginationItem>
    );
    if (startPage > 2) items.push(<PaginationEllipsis key="start-ellipsis" />);
  }

  for (let i = startPage; i <= endPage; i++) {
    items.push(
      <PaginationItem key={i}>
        <PaginationLink href={`/blog?page=${i}`} isActive={i === currentPage}>
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) items.push(<PaginationEllipsis key="end-ellipsis" />);
    items.push(
      <PaginationItem key={totalPages}>
        <PaginationLink href={`/blog?page=${totalPages}`}>{totalPages}</PaginationLink>
      </PaginationItem>
    );
  }

  items.push(
    <PaginationItem key="next">
      <PaginationNext
        href={currentPage < totalPages ? `/blog?page=${currentPage + 1}` : "#"}
        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
      />
    </PaginationItem>
  );

  return <PaginationContent>{items}</PaginationContent>;
});

export default async function Blog({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;
  const limit = 10;
  const { content, blogs, sliderData, pagination, error } = await fetchBlogsData(page, limit);

  if (error) {
    return (
      <div className="container py-10">
        <h1>Error Loading Blog</h1>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!content && !blogs && !sliderData) {
    return (
      <div className="container py-10">
        <h1>No Blog Data Available</h1>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="w-full block pt-[30px] sm:py-[20px] lg:py-[30px] 2xl:py-[50px]">
        <div className="container">
          <div className="text-title1 font-bold text-base2">{content?.title || "Blog"}</div>
          <div className="sm:block hidden">
            <PageBreadcrumb />
          </div>
        </div>
      </section>
      <div className="sm:hidden block">
        <MobLatestUpdates />
      </div>
      <div className="sm:block hidden">
        <LatestUpdates
          sliderItems={sliderData || []}
          sliderTitle={content?.slider_title || "Latest Updates"}
          sliderButtonText={content?.slider_button_text || "View All"}
          sliderButtonLink={content?.slider_button_link || "/blog"}
        />
      </div>
      <section className="p-[30px_0_20px_0] 2xl:p-[40px_0_60px_0] relative z-0">
        <div className="container">
          <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black font-medium mb-[15px]">
            {content?.all_blogs_title || "All Blogs"}
          </div>
          <div className="flex flex-wrap -mx-[4px] lg:-mx-[15px] sm:border-b sm:border-b-[rgb(0,0,0,18%)] 2xl:-mx-[35px] sm:pb-[20px] 2xl:pb-[50px] 2xl:mb-[40px] sm:mb-[20px]">
            {blogs?.length > 0 ? (
              blogs.map((item, index) => (
                <BlogItem index={index} key={item.id || index} item={item} />
              ))
            ) : (
              <p>No blogs available.</p>
            )}
          </div>
          <Pagination aria-label="Blog pagination">
            <PaginationItems
              currentPage={pagination?.currentPage || 1}
              totalPages={pagination?.totalPages || 1}
            />
          </Pagination>
        </div>
      </section>
    </Suspense>
  );
}

export const revalidate = 60; // Revalidate every hour


// import BlogDetail from "@/components/features/blog/BlogDetail";
// import RecentBlog from "@/components/features/blog/RecentBlog";

// // Fetch blog data for a specific post
// async function fetchBlogData(slug) {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs/${slug}`, {
//       cache: "no-store",
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const result = await response.json();
//     if (result.status === "success") {
//       return { data: result.data, error: null };
//     }
//     return { data: null, error: result.message };
//   } catch (error) {
//     console.error("Fetch error for slug:", slug, error.message);
//     return { data: null, error: "Failed to fetch blog data" };
//   }
// }

// // Fetch recent blogs
// async function fetchRecentBlogs() {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs?limit=3`, {
//       cache: "no-store",
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const result = await response.json();
//     if (result.status === "success") {
//       return { data: result.data?.blogs || [], error: null };
//     }
//     return { data: [], error: result.message };
//   } catch (error) {
//     console.error("Fetch error for recent blogs:", error.message);
//     return { data: [], error: "Failed to fetch recent blogs" };
//   }
// }

// // Generate dynamic metadata
// export async function generateMetadata({ params }) {
//   const { slug } = params; // params is already an object, no need to await
//   const { data, error } = await fetchBlogData(slug);

//   // Log for debugging
//   console.log("Metadata Data:", { data, error, slug });

//   // Fallback metadata in case of error or missing data
//   if (error || !data) {
//     console.warn("Metadata fallback used for slug:", slug, "Error:", error);
//     return {
//       title: "Blog Post | My Website",
//       description: "Read our latest blog post.",
//       openGraph: {
//         title: "Blog Post | My Website",
//         description: "Read our latest blog post.",
//         url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
//         type: "article",
//         images: [
//           {
//             url: `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
//             width: 1200,
//             height: 630,
//             alt: "Blog Post",
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: "Blog Post | My Website",
//         description: "Read our latest blog post.",
//         images: [`${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`],
//       },
//       alternates: {
//         canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
//       },
//     };
//   }

//   return {
//     title: data?.title || "Blog Post | My Website",
//     description: data?.meta_description || data?.description || "Read our latest blog post.",
//     keywords: data?.meta_keywords || "blog, post, news",
//     openGraph: {
//       title: data?.meta_title || data?.title || "Blog Post | My Website",
//       description: data?.meta_description || data?.description || "Read our latest blog post.",
//       url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
//       type: "article",
//       images: [
//         {
//           url: data?.image
//             ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}`
//             : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
//           width: 1200,
//           height: 630,
//           alt: data?.image_alt || data?.title || "Blog Post",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: data?.title || "Blog Post | My Website",
//       description: data?.meta_description || data?.description || "Read our latest blog post.",
//       images: [
//         data?.meta_image
//           ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${data.meta_image}`
//           : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
//       ],
//     },
//     alternates: {
//       canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
//     },
//   };
// }

// export default async function Blog({ params }) {
//   const { slug } = params; // params is already an object, no need to await
//   const { data: blogData, error: blogError } = await fetchBlogData(slug);
//   const { data: recentBlogs, error: recentError } = await fetchRecentBlogs();

//   // Log for debugging
//   console.log("Blog Page Data:", { blogData, blogError, recentBlogs, recentError });

//   // Handle error state for blog data
//   if (blogError || !blogData) {
//     return (
//       <div className="container py-10">
//         <h1>Error Loading Blog Post</h1>
//         <p>{blogError || "Blog post not found."}</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <BlogDetail data={blogData} />
//       <RecentBlog recentBlogs={recentBlogs?.slice(0, 10)} error={recentError} />
//     </>
//   );
// }