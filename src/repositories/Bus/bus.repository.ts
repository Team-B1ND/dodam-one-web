import { dodamAxios } from "src/libs/Axios/customAxios";
import { BusesResponse, MyBusResponse } from "@src/types/Bus/bus.type";
import { patchMyBusParam, postMyBusParam } from "./bus.param";

class BusRepository {
  public async getBuses(): Promise<BusesResponse> {
    const { data } = await dodamAxios.get("/bus");
    return data;
  }

  public async getMyBus(): Promise<MyBusResponse> {
    const { data } = await dodamAxios.get<MyBusResponse>("/bus/apply");
    return data;
  }

  public async postMyBus({ idx }: postMyBusParam): Promise<void> {
    await dodamAxios.post(`/bus/apply/${idx}`);
  }

  public async patchMyBus({ idx }: patchMyBusParam): Promise<void> {
    await dodamAxios.patch(`/bus/apply/${idx}`);
  }
}

export default new BusRepository();
