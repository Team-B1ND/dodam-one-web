import styled from "styled-components";
import { EMealType } from "enum/Meal/meal.enum";
import { DodamTypography } from "@b1nd/dds-web";

export const MealItemContainer = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  gap: 5px;

  -webkit-user-select:text;
  -moz-user-select:text;
  -ms-user-select:text;
  user-select:text
`;

export const MealItemIconWrap = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  div{
    min-height: 25px;
  }
  span{
    padding: 1px 0 !important; 
  }
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
  ${DodamTypography.Caption1.Bold};
  background-color: ${({theme})=>theme.primaryNormal};

`;

export const MealItemTextWrap = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.labelNormal};
  display: flex;
  flex-wrap: wrap;
  ${DodamTypography.Caption1.Medium};
`;


export const KcalTextWrap = styled.span`
  ${DodamTypography.Caption2.Medium};
  color: ${({theme})=>theme.labelAssistive};
`