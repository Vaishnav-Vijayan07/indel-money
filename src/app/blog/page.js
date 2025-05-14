import BlogCard from "@/components/common/BlogCard";
import MobBlogListCard from "@/components/features/blog/MobBlogListCard";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import LatestUpdates from "@/components/features/home/LatestUpdates";
import MobLatestUpdates from "@/components/features/blog/MobLatestUpdates";
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

async function fetchBlogsData() {
  try {
    const response = await fetch("http://localhost:7700/api/web/blogs", {
      cache: "no-store", // Ensure fresh data
    });
    const result = await response.json();

    if (result.status === "success") {
      return { content: result.data?.content, sliderData: result.data?.sliderItems, blogs: result.data?.blogs, error: null };
    }
    return { content: null, sliderData: null, blogs: null, error: result.message };
  } catch (error) {
    return { content: null, sliderData: null, blogs: null, error: "Failed to fetch home data" };
  }
}

export default async function Blog() {
  const { content, blogs, sliderData, error } = await fetchBlogsData();

  console.log(sliderData);

  return (
    <>
      <section className="w-full block pt-[30px] sm:py-[20px] lg:py-[30px] 2xl:py-[50px]">
        <div className="container">
          <div className="w-full mb-[25px] sm:mb-[20px] lg:mb-[15px] 2xl:mb-[20px]">
            <div className="text-title1 font-bold text-base2">{content?.title}</div>
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
          sliderItems={sliderData}
          sliderTitle={content?.slider_title}
          sliderButtonText={content?.slider_button_text}
          sliderButtonLink={content?.slider_button_link}
        />
      </div>
      <section className="p-[30px_0_20px_0] 2xl:p-[40px_0_60px_0] relative z-0 before:content-[''] before:absolute before:top-0 before:bottom-[15%] before:w-full before:h-[60%] before:bg-gradient-to-r before:from-[rgba(243,0,0,0.00)] before:to-[rgba(235,2,8,0.10)] before:my-auto before:pointer-events-none sm:before:block before:hidden">
        <div className="container">
          <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black font-medium mb-[15px]">
            {content?.all_blogs_title}
          </div>
          <div className="flex flex-wrap -mx-[4px] lg:-mx-[15px] sm:border-b sm:border-b-[rgb(0,0,0,18%)] 2xl:-mx-[35px] sm:pb-[20px] 2xl:pb-[50px] 2xl:mb-[40px] sm:mb-[20px] ">
            {blogs?.map((item, index) => (
              <BlogItem index={index} item={item} />
            ))}
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
