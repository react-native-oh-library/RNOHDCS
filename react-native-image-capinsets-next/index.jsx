import ImageCapInset from 'react-native-image-capinsets-next';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';

const YourImage = () => {
  const img1 = require('./capinset_bg.png');
  const img2 = require('./capinset_bg2.png');
  const initInset = JSON.stringify({top: 4, right: 3, bottom: 4, left: 12});
  const initInset2 = JSON.stringify({top: 1, right: 1, bottom: 1, left: 5});
  const [currentImg, setCurrentImg] = useState(img1);
  const [currentCapInset, setCurrentCapInset] = useState(JSON.parse(initInset));

  const onChangeUrl = () => {
    const url = currentImg === img1 ? img2 : img1;
    setCurrentImg(url);
  };

  const onChangeInset = () => {
    const inset =
      JSON.stringify(currentCapInset) === initInset ? initInset2 : initInset;
    setCurrentCapInset(JSON.parse(inset));
  };

  return (
    <View style={styles.container}>
      <ImageCapInset
        style={styles.imgStyle}
        source={currentImg}
        capInsets={currentCapInset}>
        <Text>图片内容2</Text>
      </ImageCapInset>
      <View style={styles.switchItem}>
        <Text>切换图片: </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={currentImg === img1 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChangeUrl}
          value={currentImg === img1 ? true : false}
        />
      </View>
      <View style={styles.switchItem}>
        <Text>切换Inset: </Text>
        <Switch
          thumbColor={currentCapInset === initInset ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={onChangeInset}
          value={JSON.stringify(currentCapInset) === initInset ? true : false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 200,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  switchItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default YourImage;
