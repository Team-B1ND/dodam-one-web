import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const SiginBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    padding: 10px 30px 10px 30px;
    width: 100%;
    height: 100%;
`
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const ResetPw = styled.span`
    display: flex;
    justify-content: end;
    gap: 5px;
    color: ${({theme})=>theme.labelAlternative};
    ${DodamTypography.Label.Medium}
    p{
        color: ${({theme})=>theme.labelNormal};
        cursor: pointer;
        text-decoration: underline;
    }
`
