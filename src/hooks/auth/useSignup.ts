import React, { useCallback, useState } from "react";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { Signup, SignupAgree } from "src/types/signup/signup.type";
import patternCheck from "src/utils/check/patternCheck";
// import * as Sentry from "sentry/react"
import memberRepository from "src/api/member/member.api";
import ErrorHandler from "src/utils/error/ErrorHandler";
import { AxiosError } from "axios";
import { DodamDialog } from "@b1nd/dds-web";

const useSignup = () => {
const [section, setSection] = useState("first");

  const [signupData, setSignupData] = useState<Signup>({
    id: "",
    pw: "",
    checkPw:"",
    email: "",
    name: "",
    phone: "",
    role: "STUDENT",
    grade: 0,
    room: 0,
    number: 0,
    studentInformation:"",
  });


  const [agrees, setAgrees] = useState<SignupAgree>({
    first: false,
    second: false,
  });


  const handleSignupData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
  
      if (name === "studentInformation") {
        const formattedValue = value.replace(/\D/g, "").slice(0, 4); // 숫자만 입력 가능, 최대 4자리
        let data = "";
  
        if (formattedValue.length >= 1) {
          data += formattedValue[0] + "학년 ";
        }
        if (formattedValue.length >= 2) {
          data += formattedValue[1] + "반 ";
        }
        if (formattedValue.length >= 3) {
          data += formattedValue.slice(2) + "번";
        }
  
        console.log(data);
        setSignupData((prev) => ({
          ...prev,
          studentInformation: data,
          grade: formattedValue.length >= 1 ? Number(formattedValue[0]) : 0,
          room: formattedValue.length >= 2 ? Number(formattedValue[1]) : 0,
          number: formattedValue.length >= 3 ? Number(formattedValue.slice(2)) : 0,
        }));
      } else {
        setSignupData((prev) => ({ ...prev, [name]: value }));
      }
    },
    []
  );
  
  

  const submitSignupDataFirst = useCallback(async () => {
    const { email, phone, grade, room, number, name } = signupData;

    if (email === "" || phone === "" || grade === 0 || room === 0 || number === 0 || name === "") {
      B1ndToast.showInfo("양식이 비어있습니다");
      return;
    }

    if (!patternCheck.emailCheck(email)) {
      B1ndToast.showInfo("이메일 형식을 지켜주세요");
      return;
    }

    if (!patternCheck.phoneCheck(phone)) {
      B1ndToast.showInfo("전화번호 형식을 지켜주세요");
      return;
    }

    if (grade > 3 || room > 4 || number > 20) {
      B1ndToast.showInfo("올바른 학급정보, 기수를 입력해주세요");
      return;
    }

    setSection("second");
  }, [signupData]);

  const handleSignupAgree = useCallback(
    (agree: string) =>
      setAgrees(<T extends object, U extends keyof T>(prev: T) => ({
        ...prev,
        [agree as U]: !prev[agree as U],
      })),
    []
  );

  const submitSignupDataSecond = useCallback(async () => {
    const { id, pw, grade, room, number } = signupData;
    const { first, second } = agrees;

    if (id === "" || pw === "" ) {
      B1ndToast.showInfo("형식이 비어있습니다");
      return;
    }

    if (!patternCheck.idCheck(id)) {
      B1ndToast.showInfo("아이디 형식을 지켜주세요");
      return;
    }

    
    if (!patternCheck.pwCheck(pw)) {
      B1ndToast.showInfo("비밀번호 형식을 지켜주세요");
      return;
    }

    if (!first) {
      B1ndToast.showInfo("서비스 이용약관에 동의해주세요");
      return;
    }

    if (!second) {
      B1ndToast.showInfo("개인정보취급방침에 동의해주세요");
      return;
    }

    const { checkPw, ...SignData } = signupData;

    const validSignupData = {
      ...SignData,
      grade: Number(grade),
      room: Number(room),
      number: Number(number),
    };

    try {
      await memberRepository.postMemberSignUp(validSignupData);
      DodamDialog.alert("회원가입에 성공했습니다.(관리자 승인을 기다려주세요!)");
      window.location.reload();
    } catch (error) {
      const errorCode = error as AxiosError;
      B1ndToast.showError(ErrorHandler.signupError(errorCode.response?.status!));
      // Sentry.captureException(`이러한 문제로 회원가입 실패 ${error}`);
    }
  }, [agrees, signupData]);



  const checkAllRequired = useCallback(() => {
    setAgrees({first:true, second:true});
  }, []);

  return {
    checkAllRequired,
    section,
    setSection,
    signupData,
    handleSignupData,
    submitSignupDataFirst,
    agrees,
    handleSignupAgree,
    submitSignupDataSecond,
  };
};

export default useSignup;
