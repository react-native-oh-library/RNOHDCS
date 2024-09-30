import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native';
import Slider from 'react-native-slider';
import {Tester, TestCase, TestSuite} from '@rnoh/testerino';

export default function SliderTest() {
  const [defaultValue1, setDefaultValue1] = useState(0.3);
  const [defaultValue2, setDefaultValue2] = useState(0.8);
  const [isDisabled, setIsDisabled] = useState(false);
  const [changeValue, setChangeValue] = useState(0.2);
  const [stepValue, setStepValue] = useState(0);
  const [stepValue1, setStepValue1] = useState(0);
  const [pressValue, setPressValue] = useState('');
  const [releasedValue, setReleasedValue] = useState('');
  const [animateValue, setAnimateValue] = useState(0);
  const [animateValue1, setAnimateValue1] = useState(0.8);
  const [transitionValue, setTransitionValue] = useState(0);
  const [transitionValue1, setTransitionValue1] = useState(0);
  const [typeValue, setTpeValue] = useState(0);
  const [typeValue1, setTpeValue1] = useState(0);
  return (
      <ScrollView>
        <View>
          <Tester>
            <TestSuite name={'sliderTest'}>
              <TestCase itShould={'value(默认值): 0.3'}>
                <Slider
                    value={defaultValue1}
                    onValueChange={(val: number) => {
                      setDefaultValue1(val);
                    }}/>
                <Text>当前值：{Math.round(defaultValue1 * 10) / 10}</Text>
              </TestCase>

              <TestCase itShould={'value(默认值): 0.8'}>
                <Slider value={defaultValue2}
                        onValueChange={(val: number) => {
                          setDefaultValue2(val);
                        }}/>
                <Text>当前值：{Math.round(defaultValue2 * 10) / 10}</Text>
              </TestCase>

              <TestCase itShould={'disabled: 禁用'}>
                <Slider disabled={isDisabled} />
                <Button
                    title={isDisabled?'解开禁用':'禁用'}
                    onPress={() => {
                      setIsDisabled(!isDisabled);
                    }}></Button>
              </TestCase>

              <TestCase itShould={'minimumValue: 初始化最小值：0.5(当初始值小于初始化最小值,初始值：0.2)'}>
                <Slider minimumValue={0.5} value={0.2} />
              </TestCase>
              <TestCase itShould={'minimumValue: 初始化最小值：0.2(当初始值大于初始化最小值,初始值：0.5)'}>
                <Slider minimumValue={0.2} value={0.5} />
              </TestCase>

              <TestCase itShould={'maximumValue: 初始化最大值：0.5(当初始值大于初始化最大值,初始值：0.8)'}>
                <Slider maximumValue={0.5} value={0.8} />
              </TestCase>
              <TestCase itShould={'maximumValue: 初始化最大值：0.8(当初始值大于初始化最大值,初始值：0.5)'}>
                <Slider maximumValue={0.8} value={0.5} />
              </TestCase>

              <TestCase itShould={'step(步长): 0.3'}>
                <Slider
                    value={stepValue}
                    step={0.3}
                    onValueChange={(val: number) => {
                      setStepValue(val);
                    }}
                />
                <Text>{Math.round(stepValue * 10) / 10}</Text>
              </TestCase>
              <TestCase itShould={'step(步长): 0.1'}>
                <Slider
                    value={stepValue1}
                    step={0.1}
                    onValueChange={(val: number) => {
                      setStepValue1(val);
                    }}
                />
                <Text>{Math.round(stepValue1 * 10) / 10}</Text>
              </TestCase>

              <TestCase
                  itShould={
                    'minimumTrackTintColor(左边轨道颜色):#FF44AA & maximumTrackTintColor(右边轨道颜色):#FF3333 & thumbTintColor(滑块颜色):#FF7744'
                  }>
                <Slider
                    value={0.2}
                    minimumTrackTintColor="#FF44AA"
                    maximumTrackTintColor="#FF3333"
                    thumbTintColor="#FF7744"
                />
              </TestCase>
              <TestCase
                  itShould={
                    'minimumTrackTintColor(左边轨道颜色):#CCFF33 & maximumTrackTintColor(右边轨道颜色):#33FF33 & thumbTintColor(滑块颜色):#33FFFF'
                  }>
                <Slider
                    value={0.2}
                    minimumTrackTintColor="#CCFF33"
                    maximumTrackTintColor="#33FF33"
                    thumbTintColor="#33FFFF"
                />
              </TestCase>

              <TestCase itShould={'thumbTouchSize(滑块触摸区域): width: 100, height: 100'}>
                <Slider value={0.2} thumbTouchSize={{width: 100, height: 100}} />
              </TestCase>
              <TestCase itShould={'thumbTouchSize(滑块触摸区域): width: 30, height: 30'}>
                <Slider value={0.2} thumbTouchSize={{width: 30, height: 30}} />
              </TestCase>

              <TestCase
                  itShould={'onValueChange(值改变时触发事件),默认值为：0.2'}
                  initialState={0.2}
                  arrange={({setState}) => (
                      <View>
                        <Slider
                            value={changeValue}
                            onValueChange={(val: number) => {
                              setState(val);
                              setChangeValue(val);
                            }}
                        />
                        <Text>{Math.round(changeValue * 10) / 10}</Text>
                      </View>
                  )}
                  assert={({expect, state}) => {
                    expect(state).not.to.be.eq(0.2)
                  }}
              ></TestCase>

              <TestCase
                  itShould={'onSlidingStart: 按下滑块时触发事件'}
                  initialState={''}
                  arrange={({setState}) => (
                      <View>
                        <Slider
                            value={defaultValue1}
                            onSlidingStart={(val: number) => {
                              setState('is pressing slider!!!');
                              setPressValue('is pressing slider!!!');
                            }}
                        />
                        <Text>{pressValue}</Text>
                      </View>
                  )}
                  assert={({expect, state}) => {
                    expect(state).not.to.be.eq('')
                  }}
              >
              </TestCase>

              <TestCase
                  itShould={'onSlidingComplete: 抬起滑块时触发事件'}
                  initialState={''}
                  arrange={({setState}) => (
                      <View>
                        <Slider
                            value={defaultValue1}
                            onSlidingComplete={(val: number) => {
                              setState('is released slider!!!');
                              setReleasedValue('is released slider!!!');
                            }}
                        />
                        <Text>{releasedValue}</Text>
                      </View>
                  )}
                  assert={({expect, state}) => {
                    expect(state).not.to.be.eq('')
                  }}
              >
              </TestCase>

              <TestCase itShould={'style(容器样式): backgroundColor: #EECBA8'}>
                <Slider value={0} style={{backgroundColor: '#EECBA8'}} />
              </TestCase>
              <TestCase itShould={'style(容器样式): backgroundColor: #00FF99'}>
                <Slider value={0} style={{backgroundColor: '#00FF99'}} />
              </TestCase>

              <TestCase itShould={'trackStyle(轨道样式): backgroundColor: #EECBA8'}>
                <Slider value={0.2} trackStyle={{backgroundColor: '#EECBA8'}} />
              </TestCase>
              <TestCase itShould={'trackStyle(轨道样式): backgroundColor: #00FF99'}>
                <Slider value={0.2} trackStyle={{backgroundColor: '#00FF99'}} />
              </TestCase>

              <TestCase itShould={'thumbStyle(滑块样式): backgroundColor: #EECBA8'}>
                <Slider value={0.2} thumbStyle={{backgroundColor: '#EECBA8'}} />
              </TestCase>
              <TestCase itShould={'thumbStyle(滑块样式): backgroundColor: #00FF99'}>
                <Slider value={0.2} thumbStyle={{backgroundColor: '#00FF99'}}/>
              </TestCase>

              <TestCase itShould={'thumbImage: 滑块引入图片'}>
                <Slider
                    value={0.2}
                    thumbStyle={styles.thumbStyle}
                    thumbImage={require('../resources/slider.png')}
                />
              </TestCase>

              <TestCase itShould={'debugTouchArea(显示触摸区域): true'}>
                <Slider value={0.2} debugTouchArea={true} />
              </TestCase>
              <TestCase itShould={'debugTouchArea(显示触摸区域): false'}>
                <Slider value={0.2} debugTouchArea={false} />
              </TestCase>

              <TestCase
                  itShould={'animateTransitions(动画开关): false'}>
                <Slider
                    value={transitionValue}
                    animateTransitions={false}
                    animationType={'timing'}
                    animationConfig={{
                      toValue: 1,
                      duration: 1500,
                      useNativeDriver: false,
                    }}
                />
                <Button
                    onPress={() => {
                      setTransitionValue(1);
                    }}
                    title="动画测试"
                    color="#841584"
                />
              </TestCase>
              <TestCase
                  itShould={'animateTransitions(动画开关): true'}>
                <Slider
                    value={transitionValue1}
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
                      setTransitionValue1(1);
                    }}
                    title="动画测试"
                    color="#841584"
                />
              </TestCase>

              <TestCase
                  itShould={'animationType(动画类型): spring'}>
                <Slider
                    value={typeValue}
                    animateTransitions={true}
                    animationType={'spring'}
                    animationConfig={{
                      toValue: 1,
                      duration: 1500,
                      useNativeDriver: false,
                    }}
                />
                <Button
                    onPress={() => {
                      setTpeValue(1);
                    }}
                    title="动画测试"
                    color="#841584"
                />
              </TestCase>
              <TestCase
                  itShould={'animationType(动画类型): timing'}>
                <Slider
                    value={typeValue1}
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
                      setTpeValue1(1);
                    }}
                    title="动画测试"
                    color="#841584"
                />
              </TestCase>

              <TestCase
                  itShould={'animationConfig(动画配置):从0到1'}>
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
                      setAnimateValue(1);
                    }}
                    title="动画测试"
                    color="#841584"
                />
              </TestCase>
              <TestCase
                  itShould={'animationConfig(动画配置):从0.8到0.2'}>
                <Slider
                    value={animateValue1}
                    animateTransitions={true}
                    animationType={'timing'}
                    animationConfig={{
                      toValue: 0.2,
                      duration: 1500,
                      useNativeDriver: false,
                    }}
                />
                <Button
                    onPress={() => {
                      setAnimateValue1(0.2);
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
