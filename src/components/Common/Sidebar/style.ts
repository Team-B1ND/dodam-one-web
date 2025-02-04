import styled from "styled-components";
import { DodamShape,DodamTypography } from "@b1nd/dds-web";

export const DodamSidebarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 58px ;
  width: 250px;
  height:  800px;
  @media (min-width: 768px) {  
          width: 16rem;
      }
`

export const DodamSidebar = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 200px; */
  width: 90%;
  height: 100%;
  padding: 12px;
  ${DodamShape.Large};
  background-color: ${({ theme }) => theme.backgroundNormal};
`
export const DodamLogo = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  height: 20px;
  margin-bottom: 8px;
  padding-left: 5px;
`


export const DodamContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
`;

export const DodamButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 55%;
`

export const DodamButton = styled.div<{$active:boolean}>`
  display: flex;
  align-items: center;
  padding-left: 10px;
  gap: 10px;
  width: 100%;
  height: 48px;
  background-color: ${({ theme,$active }) => $active ?  theme.primaryNormal : " "};
  span{
    ${DodamTypography.Body1.Medium}
    color:  ${({theme, $active})=>$active ? theme.staticWhite :theme.labelNormal };
  }
  
  ${DodamShape.Medium}
  cursor: pointer;
  &:active{
    box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  }
  color: white;
  img{
    background-color: white;
  }
`
export const AddButton = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  padding-left: 10px;
  gap: 8px;
  cursor: pointer;
  span{
    ${DodamTypography.Body1.Medium}
    color:  ${({theme})=> theme.labelNormal };
  }
`