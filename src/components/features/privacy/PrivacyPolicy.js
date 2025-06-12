import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import { renderHtml } from "@/lib/utils/htmlParser";

function formatSlugToTitle(slug) {
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return `<span>${title}</span>`;
}

export default function PrivacyPolicy({ content, type }) {
  return (
    <section className="w-full pt-[30px] pb-[20px] 2xl:pt-[50px]  2xl:pb-[70px] md:pb-[40px] sm:pt-[30px] sm:pb-[30px]">
      <div className="container">
        <div className="w-full pb-[20px] lg:pb-[30px] 2xl:pb-[40px]">
          <h1 className="text-title2 text-black mb-[15px] 2xl:mb-[20px] [&>span]:text-base2  [&>span]:font-bold ">
            {type ? renderHtml(formatSlugToTitle(type)) : ""}
          </h1>
          <PageBreadcrumb />
        </div>
        {content ? renderHtml(content) : ""}
      </div>
    </section>
  );
}
