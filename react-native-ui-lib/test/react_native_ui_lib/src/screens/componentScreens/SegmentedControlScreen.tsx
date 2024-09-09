import React, {useCallback, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  View,
  Colors,
  SegmentedControl,
  Assets,
  Spacings,
  BorderRadiuses,
  Typography,
  SegmentedControlItemProps,
} from 'react-native-ui-lib';
import {TestCase, TestSuite} from '@rnoh/testerino';

const segments: Record<string, Array<SegmentedControlItemProps>> = {
  first: [{label: 'Default'}, {label: 'Form'}],
  second: [
    {label: '1'},
    {label: '2'},
    {label: '3'},
    {label: Assets.emojis.airplane},
    {label: '5'},
  ],
  third: [
    {
      label: 'Very Long Label with icon',
      iconSource: Assets.icons.search,
      iconStyle: {marginLeft: Spacings.s1, width: 16, height: 16},
      iconOnRight: true,
    },
    {label: 'Short'},
  ],
  forth: [{label: 'With'}, {label: 'Custom'}, {label: 'Style'}],
  fifth: [{label: 'Full'}, {label: 'Width'}],
  sixth: [
    {label: 'Full'},
    {label: 'Width'},
    {label: 'With'},
    {label: 'A'},
    {label: 'Very Long Segment'},
  ],
  seventh: [{label: '$'}, {label: '%'}],
  eighth: [
    {label: 'Plus', iconSource: Assets.icons.plusSmall},
    {label: 'Minus', iconSource: Assets.icons.minusSmall},
    {label: 'Check', iconSource: Assets.icons.checkSmall},
  ],
};

const SegmentedControlScreen = () => {
  const onChangeIndex = useCallback((index: number) => {
    console.warn(
      'Index ' + index + ' of the second segmentedControl was pressed',
    );
  }, []);
  const [screenPreset, setScreenPreset] = useState(
    SegmentedControl.presets.DEFAULT,
  );

  return (
    <TestSuite name="SegmentedControl">
      <TestCase
        itShould="设置 onChangeIndex 属性, initialIndex: 2"
        initialState={false}
        arrange={({setState, reset}) => (
          <View padding-20 centerH>
            <SegmentedControl
              segments={segments.first}
              preset={screenPreset}
              onChangeIndex={index => {
                setScreenPreset(
                  index === 0
                    ? SegmentedControl.presets.DEFAULT
                    : SegmentedControl.presets.FORM,
                );
                setState(true);
              }}
              initialIndex={2}
            />
          </View>
        )}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase itShould="设置 outlineColor ">
        <View padding-20>
          <SegmentedControl
            containerStyle={styles.container}
            activeColor={Colors.$textDangerLight}
            outlineColor={'red'}
            segments={segments.third}
            preset={screenPreset}
          />
        </View>
      </TestCase>
      <TestCase itShould="设置 activeColor: red, borderRadius: 20, backgroundColor: yellow, activeBackgroundColor: blue, inactiveColor: green">
        <View padding-20>
          <SegmentedControl
            containerStyle={styles.container}
            segments={segments.forth}
            activeColor={'red'}
            borderRadius={20}
            backgroundColor={'yellow'}
            activeBackgroundColor={'blue'}
            inactiveColor={'green'}
            style={styles.customStyle}
            segmentsStyle={styles.customSegmentsStyle}
          />
        </View>
      </TestCase>
      <TestCase itShould="设置 segments ">
        <View padding-20>
        <SegmentedControl
            containerStyle={styles.container}
            segments={segments.fifth}
            preset={screenPreset}
          />
          <SegmentedControl
            containerStyle={styles.container}
            segments={segments.sixth}
            preset={screenPreset}
          />
        </View>
      </TestCase>
    </TestSuite>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  customStyle: {
    height: 50,
    width: 300,
  },
  customSegmentsStyle: {
    height: 50,
  },
  customTypography: {
    ...Typography.text80BO,
  },
});

export default SegmentedControlScreen;
