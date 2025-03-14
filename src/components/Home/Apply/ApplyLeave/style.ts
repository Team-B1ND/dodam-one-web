import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const ApplyLeaveContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ApplyLeaveFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.labelNormal};

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