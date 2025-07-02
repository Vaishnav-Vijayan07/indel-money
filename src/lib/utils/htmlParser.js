import parse from "html-react-parser";

export const renderHtml = (htmlString) => {
  return parse(htmlString);
};
