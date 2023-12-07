import React from "react";
import { View } from "tamagui";

type Props = {
  children: React.ReactNode;
};

export default function PermissionLayout({ children }: Props) {
  return (
    <View flex={1} backgroundColor={"$background"}>
      {children}
    </View>
  );
}
