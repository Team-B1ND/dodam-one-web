import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ApplyNotApproveListItemContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ApplyNotApproveListItemText = styled.span`
  ${DodamTypography.Body2.Medium};
  color: ${({ theme }) => theme.labelNormal};
`;

export const ApplyNotApproveListItemDeleteButton = styled.button`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0px;
  background: none;
  outline: none;

  ${ApplyNotApproveListItemContainer}:hover & {
    display: flex;
  }
`;

export const ApplyNotApproveListItemDeleteIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ApplyNotApproveListContnent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow:ellipsis 
  span{
    ${DodamTypography.Caption1.Medium}
    color: ${({theme})=>theme.labelAssistive};
  }
`