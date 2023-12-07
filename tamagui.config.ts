import { createAnimations } from "@tamagui/animations-react-native";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens as TMTokens } from "@tamagui/themes";
import { createFont, createTamagui, createTokens } from "tamagui";
import { config as TMConfig } from "@tamagui/config/v2";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});
const size = {
  ...TMTokens.size,
  0: 0,
  xs: 8,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 32,
  true: 16,
  // ....
};
const interFont = createFont({
  family: "FiraSans-Regular",

  size: {
    ...size,
    true: 14,
  },
  lineHeight: {
    1: 17,
    2: 22,
    3: 25,
    // ...
  },
  weight: {
    4: "300",
    6: "600",
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },

  face: {
    100: { normal: "FiraSans-Thin", italic: "FiraSans-ThinItalic" },
    200: { normal: "FiraSans-ExtraLight", italic: "FiraSans-ExtraLightItalic" },
    300: { normal: "FiraSans-Light", italic: "FiraSans-LightItalic" },
    400: { normal: "FiraSans-Regular", italic: "FiraSans-Italic" },
    500: { normal: "FiraSans-Medium", italic: "FiraSans-MediumItalic" },
    600: { normal: "FiraSans-SemiBold", italic: "FiraSans-SemiBoldItalic" },
    700: { normal: "FiraSans-Bold", italic: "FiraSans-BoldItalic" },
    800: { normal: "FiraSans-ExtraBold", italic: "FiraSans-ExtraBoldItalic" },
    900: { normal: "FiraSans-Black", italic: "FiraSans-BlackItalic" },
  },
});

export const tokens = createTokens({
  size,
  space: { ...size, "-1": -5, "-2": -10 },
  radius: { 0: 0, 1: 6, 2: 10, 3: 2 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    primary: "#D7684D",
    accent: "#D4D9FF",
    secondary: "#FFE1DA",
    error: "BF2222",
    background: "#FFFFFF",
    black: "#121212",
    darkgrey: "#595959",
    grey: "#ACACAC",
    white: "#fff",
    lightgrey: "#E8E8E8",
  },
});

const headingFont = interFont;
const bodyFont = interFont;


const config = createTamagui({
  animations,
  defaultTheme: "dark",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes: {
    light: {
      ...themes.light,
      color: tokens.color.black,
      primary: tokens.color.primary,
    },
    dark: {
      ...themes.dark,
      bg: "#111",
      color: tokens.color.white,
    },
  },
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  }),
});

export type AppConfig = typeof config;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
