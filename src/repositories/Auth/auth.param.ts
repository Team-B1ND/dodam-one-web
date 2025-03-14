import { Login } from "types/Login/login.type";
import { Response } from "types/Util/response.type";

export interface LoginParam extends Login {}
export interface NewAccessTokenResponse extends Response {
  data: {
    accessToken:string
  }
}
