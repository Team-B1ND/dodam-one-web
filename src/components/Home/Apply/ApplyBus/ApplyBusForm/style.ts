import { customScrollBar } from "src/styles/libStyle";
import styled from "styled-components";

export const ApplyBusFormDate = styled.span`
  margin: 16px 0px;
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
`;

export const ApplyBusFormItemContainer = styled.div`
  width: 100%;
  height: 191px;
  padding: 0px 3px;
`;

export const ApplyBusFormItemWrap = styled.div`
  width: 100%;
  height: 191px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  ${customScrollBar}
`;

export const ApplyBusFormVoidText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
  margin: auto;
`;
