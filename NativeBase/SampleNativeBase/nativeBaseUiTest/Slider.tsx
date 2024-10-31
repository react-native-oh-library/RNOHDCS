import {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Image, Alert} from 'react-native';
import {Slider, FormControl, Icon, Box} from 'native-base';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {
  background,
  color,
} from 'native-base/lib/typescript/theme/styled-system';

const SliderTest = () => {
  const [onChangeValue, setOnChangeValue] = useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = useState(70);
  return (
    <>
      <Tester>
        <ScrollView style={styles.content}>
          <TestSuite name="onChange">
            <TestCase itShould="onChange" tags={['dev']}>
              <View style={styles.section}>
                <Text>onChange</Text>
                <Text style={{textAlign: 'center'}}>
                  onChange - {onChangeValue}
                </Text>

                <View style={styles.subSection}>
                  <Slider
                    defaultValue={70}
                    colorScheme="cyan"
                    onChange={v => {
                      Alert.alert('执行onChange');
                      setOnChangeValue(Math.floor(v));
                    }}
                    sliderTrackHeight={20}
                    orientation="horizontal"
                    accessibilityLabel="Volume control slider">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="onChangeEnd">
            <TestCase itShould="onChangeEnd" tags={['dev']}>
              <View style={styles.section}>
                <Text>onChangeEnd</Text>
                <Text style={{textAlign: 'center'}}>onChangeEnd</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={70}
                    colorScheme="cyan"
                    sliderTrackHeight={20}
                    orientation="horizontal"
                    accessibilityLabel="Volume control slider"
                    onChangeEnd={v => {
                      Alert.alert('执行onChangeEnd');
                      v && setOnChangeEndValue(Math.floor(v));
                    }}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="defaultValue">
            <TestCase itShould="defaultValue-值80" tags={['dev']}>
              <View style={styles.section}>
                <Text>defaultValue</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    colorScheme="orange"
                    thumbSize={10}
                    sliderTrackHeight={10}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="value">
            <TestCase itShould="value-值50" tags={['dev']}>
              <View style={styles.section}>
                <Text>value</Text>
                <View style={styles.subSection}>
                  <Slider
                    value={50}
                    colorScheme="orange"
                    thumbSize={10}
                    sliderTrackHeight={10}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isDisabled">
            <TestCase itShould="isDisabled" tags={['dev']}>
              <View style={styles.section}>
                <Text>isDisabled-true</Text>
                <View style={styles.subSection}>
                  <Slider defaultValue={80} colorScheme="orange" isDisabled>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
              <View style={styles.section}>
                <Text>defaultValue-false</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    colorScheme="orange"
                    isDisabled={false}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_disabled">
            <TestCase
              itShould="_disabled-值{background: 'amber.800'}"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>_disabled</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    colorScheme="orange"
                    isDisabled
                    _disabled={{background: 'amber.800'}}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isReversed">
            <TestCase itShould="isReversed" tags={['dev']}>
              <View style={styles.section}>
                <Text>isReversed-true</Text>
                <View style={styles.subSection}>
                  <Slider defaultValue={80} isReversed colorScheme="orange">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
              <View style={styles.section}>
                <Text>isReversed-false</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    colorScheme="orange"
                    isReversed={false}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="thumbSize">
            <TestCase itShould="thumbSize-值20" tags={['dev']}>
              <View style={styles.section}>
                <Text>thumbSize</Text>
                <View style={styles.subSection}>
                  <Slider defaultValue={80} thumbSize={20} colorScheme="orange">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="sliderTrackHeight">
            <TestCase itShould="sliderTrackHeight-值20" tags={['dev']}>
              <View style={styles.section}>
                <Text>sliderTrackHeight</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    thumbSize={10}
                    sliderTrackHeight={20}
                    colorScheme="orange">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="isReadOnly">
            <TestCase itShould="isReadOnly" tags={['dev']}>
              <View style={styles.section}>
                <Text>isReadOnly-true</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    isReadOnly
                    colorScheme="orange"
                    isDisabled>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
              <View style={styles.section}>
                <Text>isReadOnly-false</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    colorScheme="orange"
                    isReadOnly={false}
                    isDisabled={false}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_readOnly">
            <TestCase
              itShould="_readOnly-值{background: 'amber.900'}"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>_readOnly</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    isReadOnly
                    _readOnly={{background: 'amber.900'}}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="orientation">
            <TestCase itShould="orientation" tags={['dev']}>
              <View style={styles.section}>
                <Text>orientation-horizontal</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    colorScheme="orange"
                    orientation="horizontal">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
              <View style={styles.section}>
                <Text>orientation='vertical'</Text>
                <View style={(styles.subSection, styles.Sliderheight)}>
                  <Slider
                    style={styles.Sliderheight}
                    defaultValue={80}
                    colorScheme="orange"
                    orientation="vertical">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="accessibilityLabel">
            <TestCase itShould="accessibilityLabel-不生效" tags={['dev']}>
              <View style={styles.section}>
                <Text>accessibilityLabel</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    colorScheme="orange"
                    accessibilityLabel="这是滑块">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="colorScheme">
            <TestCase itShould="colorScheme" tags={['dev']}>
              <View style={styles.section}>
                <Text>colorScheme</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={70}
                    colorScheme="orange"
                    isDisabled
                    isReversed
                    thumbSize={10}
                    sliderTrackHeight={10}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Slider
                    defaultValue={70}
                    colorScheme="emerald"
                    isReadOnly
                    _disabled={true}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Slider defaultValue={70} colorScheme="indigo" step={5}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="测试Size">
            <TestCase itShould="测试Size" tags={['dev']}>
              <View style={styles.section}>
                <Text>测试Size</Text>
                <View style={styles.subSection}>
                  <Slider defaultValue={40} size="sm" _disabled={true}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Slider defaultValue={60} size="md">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Slider defaultValue={80} size="lg">
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="step">
            <TestCase itShould="step-值10" tags={['dev']}>
              <View style={styles.section}>
                <Text>step-拖动滑块看每次值的变化</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={80}
                    colorScheme="orange"
                    step={10}
                    onChangeEnd={v => {
                      Alert.alert('执行onChangeEnd-step-值10', v.toString());
                    }}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="_interactionBox">
            <TestCase
              itShould="_interactionBox-值{
                      bg: 'amber.600',
                      width: 10,
                      height: 10,
                    }"
              tags={['dev']}>
              <View style={styles.section}>
                <Text>_interactionBox</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={40}
                    size="sm"
                    _interactionBox={{
                      bg: 'amber.600',
                      width: 10,
                      height: 10,
                    }}
                    onChangeEnd={v => {
                      // Alert.alert('执行_interactionBox', v.toString());
                    }}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="maxValue">
            <TestCase itShould="maxValue-50" tags={['dev']}>
              <View style={styles.section}>
                <Text>maxValue-滑动滑块到最大值</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={40}
                    size="sm"
                    maxValue={50}
                    onChangeEnd={v => {
                      Alert.alert('执行onChangeEnd-maxValue', v.toString());
                    }}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>

          <TestSuite name="minValue">
            <TestCase itShould="minValue-50" tags={['dev']}>
              <View style={styles.section}>
                <Text>minValue-滑动滑块到最小值</Text>
                <View style={styles.subSection}>
                  <Slider
                    defaultValue={40}
                    size="sm"
                    minValue={50}
                    onChangeEnd={v => {
                      Alert.alert('执行minValue-minValue', v.toString());
                    }}>
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                </View>
              </View>
            </TestCase>
          </TestSuite>
        </ScrollView>
      </Tester>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  subSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
  },
  Sliderheight: {
    height: 50,
  },
});

export default SliderTest;
