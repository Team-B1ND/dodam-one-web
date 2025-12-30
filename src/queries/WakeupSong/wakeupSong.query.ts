import { AxiosError } from "axios";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getTodayAllowedWakeupSongParam } from "repositories/WakeupSong/wakeupSong.param";
import wakeupSongRepository from "repositories/WakeupSong/wakeupSong.repository";
import {
  MyWakeupSongsResponse,
  TodayAllowedWakeupSongsResponse,
} from "types/WakeupSong/wakeupSong.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetMyWakeupSongsQuery = (suspense = false) => {
  if (suspense) {
    return useSuspenseQuery<MyWakeupSongsResponse, AxiosError>({
      queryKey: [QUERY_KEYS.wakeupSong.getMy],
      queryFn: () => wakeupSongRepository.getMyWakeupSongs(),
    });
  }
  return useQuery<MyWakeupSongsResponse, AxiosError>({
    queryKey: [QUERY_KEYS.wakeupSong.getMy],
    queryFn: () => wakeupSongRepository.getMyWakeupSongs(),
  });
};

export const useGetTodayAllowedWakeupSongQuery = (
  { year, month, day }: getTodayAllowedWakeupSongParam,
  suspense = false
) => {
  if (suspense) {
    return useSuspenseQuery<TodayAllowedWakeupSongsResponse, AxiosError>({
      queryKey: [QUERY_KEYS.wakeupSong.getToday, year, month, day],
      queryFn: () =>
        wakeupSongRepository.getTodayAllowedWakeupSongs({ year, month, day }),
    });
  }
  return useQuery<TodayAllowedWakeupSongsResponse, AxiosError>({
    queryKey: [QUERY_KEYS.wakeupSong.getToday, year, month, day],
    queryFn: () =>
      wakeupSongRepository.getTodayAllowedWakeupSongs({ year, month, day }),
  });
};
