import * as S from "./style";
import { DodamDatePicker,DodamFilledButton } from "@b1nd/dds-web";
import useApplyPass from "src/hooks/Pass/useApplyPass";

import ApplyPassModal from "../ApplyPassModal/";

const ApplyPassForm = () => {
  const {
    closeModal,
    isOpen,
    isFold,
    notApprovedPasses,
    passData,
    handlePassData,
    handlePassDataReason,
    passDataDate,
    handlePassDataDate,
    submitPassData,
  } = useApplyPass();

  return (
    <>
     
      <S.ApplyPassFormContainer isFold={isFold}>
        {!isFold && notApprovedPasses.length === 0 ? (
          <>수정할 외출 정보가 없습니다.</>
        ) : (
          <>
            <S.ApplyPassFormColumnWrap style={{ marginBottom: 16 }}>
              <S.ApplyPassFormColumnTitle>신청 일자</S.ApplyPassFormColumnTitle>
              <S.ApplyPassFormInputWrap>
                <S.ApplyPassFormDatePickerWrap>
                  <DodamDatePicker
                      itemKey="datePicker"
                      width={222}
                      height={32}
                      customStyle={{ fontSize: 16 }}
                      onChange={handlePassDataDate}
                      value={passDataDate} 
                      title={"외출일시"} 
                                
                      />
                </S.ApplyPassFormDatePickerWrap>
              </S.ApplyPassFormInputWrap>
            </S.ApplyPassFormColumnWrap>
            <S.ApplyPassFormColumnWrap style={{ marginBottom: 5 }}>
              <S.ApplyPassFormColumnTitle>외출 시간</S.ApplyPassFormColumnTitle>
              <S.ApplyPassFormInputWrap>
                <S.ApplyPassFormTimeInputWrap>
                  <S.ApplyPassFormTimeInput
                    placeholder="0 ~ 23"
                    value={passData.startTimeHour}
                    name="startTimeHour"
                    onChange={handlePassData}
                  />
                  :
                  <S.ApplyPassFormTimeInput
                    placeholder="0 ~ 59"
                    value={passData.startTimeMinute}
                    name="startTimeMinute"
                    onChange={handlePassData}
                  />
                </S.ApplyPassFormTimeInputWrap>
                <S.ApplyPassFormTimeInputTilde>~</S.ApplyPassFormTimeInputTilde>
                <S.ApplyPassFormTimeInputWrap>
                  <S.ApplyPassFormTimeInput
                    placeholder="0 ~ 23"
                    value={passData.endTimeHour}
                    name="endTimeHour"
                    onChange={handlePassData}
                  />
                  :
                  <S.ApplyPassFormTimeInput
                    placeholder="0 ~ 59"
                    value={passData.endTimeMinute}
                    name="endTimeMinute"
                    onChange={handlePassData}
                  />
                </S.ApplyPassFormTimeInputWrap>
              </S.ApplyPassFormInputWrap>
            </S.ApplyPassFormColumnWrap>
            <S.ApplyPassFormNoticeText>
              ※시간은 24시간 형태로 작성해야합니다.
            </S.ApplyPassFormNoticeText>
            <S.TextAreaWrap

              onChange={handlePassDataReason}
            />
            <S.ApplyPassFormNoticeText>
              ※학생 관리자를 포함한 서비스 관리자가 해당 정보를 볼 수 있습니다.
            </S.ApplyPassFormNoticeText>
          </>
        )}
      </S.ApplyPassFormContainer>

      {!(notApprovedPasses.length === 0 && !isFold) && (
        <DodamFilledButton
          size="Large"
          onClick={submitPassData}
        >
          {isFold ? "신청" : "수정"}
        </DodamFilledButton>
      )}
       <ApplyPassModal
        width="500px"
        height="300px"
        zIndex={1000}
        isOpen={isOpen}
        close={closeModal}
        submitData={passData}
        passDataDate={passDataDate}
      />
    </>
  );
};

export default ApplyPassForm;
