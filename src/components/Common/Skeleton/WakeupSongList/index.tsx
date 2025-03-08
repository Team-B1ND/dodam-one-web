import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

interface props{
  length:number;
}

const WakeupSongListFallback = ({length=2}:props) => {
  return (
    <Container>
      {Array.from({ length: length }).map((_, idx) => (
        <Item key={idx} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 5px;
  margin-bottom: 2px;
  ${skeletonAnimtaion}
`;

export default WakeupSongListFallback;
