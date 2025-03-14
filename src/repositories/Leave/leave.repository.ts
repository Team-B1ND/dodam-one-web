import { MyLeavesResponse } from "types/Leave/leave.type";
import { dodamAxios } from "libs/Axios/customAxios";
import {
  deleteMyLeaveParam,
  postApplyLeaveParam,
  putMyLeaveParam,
} from "./leave.param";

class LeaveRepository {
  public async getMyLeaves(): Promise<MyLeavesResponse> {
    const { data } = await dodamAxios.get<MyLeavesResponse>("/out-sleeping/my");
    return data;
  }

  public async postApplyLeave(leaveData: postApplyLeaveParam): Promise<void> {
    await dodamAxios.post("/out-sleeping", leaveData);
  }

  public async deleteMyLeave({ id }: deleteMyLeaveParam): Promise<void> {
    await dodamAxios.delete(`/out-sleeping/${id}`);
  }

  public async putMyLeave(leaveData: putMyLeaveParam): Promise<void> {
    await dodamAxios.put("/out/outsleeping", leaveData);
  }
}

export default new LeaveRepository();
