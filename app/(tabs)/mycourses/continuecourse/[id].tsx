import { Text, View, Image, YStack, XStack, Button, Progress, ScrollView } from "tamagui";
import { useEffect, useState } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import React from "react";
import CustomHeader from "../../../../components/customHeader";
import CustomModal from "../../../../components/customModal";
import { SafeAreaView } from "react-native";

const CourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const navigation=useNavigation();

  const data1 = [
    {
      id: 1,
      title: "Name of the course goes here and it can span multiple lines",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis",
      time: 15,
      imgUrl: "https://picsum.photos/id/11/200/300",
      aboutcourse:
        "Lorem ipsum dolor sit amet consectetur. Proin mattis fringilla et mi neque amet venenatis sagittis eget. Massa semper morbi cras ultrices ornare massa ullamcorper. Neque diam est leo vestibulum semper dui.",
      details:
        "Lorem ipsum dolor sit amet consectetur. Proin mattis fringilla et mi neque amet venenatis sagittis eget. Massa semper morbi cras ultrices ornare massa ullamcorper. Neque diam est leo vestibulum semper dui.",
    },
    {
      id: 2,
      title: "course 2",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis",
      time: 20,
      imgUrl: "https://picsum.photos/id/10/200/300",
      aboutcourse:
        "Lorem ipsum dolor sit amet consectetur. Proin mattis fringilla et mi neque amet venenatis sagittis eget. Massa semper morbi cras ultrices ornare massa ullamcorper. Neque diam est leo vestibulum semper dui.",
      details:
        "Lorem ipsum dolor sit amet consectetur. Proin mattis fringilla et mi neque amet venenatis sagittis eget. Massa semper morbi cras ultrices ornare massa ullamcorper. Neque diam est leo vestibulum semper dui.",
    },
    {
      id: 3,
      title: "course 3",
      body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis",
      time: 25,
      imgUrl: "https://picsum.photos/id/12/200/300",
      aboutcourse:
        "Lorem ipsum dolor sit amet consectetur. Proin mattis fringilla et mi neque amet venenatis sagittis eget. Massa semper morbi cras ultrices ornare massa ullamcorper. Neque diam est leo vestibulum semper dui.",
      details:
        "Lorem ipsum dolor sit amet consectetur. Proin mattis fringilla et mi neque amet venenatis sagittis eget. Massa semper morbi cras ultrices ornare massa ullamcorper. Neque diam est leo vestibulum semper dui.",
    },
  ];

  // Simulating the behavior of fetching course details based on ID
  const { id } = useLocalSearchParams<{ id?: string }>();

  const handleRightPress = () => {
    // Show modal on right button press
    setModalVisible(true);
  };
  const closeModal = () => {
    // Close modal
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const selectedCourse = data1.find((item) => item.id.toString() === id);
    if (selectedCourse) {
      setCourseData(selectedCourse);
    }
  }, [id]);

  if (!courseData) {
    return <Text>No course found</Text>;
  }



  return (
    <SafeAreaView>
    <View>
       <CustomHeader
        title=""
        onRightPress={handleRightPress}
        showBackButton={true}
        navigation={navigation}
      />
         <CustomModal modalVisible={modalVisible} closeModal={closeModal} />
         <ScrollView>
      <YStack padding={""}>
        <Image
          alignSelf="center"
          top={20}
          style={styles.image}
          source={{ uri: courseData.imgUrl }}
          alt="hello"
        />
        <Text style={styles.title} fontWeight={"700"}>
          {courseData.title}
        </Text>
        {/* <Text style={styles.body}>{courseData.body}</Text> */}
        <XStack paddingLeft={15} paddingTop={3}>
          <Ionicons name="time-outline" size={16} color="#686868" />
          <Text style={styles.time}> {courseData.time} mins course</Text>
        </XStack>
        <Text fontWeight={"700"} fontSize={14} paddingLeft={15} marginTop={20}>
          About the course
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={17}
          paddingLeft={15}
          marginTop={10}
          width={350}
        >
          {courseData.aboutcourse}
        </Text>

        <Text fontWeight={"700"} fontSize={14} paddingLeft={15} marginTop={20}>
          More details
        </Text>
        <Text
          fontWeight={"400"}
          fontSize={17}
          paddingLeft={15}
          marginTop={10}
          width={350}
        >
          {courseData.details}
        </Text>
        <XStack space={15} marginTop={70} alignSelf="center">
                <YStack space={5} marginTop={10}>
            <Text fontSize={14} color={'#686868'} fontWeight={'600'} paddingLeft={0}>  Chapter 2/3</Text>

            <Progress size={'$1'} value={60} backgroundColor={'#E1E1E1'} width={180} marginTop={8} marginLeft={0} marginBottom={8}>
                <Progress.Indicator animation="bouncy" backgroundColor={'$primary'} />
                </Progress>
                
            
            </YStack>
                <Link asChild href={{ pathname: "mycourses/session", params: { title: courseData.title } }}>
                <Button
                    height={55}
                    width={160}
                    backgroundColor={"$primary"}
                    alignSelf="center"
                    borderRadius={50}
                >
                    <Text color={'white'} fontSize={18} fontWeight={'700'}>Continue</Text>
                </Button>
                </Link>
        </XStack>
      </YStack>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const styles = {
  // Define your styles here
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 360,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
  },

  image: {
    width: 365,
    height: 120,
    borderRadius: 10,
  },
  title: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 15,
    height: 44,
    width: 350,
    marginTop: 40,

    // backgroundColor:"yellow"
  },
  body: {
    color: "#222",
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 20,
    // backgroundColor:"orange"
  },
  time: {
    fontSize: 14,
    width: 150,
  },
};

export default CourseDetails;
