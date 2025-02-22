import { DodamFilledButton } from "@b1nd/dds-web";
import useApplyBus from "src/hooks/Bus/useApplyBus";
import dataCheck from "src/utils/Check/dataCheck";
import dateTransform from "src/utils/Transform/dateTransform";
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
          <DodamFilledButton onClick={submitMyBus}size="Large" >
                신청
          </DodamFilledButton>
        </>
      )}
    </>
  );
};

export default ApplyBusForm;
