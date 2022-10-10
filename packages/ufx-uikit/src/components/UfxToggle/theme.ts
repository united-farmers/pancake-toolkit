import { darkColors, lightColors } from "../../theme/colors";
import { UfxToggleTheme } from "./types";

export const light: UfxToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: UfxToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
