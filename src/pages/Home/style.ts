import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    height: 100vh;
    padding: 58px 0px 58px 32px ;
`


export const MainDataVeiw = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
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
`