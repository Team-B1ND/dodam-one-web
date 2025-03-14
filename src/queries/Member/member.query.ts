import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult, useMutation } from "react-query";
import { MyMemberResponse,AuthCodeReqProps,AuthCodeSendProps } from "types/Member/member.type";
import MemberRepository from "repositories/Member/member.repository";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import token from "libs/Token/token";
import { QUERY_KEYS } from "../queryKey";
import { Signup } from "types/Signup/signup.type";

export const useGetMyMemberQuery = (
  options?: UseQueryOptions<
    MyMemberResponse,
    AxiosError,
    MyMemberResponse,
    string
  >
): UseQueryResult<MyMemberResponse, AxiosError> =>
  useQuery(QUERY_KEYS.member.getMy, () => MemberRepository.getMyMember(), {
    ...options,
    onError: () => {
      B1ndToast.showError("토큰이 위조 됐습니다");
      token.clearToken();
      window.location.href = "/sign";
    },
  });


export const useReqAuthCode = () => {
  const mutation = useMutation((AuthCodeReq: AuthCodeReqProps) => 
    MemberRepository.reqAuthCode(AuthCodeReq)
  );
  return mutation;
}


export const useSendAuthCode = () => {
  const mutation = useMutation((AuthCodeSend:AuthCodeSendProps) => 
    MemberRepository.authCodeVerify(AuthCodeSend)
  )
  return mutation;
}

export const useMemberSignUp = () => {
  const mutation = useMutation((signupData: Signup)=>
    MemberRepository.postMemberSignUp(signupData)
  ) 
  return mutation;
}