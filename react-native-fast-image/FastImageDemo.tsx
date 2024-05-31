import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, Platform } from 'react-native';
import FastImage from 'react-native-fast-image';

function FastImageDemo(): JSX.Element {
  const source = [
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6651224a-b18d-4456-97b8-14c6daad236d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694154457&t=37e024c7f8fb33d10e154f32353baf4a",
    "https://wewewweres.vmallres.com//uomcdn/CN/cms/202206/5B874DC0E45B0467105D3D3872A3E9A3.png",
    "https://res.vmallres.com//uomcdn/CN/cms/202206/5B874DC0E45B0467105D3D3872A3E9A3.png",
    "https://res.vmallres.com/portal/1.23.8.300/h5/images/logo_app.png",
    "https://res.vmallres.com/portal/1.23.8.300/h5/images/sort-search.png",
  ]
  const [onLoadStart, setLoadStart] = React.useState("onLoadStart");
  const [onProgress, setProgress] = React.useState("onProgress");
  const [onLoad, setLoad] = React.useState("onLoad");
  const [onError, setError] = React.useState("onError");
  const [onLoadEnd, setLoadEnd] = React.useState("onLoadEnd");

  return (
    <View style={styles.container}>
      <Text style={styles.label2}>{onLoadStart}</Text>
      <Text style={styles.label2}>{onProgress}</Text>
      <Text style={styles.label2}>{onLoad}</Text>
      <Text style={styles.label2}>{onError}</Text>
      <Text style={styles.label2}>{onLoadEnd}</Text>

      <FastImage source={{ uri: source[0] }} style={styles.image} onLoadStart={() => {
        setLoadStart("onLoadStart success")
      }} 
      onProgress={(e) => {
        setProgress("onProgress success.loaded: " + e.nativeEvent.loaded + " total: " + e.nativeEvent.total)
      }} 

      onLoad={(e) => {
        setLoad("onLoad success. width: " + e.nativeEvent.width + " height: " + e.nativeEvent.height)
      }} 
      onLoadEnd={()=>{
        setLoadEnd("onLoadEnd success")
      }}
      />
      <FastImage source={{ uri: source[1] }} style={styles.image} onError={() => {
        setError("onError success")
      }} />
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

export default FastImageDemo