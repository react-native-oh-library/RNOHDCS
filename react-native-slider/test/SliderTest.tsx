import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native';
import Slider from 'react-native-slider';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export default function SliderTest() {
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
              <TestCase itShould={'value: 默认值'}>
                <Slider value={0.2} />
              </TestCase>

              <TestCase itShould={'disabled: 禁用'}>
                <Slider disabled={isDisabled} />
                <Button
                    title={isDisabled?'解开禁用':'禁用'}
                    onPress={() => {
                      setIsDisabled(!isDisabled);
                    }}></Button>
              </TestCase>

              <TestCase itShould={'minimumValue: 初始化最小值(当初始值小于初始化最小值)'}>
                <Slider minimumValue={0.5} value={0.2} />
              </TestCase>

              <TestCase itShould={'maximumValue: 初始化最大值(当初始值大于初始化最大值)'}>
                <Slider maximumValue={0.5} value={0.8} />
              </TestCase>

              <TestCase itShould={'step: 步长'}>
                <Slider value={0.2} step={0.3} />
              </TestCase>

              <TestCase
                  itShould={
                    'minimumTrackTintColor(左边轨道颜色) & maximumTrackTintColor(右边轨道颜色) & thumbTintColor(滑块颜色)'
                  }>
                <Slider
                    value={0.2}
                    minimumTrackTintColor="#1A9274"
                    maximumTrackTintColor="brown"
                    thumbTintColor="blue"
                />
              </TestCase>

              <TestCase itShould={'thumbTouchSize: 滑块触摸区域'}>
                <Slider value={0.2} thumbTouchSize={{width: 100, height: 100}} />
              </TestCase>

              <TestCase itShould={'onValueChange: 值改变时出发事件'}>
                <Slider
                    value={0.2}
                    onValueChange={(val: number) => {
                      setValue(val);
                    }}
                />
                <Text>{value}</Text>
              </TestCase>

              <TestCase itShould={'onSlidingStart: 按下滑块时触发事件'}>
                <Slider
                    value={0.2}
                    onSlidingStart={() => {
                      setPressValue('is pressing slider!!!');
                    }}
                />
                <Text>{pressValue}</Text>
              </TestCase>

              <TestCase itShould={'onSlidingComplete: 抬起滑块时触发事件'}>
                <Slider
                    value={0.2}
                    onSlidingComplete={() => {
                      setReleasedValue('is released slider!!!');
                    }}
                />
                <Text>{releasedValue}</Text>
              </TestCase>

              <TestCase itShould={'style: 容器样式'}>
                <Slider value={0.2} style={styles.style} />
              </TestCase>

              <TestCase itShould={'trackStyle: 轨道样式'}>
                <Slider value={0.2} trackStyle={styles.trackStyle} />
              </TestCase>

              <TestCase itShould={'thumbStyle: 滑块样式'}>
                <Slider value={0.2} />
              </TestCase>

              <TestCase itShould={'thumbImage: 滑块引入图片'}>
                <Slider
                    value={0.2}
                    thumbStyle={styles.thumbStyle}
                    thumbImage={require('../resources/slider.png')}
                />
              </TestCase>

              <TestCase itShould={'debugTouchArea: 显示触摸区域'}>
                <Slider value={0.2} debugTouchArea={true} />
              </TestCase>

              <TestCase itShould={'animateTransitions: 动画开关(需要与animationConfig一起配置才能看出效果)'}>
                <Slider value={0.2} animateTransitions={true} />
              </TestCase>

              <TestCase itShould={'animationType: 动画类型(必须使得animateTransitions为true,且需要与animationConfig一起配置才能看出效果)'}>
                <Slider
                    value={0.2}
                    animateTransitions={true}
                    animationType={'timing'}
                />
              </TestCase>

              <TestCase
                  itShould={'animationConfig: 动画配置(必须使得animateTransitions为true,可以与animationType配合使用)'}>
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
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
