import * as S from "./style";
import dayjs from "dayjs";
import { DodamModal,DodamFilledButton} from "@b1nd/dds-web";
import { useQueryClient } from "@tanstack/react-query";
import {
    usePostApplyPassMutation,
  } from "queries/Pass/pass.query";
import  {ApplyPass } from "types/Pass/pass.type";
import { toast } from "react-toastify";

interface ApplyPassModalProps {
    width:string;
    height:string;
    zIndex:number;
    isOpen:boolean;
    close:()=>void;
    submitData:ApplyPass;
    passDataDate:string;
}


const ApplyPassModal = ({
    isOpen,
    close,
    submitData,
    passDataDate,
    }:ApplyPassModalProps)=>{
        const queryClient = useQueryClient();
       
        const postApplyPassMutation = usePostApplyPassMutation();
        const {
            startTimeHour,
            startTimeMinute,
            endTimeHour,
            endTimeMinute,
            reason,
          } = submitData;
          
        const submitPassData = (id:number)=>{
          let dinnerCheck = id !== 1;

            const validApplyPassDinner ={
                reason,
                startAt: dayjs(
                    `${passDataDate} ${startTimeHour}:${startTimeMinute}`
                  ).format("YYYY-MM-DDTHH:mm:ss"),
                  endAt: dayjs(`${passDataDate} ${endTimeHour}:${endTimeMinute}`).format(
                    "YYYY-MM-DDTHH:mm:ss"
                  ),
                  dinnerOrNot:dinnerCheck,
              }
            postApplyPassMutation.mutateAsync(validApplyPassDinner,{
                onSuccess:()=>{
                    queryClient.invalidateQueries({ queryKey: ["pass/getMyPasses"] });
                    toast.success("외출 신청 성공");
                    close();
                },
                onError: () => {
                    toast.error("외출 신청 실패");
                  },
            })
        }

        return(
          <DodamModal isOpen={isOpen} close={close}>
            <S.Container onClick={(e) => e.stopPropagation()}>
                <S.Header><h1>오늘 저녁 급식을 드시나요? 🥺</h1></S.Header>
                <S.Content>
                    <span>저녁 급식 수요 조사를 위해 설문 조사를 합니다. <br/> 응답해 주시기 바랍니다.</span>
                    <S.ButtonContainer>
                <DodamFilledButton 
                    size="Large"
                    onClick={() => submitPassData(1)} >
                      아니요
                    </DodamFilledButton>
                <DodamFilledButton 
                size="Large"
                onClick={()=>submitPassData(2)}>
                  네 먹습니다.
                </DodamFilledButton>
                </S.ButtonContainer>
                   
                </S.Content>
            </S.Container>

          </DodamModal>
        )
}

export default ApplyPassModal;