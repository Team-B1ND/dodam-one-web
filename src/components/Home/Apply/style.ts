import styled, { css } from "styled-components";
import { DodamColor, DodamShape, DodamTypography } from "@b1nd/dds-web";



export const ApplyContainer = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundNormal};
  padding: 20px 20px 10px 20px;
  ${DodamShape.Large};
`;

export const ApplyTitleWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ApplyTitleText = styled.p`
  ${DodamTypography.Headline.Bold};
  color: ${({ theme }) => theme.labelNormal};
  cursor: pointer;

`;

export const ApplyTitleItemWrap = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const ApplyTitleItem = styled.div<{ isSelect: Boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${DodamColor.netural20};
    transition: border-bottom 0.1s ease-out;

    ${({ isSelect }) =>
      isSelect &&
      css`
        color: ${DodamColor.blue50};
        border-bottom: 3px solid ${DodamColor.netural15};
      `};
  }
`;

export const ApplyFormWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;


export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 10px;
  justify-content: space-between;
`

export const TextAreaWrap = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 80px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.lineNeutral};
  resize: none;
  outline: none;
  background-color: ${({ theme }) => theme.fillNormal};
  box-sizing: border-box;
  overflow-y: hidden;
  color: ${({ theme }) => theme.labelAssistive};
  ${DodamShape.ExtraSmall}
  ${DodamTypography.Caption1.Medium};

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.primaryNormal};
  }
`;


export const DatePickerBox = styled.div`

`