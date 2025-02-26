export interface Schedule {
  readonly id: number;
  name: string;
  place: string;
  type: "ACADEMIC" | "HOLIDAY";
  date: string[];
  targetGrades: string[];
}

export interface ScheduleResponse extends Response {
  data: Schedule[];
}
