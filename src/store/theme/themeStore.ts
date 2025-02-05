import { atom } from "recoil";
import { ETheme } from "src/enum/theme/theme.enum";
import { getTheme } from "src/utils/theme/getTheme";

export const themeModeAtom = atom<ETheme>({
  key: "theme/themeModeAtom",
  default: getTheme(),
});