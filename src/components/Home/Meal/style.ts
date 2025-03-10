import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";


export const MealDatePickerContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const MealTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100px;
  height: 100%;
  span{
    color: ${({theme})=>theme.labelNormal};
    ${DodamTypography.Headline.Bold};
  }
`

export const MealContainer = styled.div`
  height: min-content;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${DodamShape.Large};
`;
