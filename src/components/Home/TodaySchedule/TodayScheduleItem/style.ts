import { DodamColor, DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const TodayScheduleItemContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TodayScheduleItemTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: ${({ theme }) => theme.labelNormal};
`;

export const TodayScheduleItemTargetWrap = styled.div`
  width: 100%;
  height: 16px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export const TodayScheduleItemTargetCategory = styled.span`
  width: 6px;
  height: 6px;
  ${DodamShape.ExtraSmall};
  background-color: ${DodamColor.red80};
`;

export const TodayScheduleItemTargetText = styled.span`
  color: ${({ theme }) => theme.labelNormal};
`;

