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
              source={112}
              resizeMode={FastImage.resizeMode.contain}
              onError={()=>{console.log('error'); }}
              onLoadEnd={()=>{console.log('onLoadEnd'); }}
            />
          </TestCase>
          <TestCase itShould='fallback true source=require(./image/bunny.png)'>
            <FastImage
              style={styles.image}
              fallback={true}
              source={require('./image/bunny.png')}
            />
          </TestCase>
          <TestCase itShould='fallback true source=uri:https://res1.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487290635/428_428_FFFFF8509921B19558EEDBD2875976FEmp.png'>
            <FastImage
              style={styles.image}
              fallback={true}
              source={{uri:'https://res1.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487290635/428_428_FFFFF8509921B19558EEDBD2875976FEmp.png'}}
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
              source={{uri:'https://res1.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487290635/428_428_FFFFF8509921B19558EEDBD2875976FEmp.png'}}
            />
          </TestCase>
          <TestCase itShould='resizeMode cover'>
            <Image
              style={styles.resizeImage}
              resizeMode='cover'
              source={{uri:'https://res1.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487290635/428_428_FFFFF8509921B19558EEDBD2875976FEmp.png'}}
            />
          </TestCase>
          <TestCase itShould='resizeMode stretch'>
            <Image
              style={styles.resizeImage}
              resizeMode='stretch'
              source={{uri:'https://res1.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487290635/428_428_FFFFF8509921B19558EEDBD2875976FEmp.png'}}
            />
          </TestCase>
          <TestCase itShould='resizeMode center'>
            <Image
              style={styles.resizeImage}
              resizeMode='center'
              source={{uri:'https://res1.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487290635/428_428_FFFFF8509921B19558EEDBD2875976FEmp.png'}}
            />
          </TestCase>
          <TestCase itShould='borderWidth:12,borderColor:#ff00ff,width:240,height:240,borderRadius:50'>
            <Image
              style={{borderWidth:12,borderColor:'#ff00ff',width:240,height:240,borderRadius:50}}
              source={require('./image/fields.jpg')}
            />
          </TestCase>
          <TestCase itShould='borderWidth:12,borderColor:#ff00ff,width:240,height:240'>
            <Image
              style={{borderWidth:12,borderColor:'#ff00ff',width:240,height:240}}
              source={require('./image/fields.jpg')}
            />
          </TestCase>
          <TestCase itShould='borderWidth:5,borderColor:#ff00ff,width:240,height:240'>
            <Image
              style={{borderWidth:5,borderColor:'#ff00ff',width:240,height:240}}
              source={require('./image/fields.jpg')}
            />
          </TestCase>
          <TestCase itShould='opacity 0.7'>
            <Image
              style={{opacity:0.7,width:240,height:240}}
              source={require('./image/fields.jpg')}
            />
          </TestCase>
          <TestCase itShould='opacity 0.1'>
            <Image
              style={{opacity:0.1,width:240,height:240}}
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
  resizeImage:{
    height: 100,
    width: 50,
    backgroundColor: '#ddd',
    margin: 20,
    marginTop: 0,
    marginBottom: 10,
    flex: 0,
},
});