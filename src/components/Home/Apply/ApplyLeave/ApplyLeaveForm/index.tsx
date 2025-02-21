import * as S from "./style";
import { DodamDatePicker,DodamFilledButton } from "@b1nd/dds-web";
import useApplyLeave from "src/hooks/Leave/useApplyLeave";
import ApplyNotApproveList from "../../ApplyNotApproveList";

const ApplyLeaveForm = () => {
  const {
    isFold,
    setIsFold,
    notApprovedLeaves,
    loadNotApprovedLeave,
    deleteNotApprovedLeave,
    leaveData,
    handleLeaveDataReason,
    handleLeaveDataDate,
    submitLeaveData,
  } = useApplyLeave();

  return (
    <>
      <ApplyNotApproveList
        fold={isFold}
        setFold={setIsFold}
        notApproveItems={notApprovedLeaves}
        loadNotApprovedItem={loadNotApprovedLeave}
        deleteNotApprovedItem={deleteNotApprovedLeave}
      />
      <S.ApplyLeaveFormContainer isFold={isFold}>
        {!isFold && notApprovedLeaves.length === 0 ? (
          <>수정할 외박 정보가 없습니다.</>
        ) : (
          <>
            <S.ApplyLeaveFormColumnWrap style={{ marginBottom: 10 }}>
              <S.ApplyLeaveFormColumnTitle>
                출발 일자
              </S.ApplyLeaveFormColumnTitle>
              <S.ApplyLeaveFormInputWrap>
                <S.ApplyLeaveFormDatePickerWrap>
                  <DodamDatePicker
                      itemKey="startDatePicker"
                      width={222}
                      height={32}
                      customStyle={{
                        fontSize: 16,
                      }}
                      onChange={(e) => handleLeaveDataDate(e, "start")}
                      value={leaveData.startTimeDate} 
                      title={"출발일자"} 
            
                  />
                </S.ApplyLeaveFormDatePickerWrap>
              </S.ApplyLeaveFormInputWrap>
            </S.ApplyLeaveFormColumnWrap>
            <S.ApplyLeaveFormColumnWrap style={{ marginBottom: 5 }}>
              <S.ApplyLeaveFormColumnTitle>
                도착 일자
              </S.ApplyLeaveFormColumnTitle>
              <S.ApplyLeaveFormInputWrap>
                <S.ApplyLeaveFormDatePickerWrap>
                  <DodamDatePicker
                      itemKey="endDatePicker"
                      width={222}
                      height={32}
                      customStyle={{
                        fontSize: 16,
                      }}
                      onChange={(e) => handleLeaveDataDate(e, "end")}
                      value={leaveData.endTimeDate} 
                      title={"도착일자"} 
                        
                  />
                </S.ApplyLeaveFormDatePickerWrap>
              </S.ApplyLeaveFormInputWrap>
            </S.ApplyLeaveFormColumnWrap>
            <S.ApplyLeaveFormNoticeText>
              ※시간은 24시간 형태로 작성해야합니다.
            </S.ApplyLeaveFormNoticeText>
            <S.TextAreaWrap
              onChange={handleLeaveDataReason}
            />
            <S.ApplyLeaveFormNoticeText>
              ※학생 관리자를 포함한 서비스 관리자가 해당 정보를 볼 수 있습니다.
            </S.ApplyLeaveFormNoticeText>
          </>
        )}
      </S.ApplyLeaveFormContainer>
      {!(notApprovedLeaves?.length === 0 && !isFold) && (
        <DodamFilledButton
          size="Large"
          onClick={submitLeaveData}        
        >
          {isFold ? "신청" : "수정"}
        </DodamFilledButton>
      )}
    </>
  );
};

export default ApplyLeaveForm;
