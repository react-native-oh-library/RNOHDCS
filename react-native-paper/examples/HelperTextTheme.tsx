import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, HelperText, TextInput, Text } from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';

const HelperTextTheme = () => {
    const [text, setText] = React.useState('');
    const [scaleNum, setscaleNum] = React.useState(0);
    const onChangeText = (text: React.SetStateAction<string>) => setText(text);

    const hasErrors = () => {
        return !text.includes('@');
    };

    return (
        <ScrollView>
            <Tester>
                <TestSuite name='HelperTextTheme' >
                    <TestCase itShould='控制error的动画.在输入框输入@，即可查看'>

                        <View>
                            <TextInput label="Email" value={text} onChangeText={onChangeText} />
                            <HelperText theme={{ animation: { scale: scaleNum } }} type="error" visible={hasErrors()}>
                                Email address is invalid!
                            </HelperText>
                            <Text>当前速度为:{scaleNum}</Text>
                        </View>

                        <Button onPress={() => setscaleNum(5)} style={{ backgroundColor: 'red' }}>
                            控制error信息消失的动画速度:5
                        </Button>

                        <Button onPress={() => setscaleNum(10)} style={{ backgroundColor: 'red' }} >
                            控制error信息消失的动画速度:10
                        </Button>

                        <Button onPress={() => setscaleNum(0)} style={{ backgroundColor: 'red' }}>
                            控制error信息消失的动画速度:0
                        </Button>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
};

export default HelperTextTheme;