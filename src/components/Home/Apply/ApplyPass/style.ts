import styled from "styled-components";
import { DodamShadow, DodamShape, DodamTypography } from "@b1nd/dds-web";

export const ApplyPassContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const ApplyPassFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const ApplyPassFormColumnWrap = styled.div`
  width: 100%;
  min-height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ApplyPassFormColumnTitle = styled.h1`
width: 75px;
  ${DodamTypography.Body1.Medium};
  color: ${({ theme }) => theme.labelNormal};

`;

export const ApplyPassFormInputWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;



export const ApplyPassFormTimeInputWrap = styled.div`
  width: 105px;
  height: 32px;
  display: flex;
  align-items: center;
  ${DodamShape.ExtraSmall};
  ${DodamShadow.Normal};
  background-color: ${({theme})=>theme.fillNormal};
  color: ${({ theme }) => theme.labelNormal};
  
`;

export const ApplyPassFormTimeInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0px;
  outline: none;
  text-align: center;
  background-color: transparent;
  color: ${({ theme }) => theme.labelNormal};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 500px transparent inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.labelNormal} !important;
    background-color: transparent !important;
    background-clip: text !important;
  }

`;

export const ApplyPassFormTimeInputTilde = styled.span`
  color: ${({ theme }) => theme.lineNormal};
  margin: 0px 5px;
`;