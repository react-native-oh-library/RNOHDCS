/**
 *
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';
import CheckBox from 'react-native-check-box';
import keys from './keys.json';
import {Indata} from './CheckBox';
import type {dataType} from './CheckBox';
function example() {
  const [dataArray, setDataArray] = useState<dataType>([]);
  useEffect(() => {
    setDataArray(keys);
  }, []);
  const onClick1 = (data: Indata) => {
    data.checked = !data.checked;
    setDataArray([...dataArray]);
  };
  //基本使用，设置左边文本样式
  const RenderView = () => {
    if (!dataArray || dataArray.length === 0) return; //判断数组中是否为空，如果为空直接返回
    const views = dataArray.map(item => (
      <View key={item.name}>
        <View style={styles.item}>
          <CheckBox
            style={{flex: 1, padding: 10}} //设置复选框的样式
            onClick={() => onClick1(item)} //点击复选框的回调函数
            isChecked={item.checked} //复选框选中的状态
            leftText={item.name} //左侧文本
            leftTextStyle={{fontSize: 20, fontWeight: '700'}} //左侧文本样式
          />
        </View>
        <View style={styles.line}></View>
      </View>
    ));
    return views;
  };
  //使用右侧文本，设置右侧文本样式
  const RenderViewRight = () => {
    if (!dataArray || dataArray.length === 0) return; //判断数组中是否为空，如果为空直接返回
    const viewsRight = dataArray.map(item => (
      <View key={item.name}>
        <View style={styles.item}>
          <CheckBox
            style={{flex: 1, padding: 10}} //设置复选框的样式
            onClick={() => onClick1(item)} //点击复选框的回调函数
            isChecked={item.checked} //复选框选中的状态
            rightText={item.name} //右侧文本
            rightTextStyle={{fontSize: 20, fontWeight: '700'}} //右侧文本样式
          />
        </View>
        <View style={styles.line}></View>
      </View>
    ));
    return viewsRight;
  };
  //设置复选框颜色
  const RenderViewColor = () => {
    if (!dataArray || dataArray.length === 0) return; //判断数组中是否为空，如果为空直接返回
    const viewsColor = dataArray.map(item => (
      <View key={item.name}>
        <View style={styles.item}>
          <CheckBox
            style={{flex: 1, padding: 10}} //设置复选框的样式
            onClick={() => onClick1(item)} //点击复选框的回调函数
            isChecked={item.checked} //复选框选中的状态
            leftText={item.name} //左侧文本
            leftTextStyle={{fontSize: 20, fontWeight: '700'}} //设置左侧文本样式
            checkBoxColor="red" //设置复选框颜色
          />
        </View>
        <View style={styles.line}></View>
      </View>
    ));
    return viewsColor;
  };
  //设置禁用复选框
  const RenderViewDisabled = () => {
    if (!dataArray || dataArray.length === 0) return; //判断数组中是否为空，如果为空直接返回
    const viewsDisabled = dataArray.map(item => (
      <View key={item.name}>
        <View style={styles.item}>
          <CheckBox
            style={{flex: 1, padding: 10}} //设置复选框的样式
            onClick={() => onClick1(item)} //点击复选框的回调函数
            isChecked={item.checked} //复选框选中的状态
            leftText={item.name} //左侧文本
            leftTextStyle={{fontSize: 20, fontWeight: '700'}} //设置左侧文本样式
            checkBoxColor="red" //设置复选框颜色
            disabled={true} //设置复选框是否禁用，true为禁用，false为不禁用，默认为false
          />
        </View>
        <View style={styles.line}></View>
      </View>
    ));
    return viewsDisabled;
  };
  //设置自定义复选框图片
  const RenderViewImage = () => {
    if (!dataArray || dataArray.length === 0) return; //判断数组中是否为空，如果为空直接返回
    const viewsImage = dataArray.map(item => (
      <View key={item.name}>
        <View style={styles.item}>
          <CheckBox
            style={{flex: 1, padding: 10}} //设置复选框的样式
            onClick={() => onClick1(item)} //点击复选框的回调函数
            isChecked={item.checked} //复选框选中的状态
            leftText={item.name} //左侧文本
            leftTextStyle={{fontSize: 20, fontWeight: '700'}} //设置左侧文本样式
            checkBoxColor="red" //设置复选框颜色
            checkedImage={
              <Image
                source={require('./img/check-box-Image.png')}
                ></Image>
            } //设置选中图片
            unCheckedImage={
              <Image
                source={require('./img/uncheck-box-Image.png')}
              ></Image>
            } //设置未选中图片
          />
        </View>
        <View style={styles.line}></View>
      </View>
    ));
    return viewsImage;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleText}>基本使用，设置左边文本样式</Text>
        <RenderView />
        <Text style={styles.titleText}>使用右侧文本，设置右侧文本样式</Text>
        <RenderViewRight />
        <Text style={styles.titleText}>设置复选框颜色</Text>
        <RenderViewColor />
        <Text style={styles.titleText}>设置禁用复选框</Text>
        <RenderViewDisabled />
        <Text style={styles.titleText}>设置自定义复选框图片</Text>
        <RenderViewImage />
      </ScrollView>
    </View>
  );
}

//css样式
const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f2f2',
    marginTop: 30,
  },
  item: {
    flexDirection: 'row',
  },
  line: {
    flex: 1,
    height: 0.3,
    backgroundColor: 'darkgray',
  },
});
export default example;
