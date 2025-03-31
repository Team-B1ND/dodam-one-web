import { LayoutContainer, Layout, PageTemplateContainer } from "./style";
import { DodamNavBar } from "@b1nd/dds-web";
import { Outlet } from "react-router-dom";
import useExceptionHandling from "utils/ExceptionHandling/exceptionHandling";
import { useRecoilValue } from "recoil";
import {useThemes} from "hooks/Theme/usetheme";
import { themeModeAtom } from "store/Theme/themeStore";
import useLogout from "hooks/Auth/useLogout";

const PageTemplate = () => {
  const exceptionHandling = useExceptionHandling();
  const { handleTheme } =useThemes();
  const currentTheme = useRecoilValue(themeModeAtom);
  const {logOut}=useLogout()

  return (
    <LayoutContainer>
      <PageTemplateContainer>
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
      </PageTemplateContainer>
    </LayoutContainer>
  );
};

export default PageTemplate;
