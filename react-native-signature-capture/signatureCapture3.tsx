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
    <TestCase itShould='minStrokeWidth: 1 | maxStrokeWidth: 4'>
      <SignatureCapture
        ref={ref}
        backgroundColor={'#fff'}
        strokeColor={'#2883d2'}
        showTitleLabel={false}
        showBorder={true}
        minStrokeWidth={1}
        maxStrokeWidth={4}
        showNativeButtons={true}
        styles={[styles]}
      />
    </TestCase>
    
    <TestCase itShould='minStrokeWidth: 2 | maxStrokeWidth: 8'>
      <SignatureCapture
        backgroundColor={'#fff'}
        strokeColor={'#2883d2'}
        showTitleLabel={false}
        minStrokeWidth={2}
        maxStrokeWidth={8}
        showNativeButtons={true}
        styles={[styles]}
      />
    </TestCase>
  </TestSuite>
  </Tester>
}

export default SignatureCaptureDemo;

