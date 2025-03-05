import React,{useState} from "react";
import * as S from "./style";
import AuthLogo from "src/assets/logo/Auth_Logo.svg";
import SignIn from "src/components/Auth/Signin";
import SignUp from "src/components/Auth/Signup";
import PasswordReset from "src/components/Auth/PwReset";

const AuthPage = ()=>{
    const [isLogin, setIsLogin] = useState(true);
    const [isPwReset, setPwReset] = useState(false);
    
return(
    <S.Main>
        <S.SignBox>
            <img src={AuthLogo} alt="auth" />
            {isLogin ? isPwReset ? <PasswordReset setPwReset={setPwReset}/> : <SignIn/> : <SignUp/> }
            
        </S.SignBox>
        {isLogin ? 
        <S.AuthOppositePartText>
        계정이 없으시다면? <span onClick={()=>setIsLogin(false)}>회원가입</span>
        </S.AuthOppositePartText>
        : 
        <S.AuthOppositePartText>
        이미 계정이 있으시다면?<span onClick={()=>setIsLogin(true)}> 로그인</span>
        </S.AuthOppositePartText>
        }
    </S.Main>
)
}
export default AuthPage;