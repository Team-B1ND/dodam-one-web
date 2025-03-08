import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const ProfileBox = styled.div`
display: flex;
align-items: center;
gap: 12px;
`

export const ProfileImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

export const ProfileText = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  span:nth-child(1){
    ${DodamTypography.Headline.Bold};
    color: ${({theme})=>theme.labelNormal};

  }
  span:nth-child(2){
    ${DodamTypography.Label.Medium};
    color: ${({theme})=>theme.labelAlternative};
  }
`
