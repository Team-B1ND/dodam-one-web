import styled from "styled-components";
import { DodamShape } from "@b1nd/dds-web";

export const BannerItemContainer = styled.img<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 114px;
  object-fit: cover;
  border-radius: ${DodamShape.Large};
  cursor: pointer;
`;
