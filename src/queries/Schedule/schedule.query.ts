import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import scheduleRepository from "src/repositories/Schedule/schedule.repository";
import { TodayScheduleResponse } from "src/types/Schedule/schedule.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetTodayScheduleQuery = (
  options?: UseQueryOptions<
    TodayScheduleResponse,
    AxiosError,
    TodayScheduleResponse,
    string
  >
): UseQueryResult<TodayScheduleResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.schedule.getToday,
    () => scheduleRepository.getTodaySchedules(),
    {
      suspense: true,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
    
  );
