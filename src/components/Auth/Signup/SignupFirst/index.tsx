import React from "react";
import { DodamFilledButton, DodamTextField } from "@b1nd/dds-web";
import * as S from "../style";
import { Signup } from "src/types/signup/signup.type";

interface Props {    
    signupData: Signup;
    handleSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submitSignupDataFirst: () => void;
}

const SignUpFirst = ({
    signupData,
    handleSignupData,
    submitSignupDataFirst,
  }: Props) => {
    
    
    return(
        <>
        <S.SignTitle>회원가입</S.SignTitle>
         <S.InputBox>
                <DodamTextField 
                id="email"
                name="email" 
                type="text"
                value={signupData.email} 
                label="이메일" 
                isError={false} 
                onChange={handleSignupData}
                onKeyDown={submitSignupDataFirst}         
                />

                <DodamTextField 
                id="phone"
                name="phone" 
                type="text"
                value={signupData.phone} 
                label="전화번호" 
                isError={false} 
                onChange={handleSignupData}
                onKeyDown={submitSignupDataFirst}         
                />

                <DodamTextField 
                id="studentInformation"
                name="studentInformation"
                type="text"
                value={signupData.studentInformation} 
                label="학생정보" 
                isError={false} 
                onChange={handleSignupData}
                onKeyDown={submitSignupDataFirst}         
                />

                 <DodamTextField 
                id="name"
                name="name"
                type="text"
                value={signupData.name} 
                label="이름" 
                isError={false} 
                onChange={handleSignupData}
                onKeyDown={submitSignupDataFirst}         
                />
            </S.InputBox> 
                <DodamFilledButton 
                size="Large"
                onClick={submitSignupDataFirst}
                enabled={true} 
                typography={["Body1","Bold"]}
                customStyle={{color:"#fff"}}
                >
                다음
                </DodamFilledButton>
            </>
    )
}

export default SignUpFirst;