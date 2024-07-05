
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Slider } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const [changedValue, setChangedValue] = useState(0.15);
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0.5);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0.25);
  const [value4, setValue4] = useState(0.15);
  const [value5, setValue5] = useState(0.15);

  const onAfterChange = (value: any) => {
    setChangedValue(value);
  }

  return (
    <TestSuite name="SliderAntTest">
      <TestCase itShould="render a SliderTest">
        <View>
          <Text>Default settings</Text>
          <Slider value={value} onChange={(value: any) => setValue(value)} step={1} />
        </View>
      </TestCase>
      <TestCase itShould="render a SliderTest has defaultValue">
        <View>
          <Text>Initial value: 0.5</Text>
          <Slider defaultValue={value1} value={value1} onChange={(value: any) => setValue1(value)} step={1} />
        </View>
      </TestCase>
      <TestCase itShould="support min and max">
        <View>
          <Text>min: 0, max: 1</Text>
          <Slider
            min={0}
            max={1}
            step={1}
            value={value2}
            onChange={(value: any) => setValue2(value)}
          />
        </View>
      </TestCase>
      <TestCase itShould="support step">
        <View>
          <Text>step: 0.25</Text>
          <Slider step={0.25} value={value3} onChange={(value: any) => setValue3(value)} />
        </View>
      </TestCase>
      <TestCase itShould="support disabled">
        <View>
          <Slider disabled={true} defaultValue={0.25} step={1} />
        </View>
      </TestCase>
      <TestCase itShould="support onAfterChange()">
        <Text>onAfterChange value: {changedValue}</Text>
        <Slider
          defaultValue={value4}
          step={1}
          onChange={(value: any) => setValue4(value)}
          onAfterChange={(value: any) => onAfterChange(value)}
        />
      </TestCase>
      <TestCase itShould="support minimumTrackTintColor and maximumTrackTintColor">
        <View>
          <Slider
            step={1}
            defaultValue={value5}
            onChange={(value: any) => setValue5(value)}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
          />
        </View>
      </TestCase>
    </TestSuite>
  );
};