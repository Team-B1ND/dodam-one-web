import { DodamErrorBoundary , DodamDatePicker , DodamFilledButton } from "@b1nd/dds-web";
import * as S from "./style";
import { ButtonContainer, DatePickerBox, TextAreaWrap } from "../style";
import useApplyPass from "hooks/Pass/useApplyPass";
import ApplyPassModal from "./ApplyPassModal";
import { Props } from "..";
import ApplyPassApproveList from "../ApplyPassApproveList";



const ApplyPass = ({setSection}:Props) => {
  const {
   ...Pass
  } = useApplyPass();
  setSection("외출");
  return (
    <S.ApplyPassContainer>
      <DodamErrorBoundary text="에러발생" showButton={true}>
      <S.ApplyPassFormContainer >
        {!Pass.isFold ?(
          <ApplyPassApproveList
          fold={Pass.isFold}
          setFold={Pass.setIsFold}
          deleteNotApprovedItem={Pass.deleteNotApprovedPass}
          />
        ) : (
          <>
            <S.ApplyPassFormColumnWrap>
              <S.ApplyPassFormColumnTitle>신청 일자</S.ApplyPassFormColumnTitle>
              <DatePickerBox>
                  <DodamDatePicker
                      itemKey="datePicker"
                      height={32}
                      customStyle={{ fontSize: 16 }}
                      onChange={Pass.handlePassDataDate}
                      value={Pass.passDataDate} 
                      title={"외출일시"} 
                      
                      dateType="MonthDay"
                      />
                   </DatePickerBox>
            </S.ApplyPassFormColumnWrap>
            <S.ApplyPassFormColumnWrap >
              <S.ApplyPassFormColumnTitle>외출 시간</S.ApplyPassFormColumnTitle>
              <S.ApplyPassFormInputWrap>
                <S.ApplyPassFormTimeInputWrap>
                  <S.ApplyPassFormTimeInput
                    placeholder="0 ~ 23"
                    value={Pass.passData.startTimeHour}
                    name="startTimeHour"
                    onChange={Pass.handlePassData}
                  />
                  :
                  <S.ApplyPassFormTimeInput
                    placeholder="0 ~ 59"
                    value={Pass.passData.startTimeMinute}
                    name="startTimeMinute"
                    onChange={Pass.handlePassData}
                  />
                </S.ApplyPassFormTimeInputWrap>
                <S.ApplyPassFormTimeInputTilde>~</S.ApplyPassFormTimeInputTilde>
                <S.ApplyPassFormTimeInputWrap>
                  <S.ApplyPassFormTimeInput
                    placeholder="0 ~ 23"
                    value={Pass.passData.endTimeHour}
                    name="endTimeHour"
                    onChange={Pass.handlePassData}
                  />
                  :
                  <S.ApplyPassFormTimeInput
                    placeholder="0 ~ 59"
                    value={Pass.passData.endTimeMinute}
                    name="endTimeMinute"
                    onChange={Pass.handlePassData}
                  />
                </S.ApplyPassFormTimeInputWrap>
              </S.ApplyPassFormInputWrap>
            </S.ApplyPassFormColumnWrap>
            <TextAreaWrap
              placeholder="사유를 입력해주세요"
              value={Pass.passData.reason}
              onChange={Pass.handlePassDataReason}
            />
          </>
        )}
      </S.ApplyPassFormContainer>
        
 
      <ButtonContainer>
        <DodamFilledButton
        width={100}
        size="Medium"
        backgroundColorType="Assisitive"
        onClick={() => Pass.setIsFold((prev) => !prev)}
        >
          {Pass.isFold ? "수정하기" : "돌아가기"}
        </DodamFilledButton>
        {Pass.isFold ? 
      <DodamFilledButton
          width={84}
          size="Medium"
          onClick={Pass.submitPassData}
          textTheme="staticWhite"
          customStyle={{backgroundColor:"#E61E2B" }}
        >
           신청
        </DodamFilledButton>
        : ""}
      </ButtonContainer>
      
       <ApplyPassModal
        width="500px"
        height="300px"
        zIndex={1000}
        isOpen={Pass.isOpen}
        close={Pass.closeModal}
        submitData={Pass.passData}
        passDataDate={Pass.passDataDate}
      />
      
      </DodamErrorBoundary>
    </S.ApplyPassContainer>
  );
};

export default ApplyPass;
