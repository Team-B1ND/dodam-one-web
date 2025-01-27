import config from "src/config/config.json";
import { MyMemberResponse } from "src/types/member/member.type";
import { dodamAxios } from "src/libs/axios/customAxios";
import { SignupParam } from "./member.param";
import axios from "axios";

class MemberRepository {
  public async postMemberSignUp(signupData: SignupParam): Promise<void> {
    await axios.post(`${config.DODAM_SERVER}/member/join-student`, signupData);
  }

  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await dodamAxios.get("/member/my");
    return data;
  }
}

export default new MemberRepository();
