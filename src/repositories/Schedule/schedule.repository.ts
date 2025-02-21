import { dodamAxios } from "src/libs/Axios/customAxios";
import { TodayScheduleResponse } from "@src/types/Schedule/schedule.type";

class Schedule {
  public async getTodaySchedules(): Promise<TodayScheduleResponse> {
    const { data } = await dodamAxios.get("/schedule/today");
    return data;
  }
}

export default new Schedule();
