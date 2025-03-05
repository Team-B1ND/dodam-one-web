import { Dispatch, SetStateAction } from "react";
import { PwResetBox, InputBox } from "./style";

interface Props {
    setPwReset:Dispatch<SetStateAction<boolean>>;
}

const PasswordReset = ({setPwReset}:Props) => {
    
    setPwReset
    return(
        <PwResetBox>
            <span>비밀번호 재설정</span>
            <InputBox>
            </InputBox>
    
        </PwResetBox>
    )
}

export default PasswordReset;