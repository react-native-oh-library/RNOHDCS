import React, { useRef, useState } from 'react';
import { Animated, View, StyleSheet, TextInput } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';


const useAnimatedScrollViewInput = () => {
    const [text, setText] = useState('');
    const scrollY = useRef(new Animated.Value(0)).current;

    // 动态计算渐变色
    const backgroundColor = scrollY.interpolate({
        inputRange: [0, 800],
        outputRange: ['#000000', '#FFFFFF'], // 起始和结束颜色
        extrapolate: 'clamp', // 防止超出范围的颜色变换
    });

    return (
        <Animated.View style={[styles.container, { backgroundColor }]}>
            <InputScrollView
                keyboardOffset={100}
                useAnimatedScrollView={true}
                style={StyleSheet.absoluteFill}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
               
            >
                <View style={styles.placeholder} />
                <TextInput style={styles.input} multiline
                    value={text}
                    onChangeText={setText}
                />

            </InputScrollView>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFF',
    },
    placeholder: {
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
    },
    content: {
        height: 1000, // Ensures the ScrollView is scrollable
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default useAnimatedScrollViewInput;