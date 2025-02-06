import { dodamAxios } from "src/libs/axios/customAxios";
import { MyPointResponse } from "src/types/point/point.type";
import { getMyPointParam } from "./point.param";

class PointApi {
  public async getMyPoint({ type }: getMyPointParam): Promise<MyPointResponse> {
    const { data } = await dodamAxios.get<MyPointResponse>(
      `/point/score/my?type=${type}`
    );
    return data;
  }
}

export default new PointApi();
