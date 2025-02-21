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
} from "@src/repositories/Leave/leave.param";
import leaveApi from "@src/repositories/Leave/leave.repository";
import { MyLeavesResponse } from "@src/types/Leave/leave.type";
import { QUERY_KEYS } from "../queryKey";

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
    options
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
