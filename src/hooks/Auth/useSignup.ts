import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { Signup, SignupAgree, SignUpModal } from "types/Signup/signup.type";
import patternCheck from "utils/Check/patternCheck";
// import * as Sentry from "sentry/react"
import { useMemberSignUp } from "queries/Member/member.query";
import ErrorHandler from "utils/Error/ErrorHandler";
import axios from "axios";
import { useReqAuthCode,useSendAuthCode } from "queries/Member/member.query";

const useSignup = () => {
  //내디바이스 종류 
  const userAgent = navigator.userAgent;

  const [section, setSection] = useState("first");
  const {mutate:reqAuthCode,isPending:reqLoading} = useReqAuthCode(); //인증 코드를 요청
  const {mutate:sendAuthCode, isPending:sendLoading} = useSendAuthCode(); //인증코드를 보냄
  const {mutate:signupMutate, isPending:sinupLodaing} = useMemberSignUp();
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

  const clearSignupField = (field: keyof Signup) => {
    setSignupData((prev) => ({ ...prev, [field]: "" }));
  };
  
  


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

      reqAuthCode({
        identifier: signupData.email, 
        AuthType: "EMAIL",
      },{
      onSuccess:()=>{
      toast.info("인증 코드가 발송되었습니다.");
      },
      onError:()=>{
        toast.error("이메일 인증 요청에 실패했습니다.");
        setModal((prev) => ({ ...prev, email: false })); 
      }
    }
    );
   
  };

  //전화번호 인증코드 요청
  const sendPhoneVerification = async () => {
    setModal((prev) => ({ ...prev, phone: true })); 
      reqAuthCode({
        identifier: signupData.phone!, 
        AuthType: "PHONE",
      },{
      onSuccess:()=>{
        toast.success("인증 코드가 발송되었습니다.");
      },
      onError:()=>{
        toast.error("전화번호 인증 요청에 실패했습니다.");
        setModal((prev) => ({ ...prev, email: false })); 
      }
    }
    );
  
  };

  //이메일 인증코드 인증
  const emailVerification = ()=>{
 
      sendAuthCode({
        identifier:signupData.email,
        AuthType:"EMAIL",
        authCode:Number(isAuthCode),
        UserAgent:userAgent,
      },{
        onSuccess:()=>{
          setIsEmailVerified(true);
          setModal((prev) => ({ ...prev, email: false })); 
          toast.success("인증이 완료 되었습니다.");
          setAuthCode("");
          setTimeout(() => {
            console.log("Updated isEmailVerified:", isEmailVerified);
          }, 0);
        }
        ,
        onError:()=>{
          toast.error("이메일 인증에 실패했습니다.");
        }
      })
   
  }
  //전화번호 인증
  const phoneVerification = ()=>{
    
      sendAuthCode({
        identifier:signupData.phone,
        AuthType:"PHONE",
        authCode:Number(isAuthCode),
        UserAgent:userAgent,
      },{
        onSuccess:()=>{
          setIsPhoneVerified(true);
          setModal((prev) => ({ ...prev, phone: false })); 
          toast.success("인증이 완료 되었습니다.;");
          setAuthCode("");
                    
        },
        onError:()=>{
          toast.error("이메일 인증에 실패했습니다.");
        }
      })
    
  }


  const handleSignupData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
  
      if (name === "studentInformation") {
        // 숫자만 입력받고 최대 7자리까지 처리
        const formattedValue = value.replace(/\D/g, "").slice(0, 7); 
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
    
    if (!isEmailVerified) {
      sendEmailVerification();
      return;
    } else if (!isPhoneVerified) {
      sendPhoneVerification();
      return;
    }

    if (email === "" || phone === "" || grade === 0 || room === 0 || number === 0 || name === "") {
      toast.info("양식이 비어있습니다");
      return;
    }

    if (!patternCheck.emailCheck(email)) {
      toast.info("이메일 형식을 지켜주세요");
      return;
    }

    if (!patternCheck.phoneCheck(phone)) {
      toast.info("전화번호 형식을 지켜주세요");
      return;
    }

    if (grade > 3 || room > 4 || number > 20) {
      toast.info("올바른 학급정보, 기수를 입력해주세요");
      return;
    }
   
    setSection("second");
  }, [signupData, isEmailVerified, isPhoneVerified]);

  const handleSignupAgree = useCallback(
    (agree: string) =>
      setAgrees(<T extends object, U extends keyof T>(prev: T) => ({
        ...prev,
        [agree as U]: !prev[agree as U],
      })),
    []
  );

  

  const submitSignupDataSecond = useCallback(async () => {
    const { id, pw, grade, room, number} = signupData;
    const { first, second } = agrees;

    if (id === "" || pw === "" ) {
      toast.info("형식이 비어있습니다");
      return;
    }

    if (!patternCheck.idCheck(id)) {
      toast.info("아이디 형식을 지켜주세요");
      return;
    }

    
    if (!patternCheck.pwCheck(pw)) {
      toast.info("비밀번호 형식을 지켜주세요");
      return;
    }

    if (!first) {
      toast.info("서비스 이용약관에 동의해주세요");
      return;
    }

    if (!second) {
      toast.info("개인정보취급방침에 동의해주세요");
      return;
    }
   

    const { studentInformation, checkPw, role, ...signupDataWithoutStudentInfo } = signupData;

    const validSignupData: Signup = {
      ...signupDataWithoutStudentInfo,
      grade: Number(grade),
      room: Number(room),
      number: Number(number),
    };

    signupMutate(validSignupData, {
      onSuccess: () => {
        alert("회원가입에 성공했습니다.(관리자 승인을 기다려주세요!)");
        window.location.reload();
      },
      onError: (error: unknown) => {
        if (axios.isAxiosError(error)) {
          return toast.error(ErrorHandler.signupError(error.response?.status!));
        }
    
        // 예상치 못한 오류 처리
        toast.error("예기치 않은 오류가 발생했습니다.");
      }
    });

   

    
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
    sinupLodaing,
    clearSignupField,
  };
};

export default useSignup;
