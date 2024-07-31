import { useState, View } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

export default function AnimatableExample2() {
    const [textFontSize, setTextFontSize] = useState(10);
    const [changeBegin, setChangeBegin] = useState('还未开始');
    const [changeEnd, setChangeEnd] = useState('还未结束');

    return (
        <Tester>
            <TestSuite name="animatable">
                <TestCase
                    tags={['C_API']}
                    itShould="点击改变样式">
                        <Animatable.View style={{ padding: 50, backgroundColor: '#333333' }}>
                            <TouchableOpacity onPress={() => setTextFontSize(textFontSize + 5)}>
                                <Animatable.Text
                                    transition="fontSize"
                                    style={{ textAlign: 'center',  color: 'white', fontSize: textFontSize || 10 }}
                                    onTransitionBegin={() => { setChangeBegin('样式改变开始') }}
                                    onTransitionEnd={() => { setChangeEnd('样式改变结束') }}
                                >点击这里！</Animatable.Text>
                            </TouchableOpacity>
                            <Animatable.Text
                                style={{ color: 'white', textAlign: 'center' }}
                            >监听样式改变开始：{changeBegin}</Animatable.Text>
                            <Animatable.Text
                                style={{ color: 'white', textAlign: 'center' }}
                            >监听样式改变结束：{changeEnd}</Animatable.Text>
                        </Animatable.View>
                </TestCase>
            </TestSuite>
        </Tester>
    )
}   