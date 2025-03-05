import React, { Dispatch, SetStateAction } from "react";
import { DodamFilledButton, DodamTextField } from "@b1nd/dds-web";
import * as S from "../style";
import { Signup } from "@src/types/Signup/signup.type";
import { SignUpModal } from "@src/types/Signup/signup.type";
import VerifieModal from "../../SignModal/verifyModal";

interface Props {    
    signupData: Signup;
    handleSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submitSignupDataFirst: () => void;
    isEmailVerified:boolean;
    isPhoneVerified:boolean;
    isModal:SignUpModal;
    setModal:Dispatch<SetStateAction<SignUpModal>>;
    isAuthCode: string;
    setAuthCode: Dispatch<SetStateAction<string>>;
    emailVerification: () => void;
    phoneVerification: () => void;
    sendLoading:boolean;
    reqLoading:boolean;
}

const SignUpFirst = ({
    isEmailVerified,
    signupData,
    isPhoneVerified,
    isModal,
    isAuthCode,
    sendLoading,
    reqLoading,
    handleSignupData,
    submitSignupDataFirst,
    setAuthCode,
    emailVerification,
    phoneVerification,
    setModal,

  }: Props) => {

    const handleClose = (type:string)=>{
        setModal((prev) => ({ ...prev, [type]: false })); 
    }
    console.log(signupData.studentInformation);
    
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
                value={signupData.studentInformation!} 
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
                textTheme="staticWhite"
                >
                  {isEmailVerified && isPhoneVerified
                    ? "다음"
                    : !isEmailVerified
                    ? "이메일 인증"
                    : !isPhoneVerified
                    ? "전화번호 인증"
                    : ""}
                </DodamFilledButton>
                {isModal.email && (
                <VerifieModal 
                    isOpen={isModal.email}
                    handleClose={() => handleClose("email")}                   
                    isAuthCode={isAuthCode}
                    setAuthCode={setAuthCode}
                    onSubmit={emailVerification}
                    sendLoading={sendLoading}
                    reqLoading={reqLoading}
                    />
                )}

                {isModal.phone && (
                    <VerifieModal 
                        isOpen={isModal.phone} 
                        handleClose={() => handleClose("phone")}   
                        isAuthCode={isAuthCode}
                        setAuthCode={setAuthCode}
                        onSubmit={phoneVerification}
                        sendLoading={sendLoading}
                        reqLoading={reqLoading}
                    />
                )}
            </>
    )
}

export default SignUpFirst;