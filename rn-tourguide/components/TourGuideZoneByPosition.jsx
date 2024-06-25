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
    key: 'tourKey:tourKey_002',
    value: { tourKey: 'tourKey_002' },
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
    key: 'top:20',
    value: { top: 20 },
  },
  {
    key: 'top:40',
    value: { top: 40 },
  },
  {
    key: 'left:10',
    value: { left: 20 },
  },
  {
    key: 'left:40',
    value: { left: 40 },
  },
  {
    key: 'right:20',
    value: { right: 20 },
  },
  {
    key: 'right:40',
    value: { right: 40 },
  },
  {
    key: 'bottom:20',
    value: { bottom: 20 },
  },
  {
    key: 'bottom:40',
    value: { bottom: 40 },
  },
  {
    key: 'width:80',
    value: { width: 80 },
  },
  {
    key: 'width:150',
    value: { width: 150 },
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
    key: 'containerStyle:{backgroundColor:"red"}',
    value: { containerStyle: { backgroundColor: 'red' } },
  },
  {
    key: 'containerStyle:{backgroundColor:"blue"}',
    value: { containerStyle: { backgroundColor: 'blue' } },
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
    key: 'text:test_001',
    value: { text: 'test_001' },
  },
  {
    key: 'text:test_002',
    value: { text: 'test_002' },
  },
]


export default function () {

  const [isVisible, setIsVisible] = useState(false);
  const [tourGuideZoneByPositionprops, setTourGuideZoneByPositionprops] = useState({});
  const hideVisible = () => {
    setIsVisible(false);
    let t = setTimeout(() => {
      clearTimeout(t);
      setIsVisible(true);
    }, 1000)
  };

  React.useEffect(() => {
    hideVisible();
  }, []);

  return (
    <Tester>
      <TestCase itShould='base demo'>
        <TourGuideProviderDemo isVisible={isVisible} tourGuideZoneByPositionprops={tourGuideZoneByPositionprops} />
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
                    setTourGuideZoneByPositionprops(item.value)
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
