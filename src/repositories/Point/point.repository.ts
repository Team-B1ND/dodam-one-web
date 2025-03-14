import { dodamAxios } from "libs/Axios/customAxios";
import { MyPointResponse } from "types/Point/point.type";
import { getMyPointParam } from "./point.param";

class PointRepository {
  public async getMyPoint({ type }: getMyPointParam): Promise<MyPointResponse> {
    const { data } = await dodamAxios.get<MyPointResponse>(
      `/point/score/my?type=${type}`
    );
    return data;
  }
}

export default new PointRepository();
