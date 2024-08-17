import React from 'react';
import { StyleSheet, Text,Button,Platform,View, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';

export function FastImageMothodDemo(): JSX.Element {
  const source = [
  {uri:"https://wewewweres.vmallres.com//uomcdn/CN/cms/202206/5B874DC0E45B0467105D3D3872A3E9A3.png"},
  {uri:"https://pic.616pic.com/ys_img/00/04/71/ntg7ib7rwj.jpg",},
  {uri:"https://bkimg.cdn.bcebos.com/pic/94cad1c8a786c9177f3e1dd6e16567cf3bc79e3df99e?x-bce-process=image/format,f_auto/watermark,image_d2F0ZXIvYmFpa2UyNzI,g_7,xp_5,yp_5,P_20/resize,m_lfit,limit_1,h_1080"
  ,headers: { sadasdasd: 'assss' }},
  {uri:"https://t11.baidu.com/it/u=3861652677,179000897&fm=30&app=106&f=PNG?w=640&h=562&s=6D89BD558F206D0F4A6114EB03008038",
  headers:  { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3", }},
  ]
  const [uri, setUri] = React.useState('');
  const [header, setHeader] = React.useState();
  const [onLoadStart, setLoadStart] = React.useState("onLoadStart");
  const [onProgress, setProgress] = React.useState("onProgress");
  const [onLoad, setLoad] = React.useState("onLoad");
  const [onError, setError] = React.useState("onError");
  const [onLoadEnd, setLoadEnd] = React.useState("onLoadEnd");
  const [onLayout, setLayout] = React.useState("onLayout");

  return (
    <View style={styles.container}>
      <Tester>
          <FastImage source={{ uri: uri,headers:header }} style={styles.image} 
            onLoadStart={() => { setLoadStart("onLoadStart success") }} 
            onProgress={(e) => { setProgress("onProgress success.loaded: " + e.nativeEvent.loaded + " total: " + e.nativeEvent.total) }} 
            onLoad={(e) => { setLoad("onLoad success. width: " + e.nativeEvent.width + " height: " + e.nativeEvent.height) }} 
            onLoadEnd={()=>{ setLoadEnd("onLoadEnd success") }}
            onError={() => { setError("onError success") }}
            onLayout={() => { setLayout("onLayout success") }}
          />
          <ScrollView>
          <TestSuite name="react-native-fast-image static mothod and callback function">
            <TestCase itShould="使用preload加载图片">
              <Button title="使用preload加载图片" onPress={() => { FastImage.preload(source); }}></Button>
            </TestCase>
            
            <TestCase itShould="选择图片">
              <Button title={`错误图片`} onPress={() => { setUri(source[0].uri);setHeader(undefined) }}></Button>
              <Button title={`正常无header图片`} onPress={() => { setUri(source[1].uri);setHeader(undefined)}}></Button>
              <Button title={`带header图片`} onPress={() => { setUri(source[2].uri);setHeader(source[2].headers) }}></Button>
              <Button title={`带hdear图片`} onPress={() => { setUri(source[3].uri);setHeader(source[3].headers) }}></Button>
            </TestCase>
            <TestCase itShould="清除图片磁盘缓存"
              initialState={false}
              arrange={({setState}) => <Button title="清除图片磁盘缓存" onPress={
                () => { FastImage.clearDiskCache()
                                  .then(()=>{setState(true);console.log('清除图片磁盘缓存完成'); })
                                  .catch(()=>{ setState(false) });console.log('清除图片磁盘缓存失败'); }}></Button> }
              assert={({state, expect}) => { expect(state).to.be.true; }} 
            />
            <TestCase itShould="清除图片内存缓存"
              initialState={false}
              arrange={({setState}) => <Button title="清除图片内存缓存" onPress={
                () => { FastImage.clearMemoryCache()
                                  .then(()=>{setState(true);console.log('清除图片内存缓存完成'); })
                                  .catch(()=>{ setState(false) });console.log('清除图片内存缓存失败'); }}></Button> }
              assert={({state, expect}) => { expect(state).to.be.true; }} 
            />
            <TestCase itShould='onProgress'><Text>{onProgress}</Text></TestCase>
            <TestCase itShould='onError'><Text>{onError}</Text></TestCase>
            <TestCase itShould='onLoad'><Text>{onLoad}</Text></TestCase>
            <TestCase itShould='onLoadStart'><Text>{onLoadStart}</Text></TestCase>
            <TestCase itShould='onLoadEnd'><Text>{onLoadEnd}</Text></TestCase>
            <TestCase itShould='onLayout'><Text>{onLayout}</Text></TestCase>
            <View style={{height:250}}></View>
          </TestSuite>
        </ScrollView>
      </Tester>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  item: {
    paddingLeft: 30,
    width: '100%',
    height: 100,
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
  },
  label: {
    marginTop: Platform.OS === 'ios' ? 50 : 0,
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
  },
  label2: {
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
  },
});