import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native';
import Slider from 'react-native-slider';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export function SliderTest() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [value, setValue] = useState(0.2);
  const [pressValue, setPressValue] = useState('');
  const [releasedValue, setReleasedValue] = useState('');
  const [animateValue, setAnimateValue] = useState(0.2);
  return (
    <ScrollView>
      <View>
        <Tester>
          <TestSuite name={'sliderTest'}>
            <TestCase itShould={'default slider value=0.2'}>
              <Slider value={0.2} />
            </TestCase>

            <TestCase itShould={'disabled'}>
              <Slider value={0.2} disabled={isDisabled} />
              <Button
                title={'toggle disabled'}
                onPress={() => {
                  setIsDisabled(!isDisabled);
                }}></Button>
            </TestCase>

            <TestCase itShould={'minimumValue & maximumValue'}>
              <Slider value={0.2} minimumValue={0.2} maximumValue={0.8} />
            </TestCase>

            <TestCase itShould={'step'}>
              <Slider value={0.2} step={0.3} />
            </TestCase>

            <TestCase
              itShould={
                'minimumTrackTintColor & maximumTrackTintColor & thumbTintColor'
              }>
              <Slider
                value={0.2}
                minimumTrackTintColor="#1A9274"
                maximumTrackTintColor="brown"
                thumbTintColor="blue"
              />
            </TestCase>

            {/*<TestCase itShould={'thumbTouchSize'}>*/}
            {/*  <Slider value={0.2} thumbTouchSize={{width: 40, height: 40}} />*/}
            {/*</TestCase>*/}

            <TestCase itShould={'onValueChange'}>
              <Slider
                value={0.2}
                onValueChange={(val: number) => {
                  setValue(val);
                }}
              />
              <Text>{value}</Text>
            </TestCase>

            <TestCase itShould={'onSlidingStart'}>
              <Slider
                value={0.2}
                onSlidingStart={() => {
                  setPressValue('is pressing slider!!!');
                }}
              />
              <Text>{pressValue}</Text>
            </TestCase>

            <TestCase itShould={'onSlidingComplete'}>
              <Slider
                value={0.2}
                onSlidingComplete={() => {
                  setReleasedValue('is released slider!!!');
                }}
              />
              <Text>{releasedValue}</Text>
            </TestCase>

            <TestCase itShould={'style'}>
              <Slider value={0.2} style={styles.style} />
            </TestCase>

            <TestCase itShould={'trackStyle'}>
              <Slider value={0.2} trackStyle={styles.trackStyle} />
            </TestCase>

            <TestCase itShould={'thumbStyle'}>
              <Slider value={0.2} thumbStyle={styles.thumbStyle} />
            </TestCase>

            <TestCase itShould={'thumbImage'}>
              <Slider
                value={0.2}
                thumbImage={require('./resources/slider.png')}
              />
            </TestCase>

            <TestCase itShould={'debugTouchArea'}>
              <Slider value={0.2} debugTouchArea={true} />
            </TestCase>

            <TestCase itShould={'animateTransitions'}>
              <Slider value={0.2} animateTransitions={true} />
            </TestCase>

            <TestCase itShould={'animationType & animationType'}>
              <Slider
                value={0.2}
                animateTransitions={true}
                animationType={'timing'}
              />
            </TestCase>

            <TestCase
              itShould={'animationType & animationType & animationConfig'}>
              <Slider
                value={animateValue}
                animateTransitions={true}
                animationType={'timing'}
                animationConfig={{
                  toValue: 1,
                  duration: 1500,
                  useNativeDriver: false,
                }}
              />
              <Button
                onPress={() => {
                  setAnimateValue(0.9);
                }}
                title="动画测试"
                color="#841584"
              />
            </TestCase>
          </TestSuite>
        </Tester>
      </View>
    </ScrollView>
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
    height: 3,
  },
  thumbStyle: {
    backgroundColor: '#F3F3F3',
    // width: 30,
    // height: 30,
    borderRadius: 15,
  },
});
