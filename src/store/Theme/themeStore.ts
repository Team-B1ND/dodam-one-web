import { create } from "zustand";
import { ETheme } from "enum/Theme/theme.enum";
import { getTheme } from "utils/Theme/getTheme";

interface ThemeState {
  themeMode: ETheme;
  setThemeMode: (theme: ETheme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  themeMode: getTheme(),
  setThemeMode: (theme) => set({ themeMode: theme }),
}));
