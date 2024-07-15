
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Slider } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [value, setValue] = useState(1);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  const [value4, setValue4] = useState(1);
  const [value5, setValue5] = useState(5);
  const [value6, setValue6] = useState(5);

  return (
    <TestSuite name="SliderAntTest">
      <TestCase itShould="render a Slider min={1}">
        <View>
          <Slider value={value} min={1} max={10} onChange={(value: any) => setValue(value)} step={1} />
        </View>
      </TestCase>
      <TestCase itShould="render a Slider max={20}">
        <View>
          <Slider value={value1} min={1} max={20} onChange={(value: any) => setValue1(value)} step={2} />
        </View>
      </TestCase>
      <TestCase itShould="render a Slider step={4}">
        <View>
          <Slider value={value2} min={1} max={20} onChange={(value: any) => setValue2(value)} step={4} />
          <Text>value:{value2}</Text>
        </View>
      </TestCase>
      <TestCase itShould="render a Slider value">
        <View>
          <Slider value={value3} min={1} max={20} onChange={(value: any) => setValue3(value)} step={2} />
          <Text>value:{value3}</Text>
        </View>
      </TestCase>
      <TestCase itShould="render a Slider defaultValue={5}">
        <View>
          <Slider defaultValue={5} min={1} max={20} onChange={(value: any) => setValue4(value)} step={2} />
        </View>
      </TestCase>
      <TestCase itShould="render a Slider disabled={true}">
        <View>
          <Slider disabled={true} min={1} max={20} />
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
      <TestCase itShould="render a Slider maximumTrackTintColor='red'">
        <View>
          <Slider min={1} max={20} defaultValue={4} maximumTrackTintColor='red' />
        </View>
      </TestCase>
      <TestCase itShould="render a Slider  minimumTrackTintColor='blue'">
        <View>
          <Slider min={1} max={20} defaultValue={4} minimumTrackTintColor='blue' />
        </View>
      </TestCase>
    </TestSuite>
  );
};