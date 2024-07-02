import React, { View, Text, useState } from 'react';
import { ScrollView, Button } from 'react-native';
import { Tester, TestCase } from '@rnoh/testerino';

import TourGuideProviderDemo from './TourGuideProviderDemo';

const props = [
  {
    key: 'zone:1',
    value: { zone: 1 },
  },
  {
    key: 'zone:2',
    value: { zone: 2 },
  },
  {
    key: 'tourKey:tourKey_001',
    value: { tourKey: 'tourKey_001' },
  },
  {
    key: 'isTourGuide:true',
    value: { isTourGuide: true },
  },
  {
    key: 'isTourGuide:false',
    value: { isTourGuide: false },
  },
  {
    key: 'text:test_001',
    value: { text: 'test_001' },
  },
  {
    key: 'text:test_002',
    value: { text: 'test_002' },
  },
  {
    key: 'shape:circle',
    value: { shape: 'circle' },
  },
  {
    key: 'shape:rectangle',
    value: { shape: 'rectangle' },
  },
  {
    key: 'shape:circle_and_keep',
    value: { shape: 'circle_and_keep' },
  },
  {
    key: 'shape:rectangle_and_keep',
    value: { shape: 'rectangle_and_keep' },
  },
  {
    key: 'maskOffset:20',
    value: { maskOffset: 20 },
  },
  {
    key: 'maskOffset:50',
    value: { maskOffset: 50 },
  },
  {
    key: 'borderRadius:10',
    value: { borderRadius: 10 },
  },
  {
    key: 'borderRadius:40',
    value: { borderRadius: 40 },
  },

  {
    key: 'keepTooltipPosition:false',
    value: { keepTooltipPosition: false },
  },
  {
    key: 'keepTooltipPosition:true',
    value: { keepTooltipPosition: true },
  },
  {
    key: 'tooltipBottomOffset:10',
    value: { tooltipBottomOffset: 10 },
  },
  {
    key: 'tooltipBottomOffset:40',
    value: { tooltipBottomOffset: 40 },
  },
  {
    key: 'borderRadiusObject:{topLeft:5}',
    value: { borderRadiusObject: { topLeft: 5 } },
  },
  {
    key: 'borderRadiusObject:{topLeft:20}',
    value: { borderRadiusObject: { topLeft: 20 } },
  },
  {
    key: 'borderRadiusObject:{topRight:5}',
    value: { borderRadiusObject: { topRight: 5 } },
  },
  {
    key: 'borderRadiusObject:{topRight:20}',
    value: { borderRadiusObject: { topRight: 20 } },
  },
  {
    key: 'borderRadiusObject:{bottomLeft:5}',
    value: { borderRadiusObject: { bottomLeft: 5 } },
  },
  {
    key: 'borderRadiusObject:{bottomLeft:20}',
    value: { borderRadiusObject: { bottomLeft: 20 } },
  },
  {
    key: 'borderRadiusObject:{bottomRight:5}',
    value: { borderRadiusObject: { bottomRight: 5 } },
  },
  {
    key: 'borderRadiusObject:{bottomRight:20}',
    value: { borderRadiusObject: { bottomRight: 20 } },
  },
  {
    key: 'style:{backgroundColor:"#9FA8DA"}',
    value: {
      style: {
        backgroundColor: '#9FA8DA',
      },
    }
  },
  {
    key: 'style:{backgroundColor:"#9FA8DA",borderWidth:10}',
    value: {
      style: {
        backgroundColor: '#9FA8DA',
        borderWidth: 10,
      },
    }
  },
]


export default function () {

  const [isVisible, setIsVisible] = useState(true);
  const [tourGuideZoneprops, setTourGuideZoneprops] = useState({});
  const hideVisible = () => {
    setIsVisible(false);
    let t = setTimeout(() => {
      clearTimeout(t);
      setIsVisible(true);
    }, 1000)
  };
  return (
    <Tester>
      <TestCase itShould='base demo'>
        <TourGuideProviderDemo isVisible={isVisible} tourGuideZoneprops={tourGuideZoneprops} />
      </TestCase>
      <ScrollView style={{ marginBottom: 350 }}>
        {
          props.map(item => {
            return (
              <TestCase
                key={item.key}
                itShould={item.key}
                tags={["C_API"]}
                initialState={0}
                arrange={({ setState }) =>
                  <Button onPress={() => {
                    hideVisible()
                    setTourGuideZoneprops(item.value)
                    setState(100)
                  }} title={item.key}></Button>
                }
                assert={({ expect, state }) => {
                  expect(state).to.be.eq(100);
                }}
              />
            )
          })
        }
      </ScrollView>
    </Tester>
  )
};
