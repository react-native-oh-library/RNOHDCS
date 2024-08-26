import React from 'react';
import {StyleSheet, ScrollView,Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useCacheBust} from './utils/useCacheBust';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

const IMAGE_URLS = [
  'https://dummyimage.com/100x100',
  'https://dummyimage.com/200x200',
  'https://dummyimage.com/400x400',
  'https://dummyimage.com/100x300',
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
];

export const FastImageSourceDemo = () => {
  const {query, bust} = useCacheBust('');
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="uri">
          <TestCase itShould="image 1 uri:https://i-blog.csdnimg.cn/blog_migrate/12ea5d8f226ea294f76a8e77cfaf24c5.jpeg">
            <FastImage
              style={styles.image}
              source={{
                uri: "https://i-blog.csdnimg.cn/blog_migrate/12ea5d8f226ea294f76a8e77cfaf24c5.jpeg",
              }}
            />
          </TestCase>
          <TestCase itShould="image 2 uri:https://i-blog.csdnimg.cn/blog_migrate/f7cd0c9c94a756902bc24ae4d115f13a.jpeg">
            <FastImage
              style={styles.image}
              source={{
                uri: "https://i-blog.csdnimg.cn/blog_migrate/f7cd0c9c94a756902bc24ae4d115f13a.jpeg",
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="headers">
          <TestCase itShould="(后台可以看到header传输)headers: headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                  'Accept-Language': 'en-US,en;q=0.9',
                  'Connection': 'close'
                }">
            <FastImage
              style={styles.image}
              source={{
                uri: "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202308/gbom/6941487297153/428_428_6AC44C47C8F772DEECF7DE49BF662D3Fmp.png",
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                  'Accept-Language': 'en-US,en;q=0.9',
                  'Connection': 'close'
                }
              }}
            />
          </TestCase>
          <TestCase itShould="(后台可以看到header传输)headers: undefined">
            <FastImage
              style={styles.image}
              source={{
                uri: "https://res2.vmallres.com/pimages/uomcdn/CN/pms/202308/gbom/6941487297153/428_428_6AC44C47C8F772DEECF7DE49BF662D3Fmp.png",
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
