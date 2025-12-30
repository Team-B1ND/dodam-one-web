import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { getMyPointParam } from "repositories/Point/point.param";
import pointRepository from "repositories/Point/point.repository";
import { MyPointResponse } from "types/Point/point.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyPointQuery = ({ type }: getMyPointParam) =>
  useQuery<MyPointResponse, AxiosError>({
    queryKey: QUERY_KEYS.point.getMy(type),
    queryFn: () => pointRepository.getMyPoint({ type }),
    gcTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 60,
  });
