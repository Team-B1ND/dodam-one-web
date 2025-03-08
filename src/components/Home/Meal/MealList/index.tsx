import dayjs from "dayjs";
import { EMealType } from "src/enum/Meal/meal.enum";
import useMeal from "src/hooks/Meal/useMeal";
import { useRecoilValue } from "recoil";
import { mealDateAtom } from "src/store/Meal/mealStore";
import dateTransform from "src/utils/Transform/dateTransform";
import MealItem from "../MealItem";
import { MealListContainer } from "./style";

import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

const MealList = () => {
  const { meal } = useMeal();

  const mealDate = useRecoilValue(mealDateAtom);

  const { BREAKFAST, LUNCH, DINNER } = EMealType;
  const currentTime = dateTransform.fullDate().split(" ")[1];
  const currentDate = dayjs(dateTransform.fullDate(mealDate + currentTime));

  return (
    <MealListContainer>
      <MealItem
        mealData={meal?.breakfast!}
        mealType={BREAKFAST}

        isMealTime={
          currentDate.isBetween(
            `${dateTransform.hyphen()} 05:00`,
            `${dateTransform.hyphen()} 07:50`,
            "minute"
          ) && meal?.breakfast! !== null
        }
      />
      <MealItem
        mealData={meal?.lunch!}
        mealType={LUNCH}
        isMealTime={
          currentDate.isBetween(
            `${dateTransform.hyphen()} 07:50`,
            `${dateTransform.hyphen()} 13:20`,
            "minute"
          ) && meal?.lunch! !== null
        }
      />
      <MealItem
        mealData={meal?.dinner!}
        mealType={DINNER}
        isMealTime={
          currentDate.isBetween(
            `${dateTransform.hyphen()} 13:20`,
            `${dateTransform.hyphen()} 19:10`,
            "minute"
          ) && meal?.dinner! !== null
        }
      />
    </MealListContainer>
  );
};

export default MealList;
