import token from "libs/Token/token";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logOut = () => {
    token.clearToken();
    navigate("/sign");
  };

  return { logOut };
};

export default useLogout;
