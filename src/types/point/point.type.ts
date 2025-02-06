import { PointType } from "src/api/point/point.param";
import { Response } from "../util/response.type";

export interface MyPointResponse extends Response {
  data: {
    id: number;
    bonus: number;
    minus: number;
    offset: number;
    type: PointType;
    student: {
      id: number;
      name: string;
      grade: number;
      room: number;
      number: number;
    };
  };
}
