/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Slider from "react-native-slider";

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

function Section(): JSX.Element {
  const [value, setValue] = useState(0.2);

  return (
    <View style={styles.sectionContainer}>
    <Text>default style</Text>
    <Slider value={0.2}/>
    
    <Text>with min,max and custom tints</Text>
    <Slider 
     value={0.2}
     minimumTrackTintColor = '#1A9274'
     maximumTrackTintColor = '#D3D3D3'
     thumbTintColor = '#1A9274'
     />

    <Text>with style,thumbStyle,thumbStyle</Text>
    <Slider 
     value={0.2}
     minimumTrackTintColor = '#1073FF'
     thumbTintColor = '#FFFFFF'
     style = {styles.style}
     trackStyle = {styles.trackStyle}
     thumbStyle = {styles.thumbStyle}
     />

    <Text>with thumbTouchSize,event</Text>
    <Slider
        value={0.2}
        thumbTintColor = '#1A9FF4'
        thumbTouchSize = {{width: 40, height: 40}}
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
        thumbTouchSize = {{width: 40, height: 40}}
        thumbStyle = {styles.thumbStyle}
        thumbImage = {require('./resources/slider.png')}
    />

    <Text>with animateTransitions</Text>
    <Slider
        value={value}
        thumbTouchSize = {{width: 40, height: 40}}
        trackStyle = {styles.trackStyle}
        thumbStyle = {styles.thumbStyle}
      // thumbImage = {{uri: 'https://developer.harmonyos.com/assets/image/diqiu.png'}}
        animateTransitions = {true}
        animationType = 'timing'
        animationConfig = {{
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }}
    />

    <Button onPress={()=>{
        setValue(0.9);
    }}
    title="动画测试"
    color="#841584"
    />  
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : '#F3F3F3',
          }}>
          <Section />       
        </View>
      </ScrollView>
    </SafeAreaView>
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
      height:3
  },
  thumbStyle: {
      backgroundColor: '#F3F3F3',
      width: 30,
      height: 30,
      borderRadius: 15,
  }
});

export default App;
