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
    }
`


export const MainDataVeiw = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    @media (max-width: 797px) {
      width: 100%;
    }
`

export const MainDataGridBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 1fr 1fr ;
  gap: 20px;
`


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