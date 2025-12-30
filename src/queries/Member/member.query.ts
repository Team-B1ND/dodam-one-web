import { AxiosError } from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { MyMemberResponse, AuthCodeReqProps, AuthCodeSendProps } from "types/Member/member.type";
import MemberRepository from "repositories/Member/member.repository";
import { QUERY_KEYS } from "../queryKey";
import { Signup } from "types/Signup/signup.type";

export const useGetMyMemberQuery = () => {
  return useQuery<MyMemberResponse, AxiosError>({
    queryKey: [QUERY_KEYS.member.getMy],
    queryFn: () => MemberRepository.getMyMember(),
  });
};

export const useReqAuthCode = () => {
  return useMutation({
    mutationFn: (AuthCodeReq: AuthCodeReqProps) =>
      MemberRepository.reqAuthCode(AuthCodeReq),
  });
};

export const useSendAuthCode = () => {
  return useMutation({
    mutationFn: (AuthCodeSend: AuthCodeSendProps) =>
      MemberRepository.authCodeVerify(AuthCodeSend),
  });
};

export const useMemberSignUp = () => {
  return useMutation({
    mutationFn: (signupData: Signup) =>
      MemberRepository.postMemberSignUp(signupData),
  });
};
