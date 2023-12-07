import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  View,
  Text,
  Image,
  ImageProps,
  Button,
  XStack,
  RadioGroup,
} from "tamagui";
import RNFS from "react-native-fs";
// import Pdf from 'react-native-pdf';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Pdf from "react-native-pdf";

// import test from '../../../assets/video/test-video.mp4'

import { Video, ResizeMode } from "expo-av";
import CustomHeader from "../../../components/customHeader";
import CustomModal from "../../../components/customModal";
import * as WebBrowser from "expo-web-browser";
import PDFViewer from "../../PDFviewer";
import { RadioButton } from "react-native-paper";

const SessionDetails = () => {
  const { title } = useLocalSearchParams<{ title?: string }>();
  const { name } = useLocalSearchParams<{ name?: string }>();
  // const { sessionDescription } = useLocalSearchParams<{ sessionDescription?: string }>();
  const { sessionNumber } = useLocalSearchParams<{ sessionNumber?: string }>();
  const sessionNumber1 = parseInt(sessionNumber || "1", 10);
  console.log("num", sessionNumber1);
  const navigation = useNavigation();
  const currentSessionNumber = parseInt(sessionNumber1 || "0", 10);
  const nextSessionNumber = currentSessionNumber + 1;
  console.log("nextSessionNumber", { nextSessionNumber });

  const [coursesData, setCoursesData] = useState([
    {
      key: 1,
      sessionName: "Session 1",
      sessionDescription:
        "Geotechnology Empowerment Program (GEP) and the importance of mobile apps",
      completed: true,
      showStatus: true,
    },
    {
      key: 2,
      sessionName: "Session 2",
      sessionDescription: "Using mobile apps starting with GEP App",
      completed: true,
      showStatus: true,
    },
    {
      key: 3,
      sessionName: "Session 3",
      sessionDescription: "Communication using mobile",
      completed: true,
      showStatus: true,
    },
    {
      key: 4,
      sessionName: "Session 4",
      sessionDescription: "Healthcare apps",
      completed: false,
      showStatus: true,
    },
    {
      key: 5,
      sessionName: "Session 5",
      sessionDescription: "Healthcare apps",
      completed: false,
      showStatus: true,
    },
    {
      key: 6,
      sessionName: "Session 6",
      sessionDescription: "Finance and Online Payment Apps",
      completed: false,
      showStatus: true,
    },
    {
      key: 7,
      sessionName: "Session 7",
      sessionDescription: "Food, Housekeeping and Laundry",
      completed: true,
      showStatus: true,
    },
    {
      key: 8,
      sessionName: "Session 8",
      sessionDescription: "Post-test and Feedback",
      completed: false,
      showStatus: true,
    },
    // Add more courses with respective descriptions as needed
  ]);
  // Function to navigate to the details of the next session
  const goToNextSession = () => {
    const nextSessionNumber = currentSessionNumber + 1;
    navigation.navigate(`(tabs)/mycourses/${nextSessionNumber}`); // Update the route based on your setup
    console.log("hello");
  };

  const content = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin mattis fringilla et mineque amet venenatis sagittis eget. Massa semper morbi cras ultrices ornare massa ullamcorper. Neque diam est leo vestibulum semper dui.",
      imageURL: require("../../../assets/images/image.png"),
      name: require("../../../assets/video/test-video.mp4"),
      //'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
  ];

  const scrollViewRef = useRef();
  // Function to find session description based on session number
  const getSessionDescription = (number) => {
    const session = coursesData.find(
      (item) => item.key === parseInt(number, 10)
    );
    return session ? session.sessionDescription : "";
  };

  const sessionDescription = getSessionDescription(sessionNumber1);

  const openPDF = async () => {
    const pdfUrl = "https://www.africau.edu/images/default/sample.pdf"; // Replace with the actual URL of your PDF file

    // Open the PDF in the Expo Go app's web browser
    WebBrowser.openBrowserAsync(pdfUrl);
  };

  const totalSessions = coursesData.length;
  // Function to check if the current session is the last one
  const isLastSession = currentSessionNumber === totalSessions;
  const source = {
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    cache: true,
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
  const [value, setValue] = React.useState("first");
  const [checked, setChecked] = React.useState("Apple"); //initial choice

  const [selectedOptions, setSelectedOptions] = useState({
    question1: '',
    question2: '',
    question3: '',
    // Add more keys for each question as needed
  });
  const handleValueChange = (question, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [question]: value,
    });
  };
  return (
    <SafeAreaView style={{ height: "100%", padding: 10 }}>
      <CustomHeader
        title="Name of the course"
        onRightPress={handleRightPress}
        showBackButton={true}
        navigation={navigation}
      />
      <CustomModal modalVisible={modalVisible} closeModal={closeModal} />

      <ScrollView
        style={{ height: "100%", padding: 10, backgroundColor: "white" }}
      >
        <View style={styles.container}>
          {isLastSession ? (
            // Different content for the last session
            <View>
              <Text fontSize={14} fontWeight={"700"}>
                Session: {sessionNumber1}
              </Text>

              <Text fontSize={17} fontWeight={"700"} marginTop={10}>
                {sessionDescription}
              </Text>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Question 1
              </Text>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Q. Lorem ipsum dolor sit amet consectetur. Vestibulum sit donec
                ut dictumst aenean feugiat feugiat sem.
              </Text>
              <RadioGroup value="foo" size="$4" space="$2" 
              value={selectedOptions.question1}
              onValueChange={(value) => handleValueChange('question1', value)}>
                <XStack space={10} alignContent="center" marginTop={10}>
                  <RadioGroup.Item value="foo"  size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option A
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo"  size={"$4"}>
                    <RadioGroup.Indicator borderColor={"$primary"} />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option B
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo"  size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option C
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center" >
                  <RadioGroup.Item value="foo"  size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option D
                  </Text>
                </XStack>
              </RadioGroup>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Question 2
              </Text>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Q. Lorem ipsum dolor sit amet consectetur. Vestibulum sit donec
                ut dictumst aenean feugiat feugiat sem.
              </Text>
              <RadioGroup value="foo" size="$4" space="$2">
                <XStack space={10} alignContent="center" marginTop={10}>
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option A
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator borderColor={"$primary"} />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option B
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option C
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center" >
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option D
                  </Text>
                </XStack>
              </RadioGroup>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Question 3
              </Text>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Q. Lorem ipsum dolor sit amet consectetur. Vestibulum sit donec
                ut dictumst aenean feugiat feugiat sem.
              </Text>
              <RadioGroup value="foo" size="$4" space="$2">
                <XStack space={10} alignContent="center" marginTop={10}>
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option A
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator borderColor={"$primary"} />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option B
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option C
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center" >
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option D
                  </Text>
                </XStack>
              </RadioGroup>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Question 4
              </Text>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Q. Lorem ipsum dolor sit amet consectetur. Vestibulum sit donec
                ut dictumst aenean feugiat feugiat sem.
              </Text>
              <RadioGroup value="foo" size="$4" space="$2">
                <XStack space={10} alignContent="center" marginTop={10}>
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option A
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator borderColor={"$primary"} />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option B
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option C
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center" >
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option D
                  </Text>
                </XStack>
              </RadioGroup>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Question 5
              </Text>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Q. Lorem ipsum dolor sit amet consectetur. Vestibulum sit donec
                ut dictumst aenean feugiat feugiat sem.
              </Text>
              <RadioGroup value="foo" size="$4" space="$2">
                <XStack space={10} alignContent="center" marginTop={10}>
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option A
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator borderColor={"$primary"} />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option B
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option C
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center" >
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"} >
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option D
                  </Text>
                </XStack>
              </RadioGroup>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Question 6
              </Text>
              <Text fontSize={16} fontWeight={"600"} marginTop={10}>
                Q. Lorem ipsum dolor sit amet consectetur. Vestibulum sit donec
                ut dictumst aenean feugiat feugiat sem.
              </Text>
              <RadioGroup value="foo" size="$4" space="$2">
                <XStack space={10} alignContent="center" marginTop={10}>
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option A
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator borderColor={"$primary"} />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option B
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center">
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option C
                  </Text>
                </XStack>
                <XStack space={10} alignContent="center" >
                  <RadioGroup.Item value="foo" id="foo-radio-item" size={"$4"}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <Text fontSize={16} fontWeight={"600"} marginTop={2}>
                    Option D
                  </Text>
                </XStack>
              </RadioGroup>
              <Link
                asChild
              
                href={
                  "/completion"
                   
                }
               
              >
                <Button
                  height={55}
                  width={350}
                  backgroundColor={"$primary"}
                  alignSelf="center"
                  borderRadius={50}
                  marginTop={30}
                  // onPress={goToNextScreen}
                >
                  <Text color={"white"} fontSize={18} fontWeight={"700"}>
                    Next
                  </Text>
                </Button>
                {/* </TouchableOpacity> */}
              </Link>
            </View>
          ) : (
            <View>
              <Text fontSize={14} fontWeight={"700"}>
                Session: {sessionNumber1}
              </Text>

              <Text fontSize={17} fontWeight={"700"} marginTop={10}>
                {sessionDescription}
              </Text>
              {content.map((item, index) => (
                <View key={index}>
                  <Text fontSize={16} fontWeight={"400"} marginTop={20}>
                    {item.description}
                  </Text>
                  <Image
                    width={360}
                    height={170}
                    source={item.imageURL}
                    borderRadius={20}
                    alignSelf="center"
                    marginTop={20}
                  />
                  <Text fontSize={16} fontWeight={"400"} marginTop={20}>
                    {item.description}
                  </Text>
                  {/* <Button title="Open PDF" onPress={openPDF} /> */}
                  <PDFViewer />

                  <Text
                    fontSize={16}
                    fontWeight={"400"}
                    marginTop={10}
                    marginBottom={20}
                  >
                    {item.description}
                  </Text>

                  <XStack alignSelf="center">
                    <Video
                      style={styles.vid}
                      source={{
                        uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                      }}
                      useNativeControls
                      resizeMode={ResizeMode.CONTAIN}
                      isLooping
                    />
                  </XStack>
                </View>
              ))}
              <Link asChild href={"/comment"}>
                <Button
                  height={40}
                  width={150}
                  backgroundColor={"#FFE1DA"}
                  borderRadius={15}
                  alignSelf="center"
                  marginTop={25}
                >
                  <MaterialCommunityIcons
                    name="comment-text-outline"
                    size={24}
                    color="#D7684D"
                  />
                  <Text color={"#D7684D"} fontSize={16} fontWeight={"600"}>
                    Comments
                  </Text>
                </Button>
              </Link>
              {/* <TouchableOpacity onPress={goToNextSession}> */}

              <Link
                asChild
                Replace
                href={
                  isLastSession
                    ? "/completion"
                    : {
                        pathname: `(tabs)/mycourses/${nextSessionNumber}`,
                        params: { sessionNumber: nextSessionNumber },
                      }
                }
                transition="slide-down"
                transitionDuration={500}
                transitionTimingFunction="ease-in-out"
              >
                <Button
                  height={55}
                  width={350}
                  backgroundColor={"$primary"}
                  alignSelf="center"
                  borderRadius={50}
                  marginTop={30}
                  // onPress={goToNextScreen}
                >
                  <Text color={"white"} fontSize={18} fontWeight={"700"}>
                    Next
                  </Text>
                </Button>
                {/* </TouchableOpacity> */}
              </Link>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10, // Adjust the spacing between each option as needed
  },
  container: {
    backgroundColor: "white",
    height:'100%'
  },

  completed: {
    backgroundColor: "#D7684D",
    padding: 10,
    borderRadius: 5,
  },
  completedText: {
    color: "white",
    fontWeight: "bold",
  },
  incomplete: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  incompleteText: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    width: 340,
    height: 115,
    borderRadius: 10,
  },
  vid: {
    height: 200,
    width: 360,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default SessionDetails;
