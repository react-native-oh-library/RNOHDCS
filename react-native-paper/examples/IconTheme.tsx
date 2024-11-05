import * as React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button, Icon, MD3Colors } from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';


function IconTheme() {
    const [onSurfaceText, setonSurfaceText] = React.useState('black');

    return (
        <ScrollView>
            <Tester>
                <TestSuite name='Icon' >
                    <TestCase itShould='theme用来控制图标的颜色，默认为黑色'>
                        <View>
                            <Icon
                                theme={{
                                    colors: {
                                        onSurface: onSurfaceText,
                                    }
                                }}
                                source="camera"
                                size={60}
                            />
                        </View>
                        <Button onPress={() => setonSurfaceText('red')}>
                            切换成红色
                        </Button>
                        <Button onPress={() => setonSurfaceText('green')}>
                            切换成绿色
                        </Button>
                        <Button onPress={() => setonSurfaceText('rgb(220, 184, 255)')}>
                            切换成紫色
                        </Button>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
};

export default IconTheme;