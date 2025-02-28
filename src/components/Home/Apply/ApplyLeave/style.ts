import styled,{css} from "styled-components";
import { DodamColor, DodamTypography } from "@b1nd/dds-web";

export const ApplyLeaveContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ApplyLeaveFormContainer = styled.div<{ isFold: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.labelNormal};
  ${({ isFold }) =>
    isFold
      ? css`
          left: 84px;
        `
      : css`
          left: 144px;
        `};
`;

export const ApplyLeaveFormColumnWrap = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ApplyLeaveFormColumnTitle = styled.h1`
  ${DodamTypography.Body1.Medium};
  color: ${({ theme }) => theme.labelNormal};

`;

export const ApplyLeaveFormInputWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ApplyLeaveFormDatePickerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ApplyLeaveFormTimeInputWrap = styled.div`
  width: 105px;
  height: 32px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.labelNormal};
  margin-left: 5px;
`;

export const ApplyLeaveFormTimeInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0px;
  outline: none;
  text-align: center;
  font-size: 12px;
  background-color: ${({ theme }) => theme.backgroundColor3};
  color: ${({ theme }) => theme.labelNormal};
`;

export const ApplyLeaveFormNoticeText = styled.p`
  ${DodamTypography.Caption2.Medium};
  color: ${DodamColor.red50};
`;