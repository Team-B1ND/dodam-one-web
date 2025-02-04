import React from "react"; 
import * as S from "./style";
import {Menu} from "@b1nd/dds-web";
import { useLocation } from "react-router-dom";
import { SIDEBAR_LINKS } from "src/constants/sidebar/sidebar.constant";
import { useSidebar } from "src/hooks/sidebar/useSidebar";
import DodamLogo from "src/assets/logo/Dodam_Logo.svg";
import { useTheme } from "styled-components";
import SideBarModal from "./sidebarModal";

export const DodamSidebar = () => {
  const {...sidebar} = useSidebar();
  const location = useLocation();
  const theme = useTheme();

  return (
    <>
    <S.DodamSidebarBox>
      <S.DodamSidebar>
        <S.DodamLogo>
          <img src={DodamLogo} alt="도담도담로고" />
        </S.DodamLogo>
        <S.DodamContent>
            <S.DodamButtonBox>
        {SIDEBAR_LINKS.map((item, idx) => {
            const Icon = item.img;
            return (
              <S.DodamButton $active={location.pathname === item.link} key={idx} as="a" onClick={()=>sidebar.handleMenuItemClick(item.link)}>
                {Icon && <Icon size={24} color={location.pathname === item.link ? theme.staticWhite : theme.labelNormal} />} 
                <span>
                  {item.name}
                </span>
              </S.DodamButton>
            );
          })}
          </S.DodamButtonBox>
           
        </S.DodamContent>
        <S.AddButton onClick={sidebar.hahdleOpenSidebar}>
            <Menu/>
            <span>더보기</span>
          </S.AddButton>
      </S.DodamSidebar>
    </S.DodamSidebarBox>
    <SideBarModal hahdleOpenSidebar={sidebar.hahdleOpenSidebar} modalOpen={sidebar.modalOpen}/>
    </>
  );
};
