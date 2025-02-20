
export interface Signup{
  id: string;
  pw: string;
  checkPw?:string;
  email: string;
  name: string;
  phone: string;
  position?: string;
  role: "STUDENT" | "TEACHER";
  grade: number;
  room: number;
  number: number;
  studentInformation?:string;
}
export interface SignupAgree {
  first: boolean;
  second: boolean;
}

export interface SignUpModal {
  email: boolean;
  phone: boolean
}