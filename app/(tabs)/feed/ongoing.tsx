import { Entypo } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { Text, View , Image, Button, XStack,YStack, Progress, ScrollView, } from 'tamagui'
import { StyleSheet } from "react-native";
import { Link, useNavigation } from 'expo-router';
import CustomLayout from '../../../components/layouts/custom';
import CustomHeader from '../../../components/customHeader';
import CustomModal from '../../../components/customModal';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    id: 1,
    title: "Course 1",
    body: "Name of the course goes here and it can span multiple lines ",
    imgUrl:require('../../../assets/images/Rectangle.png')
  },
  {id:2,
    title: "Course 2",
    body: "Name of the course goes here and it can span multiple lines",
    imgUrl: require('../../../assets/images/Rectangle.png')
  },
  {
    id:3,
    title: "Course 3",
    body: "Name of the course goes here and it can span multiple lines",
    imgUrl: require('../../../assets/images/Rectangle.png')
  },
];

// const CourseItem = ({ data, index }) => {
//   const [buttonText, setButtonText] = useState('Request to join');
//   const [buttonColor, setButtonColor] = useState('$primary');
//   const navigation = useNavigation();

//   const handleButtonClick = () => {
//     setButtonText('Requested');
//     setButtonColor('grey');
//   };
//   return (
    
//     <View style={styles.container} key={index}>
//       <Image style={styles.image}
//       source={{ uri: data.imgUrl }} />
//       <XStack height={32} marginTop={8}>
//       {/* <Link href={{ pathname: "feed/courses/[id]", params: { id : data.id}}}> */}
//       <Text style={styles.header}>
//         {data.body}
//       </Text>
//       {/* </Link> */}
      
//       <Button 
//       height={32}
//       width={123}
//       backgroundColor={buttonColor}
//       borderRadius={12}
//       onPress={handleButtonClick}
//       >
//         <Text color={'white'}>{buttonText}</Text>
//       </Button>
     
//       </XStack>
  
//     </View>
//   );
// };

const CourseItem = ({ data, index }) => {
  const [buttonText, setButtonText] = useState('Request to join');
  const [buttonColor, setButtonColor] = useState('$primary');
  // const navigation = useNavigation();

  const handleButtonClick = () => {
    setButtonText('Requested');
    setButtonColor('grey');
  };
  const handleRightPress = () => {
    // Show modal on right button press
    setModalVisible(true);
  };
  const closeModal = () => {
    // Close modal
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
      <View style={styles.container} key={index}>
    <Link href={{ pathname: "(tabs)/feed/courses/[id]", params: { id: data.id } }}>

        <Image style={styles.image} source={{ uri: data.imgUrl }} />
    </Link>

        <XStack height={32} marginTop={8}>
          <Text style={styles.header}>{data.body}</Text>

          <Button
            height={32}
            width={123}
            backgroundColor={buttonColor}
            borderRadius={12}
            onPress={handleButtonClick}
  // onPress={() => navigation.setOptions({ title: 'Updated!' })}
          >
            <Text color={'white'}>{buttonText}</Text>
          </Button>
        </XStack>
      </View>
  );
};


const ongoing=() => {
  const navigation = useNavigation();

  const handleRightPress = () => {
    // Show modal on right button press
    setModalVisible(true);
  };
  const closeModal = () => {
    // Close modal
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <CustomHeader
        title="Ongoing Courses"
        onRightPress={handleRightPress}
        showBackButton={true}
        navigation={navigation}
      />
         <CustomModal modalVisible={modalVisible} closeModal={closeModal} />
    <YStack alignItems='center' width={'100%'} height={'100%'} >
    <ScrollView >
   {data.map((item, index) => (
    
        <CourseItem key={index} data={item} index={undefined} />
       
      ))}
      </ScrollView>
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
    width:340,
    height: 115,
    borderRadius:10
  },
  header: {
    color: "#222",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 10,
    height:32,
    width:210,
    marginTop:1
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

export default ongoing;


