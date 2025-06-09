import parse from "html-react-parser";

const renderStyledList = (htmlString) => {
  return parse(htmlString, {
    replace: (domNode) => {
      if (domNode.name === "li") {
        return (
          <li className="2xl:text-[20px] xl:text-[15px] lg:text-[14px] text-[13px] text-[#323232] relative sm:pl-[20px] before:content-[''] before:absolute before:top-[6px] 2xl:before:top-[10px] before:left-0 before:rounded-full before:bg-base1 before:w-[6px] 2xl:before:w-[8px] before:h-[6px] 2xl:before:h-[8px] sm:before:block before:hidden sm:mb-[3px] mb-[5px]">
            {parse(domNode.children.map((c) => c.data || "").join(""))}
          </li>
        );
      }
    },
  });
};

export { renderStyledList };
