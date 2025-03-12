import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const TodayWakeupSongListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TodayWakeupSongListVoidText = styled.p`
  ${DodamTypography.Body1.Medium}
  color: ${({ theme }) => theme.labelNormal};
  margin: auto 0px;
`;
