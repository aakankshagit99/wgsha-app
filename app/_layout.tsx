import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import React from "react";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    InterLight: require("@tamagui/font-inter/otf/Inter-Light.otf"),
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    'FiraSans-Thin': require("../assets/fonts/FiraSans-Thin.ttf"),
    'FiraSans-ThinItalic': require("../assets/fonts/FiraSans-ThinItalic.ttf"),
    'FiraSans-ExtraLight': require("../assets/fonts/FiraSans-ExtraLight.ttf"),
    'FiraSans-Light': require("../assets/fonts/FiraSans-Light.ttf"),
    'FiraSans-Regular': require("../assets/fonts/FiraSans-Regular.ttf"),
    'FiraSans-Italic': require("../assets/fonts/FiraSans-Italic.ttf"),
    'FiraSans-Medium': require("../assets/fonts/FiraSans-Medium.ttf"),
    'FiraSans-MediumItalic': require("../assets/fonts/FiraSans-MediumItalic.ttf"),
    'FiraSans-SemiBold': require("../assets/fonts/FiraSans-SemiBold.ttf"),
    'FiraSans-SemiBoldItalic': require("../assets/fonts/FiraSans-SemiBoldItalic.ttf"),
    'FiraSans-Bold': require("../assets/fonts/FiraSans-Bold.ttf"),
    'FiraSans-BoldItalic': require("../assets/fonts/FiraSans-BoldItalic.ttf"),
    'FiraSans-ExtraBold': require("../assets/fonts/FiraSans-ExtraBold.ttf"),
    'FiraSans-ExtraBoldItalic': require("../assets/fonts/FiraSans-ExtraBoldItalic.ttf"),
    'FiraSans-Black': require("../assets/fonts/FiraSans-Black.ttf"),
    'FiraSans-BlackItalic': require("../assets/fonts/FiraSans-BlackItalic.ttf"),
    // Add other fonts like FontAwesome if needed
    ...FontAwesome.font,
  });
  

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={config} defaultTheme="light">
        <Stack initialRouteName="(tabs)">
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
          <Stack.Screen name="start" options={{ headerShown: false }} />
          <Stack.Screen name="completion" options={{ headerShown: false }} />
          <Stack.Screen name="comment" options={{headerShown:false}} />
          {/* <Stack.Screen name="ongoing" options={{title:'Ongoing courses'}}/> */}
        </Stack>
    </TamaguiProvider>
  );
}
