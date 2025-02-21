import { Login } from "@src/types/Login/login.type";
import { Response } from "src/types/Util/response.type";

export interface LoginParam extends Login {}
export interface NewAccessTokenResponse extends Response {
  data: {
    accessToken:string
  }
}
