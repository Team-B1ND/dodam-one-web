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
  overflow: hidden;
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
  flex-wrap: wrap;
  column-gap: 5px;
  gap: 10px;
  justify-content: center;
  @media (max-width: 797px) {
     display: flex;
     flex-wrap: nowrap;
     flex-direction: column;
     justify-content: flex-start;
    }
`;

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