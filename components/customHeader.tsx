import AntDesign from '@expo/vector-icons/build/AntDesign';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const CustomHeader = ({ title,onRightPress,  showBackButton, navigation  }) => {

  const handleCustomBackButton = () => {
    if (showBackButton) {
      // navigation.navigate('mycourses/session'); // Navigate to FeedScreen within the tab navigator
      router.back();
    } else {
      // Your other logic if needed
      navigation.goBack();
    }
  };

  const renderBackButton = () => {
    if (showBackButton) {
      return (
        <TouchableOpacity style={styles.left} onPress={()=> router.back()}>
          <Ionicons name="chevron-back" size={24} color="#D7684D"/>
        </TouchableOpacity>
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.left}>
      {renderBackButton()}
        {/* <Ionicons name="chevron-back" size={24} color="#D7684D" /> */}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.right}>
        
        <Button
          height={33}
          width={40}
          color={"$primary"}
          padding="$small"
          backgroundColor={'#ffffff'}
          borderRadius={20}
          onPress={onRightPress}
          // onPress={showModal}      // router.push("/completion")
        //   onPress={() => setModalVisible(true) }
        >
          <AntDesign name="questioncircleo" size={24} color="black" />
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60, // Adjust as needed
    paddingHorizontal: 15,
    backgroundColor: '#ffffff', // Adjust the background color
    borderBottomWidth:1,
    borderBottomColor:'#E1E1E1'
  },

  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
