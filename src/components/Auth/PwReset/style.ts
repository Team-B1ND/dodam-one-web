import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const PwResetBox = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    padding: 10px 30px 10px 30px;
    width: 100%;
    height: 100%;
    color: ${({theme})=>theme.labelNormal};
    ${DodamTypography.Title2.Bold};
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
