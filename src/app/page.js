import BlogCard from "@/components/common/BlogCard";
import MobBlogListCard from "@/components/features/blog/MobBlogListCard";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import LatestUpdates from "@/components/features/home/LatestUpdates";
import MobLatestUpdates  from "@/components/features/blog/MobLatestUpdates";
import {
  Pagination,
  PaginationContent, 
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import BlogItem from "@/components/blog/BlogItem";

// Fetch blog data
async function fetchBlogsData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs/`, {
      cache: "force-cache",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    console.log("API Response:", result); // Log the raw API response

    if (result.status === "success") {
      const { content, sliderItems, blogs } = result.data || {};
      if (!content || !sliderItems || !blogs) {
        console.warn("Missing expected data fields:", { content, sliderItems, blogs });
      }
      return {
        content,
        sliderData: sliderItems,
        blogs,
        error: null,
      };
    }
    console.error("API returned unsuccessful status:", result.message);
    return { content: null, sliderData: null, blogs: null, error: result.message };
  } catch (error) {
    console.error("Fetch error:", error.message);
    return { content: null, sliderData: null, blogs: null, error: "Failed to fetch blog data" };
  }
}

// Generate dynamic metadata
export async function generateMetadata() {
  const { content, error } = await fetchBlogsData();

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
    keywords: content?.meta_keywords || "blog, updates, news", // Changed meta_keywords to keywords
    openGraph: {
      title: content?.title || "Blog | My Website",
      description: content?.meta_description || "Read the latest blog posts and updates from our team.",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
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

export default async function Blog() {
  const { content, blogs, sliderData, error } = await fetchBlogsData();

  // Log data to verify what's being passed to components
  console.log("Blog Page Data:", { content, blogs, sliderData, error });

  // Handle error state
  if (error) {
    return (
      <div className="container py-10">
        <h1>Error Loading Blog</h1>
        <p>{error}</p>
      </div>
    );
  }

  // Handle no data state
  if (!content && !blogs && !sliderData) {
    return (
      <div className="container py-10">
        <h1>No Blog Data Available</h1>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <section className="w-full block pt-[30px] sm:py-[20px] lg:py-[30px] 2xl:py-[50px]">
        <div className="container">
          <div className="w-full mb-[25px] sm:mb-[20px] lg:mb-[15px] 2xl:mb-[20px]">
            <div className="text-title1 font-bold text-base2">{content?.title || "Blog"}</div>
            <div className="sm:block hidden">
              <PageBreadcrumb />
            </div>
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
      <section className="p-[30px_0_20px_0] 2xl:p-[40px_0_60px_0] relative z-0 before:content-[''] before:absolute before:top-0 before:bottom-[15%] before:w-full before:h-[60%] before:bg-gradient-to-r before:from-[rgba(243,0,0,0.00)] before:to-[rgba(235,2,8,0.10)] before:my-auto before:pointer-events-none sm:before:block before:hidden">
        <div className="container">
          <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black font-medium mb-[15px]">
            {content?.all_blogs_title || "All Blogs"}
          </div>
          <div className="flex flex-wrap -mx-[4px] lg:-mx-[15px] sm:border-b sm:border-b-[rgb(0,0,0,18%)] 2xl:-mx-[35px] sm:pb-[20px] 2xl:pb-[50px] 2xl:mb-[40px] sm:mb-[20px]">
            {blogs?.length > 0 ? (
              blogs.map((item, index) => (
                <BlogItem index={index} key={index} item={item} />
              ))
            ) : (
              <p>No blogs available.</p>
            )}
          </div>
          <Pagination className="justify-start sm:justify-end mt-[20px] lg:mt-[40px] 2xl:mt-[60px]">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </>
  );
}