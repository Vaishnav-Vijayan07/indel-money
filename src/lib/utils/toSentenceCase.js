import { startCase, toLower } from "lodash";

export const toSentenceCase = (str = "") => {
  return startCase(toLower(str));
};