import { useLocation } from "react-router-dom";

const useExceptionHandling = () => {
  const { pathname } = useLocation();
  return pathname !== "/sign" ;
};

export default useExceptionHandling;
