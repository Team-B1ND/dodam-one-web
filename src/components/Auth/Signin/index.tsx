import { DodamFilledButton, DodamTextField } from "@b1nd/dds-web";
import * as S from "./style";
import NullAccountModal from "../NullAccountModal/nullAccountModal";
import {useSignIn} from "hooks/Auth/useSignIn";


const SignIn = () => {
    const {...Sign} = useSignIn();
    
    return(
        <>
        
        
        <S.SiginBox>
            <span>로그인</span>
            <S.InputBox>
                <DodamTextField 
                    id="id"
                    name="id"
                    type="text"
                    value={Sign.loginData.id}
                    label="아이디"
                    isError={false}
                    onChange={Sign.handleLoginData}
                    onKeyDown={Sign.submitLoginData} 
                    onRemoveClick={() => Sign.clearLoginField("id")} 
                />
                <DodamTextField 
                    id="pw"
                    name="pw"
                    type="password"
                    value={Sign.loginData.pw}
                    label="비밀번호"
                    isError={false}
                    onChange={Sign.handleLoginData}
                    onKeyDown={Sign.submitLoginData} 
                />
                {/* <S.ResetPw>
                <p>비밀번호를 잊으셨나요?</p>
                <p onClick={()=>setPwReset(true)}>비밀번호 재설정</p>
                </S.ResetPw> */}
            </S.InputBox>
            <DodamFilledButton 
                size="Large"
                onClick={Sign.submitLoginData} 
                enabled={true} 
                typography={["Body1","Bold"]}
                textTheme="staticWhite"
                >
                {Sign.isLoading ? "로딩중..": "로그인"}
            </DodamFilledButton>
        </S.SiginBox>
        <NullAccountModal
            title="승인되지 않은 계정이에요"
            text="아직 계정이 승인되지 않았어요. 승인을 기다려주세요."
            iseOpen={Sign.openModal}
            handleClose={Sign.handleClose}
        />
        </>
    )
}

export default SignIn;