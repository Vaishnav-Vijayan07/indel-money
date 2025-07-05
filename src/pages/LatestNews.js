import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadcrumb";

import LatestUpdates from "@/components/features/home/LatestUpdates";
import MobLatestUpdates from "@/components/features/blog/MobLatestUpdates";

async function fetchNewsData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/news-latest`, {
      cache: "no-store", // Ensure fresh data
    });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();

    if (result.status === "success") {
      const { content, news } = result.data || {};
      return {
        content,
        news,
        error: null,
      };
    }
    return {
      content: null,
      news: null,
      error: result.message,
    };
  } catch (error) {
    return {
      content: null,
      news: null,
      error: "Failed to fetch news data. Please try again.",
    };
  }
}

async function LatestNews() {
  const { content, news } = await fetchNewsData();
  return (
    <>
      <section className="w-full block pt-[30px] sm:py-[20px] lg:py-[30px] 2xl:py-[50px]">
        <div className="container">
          <div className="text-title1 font-bold text-base2">{content?.title || "News"}</div>
          <div className="sm:block hidden">
            <PageBreadcrumb />
          </div>
        </div>
      </section>
      <div className="sm:hidden block">
        <MobLatestUpdates
          sliderItems={news || []}
          sliderTitle={content?.slider_title || "Latest Updates"}
          type="news"
        />
      </div>
      <div className="sm:block hidden">
        <LatestUpdates
          sliderItems={news || []}
          sliderTitle={content?.slider_title || "Latest Updates"}
          sliderButtonText={content?.slider_button_text || "View All"}
          sliderButtonLink={content?.slider_button_link || "/news"}
          type="news"
        />
      </div>
    </>
  );
}

export default LatestNews;
