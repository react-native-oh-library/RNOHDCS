import React, { useState } from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import type {
  ResizeMode,
  Response,
} from '@bam.tech/react-native-image-resizer';
import { TestSuite ,Tester } from '@rnoh/testerino';
import { TestCase } from '../components';

function RNImageResizerTest() {
  const [selectedMode, setMode] = useState<ResizeMode>('contain');
  const [onlyScaleDown, setOnlyScaleDown] = useState(false);
  const [imageUri, setImageUri] = useState<null | string>();
  const [sizeTarget, setSizeTarget] = useState(80);
  const [resizedImage, setResizedImage] = useState<null | Response>();
  return (
    <TestSuite name="ImageResizer">
      <TestCase.Logical
      itShould="ImageResizer.createResizedImage"  
      fn={({expect}: any) => {
        if (!imageUri) return;
    setResizedImage(null);
    try {
      let result = ImageResizer.createResizedImage(
        imageUri,
        sizeTarget,
        sizeTarget,
        'JPEG',
        100,
        0,
        undefined,
        false,
        {
          mode: selectedMode,
          onlyScaleDown,
        }
      );
      expect((result)).to.not.be.undefined;
    } catch (error) {
      expect((error)).to.not.be.undefined;
    }
    }}
    />
    </TestSuite>
  );
}

function App() {
  return (
    <View>
    <StatusBar />
    <SafeAreaView style={{backgroundColor: '#222'}}>
        <Tester >
          <ScrollView style={{width: '100%'}}>
            <RNImageResizerTest/>
          </ScrollView>
        </Tester>
    </SafeAreaView>
  </View>
  );
}

export default App; 