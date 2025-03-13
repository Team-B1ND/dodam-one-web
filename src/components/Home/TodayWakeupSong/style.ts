import styled from "styled-components";
import { DodamShape } from "@b1nd/dds-web";

export const TodayWakeupSongContainer = styled.div`
  height: min-content;
  min-height: 250px;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${DodamShape.Large};
`;
