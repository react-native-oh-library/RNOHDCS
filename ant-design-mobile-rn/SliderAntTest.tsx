
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Slider, Icon } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default () => {
  const [value, setValue] = useState(1);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  const [value4, setValue4] = useState(1);
  const [value5, setValue5] = useState(5);
  const [value6, setValue6] = useState(5);
  const [value7, setValue7] = useState(1);
  const [value8, setValue8] = useState(5);
  const [value9, setValue9] = useState(0);
  const [defaultValue, setdefaultValue] = useState(5);
  const [defaultValue1, setdefaultValue1] = useState(3);
  const marks = {
    0: 0,
    20: 20,
    40: 40,
    60: 60,
    80: 80,
    100: 100,
  }

  return (
    <GestureHandlerRootView>
      <TestSuite name="SliderAntTest">
        <TestCase itShould="render a Slider min={1}, min={5}">
          <View>
            <Slider value={value} min={1} max={10} onChange={(value: any) => setValue(value)} step={1} />
            <Text>value:{value}</Text>
            <Slider value={value8} min={5} max={10} onChange={(value: any) => setValue8(value)} step={1} />
            <Text>value:{value8}</Text>
          </View>
        </TestCase>
        <TestCase itShould="render a Slider max={20}, max={10}">
          <View>
            <Slider value={value1} min={0} max={20} onChange={(value: any) => setValue1(value)} step={2} />
            <Text>value:{value1}</Text>
            <Slider value={value9} min={0} max={10} onChange={(value: any) => setValue9(value)} step={2} />
            <Text>value:{value9}</Text>
          </View>
        </TestCase>
        <TestCase itShould="render a Slider step={4}, step={2}">
          <View>
            <Slider value={value2} min={1} max={20} onChange={(value: any) => setValue2(value)} step={4} />
            <Text>value:{value2}</Text>
            <Slider value={value7} min={1} max={20} onChange={(value: any) => setValue7(value)} step={2} />
            <Text>value:{value7}</Text>
          </View>
        </TestCase>
        <TestCase itShould="render a Slider icon">
          <Slider icon={<Icon name='alipay-circle' />} />
        </TestCase>
        <TestCase itShould="render a Slider marks">
          <View>
            <Slider marks={marks} ticks step={20} />
          </View>
        </TestCase>
        <TestCase itShould="render a Slider value">
          <View>
            <Slider value={value3} min={1} max={20} onChange={(value: any) => setValue3(value)} step={2} />
            <Text>value:{value3}</Text>
          </View>
        </TestCase>
        <TestCase itShould="render a Slider defaultValue={5}, defaultValue={3}">
          <View>
            <Slider defaultValue={defaultValue} min={1} max={20} onChange={(value: any) => setdefaultValue(value)} step={2} />
            <Text>defaultValue:{defaultValue}</Text>
            <Slider defaultValue={defaultValue1} min={1} max={20} onChange={(value: any) => setdefaultValue1(value)} step={2} />
            <Text>defaultValue:{defaultValue1}</Text>
          </View>
        </TestCase>
        <TestCase itShould="render a Slider disabled={true}, disabled={false}">
          <View>
            <Slider disabled={true} min={1} max={20} />
            <Slider disabled={false} value={value4} min={1} max={20} onChange={(value: any) => setValue4(value)} />
          </View>
        </TestCase>
        <TestCase itShould="render a Slider onChange()" initialState={false}
          arrange={({ setState }: any) =>
            <Slider value={value5} min={1} max={20} onChange={(value: any) => { setValue5(value); setState(true); }} />
          }
          assert={({ expect, state }) => {
            expect(state).to.be.eq(true);
          }}>
        </TestCase>
        <TestCase itShould="render a Slider onAfterChange()" initialState={false}
          arrange={({ setState }: any) =>
            <Slider value={value6} min={1} max={20} onAfterChange={(value: any) => { setValue6(value); setState(true); }} />
          }
          assert={({ expect, state }) => {
            expect(state).to.be.eq(true);
          }}>
        </TestCase>
        <TestCase itShould="render a Slider range={true}, range={false}">
          <Slider min={1} max={20} range={true} />
          <Slider min={1} max={20} range={false} />
        </TestCase>
        <TestCase itShould="render a Slider style={{backgroundColor:'pink'}}">
          <Slider min={1} max={20} style={{ backgroundColor: 'pink' }} />
        </TestCase>
        <TestCase itShould="render a Slider styles={{ trackContianer: { backgroundColor: 'aqua' } }}">
          <Slider min={1} max={20} styles={{ trackContianer: { backgroundColor: 'aqua' } }} />
        </TestCase>
        <TestCase itShould="render a Slider ticks={true},ticks={false}">
          <Slider min={1} max={20} ticks={true} />
          <Slider min={1} max={20} ticks={false} />
        </TestCase>
      </TestSuite>
    </GestureHandlerRootView>
  );
};