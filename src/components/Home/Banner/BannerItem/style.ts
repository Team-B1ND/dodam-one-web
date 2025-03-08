import styled from "styled-components";
import { DodamShape } from "@b1nd/dds-web";

export const BannerItemContainer = styled.img`
  
  height: 108px;
  object-fit: cover;
  border-radius: ${DodamShape.Large};
  cursor: pointer;

  img{
    width: 100% !important;
  }
`;
