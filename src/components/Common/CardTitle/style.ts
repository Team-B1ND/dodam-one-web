import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const CardTitleContainer = styled.div`
  width: 100%;
  min-height: 27px;
  display: flex;
  align-items: center;
  background: transparent;
`;

export const CardTitleIcon = styled.img`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: scale-down;
`;

export const CardTitleText = styled.p`
  margin-left: 10px;
  ${DodamTypography.Headline.Bold};
  color: ${({ theme }) => theme.labelNormal};
  white-space: nowrap;
`;


export const CardTitleRedirectIcon = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;
`;
