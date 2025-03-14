import axios, { AxiosRequestConfig } from "axios";
import config from "config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "constants/Token/token.constant";
import token from "../Token/token";
import errorResponseHandler from "./errorResponseHandler";
import requestHandler from "./requestHandler";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const baseConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const dodamAxios = createAxiosInstance({
  baseURL: config.DODAM_SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`!,
  },
});

export const dodamAxiosSetAccessToken = (token: string) => {
  dodamAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};

dodamAxios.interceptors.request.use(requestHandler , (res) => res);

dodamAxios.interceptors.response.use((res) => res, errorResponseHandler);
