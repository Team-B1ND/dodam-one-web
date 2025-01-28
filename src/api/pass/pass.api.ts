import { dodamAxios } from "src/libs/axios/customAxios";
import { MyPassesResponse, Pass } from "@src/types/pass/pass.type";
import {
  deleteMyPassParam,
  putMyPassParam,
} from "./pass.param";

class PassApi {
  public async getMyPasses(): Promise<MyPassesResponse> {
    const { data } = await dodamAxios.get(`/out-going/my`);
    return data;
  }

  public async deleteMyPass({ id }: deleteMyPassParam): Promise<void> {
    await dodamAxios.delete(`/out-going/${id}`);
  }

  public async postApplyPass(passData: Pass): Promise<void> {
    await dodamAxios.post("/out-going", passData);
  }

  public async putMyPass(passData: putMyPassParam): Promise<void> {
    await dodamAxios.put("/out/outgoing", passData);
  }
}

export default new PassApi();
