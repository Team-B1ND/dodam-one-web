import * as S from "./style";
import { ButtonContainer, TextAreaWrap } from "../style";
import { DodamDatePicker,DodamErrorBoundary,DodamFilledButton } from "@b1nd/dds-web";
import useApplyLeave from "hooks/Leave/useApplyLeave";
import ApplyNotApproveList from "../ApplyNotApproveList";
import { Props } from "..";
import { DatePickerBox } from "../style";


const ApplyLeave = ({setSection}:Props) => {
  const {
    isFold,
    setIsFold,
    leaveData,
    handleLeaveDataReason,
    handleLeaveDataDate,
    submitLeaveData,
    deleteNotApprovedLeave
  } = useApplyLeave();

  setSection("외박");
  
  return (
    <S.ApplyLeaveContainer>
      <DodamErrorBoundary text="에러발생" showButton={true} >
      <S.ApplyLeaveFormContainer >
        {!isFold ? (
          <ApplyNotApproveList
          fold={isFold}
          setFold={setIsFold}
          deleteNotApprovedItem={deleteNotApprovedLeave}
        /> 
        ) : (
          <>
            <S.ApplyLeaveFormColumnWrap >
              <S.ApplyLeaveFormColumnTitle>
                출발 일자
              </S.ApplyLeaveFormColumnTitle>
              <DatePickerBox>
                  <DodamDatePicker
                      itemKey="startDatePicker"
                      height={32}
                      color="primaryNormal"
                      onChange={(e) => handleLeaveDataDate(e, "start")}
                      value={leaveData.startTimeDate} 
                      title={"출발일자"} 
                      dateType="MonthDay"
                      customStyle={{borderBottom:"1px solid #0083F0"}}
            
                  />
                  </DatePickerBox>
            </S.ApplyLeaveFormColumnWrap>
            <S.ApplyLeaveFormColumnWrap >
              <S.ApplyLeaveFormColumnTitle>
                도착 일자
              </S.ApplyLeaveFormColumnTitle>
              <DatePickerBox>
                  <DodamDatePicker
                      itemKey="endDatePicker"
                      height={32}
                      color="primaryNormal"
                      onChange={(e) => handleLeaveDataDate(e, "end")}
                      value={leaveData.endTimeDate} 
                      title={"도착일자"}    
                      dateType="MonthDay" 
                      customStyle={{borderBottom:"1px solid #0083F0"}}
                  />
              </DatePickerBox>
            </S.ApplyLeaveFormColumnWrap>
            <TextAreaWrap
              placeholder="사유를 입력해주세요"
              value={leaveData.reason}
              onChange={handleLeaveDataReason}
            />
          </>
        )}
      </S.ApplyLeaveFormContainer>
       <ButtonContainer>
               <DodamFilledButton
               width={100}
               size="Medium"
               backgroundColorType="Assisitive"
               onClick={() => setIsFold((prev) => !prev)}
               >
                 {isFold ? "수정하기" : "돌아가기"}
               </DodamFilledButton>
               {isFold ? 
             <DodamFilledButton
                 width={84}
                 size="Medium"
                 onClick={submitLeaveData}
                 textTheme="staticWhite"
               >
                 신청
               </DodamFilledButton>
                : ""}
          </ButtonContainer>
      
      </DodamErrorBoundary>
    </S.ApplyLeaveContainer>
  );
};

export default ApplyLeave;
