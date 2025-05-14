import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const MyInfoBox = styled.div`
    display: flex;
    width: 100%;
    height: min-content;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    ${DodamShape.Large};
    background-color: ${({theme})=>theme.backgroundNormal};
    @media (max-width: 1068px) {
      padding: 8px;
    }
`
export const MyInfoProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 64px;
`
export const Title = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 100%;
    ${DodamTypography.Headline.Bold};
    color: ${({theme})=>theme.labelNormal};

`

export const MyPoint = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 130px;
`

export const MyWakeupSong = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: min-content;
    max-height: 485px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
      display: none;
    }

    scrollbar-width: none;
`