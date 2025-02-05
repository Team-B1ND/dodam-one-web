import {DodamSidebar} from "../Nav/index";
import { LayoutContainer, Layout } from "./style";
import { Outlet } from "react-router-dom";
import useExceptionHandling from "src/utils/exceptionHandling/exceptionHandling";

const PageTemplate = () => {
  const exceptionHandling = useExceptionHandling();

  return (
    <LayoutContainer>
      {exceptionHandling && <DodamSidebar />}
      <Layout>
        <Outlet />
      </Layout>
    </LayoutContainer>
  );
};

export default PageTemplate;
