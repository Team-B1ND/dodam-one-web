import { useRecoilValue } from "recoil";
import { mealDateAtom } from "src/store/Meal/mealStore";
import * as S from "./style";
import { DodamErrorBoundary,DodamDatePicker, CookedRice } from "@b1nd/dds-web";
import useHandleMealDate from "src/hooks/Meal/useHandleMealDate";
import { Suspense } from "react";
import MealList from "./MealList";

const Meal = () => {
  const mealDate = useRecoilValue(mealDateAtom);
  const { handleMealDate } = useHandleMealDate();


  return (
    <S.MealContainer>
      <S.MealDatePickerContainer>
        <S.MealTitleContainer>
          <CookedRice/>
          <span>급식</span>
        </S.MealTitleContainer>
      
      <DodamDatePicker
          itemKey="mealDatePicker"
          width={100}
          height={30}
          customStyle={{ border: 0,color:"#0083F0",margin:"0 auto"}}
          onChange={handleMealDate} 
          value={mealDate} 
          title="급식"          
          type="entire"
        />
      </S.MealDatePickerContainer>
      <DodamErrorBoundary text="에러발생" showButton={true}>
        <Suspense fallback={<>로딩중...</>}>
          <MealList />
        </Suspense>
      </DodamErrorBoundary>
    </S.MealContainer>
  );
};

export default Meal;
