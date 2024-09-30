import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

const IMAGE_URL = 'https://res.vmallres.com//uomcdn/CN/pms/202405/9F47CCC9E8C2DB0FE903BFC4135ADB8B.jpg';

export const FastImageProgressExample = () => {
  const [state, setState] = useState<{
    mount: number;
    start?: number;
    progress?: number;
    end?: number;
    layout?:object;
  }>({
    mount: Date.now(),
    start: undefined,
    progress: undefined,
    end: undefined,
    layout: undefined
  });
  const {mount, progress, end, start,layout} = state;
  return (
    <TestSuite name = 'progress'>
      <FastImage
          style={styles.image}
          source={{ uri: IMAGE_URL, }}
          onLoadStart={() => setState(s => ({...s, start: Date.now()}))}
          onProgress={e => {
            const p = Math.round(
              100 * (e.nativeEvent.loaded / e.nativeEvent.total),
            );
            setState(s => ({
              ...s,
              progress: p,
            }));
          }}
          onLoad={() => setState(s => ({...s, end: Date.now()}))}
          onLoadEnd={() => {}}
          onLayout={(e) => {setState(s => ({...s, layout: e}));}}
        />
      <TestCase itShould = 'onLoad'>
        <Text>
          onLoad
          {end !== undefined && ` - ${end - mount} ms`}
        </Text>
      </TestCase>
      <TestCase itShould = 'onProgress'>
        <Text>
          onProgress
          {progress !== undefined && ` - ${progress} %`}
        </Text>
      </TestCase>
      <TestCase itShould = 'onLoadStart'>
        <Text>
          onstart
          {start !== undefined && ` - pass `}
        </Text>
      </TestCase>
      <TestCase itShould = 'onLayout'>
        <Text>
          onLayout: 
          {layout !== undefined && ` - pass `}
        </Text>
      </TestCase>
    </TestSuite>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    height: 100,
    backgroundColor: '#ddd',
    width: 100,
    flex: 0,
  },
});
