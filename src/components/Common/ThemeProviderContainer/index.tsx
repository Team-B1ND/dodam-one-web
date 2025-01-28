import { ReactNode } from "react";
import { DodamThemeProvider,DodamGlobalStyles } from "@b1nd/dds-web";

type Props = {
  children: ReactNode;
};

const ThemeProviderContainer = ({ children }: Props) => {

  return (
    <DodamThemeProvider theme={"LIGHT"}>
      <DodamGlobalStyles />
      {children}
    </DodamThemeProvider>
  );
};

export default ThemeProviderContainer;
