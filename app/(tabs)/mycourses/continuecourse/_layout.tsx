import { Stack } from "expo-router";
import ongoing from "./ongoing";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />

    </Stack>
  );
}
