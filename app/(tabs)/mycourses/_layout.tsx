import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "My courses", headerShown: false}} />
      <Stack.Screen name="continuecourse" options={{ title: "", headerBackTitleVisible: false, headerShown:false}} />
      <Stack.Screen name="session" options={{title:"name of the course", headerShown:false }} />
      <Stack.Screen name="[id]" options={{title:"Name of the course",  headerBackTitleVisible: false, headerShown:false }} />
    </Stack>
  );
}
