import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider, Text, Icon } from '@rneui/themed';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

type SlidersComponentProps = {};

const Sliders: React.FunctionComponent<SlidersComponentProps> = () => {
  const [value, setValue] = useState(0);
  const [vertValue, setVertValue] = useState(0);

  const interpolate = (start: number, end: number) => {
    let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const color = () => {
    let r = interpolate(255, 0);
    let g = interpolate(0, 255);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <Tester>
      <TestSuite name='Slider'>
        <TestCase itShould='Slider Horizontal' tags={['C_API']}>
          <View style={[styles.contentView]}>
            <Slider
              value={value}
              onValueChange={setValue}
              maximumValue={100}
              minimumValue={0}
              step={1}
              allowTouchTrack
              trackStyle={{ height: 5, backgroundColor: 'transparent' }}
              thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
              thumbProps={{
                children: (
                  <Icon
                    name="heartbeat"
                    type="font-awesome"
                    size={20}
                    reverse
                    containerStyle={{ bottom: 20, right: 20 }}
                    color={color()}
                  />
                ),
              }}
            />
            <Text style={{ paddingTop: 20, color: '#000' }}>Value: {value}</Text>
          </View>
        </TestCase>
        <TestCase itShould='Slider Vertical' tags={['C_API']}>
          <View style={{ ...styles.verticalContent, height: 400 }}>
            <Slider
              value={vertValue}
              onValueChange={setVertValue}
              maximumValue={50}
              minimumValue={20}
              step={1}
              orientation="vertical"
              allowTouchTrack
              thumbStyle={{ height: 20, width: 16, backgroundColor: 'transparent' }}
              thumbProps={{
                children: (
                  <Icon
                    name="heartbeat"
                    type="font-awesome"
                    size={20}
                    reverse
                    containerStyle={{ bottom: 20, right: 20 }}
                    color="#f50"
                  />
                ),
              }}
            />
          </View>
          <Text style={{ paddingLeft: 25, color: '#000' }}>Value: {vertValue}</Text>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  contentView: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  verticalContent: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default Sliders;
