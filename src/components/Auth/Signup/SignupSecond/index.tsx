import React, { Dispatch, SetStateAction, useMemo } from "react";
import { SignupAgree } from "src/types/signup/signup.type";
import { SIGNUP_AGREE } from "src/constants/auth/signup.constant";
import { Signup } from "src/types/signup/signup.type";
import * as S from "./style";
import { DodamTextField, DodamFilledButton, Checkmark } from "@b1nd/dds-web";

interface Props {
    checkAllRequired: ()=> void;
    setSection: Dispatch<SetStateAction<string>>;
    signupData: Signup;
    handleSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
    agrees: SignupAgree;
    handleSignupAgree: (agree: string) => void;
    submitSignupDataSecond: () => void;
  }

const SignUpSecond = ({
    checkAllRequired,
    agrees,
    // setSection,
    signupData,
    handleSignupData,
    handleSignupAgree,
    submitSignupDataSecond,
  }: Props) => {
    const agreesList = useMemo(() => {
        const { first, second } = agrees;
    
        return [first, second];
      }, [agrees]);
    return(
        <>
        <S.InputBox>
            <DodamTextField
                id="id"
                name="id" 
                type="text"
                value={signupData.id} 
                label="아이디"
                onChange={handleSignupData}   
                supportingText="아이디는 영문과 숫자로 5 ~ 20글자 이내여야 해요." 
            />
            <DodamTextField
                id="pw"
                name="pw" 
                type="password"
                value={signupData.pw} 
                label="비밀번호"
                onChange={handleSignupData}    
            />
            <DodamTextField
                id="checkPw"
                name="checkPw" 
                type="password"
                value={signupData.checkPw} 
                label="비밀번호 확인"
                onChange={handleSignupData}    
                isError={signupData.pw !== signupData.checkPw}
                
            />
             <DodamFilledButton
                backgroundColorType="Assisitive"
                onClick={checkAllRequired}
                size="Large"
                textTheme="labelNetural"
                typography={['Body1', 'Bold']}
                text="필수 항목 모두 체크하기"
                customStyle={{justifyContent:"flex-start"}}
            />
        </S.InputBox>
        <S.CheckWrap>
            {SIGNUP_AGREE.map((agree,idx)=>(
                <S.CheckmarkWrap   
                onClick={() => handleSignupAgree(agree.order)}>
                    <p> 
                        <Checkmark size={16} color={agreesList[idx] ? '#0083F0' : '#808080'} />
                        {agree.title}
                    </p>
                    <span>보기</span>
                </S.CheckmarkWrap>
            ))}
        </S.CheckWrap>
        <DodamFilledButton 
            size="Large"
            onClick={submitSignupDataSecond} 
            enabled={true} 
            typography={["Body1","Bold"]}
            textTheme="staticWhite">
                로그인
            </DodamFilledButton>
        </>
    )
}

export default SignUpSecond;