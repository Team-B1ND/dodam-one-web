import { LayoutContainer, Layout } from "./style";
import { DodamNavBar } from "@b1nd/dds-web";
import { Outlet } from "react-router-dom";
import useExceptionHandling from "utils/ExceptionHandling/exceptionHandling";
import {useTheme} from "hooks/Theme/usetheme";
import { useThemeStore } from "store/Theme/themeStore";
import useLogout from "hooks/Auth/useLogout";

const PageTemplate = () => {
  const exceptionHandling = useExceptionHandling();
  const { handleTheme } =useTheme();
  const currentTheme = useThemeStore((state) => state.themeMode);
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
