import { dodamAxios } from "src/libs/Axios/customAxios";
import { TodayScheduleResponse } from "@src/types/Schedule/schedule.type";
import dayjs from "dayjs";

class ScheduleRepository {
  public async getTodaySchedules(): Promise<TodayScheduleResponse> {
    const startAt = dayjs().format("YYYY-MM-DD");
    const endAt = dayjs().add(7, "day").format("YYYY-MM-DD");

    const { data } = await dodamAxios.get(`/schedule/search?startAt=${startAt}&endAt=${endAt}`);
    return data;
  }
}

export default new ScheduleRepository();
