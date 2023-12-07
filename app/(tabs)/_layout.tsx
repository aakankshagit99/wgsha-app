import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, router} from "expo-router";
import { Button,View, getToken,useTheme, Text } from "tamagui";
import feed from "../../assets/images/feed.svg";
import profile from "../../assets/images/Vector.svg";
// import Bell from "../../assets/images/notification.svg";
import ClipboardList from "../../assets/images/report--data.svg";
import BookOpen from "../../assets/images/book.svg";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
// import { Header } from "react-native-elements";
import { useNavigation, Header } from "expo-router";
import { Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Portal,Modal, PaperProvider } from "react-native-paper";
import { StyleSheet } from "react-native";



/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const theme = useTheme();
  const height=25;
  const width=height;
  const [tabLabel, setTabLabel] = useState("Home/Feed");
  const navigation = useNavigation();
  const route = useRoute();

  // useEffect(() => {
  //   // Listen for screen focus changes
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     // Change the tab label dynamically based on the focused screen
  //     if (navigation.isFocused('ongoing')) {
  //       setTabLabel("Ongoing courses");
  //     } else if(navigation.isFocused('courses')) {
  //       setTabLabel("courses");
  //     }
  //     else{
  //       setTabLabel("else");
  //     }
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  
//   useEffect(() => {
//     const currentScreen = route.name;
//     if (currentScreen === "feed/ongoing") {
//       setTabLabel("Ongoing courses");
//     } else {
//       setTabLabel("Home/Feed");
//     }
// console.log("Screen", currentScreen);
//   }, [route]);

// useEffect(() => {
//   const parentRoute = findParentRoute(route);

//   if (parentRoute?.name === "feed" && route.name === "ongoing") {
//     setTabLabel("Ongoing courses");
//   } else {
//     setTabLabel("Home/Feed");
//   }
// }, [navigation, route]);

// const findParentRoute = (currentRoute) => {
//   let parent = currentRoute?.params?.parentRoute;

//   while (parent?.params?.parentRoute) {
//     parent = parent.params.parentRoute;
//   }

//   return parent;
// };
const [visible, setVisible] = React.useState(false);

const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);
const containerStyle = {backgroundColor: 'white', padding: 20};

// const handleQuestionMarkClick = () => {
//   console.log("portal");
//   // setVisible(true);
//   showModal();
//   console.log(visible);
//   return(
//   <Portal>
//   <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} dismissable={true}>
//     <Text>Example Modal.  Click outside this area to dismiss.</Text>
//   </Modal>
// </Portal>
// )
// };


  return (
    
    <Tabs
      initialRouteName="feed"
      screenOptions={{
        tabBarActiveTintColor: getToken("$color.primary"),
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="text-document" size={22} color={color} />,
          headerRight: () => (
            <Button
              height={33}
              marginRight="$1"
              color={"$primary"}
              padding="$small"
              // onPress={showModal}      // router.push("/completion")
            >
              <AntDesign name="questioncircleo" size={24} color="black" />
            </Button>
          ),

        }}
      />
      <Tabs.Screen
        name="mycourses"
        options={{
          headerShown: false,
          // title: "My courses",
          
          tabBarIcon: ({ color, size }) => <MaterialIcons name="ondemand-video" size={24} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          // title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
        }}
      />
      {/* <Portal>
  <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} dismissable={true}>
    <Text>Example Modal.  Click outside this area to dismiss.</Text>
  </Modal>
</Portal> */}

   {/* <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
    </PaperProvider> */}
    </Tabs>
  );
}

const styles= StyleSheet.create({
// containerStyle:{
//   height:300,
//   width:350,
//   backgroundColor:'#ff0000'
// }
});
 