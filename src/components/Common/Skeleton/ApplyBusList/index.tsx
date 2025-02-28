import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape } from "@b1nd/dds-web";

const ApplyBusListFallbackLoader = () => {
  return (
    <Container>
      {Array.from({ length: 5 }).map((_, idx) => (
        <ItemBox key={idx} >
          <Item/>
        </ItemBox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
`

const Item = styled.div`
  width: 100%;
  height: 30px;
  ${skeletonAnimtaion}
  ${DodamShape.ExtraSmall};
`;

export default ApplyBusListFallbackLoader;
