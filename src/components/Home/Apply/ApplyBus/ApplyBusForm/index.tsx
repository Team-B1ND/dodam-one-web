import { DodamFilledButton } from "@b1nd/dds-web";
import useApplyBus from "src/hooks/bus/useApplyBus";
import dataCheck from "src/utils/check/dataCheck";
import dateTransform from "src/utils/transform/dateTransform";
import ApplyBusItem from "../ApplyBusItem";
import * as S from "./style";

const ApplyBusForm = () => {
  const {
    selectBusIdx,
    busDate,
    busList,
    wasCheckedIdx,
    handleBusData,
    submitMyBus,
  } = useApplyBus();

  return (
    <>
      {dataCheck.voidCheck(busList) ? (
        <S.ApplyBusFormVoidText>버스 정보가 없습니다.</S.ApplyBusFormVoidText>
      ) : (
        <>
          <S.ApplyBusFormItemContainer>
            <S.ApplyBusFormItemWrap>
              <S.ApplyBusFormDate>
                {dateTransform.period(busDate)}
              </S.ApplyBusFormDate>
              {busList.map((busInfo) => (
                <ApplyBusItem
                  currentSelectBusIdx={selectBusIdx}
                  isCheck={busInfo.id === selectBusIdx}
                  busData={busInfo}
                  wasChecked={wasCheckedIdx}
                  handleBusData={handleBusData}
                  key={busInfo.id}
                />
              ))}
            </S.ApplyBusFormItemWrap>
          </S.ApplyBusFormItemContainer>
          <DodamFilledButton
            onClick={submitMyBus}
          >
            신청
          </DodamFilledButton>
        </>
      )}
    </>
  );
};

export default ApplyBusForm;
