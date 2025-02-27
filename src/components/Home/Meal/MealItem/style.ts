import styled from "styled-components";
import { EMealType } from "src/enum/Meal/meal.enum";
import { DodamTypography } from "@b1nd/dds-web";

export const MealItemContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MealItemIconWrap = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  
`;

export const MealItemIcon = styled.img`
  width: 43px;
  height: 35px;
  object-fit: scale-down;
`;

export const MealItemIconLabel = styled.div<{ mealType: EMealType }>`
  width: 61px;
  height: 22px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  background-color: ${({theme})=>theme.primaryNormal};

  /* ${({ mealType }) =>
    mealType === EMealType.BREAKFAST && "background-color :#fca800"};

  ${({ mealType }) =>
    mealType === EMealType.LUNCH && "background-color :#3dbde5"};

  ${({ mealType }) =>
    mealType === EMealType.DINNER && "background-color :#a252e1"}; */
`;

export const MealItemTextWrap = styled.div`
  width: 100%;
  margin-right: 5px;
  color: ${({ theme }) => theme.labelNormal};
  display: flex;
  flex-wrap: wrap;
  ${DodamTypography.Body2.Medium};
`;
