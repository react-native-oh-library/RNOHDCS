import Animated, {
    useSharedValue,
    withTiming,
    withRepeat,
    useAnimatedStyle,
    Easing
} from '@react-native-oh-tpl/react-native-reanimated';
import React, { Component } from 'react';
import { View, Button, StyleSheet, LayoutChangeEvent } from 'react-native';

const AnimatedTextExp = () => {
    const fadeAnim = useSharedValue<number>(15)  //设置初始值
    const roteDeg = useSharedValue<number>(1)  //设置初始值
    const config = {
        duration: 2000,
        easing: Easing.linear,
    };

    const animatedTextStyles = useAnimatedStyle(() => ({
        fontSize: fadeAnim.value,
        color: "red"
    }));
    const animatedImageStyles = useAnimatedStyle(() => ({
        width: roteDeg.value * 2,
        height: roteDeg.value * 2,
        transform: [{ rotate: roteDeg.value + "deg" }]
    }));
    const handleTextPress = () => {
        fadeAnim.value = withTiming(fadeAnim.value * 2, config)
    }
    const handleImagePress = () => {
        roteDeg.value = withTiming(roteDeg.value * 2, config)
    }
    return (
        <View style={styles.container}>
            <Animated.Text style={animatedTextStyles}>
                Welcome my react-native !</Animated.Text>
            <Button onPress={handleTextPress} title="AnimatedTextAnimation" />
            <Animated.Image source={require('../../../assets/expo.png')} style={animatedImageStyles}></Animated.Image>
            <Button onPress={handleImagePress} title="AnimatedImageAnimation" />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default AnimatedTextExp;