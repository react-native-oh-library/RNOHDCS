import React, {} from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useCacheBust} from './utils/useCacheBust';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

const IMAGE_URLS = [
  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcdM.img",
  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcgc.img",
  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEhXT.img",
  "https://i.loli.net/2021/04/14/nNly8EdXJ2aHYTe.jpg",
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
];

export const FastImagePriorityCacheDemo = () => {
  const {query, bust} = useCacheBust('');
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="priority && cache">
          <TestCase itShould="priority low">
              <FastImage
                style={styles.image}
                source={{
                  uri: IMAGE_URLS[0],
                  priority: FastImage.priority.low,
                }}
              />
          </TestCase>

          <TestCase itShould="priority normal">
            <FastImage
              style={styles.image}
              source={{
                uri: IMAGE_URLS[1],
                priority: FastImage.priority.normal,
              }}
            />
          </TestCase>
          <TestCase itShould="priority high">
            <FastImage
              style={styles.image}
              source={{
                uri: IMAGE_URLS[2],
                priority: FastImage.priority.high,
              }}
            />
          </TestCase>

          <TestCase itShould="cache immutable">
            <FastImage
              style={styles.image}
              source={{
                uri: IMAGE_URLS[3],
                cache: FastImage.cacheControl.immutable,
              }}
            />
          </TestCase>
          <TestCase itShould="cache web">
            <FastImage
              style={styles.image}
              source={{
                uri: IMAGE_URLS[4],
                cache: FastImage.cacheControl.web,
              }}
            />
          </TestCase>
          <TestCase itShould="cache cacheOnly">
            <FastImage
              style={styles.image}
              source={{
                uri: IMAGE_URLS[5],
                cache: FastImage.cacheControl.cacheOnly,
              }}
            />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
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
