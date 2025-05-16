import dynamic from "next/dynamic";
import Link from "next/link";
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs?page=${page}&limit=${limit}`, {
      next: { revalidate: 60 },
    });
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

export async function generateMetadata({ params }) {
  const page = parseInt(params?.page) || 1;
  const { content, error } = await fetchBlogsData(page, 10);
  // ... metadata logic (same as original)
}

const PaginationItems = memo(({ currentPage, totalPages }) => {
  // ... pagination logic (same as renderPaginationItems)
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
              blogs.map((item, index) => <BlogItem index={index} key={item.id || index} item={item} />)
            ) : (
              <p>No blogs available.</p>
            )}
          </div>
          <Pagination aria-label="Blog pagination">
            <PaginationItems currentPage={pagination?.currentPage || 1} totalPages={pagination?.totalPages || 1} />
          </Pagination>
        </div>
      </section>
    </Suspense>
  );
}

// import HomeClient from "../pages/HomeClient";

// async function fetchHomeData() {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/home`, {
//       cache: "no-store", // Ensure fresh data
//     });
//     const result = await response.json();

//     if (result.status === "success") {
//       return { data: result.data, error: null };
//     }
//     return { data: null, error: result.message };
//   } catch (error) {
//     return { data: null, error: "Failed to fetch home data" };
//   }
// }

// export default async function HomePage() {
//   const { data, error } = await fetchHomeData();

//   return <HomeClient initialData={data} initialError={error} />;
// }
