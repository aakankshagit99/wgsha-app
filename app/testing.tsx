import React from "react";
import {
  Avatar,
  Button,
  H1,
  Input,
  Spacer,
  Text,
  View,
  XGroup,
  XStack,
  YStack,
} from "tamagui";
// import BaseLayout from "../../../components/layouts/base-layout";
import { Apple } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { FlatList, StyleSheet} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import BaseLayout from "../components/layouts/base-layout";
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function testing() {

  const comment=[
    {
      name: 'sarah williams',
      date: '12-12-2023',
      comment: 'Lorem ipsum dolor sit amet consectetur. Leo scelerisque vestibulum tortor sit tincidunt. Interdum neque enim auctor libero. Cursus mauris sit nec nec.'
    },
    {
      name: 'sarah williams',
      date: '12-12-2023',
      comment: 'Lorem ipsum dolor sit amet consectetur. Leo scelerisque vestibulum tortor sit tincidunt. Interdum neque enim auctor libero. Cursus mauris sit nec nec.'
    }
  ]

  const renderItem = ({item}) => (
    <View style={styles.commentContainer}>
      <YStack>
      <Text style={styles.commentName}>{item.name}</Text>
      <Text style={styles.commentDate}>{item.date}</Text>
      <Text style={styles.commentText}>{item.comment}</Text>
      <XStack space={10}>
      <MaterialCommunityIcons name="comment-text-outline" size={24} color="#D7684D" />
        <Text>Reply</Text>
      </XStack>
      </YStack>
    </View>
  );
  return 
  (
    <BaseLayout >
      <View flex={1} backgroundColor={"white"} paddingHorizontal={"$1"}>
        <YStack padding={"$2"}>
          <Text>hello</Text>
        <FlatList
          data={comment}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        </YStack>
      </View>
    </BaseLayout>
  );
}

const styles=StyleSheet.create({
inputbox:{
  
},
  commentContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  commentName: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  commentDate: {
    color: "#666",
    marginBottom: 8,
  },
  commentText: {
    fontSize: 16,
  },
});
