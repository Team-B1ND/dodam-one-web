import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const SignUpBox = styled.div<{section:string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({section})=> section=="first" ? "32px" : "10px" };
    padding: 10px 30px 10px 30px;
    width: 100%;
    height: 100%;
`
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const SignTitle = styled.p`
    display: flex;
    ${DodamTypography.Title2.Bold};
`