import React, {useState} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import Slider from 'react-native-slider';

export default function SliderExample() {
    const [value, setValue] = useState(0.200);
    return (
        <View style={styles.sectionContainer}>
            <Text>default style</Text>
            <Slider value={0.2}/>

            <Text>with min,max and custom tints</Text>
            <Slider
                value={0.2}
                minimumTrackTintColor='#1A9274'
                maximumTrackTintColor='#D3D3D3'
                thumbTintColor='#1A9274'
            />

            <Text>with style,thumbStyle,thumbStyle</Text>
            <Slider
                value={0.2}
                minimumTrackTintColor='#1073FF'
                thumbTintColor='#FFFFFF'
                style={styles.style}
                trackStyle={styles.trackStyle}
                thumbStyle={styles.thumbStyle}
            />

            <Text>with thumbTouchSize,event</Text>
            <Slider
                value={0.2}
                thumbTintColor='#1A9FF4'
                thumbTouchSize={{width: 40, height: 40}}
                onValueChange={(val: number) => {
                    console.log('===Slider onValueChange: ' + value);
                }}
                onSlidingStart={() => {
                    console.log('===Slider onSlidingStart');
                }}
                onSlidingComplete={() => {
                    console.log('===Slider onSlidingComplete');
                }}
            />

            <Text>with thumbImage</Text>
            <Slider
                value={0.2}
                thumbTouchSize={{width: 40, height: 40}}
                thumbStyle={styles.thumbStyle}
                thumbImage={require('./resources/slider.png')}
            />

            <Text>with animateTransitions</Text>
            <Slider
                value={value}
                thumbTouchSize={{width: 40, height: 40}}
                trackStyle={styles.trackStyle}
                thumbStyle={styles.thumbStyle}
                animateTransitions={true}
                animationType='timing'
                animationConfig={{
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: false,
                }}
            />

            <Button
                title="动画测试"
                color="#841584"
                onPress={() => {
                    setValue(0.9);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    style: {
        backgroundColor: '#EECBA8',
    },
    trackStyle: {
        backgroundColor: '#D2D2D2',
        height: 3
    },
    thumbStyle: {
        backgroundColor: '#F3F3F3',
        width: 30,
        height: 30,
        borderRadius: 15,
    }
});
