import React, { useEffect, useState } from "react";
import {
  Button,
  H1,
  Input,
  Spacer,
  Text,
  View,
  XGroup,
  XStack,
  YStack,
} from "tamagui";
import BaseLayout from "../components/layouts/base-layout";
import { FlatList, Platform, SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { KeyboardAvoidingView } from "react-native";
import CustomHeader from "../components/customHeader";
import CustomModal from "../components/customModal";
import { useNavigation } from "expo-router";



export default function index() {
    const [rating, setRating] = useState(0);

    const [showMicButton, setShowMicButton] = useState(true);

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow",
        () => {
          setShowMicButton(false); // Hide the mic button when keyboard shows
        }
      );
  
      const keyboardDidHideListener = Keyboard.addListener(
        Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide",
        () => {
          setShowMicButton(true); // Show the mic button when keyboard hides
        }
      );
  
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);
    const comment=[
        {
          name: 'Sara Williams',
          date: '12-12-2023,9:00 am',
          comment: 'Lorem ipsum dolor sit amet consectetur. Leo scelerisque vestibulum tortor sit tincidunt. Interdum neque enim auctor libero. Cursus mauris sit nec nec.'
        },
        {
          name: 'Sara Williams',
          date: '12-12-2023, 9:00 am',
          comment: 'Lorem ipsum dolor sit amet consectetur. Leo scelerisque vestibulum tortor sit tincidunt. Interdum neque enim auctor libero. Cursus mauris sit nec nec.'
        },
        {
            name: 'Sara Williams',
            date: '12-12-2023,9:00 am',
            comment: 'Lorem ipsum dolor sit amet consectetur. Leo scelerisque vestibulum tortor sit tincidunt. Interdum neque enim auctor libero. Cursus mauris sit nec nec.'
          },
         
      ]

      const renderItem = ({item}) => (
       
        <View style={styles.commentContainer}>
          <YStack>
            <XStack alignItems="center" space={10}>
            <Avatar.Text size={36} label="S" color="black" labelStyle={{fontSize:16, fontWeight:'600'}} style={styles.avatar}/>
            <YStack>
            <Text fontSize={16} fontWeight={'700'} >{item.name}</Text>
            <Text fontSize={12} fontWeight={'600'} color={'#797979'}>{item.date}</Text>
            </YStack>
            </XStack>
          <Text marginTop={10} fontSize={13} fontWeight={'600'} color={'#121212'}>{item.comment}</Text>
          <XStack marginTop={10}>
            {/* <Button padding={0} backgroundColor={'#ffffff'}> */}
          <MaterialCommunityIcons name="comment-text-outline" size={18} color="#D7684D" />
            <Text fontSize={12} fontWeight={'600'} color={"$primary"}>Reply</Text>
            {/* </Button> */}
          </XStack>
          </YStack>
        </View>
      );
      console.log("type of item in comment:", typeof(item));
      const handleRightPress = () => {
        // Show modal on right button press
        setModalVisible(true);
      };
      const closeModal = () => {
        // Close modal
        setModalVisible(false);
      };
      const [modalVisible, setModalVisible] = useState(false);
      const navigation =useNavigation();

  return (
    // <BaseLayout > 
    // <SafeAreaView style={{flex:1}}>
//     <KeyboardAvoidingView
//      behavior={Platform.OS === "ios" ? "padding" : "height"}
//      style={{flex:1}}
//      >
//    <Text>hello</Text>

//      {/* <View backgroundColor={"white"} flex={1}>
    
//       <YStack padding={10}>
//       <FlatList
//         data={comment}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//       />
//       </YStack>
    
    
//       <YStack padding={10}  >
//         <XStack space={5}>
//       <Input
//       height={60}
//       width={320}
//       backgroundColor={'#FFFFFF'}
//       borderRadius={12}
//       placeholder={'Enter your comment'}
//       fontSize={14}
//       fontWeight={'400'}
//       color={'#686868'}
//       letterSpacing={0.5}
//       padding={10}
//       />
//       <Button
//        height={60}
//        width={45}
//        backgroundColor={'#FFFFFF'}
//        borderRadius={20}
//        padding={0}
       
//        >
//         <Feather name="mic" size={24} color="#D7684D" />
//       </Button>
//       </XStack>
//       </YStack>
//      </View> */}
//     </KeyboardAvoidingView>
    // </SafeAreaView>
    
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
            <CustomHeader
        title="Comments"
        onRightPress={handleRightPress}
        showBackButton={true}
        navigation={navigation}
      />
         <CustomModal modalVisible={modalVisible} closeModal={closeModal} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
               <YStack padding={0} height={'88%'}>
       <FlatList
        data={comment}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      </YStack>
    
    
      <YStack padding={0} marginTop={10} >
        <XStack space={5} paddingBottom={20}>
      <Input
      height={60}
      width={320}
      backgroundColor={'#FFFFFF'}
      borderRadius={12}
      placeholder={'Enter your comment'}
      fontSize={14}
      fontWeight={'400'}
      color={'#686868'}
      letterSpacing={0.5}
      padding={10}
      />
      {/* <Button
       height={60}
       width={45}
       backgroundColor={'#FFFFFF'}
       borderRadius={20}
       padding={0}
       
       >
        <Feather name="mic" size={24} color="#D7684D" />
      </Button> */}
      {showMicButton ? (
              <Button
                height={60}
                width={45}
                backgroundColor={'#FFFFFF'}
                borderRadius={20}
                padding={0}
              >
                <Feather name="mic" size={24} color="#D7684D" />
              </Button>
            ) : (
              <Button
                height={50}
                width={50}
                backgroundColor={'#D7684D'}
                borderRadius={50}
                padding={0}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Feather name="send" size={24} color="#FFFFFF" style={styles.rotatedIcon} />
              </Button>
            )}
      </XStack>
      </YStack>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  
  );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        paddingTop:30
      },
      inner: {
        padding: 10,
        flex: 1,
        
      },
      rotatedIcon: {
        transform: [{ rotate: '45deg' }], // Rotate the icon by 45 degrees (adjust as needed)
      },
commentContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    marginTop:10,
    borderRadius:20
  },
  commentName: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  commentDate: {
    color: "#666",
    marginBottom: 8,
  },
  commentText: {
    fontSize: 16,
  },
  avatar:{
    backgroundColor:"#D9D9D9",
    fontSize:16,
    fontWeight:'600'
  }
});


