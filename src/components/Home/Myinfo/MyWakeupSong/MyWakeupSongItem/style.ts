import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const MyInfoWakeupSongItemContainer = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;

  &:hover {
    opacity: 85%;
  }
`;

export const MyInfoWakeupSongItemImg = styled.img`
  height: 35px;
  object-fit: cover;
  border-radius: 3px;
`;

export const MyInfoWakeupSongItemInfoWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MyInfoWakeupSongItemTitle = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  ${DodamTypography.Caption1.Medium}
  color: ${({ theme }) => theme.labelNormal};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const MyInfoWakeupSongItemSubInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MyInfoWakeupSongItemSubTitle = styled.span`
  ${DodamTypography.Caption2.Medium};
  color: ${({ theme }) => theme.labelNormal};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;
