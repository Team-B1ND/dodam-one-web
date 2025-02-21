import { Member } from "@src/types/Member/member.type";

export interface Login {
  id: string;
  pw: string;
}

export interface LoginResponse extends Response {
  data: {
    member: Member;
    refreshToken: string;
    accessToken: string;
  };
}


