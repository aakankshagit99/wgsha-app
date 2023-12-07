import React, { useState } from 'react';
import { View,Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { XStack, YStack, Button,Text } from 'tamagui';

const CustomModal = ({ modalVisible , closeModal }) => {
    // const [modalVisible, setModalVisible] = useState(false);
    // console.log("hello type",typeof(modalVisible))
  return (
     <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed");
            }}
          >
            <View
              style={{
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={styles.modalView}
              >
                <XStack 
                paddingTop={5}
                paddingBottom={20}
                >
                  <XStack  width={300} space={10}>
                <AntDesign name="questioncircleo" size={24} color="black" />
                  <Text
                  fontSize={16}
                  fontWeight={'600'}
                  marginTop={3}
                  >Support/contact</Text>
                  </XStack>
                <Button 
                onPress={closeModal}
                backgroundColor={'#ffffff'}
                // marginBottom={30}
                padding={0}
                height={30}
                marginRight={3}

                >
                <Ionicons name="ios-close-sharp" size={24} color="#686868" />

                </Button>
                </XStack>
                <Text
                fontSize={14}
                fontWeight={'400'}
                color={'#686868'}
                paddingBottom={10}
                >
                  Following are the helpline numbers
                </Text>
            <YStack style={styles.item} >
              <XStack
              alignContent="center"
              justifyContent="center"
              alignItems="center"
              
              >
              <YStack width={270} paddingTop={10}>
              <Text 
              fontSize={16}
              fontWeight={'700'}
              >
                 Police Man
                </Text>
                <Text
                 fontSize={14}
                 fontWeight={'600'}
                 marginTop={10}
                >+91 1234567890</Text>
                </YStack>
                <Button
                padding={0}
                height={45}
                width={45}
                borderRadius={50}
                backgroundColor={"$secondary"}
                >
                <MaterialIcons name="call" size={24} color="#D7684D" />
                </Button>
                </XStack>
            </YStack>
            <YStack style={styles.item} >
              <XStack
              alignContent="center"
              justifyContent="center"
              alignItems="center"
              
              >
              <YStack width={270} paddingTop={10}>
              <Text 
              fontSize={16}
              fontWeight={'700'}
              >
                 Hospital
                </Text>
                <Text
                 fontSize={14}
                 fontWeight={'600'}
                 marginTop={10}
                >+91 1234567890</Text>
                </YStack>
                <Button
                padding={0}
                height={45}
                width={45}
                borderRadius={50}
                backgroundColor={"$secondary"}
                >
                <MaterialIcons name="call" size={24} color="#D7684D" />
                </Button>
                </XStack>
            </YStack>
               
               
                
              </View>
            </View>
          </Modal>
  );
};

const styles = StyleSheet.create({
  // Styles for the modal component
  // Define your styles here
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
});

export default CustomModal;
