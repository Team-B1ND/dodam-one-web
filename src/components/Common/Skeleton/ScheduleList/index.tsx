import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

const ScheduleListFallbackLoader = () => {
  return (
    <Container>
      {Array.from({ length: 2 }).map((_, idx) => (
        <ItemBox key={idx} >
          <ItemFrist/>
          <ItemSecond />
        </ItemBox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 47px;
`

const ItemFrist = styled.div`
  width: 100%;
  height: 29px;
  ${skeletonAnimtaion}
`;
const ItemSecond = styled.div`
  width: 100%;
  height: 21px;
  ${skeletonAnimtaion}
`

export default ScheduleListFallbackLoader;
