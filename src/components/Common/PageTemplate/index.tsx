import { LayoutContainer, Layout } from "./style";
import { DodamNavBar } from "@b1nd/dds-web";
import { Outlet } from "react-router-dom";
import useExceptionHandling from "src/utils/ExceptionHandling/exceptionHandling";
import { useRecoilValue } from "recoil";
import {useThemes} from "src/hooks/Theme/usetheme";
import { themeModeAtom } from "src/store/Theme/themeStore";
import useLogout from "src/hooks/Auth/useLogout";

const PageTemplate = () => {
  const exceptionHandling = useExceptionHandling();
  const { handleTheme } =useThemes();
  const currentTheme = useRecoilValue(themeModeAtom);
  const {logOut}=useLogout()

  return (
    <LayoutContainer>
      {exceptionHandling && 
        <DodamNavBar 
        location="home" 
        handleTheme={handleTheme} 
        logout={logOut}
        currentTheme={currentTheme}/>
        }
      <Layout>
        <Outlet />
      </Layout>
    </LayoutContainer>
  );
};

export default PageTemplate;
