import { create } from "zustand";
import { PointType } from "repositories/Point/point.param";

interface PointState {
  pointViewType: PointType;
  setPointViewType: (type: PointType) => void;
}

export const usePointStore = create<PointState>((set) => ({
  pointViewType: "DORMITORY",
  setPointViewType: (type) => set({ pointViewType: type }),
}));
