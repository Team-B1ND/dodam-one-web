import * as S from "./style";
import AuthLogo from "src/assets/logo/Auth_Logo.svg";
import SignIn from "src/components/Auth/Signin";
// import { useScreenWidth } from "src/utils/Screen/useScreenWidth";

const AuthPage = ()=>{
return(
    <S.Main>
        <S.SignBox>
            <img src={AuthLogo} alt="auth" />
            <SignIn/>
        </S.SignBox>
    </S.Main>
)
}
export default AuthPage;