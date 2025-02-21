import React, { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import authRepository from "@src/repositories/Auth/auth.repository";
import { Login } from "@src/types/Login/login.type";
import token from "src/libs/token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constant";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
// import * as Sentry from "sentry/react";
import { QUERY_KEYS } from "src/queries/queryKey";
import { AxiosError } from "axios";
import ErrorHandler from "@src/utils/Error/ErrorHandler";
import { useRecoilValue } from "recoil";
import { pointViewTypeAtom } from "@src/store/Point/pointStore";
// import { PasswordParm } from "src/types/login/login.type";

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const type = useRecoilValue(pointViewTypeAtom);

  const [loginData, setLoginData] = useState<Login>({
    id: "",
    pw: "",
  });



  const handleLoginData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginData]
  );

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

      try {
        const { data } = await authRepository.login(validLoginData);

        token.setToken(ACCESS_TOKEN_KEY, data.accessToken);
        token.setToken(REFRESH_TOKEN_KEY, data.refreshToken);
        B1ndToast.showSuccess("로그인 성공");

        queryClient.invalidateQueries(QUERY_KEYS.member.getMy);
        queryClient.invalidateQueries(QUERY_KEYS.wakeupSong.getMy);
        queryClient.invalidateQueries(QUERY_KEYS.point.getMy(type));
        navigate("/");
      } catch (error) {
        const errorCode = error as AxiosError;
        B1ndToast.showError(
          ErrorHandler.loginError(errorCode.response?.status!),
          );
        // Sentry.captureException(`이러한 문제로 로그인 실패 ${error}`);
      }
    },
    [loginData, navigate]
  );

  return {
    loginData,
    handleLoginData,
    submitLoginData,
  };
};


