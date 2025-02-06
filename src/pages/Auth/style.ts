import styled from "styled-components";
import { DodamShape } from "@b1nd/dds-web";

export const Main = styled.div`
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=>theme.backgroundAlternative};
`

export const SignBox = styled.div`
    display: flex;
    width: 737px;
    height: 461px;
    background-color: ${({theme})=>theme.backgroundNormal};
    ${DodamShape.Medium}
    @media (max-width: 568px) {
    img{
        display: none;
    }
    }
`
