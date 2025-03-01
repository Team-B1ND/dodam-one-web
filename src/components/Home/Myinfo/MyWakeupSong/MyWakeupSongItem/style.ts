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
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

export const MyInfoWakeupSongItemTitle = styled.h1`
  width: 100px;
  ${DodamTypography.Caption1.Medium}
  color: ${({ theme }) => theme.labelNormal};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MyInfoWakeupSongItemSubInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MyInfoWakeupSongItemSubTitle = styled.span`
  ${DodamTypography.Caption2.Medium};
  color: ${({ theme }) => theme.labelNormal};
  overflow: hidden;
`;
