import React, { Suspense } from "react";
import AllBlogs from "@/components/blog/AllBlogs";

async function fetchAllNews(page = 1, limit = 10) {
  

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/news?page=${page}&limit=${limit}`, {
      cache: "no-store", // Ensure fresh data
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();

    if (result.status === "success") {
      const { news, pagination, title } = result.data || {};
      return {
        title,
        news,
        pagination,
        error: null,
      };
    }
    return {
      title: null,
      news: null,
      pagination: null,
      error: result.message,
    };
  } catch (error) {
    return {
      title: null,
      news: null,
      pagination: null,
      error: "Failed to fetch news data. Please try again.",
    };
  }
}

async function AllNewsPage({ page = 1 }) {
  const { news, pagination, title, error } = await fetchAllNews(page);
  if (!news) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{"Failed to fetch news data."}</div>;
  }

  return <AllBlogs blogs={news} pagination={pagination} title={title} type="news" />;
}

export default AllNewsPage;
