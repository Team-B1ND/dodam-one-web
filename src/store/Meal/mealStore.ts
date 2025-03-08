import { atom } from "recoil";
import dateTransform from "src/utils/Transform/dateTransform";

export const mealDateAtom = atom({
  key: "meal/mealDateAtom",
  default: dateTransform.hyphen(),
});
