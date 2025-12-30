import { AxiosError } from "axios";
import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  deleteMyLeaveParam,
  postApplyLeaveParam,
  putMyLeaveParam,
} from "repositories/Leave/leave.param";
import leaveApi from "repositories/Leave/leave.repository";
import { MyLeavesResponse } from "types/Leave/leave.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyLeavesQuery = () =>
  useQuery<MyLeavesResponse, AxiosError>({
    queryKey: [QUERY_KEYS.leave.getMy],
    queryFn: () => leaveApi.getMyLeaves(),
    staleTime: 1000 * 30,
    gcTime: 1000 * 60,
  });

export const usePostApplyLeaveMutation = () => {
  return useMutation({
    mutationFn: (leaveData: postApplyLeaveParam) =>
      leaveApi.postApplyLeave(leaveData),
  });
};

export const useDeleteApplyLeaveMutation = () => {
  return useMutation({
    mutationFn: (idx: deleteMyLeaveParam) => leaveApi.deleteMyLeave(idx),
  });
};

export const usePutApplyLeaveMutation = () => {
  return useMutation({
    mutationFn: (leaveData: putMyLeaveParam) => leaveApi.putMyLeave(leaveData),
  });
};
