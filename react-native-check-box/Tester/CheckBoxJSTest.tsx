import React, { useState } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';
import CheckBox from 'react-native-check-box';

export default function CheckBoxTest() {
    const [flag, setFlag] = useState<boolean>(false);
    const changeFlag = (data: boolean) => {
        setFlag(data);
    };
    const [flag1, setFlag1] = useState<boolean>(false);
    const [flag2, setFlag2] = useState<boolean>(false);
    const [flag3, setFlag3] = useState<boolean>(false);
    const [flag4, setFlag4] = useState<boolean>(false);
    const [flag5, setFlag5] = useState<boolean>(false);
    const [flag6, setFlag6] = useState<boolean>(false);
    const [flag7, setFlag7] = useState<boolean>(false);
    const [flag8, setFlag8] = useState<boolean>(false);
    const [flag9, setFlag9] = useState<boolean>(false);
    const [flag10, setFlag10] = useState<boolean>(false);
    const [flag11, setFlag11] = useState<boolean>(false);
    const [flag12, setFlag12] = useState<boolean>(false);
    const [flag13, setFlag13] = useState<boolean>(false);
    const [flag14, setFlag14] = useState<boolean>(false);
    const [flag15, setFlag15] = useState<boolean>(false);
    const [flag16, setFlag16] = useState<boolean>(false);

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
                                                setFlag1(true)
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
                                onClick={() => setFlag2(!flag2)} //点击复选框的回调函数
                                isChecked={flag2} //复选框选中的状态
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set checkBox backgroundColor to yellow" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10, backgroundColor: 'yellow' }} //设置复选框的样式
                                onClick={() => setFlag3(!flag3)} //点击复选框的回调函数
                                isChecked={flag3} //复选框选中的状态
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set left text and set text color to red" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag4(!flag4)} //点击复选框的回调函数
                                isChecked={flag4} //复选框选中的状态
                                leftText={"Test"} //左侧文本
                                leftTextStyle={{ fontSize: 20, fontWeight: '700', color: 'red' }} //左侧文本样式
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set left text and set text color to yellow" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag5(!flag5)} //点击复选框的回调函数
                                isChecked={flag5} //复选框选中的状态
                                leftText={"测试"} //左侧文本
                                leftTextStyle={{ fontSize: 20, fontWeight: '700', color: 'yellow' }} //左侧文本样式
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set rightTextView and text color is red" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag6(!flag6)} //点击复选框的回调函数
                                isChecked={flag6} //复选框选中的状态
                                rightTextView={<Text style={{ fontSize: 20, fontWeight: '700', color: 'red' }}>Test</Text>}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set rightTextView and text color is yellow" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag7(!flag7)} //点击复选框的回调函数
                                isChecked={flag7} //复选框选中的状态
                                rightTextView={<Text style={{ fontSize: 20, fontWeight: '700', color: 'yellow' }}>测试</Text>}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set right text and set text color to red" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag8(!flag8)} //点击复选框的回调函数
                                isChecked={flag8} //复选框选中的状态
                                rightText={"Test"} //右侧文本
                                rightTextStyle={{ fontSize: 20, fontWeight: '700', color: 'red' }} //右侧文本样式
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set right text and set text color to yellow" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag9(!flag9)} //点击复选框的回调函数
                                isChecked={flag9} //复选框选中的状态
                                rightText={"测试"} //右侧文本
                                rightTextStyle={{ fontSize: 20, fontWeight: '700', color: 'yellow' }} //右侧文本样式
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set custom checkedImage" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag10(!flag10)} //点击复选框的回调函数
                                isChecked={flag10} //复选框选中的状态
                                checkedImage={
                                    <Image
                                        source={require('./assets/react-native-check-box-checkedImage.png')}
                                    ></Image>
                                } //设置选中图片
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set custom uncheckedImage" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag11(!flag11)} //点击复选框的回调函数
                                isChecked={flag11} //复选框选中的状态
                                unCheckedImage={
                                    <Image
                                        source={require('./assets/react-native-check-box-uncheckedImage.png')}
                                    ></Image>
                                } //设置未选中图片
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set checkbox disabled" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag12(!flag12)} //点击复选框的回调函数
                                isChecked={flag12} //复选框选中的状态
                                disabled={true}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set checkbox abled" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag12(!flag12)} //点击复选框的回调函数
                                isChecked={flag12} //复选框选中的状态
                                disabled={false}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set color of the checkbox image to red" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag13(!flag13)} //点击复选框的回调函数
                                isChecked={flag13} //复选框选中的状态
                                checkBoxColor='red' //设置复选框颜色
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set color of the checkbox image to yellow" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag14(!flag14)} //点击复选框的回调函数
                                isChecked={flag14} //复选框选中的状态
                                checkBoxColor='yellow' //设置复选框颜色
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set checked checkbox color to red and unchecked checkbox color to blue" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag15(!flag15)} //点击复选框的回调函数
                                isChecked={flag15} //复选框选中的状态
                                checkedCheckBoxColor='red' //设置选中状态下复选框颜色，checkBoxColor这个属性会失效
                                uncheckedCheckBoxColor='blue'//设置未选中状态下复选框颜色，checkBoxColor这个属性会失效
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="set checked checkbox color to yellow and unchecked checkbox color to green" tags={['C_API']}>
                        <View style={{ height: 40 }}>
                            <CheckBox
                                style={{ flex: 1, padding: 10 }} //设置复选框的样式
                                onClick={() => setFlag16(!flag16)} //点击复选框的回调函数
                                isChecked={flag16} //复选框选中的状态
                                checkedCheckBoxColor='yellow' //设置选中状态下复选框颜色，checkBoxColor这个属性会失效
                                uncheckedCheckBoxColor='green'//设置未选中状态下复选框颜色，checkBoxColor这个属性会失效
                            />
                        </View>
                    </TestCase>
                </Tester>
            </ScrollView>
        </View>
    );
}

