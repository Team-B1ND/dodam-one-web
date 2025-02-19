import config from "src/config/config.json";
import { MyMemberResponse, AuthCodeReqProps,AuthCodeSendProps } from "src/types/member/member.type";
import { dodamAxios } from "src/libs/axios/customAxios";
import { Signup } from "src/types/signup/signup.type";
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
