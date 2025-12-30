import React, { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login, LoginResponse } from "types/Login/login.type";
import token from "libs/Token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "constants/Token/token.constant";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
// import * as Sentry from "sentry/react";
import { QUERY_KEYS } from "queries/queryKey";
import { AxiosError } from "axios";
import ErrorHandler from "utils/Error/ErrorHandler";
import { usePointStore } from "store/Point/pointStore";
import { useSignin } from "queries/Auth/auth.query";
// import { PasswordParm } from "types/login/login.type";

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const type = usePointStore((state) => state.pointViewType);

  const {mutate:signinMutate, isPending: isLoading} = useSignin();

  const [loginData, setLoginData] = useState<Login>({
    id: "",
    pw: "",
  });

  const [openModal, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  }

  const handleLoginData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginData]
  );

  const clearLoginField = (field: "id" | "pw") => {
    setLoginData((prev) => ({ ...prev, [field]: "" }));
  };

  const submitLoginData = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (loginData.id === "") {
        toast.info("아이디를 입력해주세요");
        return;
      }

      if (loginData.pw === "") {
        toast.info("비밀번호를 입력해주세요");
        return;
      }

      const { id, pw } = loginData;

      const validLoginData: Login = {
        id,
        pw,
      };

      
        signinMutate(validLoginData,{
          onSuccess:(data:LoginResponse)=>{
            token.setToken(ACCESS_TOKEN_KEY, data.data.accessToken);
            token.setToken(REFRESH_TOKEN_KEY, data.data.refreshToken);

            toast.success("로그인 성공");
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.member.getMy] });
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.wakeupSong.getMy] });
            queryClient.invalidateQueries({ queryKey: QUERY_KEYS.point.getMy(type) });
            navigate("/");
          },
          onError:(error: unknown)=>{
            const errorCode = error as AxiosError;
            if(errorCode.status === 403 ){
              setModal(true);
              return;
            }
            toast.error(
              ErrorHandler.loginError(errorCode.response?.status!),
              );
          }
        })  
        // Sentry.captureException(`이러한 문제로 로그인 실패 ${error}`);
      
    },
    [loginData, navigate]
  );

  return {
    clearLoginField,
    isLoading,
    openModal,
    loginData,
    handleClose,
    handleLoginData,
    submitLoginData,
  };
};


