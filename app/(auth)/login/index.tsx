import React from "react";
import {
  Avatar,
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
import BaseLayout from "../../../components/layouts/base-layout";
import { Apple } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { StyleSheet} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function index() {
  return (
    <BaseLayout children={undefined}>
      <View flex={1} backgroundColor={"$background"} paddingHorizontal={"$1"}>
        <YStack paddingTop={"$1"}>
        <YStack space={10} alignItems="left" marginTop={200}>
          <Text fontSize={16} fontWeight={'700'}>Login</Text>
          <Text fontSize={12} fontWeight={'400'}>Enter your phone number and tap on 'proceed'</Text>
        </YStack>
          
          <Input
          height={61}
          width={355}
          placeholder={'Phone number'}
          borderRadius={12}
          marginTop={30}
      style={styles.inputbox}
      letterSpacing={0.25}
      fontWeight={'400'}

          />
          <Link asChild href={'(auth)/register'}>
          <Button
            height={60}
            backgroundColor={"$primary"}
            marginTop="$1"
            width={"100%"}
            borderRadius={50}
            color={"$white"}
          >
           <Text color={"white"} fontSize={18} fontWeight={'700'}>Continue</Text>
          </Button>
          </Link>
         <Text alignSelf="center" marginTop={50}>or continue with</Text>
         <XStack space={10} alignSelf="center" marginTop={20}>
          <Button
          height={40}
          width={40}
          alignItems="center"
          backgroundColor={"$primary"}
          padding={0}
          borderRadius={5}
          >
          <FontAwesome5 name="apple" size={24} color="white" />
          </Button>
         <Button
         height={40}
         width={40}
         alignItems="center"
         backgroundColor={"$primary"}
         padding={0}
         borderRadius={5}>
         <AntDesign name="google" size={24} color="white"  />
         </Button>
        
         </XStack>
          
        </YStack>
      </View>
    </BaseLayout>
  );
}

const styles=StyleSheet.create({
inputbox:{
  
}
});
