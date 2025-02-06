import { PointType } from "src/api/point/point.param";
import { atom } from "recoil";

export const pointViewTypeAtom = atom<PointType>({
  key: "point/isDormitoryPointView",
  default: "DORMITORY",
});
