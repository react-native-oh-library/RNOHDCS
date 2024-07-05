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
  const ref2 = useRef<SignatureComponentRef>(null);
 
  
  const styles: StyleProp<ViewStyle> = {
    width: 330,
    height: 240,
  };

  return <Tester style={{padding: 0, margin: 0}}>
  <TestSuite name='signature capture'>
    <TestCase itShould='background: black | strokeColor: white'>
      <SignatureCapture
        ref={ref}
        backgroundColor={'black'}
        strokeColor={'#fff'}
        showTitleLabel={false}
        showNativeButtons={false}
        styles={[styles, { marginTop: 0}]}
      />
    </TestCase>
    
    <TestCase itShould='backgroundColor: white | strokeColor: red'>
      <SignatureCapture
        ref={ref2}
        backgroundColor={'#fff'}
        strokeColor={'red'}
        showTitleLabel={false}
        showNativeButtons={false}
        styles={[styles]}
      />
    </TestCase>
      <View>
        <Button title='reset' onPress={() => {
          ref.current?.resetImage();
          ref2.current?.resetImage();
        }}></Button>
      </View>
  </TestSuite>
  </Tester>
}

export default SignatureCaptureDemo;



