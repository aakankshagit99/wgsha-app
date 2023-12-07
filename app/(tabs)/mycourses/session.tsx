import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, XStack, YStack, ScrollView } from "tamagui";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomHeader from "../../../components/customHeader";
import CustomModal from "../../../components/customModal";

const Session = () => {
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
      key:3,
      sessionName: "Session 3",
      sessionDescription: "Communication using mobile",
      completed: true,
      showStatus: true,
    },
    {
      key:4,
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
      key:6,
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

  const toggleStatus = (key) => {
    setCoursesData((prevCourses) =>
      prevCourses.map((course) =>
        course.key === key
          ? { ...course, showStatus: !course.showStatus }
          : course
      )
    );
  };


  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Link asChild href={{ pathname: `(tabs)/mycourses/${item.key}`, params: { name: item.sessionName, title:title, sessionDescription: item.sessionDescription , sessionNumber: item.key } }}>
    <YStack style={styles.item}>
      <Text style={styles.heading} fontSize={16} fontWeight={"700"}>
        {item.sessionName}
      </Text>

      <Text style={styles.courseDescription} fontSize={12} fontWeight={"400"}>
        {item.sessionDescription}
      </Text>

      {item.showStatus && item.completed && (
        <Text style={styles.completedText}>
          <XStack space={2}>
            <FontAwesome5 name="check-circle" size={12} color="#D7684D" />
            <Text color={"$primary"} fontSize={12}>Completed</Text>
          </XStack>
        </Text>
      )}
      </YStack>
      </Link>
  );

  const markAsCompleted = (key) => {
    setCoursesData((prevCourses) =>
      prevCourses.map((course) =>
        course.key === key
          ? { ...course, completed: !course.completed }
          : course
      )
    );
  };

  const { title } = useLocalSearchParams<{ title?: string }>();
  console.log("hello", title);

  const handleRightPress = () => {
    // Show modal on right button press
    setModalVisible(true);
  };
  const closeModal = () => {
    // Close modal
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  // const navigation=useNavigation();


  return (
    <SafeAreaView style={{height:'100%'}}>
       <CustomHeader
        title="Name of the course"
        onRightPress={handleRightPress}
        showBackButton={true}
        navigation={navigation}
      />
         <CustomModal modalVisible={modalVisible} closeModal={closeModal} />
         <ScrollView>
    <View style={styles.container}>
      {/* <Text style={styles.title}>{title}</Text> */}
      <FlatList
        data={coursesData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.key)}
        contentContainerStyle={styles.list}
      />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    height:'100%'
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  list: {
    flexGrow: 1,
  },
  item: {
    borderWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "#E1E1E1",
    width: 366,
  },
  heading: {
    marginBottom: 5,
  },
  courseDescription: {},
  completedText: {

    fontWeight: "bold",
    marginTop: 20,
  },
  incompleteText: {
    color: "red",
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Session;
