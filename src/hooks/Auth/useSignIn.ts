import React, { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login, LoginResponse } from "src/types/Login/login.type";
import token from "src/libs/Token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/Token/token.constant";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
// import * as Sentry from "sentry/react";
import { QUERY_KEYS } from "src/queries/queryKey";
import { AxiosError } from "axios";
import ErrorHandler from "src/utils/Error/ErrorHandler";
import { useRecoilValue } from "recoil";
import { pointViewTypeAtom } from "src/store/Point/pointStore";
import { useSignin } from "src/queries/Auth/auth.query";
// import { PasswordParm } from "src/types/login/login.type";

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const type = useRecoilValue(pointViewTypeAtom);

  const {mutate:signinMutate, isLoading} = useSignin();

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
        B1ndToast.showInfo("아이디를 입력해주세요");
        return;
      }

      if (loginData.pw === "") {
        B1ndToast.showInfo("비밀번호를 입력해주세요");
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
            token.setToken(REFRESH_TOKEN_KEY, data.data.accessToken);

            B1ndToast.showSuccess("로그인 성공");
            queryClient.invalidateQueries(QUERY_KEYS.member.getMy);
            queryClient.invalidateQueries(QUERY_KEYS.wakeupSong.getMy);
            queryClient.invalidateQueries(QUERY_KEYS.point.getMy(type));
            navigate("/");
          },
          onError:(error: unknown)=>{
            const errorCode = error as AxiosError;
            if(errorCode.status === 403 ){
              setModal(true);
              return;
            }
            B1ndToast.showError(
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


