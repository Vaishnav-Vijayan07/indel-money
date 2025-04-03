"use client"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlogCard from "@/components/common/BlogCard";

const blogs = [
    {
        href: "/",
        image: "/images/blog-1.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie.",
    },
    {
        href: "/",
        image: "/images/blog-2.jpg",
        alt: "news-1",
        date: "24 SEPTEMBER 2024:",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        discription: "Aliquam malesuada risus at nulla egestas, sit amet feugiat tortor molestie.",
    },
];

const RecentBlog = () => {
    return (
        <section className="p-[5px_0_30px_0] sm:p-[10px_0_40px_0] 2xl:p-[35px_0_75px_0]">
            <div className="container">
                <div className="text-sm sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-black font-medium 2xl:mb-[45px] sm:mb-[15px] mb-[10px]">Recent Blogs</div>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 15 },
                        992: { slidesPerView: 2, spaceBetween: 30 },
                        1536: { slidesPerView: 2, spaceBetween: 70 },
                    }}
                    className="blog-slider"
                >
                    {blogs?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <BlogCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RecentBlog;
