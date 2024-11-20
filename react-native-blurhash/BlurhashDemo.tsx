import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Blurhash } from 'react-native-blurhash';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Alert, SafeAreaView, TextInput, Switch, ActivityIndicator, StatusBar } from 'react-native'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

const BlurhashDemo: React.FC = (): JSX.Element => {
    const [validData, setValidData] = useState<boolean>(undefined)
    const [blurhash, setBlurhash] = useState('LGF5]+Yk^6#M@-5c,1J5@[or[Q6.');
    const [blurhash2, setBlurhash2] = useState('LOGj+#n$02t7IVWWtQs,03R-~As9');
    const [blurhash3, setBlurhash3] = useState('LGF5]+Yk^6#M@-5c,1J5@[or[Q6.');
    const [blurhash4, setBlurhash4] = useState('LGF5]+Yk^6#M@-5c,1J5@[or[Q6.');
    const [blurhash5, setBlurhash5] = useState('LGF5]+Yk^6#M@-5c,1J5@[or[Q6.');
    const [decodeAsync, setDecodeAsync] = useState(true);
    const [encodingImageUri, setEncodingImageUri] = useState(
        'https://gips3.baidu.com/it/u=1907453080,4211057612&fm=3028&app=3028&f=JPEG&fmt=auto&q=50&size=f200_201'
    );
    const [encodingImageUri2, setEncodingImageUri2] = useState(
        'https://gips3.baidu.com/it/u=1907453080,4211057612&fm=3028&app=3028&f=JPEG&fmt=auto&q=50&size=f200_200'
    );
    const [isEncoding, setIsEncoding] = useState(false);
    const [isEncoding2, setIsEncoding2] = useState(false);
    const [isValiding, setIsVailding] = useState(false);
    //#endregion

    //#region Memos
    const buttonOpacity = useMemo(
        () => (encodingImageUri.length < 5 || isEncoding ? 0.5 : 1),
        [encodingImageUri.length, isEncoding],
    );
    const encodeButtonStyle = useMemo(
        () => [styles.encodeButton, { opacity: buttonOpacity }],
        [buttonOpacity],
    );
    const clearCosineCacheButton = useMemo(
        () => [styles.clearCosineCacheButton, { opacity: buttonOpacity }],
        [buttonOpacity],
    );
    //#endregion

    //#region Callbacks
    const onLoadStart = () => {
        console.log('onLoadStart called!');
    };
    const onLoadEnd = () => {
        console.log('onLoadEnd called!');
    };
    const onLoadError = (message?: string) => {
        console.log(`onLoadError called! Message: ${message}`);
    };
    const startEncoding = useCallback(async () => {
        try {
            if (encodingImageUri.length < 5) return;
            setIsEncoding(true);
            const _blurhash = await Blurhash.encode(encodingImageUri, 4, 3);
            setBlurhash3(_blurhash);
            setIsEncoding(false);
        } catch (e: any) {
            setIsEncoding(false);
            console.warn('Failed to encode!', e);
            Alert.alert('Encoding error', e.message);
        }
    }, [encodingImageUri]);
    const startEncoding2 = useCallback(async () => {
        try {
            if (encodingImageUri2.length < 5) return;
            setIsEncoding2(true);
            const _blurhash = await Blurhash.encode(encodingImageUri2, 4, 3);
            setBlurhash4(_blurhash);
            setIsEncoding2(false);
        } catch (e: any) {
            setIsEncoding2(false);
            console.warn('Failed to encode!', e);
            Alert.alert('Encoding error', e.message);
        }
    }, [encodingImageUri]);
    const isVaild = () => {
        const data = Blurhash.isBlurhashValid(blurhash5)
        Alert.alert("blurhash is valid? : " + data.isValid)
        console.log(data);
    }
    const CCache = useCallback(() => {
        Blurhash.clearCosineCache()
    }, [])
    //#endregion

    return (
        <Tester style={{ flex: 1, backgroundColor: '#000' }}>
            <ScrollView>
                <TestSuite name='Blurhash'>
                    <View style={styles.module}>
                        <Text
                            style={styles.moduleName}>
                            Blurhash属性
                        </Text>
                        <TestCase tags={['C_API']} itShould='设置Blurhash参数'>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash={blurhash}
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <TextInput
                                    value={String(blurhash)}
                                    placeholder="Blurhash"
                                    onChangeText={setBlurhash}
                                    style={styles.textInput}
                                />
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash={blurhash2}
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <TextInput
                                    value={String(blurhash2)}
                                    placeholder="Blurhash"
                                    onChangeText={setBlurhash2}
                                    style={styles.textInput}
                                />
                            </SafeAreaView>
                        </TestCase>
                        <TestCase tags={['C_API']} itShould='设置decodeWidth参数'>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LL9@GER-n1o#9tj[xbWpR1WAS$W9"
                                            decodeWidth={16}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <Text>decodeWidth 16</Text>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LLAALbR+n1kX9tj[xbWpR1WAS$W9"
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <Text>decodeWidth 24</Text>
                            </SafeAreaView>
                        </TestCase>
                        <TestCase tags={['C_API']} itShould='设置decodeHeight参数'>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LLA0z;R,n1kX9tj[xbWpR1WAS$W9"
                                            decodeWidth={32}
                                            decodeHeight={16}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <Text>decodeHeight 16</Text>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LL9%rfR.ito#9tfkxbWXR1WAX9W9"
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <Text>decodeHeight 32</Text>
                            </SafeAreaView>
                        </TestCase>
                        <TestCase tags={['C_API']} itShould='设置decodePunch参数'>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LEG[._~p-SsSlC=]NGWW~V%2E1NG"
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={0.5}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <Text>decodePunch 0.5</Text>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LEG[._~p-SsmlC=]NGWV~V%2E1NG"
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <Text>decodePunch 1</Text>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LEG+OL~p-Ssopf=@NGWV~V%2IVNG"
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={2}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <Text>decodePunch 2</Text>
                            </SafeAreaView>
                        </TestCase>
                        <TestCase tags={['C_API']} itShould='设置resizeMode参数'>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LEG[._~p-SsmlC=]NGWV~V%2E1NG"
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <Text>resizeMode:cover</Text>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LEG[._~p-SsmlC=]NGWV~V%2E1NG"
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                                <Text>resizeMode:contain</Text>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LEG[._~p-SsmlC=]NGWV~V%2E1NG"
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="stretch"
                                        />
                                    </View>
                                </View>
                                <Text>resizeMode:stretch</Text>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash="LEG[._~p-SsmlC=]NGWV~V%2E1NG"
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={decodeAsync}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="center"
                                        />
                                    </View>
                                </View>
                                <Text>resizeMode:center</Text>
                            </SafeAreaView>
                        </TestCase>
                        <TestCase tags={['C_API']} itShould='设置decodeAsync参数'>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash={blurhash3}
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={true}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <Text>decodeAsync:true</Text>
                                <TouchableOpacity
                                    style={encodeButtonStyle}
                                    disabled={encodingImageUri.length < 5}
                                    onPress={startEncoding}>
                                    {isEncoding ? (
                                        <ActivityIndicator color="black" />
                                    ) : (
                                        <Text>Encode</Text>
                                    )}
                                </TouchableOpacity>
                            </SafeAreaView>
                            <SafeAreaView style={styles.container}>
                                <View style={styles.blurhashContainer}>
                                    <View style={styles.blurhashRadiusMask}>
                                        <Blurhash
                                            blurhash={blurhash4}
                                            decodeWidth={32}
                                            decodeHeight={32}
                                            decodePunch={1}
                                            decodeAsync={false}
                                            onLoadStart={onLoadStart}
                                            onLoadEnd={onLoadEnd}
                                            onLoadError={onLoadError}
                                            style={styles.blurhashImage}
                                            resizeMode="cover"
                                        />
                                    </View>
                                </View>
                                <Text>decodeAsync:false</Text>
                                <TouchableOpacity
                                    style={encodeButtonStyle}
                                    disabled={encodingImageUri.length < 5}
                                    onPress={startEncoding2}>
                                    {isEncoding ? (
                                        <ActivityIndicator color="black" />
                                    ) : (
                                        <Text>Encode</Text>
                                    )}
                                </TouchableOpacity>
                            </SafeAreaView>
                        </TestCase>
                        <TestCase tags={['C_API']} itShould='验证clearCosineCache方法'>
                            <SafeAreaView style={styles.container}>
                                <TouchableOpacity
                                    style={clearCosineCacheButton}
                                    disabled={blurhash.length < 5}
                                    onPress={CCache}>
                                    {isValiding ? (
                                        <ActivityIndicator color="black" />
                                    ) : (
                                        <Text>clearCosineCache</Text>
                                    )}
                                </TouchableOpacity>
                            </SafeAreaView>
                        </TestCase>

                        

                        <TestCase
                            tags={['C_API']}
                            itShould='验证isBlurhashValid方法（返回ture或false则为成功）'
                            initialState={undefined as any}
                            arrange={({ setState }) => {
                                return (
                                    <>
                                        <SafeAreaView style={styles.container}>
                                            <TextInput
                                                value={String(blurhash5)}
                                                placeholder="Blurhash"
                                                onChangeText={setBlurhash5}
                                                style={styles.textInput}
                                            />
                                            <TouchableOpacity
                                                style={clearCosineCacheButton}
                                                disabled={blurhash5.length < 5}
                                                onPress={() => {
                                                    const data = Blurhash.isBlurhashValid(blurhash5)
                                                    setValidData(data.isValid)
                                                    if (data.isValid == true || data.isValid == false) {
                                                        setState(data.isValid)
                                                    } else {
                                                        setState(data)
                                                    }
                                                }}>
                                                {isValiding ? (
                                                    <ActivityIndicator color="black" />
                                                ) : (
                                                    <Text>isBlurhashValid</Text>
                                                )}
                                            </TouchableOpacity>
                                        </SafeAreaView>
                                    </>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.true
                            }}
                        />
                        <Text style={{ color: '#fff' }}>{'isBlurhashValid:' + validData}</Text>
                        <TestCase
                            tags={['C_API']}
                            itShould='验证getAverageColor'>
                            <>
                                <SafeAreaView style={styles.container}>
                                    <TextInput
                                        value={String(blurhash5)}
                                        placeholder="Blurhash"
                                        onChangeText={setBlurhash5}
                                        style={styles.textInput}
                                    />
                                    <TouchableOpacity
                                        style={clearCosineCacheButton}
                                        disabled={blurhash5.length < 5}
                                        onPress={() => {
                                            const data = Blurhash.getAverageColor(blurhash5)
                                            setAverageColor(data)
                                        }}>
                                        {isValiding ? (
                                            <ActivityIndicator color="black" />
                                        ) : (
                                            <Text>getAverageColor</Text>
                                        )}
                                    </TouchableOpacity>
                                </SafeAreaView>
                            </>
                            )
                        </TestCase>
                        <Text style={{ color: '#fff' }}>{'AverageColor:' + JSON.stringify(AverageColor)}</Text>
                    </View>
                </TestSuite>
            </ScrollView>
        </Tester >
    )
}

const COLORS = {
    background: '#F5FCFF',
    statusBar: 'rgba(100, 0, 100, 0.6)',
    textInput: 'rgba(200, 0, 100, 0.5)',
    button: 'rgba(200, 0, 100, 0.4)',
    switchEnabled: 'rgba(200, 0, 100, 0.5)',
    switchDisabled: 'rgba(200, 0, 100, 0.2)',
    switchThumb: 'white',
    shadow: 'black',
};
const SWITCH_THUMB_COLORS = {
    false: COLORS.switchDisabled,
    true: COLORS.switchEnabled,
};

const styles = StyleSheet.create({
    module: {
        margin: 15,
    },
    moduleName: {
        fontSize: 25,
        fontWeight: '700',
        marginBottom: 4,
        color: '#fff'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    blurhashContainer: {
        shadowRadius: 3,
        shadowColor: COLORS.shadow,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.4,
        overflow: 'visible',
    },
    blurhashRadiusMask: {
        elevation: 5,
        // borderRadius has to be applied to the parent
        borderRadius: 1,
        overflow: 'hidden',
    },
    blurhashImage: {
        width: 250,
        height: 180,
        // Custom styling for width, height, scaling etc here
    },
    textInput: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.textInput,
        width: 250,
        height: 35,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    row: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        marginRight: 15,
    },
    encodeButton: {
        height: 37,
        width: 120,
        marginTop: 20,
        backgroundColor: COLORS.button,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 35,
        justifyContent: 'center',
    },
    clearCosineCacheButton: {
        height: 37,
        width: 190,
        marginTop: 20,
        backgroundColor: COLORS.button,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 35,
        justifyContent: 'center',
    },
});

export default BlurhashDemo