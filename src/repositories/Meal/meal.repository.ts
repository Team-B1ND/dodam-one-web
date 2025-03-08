import { dodamAxios } from "src/libs/Axios/customAxios";
import { MealResponse } from "src/types/Meal/meal.type";
import { getMealParam } from "./meal.param";

class MealRepository {
  public async getMeal({
    year,
    month,
    day,
  }: getMealParam): Promise<MealResponse> {
    const { data } = await dodamAxios.get(
      `/meal?year=${year}&month=${month}&day=${day}`
    );
    return data;
  }
}

export default new MealRepository();
