import { DodamFilledButton, DodamTextField } from "@b1nd/dds-web";
import * as S from "./style";
import {useSignIn} from "src/hooks/Auth/useSignIn";
// import { Dispatch, SetStateAction } from "react";

// interface Props {
//     setPwReset:Dispatch<SetStateAction<boolean>>;
// }

const SignIn = () => {
    const {...Sign} = useSignIn();
    
    return(
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
                {Sign.loginLoading ? "로딩중..": "로그인"}
            </DodamFilledButton>
        </S.SiginBox>
    )
}

export default SignIn;