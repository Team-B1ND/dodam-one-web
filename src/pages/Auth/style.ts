import styled from "styled-components";
import { DodamShape,DodamTypography } from "@b1nd/dds-web";

export const Main = styled.div`
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.backgroundAlternative};
    @media (max-width: 729px) {
    padding: 0 20px 0 20px;
    }
    /* @media (max-width:426px) {
        padding: ;
    } */
`

export const SignBox = styled.div`
    display: flex;
    width: 737px;
    height: 461px;
    background-color: ${({theme})=>theme.backgroundNormal};
    ${DodamShape.Medium}
    @media (max-width: 729px) {
        width: 400px;
    img{
        display: none;
    }
    }
    @media (max-width: 426px) {
        width: 320px;
    }
`

export const AuthOppositePartText = styled.p`
    
    position: absolute;
    bottom: 5%;
    ${DodamTypography.Label.Medium}
      color: ${({theme})=>theme.labelAssisitive};
      span{
        text-decoration: underline;
        margin-left: 5px;
        color: ${({theme})=>theme.lineNormal};
        cursor: pointer;
      }
`