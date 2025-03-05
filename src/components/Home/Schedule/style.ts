import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const ScheduleContainer = styled.div`
  display: flex;
  min-height: 230px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  ${DodamShape.Large};
  background-color: ${({ theme }) => theme.backgroundNormal};
`;
