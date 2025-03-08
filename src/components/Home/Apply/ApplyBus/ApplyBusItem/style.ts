import styled, { css } from "styled-components";
import { DodamTypography, DodamShape } from "@b1nd/dds-web";

export const ApplyBusItemContainer = styled.div`
  width: 100%;
  min-height: 32px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${DodamShape.ExtraSmall};

  &:hover {
    background-color: ${({theme})=>theme.fillNormal};
  }
`;

export const ApplyBusItemText = styled.p`
  ${DodamTypography.Headline.Medium};
  color: ${({ theme }) => theme.labelStrong};
`;

export const ApplyBusItemLimit = styled.span<{ 
  isLimit: boolean; 
  isCheck: boolean;
  }>`
  
  ${({ isLimit, isCheck, theme }) => css`
    color: ${isLimit
      ? theme.statusNegative
      : isCheck
      ? theme.primaryNormal
      : theme.labelAlternative};
  `}
`;


export const ApplyBusItemCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`