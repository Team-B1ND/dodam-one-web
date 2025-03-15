import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import bannerRepository from "repositories/Banner/banner.repository";
import { BannersResponse } from "types/Banner/banner.type";
import { QUERY_KEYS } from "../queryKey";
import { B1ndToast } from "@b1nd/b1nd-toastify";

export const useGetBannersQuery = (
  options?: UseQueryOptions<
    BannersResponse,
    AxiosError,
    BannersResponse,
    string
  >
): UseQueryResult<BannersResponse, AxiosError> =>
  useQuery(QUERY_KEYS.banner.get, 
    () => bannerRepository.getBanners(),
 {
        
        cacheTime: 1000 * 60 * 60,
        staleTime: 1000 * 60 * 30,
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
