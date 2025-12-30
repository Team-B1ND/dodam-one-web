import { create } from "zustand";
import dateTransform from "utils/Transform/dateTransform";

interface MealState {
  mealDate: string;
  setMealDate: (date: string) => void;
}

export const useMealStore = create<MealState>((set) => ({
  mealDate: dateTransform.hyphen(),
  setMealDate: (date) => set({ mealDate: date }),
}));
