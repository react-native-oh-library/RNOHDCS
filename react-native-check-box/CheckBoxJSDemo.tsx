import React, { useState } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import CheckBox from 'react-native-check-box';

//data的类型
type dataType = {
  name: string,
  checked: boolean,
}

export default function CheckBoxTest() {
  const [data, setData] = useState<dataType>({
    name: "TEST",
    checked: true
  });
  const changeState = (data: dataType) => {
    data.checked = !data.checked;
    setData({
      name: "TEST",
      checked: data.checked
    });
  };

  return (
    <View>
      <ScrollView>
        <Tester>
          <TestCase itShould="test checkbox click function" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
              />
            </View>
          </TestCase>
          <TestCase itShould="set checkBox backgroundColor to red" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10, backgroundColor: 'red' }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
              />
            </View>
          </TestCase>
          <TestCase itShould="set left text and set text color to red" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                leftText={data.name} //左侧文本
                leftTextStyle={{ fontSize: 20, fontWeight: '700', color: 'red' }} //左侧文本样式
              />
            </View>
          </TestCase>
          <TestCase itShould="set rightTextView" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                rightTextView={<Text style={{ fontSize: 20, fontWeight: '700', color: 'yellow' }}>测试</Text>}
              />
            </View>
          </TestCase>
          <TestCase itShould="set right text and set text color to blue" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                rightText={data.name} //右侧文本
                rightTextStyle={{ fontSize: 20, fontWeight: '700', color: 'blue' }} //右侧文本样式
              />
            </View>
          </TestCase>
          <TestCase itShould="set custom checkedImage and uncheckedImage" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                rightText={data.name} //右侧文本
                rightTextStyle={{ fontSize: 20, fontWeight: '700', color: 'blue' }} //右侧文本样式
                checkedImage={
                  <Image
                    source={require('../assets/react-native-check-box-checkedImage.png')}
                  ></Image>
                } //设置选中图片
                unCheckedImage={
                  <Image
                    source={require('../assets/react-native-check-box-uncheckedImage.png')}
                  ></Image>
                } //设置未选中图片
              />
            </View>
          </TestCase>
          <TestCase itShould="set checkbox disabled" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                rightText={data.name} //右侧文本
                rightTextStyle={{ fontSize: 20, fontWeight: '700', color: 'blue' }} //右侧文本样式
                disabled={true}
              />
            </View>
          </TestCase>
          <TestCase itShould="set color of the checkbox image to yellow" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                leftText={data.name} //左侧文本
                leftTextStyle={{ fontSize: 20, fontWeight: '700' }} //左侧文本样式
                checkBoxColor='yellow' //设置复选框颜色
              />
            </View>
          </TestCase>
          <TestCase itShould="set checked checkbox color to red and unchecked checkbox color to blue" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                leftText={data.name} //左侧文本
                leftTextStyle={{ fontSize: 20, fontWeight: '700' }} //左侧文本样式
                checkedCheckBoxColor='red' //设置选中状态下复选框颜色，checkBoxColor这个属性会失效
                uncheckedCheckBoxColor='blue'//设置未选中状态下复选框颜色，checkBoxColor这个属性会失效
              />
            </View>
          </TestCase>
        </Tester>
      </ScrollView>
    </View>
  );
}

