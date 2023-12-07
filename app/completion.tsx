import React, { useState } from "react";
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
// import BaseLayout from "../../../components/layouts/base-layout";
// import BaseLayout from "../components/layouts/base-layout";
import BaseLayout from "../components/layouts/base-layout";
import { Apple } from "@tamagui/lucide-icons";
import { Link, router } from "expo-router";
import { StyleSheet} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { AirbnbRating, Rating} from 'react-native-elements';
import StarRating from 'react-native-star-rating-widget';


export default function index() {
    const [rating, setRating] = useState(0);
  return (
    <BaseLayout>
      <View flex={1} backgroundColor={"$background"} paddingHorizontal={"$1"}>
        <YStack paddingTop={"$1"}>
        <Text
        width={260}
        fontSize={18}
        fontWeight={'700'}
        alignSelf="center"
        textAlign="center"
        lineHeight={25}
        marginTop={188}
        >Congratulations on finishing the course</Text>
          {/* <AirbnbRating
  count={11}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
  defaultRating={11}
  size={20}
/>
          <Rating type={'rocket'}  fractions="{0}"  backgroundColor={'#ffffff'} defaultRating={3} ratingColor={'orange'}/> */}
          <XStack alignSelf='center' marginTop={40}>

         
          <StarRating
        rating={rating}
        onChange={setRating}
        starSize={32}
        enableSwiping={false}
        enableHalfStar={false}
        color={'#D7684D'}
        
      />
       </XStack>
       <Input
       placeholder={"Feedback"}
       multiline={true}
       rows={5}
       letterSpacing={0.25}
       borderRadius={12}
       color={'#686868'}
       fontSize={14}
       fontWeight={'400'}
       padding={15}
       marginTop={30}
       />
       <Button
        height={60}
        backgroundColor={"$primary"}
        marginTop="$1"
        width={"100%"}
        borderRadius={50}
        onPress={()=> router.push('(tabs)/feed')}
        >
        <Text fontSize={18} fontWeight={'700'} color={'white'}>Submit feedback</Text>
       </Button>
        </YStack>

      </View>
    </BaseLayout>
  );
}

const styles=StyleSheet.create({
inputbox:{
  
}
});


