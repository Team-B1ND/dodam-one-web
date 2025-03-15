import { DodamColor, DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ScheduleItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ScheduleItemTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
  ${DodamTypography.Heading1.Regular};
  color: ${({ theme }) => theme.labelNormal};
  span{
    ${DodamTypography.Body2.Medium};
    color: ${({theme})=>theme.labelAssistive};
  }
`;

export const ScheduleItemTargetWrap = styled.div`
  width: 100%;
  height: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ScheduleItemTargetCategory = styled.span`
  width: 6px;
  height: 6px;
  ${DodamShape.ExtraSmall};
  background-color: ${DodamColor.red80};
`;

export const ScheduleItemTargetText = styled.span`
  ${DodamTypography.Body2.Medium}
  color: ${({ theme }) => theme.labelNormal};
`;

