import { AxiosError } from "axios";
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import {
  deleteMyLeaveParam,
  postApplyLeaveParam,
  putMyLeaveParam,
} from "src/repositories/Leave/leave.param";
import leaveApi from "src/repositories/Leave/leave.repository";
import { MyLeavesResponse } from "src/types/Leave/leave.type";
import { QUERY_KEYS } from "../queryKey";
import { B1ndToast } from "@b1nd/b1nd-toastify";

export const useGetMyLeavesQuery = (
  options?: UseQueryOptions<
    MyLeavesResponse,
    AxiosError,
    MyLeavesResponse,
    string
  >
): UseQueryResult<MyLeavesResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.leave.getMy,
    () => leaveApi.getMyLeaves(),
      {
        
        staleTime: 1000 * 30,
        cacheTime: 1000 * 60,
          ...options,
           onError: (error:AxiosError) => {
                  if(error.status == 500){
                    B1ndToast.showError("서버 에러발생");
                    return;
                  }
                  window.location.reload();
                },
        }
  );

export const usePostApplyLeaveMutation = () => {
  const mutation = useMutation((leaveData: postApplyLeaveParam) =>
    leaveApi.postApplyLeave(leaveData)
  );
  return mutation;
};

export const useDeleteApplyLeaveMutation = () => {
  const mutation = useMutation((idx: deleteMyLeaveParam) =>
    leaveApi.deleteMyLeave(idx)
  );
  return mutation;
};

export const usePutApplyLeaveMutation = () => {
  const mutation = useMutation((leaveData: putMyLeaveParam) =>
    leaveApi.putMyLeave(leaveData)
  );
  return mutation;
};
