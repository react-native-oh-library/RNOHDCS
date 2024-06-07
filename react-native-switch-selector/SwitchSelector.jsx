import SwitchSelector from "react-native-switch-selector";
import React, { useState } from 'react'
import { ScrollView, Text, View, StyleSheet, Button } from 'react-native'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

const SwitchSelectorDemo = () => {
    const [optionsValue, setoptionsValue] = useState('');
    const [value, setValue] = useState(1);
    const [disabled, setDisabled] = useState(false);
    const [returnObject, setReturnObject] = useState(false);
    const [label, setLabel] = useState('');
    const [switchDisabled, setSwitchDisabled] = useState(false);
    const options = [
        { label: "电影", value: "movie", imageIcon: require('./dianying.png'), activeColor: 'red' },
        { label: "地图", value: "map", imageIcon: require('./ditu.png') },
        { label: "地铁", value: "metro", customIcon: <Text style={{ fontSize: 24 }}>M</Text> }
    ];
    return (
        <Tester>
            <TestSuite name='SwitchSelector'>
                <ScrollView style={{height:'93%'}}>
                    <TestCase itShould='Example1' tags={['C_API']}>
                        <View style={styles.module}>
                            <Text style={styles.moduleContent}>验证以下属性:</Text>
                            <Text style={styles.moduleContent}>options[].label(标签名)</Text>
                            <Text style={styles.moduleContent}>options[].value(标签值)</Text>
                            <Text style={styles.moduleContent}>options[].customIcon(自定义图标)</Text>
                            <Text style={styles.moduleContent}>options[].imageIcon(图片图标)</Text>
                            <Text style={styles.moduleContent}>options[].activeColor(选中颜色)</Text>
                            <Text style={styles.moduleContent}>value(以标签值选定选项)</Text>
                            <Text style={styles.moduleContent}>initial(初始选择选择)</Text>
                            <Text style={styles.moduleContent}>onPress(选择标签事件)</Text>
                            <Text style={styles.moduleContent}>disableValueChangeOnPress(选择标签事件开关)</Text>
                            <SwitchSelector
                                options={options}
                                initial={1}
                                value={value}
                                onPress={value => {
                                    if (Object.prototype.toString.call(value) === '[object String]') {
                                        setoptionsValue(value)
                                    } else {
                                        setoptionsValue(value.value)
                                        setLabel(value.label)
                                    }
                                }}
                                disableValueChangeOnPress={disabled}
                                returnObject={returnObject}
                                disabled={switchDisabled}
                            />
                            <Text style={styles.moduleContent}>value值:{optionsValue}</Text>
                            <Text style={styles.moduleContent}>label值:{label}(仅开启returnObject时存在值)</Text>
                            <Button title='setValue(电影)' onPress={() => setValue(0)}></Button>
                            <Button title='setValue(地图)' onPress={() => setValue(1)}></Button>
                            <Button title='setValue(地铁)' onPress={() => setValue(2)}></Button>
                            <Button title='setDisableValueChangeOnPress(true)' onPress={() => setDisabled(true)}></Button>
                            <Button title='setDisableValueChangeOnPress(false)' onPress={() => setDisabled(false)}></Button>
                            <Button title='returnObject(true)' onPress={() => setReturnObject(true)}></Button>
                            <Button title='returnObject(false)' onPress={() => setReturnObject(false)}></Button>
                            <Button title='setSwitchDisabled(true)' onPress={() => setSwitchDisabled(true)}></Button>
                            <Button title='setSwitchDisabled(false)' onPress={() => setSwitchDisabled(false)}></Button>
                        </View>
                    </TestCase>
                    <TestCase itShould='Example2' tags={['C_API']}>
                        <View style={styles.module}>
                            <Text style={styles.moduleContent}>验证以下属性:</Text>
                            <Text style={styles.moduleContent}>fontSize(字体大小)</Text>
                            <Text style={styles.moduleContent}>selectedColor(选中字体颜色)</Text>
                            <Text style={styles.moduleContent}>buttonMargin(按钮外边距)</Text>
                            <Text style={styles.moduleContent}>buttonColor(按钮颜色)</Text>
                            <Text style={styles.moduleContent}>textColor(字体颜色)</Text>
                            <Text style={styles.moduleContent}>backgroundColor(整体背景颜色)</Text>
                            <SwitchSelector
                                options={options}
                                initial={0}
                                fontSize={22}
                                selectedColor={'#007cfd'}
                                buttonMargin={20}
                                buttonColor={'#00b050'}
                                textColor={'#e24c3d'}
                                backgroundColor={'#000'}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould='Example3' tags={['C_API']}>
                        <View style={styles.module}>
                            <Text style={styles.moduleContent}>验证以下属性:</Text>
                            <Text style={styles.moduleContent}>borderColor(边框颜色)</Text>
                            <Text style={styles.moduleContent}>borderWidth(边框宽度)</Text>
                            <Text style={styles.moduleContent}>borderRadius(边框角弧度)</Text>
                            <Text style={styles.moduleContent}>hasPadding(按钮与边框是否存在内边距)</Text>
                            <Text style={styles.moduleContent}>animationDuration(切换动画速率)</Text>
                            <Text style={styles.moduleContent}>valuePadding(按钮与边框内边距宽)</Text>
                            <Text style={styles.moduleContent}>height(整体高)</Text>
                            <Text style={styles.moduleContent}>bold(字体加粗)</Text>
                            <SwitchSelector
                                options={options}
                                initial={0}
                                borderColor={'#7a44cf'}
                                borderWidth={3}
                                borderRadius={5}
                                hasPadding
                                animationDuration={1000}
                                valuePadding={10}
                                height={80}
                                bold={true}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould='Example4' tags={['C_API']}>
                        <View style={styles.module}>
                            <Text style={styles.moduleContent}>验证以下属性:</Text>
                            <Text style={styles.moduleContent}>textStyle(未选中文字样式)</Text>
                            <Text style={styles.moduleContent}>selectedTextStyle(选中文字样式)</Text>
                            <Text style={styles.moduleContent}>textContainerStyle(未选中选项盒子样式)</Text>
                            <Text style={styles.moduleContent}>selectedTextContainerStyle(选中选项盒子样式)</Text>
                            <Text style={styles.moduleContent}>imageStyle(Icon样式)</Text>
                            <SwitchSelector
                                options={options}
                                initial={0}
                                textStyle={{ fontWeight: 900, fontSize: 14 }}
                                selectedTextStyle={{ fontStyle: 'italic' }}
                                textContainerStyle={{ backgroundColor: 'rgba(256,0,0,0.5)' }}
                                selectedTextContainerStyle={{ backgroundColor: 'rgb(0,0,256)' }}
                                imageStyle={{ backgroundColor: 'rgb(0,256,256)' }}
                                style={{ backgroundColor: 'black' }}
                            />
                        </View>
                    </TestCase>
                </ScrollView>
            </TestSuite>
        </Tester>
    )
}

const styles = StyleSheet.create({
    module: {
        margin: 15,
    },
    moduleName: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 4
    },
    moduleContent: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 4
    },
    moduleButton: {
        marginBottom: 4,
        backgroundColor: 'deepskyblue',
        height: 34,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
        lineHeight: 32,
        verticalAlign: 'middle'
    }
});

export default SwitchSelectorDemo;