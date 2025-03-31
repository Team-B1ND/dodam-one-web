import React from "react";
import { EMealType } from "enum/Meal/meal.enum";
import * as S from "./style";
import { MealData } from "types/Meal/meal.type";
import { DodamTag } from "@b1nd/dds-web";

interface Props {
  mealData: MealData;
  mealType: EMealType;
  isMealTime: boolean;
}

const MealItem = ({ mealData, mealType }: Props) => {
  const makeCommaIfNotLast = (idx: number) =>
    idx !== mealData?.details.length - 1 ? "," : "";

  return (
    <S.MealItemContainer>
      <S.MealItemIconWrap>
       <DodamTag
        text={mealType} 
        color={"blue"}
        />
      </S.MealItemIconWrap>
      <S.MealItemTextWrap>
        {mealData?.details.map(
          (meal, idx) => ` ${meal.name.concat(makeCommaIfNotLast(idx))}`
        ) || `${String(mealType)}이 없습니다.`}
      </S.MealItemTextWrap>
      <S.KcalTextWrap>{mealData?.calorie !== null && mealData?.calorie !== undefined ? mealData.calorie+"Kcal" : ""}</S.KcalTextWrap>
    </S.MealItemContainer>
  );
};

export default React.memo(MealItem);
