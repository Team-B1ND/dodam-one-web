import { AxiosError } from "axios";
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { postMyBusParam, patchMyBusParam } from "@src/repositories/Bus/bus.param";
import busrepository from "src/repositories/Bus/bus.repository";
import { BusesResponse, MyBusResponse } from "@src/types/Bus/bus.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetBusesQuery = (
  options?: UseQueryOptions<BusesResponse, AxiosError, BusesResponse, string>
): UseQueryResult<BusesResponse, AxiosError> =>
  useQuery(QUERY_KEYS.bus.get, () => busrepository.getBuses(), options);

export const useGetMyBusQuery = (
  options?: UseQueryOptions<MyBusResponse, AxiosError, MyBusResponse, string>
): UseQueryResult<MyBusResponse, AxiosError> =>
  useQuery(QUERY_KEYS.bus.getMy, () => busrepository.getMyBus(), options);

export const usePostMyBusMutation = () => {
  const mutation = useMutation((idx: postMyBusParam) =>
    busrepository.postMyBus(idx)
  );
  return mutation;
};

export const usePatchMyBusMutation = () => {
  const mutation = useMutation(({ idx }: patchMyBusParam) =>
    busrepository.patchMyBus({ idx })
  );
  return mutation;
};
