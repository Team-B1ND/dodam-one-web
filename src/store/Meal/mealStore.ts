import { atom } from "recoil";
import dateTransform from "utils/Transform/dateTransform";

export const mealDateAtom = atom({
  key: "meal/mealDateAtom",
  default: dateTransform.hyphen(),
});
