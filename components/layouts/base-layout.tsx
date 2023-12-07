import React from "react";
import { View } from "tamagui";
import PermissionLayout from "./permission-layout";
import {StyleSheet,SafeAreaView} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <PermissionLayout>
      <SafeAreaView style={styles.container}>
        <View flex={1} backgroundColor={"$background"}>
          {children}
        </View>
      </SafeAreaView>
    </PermissionLayout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});