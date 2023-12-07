import React from 'react'

import { H1, Avatar, XStack, YStack, Text, Circle, View, Button,Switch, Label, Separator,H2, RadioGroup,Input ,ScrollView } from 'tamagui'
import { PenLine } from '@tamagui/lucide-icons'
import Colors from '../../../constants/Colors'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function index() {
  return (
    <YStack backgroundColor={'#EBECF4'}>
    <ScrollView>
    <Text style={{marginLeft:10, marginTop:12}}>Choose a role</Text>
  <XStack style={styles.radiogroup}>
 <RadioGroup  size="$9">
  <XStack style={styles.radioitems} space="$3" >
    <XStack width={'40%'} >
      <RadioGroup.Item value="r1" size="$5" color='blue'>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <Label style={styles.radiolabels}>Hall owner</Label>
    </XStack>
    <XStack width={'40%'}>
      <RadioGroup.Item value="r2" size="$5" >
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <Label style={styles.radiolabels}>Agent</Label>
    </XStack>
    </XStack>
    <XStack style={styles.radioitems} space="$3" >
    <XStack width={'40%'}>
      <RadioGroup.Item value="r3" size="$5" >
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <Label style={styles.radiolabels}>Manager</Label>
    </XStack>
    <XStack width={'40%'}>
      <RadioGroup.Item value="r4"  size="$5" >
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <Label style={styles.radiolabels}>Service provider</Label>
    </XStack>
    </XStack>
  </RadioGroup>
  </XStack>
  <YStack space="$0.5" style={styles.details}>
  <YStack space="$1">
  <YStack>
    <Label style={styles.detaillabels}>Full name</Label>
    <Input placeholder={'enter your name'}  style={styles.inputbox} />
  </YStack>
  <YStack>
    <Label style={styles.detaillabels}>Mobile Number</Label>
    <Input placeholder={'enter phone number'}  style={styles.inputbox} />
  </YStack>
  <YStack>
    <Label style={styles.detaillabels}>Email Address</Label>
    <Input placeholder={'enter email address'}  style={styles.inputbox}/>
  </YStack>
  </YStack>
  {/* <Separator marginVertical={10} alignSelf='stretch' borderColor='lightgrey'/> */}
  <H1 fontSize="19" fontWeight={'900'} style={{marginTop:10,}}>Address</H1>
  <YStack space="3%">

  <YStack>
    <Label style={styles.detaillabels}>Address line 1</Label>
    <Input placeholder={'enter address line 1'}  style={styles.inputbox}/>
  </YStack>
  <YStack>
    <Label style={styles.detaillabels}>city</Label>
    <Input placeholder={'enter your city'}  style={styles.inputbox} />
  </YStack>
  <YStack>
    <Label style={styles.detaillabels}>Pincode</Label>
    <Input  placeholder={'enter your pincode'}  style={styles.inputbox} />
  </YStack>
  </YStack>
  </YStack>
  <XStack alignItems='center' alignContent='center' alignSelf='center' space="$2">
    <Link href={''} >
      <Button style={styles.savebtn}>SAVE CHANGES</Button>
    </Link>
  </XStack>
</ScrollView>
  </YStack>
  )
}

const styles = StyleSheet.create({
  radiogroup:{
    width:'95%',
   //  alignContent:'center',
    alignSelf:'center',
   //  justifyContent:'center',
    paddingLeft:5,
    paddingTop:10
   
   },
   
   radioitems:{
     fontWeight:'bold',
     alignItems:'center',
     justifyContent:'center',
     alignSelf:'center',
     height:50,
   
   },
   
   radiolabels:{
     fontWeight:'bold',
     fontSize:15,
     paddingLeft:10
   
   },
   inputbox:{
     height:50,
     borderRadius:10,
     backgroundColor:'white'
   },
   details:{
     height:580,
     marginTop:5,
     alignSelf:'center',
     width:"95%",
     borderRadius:10,
     padding:15,
     fontSize:30,
     marginBottom:0,
     fontWeight:'bold'
   },
   savebtn:{
     width:330,
     height:60,
     alignSelf:'center',
     fontSize:16,
     fontWeight:'bold',
     backgroundColor:'#2257bf',
     color:'white',
     borderRadius:10,
     marginTop:0,
     top:40
   
   },
   detaillabels:{
   fontSize:10,
   marginTop:0,
   marginLeft:12,
   color:'grey'
   }
});
