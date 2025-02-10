import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap:24px;
`
export const CheckWrap = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CheckmarkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Label.Regular};
    cursor: pointer;
  }
  span {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Label.Medium};
    text-decoration: underline;
  }
`;