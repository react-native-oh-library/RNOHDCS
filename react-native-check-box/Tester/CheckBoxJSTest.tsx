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
  const [flag, setFlag] = useState<boolean>(false);
  const changeFlag = (data: boolean) => {
    setFlag(data);
  };
  const [flag1, setFlag1] = useState<boolean>(false);
  const changeFlag1 = (data: boolean) => {
    setFlag1(data);

  };
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
          <TestCase itShould="test checkbox click function" initialState={false} arrange={
            ({ setState }) => {
              return (
                <View style={{ height: 40 }}>
                  <CheckBox
                    onClick={
                      () => {
                        changeFlag1(true)
                        setState(true)
                      }}
                    isChecked={flag1}
                  />
                </View>
              )
            }
          }
            assert={({ expect, state }) => {
              expect(state).to.be.true;
            }}
          >
          </TestCase>
          <TestCase itShould="test checkbox is checked" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                onClick={() => { changeFlag(!flag) }}
                isChecked={flag} //复选框选中的状态
              />
            </View>
          </TestCase>
          <TestCase itShould="test checkbox is not checked" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                onClick={() => { changeFlag(!flag) }}
                isChecked={!flag} //复选框选中的状态
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
          <TestCase itShould="set checkBox backgroundColor to yellow" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10, backgroundColor: 'yellow' }} //设置复选框的样式
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
          <TestCase itShould="set left text and set text color to yellow" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                leftText={data.name} //左侧文本
                leftTextStyle={{ fontSize: 20, fontWeight: '700', color: 'yellow' }} //左侧文本样式
              />
            </View>
          </TestCase>
          <TestCase itShould="set rightTextView and text color is red" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                rightTextView={<Text style={{ fontSize: 20, fontWeight: '700', color: 'red' }}>测试</Text>}
              />
            </View>
          </TestCase>
          <TestCase itShould="set rightTextView and text color is yellow" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                rightTextView={<Text style={{ fontSize: 20, fontWeight: '700', color: 'yellow' }}>测试</Text>}
              />
            </View>
          </TestCase>
          <TestCase itShould="set right text and set text color to red" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                rightText={data.name} //右侧文本
                rightTextStyle={{ fontSize: 20, fontWeight: '700', color: 'red' }} //右侧文本样式
              />
            </View>
          </TestCase>
          <TestCase itShould="set right text and set text color to yellow" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                rightText={data.name} //右侧文本
                rightTextStyle={{ fontSize: 20, fontWeight: '700', color: 'yellow' }} //右侧文本样式
              />
            </View>
          </TestCase>
          <TestCase itShould="set custom checkedImage" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                checkedImage={
                  <Image
                  source={require('../assets/react-native-check-box-checkedImage.png')}
                  ></Image>
                } //设置选中图片
              />
            </View>
          </TestCase>
          <TestCase itShould="set custom uncheckedImage" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
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
                disabled={true}
              />
            </View>
          </TestCase>
          <TestCase itShould="set checkbox abled" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                disabled={false}
              />
            </View>
          </TestCase>
          <TestCase itShould="set color of the checkbox image to red" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
                checkBoxColor='red' //设置复选框颜色
              />
            </View>
          </TestCase>
          <TestCase itShould="set color of the checkbox image to yellow" tags={['C_API']}>
            <View style={{ height: 40 }}>
              <CheckBox
                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                onClick={() => changeState(data)} //点击复选框的回调函数
                isChecked={data.checked} //复选框选中的状态
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

