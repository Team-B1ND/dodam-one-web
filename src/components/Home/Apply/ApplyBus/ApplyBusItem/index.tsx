import { Checkmark } from "@b1nd/dds-web";
import { Bus } from "types/Bus/bus.type";
import * as S from "./style";

interface Props {
  currentSelectBusIdx: number;
  isCheck: boolean;
  busData: Bus;
  wasChecked: number;
  handleBusData: (idx: number) => void;
}

const ApplyBusItem = ({
  isCheck,
  busData,
  handleBusData,
}: Props) => {
  return (
    <S.ApplyBusItemContainer onClick={() => handleBusData(busData.id)}>
      <S.ApplyBusItemText>
        {busData.busName} 
      </S.ApplyBusItemText>
      <S.ApplyBusItemCheckBox>
       <S.ApplyBusItemLimit
          isCheck={isCheck}
          isLimit={busData.applyCount === busData.peopleLimit}
          >
            {`${busData.applyCount}/${busData.peopleLimit}`}
          </S.ApplyBusItemLimit>
          {isCheck ? <Checkmark size={16} color="primaryNormal"/>: ""}
        </S.ApplyBusItemCheckBox>
    </S.ApplyBusItemContainer>
  );
};

export default ApplyBusItem;
