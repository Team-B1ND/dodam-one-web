import { DodamShape } from "@b1nd/dds-web";
import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    height: 100vh;
    padding: 58px 0px 58px 32px ;
    @media (max-width: 1068px) {
      padding: 28px 0px 58px 32px ;
      }
    @media (max-width: 797px) {
      width: 100%;
      padding: 28px 28px 58px 32px ;
      overflow-y: scroll;
    }
    &::-webkit-scrollbar {
    display: none;
  }
`
export const BannerBox = styled.div`
  height: 114px;
  ${DodamShape.Large};
`

export const MainDataView = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    @media (max-width: 797px) {
      width: 100%;
      height: 160%;
    }
`

export const MainDataGridBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (max-width: 797px) {
     display: flex;
     flex-wrap: nowrap;
     flex-direction: column;
     justify-content: flex-start;
  }
`;

export const MainDataWidthBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  gap: 10px;
  
  @media (min-height:807px) {
    height: auto;
  }

  @media (max-width: 797px) {
    &:nth-child(2){
      
      flex-direction: column;
    }
     
  }
  @media (max-width: 597px) {
    &:nth-child(1){
      flex-direction: column;
    }
     
  }
`

export const MainBox = styled.div`
  display: flex;
  flex-direction: column; /* 내부 요소들을 세로 배치 */
  width: calc(50% - 10px); /* 두 개씩 배치되도록 설정 (gap 고려) */
  height: min-content;
  @media (max-width: 797px) {
    width: 100%; /* 모바일에서는 한 줄로 정렬 */
  }
`;

export const SideProfile = styled.aside`
    display: flex;
    width: 30%;
    height: 100%;
    padding: 0 32px;
    @media (max-width: 797px) {
      display: none;
      
      }

      @media (max-width: 900px) {
      padding: 0 5%; 
    }
`

export const DraggableBox = styled.div`
  outline: none;
  position: relative;
  height: min-content;
  width: 50%;
   @media (max-width: 797px) {
      width: 100%;
  }
`;

export const DragHandle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20px;
  left: 20px;
  cursor: grab;
  user-select: none;
`;