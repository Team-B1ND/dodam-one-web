import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const TodayScheduleContainer = styled.div`
 display: flex;
  width: 388px;
  min-height: 200px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  ${DodamShape.Large};
  background-color: ${({ theme }) => theme.backgroundNormal};
`;
