import ImageCapInset from '@react-native-oh-tpl/react-native-image-capinsets-next';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Switch, ScrollView } from 'react-native';
import { Tester, TestCase, TestSuite } from "@rnoh/testerino";

const YourImage = () => {
  const img1 = require('./img/capinset_bg.png');
  const img2 = require('./img/capinset_bg2.png');
  const img3 = 'https://img2.baidu.com/it/u=2814429148,2262424695&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422';
  const img4 = 'https://img0.baidu.com/it/u=2616823501,3205478532&fm=253&fmt=auto&app=138&f=JPEG?w=509&h=500';
  
  const initInset = JSON.stringify({top: 2, right: 5, bottom: 2, left: 5});
  const initInset2 = JSON.stringify({top: 15, right: 20, bottom: 15, left: 20});

  const [currentImg1, setCurrentImg1] = useState(img1);
  const [currentImg2, setCurrentImg2] = useState(img3);
  const [currentImg11, setCurrentImg11] = useState(img1);
  const [currentImg22, setCurrentImg22] = useState(img3);

  const [currentCapInset1, setCurrentCapInset1] = useState(JSON.parse(initInset));
  const [currentCapInset2, setCurrentCapInset2] = useState(JSON.parse(initInset));
  const [currentCapInset11, setCurrentCapInset11] = useState(JSON.parse(initInset));
  const [currentCapInset22, setCurrentCapInset22] = useState(JSON.parse(initInset));
  
  const onChangeUrl1 = () => {
    const url = currentImg1 === img1 ? img2 : img1;
    setCurrentImg1(url);
  };

  const onChangeUrl11 = () => {
    const url = currentImg11 === img1 ? img2 : img1;
    setCurrentImg11(url);
  };

  const onChangeUrl2 = () => {
    const url = currentImg2 === img3 ? img4 : img3;
    setCurrentImg2(url);
  };

  const onChangeUrl22 = () => {
    const url = currentImg22 === img3 ? img4 : img3;
    setCurrentImg22(url);
  };

  const onChangeInset1 = () => {
    const inset =
      JSON.stringify(currentCapInset1) === initInset ? initInset2 : initInset;
    setCurrentCapInset1(JSON.parse(inset));
  };

  const onChangeInset11 = () => {
    const inset =
      JSON.stringify(currentCapInset11) === initInset ? initInset2 : initInset;
    setCurrentCapInset11(JSON.parse(inset));
  };

  const onChangeInset2 = () => {
    const inset =
      JSON.stringify(currentCapInset2) === initInset ? initInset2 : initInset;
    setCurrentCapInset2(JSON.parse(inset));
  };

  const onChangeInset22 = () => {
    const inset =
      JSON.stringify(currentCapInset22) === initInset ? initInset2 : initInset;
    setCurrentCapInset22(JSON.parse(inset));
  };

  return (
    <ScrollView>
    <Tester>
      <TestSuite name="react native image capinsets next">
        <TestCase itShould="load locale picture 01: toggle the property Source with capinset {top: 2, right: 5, bottom: 2, left: 5}">
            <View style={styles.container}>
              <ImageCapInset
                style={styles.imgStyle}
                source={currentImg1}
                capInsets={JSON.parse(initInset)}>
              </ImageCapInset>
              <View style={styles.switchItem}>
                <Text>切换本地图片source: </Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={currentImg1 === img1 ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={onChangeUrl1}
                  value={currentImg1 === img1 ? true : false}
                />
              </View>
            </View>
          </TestCase>
          
          <TestCase itShould="load locale picture 02: toggle the property Source with capinset {top: 15, right: 20, bottom: 15, left: 20}">
            <View style={styles.container}>
              <ImageCapInset
                style={styles.imgStyle}
                source={currentImg11}
                capInsets={JSON.parse(initInset2)}>
              </ImageCapInset>
              <View style={styles.switchItem}>
                <Text>切换本地图片source: </Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={currentImg11 === img1 ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={onChangeUrl11}
                  value={currentImg11 === img1 ? true : false}
                />
              </View>
            </View>
          </TestCase>
          
          <TestCase itShould="load locale picture 03: toggle the property CapInset">
            <View style={styles.container}>
              <ImageCapInset
                style={styles.imgStyle}
                source={img1}
                capInsets={currentCapInset1}>
              </ImageCapInset>
              <View style={styles.switchItem}>
                <Text>切换本地图片capinset: </Text>
                <Switch
                  thumbColor={currentCapInset1 === initInset ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={onChangeInset1}
                  value={JSON.stringify(currentCapInset1) === initInset ? true : false}
                />
              </View>
              <View style={styles.instruction}>
                  <Text>开关关闭capinset值: top: 15, right: 20, bottom: 15, left: 20</Text>
                  <Text>开关打开capinset值: top: 2, right: 5, bottom: 2, left: 5</Text>
              </View>
            </View>
          </TestCase>
          
          <TestCase itShould="load locale picture 04: toggle the property CapInset">
            <View style={styles.container}>
              <ImageCapInset
                style={styles.imgStyle}
                source={img2}
                capInsets={currentCapInset11}>
              </ImageCapInset>
              <View style={styles.switchItem}>
                <Text>切换本地图片capinset: </Text>
                <Switch
                  thumbColor={currentCapInset11 === initInset ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={onChangeInset11}
                  value={JSON.stringify(currentCapInset11) === initInset ? true : false}
                />
              </View>
              <View style={styles.instruction}>
                  <Text>开关关闭capinset值: top: 15, right: 20, bottom: 15, left: 20</Text>
                  <Text>开关打开capinset值: top: 2, right: 5, bottom: 2, left: 5</Text>
              </View>
            </View>
          </TestCase>
          
          <TestCase itShould="load network picture 05: toggle property Source with capinset {top: 2, right: 5, bottom: 2, left: 5}">
            <View style={styles.container}>
              <ImageCapInset
                style={styles.imgStyle}
                source={{uri: currentImg2}}
                capInsets={JSON.parse(initInset)}>
              </ImageCapInset>
              <View style={styles.switchItem}>
                <Text>切换网络图片source: </Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={currentImg2 === img3 ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={onChangeUrl2}
                  value={currentImg2 === img3 ? true : false}
                />
              </View>
          </View>
        </TestCase>
        
        <TestCase itShould="load network picture 06: toggle property Source with capinset {top: 15, right: 20, bottom: 15, left: 20}">
            <View style={styles.container}>
              <ImageCapInset
                style={styles.imgStyle}
                source={{uri: currentImg22}}
                capInsets={JSON.parse(initInset2)}>
              </ImageCapInset>
              <View style={styles.switchItem}>
                <Text>切换网络图片source: </Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={currentImg22 === img3 ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={onChangeUrl22}
                  value={currentImg22 === img3 ? true : false}
                />
              </View>
          </View>
        </TestCase>
        
        <TestCase itShould="load network picture 07: toggle property Capinset">
            <View style={styles.container}>
              <ImageCapInset
                style={styles.imgStyle}
                source={{uri: img3}}
                capInsets={currentCapInset2}>
              </ImageCapInset>
              <View style={styles.switchItem}>
                <Text>切换网络图片capinset: </Text>
                <Switch
                  thumbColor={currentCapInset2 === initInset ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={onChangeInset2}
                  value={JSON.stringify(currentCapInset2) === initInset ? true : false}
                />
              </View>
              <View style={styles.instruction}>
                <Text>开关关闭capinset值: top: 15, right: 20, bottom: 15, left: 20</Text>
                <Text>开关打开capinset值: top: 2, right: 5, bottom: 2, left: 5</Text>
              </View>
          </View>
        </TestCase>
        
        <TestCase itShould="load network picture 08: toggle property Capinset">
            <View style={styles.container}>
              <ImageCapInset
                style={styles.imgStyle}
                source={{uri: img4}}
                capInsets={currentCapInset22}>
              </ImageCapInset>
              <View style={styles.switchItem}>
                <Text>切换网络图片capinset: </Text>
                <Switch
                  thumbColor={currentCapInset22 === initInset ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={onChangeInset22}
                  value={JSON.stringify(currentCapInset22) === initInset ? true : false}
                />
              </View>
              <View style={styles.instruction}>
                <Text>开关关闭capinset值: top: 15, right: 20, bottom: 15, left: 20</Text>
                <Text>开关打开capinset值: top: 2, right: 5, bottom: 2, left: 5</Text>
              </View>
          </View>
        </TestCase>
      </TestSuite>
  </Tester>
  </ScrollView>
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
