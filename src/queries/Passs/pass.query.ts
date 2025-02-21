import { AxiosError } from "axios";
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import {
  deleteMyPassParam,
  putMyPassParam,
} from "@src/repositories/Pass/pass.param";
import passRepository from "@src/repositories/Pass/pass.repository";
import { MyPassesResponse, Pass } from "@src/types/Pass/pass.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyPassesQuery = (
  options?: UseQueryOptions<
    MyPassesResponse,
    AxiosError,
    MyPassesResponse,
    string
  >
): UseQueryResult<MyPassesResponse, AxiosError> =>
  useQuery(QUERY_KEYS.pass.getMy, () => passRepository.getMyPasses(), options);

export const usePostApplyPassMutation = () => {
  const mutation = useMutation((passData: Pass) =>
    passRepository.postApplyPass(passData)
  );

  return mutation;
};

export const usePutApplyPassMutation = () => {
  const mutation = useMutation((passData: putMyPassParam) =>
    passRepository.putMyPass(passData)
  );

  return mutation;
};

export const useDeleteMyPassMutation = () => {
  const mutation = useMutation((idx: deleteMyPassParam) =>
    passRepository.deleteMyPass(idx)
  );

  return mutation;
};
