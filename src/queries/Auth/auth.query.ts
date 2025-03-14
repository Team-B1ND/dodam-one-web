import { LoginParam } from "repositories/Auth/auth.param"
import { useMutation } from "react-query"
import authRepository from "repositories/Auth/auth.repository"

export const useSignin = () => {
    const mutation = useMutation((signinData:LoginParam)=>
    authRepository.login(signinData)
    )
    return mutation
}