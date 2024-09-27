import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Button, Text, TextInput, StyleSheet } from 'react-native';
import { Tester, TestCase, TestSuite } from '@rnoh/testerino';
import LottieView from '@react-native-oh-tpl/lottie-react-native';

export default function LottieTest() {
    const animateString = {
        "v": "5.2.1",
        "fr": 60,
        "ip": 0,
        "op": 60,
        "w": 500,
        "h": 500,
        "nm": "Comp 1",
        "ddd": 1,
        "assets": [],
        "layers": [{
            "ddd": 1,
            "ind": 1,
            "ty": 4,
            "nm": "Shape Layer 3",
            "sr": 1,
            "ks": {
                "o": { "a": 0, "k": 100, "ix": 11 },
                "rx": { "a": 0, "k": 0, "ix": 8 },
                "ry": { "a": 0, "k": 0, "ix": 9 },
                "rz": {
                    "a": 1,
                    "k": [{
                        "i": { "x": [0.833], "y": [0.833] },
                        "o": { "x": [0.167], "y": [0.167] },
                        "n": ["0p833_0p833_0p167_0p167"],
                        "t": 0,
                        "s": [0],
                        "e": [360]
                    }, { "t": 55 }],
                    "ix": 10
                },
                "or": { "a": 0, "k": [0, 0, 0], "ix": 7 },
                "p": { "a": 0, "k": [75, 384, 0], "ix": 2 },
                "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
                "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }
            },
            "ao": 0,
            "shapes": [{
                "ty": "rc",
                "d": 1,
                "s": { "a": 0, "k": [100, 100], "ix": 2 },
                "p": { "a": 0, "k": [0, 0], "ix": 3 },
                "r": { "a": 0, "k": 0, "ix": 4 },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
            }, {
                "ty": "fl",
                "c": { "a": 0, "k": [0.075893886387, 0.175385013223, 0.921568632126, 1], "ix": 4 },
                "o": { "a": 0, "k": 100, "ix": 5 },
                "r": 1,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }],
            "ip": 0,
            "op": 60,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 1,
            "ind": 2,
            "ty": 4,
            "nm": "Shape Layer 2",
            "sr": 1,
            "ks": {
                "o": { "a": 0, "k": 100, "ix": 11 },
                "rx": { "a": 0, "k": 0, "ix": 8 },
                "ry": {
                    "a": 1,
                    "k": [{
                        "i": { "x": [0.833], "y": [0.833] },
                        "o": { "x": [0.167], "y": [0.167] },
                        "n": ["0p833_0p833_0p167_0p167"],
                        "t": 0,
                        "s": [0],
                        "e": [360]
                    }, { "t": 55 }],
                    "ix": 9
                },
                "rz": { "a": 0, "k": 0, "ix": 10 },
                "or": { "a": 0, "k": [0, 0, 0], "ix": 7 },
                "p": { "a": 0, "k": [76, 234, 0], "ix": 2 },
                "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
                "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }
            },
            "ao": 0,
            "shapes": [{
                "ty": "rc",
                "d": 1,
                "s": { "a": 0, "k": [100, 100], "ix": 2 },
                "p": { "a": 0, "k": [0, 0], "ix": 3 },
                "r": { "a": 0, "k": 0, "ix": 4 },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
            }, {
                "ty": "fl",
                "c": { "a": 0, "k": [0.025943866, 0.945098042488, 0.134079754353, 1], "ix": 4 },
                "o": { "a": 0, "k": 100, "ix": 5 },
                "r": 1,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }],
            "ip": 0,
            "op": 60,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 1,
            "ind": 3,
            "ty": 4,
            "nm": "Shape Layer 1",
            "sr": 1,
            "ks": {
                "o": { "a": 0, "k": 100, "ix": 11 },
                "rx": {
                    "a": 1,
                    "k": [{
                        "i": { "x": [0.833], "y": [0.833] },
                        "o": { "x": [0.167], "y": [0.167] },
                        "n": ["0p833_0p833_0p167_0p167"],
                        "t": 0,
                        "s": [0],
                        "e": [360]
                    }, { "t": 55 }],
                    "ix": 8
                },
                "ry": { "a": 0, "k": 0, "ix": 9 },
                "rz": { "a": 0, "k": 0, "ix": 10 },
                "or": { "a": 0, "k": [0, 0, 0], "ix": 7 },
                "p": { "a": 0, "k": [76, 72, 0], "ix": 2 },
                "a": { "a": 0, "k": [0, 0, 0], "ix": 1 },
                "s": { "a": 0, "k": [100, 100, 100], "ix": 6 }
            },
            "ao": 0,
            "shapes": [{
                "ty": "rc",
                "d": 1,
                "s": { "a": 0, "k": [100, 100], "ix": 2 },
                "p": { "a": 0, "k": [0, 0], "ix": 3 },
                "r": { "a": 0, "k": 0, "ix": 4 },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
            }, {
                "ty": "fl",
                "c": { "a": 0, "k": [1, 0, 0, 1], "ix": 4 },
                "o": { "a": 0, "k": 100, "ix": 5 },
                "r": 1,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }],
            "ip": 0,
            "op": 60,
            "st": 0,
            "bm": 0
        }],
        "markers": []
    };
    const [progress, setProgress] = React.useState(0);
    const [progressTemp, setProgressTemp] = React.useState(0);
    const [loop, setLoop] = React.useState(false);
    const booleanList = [true, false]
    const [resizeMode, setResizeMode] = useState('');
    let [speed, setSpeed] = useState(1);
    const color = {
        primary: 'red',
        secondary: 'blue',
      };
    const colorFilter = [
        {
          keypath: 'BG',
          color: color.primary,
        },
        {
          keypath: 'O-B',
          color: color.secondary,
        },
        {
          keypath: 'L-B',
          color: color.secondary,
        },
        {
          keypath: 'T1a-Y 2',
          color: color.secondary,
        },
        {
          keypath: 'T1b-Y',
          color: color.secondary,
        },
        {
          keypath: 'T2b-B',
          color: color.secondary,
        },
        {
          keypath: 'T2a-B',
          color: color.secondary,
        },
        {
          keypath: 'I-Y',
          color: color.secondary,
        },
        {
          keypath: 'E1-Y',
          color: color.secondary,
        },
        {
          keypath: 'E2-Y',
          color: color.secondary,
        },
        {
          keypath: 'E3-Y',
          color: color.secondary,
        },
      ];

    return (
        <ScrollView>
            <View>
                <Tester>
                    <TestSuite name={'lottieTest'}>
                        {/*属性 prop*/}
                        <TestCase itShould={'LottieView source prop type is string.'}>
                            <View style={{ flex: 1, width: 300, height: 300 }}>
                                <LottieView style={{ width: 300, height: 300 }} source={animateString} autoPlay loop />
                            </View>
                        </TestCase>
                        <TestCase itShould={'LottieView source prop type is require js object.'}>
                            <View style={{ flex: 1, width: 300, height: 300 }}>
                                <LottieView style={{ width: 300, height: 300 }}
                                    source={require("../assets/data_base64s.json")} autoPlay loop />
                            </View>
                        </TestCase>
                        <TestCase itShould={'LottieView source prop type is {uri:url}.'}>
                            <View style={{ flex: 1, width: 300, height: 300 }}>
                                <LottieView style={{ width: 300, height: 300 }}
                                    source={{ uri: 'https://lottie.host/272b60dd-462d-42a3-8ed6-fec4143633d6/X4FxBascRI.json' }} autoPlay loop />
                            </View>
                        </TestCase>

                        <TestCase itShould={'LottieView colorFilters prop.'}>
                            <View style={{ flex: 1, width: 300, height: 300 }}>
                                <LottieView style={{ width: 300, height: 300 }}
                                    source={require("../assets/data_test.json")}
                                    autoPlay 
                                    loop
                                    colorFilters={colorFilter}/>
                            </View>
                        </TestCase>

                        <TestCase itShould={'LottieView progress prop is a number between 0 and 1.'}>
                            <View style={{ flex: 1, width: 300, height: 330 }}>
                                <LottieView style={{ width: 300, height: 300, }}
                                    source={require("../assets/data_base64s.json")}
                                    progress={progress} />
                                <View style={{ flexDirection: 'row', width: 300, height: 10, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <TextInput style={styles.inputButton}
                                        value={progressTemp.toString()}
                                        onChangeText={(data: any) => {
                                            setProgressTemp(data)
                                        }} />
                                    <View style={styles.buttonText} 
                                    onTouchEnd={() => {
                                        let num = Number(progressTemp)
                                        if (typeof num === 'number' && !Number.isNaN(num)) {
                                            setProgress(num)
                                        } else {
                                            setProgressTemp(0)
                                            setProgress(0)
                                        }
                                    }}>
                                        <Text style={styles.buttonText}>确定</Text>
                                    </View>
                                    <View style={styles.buttonText} 
                                        onTouchEnd={() => {
                                        setProgressTemp(0)
                                        setProgress(0)
                                    }}>
                                        <Text style={styles.buttonText}>重置</Text>
                                    </View>
                                    <Text style={styles.buttonText}>num: {progress}</Text>
                                </View>
                            </View>
                        </TestCase>
                        <TestCase itShould={'LottieView speed prop is number.'}>
                            <View style={{ flex: 1, width: 300, height: 330 }}>
                                <LottieView style={{ width: 300, height: 300 }}
                                    source={require("../assets/data_base64s.json")}
                                    speed={speed}
                                    autoPlay
                                    loop />

                                <View style={{ flexDirection: 'row', width: 300, height: 10, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <View style={styles.buttonText} onTouchEnd={() => {
                                        setSpeed(10)
                                    }}>
                                        <Text style={styles.buttonText}>+</Text>
                                    </View>
                                    <View style={styles.buttonText} onTouchEnd={() => {
                                        setSpeed(-1)

                                    }}>
                                        <Text style={styles.buttonText}>-</Text>
                                    </View>
                                    <Text style={styles.buttonText}>num: {speed}</Text>
                                </View>
                            </View>
                        </TestCase>

                        <TestCase itShould={'LottieView duration prop is 6000ms.'}>
                            <View style={{ flex: 1, width: 300, height: 300 }}>
                                <LottieView style={{ width: 300, height: 280 }}
                                    source={require("../assets/data_base64s.json")}
                                    duration={6000}
                                    autoPlay
                                    loop={false} />
                            </View>
                        </TestCase>
                        <TestCase itShould={'LottieView loop prop is true.'}>
                            <View style={{ flex: 1, width: 300, height: 300 }}>
                                <LottieView 
                                    style={{ width: 300, height: 300 }} 
                                    source={require("../assets/data_base64s.json")} 
                                    autoPlay
                                    loop
                                />
                            </View>
                        </TestCase>
                        <TestCase itShould={'LottieView autoPlay prop is true.'}>
                            <View style={{ flex: 1, width: 300, height: 300 }}>
                                <LottieView style={{ width: 300, height: 300 }}
                                    source={require("../assets/data_base64s.json")}
                                    autoPlay={true}
                                />
                            </View>
                        </TestCase>
                        <TestCase itShould={'LottieView style prop is backgroundColor: red.'}>
                            <View style={{ flex: 1, width: '100%', height: 300 }}>
                                <LottieView style={{ width: 300, height: 300, backgroundColor: 'red' }}
                                    source={require("../assets/data_base64s.json")}
                                    duration={1000}
                                    imageAssetsFolder={"images/"}
                                    autoPlay 
                                    loop />
                            </View>
                        </TestCase>
                        <TestCase
                            itShould="LottieView set onAnimationFinish callback."
                            initialState={false}
                            tags={['C_API']}
                            arrange={({ setState, state }) => {
                                const animationRef = useRef<LottieView>(null);
                                return (
                                    <View style={{ flex: 1 }}>
                                        <LottieView
                                            ref={animationRef}
                                            style={{ width: 300, height: 300 }}
                                            source={require("../assets/data_base64s.json")}
                                            loop={false} 
                                            onAnimationFinish={() => {
                                                setState(true)
                                            }}
                                        />
                                        <Button
                                            onPress={() => {
                                                animationRef.current?.play();
                                            }}
                                            title='play'></Button>
                                    </View>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />
                        <TestCase
                            itShould="LottieView set onAnimationFailure callback."
                            initialState={false}
                            tags={['C_API']}
                            arrange={({ setState, state }) => {
                                const animationRef = useRef<LottieView>(null);
                                return (
                                    <View style={{ flex: 1 }}>
                                        <LottieView
                                            ref={animationRef}
                                            style={{ width: 300, height: 300 }}
                                            source={require("../assets/data_base64s.json")}
                                            loop 
                                            autoPlay
                                            onAnimationFailure={()=>{
                                                setState(true)
                                            }}
                                        />
                                        {/* <Button
                                            onPress={() => {
                                                animationRef.current?.play();
                                            }}
                                            title='play'></Button> */}
                                    </View>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />
                        <TestCase itShould={'LottieView cacheComposition prop is false.'}>
                            <View style={{ flex: 1 }}>
                                <LottieView style={{ width: 300, height: 300 }}
                                    source={require("../assets/data_base64s.json")}
                                    duration={1000}
                                    imageAssetsFolder={"../assets"}
                                    cacheComposition={false}
                                    autoPlay loop />
                            </View>
                        </TestCase>

                        <TestCase itShould={'LottieView resizeMode prop is cover.'}>
                            <View style={{ flex: 1, height: 350 }}>
                                <LottieView style={{ width: 300, height: 300, backgroundColor: 'red' }}
                                    source={require("../assets/data_test.json")}
                                    duration={1000}
                                    resizeMode={'cover'}
                                    autoPlay loop />
                            </View>
                        </TestCase>
                        <TestCase itShould={'LottieView resizeMode prop is contain.'}>
                            <View style={{ flex: 1, height: 350 }}>
                                <LottieView style={{ width: 300, height: 300, backgroundColor: 'red' }}
                                    source={require("../assets/data_test.json")}
                                    duration={1000}
                                    resizeMode={'contain'}
                                    autoPlay loop />
                            </View>
                        </TestCase>
                        <TestCase itShould={'LottieView resizeMode prop is center.'}>
                            <View style={{ flex: 1, height: 350 }}>
                                <LottieView style={{ width: 300, height: 300, backgroundColor: 'red' }}
                                    source={require("../assets/data_test.json")}
                                    duration={1000}
                                    resizeMode={'center'}
                                    autoPlay loop />
                            </View>
                        </TestCase>
                        <TestCase
                            itShould="LottieView set onAnimationLoaded callback."
                            initialState={false}
                            tags={['C_API']}
                            arrange={({ setState, state }) => {
                                const animationRef = useRef<LottieView>(null);
                                const sourceRequire1 = require('../assets/data_base64s.json')
                                const [source, setSource] = useState('')
                                return (
                                    <View style={{ flex: 1 }}>
                                        <LottieView
                                            ref={animationRef}
                                            style={{ width: 300, height: 300 }}
                                            source={source}
                                            loop
                                            onAnimationLoaded={() => {
                                                setState(true)
                                            }}
                                        
                                        />
                                        <Button title='set'
                                            onPress={() => {
                                                setSource(sourceRequire1)
                                            }}
                                        ></Button>
                                    </View>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />

                        {/*静态方法 (Imperative API)*/}
                        <TestCase
                            itShould="LottieView run by imperative play invoke."
                            initialState={false}
                            tags={['C_API']}
                            arrange={({ setState, state }) => {
                                const animationRef = useRef<LottieView>(null);
                                return (
                                    <View style={{ flex: 1 }}>
                                        <LottieView
                                            ref={animationRef}
                                            style={{ width: 300, height: 300 }}
                                            source={require("../assets/data_base64s.json")}
                                            loop={false}
                                        />
                                        <Button
                                            onPress={() => {
                                                animationRef.current?.play()
                                                setState(true)
                                            }}
                                            title='play'></Button>
                                    </View>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />
                        <TestCase
                            itShould="LottieView run by imperative play invoke set a specific startFrame and endFrame with play(30, 120)."
                            initialState={false}
                            tags={['C_API']}
                            arrange={({ setState, state }) => {
                                const animationRef = useRef<LottieView>(null);
                                return (
                                    <View style={{ flex: 1 }}>
                                        <LottieView
                                            ref={animationRef}
                                            style={{ width: 300, height: 300 }}
                                            source={require("../assets/data_test.json")}
                                            loop={false}
                                        />
                                        <Button
                                            onPress={() => {
                                                animationRef.current?.play(30, 120);
                                                setState(true)
                                            }}
                                            title='play'></Button>
                                    </View>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />
                        <TestCase
                            itShould="LottieView run by imperative reset invoke."
                            initialState={false}
                            tags={['C_API']}
                            arrange={({ setState, state }) => {
                                const animationRef = useRef<LottieView>(null);
                                return (
                                    <View style={{ flex: 1 }}>
                                        <LottieView
                                            ref={animationRef}
                                            style={{ width: 300, height: 300 }}
                                            source={require("../assets/data_test.json")}
                                            loop={false}
                                        />
                                        <Button
                                            onPress={() => {
                                                animationRef.current?.play();
                                            }}
                                            title='play'></Button>
                                        <Button
                                            onPress={() => {
                                                animationRef.current?.reset();
                                                setState(true)
                                            }}
                                            title='reset'></Button>
                                    </View>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />
                        <TestCase
                            itShould="LottieView run by imperative pause and resume invoke."
                            initialState={false}
                            tags={['C_API']}
                            arrange={({ setState, state }) => {
                                const animationRef = useRef<LottieView>(null);
                                return (
                                    <View style={{ flex: 1 }}>
                                        <LottieView
                                            ref={animationRef}
                                            style={{ width: 300, height: 300 }}
                                            source={require("../assets/data_base64s.json")}
                                        />
                                        <Button
                                            onPress={() => {
                                                animationRef.current?.play();
                                            }}
                                            title='play'></Button>
                                        <Button
                                            onPress={() => {
                                                animationRef.current?.pause();
                                                setState(true)
                                            }}
                                            title='pause'></Button>
                                        <Button
                                            onPress={() => {
                                                animationRef.current?.resume();
                                                setState(true)
                                            }}
                                            title='resume'></Button>
                                    </View>
                                )
                            }}
                            assert={async ({ expect, state }) => {
                                expect(state).to.be.eq(true);
                            }}
                        />
                    </TestSuite>
                </Tester>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    inputButton: {
        width: 60,
        height: 35,
        padding: 5,
        borderRadius: 8,
        margin: 5,
        color: 'black',
        borderWidth: 1,
        fontSize: 12,
        textAlign: 'center'
    },
    buttonText: {
        width: 100,
        height: 35,
        lineHeight: 25,
        textAlign: 'center',
    }
    
});
