import { DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const MyWakeupSongBox = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
export const SongNullBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    span{
        ${DodamTypography.Body2.Regular}
        color: ${({theme})=>theme.labelNormal};
    }
`
export const WakeupSongWrap = styled.div`
    display: flex;
    flex-direction: column;
`