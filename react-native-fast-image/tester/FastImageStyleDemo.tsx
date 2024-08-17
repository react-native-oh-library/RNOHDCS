import React from 'react';
import { StyleSheet, View, ScrollView,Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

export function FastImageStyleDemo(): JSX.Element {

  return(
    <View style={styles.container}>
      <Tester>
        <ScrollView>
        <TestSuite name='style属性测试'>
          <TestCase itShould='jpg'>
            <FastImage
              style={styles.image}
              source={require('./image/fields.jpg')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TestCase>
          <TestCase itShould='png'>
            <FastImage
              style={styles.image}
              source={require('./image/bunny.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TestCase>
          <TestCase itShould='gif'>
            <FastImage
              style={styles.image}
              source={require('./image/jellyfish.gif')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TestCase>
          <TestCase itShould='webp'>
            <FastImage
              style={styles.image}
              source={require('./image/test3.webp')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TestCase>
          <TestCase itShould='tintColor green'>
            <FastImage
              style={styles.image}
              tintColor={'green'}
              source={require('./image/bunny.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TestCase>
          <TestCase itShould='tintColor red'>
            <FastImage
              style={styles.image}
              tintColor={'red'}
              source={require('./image/bunny.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TestCase>
          <TestCase itShould='defaultSource bunny.png'>
            <FastImage
              style={styles.image}
              defaultSource={require('./image/bunny.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TestCase>
          <TestCase itShould='fallback true'>
            <FastImage
              style={styles.image}
              fallback={true}
              source={require('./image/bunny.png')}
            />
          </TestCase>
          <TestCase itShould='fallback false'>
            <FastImage
              style={styles.image}
              fallback={false}
              source={require('./image/bunny.png')}
            />
          </TestCase>
          <TestCase itShould='resizeMode contain'>
            <Image
              style={{width:300,height:300}}
              resizeMode='contain'
              source={require('./image/bunny.png')}
            />
          </TestCase>
          <TestCase itShould='resizeMode cover'>
            <Image
              style={{width:300,height:300}}
              resizeMode='cover'
              source={require('./image/bunny.png')}
            />
          </TestCase>
          <TestCase itShould='resizeMode stretch'>
            <Image
              style={{width:300,height:300}}
              resizeMode='stretch'
              source={require('./image/bunny.png')}
            />
          </TestCase>
          <TestCase itShould='resizeMode center'>
            <Image
              style={{width:300,height:300}}
              resizeMode='center'
              source={require('./image/bunny.png')}
            />
          </TestCase>
          <TestCase itShould='borderRadius 50'>
            <Image
              style={{borderRadius:50,width:240,height:240}}
              source={require('./image/fields.jpg')}
            />
          </TestCase>
          <TestCase itShould='borderWidth:12, borderColor #ff00ff'>
            <Image
              style={{borderWidth:12,borderColor:'#ff00ff',width:240,height:240}}
              source={require('./image/fields.jpg')}
            />
          </TestCase>
          <TestCase itShould='borderWidth:5, borderColor #ff00ff'>
            <Image
              style={{borderWidth:5,borderColor:'#ff00ff',width:240,height:240}}
              source={require('./image/fields.jpg')}
            />
          </TestCase>
          <TestCase itShould='opacity 0.5'>
            <Image
              style={{opacity:0.5,width:240,height:240}}
              source={require('./image/fields.jpg')}
            />
          </TestCase>
        </TestSuite>
        </ScrollView>
      </Tester>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'grey',
  },
  image: {
    width: 150,
    height: 150,
  },
});