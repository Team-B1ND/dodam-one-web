import React, { useCallback, useState } from "react";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { Signup, SignupAgree, SignUpModal } from "src/types/signup/signup.type";
import patternCheck from "src/utils/check/patternCheck";
// import * as Sentry from "sentry/react"
import memberRepository from "src/api/member/member.api";
import ErrorHandler from "src/utils/error/ErrorHandler";
import { AxiosError } from "axios";
import { DodamDialog } from "@b1nd/dds-web";
import { useReqAuthCode,useSendAuthCode } from "src/queries/member/member.query";

const useSignup = () => {
  //내디바이스 종류 
  const userAgent = navigator.userAgent;

  const [section, setSection] = useState("first");
  const {mutate:reqAuthCode,isLoading:reqLoading} = useReqAuthCode(); //인증 코드를 요청
  const {mutate:sendAuthCode, isLoading:sendLoading} = useSendAuthCode(); //인증코드를 보냄
  const [isEmailVerified,setIsEmailVerified ] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isAuthCode,setAuthCode] = useState<string>("");

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

  const [isModal, setModal] = useState<SignUpModal>({
    email:false, 
    phone: false
  });

  //이메일 인증 요청
  const sendEmailVerification = async () => {
    setModal((prev) => ({ ...prev, email: true })); 
    try {
      reqAuthCode({
        identifier: signupData.email, 
        AuthType: "EMAIL",
      },{
      onSuccess:()=>{
      B1ndToast.showInfo("인증 코드가 발송되었습니다.");
      }
    }
    );
      
    } catch (error) {
      B1ndToast.showError("이메일 인증 요청에 실패했습니다.");
      setModal((prev) => ({ ...prev, email: false })); 
    }
  };

  //전화번호 인증코드 요청
  const sendPhoneVerification = async () => {
    setModal((prev) => ({ ...prev, phone: true })); 
    try {
      reqAuthCode({
        identifier: signupData.phone!, 
        AuthType: "PHONE",
      },{
      onSuccess:()=>{
        B1ndToast.showSuccess("인증 코드가 발송되었습니다.");
      }
    }
    );
    } catch (error) {
      B1ndToast.showError("전화번호 인증 요청에 실패했습니다.");
      setModal((prev) => ({ ...prev, email: false })); 
    }
  };

  //이메일 인증코드 인증
  const emailVerification = ()=>{
    try{
      sendAuthCode({
        identifier:signupData.email,
        AuthType:"EMAIL",
        authCode:Number(isAuthCode),
        UserAgent:userAgent,
      },{
        onSuccess:()=>{
          setIsEmailVerified(true);
          setModal((prev) => ({ ...prev, email: false })); 
          B1ndToast.showSuccess("인증이 완료 되었습니다.");
          setAuthCode("");
          
        }
      })
    }
    catch (error) {
      B1ndToast.showError("이메일 인증에 실패했습니다.");
    }
  }
  //전화번호 인증
  const phoneVerification = ()=>{
    try{
      sendAuthCode({
        identifier:signupData.phone,
        AuthType:"PHONE",
        authCode:Number(isAuthCode),
        UserAgent:userAgent,
      },{
        onSuccess:()=>{
          setIsPhoneVerified(true);
          setModal((prev) => ({ ...prev, phone: false })); 
          B1ndToast.showSuccess("인증이 완료 되었습니다.;");
          setAuthCode("");
        }
      })
    }
    catch (error) {
      B1ndToast.showError("이메일 인증에 실패했습니다.");
    }
  }


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
    console.log(isEmailVerified);
    
    if(isEmailVerified == false){
      sendEmailVerification();
      return
    }
    
    if(isPhoneVerified == false){
     sendPhoneVerification();
     return 
    }

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


    const validSignupData = {
      ...signupData,
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
    reqLoading,
    isModal,
    isPhoneVerified,
    isEmailVerified,
    isAuthCode,
    sendLoading,
    setAuthCode,
    checkAllRequired,
    section,
    setSection,
    signupData,
    handleSignupData,
    submitSignupDataFirst,
    agrees,
    handleSignupAgree,
    submitSignupDataSecond,
    emailVerification,
    phoneVerification,
    setModal,
  };
};

export default useSignup;
