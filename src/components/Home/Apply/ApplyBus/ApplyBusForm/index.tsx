// import { DodamFilledButton } from "@b1nd/dds-web";
import useApplyBus from "src/hooks/Bus/useApplyBus";
import dataCheck from "src/utils/Check/dataCheck";
import ApplyBusItem from "../ApplyBusItem";
import * as S from "./style";

const ApplyBusForm = () => {
  const {
    selectBusIdx,
    busList,
    wasCheckedIdx,
    handleBusData,
    isNotApplicant,
    // submitMyBus,
  } = useApplyBus();

  if (isNotApplicant) {
    return <S.ApplyBusFormVoidText>버스 신청자가 아닙니다.</S.ApplyBusFormVoidText>;
  }

  return (
    <S.ApplyBusFormItemContainer>
      {!dataCheck.voidCheck(busList) ? (
        <>
            <S.ApplyBusFormItemWrap>
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
        </>
      ) : (
        <S.ApplyBusFormVoidText>버스 정보가 없습니다.</S.ApplyBusFormVoidText>
      )}
       </S.ApplyBusFormItemContainer>
  );
};

export default ApplyBusForm;
