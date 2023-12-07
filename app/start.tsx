import React from 'react'
import { H1, XStack, YStack, Text, Circle, View, Button,Switch, Label, Separator,H2 ,Input, ScrollView, Checkbox } from 'tamagui'
import { Check, PenLine } from '@tamagui/lucide-icons'
import { StyleSheet, Image } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { RadioGroup } from 'tamagui'
import BaseLayout from '../components/layouts/base-layout'
import { Avatar } from 'react-native-paper'
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

export default function index() {
  return (
    // <SafeAreaView>
    <BaseLayout>
      <YStack flex={1} backgroundColor={'#ffffff'}>
        <XStack 
        justifyContent='center'
        // alignItems='center'
        top={225}
        >
      <Image 
        source={require('../assets/images/logopic.png')} // Replace './example.jpg' with the path to your image file
        style={styles.image}
    
      />
      </XStack>
      <XStack 
      alignSelf='center' 
      alignItems='center' 
      justifyContent='center'
      space={10}
      top={300}
      backgroundColor={'$secondary'}
      height={48}
      width={249}
      borderRadius={12}
      >
      <Checkbox size="$3.5" value='Accept terms and conditions' backgroundColor={'$primary'} >
    <Checkbox.Indicator>
      <Check size={15} color={'white'} />
    </Checkbox.Indicator>
  </Checkbox>
  <Text 
  fontSize={14}
  fontWeight={'600'}
  >Accept terms and conditions</Text>
      </XStack>

<XStack 
    alignSelf='center'
    top={350}
    >
        <Link asChild href={'(auth)/login'}>
    <Button
    height={60}
    width={366}
    borderRadius={50}
    backgroundColor={'$primary'}
    >
        <Text fontSize={18} fontWeight={'700'} color={'white'}>Get started</Text>
    </Button>
    </Link>
</XStack>
<XStack
alignContent='center'
alignSelf='center'
justifyContent='center'
top={380}
>
    <Text 
    fontSize={14}
    fontWeight={'700'}
    color={'$primary'}
    paddingTop={2}  
    >
        Read terms and conditions
    </Text>
    <Feather name="arrow-up-right" size={20} color={"#D7684D"} />
</XStack>
</YStack>
</BaseLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: "15%",
    paddingLeft: 20,

  },
  profilepic:{
    alignItems:'center',
    justifyContent: 'center',
height:25,
width:70,
 
},
editprofile:{
  height:35,
  borderRadius:10,
  outlineColor:'blue',
  color:'blue'
  
},
switch:{
  backgroundColor:'grey',
  color:'blue'
  
},
stack2:{
  height:50,
  backgroundColor:'white',
  alignItems:'center',
  justifyContent:'center',
  alignSelf:'center',
  width:"95%",
  borderRadius:10,
  paddingLeft:10

},
stack3:{
  backgroundColor:'white',
  height:350,
  marginTop:20,
  alignSelf:'center',
  width:"95%",
  borderRadius:10,
  padding:15,
  fontSize:30

},
stack3values:{
  fontWeight:'bold',
  fontSize:17
},
stack3labels:{
  fontSize:15
},
logout:{
  fontSize:20,
  fontWeight:'bold',
  height: 50,
  
  alignSelf:'center',
  
 
  
},

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // Adjust the image's content mode as per your requirement
  },


});
