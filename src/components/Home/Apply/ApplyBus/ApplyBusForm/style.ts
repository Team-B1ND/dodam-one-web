import { customScrollBar } from "src/styles/libStyle";
import styled from "styled-components";

export const ApplyBusFormItemContainer = styled.div`
  width: 100%;
  height: 200px;
  padding: 0px 3px;
`;

export const ApplyBusFormItemWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  ${customScrollBar}
`;

export const ApplyBusFormVoidText = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.labelNormal};
`;
