import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { red100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export function CheckboxItem() {
    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checkedDisabled, setcheckedDisabled] = useState(false)

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    const toggleCheckbox2 = () => {
        setChecked2(!checked2);
    };

    return (
        <Tester>
            <ScrollView>
                <TestSuite name='Checkbox.Item'>
                    <TestCase itShould='点击可以切换，长按也可以切换'>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
                            <Checkbox.Item
                                label='Item1'
                                status={checked ? 'checked' : 'unchecked'}
                                //onPress组件的回调函数
                                onPress={toggleCheckbox}
                                //onLongPress 长按时候的回调函数，此时长按也可以切换
                                onLongPress={toggleCheckbox}
                                //组件未选择时候的颜色
                                uncheckedColor={'red'}
                                // color属性 组件选择时候的的颜色，也可以写在themem中
                                // color={'green'}
                                //theme里面可以直接写color属性，也是对选择颜色属性设置，此处展示color写在theme中的情况
                                theme={{
                                    colors: {
                                        primary: "green",
                                    }
                                }}

                                // 组件是否能被点击，默认为false，即可以点击
                                disabled={checkedDisabled}
                                // 设置 testID ,类似该组件的自定义ID
                                testID="my-checkbox"
                            />
                            <Text>{checked ? '已选择的颜色为绿色' : '未选择的颜色为红色'}</Text>
                        </View>
                        <Button onPress={() => setcheckedDisabled(true)} style={{ backgroundColor: 'red' }}>
                            点击按键，使选择框无法点击
                        </Button>
                        <Button onPress={() => setcheckedDisabled(false)} style={{ backgroundColor: 'green' }} >
                            点击按键，使选择框恢复点击
                        </Button>
                    </TestCase>
                </TestSuite>

                <TestCase itShould='status的第三种展示属性'>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
                        <Checkbox.Item
                            label='Item2'
                            status={'indeterminate'}
                            // 设置 testID ,类似该组件的自定义ID
                            testID="my-checkbox2"
                        />
                        <Text>这里只展示status的第三种属性配置</Text>
                    </View>
                </TestCase>


                <TestCase itShould='status的第三种展示属性'>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
                        <Checkbox.Item
                            label='Item3'
                            status={checked2 ? 'checked' : 'unchecked'}
                            onPress={toggleCheckbox2}
                            background={{
                                color: 'red',
                                borderless:true,
                                radius:0.1,
                                foreground:true
                            }}
                            // 设置 testID ,类似该组件的自定义ID
                            testID="my-checkbox3"
                        />
                        <Text>这里只展示status的第三种属性配置</Text>
                    </View>
                </TestCase>

            </ScrollView>
        </Tester>


    );
};

export default CheckboxItem;