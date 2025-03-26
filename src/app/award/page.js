import BlogCard from "@/components/common/BlogCard";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import AwardHighlightBox from "@/components/features/award/AwardHighlightBox";
import LifeAtIndel from "@/components/features/home/LifeAtIndel";


const awards = [
    {
        href: "/",
        image: "/images/award-1.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-2.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-3.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-4.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-5.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-6.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-7.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-8.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-3.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-4.jpg", 
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-1.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
    {
        href: "/",
        image: "/images/award-2.jpg",
        alt: "news-1",
        title: "Lorem Ipsum is simply dummy text of the printing 2024",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie. Fusce dapibus tempus eros ac vehicula. ",
        year: "2024"
    },
];

export default function Award() {
    return (
        <>
            <section className="w-full block py-[20px] lg:py-[30px] 2xl:py-[50px]">
                <div className="container">
                    <div className="w-full">
                        <div className="text-title1 font-bold text-base2">Awards</div>
                        <PageBreadcrumb />
                    </div>
                </div>
            </section>
            <section className="2xl:pb-[55px] lg:pb-[30px] pb-[20px]">
                <div className="container">
                    <AwardHighlightBox />
                </div>
            </section>
            <section className="sm:p-[20px_0_30px_0] xl:p-[30px_0_40px_0] 2xl:p-[50px_0_60px_0] border-b border-b-[rgb(0,0,0,18%)] relative z-0 before:content-[''] before:absolute before:top-0 before:bottom-0 before:block before:w-full before:h-full before:bg-gradient-to-r before:from-[rgba(243,0,0,0.00)] before:to-[rgba(235,2,8,0.10)] before:pointer-events-none">
                <div className="container">
                    <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black font-medium mb-[10px]">All Awards</div>
                    <div className="flex flex-wrap -mx-[4px] lg:-mx-[15px] 2xl:-mx-[35px]">
                        {awards?.map((item, index) => (
                            <div key={index} className="w-full md:w-1/2 p-[6px_4px] lg:p-[10px_15px] 2xl:p-[25px_35px]">
                                <BlogCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
