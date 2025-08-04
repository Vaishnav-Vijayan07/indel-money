import { startCase, toLower } from "lodash";

export const toSentenceCase = (str = "") => {
  return str
    .split(",")
    .map((s) => startCase(toLower(s.trim())))
    .join(", ");
};
