import React, { useEffect, useRef, useState } from "react";
import {
    ViewStyle,
    StyleProp,
    Button,
    View,
    ScrollView,
    Text
  } from "react-native";
import SignatureCapture from 'react-native-signature-capture';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
  
export type SignatureComponentRef = {
   saveImage: () => void
   resetImage: () => void
 };

function SignatureCaptureDemo() {

  const ref = useRef<SignatureComponentRef>(null);
 
  const reset = () => {
    ref.current?.resetImage();
  }
  
  const saveImage = () => {
    ref.current?.saveImage();
  }
  
  const styles: StyleProp<ViewStyle> = {
    width: 330,
    height: 240,
  };
  
  const [saveRes, setsaveRes] = useState('');

  return <Tester style={{padding: 0, margin: 0}}>
  <TestSuite name='signature capture Command'>
    <TestCase itShould='test resetImage 、saveImage'>
      <View>
        <Button title="reset" onPress={() => reset()}></Button>
        <Button title="save" onPress={() => saveImage()}></Button>
      </View>
      <SignatureCapture
        ref={ref}
        backgroundColor={'#fff'}
        strokeColor={'#2883d2'}
        showTitleLabel={false}
        showBorder={true}
        maxSize={50}
        minStrokeWidth={1}
        maxStrokeWidth={4}
        onSaveEvent={(ev: any) => {
          setsaveRes(JSON.stringify(ev));
        }}
        showNativeButtons={true}
        styles={[styles]}
      />
      <Text>{saveRes}</Text>
    </TestCase>
    
  </TestSuite>
  </Tester>
}

export default SignatureCaptureDemo;
