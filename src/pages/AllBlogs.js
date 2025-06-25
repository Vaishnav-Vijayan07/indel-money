import React, { Suspense } from "react";
import AllBlogs from "@/components/blog/AllBlogs";

async function fetchAllBlogs(page = 1, limit = 10) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs?page=${page}&limit=${limit}`, {
      cache: "no-store", // Ensure fresh data
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();

    console.log("Fetched blogs:", result);

    if (result.status === "success") {
      const { blogs, pagination } = result.data || {};
      return {
        blogs,
        pagination,
        error: null,
      };
    }
    return {
      blogs: null,
      pagination: null,
      error: result.message,
    };
  } catch (error) {
    return {
      blogs: null,
      pagination: null,
      error: "Failed to fetch blog data. Please try again.",
    };
  }
}

async function AllBlogsPage({ page = 1 }) {
  const { blogs, pagination, error } = await fetchAllBlogs(page);
  if (!blogs) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{"Failed to fetch blog data."}</div>;
  }

  return <AllBlogs blogs={blogs} pagination={pagination} />;
}

export default AllBlogsPage;
