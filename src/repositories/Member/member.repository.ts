import config from "config/config.json";
import { MyMemberResponse, AuthCodeReqProps,AuthCodeSendProps } from "types/Member/member.type";
import { dodamAxios } from "libs/Axios/customAxios";
import { Signup } from "types/Signup/signup.type";
import axios from "axios";


class MemberRepository {
  public async postMemberSignUp(signupData: Signup): Promise<void> {
    await axios.post(`${config.DODAM_SERVER}/member/join-student`, signupData);
  }

  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await dodamAxios.get("/member/my");
    return data;
  }
  public async reqAuthCode(AuthCodeReq:AuthCodeReqProps): Promise<void> {
    await axios.post(`${config.DODAM_SERVER}/member/auth-code/${AuthCodeReq.AuthType}`,{identifier:AuthCodeReq.identifier});
  }
  public async authCodeVerify(AuthCodeSend: AuthCodeSendProps): Promise<void> {
    await axios.post(
      `${config.DODAM_SERVER}/member/auth-code/${AuthCodeSend.AuthType}/verify`,
      {
        identifier: AuthCodeSend.identifier,
        authCode: AuthCodeSend.authCode
      },
      {
        headers: {
          "User-Agent": AuthCodeSend.UserAgent
        }
      }
    );
  }
}

export default new MemberRepository();
