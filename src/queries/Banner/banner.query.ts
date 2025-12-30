import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import bannerRepository from "repositories/Banner/banner.repository";
import { BannersResponse } from "types/Banner/banner.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetBannersQuery = () =>
  useQuery<BannersResponse, AxiosError>({
    queryKey: [QUERY_KEYS.banner.get],
    queryFn: () => bannerRepository.getBanners(),
    gcTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 30,
  });
