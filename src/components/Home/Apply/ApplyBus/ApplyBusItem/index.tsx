import dayjs from "dayjs";
import { FiCheck } from "react-icons/fi";
import { Bus } from "src/types/Bus/bus.type";
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
        {busData.busName} ({dayjs(busData.leaveTime).format("HH:mm")}){" "}
        <S.ApplyBusItemLimit
          isLimit={busData.applyCount === busData.peopleLimit}
        >
          {`${busData.applyCount}/${busData.peopleLimit}`}
        </S.ApplyBusItemLimit>
      </S.ApplyBusItemText>
      <S.ApplyBusItemCheckIcon check={isCheck}>
        <FiCheck />
      </S.ApplyBusItemCheckIcon>
      {/* {wasChecked === busData.id && wasChecked === currentSelectBusIdx && (
        <S.ApplyBusItemDeleteButton>
          <S.ApplyBusItemDeleteIcon>
            <IoMdTrash />
          </S.ApplyBusItemDeleteIcon>
        </S.ApplyBusItemDeleteButton>
      )} */}
    </S.ApplyBusItemContainer>
  );
};

export default ApplyBusItem;
