import { AntDesign, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Button, H1, XStack, YStack, Text, View , Image, ScrollView} from 'tamagui'
import { StyleSheet } from "react-native";
import { Progress } from 'tamagui';
import { Link, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../../components/customHeader';
import CustomModal from '../../../components/customModal';

// const img = require("/assets/images/Rectangle.png");
const data = [
  {
    id: 1,
    title: "Aenean leo",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ",
    imgUrl:require('../../../assets/images/Rectangle.png'),
  },
  {id:2,
    title: "In turpis",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ",
    imgUrl: require('../../../assets/images/Rectangle.png'),
  },
  {
    id:3,
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ",
    imgUrl:require('../../../assets/images/Rectangle.png'),
  },
];

const CarouselCardItem = ({ data, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image style={styles.image}
      source={{ uri: data.imgUrl }} />
      <XStack height={32} marginTop={8}>
      <Text style={styles.header}>
        {data.body}
      </Text>
      <Link asChild href={{ pathname: "mycourses/continuecourse/[id]", params: { id: data.id } }}>
      <Button 
      height={32}
      width={107}
      backgroundColor={'$primary'}
      borderRadius={12}
      >
      <Entypo name="controller-play" size={24} color="white" />
        <Text color={'white'}>Continue</Text>
      </Button>
      </Link>
      </XStack>
      <XStack space={10} marginTop={10}>
      <Progress size={'$1'} value={60} backgroundColor={'#E1E1E1'} width={232} marginTop={8} marginLeft={10} marginBottom={8}>
          <Progress.Indicator animation="bouncy" backgroundColor={'$primary'} />
        </Progress>
        
      
      <Text fontSize={14} color={'#686868'} fontWeight={'600'}>  Chapter 2/3</Text>
      </XStack>
    </View>
  );
};



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
  const navigation=useNavigation();
  return (
    <SafeAreaView style={{height:'100%', backgroundColor:'white'}}>
      <CustomHeader
        title="My courses"
        onRightPress={handleRightPress}
        showBackButton={false}
        navigation={navigation}
      />
         <CustomModal modalVisible={modalVisible} closeModal={closeModal} />

    <YStack padding={10} >
      <XStack space={10} >
    <Button
    height={35}
    width={60}
    backgroundColor={"$primary"}
    color={"white"}
    borderRadius={10}
    borderColor={"lightgrey"}
    >
      <Text fontWeight={'700'} color={"white"}>All</Text>
    </Button>
    <Button
    height={35}
    width={108}
    

    // backgroundColor={"$primary"}
  
    borderRadius={10}
    borderColor={"lightgrey"}
    >
    <Text fontWeight={'700'} color={"black"}>In progress</Text>
    </Button>
    <Button
    height={35}
    width={107}
    // backgroundColor={"$primary"}
    
    borderRadius={10}
    borderColor={"lightgrey"}
    >
    <Text fontWeight={'700'} color={"black"}>Completed</Text>
    </Button>
    </XStack>

    {/* <View>
      <CarouselCardItem item={data} index={data.id}/>
    </View> */}
    <YStack alignItems='center' >
    <ScrollView >
   {data.map((item, index) => (
        <CarouselCardItem key={index} data={item} index={undefined} />
      ))}
      </ScrollView>
      </YStack>
    </YStack>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width:360,
    padding:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    display: "flex",
    alignItems:'flex-start',
    justifyContent:'center',
    marginTop:10
  },

  image: {
    width:330,
    height: 105,
    borderRadius:10
  },
  header: {
    color: "#222",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 10,
    height:32,
    width:219,
    marginTop:4
    // backgroundColor:"yellow"
  },
  body: {
    color: "#222",
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 20,
    // backgroundColor:"orange"
  },
})