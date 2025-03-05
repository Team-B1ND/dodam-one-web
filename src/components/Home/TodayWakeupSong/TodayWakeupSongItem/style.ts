import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

export const TodayWakeupSongItemContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  padding-left: 5px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  ${DodamShape.Medium};
  &:hover{
    background-color: ${({theme})=>theme.fillNormal};
  }
`;

export const TodayWakeupSongItemBackgroundWrap = styled.div`
  width: 72px;
  height: 72px;
  overflow: hidden;
  ${DodamShape.Medium};
`;

export const TodayWakeupSongItemBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TodayWakeupSongItemTextWrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  span {
    color: ${({theme})=>theme.labelNormal};
  }
  span:nth-child(1){
    ${DodamTypography.Body1.Medium};
  }
  span:nth-child(2){
    ${DodamTypography.Label.Medium};
  }
`;


