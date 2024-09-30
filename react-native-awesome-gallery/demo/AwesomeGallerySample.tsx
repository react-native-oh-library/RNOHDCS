import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Gallery from 'react-native-awesome-gallery';

const getRandomSize = function () {
  const min = 400;
  const max = 800;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const images = new Array(10)
  .fill(0)
  .map(() => `https://picsum.photos/${getRandomSize()}/${getRandomSize()}`);

export default function App() {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView></SafeAreaView>
      <View style={{height: '100%', width: '100%'}}>
        <Gallery data={images} swipeEnabled={true} />
      </View>
    </View>
  );
}
