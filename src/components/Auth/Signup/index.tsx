import { ReactNode } from "react";
import * as S from "./style";
import useSignup from "src/hooks/auth/useSignup";
import SignUpFirst from "./SignupFirst";
import SignUpSecond from "./SignupSecond";
import { SIGNUP_SECTION_NAME } from "src/constants/auth/signup.constant";

const SignUp = () => {
    const {...SignUp} = useSignup();
    const signupComponents: ReactNode[] = [
        <SignUpFirst
            signupData={SignUp.signupData}
            handleSignupData={SignUp.handleSignupData}
            submitSignupDataFirst={SignUp.submitSignupDataFirst}
            isEmailVerified={SignUp.isEmailVerified}
            isPhoneVerified={SignUp.isPhoneVerified}
            isModal={SignUp.isModal}
            setModal={SignUp.setModal}
            isAuthCode={SignUp.isAuthCode}
            setAuthCode={SignUp.setAuthCode}
            emailVerification={SignUp.emailVerification}
            phoneVerification={SignUp.phoneVerification}
            sendLoading={SignUp.sendLoading}
            reqLoading={SignUp.reqLoading}
        />,
        <SignUpSecond
            checkAllRequired={SignUp.checkAllRequired}
            setSection={SignUp.setSection}
            signupData={SignUp.signupData}
            handleSignupData={SignUp.handleSignupData}
            agrees={SignUp.agrees}
            handleSignupAgree={SignUp.handleSignupAgree}
            submitSignupDataSecond={SignUp.submitSignupDataSecond} 
            />
    ]
    return(
        <S.SignUpBox section={SignUp.section}>
            {signupComponents.map((component, idx) => {
          return SignUp.section === SIGNUP_SECTION_NAME[idx].title && component;
        })}
        </S.SignUpBox>
    )
}
export default SignUp;