import React, { useEffect, useRef, useState } from "react";
import {
    ViewStyle,
    StyleProp,
    Button,
    View,
    ScrollView
  } from "react-native";
import SignatureCapture from 'react-native-signature-capture';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
  
export type SignatureComponentRef = {
   saveImage: () => void
   resetImage: () => void
 };

function SignatureCaptureDemo() {

  const ref = useRef<SignatureComponentRef>(null);

  
  const styles: StyleProp<ViewStyle> = {
    width: 330,
    height: 240,
  };

  return <Tester style={{padding: 0, margin: 0}}>
  <TestSuite name='signature capture'>
    <TestCase itShould='showNativeButtons: true'>
      <SignatureCapture
        ref={ref}
        backgroundColor={'#fff'}
        strokeColor={'#2883d2'}
        showTitleLabel={false}
        showBorder={true}
        showNativeButtons={true}
        styles={[styles]}
      />
    </TestCase>
    
    <TestCase itShould='showTitleLabel: true'>
      <SignatureCapture
        backgroundColor={'#fff'}
        strokeColor={'red'}
        showTitleLabel={true}
        showNativeButtons={false}
        styles={[styles]}
      />
    </TestCase>
  </TestSuite>
  </Tester>
}

export default SignatureCaptureDemo;



