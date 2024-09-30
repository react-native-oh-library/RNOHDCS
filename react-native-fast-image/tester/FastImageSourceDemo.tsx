import React, { useState } from 'react';
import {StyleSheet, ScrollView,Image, Button} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useCacheBust} from './utils/useCacheBust';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';


export const FastImageSourceDemo = () => {

  const [uri,setUri] = useState('');
  const [uri1,setUri1] = useState('');
  const [uri3,setUri3] = useState('');
  const [uri4,setUri4] = useState('');
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="uri">
          <TestCase itShould="image 1 uri:https://i-blog.csdnimg.cn/blog_migrate/12ea5d8f226ea294f76a8e77cfaf24c5.jpeg">
          <Button title='show' onPress={()=>{
              setUri3("https://i-blog.csdnimg.cn/blog_migrate/12ea5d8f226ea294f76a8e77cfaf24c5.jpeg")
            }}></Button>
            <FastImage
              style={styles.image}
              source={{
                uri: uri3,
              }}
            />
          </TestCase>
          <TestCase itShould="image 2 uri:https://i-blog.csdnimg.cn/blog_migrate/f7cd0c9c94a756902bc24ae4d115f13a.jpeg">
          <Button title='show' onPress={()=>{
              setUri4("https://i-blog.csdnimg.cn/blog_migrate/f7cd0c9c94a756902bc24ae4d115f13a.jpeg")
            }}></Button>
            <FastImage
              style={styles.image}
              source={{
                uri: uri4,
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
            <Button title='show' onPress={()=>{
              setUri("https://res2.vmallres.com/pimages/uomcdn/CN/pms/202308/gbom/6941487297153/428_428_6AC44C47C8F772DEECF7DE49BF662D3Fmp.png")
            }}></Button>
            <FastImage
              style={styles.image}
              source={{
                uri: uri,
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                  'Accept-Language': 'en-US,en;q=0.9',
                  'Connection': 'close'
                }
              }}
            />
          </TestCase>
          <TestCase itShould="(后台可以看到header传输)headers: undefined">
            <Button title='show' onPress={()=>{
                setUri1("https://res2.vmallres.com/pimages/uomcdn/CN/pms/202308/gbom/6941487297153/428_428_6AC44C47C8F772DEECF7DE49BF662D3Fmp.png")
            }}></Button>
            <FastImage
              style={styles.image}
              source={{ uri: uri1, }}
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
