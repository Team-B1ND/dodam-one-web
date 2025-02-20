export const SIGNUP_SECTION_NAME = [
  {
    title: "first",
  },
  { title: "second" },
] as const;

export const SIGNUP_AGREE = [
  { 
    order: "first",
    title: "[필수] 서비스 이용약관", 
    detailInfoLink: "service-policy" 
  },
  {
    order: "second",
    title: "[필수] 개인정보 수집 및 이용에 대한 안내 ",
    detailInfoLink: "personal-information",
  },
] as const;
