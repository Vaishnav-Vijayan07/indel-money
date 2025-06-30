import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";

import LatestUpdates from "@/components/features/home/LatestUpdates";
import MobLatestUpdates from "@/components/features/blog/MobLatestUpdates";

async function fetchBlogsData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/blogs-latest`, {
      cache: "no-store", // Ensure fresh data
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();

    if (result.status === "success") {
      const { content, blogs } = result.data || {};
      return {
        content,
        blogs,
        error: null,
      };
    }
    return {
      content: null,
      blogs: null,
      error: result.message,
    };
  } catch (error) {
    return {
      content: null,
      blogs: null,
      error: "Failed to fetch blog data. Please try again.",
    };
  }
}



async function LatestBlogs() {
  const { content, blogs } = await fetchBlogsData();
  return (
    <>
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
          sliderItems={blogs || []}
          sliderTitle={content?.slider_title || "Latest Updates"}
          sliderButtonText={content?.slider_button_text || "View All"}
          sliderButtonLink={content?.slider_button_link || "/blog"}
        />
      </div>
    </>
  );
}

export default LatestBlogs;
