import React from 'react';
import { View, Button, ScrollView} from 'react-native';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import FastImage, { 
} from 'react-native-fast-image';

export class FastImageStaticMothodDemo extends React.Component {
  uris = [{uri:'https://fss-cdn.vmall.com/bd_searchsyscloud_admin/searchmanagement/20240530091635车 热搜图.png'},
  {uri:"http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024"},
  {uri:"https://vod.vmall.com/asset/9bfcb882cca085601876dfc8acd74ce2/cover/Cover0.jpg"},]

  constructor(props: any) {
    super(props);
    this.state = { preloadUri: '', };
  }

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, padding: 50}}>
          <Tester>
            <TestSuite name="react-native-fast-image static mothod">
              <TestCase itShould="使用preload加载图片">
                <Button
                  title="使用preload加载图片"
                  onPress={() => {
                    console.log('使用preload加载图片------>');
                    FastImage.preload(this.uris);
                  }}></Button>
              </TestCase>
              
              <TestCase itShould="显示已预加载的图片">
              {
                this.uris.map((item, index) => (
                  <Button title={`显示已预加载的图片 ${index}`}
                  onPress={() => {  this.setState({ preloadUri: item.uri }); }}></Button>
                  ))
              }
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
            </TestSuite>
          </Tester>

          
          <FastImage
            style={{
              backgroundColor: 'green',
              marginTop: 100,
              width: 200,
              height: 200,
            }}
            source={{uri: this.state.preloadUri}}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </ScrollView>
    );
  }
}
