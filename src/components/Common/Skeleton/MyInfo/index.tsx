import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";


const MyInfoFallbackLoader = () => {
  return (
    <Container>
          <ItemImg/>
          <ItemBox>
            <ItemFrist/>
            <ItemSecond/>
          </ItemBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  height: 100%;
`

const ItemImg = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  ${skeletonAnimtaion}
`;

const ItemFrist = styled.div`
  width: 30%;
  height: 20px;
  ${skeletonAnimtaion}
`;

const ItemSecond = styled.div`
  width: 60%;
  height: 20px;
  ${skeletonAnimtaion}
`;

export default MyInfoFallbackLoader;
