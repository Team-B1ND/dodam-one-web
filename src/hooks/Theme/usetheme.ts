import { useCallback, useMemo } from "react";
import { THEME_KEY } from "constants/Theme/theme.contant";
import { ETheme } from "enum/Theme/theme.enum";
import { useThemeStore } from "store/Theme/themeStore";

/**
 * 다크 모드를 관리하는 커스텀 훅
 */
export const useTheme = () => {
    const { themeMode: currentTheme, setThemeMode: setCurrentTheme } = useThemeStore();

    const themeColor = useMemo((): ETheme => {
      return currentTheme === ETheme.DARK ? ETheme.DARK : ETheme.LIGHT;
    }, [currentTheme]);

    const handleTheme = useCallback((): void => {
      const switchTheme = currentTheme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
      window.localStorage.setItem(THEME_KEY, switchTheme);
      setCurrentTheme(switchTheme);
    }, [currentTheme, setCurrentTheme]);

    return {
      themeColor,
      handleTheme,
    };
};
