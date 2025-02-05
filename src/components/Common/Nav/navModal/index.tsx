import React from "react";
import { DodamModal, ChevronRight, DodamToggleButton } from "@b1nd/dds-web";
import { SIDE_BAR_MODAL_ITEM,SIDE_BAR_MODAL_DAUTH } from "src/constants/nav/modal.constant";
import * as S from "./style";
import {useTheme} from "styled-components";
import {useThemes} from "src/hooks/theme/usetheme";
import { ETheme } from "src/enum/theme/theme.enum";
import { useRecoilValue } from "recoil";
import { themeModeAtom } from "src/store/theme/themeStore";


interface modalProps{
    hahdleOpenSidebar: ()=>void;
    modalOpen: boolean;
}

const SideBarModal = ({hahdleOpenSidebar,modalOpen}:modalProps) => {
    const theme = useTheme();
    const { handleTheme } =useThemes();
    const currentTheme = useRecoilValue(themeModeAtom);

    const linkMovement = (link:string)=>{
        window.open(link)
    }
    const { DARK } = ETheme;
    
    return(
        <DodamModal isOpen={modalOpen} close={hahdleOpenSidebar} customStyle={{display:"block"}} background={false}>
            <S.Popover onClick={(e) => e.stopPropagation()} >
                <S.ModalBox onClick={()=>linkMovement(SIDE_BAR_MODAL_DAUTH.link)}>
                    <span>Dauth</span>
                    <ChevronRight size={16} color={theme.labelAssisitive}/>
                </S.ModalBox>
                <S.ModalBox style={{borderBottom:`1px`}}>
                    <span>{currentTheme === DARK ? "라이트" : "다크"}</span>
                    <DodamToggleButton isAtv={currentTheme==DARK} onClick={handleTheme}/>
                </S.ModalBox>
                {SIDE_BAR_MODAL_ITEM.map((item)=>(
                    <S.ModalBox onClick={()=>linkMovement(item.link)}>
                        {item.name}
                      <ChevronRight size={16} color={theme.labelAssisitive}/>
                    </S.ModalBox>
                ))}
            </S.Popover>
        </DodamModal>
    )
}
export default SideBarModal;