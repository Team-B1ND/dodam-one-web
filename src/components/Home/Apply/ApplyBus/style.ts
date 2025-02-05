import styled from "styled-components";
import { customScrollBar } from "src/styles/libStyle";

export const ApplyBusContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ApplyBusDate = styled.span`
  margin: 16px 0px;
  font-size: 16px;
  color: ${({ theme }) => theme.contrast};
`;

export const ApplyBusItemContainer = styled.div`
  width: 100%;
  height: 191px;
  padding: 0px 3px;
`;

export const ApplyBusItemWrap = styled.div`
  width: 100%;
  height: 191px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  ${customScrollBar}
`;
