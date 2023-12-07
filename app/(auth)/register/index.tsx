import React from "react";
import { Button, H1, Text, View, YStack, Input, ScrollView  } from "tamagui";
import BaseLayout from "../../../components/layouts/base-layout";
import {} from "react-native-elements";
import { fonts } from "react-native-elements/dist/config";
import { Link } from "expo-router";

export default function index() {
  return (
    <BaseLayout>
      <View flex={1} backgroundColor={'$background'} padding={"$1"}>
        <ScrollView>
<YStack>
  <Text
  fontSize={18}
  fontWeight={'700'}
  marginTop={20}
  >Register</Text>
<Text
 fontSize={16}
 fontWeight={'400'}
 marginTop={12}
>Enter your details below</Text>
<YStack>
<Input
placeholder="Phone number"
height={60}
width={360}
alignSelf="center"
letterSpacing={0.25}
fontSize={14}
fontWeight={'400'}
borderRadius={12}
marginTop={15}
/>
<Input
placeholder="Full name"
height={60}
width={360}
alignSelf="center"
letterSpacing={0.25}
fontSize={14}
fontWeight={'400'}
borderRadius={12}
marginTop={10}/>
<Input
placeholder="Age"
height={60}
width={360}
alignSelf="center"
letterSpacing={0.25}
fontSize={14}
fontWeight={'400'}
borderRadius={12}
marginTop={10}/>
<Input
placeholder="Email address"
height={60}
width={360}
alignSelf="center"
letterSpacing={0.25}
fontSize={14}
fontWeight={'400'}
borderRadius={12}
marginTop={10}/>
<Input
placeholder="Organisation name"
height={60}
width={360}
alignSelf="center"
letterSpacing={0.25}
fontSize={14}
fontWeight={'400'}
borderRadius={12}
marginTop={10}/>
 <Input
       placeholder={"Address"}
       multiline={true}
       rows={5}
       width={360}
       letterSpacing={0.25}
       borderRadius={12}
       color={'#686868'}
       fontSize={14}
       fontWeight={'400'}
       padding={10}
       marginTop={10}
       alignSelf="center"
       />
<Input
placeholder="Pincode"
height={60}
width={360}
alignSelf="center"
letterSpacing={0.25}
fontSize={14}
fontWeight={'400'}
borderRadius={12}
marginTop={10}
fontFamily={'$body'}/>
</YStack>
<Link asChild href={'(tabs)/feed'}>
<Button
        height={60}
        backgroundColor={"$primary"}
        marginTop="$1"
        width={"100%"}
        borderRadius={50}>
        <Text fontSize={18} fontWeight={'700'} color={'white'}>Register</Text>
       </Button>
       </Link>
</YStack>
</ScrollView>
      </View>
    </BaseLayout>
  );
}
