import { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "constants/Token/token.constant";
import token from "../Token/token";
import { dodamAxios } from "./customAxios";
import authRepository from "repositories/Auth/auth.repository";

//리프레쉬 작업중인지 아닌지를 구분하는 변수
let isRefreshing = false;

let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};


const errorResponseHandler = async (error: AxiosError) => {
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
    const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

    if (
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      status === 401
    ) {
      //아무 요청중 하나하도 리프레쉬 작업중이 아니라면
      if (!isRefreshing) {
        //리프레쉬 작업을 시작함
        isRefreshing = true;

        //리프레쉬 api 요청
        try {
          const { data: newAccessToken } =
            await authRepository.refreshAccessToken({
              refreshToken: usingRefreshToken,
            });

          dodamAxios.defaults.headers.common[
            REQUEST_TOKEN_KEY
          ] = `Bearer ${newAccessToken}`;

          token.setToken(ACCESS_TOKEN_KEY, newAccessToken.accessToken);

          //리프레쉬 작업을 마침
          isRefreshing = false;

          //새로 받은 accessToken을 기반으로 이때까지 밀려있던 요청을 모두 처리
          onTokenRefreshed(newAccessToken.accessToken);
        } catch (error) {
          //리프레쉬 하다가 오류난거면 리프레쉬도 만료된 것이므로 다시 로그인
          window.alert("세션이 만료되었습니다.");
          token.clearToken();
          window.location.href = "/sign";
        }
      }
      return new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          originalRequest!.headers![REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
          resolve(dodamAxios(originalRequest!));
        });
      });
    }
  }
};

export default errorResponseHandler;
