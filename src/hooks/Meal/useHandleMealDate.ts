import dayjs from "dayjs";
import { useMealStore } from "store/Meal/mealStore";


const useHandleMealDate = () => {
  const { mealDate, setMealDate } = useMealStore();

  const handleMealDate = (e: Date) => {
    setMealDate(dayjs(e).format("YYYY-MM-DD"));
  };

  const prevMealDate = () => {
    setMealDate(dayjs(mealDate).subtract(1, "day").format("YYYY-MM-DD"));
  };

  const nextMealDate = () => {
    setMealDate(dayjs(mealDate).add(1, "day").format("YYYY-MM-DD"));
  };

  return {
    handleMealDate,
    prevMealDate,
    nextMealDate,
  };
};

export default useHandleMealDate;
