import {Tester, TestSuite} from '@rnoh/testerino';
import React, {useState} from 'react';
import {TestCase} from './testCase';
import BetterBanner from 'react-native-better-banner';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const bannerComponents = [
  <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#1997fc',
      alignItems: 'center',
      justifyContent: 'center'
  }}>
      <Text style={{fontSize: 35, color: '#fff', marginBottom: 10}}>Page 01</Text>
      <Text style={{fontSize: 15, color: '#fff'}}>Welcome! have a good time</Text>
  </View>,
  <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#da578f',
      alignItems: 'center',
      justifyContent: 'center'
  }}>
      <Text style={{fontSize: 35, color: '#fff', marginBottom: 10}}>Page 02</Text>
      <Text style={{fontSize: 15, color: '#fff'}}>Welcome! have a good time</Text>
  </View>,
  <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#7c3fe4',
      alignItems: 'center',
      justifyContent: 'center'
  }}>
      <Text style={{fontSize: 35, color: '#fff', marginBottom: 10}}>Page 03</Text>
      <Text style={{fontSize: 15, color: '#fff'}}>Welcome! have a good time</Text>
  </View>,
  <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#6d42f7',
      alignItems: 'center',
      justifyContent: 'center'
  }}>
      <Text style={{fontSize: 35, color: '#fff', marginBottom: 10}}>Page 04</Text>
      <Text style={{fontSize: 15, color: '#fff'}}>Welcome! have a good time</Text>
  </View>
]
const bannerImages = [
  {uri: "http://attachments.gfan.net.cn/forum/attachments2/201402/05/211339r5eizavo2g5efuar.jpg.thumb.jpg"},
  {uri: "http://attachments.gfan.net.cn/forum/attachments2/201402/05/211342pkd8axiibj5axizi.jpg.thumb.jpg"},
  {uri: "http://attachments.gfan.net.cn/forum/attachments2/201402/05/2113441e4dw5zvv49jkdow.jpg.thumb.jpg"},
]

const BetterBannerTest = () => {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name="BetterBanner" style={styles.container}>
          <TestCase.Example
            skip={{ android: true, harmony: { arkTS: true, cAPI: true } }}
            itShould="display red background if Screen Reader is enabled">
            <BetterBannerTestCase1 />
          </TestCase.Example>
          <TestCase.Example
            skip={{ android: true, harmony: { arkTS: true, cAPI: true } }}
            itShould="display red background if Screen Reader is enabled">
            <BetterBannerTestCase2 />
          </TestCase.Example>
          <TestCase.Example
            skip={{ android: true, harmony: { arkTS: true, cAPI: true } }}
            itShould="display red background if Screen Reader is enabled">
            <BetterBannerTestCase3 />
          </TestCase.Example>
          <TestCase.Example
            skip={{ android: true, harmony: { arkTS: true, cAPI: true } }}
            itShould="display red background if Screen Reader is enabled">
            <BetterBannerTestCase4 />
          </TestCase.Example>
          <TestCase.Example
            skip={{ android: true, harmony: { arkTS: true, cAPI: true } }}
            itShould="display red background if Screen Reader is enabled">
            <BetterBannerTestCase5 />
          </TestCase.Example>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};
const BetterBannerTestCase1 = () => {
  return <View>
    <BetterBanner
      bannerComponents={bannerComponents}
      bannerHeight={ 250 }
      bannerTitles={["Page 01 1111", "Page 02 2222", "Page 03 3333", "Page 04 4444"]}
      bannerTitleTextColor='#fff'
      bannerTitleTextSize={ 14 }
      scrollInterval={ 2000 }
      indicatorWidth={20}
      indicatorHeight={12}
      indicatorColor={'rgba(255,255,255,0.6)'}
      activeIndicatorColor={'#fff'}
      onScrollEnd={()=>{console.log('onScrollEnd')}}
      indicatorContainerBackgroundColor={'rgba(0,0,0,0.3)'}
      onPress={(index) => alert('you pressed index is : ' + index)}
      isSeamlessScroll={true}
    />
  </View>;
};

const BetterBannerTestCase2 = () => {
  return <View style={styles.container}>
    <BetterBanner
      bannerComponents={bannerComponents}
      bannerHeight={ 500 }
      bannerTitles={["Page 01 1111", "Page 02 2222", "Page 03 3333", "Page 04 4444"]}
      bannerTitleTextColor='#fff'
      bannerTitleTextSize={ 14 }
      scrollInterval={ 2000 }
      isAutoScroll={ false }
      indicatorWidth={20}
      indicatorHeight={12}
      onScrollEnd={()=>{console.log('onScrollEnd')}}
      onPress={(index) => alert('you pressed index is : ' + index)}
      isSeamlessScroll={true}
      indicatorGroupPosition={'center'}
    />
  </View>;
};

const BetterBannerTestCase3 = () => {
  const [count, setCount] = useState(100)
  const onPress = (index)=> {
    setCount(1000)
    alert(count+index)
  }
  return <View style={styles.container}>
    <BetterBanner
      bannerComponents={bannerComponents}
      bannerHeight={ 250 }
      bannerTitles={["Page 01 Page 01 Page 01 Page 01 Page 01 Page 01 Page 01 ", "Page 02 6666", "Page 03 8888", "Page 04 6688"]}
      bannerTitleTextColor='#000'
      bannerTitleTextSize={ 14 }
      scrollInterval={ 3000 }
      isAutoScroll={ false }
      indicatorWidth={20}
      indicatorHeight={12}
      indicatorColor={'#000'}
      indicatorGap={24}
      activeIndicatorColor={'#000'}
      indicatorGroupSideOffset={30}
      indicatorContainerHeight={64}
      onPress={(index) => onPress(index)}
      isSeamlessScroll={true}
    />
  </View>;
};

const BetterBannerTestCase4 = () => {
  return <View style={styles.container}>
    <BetterBanner
      bannerComponents={bannerComponents}
      bannerTitles={["Page 01 Page 01 Page 01 Page 01 Page 01 Page 01 Page 01 ", "Page 02 6666", "Page 03 8888", "Page 04 6688"]}
      scrollInterval={ 4000 }
      isAutoScroll={ true }
      indicatorColor={'#000'}
      indicatorGap={24}
      activeIndicatorColor={'#000'}
      indicatorGroupSideOffset={30}
      indicatorContainerHeight={64}
      onScrollEnd={()=>{console.log('onScrollEnd')}}
      indicatorContainerBackgroundColor={'rgba(0,0,0,0.3)'}
      onPress={(index) => alert('you pressed index is : ' + index)}
      isSeamlessScroll={true}
      indicatorGroupPosition={'center'}
    />
  </View>;
};

const BetterBannerTestCase5 = () => {
  return <View style={styles.container}>
    <BetterBanner
      bannerImages={bannerImages}
      bannerTitles={["Page 01 Page 01 Page 01 Page 01 Page 01 Page 01 Page 01 ", "Page 02 6666", "Page 03 8888", "Page 04 6688"]}
      bannerTitleTextColor='#000'
      isAutoScroll={ false }
      indicatorWidth={20}
      indicatorHeight={12}
      indicatorColor={'#000'}
      indicatorGap={24}
      activeIndicatorColor={'#000'}
      indicatorGroupSideOffset={40}
      indicatorContainerHeight={72}
      onScrollEnd={()=>{console.log('onScrollEnd')}}
      indicatorContainerBackgroundColor={'rgba(0,0,0,0.3)'}
      onPress={(index) => alert('you pressed index is : ' + index)}
      isSeamlessScroll={true}
      indicatorGroupPosition={'center'}
    />
  </View>;
};

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});

export default BetterBannerTest
