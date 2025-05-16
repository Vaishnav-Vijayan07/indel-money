import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense, memo } from "react";
import BlogItem from "@/components/blog/BlogItem";
import PageWilliams from "@/components/common/PageBreadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";

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
      {
        next: { revalidate: 60 },
      }
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
      error: "Failed to fetch blog data. Please try again.",
    };
  }
}

export async function generateMetadata({ searchParams }) {
  const params = await searchParams; // Await searchParams
  const page = parseInt(params.page) || 1;
  const { content, error } = await fetchBlogsData(page);

  if (error || !content) {
    console.warn("Metadata fallback used due to:", error || "No content");
    return {
      title: "Blog | My Website",
      description: "Explore our latest blog posts and updates.",
      openGraph: {
        title: "Blog | My Website",
        description: "Explore our latest blog posts and updates.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
        type: "website",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
            width: 1200,
            height: 630,
            alt: "Blog",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Blog | My Website",
        description: "Explore our latest blog posts and updates.",
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`],
      },
    };
  }

  return {
    title: content?.title || "Blog | My Website",
    description: content?.meta_description || "Read the latest blog posts and updates from our team.",
    keywords: content?.meta_keywords || "blog, updates, news",
    openGraph: {
      title: content?.title || "Blog | My Website",
      description: content?.meta_description || "Read the latest blog posts and updates from our team.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog?page=${page}`,
      type: "website",
      images: [
        {
          url: content?.meta_image
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${content.meta_image}`
            : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
          width: 1200,
          height: 630,
          alt: content?.title || "Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content?.title || "Blog | My Website",
      description: content?.meta_description || "Read the latest blog posts and updates from our team.",
      images: [
        content?.meta_image
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${content.meta_image}`
          : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
      ],
    },
  };
}

export default async function Blog({ searchParams }) {
  const params = await searchParams; // Await searchParams
  const page = parseInt(params.page) || 1;
  const limit = 10;
  const { content, blogs, sliderData, pagination, error } = await fetchBlogsData(page, limit);

  if (error) {
    return (
      <div className="container py-10">
        <h1>Error Loading Blog</h1>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
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

  // Generate pagination links
  const renderPaginationLinks = () => {
    const { currentPage, totalPages } = pagination;
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink href={`/blog?page=${i}`} isActive={i === currentPage}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return (
      <>
        {startPage > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {pages}
        {endPage < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
      </>
    );
  };

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
        <MobLatestUpdates
          sliderItems={sliderData || []}
          sliderTitle={content?.slider_title || "Latest Updates"}
          sliderButtonText={content?.slider_button_text || "View All"}
          sliderButtonLink={content?.slider_button_link || "/blog"}
        />
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
              blogs.map((item, index) => <BlogItem index={index} key={item.id || index} item={item} />)
            ) : (
              <p>No blogs available.</p>
            )}
          </div>
          {pagination && (
            <Pagination className="justify-start sm:justify-end mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={pagination.currentPage > 1 ? `/blog?page=${pagination.currentPage - 1}` : "#"}
                    className={pagination.currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                {renderPaginationLinks()}
                <PaginationItem>
                  <PaginationNext
                    href={
                      pagination.currentPage < pagination.totalPages
                        ? `/blog?page=${pagination.currentPage + 1}`
                        : "#"
                    }
                    className={
                      pagination.currentPage === pagination.totalPages ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>
    </Suspense>
  );
}

// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { Suspense, memo } from "react";
// import BlogItem from "@/components/blog/BlogItem";
// import PageBreadcrumb from "@/components/common/PageBreadcrumb";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// const LatestUpdates = dynamic(() => import("@/components/features/home/LatestUpdates"), {
//   loading: () => <div>Loading slider...</div>,
// });
// const MobLatestUpdates = dynamic(() => import("@/components/features/blog/MobLatestUpdates"), {
//   loading: () => <div>Loading mobile slider...</div>,
// });

// async function fetchBlogsData(page = 1, limit = 10) {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs`, {
//       next: { revalidate: 60 },
//     });
//     if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//     const result = await response.json();

//     if (result.status === "success") {
//       const { content, sliderItems, blogs, pagination } = result.data || {};
//       return {
//         content,
//         sliderData: sliderItems,
//         blogs,
//         pagination: pagination || { currentPage: 1, totalPages: 1, totalItems: 0 },
//         error: null,
//       };
//     }
//     return {
//       content: null,
//       sliderData: null,
//       blogs: null,
//       pagination: null,
//       error: result.message,
//     };
//   } catch (error) {
//     console.error("Fetch error:", error.message);
//     return {
//       content: null,
//       sliderData: null,
//       blogs: null,
//       pagination: null,
//       error: "Failed to fetch blog data. Please try again.",
//     };
//   }
// }

// export async function generateMetadata() {
//   const { content, error } = await fetchBlogsData();

//   if (error || !content) {
//     console.warn("Metadata fallback used due to:", error || "No content");
//     return {
//       title: "Blog | My Website",
//       description: "Explore our latest blog posts and updates.",
//       openGraph: {
//         title: "Blog | My Website",
//         description: "Explore our latest blog posts and updates.",
//         url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
//         type: "website",
//         images: [
//           {
//             url: `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
//             width: 1200,
//             height: 630,
//             alt: "Blog",
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: "Blog | My Website",
//         description: "Explore our latest blog posts and updates.",
//         images: [`${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`],
//       },
//     };
//   }

//   return {
//     title: content?.title || "Blog | My Website",
//     description: content?.meta_description || "Read the latest blog posts and updates from our team.",
//     keywords: content?.meta_keywords || "blog, updates, news",
//     openGraph: {
//       title: content?.title || "Blog | My Website",
//       description: content?.meta_description || "Read the latest blog posts and updates from our team.",
//       url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
//       type: "website",
//       images: [
//         {
//           url: content?.meta_image
//             ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${content.meta_image}`
//             : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
//           width: 1200,
//           height: 630,
//           alt: content?.title || "Blog",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: content?.title || "Blog | My Website",
//       description: content?.meta_description || "Read the latest blog posts and updates from our team.",
//       images: [
//         content?.meta_image
//           ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${content.meta_image}`
//           : `${process.env.NEXT_PUBLIC_SITE_URL}/default-og-image.jpg`,
//       ],
//     },
//   };
// }

// export default async function Blog() {
//   const { content, blogs, sliderData, pagination, error } = await fetchBlogsData();

//   if (error) {
//     return (
//       <div className="container py-10">
//         <h1>Error Loading Blog</h1>
//         <p>{error}</p>
//         <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
//           Retry
//         </button>
//       </div>
//     );
//   }

//   if (!content && !blogs && !sliderData) {
//     return (
//       <div className="container py-10">
//         <h1>No Blog Data Available</h1>
//         <p>Please try again later.</p>
//       </div>
//     );
//   }

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <section className="w-full block pt-[30px] sm:py-[20px] lg:py-[30px] 2xl:py-[50px]">
//         <div className="container">
//           <div className="text-title1 font-bold text-base2">{content?.title || "Blog"}</div>
//           <div className="sm:block hidden">
//             <PageBreadcrumb />
//           </div>
//         </div>
//       </section>
//       <div className="sm:hidden block">
//         <MobLatestUpdates
//           sliderItems={sliderData || []}
//           sliderTitle={content?.slider_title || "Latest Updates"}
//           sliderButtonText={content?.slider_button_text || "View All"}
//           sliderButtonLink={content?.slider_button_link || "/blog"}
//         />
//       </div>
//       <div className="sm:block hidden">
//         <LatestUpdates
//           sliderItems={sliderData || []}
//           sliderTitle={content?.slider_title || "Latest Updates"}
//           sliderButtonText={content?.slider_button_text || "View All"}
//           sliderButtonLink={content?.slider_button_link || "/blog"}
//         />
//       </div>
//       <section className="p-[30px_0_20px_0] 2xl:p-[40px_0_60px_0] relative z-0">
//         <div className="container">
//           <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black font-medium mb-[15px]">
//             {content?.all_blogs_title || "All Blogs"}
//           </div>
//           <div className="flex flex-wrap -mx-[4px] lg:-mx-[15px] sm:border-b sm:border-b-[rgb(0,0,0,18%)] 2xl:-mx-[35px] sm:pb-[20px] 2xl:pb-[50px] 2xl:mb-[40px] sm:mb-[20px]">
//             {blogs?.length > 0 ? (
//               blogs.map((item, index) => <BlogItem index={index} key={item.id || index} item={item} />)
//             ) : (
//               <p>No blogs available.</p>
//             )}
//           </div>
//           <Pagination className="justify-start sm:justify-end mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
//             <PaginationContent>
//               <PaginationItem>
//                 <PaginationPrevious href="#" />
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#" isActive>
//                   1
//                 </PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">2</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">3</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationEllipsis />
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationNext href="#" />
//               </PaginationItem>
//             </PaginationContent>
//           </Pagination>
//         </div>
//       </section>
//     </Suspense>
//   );
// }