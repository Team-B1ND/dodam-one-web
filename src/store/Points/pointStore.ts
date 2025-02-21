import { PointType } from "@src/repositories/Point/point.param";
import { atom } from "recoil";

export const pointViewTypeAtom = atom<PointType>({
  key: "point/isDormitoryPointView",
  default: "DORMITORY",
});
