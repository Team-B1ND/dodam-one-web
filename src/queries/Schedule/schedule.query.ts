import { AxiosError } from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";
import scheduleRepository from "repositories/Schedule/schedule.repository";
import { ScheduleResponse } from "types/Schedule/schedule.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetScheduleQuery = () =>
  useSuspenseQuery<ScheduleResponse, AxiosError>({
    queryKey: [QUERY_KEYS.schedule.get],
    queryFn: () => scheduleRepository.getTodaySchedules(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
