import { startCase, toLower } from "lodash";

export const toSentenceCase = (str = "") => {
  console.log("toSentenceCase input:", str);
  return startCase(toLower(str));
};