import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const ScheduleContainer = styled.div`
  display: flex;
  height: min-content;
  min-height: 250px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  ${DodamShape.Large};
  background-color: ${({ theme }) => theme.backgroundNormal};
`;
