import styled from "styled-components";

export const main = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    padding: 58px 0px 58px 32px ;
    background-color: ${({ theme }) => theme.backgroundNormal};
`


export const mainDataVeiw = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const mainDataGridBox = styled.div`
  width:100%;
  height:100%;
  background-color:#fff;
  display:grid;
  grid-template-columns: 200px 200px;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`
export const mainBox = styled.div`
    background-color:#333;  
    padding:20px;
    border-radius:10px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:40px;
    font-family:sans-serif;
`

export const sideProfile = styled.aside`
    display: flex;
`