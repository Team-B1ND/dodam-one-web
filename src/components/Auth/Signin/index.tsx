import { DodamFilledButton, DodamTextField } from "@b1nd/dds-web";
import * as S from "./style";
import {useSignIn} from "src/hooks/Auth/useSignIn";


const SignIn = () => {
    const {...Sign} = useSignIn();

    return(
        <S.SiginBox>
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
                <S.ResetPw>
                비밀번호를 잊으셨나요?
                <p>비밀번호 재설정</p>
                </S.ResetPw>
            </S.InputBox>
            <DodamFilledButton 
                size="Large"
                onClick={Sign.submitLoginData} 
                enabled={true} 
                typography={["Body1","Bold"]}
                customStyle={{color:"#fff"}}
                >
                로그인
            </DodamFilledButton>
        </S.SiginBox>
    )
}

export default SignIn;