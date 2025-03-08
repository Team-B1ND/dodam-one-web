import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ScheduleListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ScheduleListVoidText = styled.p`
  ${DodamTypography.Body1.Medium};
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.labelNormal};
  
`;
