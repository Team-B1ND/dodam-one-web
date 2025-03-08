import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";


export const PointBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    width: 100%;
    height: 100%;
    color: ${({theme})=>theme.labelNormal};
`
export const PointTextBox = styled.div<{type:string}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35px;
    height: 100%;
    span{
        text-align: center;
    }
    span:nth-child(1){
        ${DodamTypography.Body1.Medium};
        color:${({theme})=>theme.labelAssistive};
    }
    span:nth-child(2){
        ${DodamTypography.Body1.Medium};
        color:${({theme, type})=>type == "상점"? theme.primaryNormal : theme.statusNegative};
    }
`

export const MyPointType = styled.div`
    display: flex;
    justify-content: end;
    gap: 5px;
    width: 100%;
`