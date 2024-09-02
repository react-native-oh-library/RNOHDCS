import ImageCapInset from '@react-native-oh-tpl/react-native-image-capinsets-next';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';

const YourImage = () => {
  const img1 = require('./img/capinset_bg.png');
  const img2 = require('./img/capinset_bg2.png');
  const img3 = 'https://img95.699pic.com/xsj/0z/qt/7p.jpg%21/fh/300';
  const img4 = 'https://tupian.qqw21.com/article/UploadPic/2014-5/2014551549412981.jpg';
  const initInset = JSON.stringify({top: 2, right: 5, bottom: 2, left: 5});
  const initInset2 = JSON.stringify({top: 15, right: 20, bottom: 15, left: 20});
  const [currentImg1, setCurrentImg1] = useState(img1);
  const [currentImg2, setCurrentImg2] = useState(img3);
  const [currentCapInset1, setCurrentCapInset1] = useState(JSON.parse(initInset));
  const [currentCapInset2, setCurrentCapInset2] = useState(JSON.parse(initInset));
  
  const onChangeUrl1 = () => {
    const url = currentImg1 === img1 ? img2 : img1;
    setCurrentImg1(url);
  };

  const onChangeUrl2 = () => {
    const url = currentImg2 === img3 ? img4 : img3;
    setCurrentImg2(url);
  };

  const onChangeInset1 = () => {
    const inset =
      JSON.stringify(currentCapInset1) === initInset ? initInset2 : initInset;
    setCurrentCapInset1(JSON.parse(inset));
  };

  const onChangeInset2 = () => {
    const inset =
      JSON.stringify(currentCapInset2) === initInset ? initInset2 : initInset;
    setCurrentCapInset2(JSON.parse(inset));
  };

  return (
    <View style={styles.container}>
      <ImageCapInset
        style={styles.imgStyle}
        source={currentImg1}
        capInsets={currentCapInset1}>
      </ImageCapInset>
      <View style={styles.switchItem}>
        <Text>切换本地图片: </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={currentImg1 === img1 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChangeUrl1}
          value={currentImg1 === img1 ? true : false}
        />
      </View>
      <View style={styles.switchItem}>
        <Text>切换本地图片Inset: </Text>
        <Switch
          thumbColor={currentCapInset1 === initInset ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={onChangeInset1}
          value={JSON.stringify(currentCapInset1) === initInset ? true : false}
        />
      </View>
      <View style={styles.instruction}>
          <Text>开关关闭: top: 15, right: 20, bottom: 15, left: 20</Text>
          <Text>开关打开: top: 2, right: 5, bottom: 2, left: 5</Text>
        </View>
      <ImageCapInset
        style={styles.imgStyle}
        source={{uri: currentImg2}}
        capInsets={currentCapInset2}>
      </ImageCapInset>
      <View style={styles.switchItem}>
        <Text>切换网络图片: </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={currentImg2 === img3 ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChangeUrl2}
          value={currentImg2 === img3 ? true : false}
        />
      </View>
      <View style={styles.switchItem}>
        <Text>切换网络图片Inset: </Text>
        <Switch
          thumbColor={currentCapInset2 === initInset ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={onChangeInset2}
          value={JSON.stringify(currentCapInset2) === initInset ? true : false}
        />
      </View>
      <View style={styles.instruction}>
        <Text>开关关闭: top: 15, right: 20, bottom: 15, left: 20</Text>
        <Text>开关打开: top: 2, right: 5, bottom: 2, left: 5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: '100%',
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginTop: 15,
  },
  switchItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  instruction: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default YourImage;
