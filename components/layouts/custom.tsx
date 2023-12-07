import AntDesign from "@expo/vector-icons/build/AntDesign";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { Button, View, Text } from "tamagui";

const CustomLayout = ({ children }) => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const handleHeaderButtonClick = () => {
    setShowFloatingButton(true);
    // Additional logic or actions you want to perform on header button click
  };

  const handleFloatingButtonClick = () => {
    // Logic for the action to be performed when the floating button is clicked
    // For example, navigating to another screen, performing an action, etc.
  };

  return (
    <Stack>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          options: {
            ...child.props.options,
            headerRight: () => (
              <Button
                height={33}
                marginRight="$1"
                color={"$primary"}
                padding="$small"
                onPress={handleHeaderButtonClick}
              >
                <AntDesign name="questioncircleo" size={24} color="black" />
              </Button>
            ),
          },
        })
      )}
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
};

export default CustomLayout;
