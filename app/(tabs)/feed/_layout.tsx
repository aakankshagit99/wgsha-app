import AntDesign from "@expo/vector-icons/build/AntDesign";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { Alert, Modal } from "react-native";
import { Button, View, Text } from "tamagui";
import AwesomeAlert from 'react-native-awesome-alerts';
;
export default function _layout(this: any) {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  
  const handleHeaderButtonClick = () => {
    // setShowFloatingButton(true);
    Alert.alert("Header Button Pressed", "This is a header button!");
    // Additional logic or actions you want to perform on header button click
  }

  const handleFloatingButtonClick = () => {
    // Logic for the action to be performed when the floating button is clicked
    // For example, navigating to another screen, performing an action, etc.
  };
  // const {showAlert} = this.state;

  // constructor(props) {
  //   super(props);
  //   this.state = { showAlert: false };
  // };

  // showAlert = () => {
  //   this.setState({
  //     showAlert: true
  //   });
  // };

  // hideAlert = () => {
  //   this.setState({
  //     showAlert: false
  //   });
  // };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Stack>
        
      <Stack.Screen name="index" options={{ title: "Feed", headerBackVisible: false, headerShown:false}} />
      <Stack.Screen name="ongoing" options={{ title:"Ongoing courses",headerShown:false }}  />
      <Stack.Screen name="courses" options={{ title:"Courses", headerShown:false }}  />
      {showFloatingButton && (
        <View style={{ position: "absolute", bottom: 20, right: 20 }}>
          <Button
            height={100}
            width={200}
            backgroundColor="orange"
            onPress={handleFloatingButtonClick}
          >
            <Text style={{ color: "white", fontSize: 18 }}>
              Click me
            </Text>
          </Button>
        </View>
      )}
    </Stack>
  );
}