import { ReactNode } from "react";
import { DodamThemeProvider,DodamGlobalStyles } from "@b1nd/dds-web";
import { useTheme } from "hooks/Theme/usetheme";;

type Props = {
  children: ReactNode;
};

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useTheme();
  
  return (
    <DodamThemeProvider theme={themeColor}>
      <DodamGlobalStyles />
      {children}
    </DodamThemeProvider>
  );
};

export default ThemeProviderContainer;
