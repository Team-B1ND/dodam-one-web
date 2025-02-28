import React,{useState, Dispatch, SetStateAction} from "react";
import { Bus, DoorOpen } from "@b1nd/dds-web";
import * as S from "./style";
import ApplyBus from "./ApplyBus";
import ApplyLeave from "./ApplyLeave";
import ApplyPass from "./ApplyPass";
import { PageIndicator } from "@b1nd/dds-web";

export interface Props {
  setSection: Dispatch<SetStateAction<string>>;
}

const Apply = () => {
  const [section, setSection] = useState("외출");

  return (
    <S.ApplyContainer>
      <S.ApplyTitleWrap>
        {section=="버스"? <Bus color="labelNormal"/>
        :<DoorOpen color="labelNormal"/>
        }
        <S.ApplyTitleText>{section}</S.ApplyTitleText>
      </S.ApplyTitleWrap>
      <S.ApplyFormWrap>
        <PageIndicator
          caseBy={{
            외출: <ApplyPass setSection={setSection}/>,
            외박: <ApplyLeave setSection={setSection}/>,
            버스: <ApplyBus setSection={setSection}/>,
          }} buttonSize="Large"
          customStyle={{marginTop:"5%"}}
          />
      </S.ApplyFormWrap>
    </S.ApplyContainer>
  );
};

export default Apply;
