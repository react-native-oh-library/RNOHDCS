import { useState,useRef,useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function ExampleView() {
    const [textFontSize, setTextFontSize] = useState(10);

    return (
        <Animatable.View style={{ padding: 50, backgroundColor: '#333333' }}>
            <Animatable.Text
                animation="slideInDown"
                iterationCount={5}
                direction="reverse"
                style={{ color: 'white', textAlign: 'center' }}
                duration={2000}
                onAnimationBegin={() => { console.log('test onAnimationBegin') }}
                onAnimationEnd={() => { console.log('test onAnimationEnd') }}
            >Up and down you go</Animatable.Text>
            <Animatable.Text animation="bounce" easing="ease-out" iterationCount="infinite" iterationDelay={1500} style={{ textAlign: 'center' }} useNativeDriver={true} isInteraction={true}>❤️</Animatable.Text>
            <Animatable.Text animation="fadeIn" delay={2000} style={{ textAlign: 'center', marginTop: 50, color: 'white' }}>(*^▽^*)</Animatable.Text>
            <TouchableOpacity onPress={() => setTextFontSize(textFontSize + 5)}>
                <Animatable.Text
                    transition="fontSize"
                    style={{ textAlign: 'center', marginTop: 50, color: 'white', fontSize: textFontSize || 10 }}
                    onTransitionBegin={() => { console.log('test onTransitionBegin') }}
                    onTransitionEnd={() => { console.log('test onTransitionEnd') }}
                >O(∩_∩)O哈哈~</Animatable.Text>
            </TouchableOpacity>
        </Animatable.View>
       
    )
}   