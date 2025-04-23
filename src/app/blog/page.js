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

const blogs = [
    {
        href: "/",
        image: "/images/blog-1.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/blog-2.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/blog-3.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/blog-4.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/blog-5.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/news-4.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/news-1.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/news-2.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/blog-1.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/blog-2.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/blog-3.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
    {
        href: "/",
        image: "/images/blog-4.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting.",
        description:
            "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. Fusce faucibus, justo et cursus varius, metus.",
    },
];

export default function Blog() {
    return (
        <>
            <section className="w-full block pt-[30px] sm:py-[20px] lg:py-[30px] 2xl:py-[50px]">
                <div className="container">
                    <div className="w-full mb-[25px] sm:mb-[20px] lg:mb-[15px] 2xl:mb-[20px]">
                        <div className="text-title1 font-bold text-base2">Blogs</div>
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
                <LatestUpdates />
            </div>
            <section className="p-[30px_0_20px_0] 2xl:p-[40px_0_60px_0] relative z-0 before:content-[''] before:absolute before:top-0 before:bottom-[15%] before:w-full before:h-[60%] before:bg-gradient-to-r before:from-[rgba(243,0,0,0.00)] before:to-[rgba(235,2,8,0.10)] before:my-auto before:pointer-events-none sm:before:block before:hidden">
                <div className="container">
                    <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black font-medium mb-[15px]">
                        All Blogs
                    </div>
                    <div className="flex flex-wrap -mx-[4px] lg:-mx-[15px] sm:border-b sm:border-b-[rgb(0,0,0,18%)] 2xl:-mx-[35px] sm:pb-[20px] 2xl:pb-[50px] 2xl:mb-[40px] sm:mb-[20px] ">
                        {blogs?.map((item, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 p-[6px_4px] lg:p-[10px_15px] 2xl:p-[30px_35px]"
                            >
                                <div className="sm:hidden block">
                                    <MobBlogListCard item={item} />
                                </div>
                                <div className="sm:block hidden">
                                    <BlogCard item={item} />
                                </div>
                            </div>
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
