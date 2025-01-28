import { useState } from "react";
import { APPLY_ITEMS } from "src/constants/apply/apply.constant";
import ApplyBus from "./ApplyBus";
import ApplyLeave from "./ApplyLeave";
import ApplyPass from "./ApplyPass";
import * as S from "./style";
import { PageIndicator } from "@b1nd/dds-web";


const Apply = () => {
  const [section, setSection] = useState("외출");

  return (
    <S.ApplyContainer>
      <S.ApplyTitleWrap>
        {/* <S.ApplyTitleIcon src={ApplyMemo} /> */}
        <S.ApplyTitleText>신청</S.ApplyTitleText>
        <S.ApplyTitleItemWrap>
          {APPLY_ITEMS.map((item) => (
            <S.ApplyTitleItem
              isSelect={section === item}
              onClick={() => setSection(item)}
              key={`applyTitleItem ${item}`}
            >
              <span>{item}</span>
            </S.ApplyTitleItem>
          ))}
        </S.ApplyTitleItemWrap>
      </S.ApplyTitleWrap>
      <S.ApplyFormWrap>
        <PageIndicator
          caseBy={{
            외출: <ApplyPass />,
            외박: <ApplyLeave />,
            버스: <ApplyBus />,
          }} buttonSize={"Small"}        />
      </S.ApplyFormWrap>
    </S.ApplyContainer>
  );
};

export default Apply;
