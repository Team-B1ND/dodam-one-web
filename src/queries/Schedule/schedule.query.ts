import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import scheduleRepository from "src/repositories/Schedule/schedule.repository";
import { ScheduleResponse } from "src/types/Schedule/schedule.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetScheduleQuery = (
  options?: UseQueryOptions<
    ScheduleResponse,
    AxiosError,
    ScheduleResponse,
    string
  >
): UseQueryResult<ScheduleResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.schedule.get,
    () => scheduleRepository.getTodaySchedules(),
    {
      suspense: true,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      ...options,
    }
    
  );
