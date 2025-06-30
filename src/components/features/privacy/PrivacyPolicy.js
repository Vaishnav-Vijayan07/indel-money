import PageBreadcrumb from "@/components/common/PageBreadcrumb";
import parse, { domToReact } from "html-react-parser";
import React from "react";

function formatSlugToTitle(slug) {
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return `<span>${title}</span>`;
}

const options = {
  replace: (node) => {
    if (node.name === "li") {
      return (
        <li className="3xl:text-[20px] 2xl:text-[15px] xl:text-[13px] text-[12px] text-[#323232] relative pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base1 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px] mb-[3px] last:mb-0">
          {domToReact(node.children, options)}
        </li>
      );
    }
    // Optional: strip <ul> class and use your own outside
    if (node.name === "ul") {
      return (
        <ul className="w-full bg-[#ECF4FF] rounded-[20px] xl:rounded-[24px] overflow-hidden px-[20px] xl:px-[25px] 2xl:px-[30px] py-[15px] mb-[15px] xl:mb-[20px] 2xl:mb-[35px]">
          {domToReact(node.children, options)}
        </ul>
      );
    }

    if (node.name === "ol") {
      return React.createElement(
        node.name,
        {
          className:
            "w-full bg-[#ECF4FF] rounded-[20px] xl:rounded-[24px] overflow-hidden px-[20px] xl:px-[25px] 2xl:px-[30px] py-[15px] mb-[15px] xl:mb-[20px] 2xl:mb-[35px] list-decimal",
        },
        domToReact(node.children, options)
      );
    }
  },
};

export default function PrivacyPolicy({ content, type }) {
  console.log(content);

  return (
    <section className="w-full pt-[30px] pb-[20px] 2xl:pt-[50px]  2xl:pb-[70px] md:pb-[40px] sm:pt-[30px] sm:pb-[30px]">
      <div className="container">
        <div className="w-full pb-[20px] lg:pb-[30px] 2xl:pb-[40px]">
          <h1 className="text-title2 text-black mb-[15px] 2xl:mb-[20px] [&>span]:text-base2  [&>span]:font-bold ">
            {type ? parse(formatSlugToTitle(type)) : ""}
          </h1>
          <PageBreadcrumb />
        </div>
        {content ? parse(content) : ""}
      </div>
    </section>
  );
}
