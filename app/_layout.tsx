import {
  Kanit_400Regular,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="calculator"
        options={{
          title: "Taxi App Calculator",
          headerTitleAlign: "center",
          headerShown: false,
          headerStyle: { backgroundColor: "#64abdd" },
          headerTitleStyle: {
            color: "white",
            fontFamily: "Kanit_700Bold",
            fontSize: 24,
          },
        }}
      />
    </Stack>
  );
}
