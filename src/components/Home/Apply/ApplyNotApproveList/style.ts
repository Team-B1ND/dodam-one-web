import styled from "styled-components";
import { DodamColor } from "@b1nd/dds-web";

export const ApplyNotApproveListFoldButton = styled.button`
  width: 28px;
  height: 28px;
  padding: 5px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.labelNormal};
  border-left: 0px;
  border-radius: 0 5px 5px 0;
  background-color: ${({ theme }) => theme.backgroundNormal};
  margin-top: 12px;
  cursor: pointer;
  outline: none;
`;

export const ApplyNotApproveListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 170px;
  overflow: hidden;
  color: ${({theme})=>theme.labelNormal};

`;

export const ApplyNotApproveListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 5px;
`;

export const ApplyNotApproveListFoldIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${DodamColor.blue50};
  font-size: 17px;
`;

export const ApplyNotApproveListVoidWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ApplyNotApproveListVoidIcon = styled.div`
  width: 42px;
  height: 42px;
  font-size: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.lineNormal};
`;
