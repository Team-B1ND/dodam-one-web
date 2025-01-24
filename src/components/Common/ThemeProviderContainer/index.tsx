import { ReactNode } from "react";
import { DodamThemeProvider,DodamGlobalStyles } from "@b1nd/dds-web";
import { getTheme } from "src/utils/theme/getTheme";

type Props = {
  children: ReactNode;
};

const ThemeProviderContainer = ({ children }: Props) => {
  const theme = getTheme();

  return (
    <DodamThemeProvider theme={theme}>
      <DodamGlobalStyles />
      {children}
    </DodamThemeProvider>
  );
};

export default ThemeProviderContainer;
