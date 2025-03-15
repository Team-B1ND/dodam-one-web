import { AxiosError } from "axios";
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { postMyBusParam, patchMyBusParam } from "repositories/Bus/bus.param";
import busrepository from "repositories/Bus/bus.repository";
import { BusesResponse, MyBusResponse } from "types/Bus/bus.type";
import { QUERY_KEYS } from "../queryKey";
import { B1ndToast } from "@b1nd/b1nd-toastify";

export const useGetBusesQuery = (
  options?: UseQueryOptions<BusesResponse, AxiosError, BusesResponse, string>
): UseQueryResult<BusesResponse, AxiosError> =>
  useQuery(QUERY_KEYS.bus.get, () => busrepository.getBuses(), options);

  export const useGetMyBusQuery = (
    options?: UseQueryOptions<MyBusResponse | { message: string }, AxiosError>
  ): UseQueryResult<MyBusResponse | { message: string }, AxiosError> =>
    useQuery<MyBusResponse | { message: string }, AxiosError>(
      QUERY_KEYS.bus.getMy, 
      () => busrepository.getMyBus(), 
       {
              
                suspense: true,
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

export const useDeleteMyBusMutatuin = () => {
  const mutation = useMutation(({ idx }: patchMyBusParam) =>
    busrepository.deleteMyBus({ idx })
  );
  return mutation;
}