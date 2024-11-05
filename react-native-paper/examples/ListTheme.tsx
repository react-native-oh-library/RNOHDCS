import * as React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, List, MD3Colors } from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';


export function ListTheme() {
    const [isV3Boolean, setisV3Boolean] = useState(false);
    const [isV3Boolean2, setisV3Boolean2] = useState(false);
    const [onSurfaceVariant, setOnSurfaceVariant] = useState('black');
    return (
        <ScrollView>
            <Tester>
                <TestSuite name='List.Icon' >
                    <TestCase itShould={'theme用来切换V3模式，默认为取消V3'} >
                        <List.Icon theme={{ isV3: isV3Boolean }} icon="folder" />
                    </TestCase>
                    <Button onPress={() => setisV3Boolean(true)}>
                        点击启动V3样式
                    </Button>
                    <Button onPress={() => setisV3Boolean(false)}>
                        点击关闭V3样式
                    </Button>
                </TestSuite>

                <TestSuite name='List.Item' >
                    <TestCase itShould={'theme用来切换V3模式，默认为取消V3。启动v3，color属性生效，有红色字体'} >
                        <List.Item
                            theme={{
                                //启动v3，下面colors生效
                                isV3: isV3Boolean2,
                                colors: {
                                    //修改颜色
                                    onSurface: 'red'
                                }
                            }}
                            title="First Item"
                            description="Item description"
                            left={props => <List.Icon {...props} icon="folder" />}
                        />
                    </TestCase>
                    <Button onPress={() => setisV3Boolean2(true)}>
                        点击启动V3样式
                    </Button>
                    <Button onPress={() => setisV3Boolean2(false)}>
                        点击关闭V3样式
                    </Button>
                </TestSuite>

                <TestSuite name='List.Subheader' >
                    <TestCase itShould={'theme用来切换颜色，默认为黑色'} >
                        <List.Subheader
                            theme={{
                                colors: {
                                    onSurfaceVariant: onSurfaceVariant
                                }
                            }
                            }>
                            My List Title
                        </List.Subheader>;
                    </TestCase>
                    <Button onPress={() => setOnSurfaceVariant('red')}>
                        切换成红色
                    </Button>
                    <Button onPress={() => setOnSurfaceVariant('green')}>
                        切换成绿色
                    </Button>
                </TestSuite>

            </Tester>
        </ScrollView>
    );
};

export default ListTheme;