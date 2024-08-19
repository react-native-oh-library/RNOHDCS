import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

const IMAGE_URL = 'https://wewewweres.vmallres.com//uomcdn/CN/cms/202206/111.png';

export const FastImageErrorExample = () => {
  const [state, setState] = useState<{
    error?:boolean
    loadEnd?:boolean
  }>({
    error: false,
    loadEnd: false,
  });
  const { error,loadEnd} = state;
  return (
      <TestSuite name ='error'>
        <FastImage
          style={styles.image}
          source={{ uri: IMAGE_URL, }}
          onLoadEnd={() => {setState(s => ({...s, loadEnd: true}));console.log('ss');}}
          onError={() => {setState(s => ({...s, error: true}));console.log('aa');}}
        />
        <TestCase itShould='loadEnd'><Text>{loadEnd  && ` loadEnd! `}</Text></TestCase>
        <TestCase itShould='error'><Text>{error && ` error! `}</Text></TestCase>
      </TestSuite>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    height: 100,
    backgroundColor: '#ddd',
    margin: 20,
    width: 100,
    flex: 0,
  },
});
