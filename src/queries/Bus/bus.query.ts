import { AxiosError } from "axios";
import {
  useMutation,
  useSuspenseQuery,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { postMyBusParam, patchMyBusParam } from "repositories/Bus/bus.param";
import busrepository from "repositories/Bus/bus.repository";
import { BusesResponse, MyBusResponse } from "types/Bus/bus.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetBusesQuery = (
  options?: UseQueryOptions<BusesResponse, AxiosError, BusesResponse, string[]>
): UseQueryResult<BusesResponse, AxiosError> =>
  useQuery({
    queryKey: [QUERY_KEYS.bus.get],
    queryFn: () => busrepository.getBuses(),
    ...options,
  });

export const useGetMyBusQuery = () =>
  useSuspenseQuery<MyBusResponse | { message: string }, AxiosError>({
    queryKey: [QUERY_KEYS.bus.getMy],
    queryFn: () => busrepository.getMyBus(),
    staleTime: 1000 * 30,
    gcTime: 1000 * 60,
  });

export const usePostMyBusMutation = () => {
  const mutation = useMutation({
    mutationFn: (idx: postMyBusParam) => busrepository.postMyBus(idx),
  });
  return mutation;
};

export const usePatchMyBusMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ idx }: patchMyBusParam) => busrepository.patchMyBus({ idx }),
  });
  return mutation;
};

export const useDeleteMyBusMutatuin = () => {
  const mutation = useMutation({
    mutationFn: ({ idx }: patchMyBusParam) => busrepository.deleteMyBus({ idx }),
  });
  return mutation;
};
