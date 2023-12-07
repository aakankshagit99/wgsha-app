import React, { useState } from 'react'

import { H1, Avatar, XStack, YStack, Text, Circle, View, Button,Switch, Label, Separator,H2 ,Input, ScrollView } from 'tamagui'
import { PenLine } from '@tamagui/lucide-icons'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Link, useNavigation } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';

import { RadioGroup } from 'tamagui'
import CustomHeader from '../../../components/customHeader'
import CustomModal from '../../../components/customModal'

export default function index() {
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
    <SafeAreaView style={{height:'100%',backgroundColor:'#ffffff'}}>
      <CustomHeader
        title="Profile"
        onRightPress={handleRightPress}
        showBackButton={false}
        navigation={navigation}
      />
         <CustomModal modalVisible={modalVisible} closeModal={closeModal} />
      <YStack paddingTop={30} backgroundColor={'#ffffff'}>
        
     <XStack space="$2"  style={styles.container} >
    <YStack>
    
    <Circle size="$5" backgroundColor="lightgrey" ><Text fontSize={20}>J</Text></Circle>
    </YStack>
     
    <YStack space="$0.5">
      
      <Text fontSize={15} fontWeight={'700'}>John Doe</Text>
      <Text>+91 9448023746</Text>
    </YStack>
  </XStack>
  <XStack alignItems='center' paddingLeft={20}>
      <Link asChild href={"/login"}  >
        
      
       <Button
        height={50}
        width={'90%'}
        textAlign="left"
        alignSelf="center"
        borderRadius={30}
        backgroundColor={'$secondary'}
        color={'$color.white'}
        marginTop={40}
        
        ><Text color={'$primary'} fontWeight={'600'}>Logout</Text>
        {/* <AntDesign name="arrowright" size={24} color="white" /> */}
        </Button>
        </Link>
      </XStack>



</YStack>


  </SafeAreaView>
//   <YStack backgroundColor={'#EBECF4'}>
//     <ScrollView>
//     {/* <XStack>
//       <XStack>
//         <RadioGroup>
//           <RadioGroup.Item></RadioGroup.Item>
//         </RadioGroup>
//       </XStack>
//     </XStack> */}

//     <Text style={{marginLeft:10, marginTop:12}}>Choose a role</Text>
//   <XStack style={styles.radiogroup}>
//  <RadioGroup  size="$9">
//   <XStack style={styles.radioitems} space="$3" >
//     <XStack width={'40%'} >
//       <RadioGroup.Item value="r1" size="$5" color='blue'>
//         <RadioGroup.Indicator />
//       </RadioGroup.Item>
//       <Label style={styles.radiolabels}>Hall owner</Label>
//     </XStack>
//     <XStack width={'40%'}>
//       <RadioGroup.Item value="r2" size="$5" >
//         <RadioGroup.Indicator />
//       </RadioGroup.Item>
//       <Label style={styles.radiolabels}>Agent</Label>
//     </XStack>
//     </XStack>
//     <XStack style={styles.radioitems} space="$3" >
//     <XStack width={'40%'}>
//       <RadioGroup.Item value="r3" size="$5" >
//         <RadioGroup.Indicator />
//       </RadioGroup.Item>
//       <Label style={styles.radiolabels}>Manager</Label>
//     </XStack>
//     <XStack width={'40%'}>
//       <RadioGroup.Item value="r4"  size="$5" >
//         <RadioGroup.Indicator />
//       </RadioGroup.Item>
//       <Label style={styles.radiolabels}>Service provider</Label>
//     </XStack>
//     </XStack>
//   </RadioGroup>
//   </XStack>
//   <YStack space="$0.5" style={styles.details}>
//   <YStack space="$1">
//   <YStack>
//     <Label style={styles.detaillabels}>Full name</Label>
//     <Input placeholder={'enter your name'}  style={styles.inputbox} />
//   </YStack>
//   <YStack>
//     <Label style={styles.detaillabels}>Mobile Number</Label>
//     <Input placeholder={'enter phone number'}  style={styles.inputbox} />
//   </YStack>
//   <YStack>
//     <Label style={styles.detaillabels}>Email Address</Label>
//     <Input placeholder={'enter email address'}  style={styles.inputbox}/>
//   </YStack>
//   </YStack>
//   {/* <Separator marginVertical={10} alignSelf='stretch' borderColor='lightgrey'/> */}
//   <H1 fontSize="19" fontWeight={'900'} style={{marginTop:10,}}>Address</H1>
//   <YStack space="3%">

//   <YStack>
//     <Label style={styles.detaillabels}>Address line 1</Label>
//     <Input placeholder={'enter address line 1'}  style={styles.inputbox}/>
//   </YStack>
//   <YStack>
//     <Label style={styles.detaillabels}>city</Label>
//     <Input placeholder={'enter your city'}  style={styles.inputbox} />
//   </YStack>
//   <YStack>
//     <Label style={styles.detaillabels}>Pincode</Label>
//     <Input  placeholder={'enter your pincode'}  style={styles.inputbox} />
//   </YStack>
//   </YStack>
//   </YStack>
//   <XStack alignItems='center' alignContent='center' alignSelf='center' space="$2">
//     <Link href={''} >
//       <Button style={styles.savebtn}>SAVE CHANGES</Button>
//     </Link>
//   </XStack>







// </ScrollView>
//   </YStack>
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



});
