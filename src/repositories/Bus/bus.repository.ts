import { dodamAxios } from "libs/Axios/customAxios";
import { BusesResponse, MyBusResponse } from "types/Bus/bus.type";
import { patchMyBusParam, postMyBusParam } from "./bus.param";

class BusRepository {
  public async getBuses(): Promise<BusesResponse> {
    const { data } = await dodamAxios.get("/bus");
    return data;
  }

  public async getMyBus(): Promise<MyBusResponse | { message: string }> {
    try {
      const { data } = await dodamAxios.get<MyBusResponse>("/bus/apply");
      return data;
    } catch (error: any) {
      if (error.response?.status === 403) {
        return { message: "버스 신청가 아닙니다" };
      }
      throw error; 
    }
  }
  

  public async postMyBus({ idx }: postMyBusParam): Promise<void> {
    await dodamAxios.post(`/bus/apply/${idx}`);
  }

  public async patchMyBus({ idx }: patchMyBusParam): Promise<void> {
    await dodamAxios.patch(`/bus/apply/${idx}`);
  }
  
  public async deleteMyBus({ idx }: patchMyBusParam): Promise<void> {
    await dodamAxios.delete(`/bus/apply/${idx}`);
  }
}

export default new BusRepository();
