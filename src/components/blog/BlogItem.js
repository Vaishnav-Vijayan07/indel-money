"use client";

import React from "react";
import MobBlogListCard from "../features/blog/MobBlogListCard";
import BlogCard from "../common/BlogCard";
import Link from "next/link";

function BlogItem({ item, index }) {
  return (
    <div key={index} className="w-full md:w-1/2 p-[6px_4px] lg:p-[10px_15px] 2xl:p-[30px_35px]">
      <div className="sm:hidden block">
        <MobBlogListCard item={item} />
      </div>
      <div className="sm:block hidden">
        <Link href={`/${item?.slug}`}>
          <BlogCard item={item} />
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
