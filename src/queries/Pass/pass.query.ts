import { AxiosError } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteMyPassParam,
  putMyPassParam,
} from "repositories/Pass/pass.param";
import passRepository from "repositories/Pass/pass.repository";
import { MyPassesResponse, Pass } from "types/Pass/pass.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyPassesQuery = () =>
  useQuery<MyPassesResponse, AxiosError>({
    queryKey: [QUERY_KEYS.pass.getMy],
    queryFn: () => passRepository.getMyPasses(),
  });

export const usePostApplyPassMutation = () => {
  return useMutation({
    mutationFn: (passData: Pass) => passRepository.postApplyPass(passData),
  });
};

export const usePutApplyPassMutation = () => {
  return useMutation({
    mutationFn: (passData: putMyPassParam) => passRepository.putMyPass(passData),
  });
};

export const useDeleteMyPassMutation = () => {
  return useMutation({
    mutationFn: (idx: deleteMyPassParam) => passRepository.deleteMyPass(idx),
  });
};
