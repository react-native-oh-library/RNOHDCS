import React, { useState, useEffect } from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    View,
    Alert,
    Animated,
    Platform,
    TextInput,
    ScrollView,
    StyleSheet,
    RefreshControl
} from 'react-native';
import {
    Tester,
    TestSuite,
    testSuite
} from '@rnoh/testerino';
import { useImageDimensions, useAppState, useLayout, useKeyboard, useDeviceOrientation, useBackHandler, useRefresh, useAccessibilityInfo, useInteractionManager } from '@react-native-community/hooks'
export const HooksUnTester = () => {
    const {
        boldTextEnabled,
        screenReaderEnabled,
        reduceMotionEnabled, // requires RN60 or newer
        grayscaleEnabled, // requires RN60 or newer
        invertColorsEnabled, // requires RN60 or newer
        reduceTransparencyEnabled, // requires RN60 or newer
    } = useAccessibilityInfo()
    const _state = useAccessibilityInfo()
    const [backText, setBackText] = useState('')
    const [refreshText, setRefreshText] = useState('下拉刷新')
    const fetch = () => {
        return new Promise((resolve) => setTimeout(() => { resolve(setRefreshText('刷新成功')) }, 500))
    }
    const { isRefreshing, onRefresh } = useRefresh(fetch);
    const source = require('../assets/react-native-community-hooks.jpg')
    const { dimensions, loading, error } = useImageDimensions(source)
    const { onLayout, ...layout } = useLayout()
    const [isBoldTextEnabled, setIsBoldTextEnabled] = useState(false)
    const [isscreenReaderEnabled, setIsscreenReaderEnabled] = useState(false)
    const [isReduceMotionEnabled, setIsReduceMotionEnabled] = useState(false)
    const [isGrayscaleEnabled, setIsGrayscaleEnabled] = useState(false)
    const [isInvertColorsEnabled, setIsInvertColorsEnabled] = useState(false)
    const [isReduceTransparencyEnabled, setIsReduceTransparencyEnabled] = useState(false)
    const [showBall, setShowBall] = useState(false)
    const useBackHandlerClick = (type: boolean) => {
        type ? setBackText('返回中断') : setBackText('')
    }
    useBackHandler(() => {
        if (backText) {
            return true
        }
        // false 返回 true:中断返回
        return false
    })
    const ballStart = () => {
        setShowBall(true)
    }
    let clearUseAccessibilityInfo = setTimeout(() => {
        setIsBoldTextEnabled(boldTextEnabled)
        setIsscreenReaderEnabled(screenReaderEnabled)
        setIsReduceMotionEnabled(reduceMotionEnabled)
        setIsGrayscaleEnabled(grayscaleEnabled)
        setIsInvertColorsEnabled(invertColorsEnabled)
        setIsReduceTransparencyEnabled(reduceTransparencyEnabled)
    }, 1000)
    useEffect(() => {
        return clearTimeout(clearUseAccessibilityInfo)
    }, [])
    const instructions = Platform.select({
        ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
        android:
            "Double tap R on your keyboard to reload,\n" +
            "Shake or press menu button for dev menu",
    });
    const useMount = (func: Function) => useEffect(() => func(), []);

    const useFadeIn = (duration = 3500) => {
        const [opacity] = useState(new Animated.Value(0));
        useMount(() => {
            Animated.timing(opacity, {
                toValue: 1,
                duration,
            } as any).start();
        });

        return opacity;
    };

    const Ball = ({ onShown }: any) => {
        if (!showBall) return
        const opacity = useFadeIn();
        const interactionReady = useInteractionManager()
        useEffect(() => {
            if (interactionReady) {
                onShown()
            }
        }, [interactionReady]);
        return <Animated.View style={[styles.ball, { opacity }]} />;
    };
    return (
        <View style={{ flex: 1 }}>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                />
            }>
                {/* hooks-useAccessibilityInfo-demo */}
                <View style={styles.testSuite}>
                    <Text style={styles.titles}>useAccessibilityInfo</Text>
                    <View style={styles.textCase}>
                        <Text> boldTextEnabled: {`${isBoldTextEnabled}`} </Text>
                        <Text> screenReaderEnabled: {`${isscreenReaderEnabled}`}</Text>
                        <Text> reduceMotionEnabled: {`${isReduceMotionEnabled}`}</Text>
                        <Text> grayscaleEnabled: {`${isGrayscaleEnabled}`}</Text>
                        <Text> invertColorsEnabled: {`${isInvertColorsEnabled}`}</Text>
                        <Text> reduceTransparencyEnabled: {`${isReduceTransparencyEnabled}`}</Text>
                    </View>
                </View>
                {/* hooks-useRefresh-demo */}
                <View style={styles.testSuite}>
                    <Text style={styles.titles}>useRefresh</Text>
                    <View style={styles.textCase}>
                        <Text> {refreshText} </Text>
                    </View>
                </View>
                {/* hooks-useBackHandler-demo */}
                <View style={styles.testSuite}>
                    <Text style={styles.titles}>useBackHandler</Text>
                    <View style={styles.textCase}>
                        <Text> {backText} </Text>
                        <TouchableOpacity
                            onPress={() => useBackHandlerClick(false)}
                            style={styles.useBackHandlerBtn}>
                            <Text style={styles.btnText}>useBackHandler (false)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => useBackHandlerClick(true)}
                            style={styles.useBackHandlerBtn}>
                            <Text style={styles.btnText}>useBackHandler (true)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* hooks-useDeviceOrientation-demo */}
                <View style={styles.testSuite}>
                    <Text style={styles.titles}>useDeviceOrientation</Text>
                    <View style={styles.textCase}>
                        <Text>判断是横屏(landscape)还是纵屏(portrait)：{useDeviceOrientation()} </Text>
                    </View>
                </View>
                {/* hooks-useImageDimensions-demo */}
                <View style={styles.testSuite}>
                    <Text style={styles.titles}>useImageDimensions</Text>
                    <View style={styles.textCase}>
                        {
                            (loading || error || !dimensions) ? <Text>失败</Text> : <View>
                                <Image
                                    style={{ width: 100, height: 100, margin: 4, borderRadius: 8 }}
                                    source={source}
                                />

                            </View>
                        }
                        <Text>返回图片宽高的比列,高,宽：{JSON.stringify(dimensions)} </Text>
                    </View>
                </View>
                {/* hooks-useAppState-demo */}
                <View style={styles.testSuite}>
                    <Text style={styles.titles}>useAppState</Text>
                    <View style={styles.textCase}>
                        <Text>返回应用程序状态：{useAppState()} </Text>
                        <Text>状态有： "active" | "background" | "inactive" | "unknown" | "extension"</Text>
                    </View>
                </View>
                {/* hooks-useLayout-demo */}
                <View style={styles.testSuite}>
                    <Text style={styles.titles}>useLayout</Text>
                    <View style={styles.textCase}>
                        <Text onLayout={onLayout}>返回元素的坐标和宽高 : {JSON.stringify(layout)}</Text>
                    </View>
                </View>
                {/* hooks-useKeyboard-demo */}
                <View style={styles.testSuite}>
                    <Text style={styles.titles}>useKeyboard</Text>
                    <View style={styles.textCase}>
                        <TextInput></TextInput>
                        <Text>返回键盘收起状态，和键盘相关信息{JSON.stringify(useKeyboard())}</Text>
                    </View>
                </View>
                <View style={styles.testSuite}>
                    <View style={styles.textCase}>
                        <Text>{instructions}</Text>
                        <Ball onShown={() => Alert.alert("Animation is done")} />
                        <TouchableOpacity
                            onPress={() => ballStart()}
                            style={styles.useBackHandlerBtn}>
                            <Text style={styles.btnText}>InteractionManager</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    useBackHandlerBtn: {
        borderRadius: 6,
        height: 36,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'rgb(61, 176, 236)',
    },
    TextInput: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 4,
        width: '90%',
        backgroundColor: '#fff'
    },
    testSuite: { backgroundColor: "#fff", margin: 10 },
    titles: {
        marginLeft: 6,
        fontWeight: '600'
    },
    textCase: {
        margin: 5,
    },
    btnText: { fontWeight: 'bold', color: '#fff', fontSize: 20 },
    container: { flex: 1 },
    ball: {
        width: 100,
        height: 100,
        backgroundColor: "salmon",
        borderRadius: 100,
    },
});
