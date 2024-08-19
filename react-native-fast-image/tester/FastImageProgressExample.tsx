import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useCacheBust} from './utils/useCacheBust';
import SectionFlex from './utils/SectionFlex';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

const IMAGE_URL = 'https://media.giphy.com/media/GEsoqZDGVoisw/giphy.gif';

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

  const {url, bust} = useCacheBust(IMAGE_URL);
  const {mount, progress, end, start,layout} = state;
  return (
    <TestSuite name = 'progress'>
      <SectionFlex onPress={bust} style={styles.section}>
        <FastImage
          style={styles.image}
          source={{ uri: url, }}
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
      </SectionFlex>
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
