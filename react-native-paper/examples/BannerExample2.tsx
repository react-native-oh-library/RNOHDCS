import * as React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    Animated
} from 'react-native';

import {
    Banner, Button, MD2Colors,
} from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { useState, useEffect } from 'react';


export function BannerTest() {
    const [visible, setVisible] = React.useState(true);

    const [elevationSize, setElevationSize] = useState<any>(0);

    const handleShowAnimationFinished = () => {
        console.log('Banner animation finished!');
        // 这里可以执行其他操作
      };

    const elevation = new Animated.Value(0); // 初始值为 0
    useEffect(() => {
        // 动画效果：从 0 到 10
        Animated.timing(elevation, {
            toValue: 10,
            duration: 500,
            useNativeDriver: false, // elevation 不能使用原生驱动
        }).start();
    }, []);

    return (
        <ScrollView>
            <Tester>
                <TestSuite name='Banner' >
                    <TestCase itShould={'elevation属性表示对应高度,分为0-5,0表示和背景齐平,这是会显示底色,这时候会显示底色,如果为5表示展示在背景上,即为白色'} >

                        <Animated.View
                            style={{
                                elevation: elevation, // 使用 Animated.Value
                                backgroundColor: '#ADD8E6',
                                padding: 10,
                            }}
                        >
                            <Banner
                                visible={true}
                                //elevation属性表示对应高度，分为0-5,0表示和背景齐平，这是会显示底色，这时候会显示底色，如果为5表示展示在背景上，即为白色
                                elevation={elevationSize}
                                //maxFontSizeMultiplier控制字体的最大大小比例，这里设置为0.1
                                maxFontSizeMultiplier={0.1}
                                onShowAnimationFinished={handleShowAnimationFinished} // 设置回调
                                actions={[
                                    {
                                        label: 'elevation = 5',
                                        onPress: () => setElevationSize(5),
                                    },
                                    {
                                        label: 'elevation = 0',
                                        onPress: () => setElevationSize(0),
                                    },
                                ]}
                                contentStyle={{ backgroundColor: 'transparent', padding: 0 }}
                            >
                            这里有字！！！！！！
                            </Banner>
                        </Animated.View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    )
}

export default BannerTest;
