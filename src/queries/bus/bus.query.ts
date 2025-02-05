import { AxiosError } from "axios";
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { postMyBusParam, patchMyBusParam } from "src/api/bus/bus.param";
import busApi from "src/api/bus/bus.api";
import { BusesResponse, MyBusResponse } from "@src/types/bus/bus.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetBusesQuery = (
  options?: UseQueryOptions<BusesResponse, AxiosError, BusesResponse, string>
): UseQueryResult<BusesResponse, AxiosError> =>
  useQuery(QUERY_KEYS.bus.get, () => busApi.getBuses(), options);

export const useGetMyBusQuery = (
  options?: UseQueryOptions<MyBusResponse, AxiosError, MyBusResponse, string>
): UseQueryResult<MyBusResponse, AxiosError> =>
  useQuery(QUERY_KEYS.bus.getMy, () => busApi.getMyBus(), options);

export const usePostMyBusMutation = () => {
  const mutation = useMutation((idx: postMyBusParam) =>
    busApi.postMyBus(idx)
  );
  return mutation;
};

export const usePatchMyBusMutation = () => {
  const mutation = useMutation(({ idx }: patchMyBusParam) =>
    busApi.patchMyBus({ idx })
  );
  return mutation;
};
