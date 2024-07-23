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
import { TestSuite, Tester, TestCase } from '@rnoh/testerino';

function RNImageResizerTest() {
  const [selectedMode, setMode] = useState<ResizeMode>('contain');
  const [onlyScaleDown, setOnlyScaleDown] = useState(false);
  const [sizeTarget, setSizeTarget] = useState(80);
  return (
    <TestSuite name="ImageResizer">
      <TestCase
        itShould="ImageResizer.createResizedImage"
        fn={async ({ expect }: any) => {
          try {
            let result = await ImageResizer.createResizedImage(
              '/data/storage/el2/base/haps/entry/cache/1.jpeg',
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
      <SafeAreaView style={{ backgroundColor: '#222' }}>
        <Tester >
          <ScrollView style={{ width: '100%' }}>
            <RNImageResizerTest />
          </ScrollView>
        </Tester>
      </SafeAreaView>
    </View>
  );
}

export default App; 