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
    // submitMyBus,
  } = useApplyBus();

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
          {/* <DodamFilledButton onClick={submitMyBus}size="Large" >
                신청
          </DodamFilledButton> */}
        </>
      ) : (
        <S.ApplyBusFormVoidText>버스 정보가 없습니다.</S.ApplyBusFormVoidText>
      )}
       </S.ApplyBusFormItemContainer>
  );
};

export default ApplyBusForm;
