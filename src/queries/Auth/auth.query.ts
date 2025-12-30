import { LoginParam } from "repositories/Auth/auth.param";
import { useMutation } from "@tanstack/react-query";
import authRepository from "repositories/Auth/auth.repository";
import { LoginResponse } from "types/Login/login.type";

export const useSignin = () => {
  return useMutation<LoginResponse, Error, LoginParam>({
    mutationFn: (signinData: LoginParam) => authRepository.login(signinData),
  });
};
