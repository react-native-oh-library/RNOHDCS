import React, { useState } from "react";
import { Switch } from "react-native-switch";
import { Tester, TestCase } from '@rnoh/testerino';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function SwitchDemo() {
    const [result, setReault] = useState('')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = (val: boolean) => { setIsEnabled(val) };
    // 渲染开关内部的圆形部分
    const renderInsideCircle = () => {
        return (
            <View style={styles.circleContent}>
                <Text style={styles.circleText}>{isEnabled ? '✓' : 'X'}</Text>
            </View>
        );
    };

    const onValueChange = (val: boolean) => {
        setIsEnabled(val)
        setReault('onValueChange触发')
    }

    return (
        <ScrollView>
            <Tester>
                <View style={styles.inputArea}>
                    <Text style={styles.baseText}>
                        {result}
                    </Text>
                </View>
                <View style={styles.container}>
                    <TestCase itShould="onValueChange:onValueChange开关改变时触发" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={isEnabled}
                                onValueChange={onValueChange}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="disabled:true" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={false}
                                disabled={true}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="disabled:false" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                disabled={false}
                                value={isEnabled}
                                onValueChange={toggleSwitch}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="value:true-打开开关" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={true}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="value:false-关闭开关" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={false}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="activeText: On" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={true}
                                activeText={'On'}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="activeText: 开" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={true}
                                activeText={'开'}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="inActiveText: Off" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={false}
                                inActiveText={'Off'}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="inActiveText: 关" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={false}
                                inActiveText={'关'}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="backgroundActive: 开启的颜色为绿色" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={true}
                                inActiveText={'Off'}
                                backgroundActive={'green'}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="backgroundActive: 开启的颜色为红色" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={true}
                                inActiveText={'关'}
                                backgroundActive={'red'}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="backgroundInactive: 关闭的颜色为蓝色" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={false}
                                inActiveText={'Off'}
                                backgroundInactive={'blue'}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="backgroundInactive: 关闭的颜色为粉色" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={false}
                                inActiveText={'关'}
                                backgroundInactive={'pink'}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="circleActiveColor: 开启时圆的颜色为黑色" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={true}
                                circleActiveColor={'black'}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="circleActiveColor: 开启时圆的颜色为橙色" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={true}
                                circleActiveColor={'orange'}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="circleInActiveColor: 关闭时圆的颜色为青色" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={false}
                                circleInActiveColor={'cyan'}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="circleInActiveColor: 关闭时圆的颜色为紫色" tags={['C_API']} >
                        <View style={{ height: 'auto' }}>
                            <Switch
                                value={false}
                                circleInActiveColor={'purple'}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="circleSize: 开关的大小为30" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                circleInActiveColor={'cyan'}
                                circleSize={30}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="circleSize: 开关的大小为40" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Switch
                                value={false}
                                circleInActiveColor={'purple'}
                                circleSize={40}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="circleBorderWidth: 圆的边框大小为5" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                circleBorderWidth={5}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="circleBorderWidth: 圆的边框大小为8" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                circleBorderWidth={8}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="circleBorderactiveColor: 开关打开时圆里面的背景色为粉色" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                circleBorderWidth={3}
                                circleBorderActiveColor={'pink'}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="circleBorderactiveColor: 开关打开时圆里面的背景色为蓝色" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                circleBorderWidth={3}
                                circleBorderActiveColor={'blue'}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="circleBorderInactiveColor: 开关关闭时圆里面的背景色为红色" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                circleBorderWidth={6}
                                circleBorderInactiveColor={'red'}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="circleBorderInactiveColor: 开关打开时圆里面的背景色为绿色" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                circleBorderWidth={4}
                                circleBorderInactiveColor={'green'}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="activeTextStyle: 开关打开时文字的背景色为红色,字体大小为16" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                activeText={'On'}
                                activeTextStyle={{ backgroundColor: 'red', fontSize: 16 }}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="activeTextStyle: 开关打开时文字的背景色为粉色,字体大小为20" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                activeText={'On'}
                                activeTextStyle={{ backgroundColor: 'pink', fontSize: 20 }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="inactiveTextStyle: 开关关闭时文字的背景色为蓝色,字体大小为18" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                activeText={'Off'}
                                inactiveTextStyle={{ backgroundColor: 'blue', fontSize: 18 }}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="inactiveTextStyle: 开关关闭时文字的背景色为绿色,字体加粗" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                activeText={'Off'}
                                inactiveTextStyle={{ backgroundColor: 'green', fontWeight: 'bold' }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="containerStyle: 设置开关容器的样式" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                containerStyle={{ shadowOffset: { width: 0, height: 5 }, shadowColor: 'pink', shadowOpacity: 0.8, shadowRadius: 4 }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="barHeight: 设置条形高度为40" tags={['C_API']} >
                        <View style={{ height: 40 }}>
                            <Switch
                                value={true}
                                barHeight={40}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="barHeight: 设置条形高度为20" tags={['C_API']} >
                        <View style={{ height: 20 }}>
                            <Switch
                                value={true}
                                barHeight={20}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="renderInsideCircle: 自定义开关内部圆形部分的渲染" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={isEnabled}
                                onValueChange={toggleSwitch}
                                renderInsideCircle={renderInsideCircle}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="changeValueImmediately: 允许在切换开关时立即更新状态,而不需要等待动画完成(true)" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={isEnabled}
                                onValueChange={toggleSwitch}   // 状态改变时调用的回调
                                changeValueImmediately={true}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="changeValueImmediately: 允许在切换开关时立即更新状态,而不需要等待动画完成(false)" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={isEnabled}
                                onValueChange={toggleSwitch}   // 状态改变时调用的回调
                                changeValueImmediately={false}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="innerCircleStyle:backgroundColor:'red',width:20,height:20" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                innerCircleStyle={{ backgroundColor: 'red', width: 20, height: 20 }}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="innerCircleStyle:backgroundColor:'pink',borderRadius:10" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                innerCircleStyle={{ backgroundColor: 'pink', borderRadius: 10 }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="outerCircleStyle:width:40,borderRadius:10" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                outerCircleStyle={{ backgroundColor: 'blue', width: 40, borderRadius: 10 }}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="outerCircleStyle:backgroundColor:'pink',shadowColor:'red',borderRadius:8,shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                outerCircleStyle={{ backgroundColor: 'pink', shadowColor: 'red', borderRadius: 8, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4 }}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="renderActiveText:渲染开关开启时的文字" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                renderActiveText={true}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="renderActiveText:不渲染开关开启时的文字" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                renderActiveText={false}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="renderInActiveText:渲染开关关闭时的文字" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                renderInActiveText={true}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="renderInActiveText:不渲染开关关闭时的文字" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                renderInActiveText={false}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="switchLeftPx:控制开关的圆圈距离左边的偏移量为5" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                switchLeftPx={5}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="switchLeftPx:控制开关的圆圈距离左边的偏移量为2" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                switchLeftPx={2}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="switchRightPx:控制开关的圆圈距离右边的偏移量为3" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                switchRightPx={3}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="switchRightPx:控制开关的圆圈距离右边的偏移量为10" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={false}
                                switchRightPx={10}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="switchWidthMultiplier:整个开关的宽度为4" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                switchWidthMultiplier={4}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="switchWidthMultiplier:整个开关的宽度为8" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                switchWidthMultiplier={8}
                            />
                        </View>
                    </TestCase>

                    <TestCase itShould="switchBorderRadius:整个开关倒角的大小为4" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                switchBorderRadius={4}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="switchBorderRadius:整个开关倒角的大小为8" tags={['C_API']} >
                        <View style={{ height: 30 }}>
                            <Switch
                                value={true}
                                switchBorderRadius={8}
                            />
                        </View>
                    </TestCase>
                </View>
            </Tester>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    inputArea: {
        width: '100%',
        height: 50,
        marginTop: 30,
        backgroundColor: "white"
    },
    baseText: {
        width: '100%',
        height: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14
    },
    circleContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        backgroundColor: '#ff6347',  // 内部圆形的背景颜色
        borderRadius: 10,             // 使其为圆形
    },
    circleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
});