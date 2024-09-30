import React from 'react';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    SafeAreaView,
    Text,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import MlkitOcr, { MlkitOcrResult } from 'react-native-mlkit-ocr';

const PALETTE = {
    REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
    REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
}

function Button({ label, onPress }: { onPress: () => void; label: string }) {
    return (
        <TouchableHighlight
            underlayColor={PALETTE.REACT_CYAN_DARK}
            style={{
                paddingVertical: 4,
                paddingHorizontal: 12,
                backgroundColor: PALETTE.REACT_CYAN_LIGHT,
                borderWidth: 2,
                borderColor: PALETTE.REACT_CYAN_DARK,
                height: 26,
            }}
            onPress={onPress}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>
                {label}
            </Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scroll: {
        flex: 1,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 2,
        height: '70%',
    },
});

const OcrTest = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [result, setResult] = React.useState<MlkitOcrResult | undefined>();
    const [changeType, setChangeType] = React.useState<number>(0)

    const netImageUri: string = 'https://res.vmallres.com//uomcdn/CN/pms/202407/E3B48F7290631FAF341FDB09CF907F03.jpg';

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator />
            </SafeAreaView>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <Tester style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>

                        <View>
                            {changeType !== 0 && <View>
                                <Text style={{ color: '#00ff00', fontSize: 14 }}>原图如下：</Text>
                                {changeType === 1 && <Image style={{ width: 'auto', height: 200 }} resizeMode={'contain'} source={{ uri: netImageUri }}></Image>}
                                {changeType === 2 && <Image style={{ width: 'auto', height: 200 }} resizeMode={'contain'} source={require('./assets/ocr_test.jpg')}></Image>}
                            </View>}
                            {Array.isArray(result) && result?.length && <Text style={{ color: '#00ff00', fontSize: 14 }}>识别图如下：</Text>}
                        </View>

                        {Array.isArray(result) && result?.length && (
                            <View
                                style={styles.scroll}
                            >
                                {result?.map((block) => {
                                    console.log("=================result>", JSON.stringify(result));
                                    console.log("=================block>", JSON.stringify(block));

                                    return block.lines.map((line) => {
                                        return (
                                            <View
                                                key={line.text}
                                                style={{
                                                    backgroundColor: '#ccccccaf',
                                                }}
                                            >
                                                <Text style={{ fontSize: 10 }}>{line.text}</Text>
                                            </View>
                                        );
                                    });
                                })}
                            </View>
                        )}

                        <TestSuite name="react-native-mlkit-ocr">
                            <TestCase
                                key={1}
                                itShould={'call:detectFromUri 识别网络照片'}
                                tags={['C_API']}
                                initialState={false}
                                arrange={({ setState }) => {
                                    return (
                                        <View style={{ flex: 1 }}>
                                            <Button
                                                label="识别网络照片"
                                                onPress={() => {
                                                    MlkitOcr.detectFromUri(netImageUri).then(res => {
                                                        setTimeout(() => {
                                                            setResult(res)
                                                            setState(!!res)

                                                            console.log("================uri=res", JSON.stringify(res))
                                                        }, 1000)
                                                    }).catch(err => {
                                                        console.log("=========", err);

                                                    })
                                                    setChangeType(1);
                                                }}
                                            />
                                        </View>
                                    );
                                }}
                                assert={async ({ expect, state }) => {
                                    expect(state).to.be.true;
                                }}
                            />
                            <TestCase
                                key={2}
                                itShould={'call:detectFromFile 识别本地照片'}
                                tags={['C_API']}
                                initialState={false}
                                arrange={({ setState }) => {
                                    return (
                                        <View style={{ flex: 1 }}>
                                            <Button
                                                label="识别本地照片"
                                                onPress={() => {
                                                    MlkitOcr.detectFromFile('assets/ocr_test.jpg').then(res => {
                                                        setTimeout(() => {
                                                            setResult(res)
                                                            setState(!!res)
                                                            console.log("================file=res", JSON.stringify(res))
                                                        }, 1000)
                                                    }).catch(err => {
                                                        console.log("=========", err);

                                                    })
                                                    setChangeType(2);
                                                }}
                                            />
                                        </View>
                                    );
                                }}
                                assert={async ({ expect, state }) => {
                                    expect(state).to.be.true;
                                }}
                            />

                        </TestSuite>
                    </ScrollView>

                </Tester>
            </View>
        </SafeAreaView>
    );

};

export default OcrTest;
