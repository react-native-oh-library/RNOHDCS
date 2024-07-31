import React from 'react';
import {View, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';

export class FastImageDemo_731 extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, padding: 50}}>
          <FastImage
            style={{
              backgroundColor: 'green',
              marginTop: 100,
              width: 200,
              height: 200,
            }}
            source={{
              uri: 'https://vod.vmall.com/asset/9bfcb882cca085601876dfc8acd74ce2/cover/Cover0.jpg',
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <FastImage
            style={{
              backgroundColor: 'red',
              marginTop: 100,
              width: 200,
              height: 200,
            }}
            source={{
              uri: 'https://fss-cdn.vmall.com/bd_searchsyscloud_admin/searchmanagement/20240530091635车 热搜图.png',
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </ScrollView>
    );
  }
}
