import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";
import { DodamShape } from "@b1nd/dds-web";

const BannerFallbackLoader = () => {
  return (
    <Container>
      
        <ItemBox  >

        </ItemBox>
      
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
  height: 114px;
  ${skeletonAnimtaion}
  ${DodamShape.Large};
`



export default BannerFallbackLoader;
