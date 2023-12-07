import React from 'react';
import { View} from 'react-native';
import { WebView } from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';
import { AntDesign } from '@expo/vector-icons';
import { XStack, YStack , Button, Text} from 'tamagui';
 
 const PDFViewer = () => {
  const openPDF = async () => {
    const pdfUrl = 'https://www.africau.edu/images/default/sample.pdf'; // Replace with the actual URL of your PDF file

    // Open the PDF in the Expo Go app's web browser
    WebBrowser.openBrowserAsync(pdfUrl);
  };

  return (
    <View>
      <YStack>
      <XStack>
        <Button
        height={62}
        width={360}
        borderRadius={5}
        borderColor={'#E1E1E1'}
        backgroundColor={'white'}
        marginTop={15}
        marginBottom={15}
        textAlign='left'
        alignContent='flex-start'
        onPress={openPDF}
        >
        <AntDesign name="pdffile1" size={24} color="#D7684D" />
        <Text 
        width={306}
        fontSize={14}
        fontWeight={'600'}
        >File name goes here and it can span multiple lines</Text>
        </Button>
     
      </XStack>
      </YStack>
      {/* <Button title="Open PDF" onPress={openPDF} /> */}
    </View>
  );
};

export default PDFViewer;
