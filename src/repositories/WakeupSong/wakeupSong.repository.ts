import { dodamAxios } from "libs/Axios/customAxios";
import {
  MyWakeupSongsResponse,
  TodayAllowedWakeupSongsResponse,
} from "types/WakeupSong/wakeupSong.type";
import { getTodayAllowedWakeupSongParam } from "./wakeupSong.param";

class WakeupSongRepository {
  public async getMyWakeupSongs(): Promise<MyWakeupSongsResponse> {
    const { data } = await dodamAxios.get("/wakeup-song/my");
    return data;
  }

  public async getTodayAllowedWakeupSongs({
    year,
    month,
    day,
  }: getTodayAllowedWakeupSongParam): Promise<TodayAllowedWakeupSongsResponse> {
    const { data } = await dodamAxios.get(
      `/wakeup-song/allowed?year=${year}&month=${month}&day=${day}`
    );
    return data;
  }
}

export default new WakeupSongRepository();
