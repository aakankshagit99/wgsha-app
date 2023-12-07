import React, { useEffect } from "react";
import { Button, H1, ScrollView, Text, View, XStack, YStack } from "tamagui";
import BaseLayout from "../../../components/layouts/base-layout";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "tamagui";
import { Alert, Dimensions, FlatList, Modal, Pressable } from "react-native";
import { Carousel, Pagination } from "react-native-snap-carousel";
import { StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import CustomHeader from "../../../components/customHeader";
import CustomModal from "../../../components/customModal";



const data = [
  {
    id: 1,
    title: "Mike baker",
    body: "Name of the course goes here and it can span multiple lines",
    imgUrl: require("../../../assets/images/Rectangle.png"),
  },
  {
    id: 2,
    title: "Mike baker",
    body: "Name of the course goes here and it can span multiple lines",
    imgUrl: require("../../../assets/images/Rectangle.png"),
  },
  {
    id: 3,
    title: "Mike baker",
    body: "Name of the course goes here and it can span multiple lines",
    imgUrl: require("../../../assets/images/Rectangle.png"),
  },
];

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Link asChild href={"feed/ongoing"}>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
      </Link>
      <XStack justifyContent="center" alignItems="center">
        <Link asChild href={"feed/ongoing"}>
          <Text style={styles.body} width={300}>
            {item.body}
          </Text>
        </Link>
        <Link asChild href={"feed/ongoing"}>
          <AntDesign name="arrowright" size={19} color="black" />
        </Link>
      </XStack>
    </View>
  );
};
const CardItem = ({ item, index }) => {
  return (
    <View style={styles.container1} key={index}>
      <Image source={{ uri: item.imgUrl }} style={styles.image1} />
      <Text style={styles.header1}>{item.title}</Text>
      <Text style={styles.body1}>{item.body}</Text>
    </View>
  );
};

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function index() {
  const isCarousel = React.useRef(null);
  const width = Dimensions.get("window").width;
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide
 

  const handleLeftPress = () => {
    // Logic for left button press
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
    <BaseLayout>
      <YStack>
        <ScrollView>
        <CustomHeader
        title="Home/Feed"
        onRightPress={handleRightPress}
        showBackButton={false}
        navigation={navigation}
      />
         <CustomModal modalVisible={modalVisible} closeModal={closeModal} />

          <View flex={1} backgroundColor={"$background"} paddingTop="$1">
            {/* <Link href={"home/venues"}>Venues</Link> */}
            <Link asChild href={"(tabs)/feed/ongoing"}>
              <Button
                height={60}
                width={"90%"}
                textAlign="left"
                alignSelf="center"
                borderRadius={10}
                backgroundColor={"$primary"}
                color={"$color.white"}
              >
                <Text color={"white"} fontWeight={"600"}>
                  Ongoing courses
                </Text>
                <AntDesign name="arrowright" size={24} color="white" />
              </Button>
            </Link>
          </View>
          <YStack marginTop={20} width={"100%"} paddingLeft={20} bottom={5}>
            <YStack paddingBottom={20}>
              <Text fontWeight={"700"} fontSize={18} paddingBottom={10}>
                Popular courses
              </Text>

              <Carousel
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={370}
                itemWidth={390}
                onSnapToItem={(index) => setActiveSlide(index)}
              />
              <Pagination // Pagination component
                dotsLength={data.length} // Number of dots based on data length
                activeDotIndex={activeSlide} // Active dot index
                containerStyle={{ paddingTop: 5 }}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#D7684D", //rgba(0, 0, 0, 0.92)
                }}
                inactiveDotStyle={
                  {
                    // Styles for inactive dots if needed
                  }
                }
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            </YStack>
            <YStack>
              <Text fontWeight={"700"} fontSize={18} paddingBottom={10}>
                Feed
              </Text>
              <XStack space={"$12"}>
                <XStack space={10}>
                  <Button
                    height={35}
                    width={60}
                    backgroundColor={"$primary"}
                    color={"white"}
                    borderRadius={10}
                    borderColor={"lightgrey"}
                  >
                    <Text fontWeight={"700"} color={"white"}>
                      All
                    </Text>
                  </Button>
                  <Button
                    height={35}
                    width={80}
                    // backgroundColor={"$primary"}
                    color={"$primary"}
                    borderRadius={10}
                    borderColor={"lightgrey"}
                  >
                    <Text fontWeight={"700"} color={"$primary"}>
                      For me
                    </Text>
                  </Button>
                </XStack>
                <XStack
                  height={45}
                  width={45}
                  backgroundColor={"$secondary"}
                  borderRadius={40}
                  alignContent="center"
                  paddingLeft={10}
                  paddingTop={12}
                >
                  <EvilIcons name="search" size={24} color={"#D7684D"} />
                </XStack>
              </XStack>
            </YStack>
            <YStack bottom={90} width={350}>
              <View>
                {data && (
                  <FlatList data={data} renderItem={CardItem} key={data.id} />
                )}
              </View>
            </YStack>
          </YStack>
        </ScrollView>
      </YStack>
    </BaseLayout>
  );
}
const styles = StyleSheet.create({
  modalView:{
    margin:20,
    backgroundColor:'white',
    borderRadius:20,
    padding:10,
    alignItems:'center',
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
    height:300,
    width:358,
  },
  item:{
    borderWidth: 1,
    paddingBottom: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "#E1E1E1",
    width: 340,
    height:85,
    marginTop:10
  },
  

  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  image: {
    width: 330,
    height: 100,
  },
  header: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
    width: 300,
    // backgroundColor:"yellow"
  },
  body: {
    color: "#222",
    fontSize: 14,
    paddingLeft: 0,
    paddingRight: 20,
    fontWeight: "700",
    marginTop: 5,
    // backgroundColor:"orange"
  },
  container1: {
    backgroundColor: "white",
    borderRadius: 8,
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
  image1: {
    width: 330,
    height: 180,
  },
  header1: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
    // backgroundColor:"yellow"
  },
  body1: {
    color: "#222",
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 20,
    // backgroundColor:"orange"
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});

// export default CustomLayout(index);
