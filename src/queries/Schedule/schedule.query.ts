import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import scheduleRepository from "repositories/Schedule/schedule.repository";
import { ScheduleResponse } from "types/Schedule/schedule.type";
import { QUERY_KEYS } from "../queryKey";
import { B1ndToast } from "@b1nd/b1nd-toastify";


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
      onError: (error:AxiosError) => {
        if(error.status == 500){
          B1ndToast.showError("서버 에러발생");
          return;
        }
        window.location.reload();
      },
    }
  );
