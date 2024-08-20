import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useCacheBust} from './utils/useCacheBust';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

const IMAGE_URLS = [
  'http://fpoimg.com/100x100',
  'http://fpoimg.com/200x200',
  'http://fpoimg.com/400x400',
  'http://fpoimg.com/100x300',
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
];

export const FastImageSourceDemo = () => {
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
        <TestSuite name="uri">
          <TestCase itShould="image 1">
            <FastImage
              style={styles.image}
              source={{
                uri: "https://i-blog.csdnimg.cn/blog_migrate/12ea5d8f226ea294f76a8e77cfaf24c5.jpeg",
              }}
            />
          </TestCase>
          <TestCase itShould="image 2">
            <FastImage
              style={styles.image}
              source={{
                uri: "https://i-blog.csdnimg.cn/blog_migrate/f7cd0c9c94a756902bc24ae4d115f13a.jpeg",
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="headers">
          <TestCase itShould="has headers">
            <FastImage
              style={styles.image}
              source={{
                uri: "http://fpoimg.com/300x300",
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                  'Accept-Language': 'en-US,en;q=0.9',
                  'Connection': 'close'
                }
              }}
            />
          </TestCase>
          <TestCase itShould="no headers">
            <FastImage
              style={styles.image}
              source={{
                uri: "http://fpoimg.com/300x300",
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
