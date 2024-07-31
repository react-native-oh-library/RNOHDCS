import { useRef, useEffect } from 'react';
import { Animated, PanResponder, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

const AnimatableExample3 = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: () => {
                Animated.parallel([
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                        isInteraction: true,
                    }),
                    Animated.timing(fadeAnim, {
                        toValue: 0,
                        duration: 2000,
                        useNativeDriver: false,
                        isInteraction: false,
                    }),
                ]).start();
            },
        })
    ).current;

    useEffect(() => {
        return () => {
            panResponder.current = null;
            pan.current = null;
            fadeAnim.current = null;
        };
    }, []);

    return (
        <Tester>
            <TestSuite name="animatable">
                <TestCase
                    tags={['C_API']}
                    itShould="isInteraction验证">
                    <Text>回弹效果isInteraction验证为true,表示拖动方块后,松手,方块会回到初始位置,该动画无法被打断</Text>
                    <Text>回弹后,会有淡化效果isInteraction验证为false,表示开始淡化时,立刻再次拖动方块,可以暂停淡化动画</Text>
                    <Animatable.View
                        style={[
                            styles.box,
                            { transform: [{ translateX: pan.x }, { translateY: pan.y }], opacity: fadeAnim },
                        ]}
                        {...panResponder.panHandlers}
                    >
                        <Text>Drag me!</Text>
                    </Animatable.View>
                </TestCase>
            </TestSuite>
        </Tester>
    );
};

const styles = StyleSheet.create({
    box: {
        width: 335,
        height: 150,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AnimatableExample3;