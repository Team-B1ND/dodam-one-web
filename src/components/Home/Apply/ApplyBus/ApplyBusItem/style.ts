import styled, { css } from "styled-components";
import { DodamColor } from "@b1nd/dds-web";

export const ApplyBusItemContainer = styled.div`
  width: 348px;
  min-height: 32px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding-left: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const ApplyBusItemText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.labelStrong};
`;

export const ApplyBusItemLimit = styled.span<{ isLimit: boolean }>`
  ${({ isLimit, theme }) =>
    isLimit
      ? css`
          color: ${DodamColor.red50};
        `
      : css`
          color: ${theme.labelStrong};
        `}
`;

export const ApplyBusItemCheckIcon = styled.div<{ check: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-left: auto;
  margin-right: 18px;
  color: ${({ theme }) => theme.borderColor};
  ${({ check }) =>
    check &&
    css`
      color: ${DodamColor.blue50};
    `};
`;

export const ApplyBusItemDeleteButton = styled.button`
  width: 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.desableBackground};
  border: 0px;
  border-left: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ApplyBusItemDeleteIcon = styled.div`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};

  ${ApplyBusItemDeleteButton}:hover & {
    color: ${DodamColor.red50};
  }
`;
